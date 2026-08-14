/**
 * Verifies src/content/manifest.ts matches the real tutorial content.
 *
 * The manifest exists so the app shell can list courses without importing
 * ~213kB of lesson prose. That duplication is deliberate, but it can drift —
 * this runs in the build and fails loudly if it does.
 *
 * Both sides are read with the TypeScript compiler rather than regex, so
 * reformatting the content files cannot silently break the comparison.
 */
import { readdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { extractTutorials } from './parse-content.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

const contentDir = join(root, 'src/content/tutorials')
const actual = readdirSync(contentDir)
  .filter((f) => f.endsWith('.ts'))
  .flatMap((f) => extractTutorials(join(contentDir, f)))

const manifest = extractTutorials(join(root, 'src/content/manifest.ts'))

const errors = []
const key = (t) => t.slug

for (const a of actual) {
  const m = manifest.find((x) => key(x) === key(a))
  if (!m) {
    errors.push(`manifest is missing tutorial "${a.slug}"`)
    continue
  }
  for (const f of ['title', 'difficulty', 'icon', 'color']) {
    if (a[f] !== m[f]) errors.push(`${a.slug}.${f}: content="${a[f]}" manifest="${m[f]}"`)
  }
  const aL = a.chapters.flatMap((c) => c.lessons)
  const mL = m.chapters.flatMap((c) => c.lessons)
  if (aL.length !== mL.length) {
    errors.push(`${a.slug}: ${aL.length} lessons in content, ${mL.length} in manifest`)
  }
  aL.forEach((lesson, i) => {
    const ml = mL[i]
    if (!ml) return
    if (lesson.slug !== ml.slug) errors.push(`${a.slug}[${i}].slug: "${lesson.slug}" vs "${ml.slug}"`)
    if (lesson.title !== ml.title) errors.push(`${a.slug}/${lesson.slug}.title differs`)
    if (lesson.duration !== ml.duration)
      errors.push(`${a.slug}/${lesson.slug}.duration: ${lesson.duration} vs ${ml.duration}`)
  })
}

for (const m of manifest) {
  if (!actual.find((x) => key(x) === key(m))) errors.push(`manifest has unknown tutorial "${m.slug}"`)
}

if (errors.length) {
  console.error('\n[manifest] out of sync with src/content/tutorials:\n')
  for (const e of errors) console.error(`  - ${e}`)
  console.error('\nUpdate src/content/manifest.ts to match.\n')
  process.exit(1)
}

const lessons = actual.reduce((n, t) => n + t.chapters.flatMap((c) => c.lessons).length, 0)
console.log(`[manifest] in sync: ${actual.length} tutorials, ${lessons} lessons`)
