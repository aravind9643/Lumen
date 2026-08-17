import { readdirSync, writeFileSync, readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import ts from 'typescript'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const tutorialsDir = join(root, 'src/content/tutorials')

const prop = (node, name) => {
  if (!ts.isObjectLiteralExpression(node)) return undefined
  const p = node.properties.find(
    (x) => ts.isPropertyAssignment(x) && x.name.getText().replace(/['"]/g, '') === name,
  )
  return p?.initializer
}

const str = (node) => (node && ts.isStringLiteral(node) ? node.text : undefined)
const num = (node) => (node && ts.isNumericLiteral(node) ? Number(node.text) : undefined)
const arr = (node) => (node && ts.isArrayLiteralExpression(node) ? node.elements : [])

const files = readdirSync(tutorialsDir).filter((f) => f.endsWith('.ts'))

const tutorials = []
const exportMap = []

for (const file of files) {
  const fullPath = join(tutorialsDir, file)
  const src = ts.createSourceFile(fullPath, readFileSync(fullPath, 'utf8'), ts.ScriptTarget.Latest, true)
  
  let varName = ''
  ts.forEachChild(src, (node) => {
    if (ts.isVariableStatement(node)) {
      for (const decl of node.declarationList.declarations) {
        if (decl.name && ts.isIdentifier(decl.name)) {
          varName = decl.name.text
        }
      }
    }
  })

  const baseName = file.replace('.ts', '')
  exportMap.push({ file: baseName, varName })

  const visit = (node) => {
    if (ts.isObjectLiteralExpression(node) && prop(node, 'slug') && prop(node, 'chapters')) {
      const chapters = arr(prop(node, 'chapters')).map((ch) => ({
        title: str(prop(ch, 'title')),
        lessons: arr(prop(ch, 'lessons')).map((l) => ({
          slug: str(prop(l, 'slug')),
          title: str(prop(l, 'title')),
          duration: num(prop(l, 'duration')),
        })),
      }))

      const tags = arr(prop(node, 'tags')).map((t) => str(t)).filter(Boolean)

      tutorials.push({
        slug: str(prop(node, 'slug')),
        title: str(prop(node, 'title')),
        shortTitle: str(prop(node, 'shortTitle')),
        description: str(prop(node, 'description')),
        category: str(prop(node, 'category')),
        difficulty: str(prop(node, 'difficulty')),
        icon: str(prop(node, 'icon')),
        tags,
        color: str(prop(node, 'color')),
        updated: str(prop(node, 'updated')),
        chapters,
      })
      return
    }
    ts.forEachChild(node, visit)
  }
  visit(src)
}

// Write src/content/manifest.ts
let manifestCode = `import type { Difficulty } from './types'
import type { IconName } from '../lib/icons'

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

`

const metaVars = []

for (const t of tutorials) {
  const camelSlug = t.slug.replace(/-([a-z])/g, (g) => g[1].toUpperCase())
  const varMeta = `${camelSlug}Meta`
  metaVars.push(varMeta)
  manifestCode += `export const ${varMeta}: TutorialMeta = ${JSON.stringify(t, null, 2)}\n\n`
}

manifestCode += `export const tutorialsMeta: TutorialMeta[] = [
  ${metaVars.join(',\n  ')}
]

export const flatLessonsMeta = (tutorial: TutorialMeta) =>
  tutorial.chapters.flatMap((chapter) => chapter.lessons.map((lesson) => ({ chapter, lesson })))

export const totalLessonCount = tutorialsMeta.reduce(
  (sum, t) => sum + t.chapters.reduce((cSum, c) => cSum + c.lessons.length, 0),
  0,
)

export const allCategories = [...new Set(tutorialsMeta.map((t) => t.category))]

export const totalDuration = (tutorial: TutorialMeta) =>
  tutorial.chapters.flatMap((c) => c.lessons).reduce((sum, l) => sum + l.duration, 0)

export const lessonCount = (tutorial: TutorialMeta) =>
  tutorial.chapters.reduce((sum, c) => sum + c.lessons.length, 0)

export const tutorialsByCategory = (list: TutorialMeta[] = tutorialsMeta) => {
  const cats = [...new Set(list.map((t) => t.category))]
  return cats.map((category) => ({
    category,
    tutorials: list.filter((t) => t.category === category),
  }))
}

export const nextTutorial = (arg: string | TutorialMeta) => {
  const slug = typeof arg === 'string' ? arg : arg.slug
  const idx = tutorialsMeta.findIndex((t) => t.slug === slug)
  return idx >= 0 && idx < tutorialsMeta.length - 1 ? tutorialsMeta[idx + 1] : undefined
}

export const getTutorialMeta = (slug: string) => tutorialsMeta.find((t) => t.slug === slug)

export const getLessonMeta = (tutorialSlug: string, lessonSlug: string) => {
  const tutorial = getTutorialMeta(tutorialSlug)
  if (!tutorial) return null
  for (const chapter of tutorial.chapters) {
    const lesson = chapter.lessons.find((l) => l.slug === lessonSlug)
    if (lesson) return { tutorial, chapter, lesson }
  }
  return null
}
`

writeFileSync(join(root, 'src/content/manifest.ts'), manifestCode)
console.log(`Generated manifest.ts with ${tutorials.length} courses.`)

// Write src/content/index.ts
let indexCode = `import type { Block, ResolvedLesson, Tutorial } from './types'
import type { IconName } from '../lib/icons'
`

for (const { file, varName } of exportMap) {
  indexCode += `import { ${varName} } from './tutorials/${file}'\n`
}

indexCode += `\nexport const tutorials: Tutorial[] = [\n  ${exportMap.map((e) => e.varName).join(',\n  ')}\n]\n`

indexCode += `
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
        out.push(block.author ? \`\${block.text} — \${block.author}\` : block.text)
        break
      case 'definition':
        out.push(\`\${block.term}: \${block.plain}\`)
        break
      case 'callout':
        out.push(block.title ? \`\${block.title}: \${block.text}\` : block.text)
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
          out.push(\`\${step.title}: \${step.text}\`)
        }
        break
      case 'comparison':
        if (block.title) out.push(block.title)
        out.push(\`\${block.left.label}: \${block.left.items.join(', ')}\`)
        out.push(\`\${block.right.label}: \${block.right.items.join(', ')}\`)
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

  const terms = q.split(/\\s+/).filter(Boolean)
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
`

writeFileSync(join(root, 'src/content/index.ts'), indexCode)
console.log(`Generated src/content/index.ts with ${exportMap.length} tutorial modules.`)
