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
  it('returns null for unknown slugs or empty catalog rather than throwing', () => {
    expect(resolveLesson('nope', 'what-is-ai-and-machine-learning')).toBeNull()
    expect(resolveLesson('generative-ai', 'nope')).toBeNull()
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

  it('returns empty array when content registry has no courses', () => {
    expect(searchContent('diffusion')).toEqual([])
    expect(searchContent('the')).toEqual([])
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

  it('keeps declared duration roughly consistent with actual reading time', () => {
    // Technical prose reads slower than casual text; this band is deliberately
    // generous (90-260 wpm) so it only catches a duration that is wildly off —
    // e.g. a lesson duplicated from another and never re-timed — not every
    // lesson that reads a little fast or slow for a given reader. Code/exercise
    // blocks take real time to work through that prose word count can't see,
    // so each one adds extra slack rather than being counted as words.
    const MIN_WPM = 70
    const MAX_WPM = 260
    const MINUTES_PER_CODE_OR_EXERCISE_BLOCK = 1.5

    for (const tutorial of tutorials) {
      for (const { lesson } of flatLessons(tutorial)) {
        const words = blocksToText(lesson.blocks).join(' ').split(/\s+/).filter(Boolean).length
        const workBlocks = lesson.blocks.filter((b) => b.type === 'code' || b.type === 'exercise').length
        const slack = workBlocks * MINUTES_PER_CODE_OR_EXERCISE_BLOCK
        const impliedMinutes = words / 180 // midpoint of the band, for the message only
        const minMinutes = words / MAX_WPM
        const maxMinutes = words / MIN_WPM + slack

        expect(
          lesson.duration,
          `${tutorial.slug}/${lesson.slug}: ${words} words implies ~${impliedMinutes.toFixed(1)} min, but duration is ${lesson.duration}`,
        ).toBeGreaterThanOrEqual(Math.floor(minMinutes))
        expect(
          lesson.duration,
          `${tutorial.slug}/${lesson.slug}: ${words} words (+ ${workBlocks} code/exercise blocks) implies up to ~${maxMinutes.toFixed(1)} min, but duration is ${lesson.duration}`,
        ).toBeLessThanOrEqual(Math.ceil(maxMinutes) + 1)
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
