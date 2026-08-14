import { createContext, useCallback, useContext, useMemo, type ReactNode } from 'react'
import { usePersistentState } from './storage'
// Deliberately the manifest, not the full registry: ProgressProvider wraps the
// whole app, so importing content here would pull every lesson's prose into the
// initial bundle. Progress only needs slugs and durations.
import { flatLessonsMeta, tutorialsMeta } from '../content/manifest'

/** Composite key so lesson slugs need only be unique within a tutorial. */
const key = (tutorialSlug: string, lessonSlug: string) => `${tutorialSlug}/${lessonSlug}`

export interface ProgressState {
  completed: Record<string, number> // key -> completion timestamp
  bookmarks: string[]
  lastVisited: { tutorialSlug: string; lessonSlug: string; at: number } | null
  /** Consecutive-day study streak, keyed off local dates. */
  streak: { count: number; lastDay: string }
}

const EMPTY: ProgressState = { completed: {}, bookmarks: [], lastVisited: null, streak: { count: 0, lastDay: '' } }

/** Local calendar date as YYYY-MM-DD. Deliberately not toISOString, which is
 *  UTC and would roll the streak over at the wrong moment for most timezones. */
const today = () => {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

/** The day after `day`, or null when `day` is empty/unparseable (first visit). */
const dayAfter = (day: string): string | null => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(day)) return null
  const d = new Date(`${day}T00:00:00`)
  if (Number.isNaN(d.getTime())) return null
  d.setDate(d.getDate() + 1)
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

interface ProgressContextValue {
  state: ProgressState
  isComplete: (t: string, l: string) => boolean
  toggleComplete: (t: string, l: string) => void
  markComplete: (t: string, l: string) => void
  isBookmarked: (t: string, l: string) => boolean
  toggleBookmark: (t: string, l: string) => void
  visit: (t: string, l: string) => void
  tutorialProgress: (t: string) => { done: number; total: number; percent: number }
  overall: { done: number; total: number; percent: number; minutes: number }
  reset: () => void
}

const ProgressContext = createContext<ProgressContextValue | null>(null)

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [state, setState, reset] = usePersistentState<ProgressState>('progress:v1', EMPTY)

  const isComplete = useCallback((t: string, l: string) => key(t, l) in state.completed, [state.completed])

  const markComplete = useCallback(
    (t: string, l: string) =>
      setState((prev) => {
        const k = key(t, l)
        if (k in prev.completed) return prev
        return { ...prev, completed: { ...prev.completed, [k]: Date.now() } }
      }),
    [setState],
  )

  const toggleComplete = useCallback(
    (t: string, l: string) =>
      setState((prev) => {
        const k = key(t, l)
        const completed = { ...prev.completed }
        if (k in completed) delete completed[k]
        else completed[k] = Date.now()
        return { ...prev, completed }
      }),
    [setState],
  )

  const isBookmarked = useCallback((t: string, l: string) => state.bookmarks.includes(key(t, l)), [state.bookmarks])

  const toggleBookmark = useCallback(
    (t: string, l: string) =>
      setState((prev) => {
        const k = key(t, l)
        return {
          ...prev,
          bookmarks: prev.bookmarks.includes(k)
            ? prev.bookmarks.filter((b) => b !== k)
            : [...prev.bookmarks, k],
        }
      }),
    [setState],
  )

  const visit = useCallback(
    (t: string, l: string) =>
      setState((prev) => {
        const day = today()
        // Extend the streak only on a genuinely new consecutive day.
        const streak =
          prev.streak.lastDay === day
            ? prev.streak
            : dayAfter(prev.streak.lastDay) === day
              ? { count: prev.streak.count + 1, lastDay: day }
              : { count: 1, lastDay: day }
        return { ...prev, lastVisited: { tutorialSlug: t, lessonSlug: l, at: Date.now() }, streak }
      }),
    [setState],
  )

  const tutorialProgress = useCallback(
    (slug: string) => {
      const tutorial = tutorialsMeta.find((t) => t.slug === slug)
      if (!tutorial) return { done: 0, total: 0, percent: 0 }
      const lessons = flatLessonsMeta(tutorial)
      const done = lessons.filter(({ lesson }) => key(slug, lesson.slug) in state.completed).length
      return {
        done,
        total: lessons.length,
        percent: lessons.length ? Math.round((done / lessons.length) * 100) : 0,
      }
    },
    [state.completed],
  )

  const overall = useMemo(() => {
    const all = tutorialsMeta.flatMap((t) => flatLessonsMeta(t).map(({ lesson }) => ({ t, lesson })))
    const doneEntries = all.filter(({ t, lesson }) => key(t.slug, lesson.slug) in state.completed)
    return {
      done: doneEntries.length,
      total: all.length,
      percent: all.length ? Math.round((doneEntries.length / all.length) * 100) : 0,
      minutes: doneEntries.reduce((sum, { lesson }) => sum + lesson.duration, 0),
    }
  }, [state.completed])

  const value = useMemo(
    () => ({
      state, isComplete, toggleComplete, markComplete,
      isBookmarked, toggleBookmark, visit, tutorialProgress, overall, reset,
    }),
    [state, isComplete, toggleComplete, markComplete, isBookmarked, toggleBookmark, visit, tutorialProgress, overall, reset],
  )

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}

export function useProgress() {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error('useProgress must be used within <ProgressProvider>')
  return ctx
}
