import type { Block, Lesson, ResolvedLesson, Tutorial } from './types'
import type { IconName } from '../lib/icons'
import { aiFundamentals } from './tutorials/ai-fundamentals'
import { llmEngineering } from './tutorials/llm-engineering'
import { promptEngineering } from './tutorials/prompt-engineering'

/** The registry. Adding a course means adding one import and one entry. */
export const tutorials: Tutorial[] = [aiFundamentals, promptEngineering, llmEngineering]

export const getTutorial = (slug: string) => tutorials.find((t) => t.slug === slug)

export const categories = [...new Set(tutorials.map((t) => t.category))]

export const allTags = [...new Set(tutorials.flatMap((t) => t.tags))].sort()

/** Flattened lesson order for a tutorial — the sequence a learner walks. */
export const flatLessons = (tutorial: Tutorial) =>
  tutorial.chapters.flatMap((chapter) => chapter.lessons.map((lesson) => ({ chapter, lesson })))

export const lessonCount = (tutorial: Tutorial) => flatLessons(tutorial).length

export const totalDuration = (tutorial: Tutorial) =>
  flatLessons(tutorial).reduce((sum, { lesson }) => sum + lesson.duration, 0)

/**
 * Resolve a lesson together with everything a page needs to render it:
 * its chapter, position, and prev/next neighbours.
 */
export function resolveLesson(tutorialSlug: string, lessonSlug: string): ResolvedLesson | null {
  const tutorial = getTutorial(tutorialSlug)
  if (!tutorial) return null

  const flat = flatLessons(tutorial)
  const index = flat.findIndex((entry) => entry.lesson.slug === lessonSlug)
  if (index === -1) return null

  const toRef = (entry?: { lesson: Lesson }) =>
    entry ? { slug: entry.lesson.slug, title: entry.lesson.title } : null

  return {
    tutorial,
    chapter: flat[index].chapter,
    lesson: flat[index].lesson,
    index,
    total: flat.length,
    prev: toRef(flat[index - 1]),
    next: toRef(flat[index + 1]),
  }
}

/** Headings a lesson exposes, for the in-page table of contents. */
export const slugifyHeading = (text: string) =>
  text.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-')

export function extractHeadings(blocks: Block[]) {
  return blocks
    .filter((b): b is Extract<Block, { type: 'heading' }> => b.type === 'heading')
    .map((b) => ({ id: b.id ?? slugifyHeading(b.text), text: b.text, level: b.level }))
}

/** Plain-text projection of a lesson, used by search and text-to-speech. */
export function blocksToText(blocks: Block[]): string[] {
  const out: string[] = []
  for (const b of blocks) {
    switch (b.type) {
      case 'heading':
      case 'paragraph':
        out.push(b.text)
        break
      case 'list':
        out.push(...b.items)
        break
      case 'callout':
        out.push(b.title ? `${b.title}. ${b.text}` : b.text)
        break
      case 'quote':
        out.push(b.author ? `${b.text} — ${b.author}` : b.text)
        break
      case 'keyPoints':
        out.push(b.title ?? 'Key points')
        out.push(...b.points)
        break
      case 'steps':
        out.push(...b.items.map((i) => `${i.title}. ${i.text}`))
        break
      case 'comparison':
        if (b.title) out.push(b.title)
        out.push(b.left.label, ...b.left.items, b.right.label, ...b.right.items)
        break
      case 'quiz':
        out.push(b.question)
        break
      case 'table':
        out.push(b.headers.join(', '), ...b.rows.map((r) => r.join(', ')))
        break
      case 'image':
        if (b.caption) out.push(b.caption)
        break
      case 'definition':
        out.push(`${b.term}. ${b.plain}`)
        if (b.formal) out.push(b.formal)
        break
      case 'analogy':
        out.push(b.text)
        break
      case 'exercise':
        // The prompt is worth reading aloud; the solution would spoil it.
        out.push(b.prompt)
        break
      case 'recap':
        out.push(...b.points)
        break
      // 'code', 'video' and 'divider' are intentionally skipped — reading code
      // aloud is noise, and search matches it via the dedicated index below.
    }
  }
  return out
}

export interface SearchResult {
  tutorialSlug: string
  tutorialTitle: string
  lessonSlug: string
  lessonTitle: string
  description: string
  icon: IconName
  color: string
  excerpt: string
}

/**
 * Lesson body text, built once on first search and reused afterwards.
 * Projecting every block to text is not free, and the result never changes.
 */
let bodyCache: Map<string, string> | null = null

function getBodyIndex(): Map<string, string> {
  if (bodyCache) return bodyCache
  bodyCache = new Map()
  for (const tutorial of tutorials) {
    for (const { lesson } of flatLessons(tutorial)) {
      bodyCache.set(`${tutorial.slug}/${lesson.slug}`, blocksToText(lesson.blocks).join(' '))
    }
  }
  return bodyCache
}

export function searchContent(query: string, limit = 12): SearchResult[] {
  const q = query.trim().toLowerCase()
  if (q.length < 2) return []

  const bodies = getBodyIndex()
  const results: (SearchResult & { score: number })[] = []

  for (const tutorial of tutorials) {
    for (const { lesson } of flatLessons(tutorial)) {
      const body = bodies.get(`${tutorial.slug}/${lesson.slug}`) ?? ''
      const haystack = `${lesson.title} ${lesson.description} ${body}`.toLowerCase()
      if (!haystack.includes(q)) continue

      // Title matches rank above description matches, which rank above body.
      const score =
        (lesson.title.toLowerCase().includes(q) ? 100 : 0) +
        (lesson.description.toLowerCase().includes(q) ? 40 : 0) +
        (tutorial.tags.some((t) => t.toLowerCase().includes(q)) ? 25 : 0) +
        Math.min(20, (haystack.split(q).length - 1) * 2)

      const at = body.toLowerCase().indexOf(q)
      const excerpt =
        at === -1
          ? lesson.description
          : `…${body.slice(Math.max(0, at - 70), at + 110).trim()}…`

      results.push({
        score,
        tutorialSlug: tutorial.slug,
        tutorialTitle: tutorial.shortTitle ?? tutorial.title,
        lessonSlug: lesson.slug,
        lessonTitle: lesson.title,
        description: lesson.description,
        icon: tutorial.icon,
        color: tutorial.color,
        excerpt,
      })
    }
  }

  return results
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ score: _score, ...rest }) => rest)
}

export * from './types'
