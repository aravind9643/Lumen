/**
 * Reads tutorial structure out of the content files using the TypeScript
 * compiler's own parser.
 *
 * Shared by the sitemap generator and the manifest sync check. Both previously
 * risked regex-based parsing, which breaks silently the first time a file is
 * reformatted — the failure mode being a quietly incomplete sitemap.
 */
import { readFileSync } from 'node:fs'
import ts from 'typescript'

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

/**
 * @returns tutorials with their chapters, lessons, and flat lesson slug list.
 */
export function extractTutorials(file) {
  const src = ts.createSourceFile(file, readFileSync(file, 'utf8'), ts.ScriptTarget.Latest, true)
  const found = []

  const visit = (node) => {
    // A tutorial is any object literal carrying both `slug` and `chapters`.
    if (ts.isObjectLiteralExpression(node) && prop(node, 'slug') && prop(node, 'chapters')) {
      const chapters = arr(prop(node, 'chapters')).map((ch) => ({
        title: str(prop(ch, 'title')),
        lessons: arr(prop(ch, 'lessons')).map((l) => ({
          slug: str(prop(l, 'slug')),
          title: str(prop(l, 'title')),
          duration: num(prop(l, 'duration')),
        })),
      }))
      found.push({
        slug: str(prop(node, 'slug')),
        title: str(prop(node, 'title')),
        difficulty: str(prop(node, 'difficulty')),
        icon: str(prop(node, 'icon')),
        color: str(prop(node, 'color')),
        chapters,
        lessonSlugs: chapters.flatMap((c) => c.lessons.map((l) => l.slug)),
      })
      return // lessons already collected; no need to descend
    }
    ts.forEachChild(node, visit)
  }

  visit(src)
  return found
}
