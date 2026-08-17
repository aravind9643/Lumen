import { createContext, useCallback, useContext, useMemo, type ReactNode } from 'react'
import { usePersistentState } from './storage'
// Deliberately the manifest, not the full registry: ProgressProvider wraps the
// whole app, so importing content here would pull every lesson's prose into the
// initial bundle. Progress only needs slugs and durations.
import { flatLessonsMeta, tutorialsMeta } from '../content/manifest'

/** Composite key so lesson slugs need only be unique within a tutorial. */
const key = (tutorialSlug: string, lessonSlug: string) => `${tutorialSlug}/${lessonSlug}`

export interface QuizAnswer {
  picked: number
  correct: boolean
  at: number
}

export interface ProgressState {
  completed: Record<string, number> // key -> completion timestamp
  bookmarks: string[]
  lastVisited: { tutorialSlug: string; lessonSlug: string; at: number } | null
  /** Consecutive-day study streak, keyed off local dates. */
  streak: { count: number; lastDay: string }
  /** key -> `${blockIndex}` -> last answer given for that quiz. */
  quizAnswers: Record<string, Record<number, QuizAnswer>>
}

const EMPTY: ProgressState = {
  completed: {},
  bookmarks: [],
  lastVisited: null,
  streak: { count: 0, lastDay: '' },
  quizAnswers: {},
}

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
  recordQuizAnswer: (t: string, l: string, blockIndex: number, picked: number, correct: boolean) => void
  getQuizAnswer: (t: string, l: string, blockIndex: number) => QuizAnswer | undefined
  /** Every answered quiz across the whole site, most recent first. */
  quizHistory: (Array<QuizAnswer & { tutorialSlug: string; lessonSlug: string; blockIndex: number }>)
  /** Serialised snapshot for download, and the inverse for restoring one. */
  exportState: () => string
  importState: (json: string) => boolean
}

const ProgressContext = createContext<ProgressContextValue | null>(null)

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [rawState, setState, reset] = usePersistentState<ProgressState>('progress:v1', EMPTY)
  // Defends against a value persisted before `quizAnswers` existed — spreading
  // over EMPTY fills in any field missing from an older stored shape, rather
  // than crashing the first time something reads state.quizAnswers.
  const state = useMemo(() => ({ ...EMPTY, ...rawState }), [rawState])

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

  const recordQuizAnswer = useCallback(
    (t: string, l: string, blockIndex: number, picked: number, correct: boolean) =>
      setState((prev) => {
        const k = key(t, l)
        return {
          ...prev,
          quizAnswers: {
            ...prev.quizAnswers,
            [k]: { ...prev.quizAnswers[k], [blockIndex]: { picked, correct, at: Date.now() } },
          },
        }
      }),
    [setState],
  )

  const getQuizAnswer = useCallback(
    (t: string, l: string, blockIndex: number) => state.quizAnswers[key(t, l)]?.[blockIndex],
    [state.quizAnswers],
  )

  const quizHistory = useMemo(
    () =>
      Object.entries(state.quizAnswers)
        .flatMap(([k, byBlock]) => {
          const [tutorialSlug, lessonSlug] = k.split('/')
          return Object.entries(byBlock).map(([blockIndex, answer]) => ({
            tutorialSlug,
            lessonSlug,
            blockIndex: Number(blockIndex),
            ...answer,
          }))
        })
        .sort((a, b) => b.at - a.at),
    [state.quizAnswers],
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

  const exportState = useCallback(() => JSON.stringify(state, null, 2), [state])

  /**
   * Accepts a previously exported snapshot. Validated shallowly — this is a
   * user-supplied file, not a value this app produced in the current session
   * — so a malformed or foreign JSON blob is rejected rather than partially
   * applied and corrupting existing progress.
   */
  const importState = useCallback(
    (json: string) => {
      let parsed: unknown
      try {
        parsed = JSON.parse(json)
      } catch {
        return false
      }
      if (typeof parsed !== 'object' || parsed === null) return false
      const p = parsed as Partial<ProgressState>
      if (
        typeof p.completed !== 'object' ||
        !Array.isArray(p.bookmarks) ||
        typeof p.streak !== 'object'
      ) {
        return false
      }
      setState({ ...EMPTY, ...p })
      return true
    },
    [setState],
  )

  const value = useMemo(
    () => ({
      state, isComplete, toggleComplete, markComplete,
      isBookmarked, toggleBookmark, visit, tutorialProgress, overall, reset,
      recordQuizAnswer, getQuizAnswer, quizHistory, exportState, importState,
    }),
    [
      state, isComplete, toggleComplete, markComplete, isBookmarked, toggleBookmark,
      visit, tutorialProgress, overall, reset, recordQuizAnswer, getQuizAnswer, quizHistory,
      exportState, importState,
    ],
  )

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}

export function useProgress() {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error('useProgress must be used within <ProgressProvider>')
  return ctx
}
