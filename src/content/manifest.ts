import type { Difficulty } from './types'
import type { IconName } from '../lib/icons'

/**
 * Lightweight course metadata — everything the shell needs, minus the prose.
 *
 * The landing page, course cards, footer, and progress tracking all need to
 * know *what* lessons exist without needing their content. Importing the full
 * registry for that pulled ~213kB of lesson text into the initial bundle.
 *
 * This module must stay free of any import from `./tutorials/*`, or the
 * content is dragged back into the eager graph. `npm run check:manifest`
 * enforces that it matches the real content.
 */

export interface LessonMeta {
  slug: string
  title: string
  duration: number
}

export interface ChapterMeta {
  title: string
  lessons: LessonMeta[]
}

export interface TutorialMeta {
  slug: string
  title: string
  shortTitle?: string
  description: string
  category: string
  difficulty: Difficulty
  icon: IconName
  tags: string[]
  color: string
  updated: string
  chapters: ChapterMeta[]
}

export const tutorialsMeta: TutorialMeta[] = []

export const getTutorialMeta = (slug: string) => tutorialsMeta.find((t) => t.slug === slug)

export const allTags = [...new Set(tutorialsMeta.flatMap((t) => t.tags))].sort()

/** Distinct subjects, in the order they first appear in the registry. */
export const allCategories = [...new Set(tutorialsMeta.map((t) => t.category))]

/**
 * Courses grouped by subject, for browsing. Registry order is preserved
 * within each group so a course sequence stays intact.
 */
export function tutorialsByCategory(list: TutorialMeta[] = tutorialsMeta) {
  const groups = new Map<string, TutorialMeta[]>()
  for (const tutorial of list) {
    const existing = groups.get(tutorial.category)
    if (existing) existing.push(tutorial)
    else groups.set(tutorial.category, [tutorial])
  }
  return [...groups.entries()].map(([category, tutorials]) => ({ category, tutorials }))
}

export const flatLessonsMeta = (tutorial: TutorialMeta) =>
  tutorial.chapters.flatMap((chapter) => chapter.lessons.map((lesson) => ({ chapter, lesson })))

export const lessonCount = (tutorial: TutorialMeta) => flatLessonsMeta(tutorial).length

export const totalDuration = (tutorial: TutorialMeta) =>
  flatLessonsMeta(tutorial).reduce((sum, { lesson }) => sum + lesson.duration, 0)

export const totalLessonCount = tutorialsMeta.reduce((n, t) => n + lessonCount(t), 0)

/**
 * Suggests what to take after finishing `tutorial` — prefers another course in
 * the same category (natural continuation), falling back to any other course
 * if the category only has this one. Registry order decides ties, since it
 * already reflects a deliberate beginner-to-advanced sequence.
 */
export function nextTutorial(tutorial: TutorialMeta): TutorialMeta | undefined {
  const sameCategory = tutorialsMeta.find((t) => t.slug !== tutorial.slug && t.category === tutorial.category)
  return sameCategory ?? tutorialsMeta.find((t) => t.slug !== tutorial.slug)
}
