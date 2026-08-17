/**
 * The site's static (non-content-derived) routes — every page under `src/App.tsx`
 * that isn't `/tutorials/:slug` or `/tutorials/:slug/:lesson`.
 *
 * Single source of truth shared by `prerender.mjs` (which must render every
 * real route) and `generate-seo-files.mjs` (which should list only routes
 * worth indexing). They previously each hardcoded their own copy of this
 * list, which silently drifted: the sitemap was missing `/progress` long
 * after it became a real, prerendered route, because nothing checked the two
 * lists against each other.
 *
 * `indexable: false` is how a route opts out of the sitemap without needing a
 * second list. `/progress` is real and must be prerendered — it just has no
 * evergreen content of its own (a fresh visitor sees "0 of 21 complete"), so
 * submitting it to search does not help anyone find it.
 */
export const STATIC_ROUTES = [
  { path: '/', indexable: true },
  { path: '/tutorials', indexable: true },
  { path: '/roadmaps', indexable: true },
  { path: '/about', indexable: true },
  { path: '/privacy', indexable: true },
  { path: '/progress', indexable: false },
]
