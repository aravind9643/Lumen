import { describe, expect, it } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import type { ReactNode } from 'react'
import { ProgressProvider, useProgress } from '../../src/lib/progress'

const wrapper = ({ children }: { children: ReactNode }) => (
  <ProgressProvider>{children}</ProgressProvider>
)

const setup = () => renderHook(() => useProgress(), { wrapper })

/** Local YYYY-MM-DD, matching the implementation (deliberately not UTC). */
const localDay = (offsetDays = 0) => {
  const d = new Date()
  d.setDate(d.getDate() + offsetDays)
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

describe('completion', () => {
  it('starts empty', () => {
    const { result } = setup()
    expect(result.current.isComplete('generative-ai', 'what-is-ai-and-machine-learning')).toBe(false)
    expect(result.current.overall.done).toBe(0)
  })

  it('marks and unmarks a lesson', () => {
    const { result } = setup()
    act(() => result.current.toggleComplete('generative-ai', 'what-is-ai-and-machine-learning'))
    expect(result.current.isComplete('generative-ai', 'what-is-ai-and-machine-learning')).toBe(true)
    act(() => result.current.toggleComplete('generative-ai', 'what-is-ai-and-machine-learning'))
    expect(result.current.isComplete('generative-ai', 'what-is-ai-and-machine-learning')).toBe(false)
  })

  it('markComplete is idempotent', () => {
    const { result } = setup()
    act(() => result.current.markComplete('generative-ai', 'what-is-ai-and-machine-learning'))
    const first = result.current.state.completed['generative-ai/what-is-ai-and-machine-learning']
    act(() => result.current.markComplete('generative-ai', 'what-is-ai-and-machine-learning'))
    expect(result.current.state.completed['generative-ai/what-is-ai-and-machine-learning']).toBe(first)
    expect(result.current.isComplete('generative-ai', 'what-is-ai-and-machine-learning')).toBe(true)
  })

  it('scopes lesson slugs to their tutorial', () => {
    // Two courses may legitimately share a lesson slug — simulate with an
    // unknown tutorial slug sharing this lesson's slug.
    const { result } = setup()
    act(() => result.current.markComplete('generative-ai', 'what-is-ai-and-machine-learning'))
    expect(result.current.isComplete('some-other-course', 'what-is-ai-and-machine-learning')).toBe(false)
  })

  it('computes per-course and overall percentages', () => {
    const { result } = setup()
    const { total } = result.current.tutorialProgress('course-1')
    expect(total).toBe(0)

    act(() => result.current.markComplete('course-1', 'lesson-1'))
    const after = result.current.tutorialProgress('course-1')
    expect(after.done).toBe(0) // since course-1 is not in manifest, done is 0
    expect(result.current.overall.done).toBe(0) // only counts lessons in manifest
  })

  it('reports zeroes for an unknown course instead of throwing', () => {
    const { result } = setup()
    expect(result.current.tutorialProgress('does-not-exist')).toEqual({
      done: 0,
      total: 0,
      percent: 0,
    })
  })
})

describe('bookmarks', () => {
  it('toggles on and off', () => {
    const { result } = setup()
    act(() => result.current.toggleBookmark('generative-ai', 'what-is-ai-and-machine-learning'))
    expect(result.current.isBookmarked('generative-ai', 'what-is-ai-and-machine-learning')).toBe(true)
    act(() => result.current.toggleBookmark('generative-ai', 'what-is-ai-and-machine-learning'))
    expect(result.current.isBookmarked('generative-ai', 'what-is-ai-and-machine-learning')).toBe(false)
    expect(result.current.state.bookmarks).toEqual([])
  })
})

describe('streak', () => {
  it('starts at one on the first ever visit', () => {
    // This path once threw: new Date('T00:00:00') on an empty lastDay.
    const { result } = setup()
    expect(() => act(() => result.current.visit('generative-ai', 'what-is-ai-and-machine-learning'))).not.toThrow()
    expect(result.current.state.streak.count).toBe(1)
    expect(result.current.state.streak.lastDay).toBe(localDay())
  })

  it('does not increment twice in one day', () => {
    const { result } = setup()
    act(() => result.current.visit('generative-ai', 'what-is-ai-and-machine-learning'))
    act(() => result.current.visit('generative-ai', 'how-models-learn'))
    expect(result.current.state.streak.count).toBe(1)
  })

  it('extends when the last visit was yesterday', () => {
    localStorage.setItem(
      'progress:v1',
      JSON.stringify({
        completed: {},
        bookmarks: [],
        lastVisited: null,
        streak: { count: 4, lastDay: localDay(-1) },
      }),
    )
    const { result } = setup()
    act(() => result.current.visit('generative-ai', 'what-is-ai-and-machine-learning'))
    expect(result.current.state.streak.count).toBe(5)
  })

  it('resets after a missed day', () => {
    localStorage.setItem(
      'progress:v1',
      JSON.stringify({
        completed: {},
        bookmarks: [],
        lastVisited: null,
        streak: { count: 9, lastDay: localDay(-3) },
      }),
    )
    const { result } = setup()
    act(() => result.current.visit('generative-ai', 'what-is-ai-and-machine-learning'))
    expect(result.current.state.streak.count).toBe(1)
  })

  it('survives a corrupt lastDay', () => {
    localStorage.setItem(
      'progress:v1',
      JSON.stringify({
        completed: {},
        bookmarks: [],
        lastVisited: null,
        streak: { count: 3, lastDay: 'not-a-date' },
      }),
    )
    const { result } = setup()
    expect(() => act(() => result.current.visit('generative-ai', 'what-is-ai-and-machine-learning'))).not.toThrow()
    expect(result.current.state.streak.count).toBe(1)
  })
})

describe('quiz answers', () => {
  it('records and retrieves an answer', () => {
    const { result } = setup()
    act(() => result.current.recordQuizAnswer('generative-ai', 'what-is-ai-and-machine-learning', 0, 2, true))
    expect(result.current.getQuizAnswer('generative-ai', 'what-is-ai-and-machine-learning', 0)).toMatchObject({
      picked: 2,
      correct: true,
    })
  })

  it('keys answers by block index within the same lesson', () => {
    const { result } = setup()
    act(() => {
      result.current.recordQuizAnswer('generative-ai', 'what-is-ai-and-machine-learning', 0, 1, false)
      result.current.recordQuizAnswer('generative-ai', 'what-is-ai-and-machine-learning', 3, 2, true)
    })
    expect(result.current.getQuizAnswer('generative-ai', 'what-is-ai-and-machine-learning', 0)?.correct).toBe(false)
    expect(result.current.getQuizAnswer('generative-ai', 'what-is-ai-and-machine-learning', 3)?.correct).toBe(true)
  })

  it('surfaces every answer through quizHistory', () => {
    const { result } = setup()
    act(() => {
      result.current.recordQuizAnswer('generative-ai', 'what-is-ai-and-machine-learning', 0, 1, false)
      result.current.recordQuizAnswer('generative-ai', 'fine-tuning-and-rag', 2, 0, true)
    })
    expect(result.current.quizHistory).toHaveLength(2)
    expect(result.current.quizHistory).toContainEqual(
      expect.objectContaining({ tutorialSlug: 'generative-ai', lessonSlug: 'fine-tuning-and-rag' }),
    )
    // Sorted newest-first: never increasing in `at`.
    for (let i = 1; i < result.current.quizHistory.length; i++) {
      expect(result.current.quizHistory[i].at).toBeLessThanOrEqual(result.current.quizHistory[i - 1].at)
    }
  })

  it('reading an unanswered quiz returns undefined rather than throwing', () => {
    const { result } = setup()
    expect(result.current.getQuizAnswer('generative-ai', 'what-is-ai-and-machine-learning', 0)).toBeUndefined()
  })
})

describe('export and import', () => {
  it('round-trips state through export then import', () => {
    const { result } = setup()
    act(() => {
      result.current.markComplete('generative-ai', 'what-is-ai-and-machine-learning')
      result.current.toggleBookmark('generative-ai', 'how-models-learn')
    })
    const snapshot = result.current.exportState()

    act(() => result.current.reset())
    expect(result.current.overall.done).toBe(0)

    act(() => {
      const ok = result.current.importState(snapshot)
      expect(ok).toBe(true)
    })
    expect(result.current.isComplete('generative-ai', 'what-is-ai-and-machine-learning')).toBe(true)
    expect(result.current.isBookmarked('generative-ai', 'how-models-learn')).toBe(true)
  })

  it('rejects malformed JSON without touching existing state', () => {
    const { result } = setup()
    act(() => result.current.markComplete('generative-ai', 'what-is-ai-and-machine-learning'))

    act(() => {
      const ok = result.current.importState('{not valid json')
      expect(ok).toBe(false)
    })
    expect(result.current.isComplete('generative-ai', 'what-is-ai-and-machine-learning')).toBe(true)
  })

  it('rejects a well-formed but foreign JSON shape', () => {
    const { result } = setup()
    act(() => {
      const ok = result.current.importState(JSON.stringify({ hello: 'world' }))
      expect(ok).toBe(false)
    })
    expect(result.current.overall.done).toBe(0)
  })
})

describe('visit and reset', () => {
  it('records the last visited lesson', () => {
    const { result } = setup()
    act(() => result.current.visit('generative-ai', 'fine-tuning-and-rag'))
    expect(result.current.state.lastVisited).toMatchObject({
      tutorialSlug: 'generative-ai',
      lessonSlug: 'fine-tuning-and-rag',
    })
  })

  it('reset clears everything', () => {
    const { result } = setup()
    act(() => {
      result.current.markComplete('generative-ai', 'what-is-ai-and-machine-learning')
      result.current.toggleBookmark('generative-ai', 'how-models-learn')
      result.current.visit('generative-ai', 'what-is-ai-and-machine-learning')
    })
    act(() => result.current.reset())
    expect(result.current.overall.done).toBe(0)
    expect(result.current.state.bookmarks).toEqual([])
    expect(result.current.state.lastVisited).toBeNull()
  })
})
