import type { Block, ResolvedLesson, Tutorial } from './types'
import type { IconName } from '../lib/icons'
import { androidKotlin } from './tutorials/android'
import { angularCourse } from './tutorials/angular'
import { awsCloud } from './tutorials/aws'
import { azureCloud } from './tutorials/azure'
import { cssCourse } from './tutorials/css'
import { dockerContainers } from './tutorials/docker'
import { dotnetCore } from './tutorials/dotnet'
import { flutterDart } from './tutorials/flutter'
import { googleCloud } from './tutorials/gcp'
import { generativeAI } from './tutorials/generative-ai'
import { htmlCourse } from './tutorials/html'
import { ionicCapacitor } from './tutorials/ionic'
import { javaEnterprise } from './tutorials/java'
import { javascriptCourse } from './tutorials/javascript'
import { nestjsCourse } from './tutorials/nestjs'
import { nextjsCourse } from './tutorials/nextjs'
import { nodejsCourse } from './tutorials/nodejs'
import { pythonProgramming } from './tutorials/python'
import { reactNative } from './tutorials/react-native'
import { reactCourse } from './tutorials/react'
import { sqlDatabases } from './tutorials/sql'
import { stockMarket } from './tutorials/stock-market'
import { svelteCourse } from './tutorials/svelte'
import { tailwindcssCourse } from './tutorials/tailwindcss'
import { typescriptCourse } from './tutorials/typescript'
import { vueCourse } from './tutorials/vue'

export const tutorials: Tutorial[] = [
  androidKotlin,
  angularCourse,
  awsCloud,
  azureCloud,
  cssCourse,
  dockerContainers,
  dotnetCore,
  flutterDart,
  googleCloud,
  generativeAI,
  htmlCourse,
  ionicCapacitor,
  javaEnterprise,
  javascriptCourse,
  nestjsCourse,
  nextjsCourse,
  nodejsCourse,
  pythonProgramming,
  reactNative,
  reactCourse,
  sqlDatabases,
  stockMarket,
  svelteCourse,
  tailwindcssCourse,
  typescriptCourse,
  vueCourse
]

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
  const index = flat.findIndex(({ lesson }) => lesson.slug === lessonSlug)
  if (index === -1) return null

  const prevLesson = index > 0 ? flat[index - 1].lesson : null
  const nextLesson = index < flat.length - 1 ? flat[index + 1].lesson : null

  return {
    tutorial,
    chapter: flat[index].chapter,
    lesson: flat[index].lesson,
    index,
    total: flat.length,
    prev: prevLesson ? { slug: prevLesson.slug, title: prevLesson.title } : null,
    next: nextLesson ? { slug: nextLesson.slug, title: nextLesson.title } : null,
  }
}

/**
 * Extracts plain text from blocks for the voice player and search.
 */
export function blocksToText(blocks: Block[]): string[] {
  const out: string[] = []
  for (const block of blocks) {
    switch (block.type) {
      case 'paragraph':
      case 'heading':
      case 'analogy':
        out.push(block.text)
        break
      case 'quote':
        out.push(block.author ? `${block.text} — ${block.author}` : block.text)
        break
      case 'definition':
        out.push(`${block.term}: ${block.plain}`)
        break
      case 'callout':
        out.push(block.title ? `${block.title}: ${block.text}` : block.text)
        break
      case 'keyPoints':
        if (block.title) out.push(block.title)
        out.push(...block.points)
        break
      case 'list':
        out.push(...block.items)
        break
      case 'steps':
        for (const step of block.items) {
          out.push(`${step.title}: ${step.text}`)
        }
        break
      case 'comparison':
        if (block.title) out.push(block.title)
        out.push(`${block.left.label}: ${block.left.items.join(', ')}`)
        out.push(`${block.right.label}: ${block.right.items.join(', ')}`)
        break
      case 'quiz':
        out.push(block.question)
        out.push(...block.options)
        if (block.explanation) out.push(block.explanation)
        break
      case 'exercise':
        out.push(block.prompt)
        if (block.hint) out.push(block.hint)
        out.push(block.solution)
        break
      case 'table':
        out.push(block.headers.join(' '))
        for (const row of block.rows) {
          out.push(row.join(' '))
        }
        break
      case 'code':
      case 'image':
      case 'video':
      case 'divider':
        break
    }
  }
  return out
}

export interface SearchResult {
  tutorialSlug: string
  tutorialTitle: string
  color: string
  icon: IconName
  lessonSlug: string
  lessonTitle: string
  excerpt: string
  matchType: 'title' | 'description' | 'content'
  score: number
}

/**
 * In-memory substring search over the lazy-loaded registry.
 */
export function searchContent(query: string, limit = 8): SearchResult[] {
  const q = query.trim().toLowerCase()
  if (!q) return []

  const terms = q.split(/\s+/).filter(Boolean)
  const results: SearchResult[] = []

  for (const tutorial of tutorials) {
    for (const { lesson } of flatLessons(tutorial)) {
      let score = 0
      let matchType: 'title' | 'description' | 'content' = 'content'
      let excerpt = lesson.description

      const titleLower = lesson.title.toLowerCase()
      const descLower = lesson.description.toLowerCase()

      let titleMatch = false
      let descMatch = false

      for (const term of terms) {
        if (titleLower.includes(term)) {
          score += 10
          titleMatch = true
        }
        if (descLower.includes(term)) {
          score += 5
          descMatch = true
        }
      }

      if (titleMatch) matchType = 'title'
      else if (descMatch) matchType = 'description'

      const texts = blocksToText(lesson.blocks)
      for (const text of texts) {
        const textLower = text.toLowerCase()
        for (const term of terms) {
          if (textLower.includes(term)) {
            score += 1
            if (excerpt === lesson.description && text.length > 20) {
              const idx = textLower.indexOf(term)
              const start = Math.max(0, idx - 40)
              const end = Math.min(text.length, idx + term.length + 60)
              excerpt = (start > 0 ? '…' : '') + text.slice(start, end).trim() + (end < text.length ? '…' : '')
            }
          }
        }
      }

      if (score > 0) {
        results.push({
          tutorialSlug: tutorial.slug,
          tutorialTitle: tutorial.shortTitle || tutorial.title,
          color: tutorial.color,
          icon: tutorial.icon,
          lessonSlug: lesson.slug,
          lessonTitle: lesson.title,
          excerpt,
          matchType,
          score,
        })
      }
    }
  }

  return results.sort((a, b) => b.score - a.score).slice(0, limit)
}

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export interface HeadingItem {
  id: string
  text: string
  level: number
}

export function extractHeadings(blocks: Block[]): HeadingItem[] {
  const headings: HeadingItem[] = []
  for (const block of blocks) {
    if (block.type === 'heading') {
      const id = block.id || slugifyHeading(block.text)
      headings.push({ id, text: block.text, level: block.level })
    }
  }
  return headings
}
