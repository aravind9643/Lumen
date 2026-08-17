import { describe, expect, it } from 'vitest'
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Quiz } from '../../src/components/content/Quiz'
import { ProgressProvider } from '../../src/lib/progress'

const props = {
  question: 'What is 2 + 2?',
  options: ['3', '4', '5', '6'],
  answer: 1,
  explanation: 'Two plus two is four.',
  tutorialSlug: 't',
  lessonSlug: 'l',
  blockIndex: 0,
}

function renderQuiz(overrides: Partial<typeof props> = {}) {
  return render(
    <ProgressProvider>
      <Quiz {...props} {...overrides} />
    </ProgressProvider>,
  )
}

describe('Quiz', () => {
  it('renders the question and every option', () => {
    renderQuiz()
    expect(screen.getByText('What is 2 + 2?')).toBeInTheDocument()
    expect(screen.getAllByRole('radio')).toHaveLength(4)
  })

  it('shows no verdict before answering', () => {
    renderQuiz()
    expect(screen.queryByText(/Correct\./)).not.toBeInTheDocument()
    expect(screen.queryByText(/Not quite\./)).not.toBeInTheDocument()
  })

  it('marks the right answer correct and shows the explanation', async () => {
    const user = userEvent.setup()
    renderQuiz()
    await user.click(screen.getAllByRole('radio')[1])
    expect(screen.getByText(/Correct\./)).toBeInTheDocument()
    expect(screen.getByText('Two plus two is four.')).toBeInTheDocument()
  })

  it('marks a wrong answer incorrect but still explains', async () => {
    const user = userEvent.setup()
    renderQuiz()
    await user.click(screen.getAllByRole('radio')[0])
    expect(screen.getByText(/Not quite\./)).toBeInTheDocument()
    expect(screen.getByText('Two plus two is four.')).toBeInTheDocument()
  })

  it('announces the outcome in a live region', async () => {
    // Colour alone conveyed the result before this.
    const user = userEvent.setup()
    const { container } = renderQuiz()
    await user.click(screen.getAllByRole('radio')[1])
    const live = container.querySelector('[role="status"][aria-live="polite"]')
    expect(live).toBeTruthy()
    expect(live).toHaveTextContent(/Correct\./)
  })

  it('labels the correct option for screen readers', async () => {
    const user = userEvent.setup()
    renderQuiz()
    await user.click(screen.getAllByRole('radio')[0])
    expect(screen.getByText(/correct answer/)).toBeInTheDocument()
    expect(screen.getByText(/your answer, incorrect/)).toBeInTheDocument()
  })

  it('uses aria-disabled rather than disabled, so focus is not lost', async () => {
    const user = userEvent.setup()
    renderQuiz()
    await user.click(screen.getAllByRole('radio')[1])
    for (const radio of screen.getAllByRole('radio')) {
      expect(radio).toHaveAttribute('aria-disabled', 'true')
      expect(radio).not.toBeDisabled()
    }
  })

  it('ignores further clicks once answered', async () => {
    const user = userEvent.setup()
    renderQuiz()
    await user.click(screen.getAllByRole('radio')[1])
    await user.click(screen.getAllByRole('radio')[0])
    expect(screen.getByText(/Correct\./)).toBeInTheDocument()
    expect(screen.queryByText(/Not quite\./)).not.toBeInTheDocument()
  })

  it('can be retried', async () => {
    const user = userEvent.setup()
    renderQuiz()
    await user.click(screen.getAllByRole('radio')[0])
    await user.click(screen.getByRole('button', { name: /try again/i }))

    // Options become answerable again immediately. The verdict text lingers
    // briefly while framer-motion plays its exit animation, so assert on the
    // interactive state rather than racing the animation.
    expect(screen.getAllByRole('radio')[0]).toHaveAttribute('aria-disabled', 'false')
    await waitForElementToBeRemoved(() => screen.queryByText(/Not quite\./))
  })

  it('persists the answer across remounts of the same quiz', async () => {
    const user = userEvent.setup()
    const { unmount } = renderQuiz()
    await user.click(screen.getAllByRole('radio')[1])
    expect(screen.getByText(/Correct\./)).toBeInTheDocument()
    unmount()

    renderQuiz()
    expect(screen.getByText(/Correct\./)).toBeInTheDocument()
  })
})
