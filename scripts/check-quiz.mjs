/**
 * Quiz sanity checks.
 *
 * Catches two real defects:
 *  - an `answer` index pointing outside the options array (renders nothing
 *    as correct, and the explanation contradicts the marking)
 *  - correct answers clustered at one position, which lets a reader score
 *    full marks by spotting the pattern instead of learning anything
 */
import { readdirSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import ts from 'typescript'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dir = join(root, 'src/content/tutorials')

const prop = (node, name) => {
  if (!ts.isObjectLiteralExpression(node)) return undefined
  const p = node.properties.find(
    (x) => ts.isPropertyAssignment(x) && x.name.getText().replace(/['"]/g, '') === name,
  )
  return p?.initializer
}

const quizzes = []

for (const file of readdirSync(dir).filter((f) => f.endsWith('.ts'))) {
  const src = ts.createSourceFile(
    file,
    readFileSync(join(dir, file), 'utf8'),
    ts.ScriptTarget.Latest,
    true,
  )
  const visit = (node) => {
    if (ts.isObjectLiteralExpression(node)) {
      const type = prop(node, 'type')
      if (type && ts.isStringLiteral(type) && type.text === 'quiz') {
        const opts = prop(node, 'options')
        const ans = prop(node, 'answer')
        const q = prop(node, 'question')
        quizzes.push({
          file,
          question: q && ts.isStringLiteral(q) ? q.text : '(?)',
          count: opts && ts.isArrayLiteralExpression(opts) ? opts.elements.length : 0,
          answer: ans && ts.isNumericLiteral(ans) ? Number(ans.text) : -1,
          hasExplanation: !!prop(node, 'explanation'),
        })
      }
    }
    ts.forEachChild(node, visit)
  }
  visit(src)
}

const errors = []

for (const q of quizzes) {
  const where = `${q.file}: "${q.question.slice(0, 60)}…"`
  if (q.count < 2) errors.push(`${where} — only ${q.count} options`)
  if (q.answer < 0 || q.answer >= q.count) {
    errors.push(`${where} — answer index ${q.answer} is outside 0..${q.count - 1}`)
  }
  if (!q.hasExplanation) errors.push(`${where} — no explanation`)
}

// Distribution: no single position should hold more than 50% of answers.
const dist = {}
for (const q of quizzes) dist[q.answer] = (dist[q.answer] ?? 0) + 1
const worst = Math.max(...Object.values(dist))
const share = worst / quizzes.length

if (quizzes.length >= 6 && share > 0.5) {
  const pos = Object.entries(dist).find(([, n]) => n === worst)[0]
  errors.push(
    `answer positions are clustered: ${worst}/${quizzes.length} (${Math.round(share * 100)}%) ` +
      `sit at index ${pos}. A reader can pattern-match instead of reading.`,
  )
}

if (errors.length) {
  console.error('\n[quiz] problems found:\n')
  for (const e of errors) console.error(`  - ${e}`)
  console.error('')
  process.exit(1)
}

const summary = Object.entries(dist)
  .sort(([a], [b]) => a - b)
  .map(([i, n]) => `${i}:${n}`)
  .join('  ')
console.log(`[quiz] ok: ${quizzes.length} quizzes, answer distribution ${summary}`)
