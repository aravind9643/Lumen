import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BlockRenderer } from '../../src/components/content/BlockRenderer'
import type { Block } from '../../src/content/types'

const draw = (blocks: Block[]) =>
  render(<BlockRenderer blocks={blocks} tutorialSlug="t" lessonSlug="l" />)

describe('BlockRenderer', () => {
  it('renders headings at the requested level with an anchor id', () => {
    draw([{ type: 'heading', level: 2, text: 'My Section' }])
    const h = screen.getByRole('heading', { level: 2 })
    expect(h).toHaveTextContent('My Section')
    expect(h.id).toBe('my-section')
  })

  it('renders inline code, bold, and italic inside prose', () => {
    const { container } = draw([
      { type: 'paragraph', text: 'Use `npm run build` and **stop**, not *maybe*.' },
    ])
    expect(container.querySelector('code')).toHaveTextContent('npm run build')
    expect(container.querySelector('strong')).toHaveTextContent('stop')
    expect(container.querySelector('em')).toHaveTextContent('maybe')
  })

  it('renders ordered and unordered lists', () => {
    const { container: ul } = draw([{ type: 'list', items: ['one', 'two'] }])
    expect(ul.querySelector('ul')).toBeTruthy()
    const { container: ol } = draw([{ type: 'list', ordered: true, items: ['one'] }])
    expect(ol.querySelector('ol')).toBeTruthy()
  })

  it('renders a table with headers and cells', () => {
    draw([{ type: 'table', headers: ['A', 'B'], rows: [['1', '2']] }])
    expect(screen.getByRole('columnheader', { name: 'A' })).toBeInTheDocument()
    expect(screen.getByRole('cell', { name: '1' })).toBeInTheDocument()
  })

  it('renders each callout kind with a default label', () => {
    draw([{ type: 'callout', kind: 'warning', text: 'careful' }])
    expect(screen.getByText('Warning')).toBeInTheDocument()
    expect(screen.getByText('careful')).toBeInTheDocument()
  })

  it('prefers an explicit callout title over the default label', () => {
    draw([{ type: 'callout', kind: 'info', title: 'Custom', text: 'body' }])
    expect(screen.getByText('Custom')).toBeInTheDocument()
    expect(screen.queryByText('Note')).not.toBeInTheDocument()
  })

  it('renders a definition with both plain and formal wording', () => {
    draw([{ type: 'definition', term: 'Gradient', plain: 'a slope', formal: 'the derivative' }])
    expect(screen.getByText('Gradient')).toBeInTheDocument()
    expect(screen.getByText('a slope')).toBeInTheDocument()
    expect(screen.getByText(/the derivative/)).toBeInTheDocument()
  })

  it('renders an analogy with its default heading', () => {
    draw([{ type: 'analogy', text: 'like a bicycle' }])
    expect(screen.getByText('Think of it like this')).toBeInTheDocument()
    expect(screen.getByText('like a bicycle')).toBeInTheDocument()
  })

  it('renders a recap', () => {
    draw([{ type: 'recap', points: ['we covered X'] }])
    expect(screen.getByText('Where we left off')).toBeInTheDocument()
    expect(screen.getByText('we covered X')).toBeInTheDocument()
  })

  it('renders steps and comparisons', () => {
    draw([{ type: 'steps', items: [{ title: 'First', text: 'do this' }] }])
    expect(screen.getByText('First')).toBeInTheDocument()

    draw([
      {
        type: 'comparison',
        left: { label: 'Left', items: ['a'] },
        right: { label: 'Right', items: ['b'] },
      },
    ])
    expect(screen.getByText('Left')).toBeInTheDocument()
    expect(screen.getByText('Right')).toBeInTheDocument()
  })

  it('renders code with a filename and line numbers', () => {
    const { container } = draw([
      { type: 'code', language: 'python', filename: 'x.py', code: 'a = 1\nb = 2' },
    ])
    expect(screen.getByText('x.py')).toBeInTheDocument()
    expect(screen.getByText('python')).toBeInTheDocument()
    expect(container.textContent).toContain('a = 1')
  })

  it('escapes HTML in code rather than injecting it', () => {
    // The highlighter writes through dangerouslySetInnerHTML.
    const { container } = draw([
      { type: 'code', language: 'html', code: '<script>alert(1)</script>' },
    ])
    expect(container.querySelector('script')).toBeNull()
    expect(container.textContent).toContain('<script>alert(1)</script>')
  })

  it('keeps an exercise solution hidden until requested', async () => {
    const user = userEvent.setup()
    draw([{ type: 'exercise', prompt: 'Try this', hint: 'a nudge', solution: 'THE ANSWER' }])
    expect(screen.queryByText('THE ANSWER')).not.toBeInTheDocument()

    const toggle = screen.getByRole('button', { name: /show solution/i })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(screen.getByText('THE ANSWER')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /hide solution/i })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
  })

  it('keeps keyPoints/steps/comparison out of the heading outline', () => {
    // These three used to hardcode <h4>, so an <h2> immediately followed by
    // one of them skipped straight to h4 in the document outline — a real
    // accessibility defect for screen-reader heading navigation. They are
    // section labels, not outline headings, so no case here should introduce
    // an h3 or h4 at all.
    draw([
      { type: 'heading', level: 2, text: 'A Section' },
      { type: 'keyPoints', title: 'Recap', points: ['one'] },
      { type: 'steps', items: [{ title: 'First step', text: 'do it' }] },
      {
        type: 'comparison',
        left: { label: 'Left side', items: ['a'] },
        right: { label: 'Right side', items: ['b'] },
      },
    ])
    expect(screen.queryByRole('heading', { level: 3 })).not.toBeInTheDocument()
    expect(screen.queryByRole('heading', { level: 4 })).not.toBeInTheDocument()
    // The labels are still present and still associate with their region.
    expect(screen.getByRole('group', { name: 'Recap' })).toBeInTheDocument()
    expect(screen.getByRole('group', { name: 'Left side' })).toBeInTheDocument()
    expect(screen.getByRole('group', { name: 'Right side' })).toBeInTheDocument()
    expect(screen.getByText('First step')).toBeInTheDocument()
  })

  it('gives every block type a renderer', () => {
    // A missing case would render nothing and fail silently.
    const all: Block[] = [
      { type: 'heading', level: 2, text: 'H' },
      { type: 'paragraph', text: 'P' },
      { type: 'list', items: ['L'] },
      { type: 'code', language: 'py', code: 'C' },
      { type: 'callout', kind: 'info', text: 'CO' },
      { type: 'table', headers: ['T'], rows: [['R']] },
      { type: 'quote', text: 'Q' },
      { type: 'divider' },
      { type: 'keyPoints', points: ['KP'] },
      { type: 'quiz', question: 'QZ', options: ['a', 'b'], answer: 0 },
      { type: 'steps', items: [{ title: 'S', text: 'st' }] },
      {
        type: 'comparison',
        left: { label: 'LL', items: ['x'] },
        right: { label: 'RR', items: ['y'] },
      },
      { type: 'definition', term: 'D', plain: 'def' },
      { type: 'analogy', text: 'AN' },
      { type: 'exercise', prompt: 'EX', solution: 's' },
      { type: 'recap', points: ['RC'] },
    ]
    const { container } = draw(all)
    for (const marker of ['H', 'P', 'L', 'CO', 'Q', 'KP', 'QZ', 'AN', 'EX', 'RC']) {
      expect(container.textContent, `block rendering "${marker}"`).toContain(marker)
    }
  })
})
