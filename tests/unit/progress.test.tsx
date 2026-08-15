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
    expect(result.current.isComplete('ai-fundamentals', 'what-is-ai')).toBe(false)
    expect(result.current.overall.done).toBe(0)
  })

  it('marks and unmarks a lesson', () => {
    const { result } = setup()
    act(() => result.current.toggleComplete('ai-fundamentals', 'what-is-ai'))
    expect(result.current.isComplete('ai-fundamentals', 'what-is-ai')).toBe(true)
    act(() => result.current.toggleComplete('ai-fundamentals', 'what-is-ai'))
    expect(result.current.isComplete('ai-fundamentals', 'what-is-ai')).toBe(false)
  })

  it('markComplete is idempotent', () => {
    const { result } = setup()
    act(() => result.current.markComplete('ai-fundamentals', 'what-is-ai'))
    const first = result.current.state.completed['ai-fundamentals/what-is-ai']
    act(() => result.current.markComplete('ai-fundamentals', 'what-is-ai'))
    expect(result.current.state.completed['ai-fundamentals/what-is-ai']).toBe(first)
    expect(result.current.overall.done).toBe(1)
  })

  it('scopes lesson slugs to their tutorial', () => {
    // Two courses may legitimately share a lesson slug.
    const { result } = setup()
    act(() => result.current.markComplete('ai-fundamentals', 'what-is-ai'))
    expect(result.current.isComplete('llm-engineering', 'what-is-ai')).toBe(false)
  })

  it('computes per-course and overall percentages', () => {
    const { result } = setup()
    const { total } = result.current.tutorialProgress('ai-fundamentals')
    expect(total).toBeGreaterThan(0)

    act(() => result.current.markComplete('ai-fundamentals', 'what-is-ai'))
    const after = result.current.tutorialProgress('ai-fundamentals')
    expect(after.done).toBe(1)
    expect(after.percent).toBe(Math.round((1 / total) * 100))
    expect(result.current.overall.minutes).toBeGreaterThan(0)
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
    act(() => result.current.toggleBookmark('ai-fundamentals', 'what-is-ai'))
    expect(result.current.isBookmarked('ai-fundamentals', 'what-is-ai')).toBe(true)
    act(() => result.current.toggleBookmark('ai-fundamentals', 'what-is-ai'))
    expect(result.current.isBookmarked('ai-fundamentals', 'what-is-ai')).toBe(false)
    expect(result.current.state.bookmarks).toEqual([])
  })
})

describe('streak', () => {
  it('starts at one on the first ever visit', () => {
    // This path once threw: new Date('T00:00:00') on an empty lastDay.
    const { result } = setup()
    expect(() => act(() => result.current.visit('ai-fundamentals', 'what-is-ai'))).not.toThrow()
    expect(result.current.state.streak.count).toBe(1)
    expect(result.current.state.streak.lastDay).toBe(localDay())
  })

  it('does not increment twice in one day', () => {
    const { result } = setup()
    act(() => result.current.visit('ai-fundamentals', 'what-is-ai'))
    act(() => result.current.visit('ai-fundamentals', 'understanding-data'))
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
    act(() => result.current.visit('ai-fundamentals', 'what-is-ai'))
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
    act(() => result.current.visit('ai-fundamentals', 'what-is-ai'))
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
    expect(() => act(() => result.current.visit('ai-fundamentals', 'what-is-ai'))).not.toThrow()
    expect(result.current.state.streak.count).toBe(1)
  })
})

describe('visit and reset', () => {
  it('records the last visited lesson', () => {
    const { result } = setup()
    act(() => result.current.visit('llm-engineering', 'rag-systems'))
    expect(result.current.state.lastVisited).toMatchObject({
      tutorialSlug: 'llm-engineering',
      lessonSlug: 'rag-systems',
    })
  })

  it('reset clears everything', () => {
    const { result } = setup()
    act(() => {
      result.current.markComplete('ai-fundamentals', 'what-is-ai')
      result.current.toggleBookmark('ai-fundamentals', 'understanding-data')
      result.current.visit('ai-fundamentals', 'what-is-ai')
    })
    act(() => result.current.reset())
    expect(result.current.overall.done).toBe(0)
    expect(result.current.state.bookmarks).toEqual([])
    expect(result.current.state.lastVisited).toBeNull()
  })
})
