/**
 * Bundle budget.
 *
 * The initial payload was cut roughly in half by moving lesson prose out of
 * the entry graph. Nothing stops that regressing — an accidental static
 * import just makes the site slower, with no error. This fails the build if
 * the eagerly-loaded JS grows past budget.
 *
 * Run after `vite build`.
 */
import { gzipSync } from 'node:zlib'
import { readFileSync, readdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')

/** Budgets in KB (gzipped). Raise deliberately, never to make a failure go away. */
const BUDGET_EAGER_KB = 200
const BUDGET_TOTAL_KB = 400

let html
try {
  html = readFileSync(join(dist, 'index.html'), 'utf8')
} catch {
  console.error('[bundle] dist/index.html not found — run `npm run build` first')
  process.exit(1)
}

// Eager = whatever index.html pulls in itself: the entry script plus anything
// it modulepreloads. Lazy route chunks are fetched later and do not count.
const referenced = new Set(
  [...html.matchAll(/(?:src|href)="\/assets\/([^"]+\.(?:js|css))"/g)].map((m) => m[1]),
)

const gzipKB = (file) => gzipSync(readFileSync(join(dist, 'assets', file))).length / 1024

let eagerKB = 0
for (const file of referenced) eagerKB += gzipKB(file)

const allAssets = readdirSync(join(dist, 'assets')).filter((f) => /\.(js|css)$/.test(f))
let totalKB = 0
for (const file of allAssets) totalKB += gzipKB(file)

const fmt = (n) => `${n.toFixed(1)}kB`
const rows = [...referenced]
  .map((f) => `    ${f} — ${fmt(gzipKB(f))}`)
  .join('\n')

console.log(`[bundle] eager (gzipped): ${fmt(eagerKB)} / ${BUDGET_EAGER_KB}kB budget`)
console.log(rows)
console.log(`[bundle] all assets:      ${fmt(totalKB)} / ${BUDGET_TOTAL_KB}kB budget`)

const errors = []
if (eagerKB > BUDGET_EAGER_KB) {
  errors.push(
    `eager payload ${fmt(eagerKB)} exceeds ${BUDGET_EAGER_KB}kB. Something that loads on ` +
      `first paint grew — check for a new static import reaching heavy code.`,
  )
}
if (totalKB > BUDGET_TOTAL_KB) {
  errors.push(`total assets ${fmt(totalKB)} exceeds ${BUDGET_TOTAL_KB}kB.`)
}

if (errors.length) {
  console.error('\n[bundle] over budget:\n')
  for (const e of errors) console.error(`  - ${e}`)
  console.error('')
  process.exit(1)
}

// Sanity: lesson prose must not be in the eager graph. Cheap direct assertion
// alongside check-imports, which proves the same thing structurally.
for (const file of referenced) {
  if (!file.endsWith('.js')) continue
  const src = readFileSync(join(dist, 'assets', file), 'utf8')
  if (src.includes('gradient descent') || src.includes('Retrieval-Augmented')) {
    console.error(`\n[bundle] lesson prose found in eagerly-loaded ${file}\n`)
    process.exit(1)
  }
}

console.log('[bundle] ok: no lesson content in the eager graph')
