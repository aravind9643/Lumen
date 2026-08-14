/**
 * Content model.
 *
 * Every tutorial is a tree of discriminated-union `Block`s. One renderer
 * (`<BlockRenderer />`) maps each variant to a component, so adding a new
 * content kind means adding one type here and one case there — pages and
 * lesson layouts never change.
 */

import type { IconName } from '../lib/icons'

export type Difficulty = 'beginner' | 'intermediate' | 'advanced'

export type CalloutKind = 'info' | 'tip' | 'warning' | 'danger' | 'success'

export type Block =
  | { type: 'heading'; level: 2 | 3 | 4; text: string; id?: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; ordered?: boolean; items: string[] }
  | { type: 'code'; language: string; code: string; filename?: string; highlight?: number[] }
  | { type: 'callout'; kind: CalloutKind; title?: string; text: string }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'quote'; text: string; author?: string }
  | { type: 'divider' }
  | { type: 'keyPoints'; title?: string; points: string[] }
  | { type: 'quiz'; question: string; options: string[]; answer: number; explanation?: string }
  | { type: 'steps'; items: { title: string; text: string }[] }
  | { type: 'comparison'; title?: string; left: { label: string; items: string[] }; right: { label: string; items: string[] } }
  | { type: 'video'; provider: 'youtube'; id: string; title: string }
  // ── Beginner-teaching blocks ───────────────────────────────────────
  /** Defines jargon on first use, so no term is ever used unexplained. */
  | { type: 'definition'; term: string; plain: string; formal?: string }
  /** An everyday comparison, stated before the technical mechanism. */
  | { type: 'analogy'; title?: string; text: string }
  /** A hands-on task with a solution the reader reveals when ready. */
  | { type: 'exercise'; prompt: string; hint?: string; solution: string; language?: string }
  /** Recap of what came before, used to open a lesson. */
  | { type: 'recap'; points: string[] }

export interface Lesson {
  slug: string
  title: string
  description: string
  /** Minutes; used for reading-time badges and course totals. */
  duration: number
  blocks: Block[]
}

export interface Chapter {
  title: string
  lessons: Lesson[]
}

export interface Tutorial {
  slug: string
  title: string
  /** Short label used in cards and breadcrumbs. */
  shortTitle?: string
  description: string
  category: string
  difficulty: Difficulty
  /** Name from the icon registry in `lib/icons.ts` — never an emoji. */
  icon: IconName
  tags: string[]
  /** Single flat brand colour for the course. No gradients. */
  color: string
  updated: string
  chapters: Chapter[]
  prerequisites?: string[]
  outcomes?: string[]
}

/** A lesson plus its position in the parent tutorial — what pages actually need. */
export interface ResolvedLesson {
  tutorial: Tutorial
  chapter: Chapter
  lesson: Lesson
  index: number
  total: number
  prev: { slug: string; title: string } | null
  next: { slug: string; title: string } | null
}
