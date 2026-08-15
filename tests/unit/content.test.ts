import { describe, expect, it } from 'vitest'
import {
  blocksToText,
  extractHeadings,
  flatLessons,
  resolveLesson,
  searchContent,
  slugifyHeading,
  tutorials,
} from '../../src/content'
import type { Block } from '../../src/content/types'

describe('resolveLesson', () => {
  it('resolves a lesson with its chapter and position', () => {
    const r = resolveLesson('ai-fundamentals', 'what-is-ai')
    expect(r).not.toBeNull()
    expect(r!.lesson.slug).toBe('what-is-ai')
    expect(r!.index).toBe(0)
    expect(r!.total).toBeGreaterThan(1)
    expect(r!.chapter.title).toContain('Chapter 1')
  })

  it('links prev and next in reading order', () => {
    const first = resolveLesson('ai-fundamentals', 'what-is-ai')!
    expect(first.prev).toBeNull()
    expect(first.next).not.toBeNull()

    const second = resolveLesson('ai-fundamentals', first.next!.slug)!
    expect(second.prev!.slug).toBe('what-is-ai')
    expect(second.index).toBe(1)
  })

  it('has no next on the final lesson of a course', () => {
    const tutorial = tutorials[0]
    const flat = flatLessons(tutorial)
    const last = resolveLesson(tutorial.slug, flat.at(-1)!.lesson.slug)!
    expect(last.next).toBeNull()
    expect(last.index).toBe(last.total - 1)
  })

  it('returns null for unknown slugs rather than throwing', () => {
    expect(resolveLesson('nope', 'what-is-ai')).toBeNull()
    expect(resolveLesson('ai-fundamentals', 'nope')).toBeNull()
    expect(resolveLesson('', '')).toBeNull()
  })
})

describe('slugifyHeading', () => {
  it('produces url-safe anchors', () => {
    expect(slugifyHeading('The three words everyone confuses')).toBe(
      'the-three-words-everyone-confuses',
    )
  })

  it('strips punctuation and collapses whitespace', () => {
    expect(slugifyHeading('Why?  It   matters!')).toBe('why-it-matters')
  })
})

describe('extractHeadings', () => {
  it('returns only heading blocks, with ids', () => {
    const blocks: Block[] = [
      { type: 'paragraph', text: 'intro' },
      { type: 'heading', level: 2, text: 'First Section' },
      { type: 'code', language: 'py', code: 'x = 1' },
      { type: 'heading', level: 3, text: 'Sub Section' },
    ]
    expect(extractHeadings(blocks)).toEqual([
      { id: 'first-section', text: 'First Section', level: 2 },
      { id: 'sub-section', text: 'Sub Section', level: 3 },
    ])
  })

  it('honours an explicit id', () => {
    const blocks: Block[] = [{ type: 'heading', level: 2, text: 'Custom', id: 'my-id' }]
    expect(extractHeadings(blocks)[0].id).toBe('my-id')
  })
})

describe('blocksToText', () => {
  it('includes prose from every readable block type', () => {
    const blocks: Block[] = [
      { type: 'paragraph', text: 'para' },
      { type: 'definition', term: 'Term', plain: 'plain meaning' },
      { type: 'analogy', text: 'like this' },
      { type: 'recap', points: ['recap point'] },
      { type: 'exercise', prompt: 'try it', solution: 'the answer' },
      { type: 'callout', kind: 'info', title: 'Note', text: 'callout body' },
    ]
    const text = blocksToText(blocks).join(' ')
    expect(text).toContain('para')
    expect(text).toContain('Term')
    expect(text).toContain('plain meaning')
    expect(text).toContain('like this')
    expect(text).toContain('recap point')
    expect(text).toContain('try it')
    expect(text).toContain('callout body')
  })

  it('omits exercise solutions so narration does not spoil them', () => {
    const blocks: Block[] = [
      { type: 'exercise', prompt: 'try it', solution: 'SECRET ANSWER' },
    ]
    expect(blocksToText(blocks).join(' ')).not.toContain('SECRET ANSWER')
  })

  it('omits code, which is noise when read aloud', () => {
    const blocks: Block[] = [
      { type: 'code', language: 'python', code: 'import numpy as np' },
    ]
    expect(blocksToText(blocks)).toEqual([])
  })
})

describe('searchContent', () => {
  it('ignores queries under two characters', () => {
    expect(searchContent('a')).toEqual([])
    expect(searchContent('')).toEqual([])
  })

  it('finds lessons by body text', () => {
    const results = searchContent('gradient descent')
    expect(results.length).toBeGreaterThan(0)
    expect(results[0].lessonTitle).toBeTruthy()
    expect(results[0].tutorialSlug).toBeTruthy()
  })

  it('ranks title matches above body-only matches', () => {
    const results = searchContent('attention')
    expect(results[0].lessonTitle.toLowerCase()).toContain('attention')
  })

  it('is case-insensitive', () => {
    expect(searchContent('TOKENS').length).toBe(searchContent('tokens').length)
  })

  it('returns an excerpt and respects the limit', () => {
    const results = searchContent('the', 3)
    expect(results.length).toBeLessThanOrEqual(3)
    for (const r of results) expect(r.excerpt.length).toBeGreaterThan(0)
  })

  it('returns nothing for terms absent from the content', () => {
    expect(searchContent('zzzznonexistentzzz')).toEqual([])
  })
})

describe('content integrity', () => {
  it('has globally unique tutorial slugs', () => {
    const slugs = tutorials.map((t) => t.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('has unique lesson slugs within each tutorial', () => {
    for (const tutorial of tutorials) {
      const slugs = flatLessons(tutorial).map((e) => e.lesson.slug)
      expect(new Set(slugs).size, `duplicate lesson slug in ${tutorial.slug}`).toBe(slugs.length)
    }
  })

  it('gives every lesson a positive duration and non-empty blocks', () => {
    for (const tutorial of tutorials) {
      for (const { lesson } of flatLessons(tutorial)) {
        expect(lesson.duration, `${tutorial.slug}/${lesson.slug}`).toBeGreaterThan(0)
        expect(lesson.blocks.length, `${tutorial.slug}/${lesson.slug}`).toBeGreaterThan(0)
        expect(lesson.description.length).toBeGreaterThan(0)
      }
    }
  })

  it('keeps every quiz answer index inside its options', () => {
    for (const tutorial of tutorials) {
      for (const { lesson } of flatLessons(tutorial)) {
        for (const block of lesson.blocks) {
          if (block.type !== 'quiz') continue
          expect(block.answer, `${lesson.slug}: "${block.question}"`).toBeGreaterThanOrEqual(0)
          expect(block.answer).toBeLessThan(block.options.length)
          expect(block.explanation, `${lesson.slug} missing explanation`).toBeTruthy()
        }
      }
    }
  })
})
