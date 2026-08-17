/**
 * Verifies the prerendered output actually contains content.
 *
 * The failure mode this guards against is silent: if `React.lazy` warmup stops
 * working, every page still builds and deploys — it just contains the bare
 * shell, and the site becomes invisible to crawlers again with no error.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { dirname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')

/** Visible text inside #root, tags and scripts stripped. */
function rootText(html) {
  const start = html.indexOf('<div id="root">')
  if (start === -1) return ''
  const inner = html.slice(start + '<div id="root">'.length)
  return inner
    .replace(/<script[\s\S]*$/i, '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

const pages = []
;(function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) {
      if (entry === 'assets') continue
      walk(full)
    } else if (entry === 'index.html') {
      pages.push(full)
    }
  }
})(dist)

if (pages.length === 0) {
  console.error('[prerender] no HTML pages found in dist — did the build run?')
  process.exit(1)
}

const MIN_CHARS = 300
const SPARSE = new Set(['progress/index.html'])
const SPARSE_MIN = 250

const errors = []
let totalChars = 0

for (const page of pages) {
  const html = readFileSync(page, 'utf8')
  const rel = relative(dist, page).replace(/\\/g, '/')
  const text = rootText(html)
  totalChars += text.length

  const min = SPARSE.has(rel) ? SPARSE_MIN : MIN_CHARS
  if (text.length < min) {
    errors.push(`${rel} — only ${text.length} chars of prerendered content (expected ≥ ${min})`)
  }
  if (!/<title>[^<]+<\/title>/.test(html)) errors.push(`${rel} — missing <title>`)
  if (!/<link rel="canonical"/.test(html)) errors.push(`${rel} — missing canonical URL`)
  if (!/<meta name="description"/.test(html)) errors.push(`${rel} — missing description`)
}

// Every page sharing one title means per-route head tags were not applied.
const titles = pages.map((p) => readFileSync(p, 'utf8').match(/<title>([^<]*)<\/title>/)?.[1] ?? '')
if (new Set(titles).size < Math.min(5, pages.length)) {
  errors.push(`only ${new Set(titles).size} distinct <title> across ${pages.length} pages — head tags are not per-route`)
}

if (errors.length) {
  console.error('\n[prerender] output looks wrong:\n')
  for (const e of errors.slice(0, 12)) console.error(`  - ${e}`)
  if (errors.length > 12) console.error(`  … and ${errors.length - 12} more`)
  console.error('')
  process.exit(1)
}

const avg = Math.round(totalChars / pages.length)
console.log(`[prerender] ok: ${pages.length} pages, ${new Set(titles).size} distinct titles, ~${avg} chars each`)
