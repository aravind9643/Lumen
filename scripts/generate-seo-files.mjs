/**
 * Generates sitemap.xml and robots.txt from the tutorial registry.
 *
 * Runs before `vite build` and writes into `public/`, so the files are copied
 * into `dist/` like any other static asset. Deriving them from the content
 * itself means a new lesson is indexed without anyone remembering to update
 * a list by hand.
 */
import { mkdirSync, readdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { extractTutorials } from './parse-content.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const siteUrl = (process.env.VITE_SITE_URL || 'https://lumen.tutorial').replace(/\/$/, '')

const dir = join(root, 'src/content/tutorials')
const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/tutorials', priority: '0.9', changefreq: 'weekly' },
  { path: '/about', priority: '0.4', changefreq: 'monthly' },
  { path: '/privacy', priority: '0.3', changefreq: 'yearly' },
]

let lessonCount = 0

// Parsed with the TypeScript compiler rather than regex: an indentation-based
// pattern would silently drop lessons the first time anyone reformats a file.
for (const file of readdirSync(dir).filter((f) => f.endsWith('.ts'))) {
  for (const tutorial of extractTutorials(join(dir, file))) {
    routes.push({ path: `/tutorials/${tutorial.slug}`, priority: '0.8', changefreq: 'monthly' })
    for (const lessonSlug of tutorial.lessonSlugs) {
      routes.push({
        path: `/tutorials/${tutorial.slug}/${lessonSlug}`,
        priority: '0.7',
        changefreq: 'monthly',
      })
      lessonCount++
    }
  }
}

if (lessonCount === 0) {
  // Shipping an empty sitemap is worse than shipping none — fail loudly.
  console.error('[seo] no lessons found; refusing to write an empty sitemap')
  process.exit(1)
}

const today = new Date().toISOString().slice(0, 10)

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${siteUrl}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`

mkdirSync(join(root, 'public'), { recursive: true })
writeFileSync(join(root, 'public/sitemap.xml'), sitemap)
writeFileSync(join(root, 'public/robots.txt'), robots)

console.log(`[seo] sitemap.xml: ${routes.length} URLs (${lessonCount} lessons) at ${siteUrl}`)
