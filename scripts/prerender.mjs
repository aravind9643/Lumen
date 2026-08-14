/**
 * Prerenders every route to static HTML.
 *
 * The app is a client-rendered SPA, so without this a crawler or social
 * scraper receives an empty `<div id="root">` and a single generic title —
 * the entire library is invisible to search. All content is static and known
 * at build time, so each route can be rendered to real markup here.
 *
 * The client still hydrates and takes over; this only changes what arrives in
 * the initial response.
 *
 * Head tags are built from the content registry rather than captured from the
 * render, because `useSEO` writes them in effects, which do not run server-side.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')

// pathToFileURL is required on Windows: the ESM loader rejects bare absolute
// paths like `d:/…` because it reads the drive letter as a URL scheme.
const load = (rel) => import(pathToFileURL(join(dist, rel)).href)

const { render, warmup } = await load('server/entry-server.js')
const { tutorials } = await load('server/content.js')
const { config } = await load('server/config.js')

const template = readFileSync(join(dist, 'index.html'), 'utf8')
const site = config.site
const base = site.url.replace(/\/$/, '')

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

/** Build the <head> block for one route. */
function head({ title, description, path, type = 'website', jsonLd }) {
  const full = title === site.name ? title : `${title} · ${site.name}`
  const url = `${base}${path}`
  const image = site.ogImage ? `${base}${site.ogImage}` : null

  const tags = [
    `<title>${esc(full)}</title>`,
    `<meta name="description" content="${esc(description)}" />`,
    `<link rel="canonical" href="${esc(url)}" />`,
    `<meta property="og:title" content="${esc(full)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    `<meta property="og:type" content="${type}" />`,
    `<meta property="og:url" content="${esc(url)}" />`,
    `<meta property="og:site_name" content="${esc(site.name)}" />`,
    `<meta name="twitter:card" content="${image ? 'summary_large_image' : 'summary'}" />`,
    `<meta name="twitter:title" content="${esc(full)}" />`,
    `<meta name="twitter:description" content="${esc(description)}" />`,
  ]
  if (site.twitter) tags.push(`<meta name="twitter:site" content="${esc(site.twitter)}" />`)
  if (image) {
    tags.push(`<meta property="og:image" content="${esc(image)}" />`)
    tags.push(`<meta name="twitter:image" content="${esc(image)}" />`)
  }
  if (jsonLd) {
    tags.push(`<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`)
  }
  return tags.join('\n    ')
}

// ── Build the route list from the content registry ────────────────────────
const routes = [
  {
    path: '/',
    title: site.name,
    description: site.description,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      name: site.name,
      description: site.description,
      url: base,
    },
  },
  {
    path: '/tutorials',
    title: 'All Tutorials',
    description: `Browse every course across ${[...new Set(tutorials.map((t) => t.category))].join(', ')}.`,
  },
  { path: '/about', title: 'About', description: `About ${site.name} — why it exists and how it is written.` },
  { path: '/privacy', title: 'Privacy', description: 'What data this site stores and what it does not.' },
  { path: '/progress', title: 'My Progress', description: 'Track completed lessons, saved bookmarks, and your study streak.' },
]

for (const tutorial of tutorials) {
  routes.push({
    path: `/tutorials/${tutorial.slug}`,
    title: tutorial.title,
    description: tutorial.description,
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: tutorial.title,
      description: tutorial.description,
      provider: { '@type': 'Organization', name: site.name },
      educationalLevel: tutorial.difficulty,
      keywords: tutorial.tags.join(', '),
    },
  })

  for (const chapter of tutorial.chapters) {
    for (const lesson of chapter.lessons) {
      const url = `${base}/tutorials/${tutorial.slug}/${lesson.slug}`
      routes.push({
        path: `/tutorials/${tutorial.slug}/${lesson.slug}`,
        title: lesson.title,
        description: lesson.description,
        type: 'article',
        jsonLd: {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'LearningResource',
              name: lesson.title,
              description: lesson.description,
              url,
              timeRequired: `PT${lesson.duration}M`,
              educationalLevel: tutorial.difficulty,
              learningResourceType: 'Lesson',
              inLanguage: 'en',
              isPartOf: {
                '@type': 'Course',
                name: tutorial.title,
                url: `${base}/tutorials/${tutorial.slug}`,
              },
              provider: { '@type': 'Organization', name: site.name, url: base },
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Tutorials', item: `${base}/tutorials` },
                { '@type': 'ListItem', position: 2, name: tutorial.shortTitle ?? tutorial.title, item: `${base}/tutorials/${tutorial.slug}` },
                { '@type': 'ListItem', position: 3, name: chapter.title },
                { '@type': 'ListItem', position: 4, name: lesson.title },
              ],
            },
          ],
        },
      })
    }
  }
}

// ── Render ────────────────────────────────────────────────────────────────
// Resolve the lazy route components first. Without this a page renders as the
// bare shell, because renderToString emits the Suspense fallback rather than
// waiting.
//
// Every route is warmed, not one per chunk: `lazy()` state lives per wrapper,
// not per module. About, Privacy, and NotFound all come from Static.tsx but
// have three separate wrappers, so warming only /about left /privacy empty.
await warmup(routes.map((r) => r.path))

let written = 0
let emptyRenders = 0

for (const route of routes) {
  let html = ''
  try {
    ;({ html } = render(route.path))
  } catch (err) {
    console.error(`[prerender] ${route.path} threw: ${err.message}`)
    process.exit(1)
  }

  // A route that renders nothing means the shell failed silently — the whole
  // point of this step is that real markup reaches the response.
  if (html.replace(/<[^>]*>/g, '').trim().length < 100) emptyRenders++

  const page = template
    .replace(/<title>[\s\S]*?<\/title>/, '')
    .replace(/<meta\s+name="description"[^>]*>/, '')
    .replace('</head>', `  ${head(route)}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`)

  const outDir = route.path === '/' ? dist : join(dist, route.path)
  mkdirSync(outDir, { recursive: true })
  writeFileSync(join(outDir, 'index.html'), page)
  written++
}

if (emptyRenders > 0) {
  console.error(`\n[prerender] ${emptyRenders} route(s) produced almost no markup — aborting`)
  process.exit(1)
}

console.log(`[prerender] wrote ${written} static pages`)
