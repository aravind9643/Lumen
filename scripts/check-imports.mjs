/**
 * Guards the eager/lazy import boundary.
 *
 * `src/content/index.ts` reaches every lesson's prose (~213kB). Any module
 * that loads eagerly — i.e. is reachable from App.tsx without passing through
 * a `lazy()` boundary — must import `content/manifest` instead, or the whole
 * content graph lands back in the entry chunk.
 *
 * This is the single easiest regression to introduce and the hardest to
 * notice, because nothing breaks: the site just gets slower. Hence a check.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { dirname, join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const srcDir = join(root, 'src')

const files = []
;(function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) walk(full)
    else if (/\.tsx?$/.test(full)) files.push(full)
  }
})(srcDir)

const read = (f) => readFileSync(f, 'utf8')

/** Resolve a relative specifier to a real file on disk. */
function resolveImport(fromFile, spec) {
  if (!spec.startsWith('.')) return null
  const base = resolve(dirname(fromFile), spec)
  for (const candidate of [
    base,
    `${base}.ts`,
    `${base}.tsx`,
    join(base, 'index.ts'),
    join(base, 'index.tsx'),
  ]) {
    try {
      if (statSync(candidate).isFile()) return candidate
    } catch {
      /* keep trying */
    }
  }
  return null
}

/** Static imports only — a `lazy(() => import(...))` deliberately does not count. */
function staticImports(file) {
  const src = read(file)
  const specs = []
  for (const m of src.matchAll(/^\s*import\s[^;]*?from\s+['"]([^'"]+)['"]/gm)) specs.push(m[1])
  for (const m of src.matchAll(/^\s*import\s+['"]([^'"]+)['"]/gm)) specs.push(m[1])
  return specs.map((s) => resolveImport(file, s)).filter(Boolean)
}

// Walk the static-import graph from the entry point. Anything reachable this
// way is in the initial bundle.
const entry = join(srcDir, 'main.tsx')
const eager = new Set()
;(function crawl(file) {
  if (eager.has(file)) return
  eager.add(file)
  for (const dep of staticImports(file)) crawl(dep)
})(entry)

const heavy = join(srcDir, 'content/index.ts')
const rel = (f) => relative(root, f).replace(/\\/g, '/')

const offenders = [...eager].filter(
  (f) => f !== heavy && staticImports(f).includes(heavy),
)

if (offenders.length) {
  console.error('\n[imports] eager modules importing the full content registry:\n')
  for (const f of offenders) console.error(`  - ${rel(f)}`)
  console.error(
    '\nThese load on first paint, so importing src/content/index.ts pulls every\n' +
      'lesson body into the entry chunk. Use src/content/manifest.ts instead, or\n' +
      'load the module behind a lazy() boundary.\n',
  )
  process.exit(1)
}

console.log(`[imports] ok: ${eager.size} eager modules, none import the full content registry`)
