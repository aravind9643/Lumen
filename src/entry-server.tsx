import { renderToString } from 'react-dom/server'
// v7 moved StaticRouter to `react-router`; it is no longer under
// `react-router-dom/server`.
import { StaticRouter } from 'react-router'
import { AppRoutes } from './App'

/**
 * Build-time entry point.
 *
 * Renders a route to HTML so crawlers and social scrapers get real content
 * instead of an empty root div. The client still hydrates and takes over —
 * this only changes what arrives in the initial response.
 */
export function render(url: string) {
  const html = renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>,
  )
  return { html }
}

/**
 * Resolves every `React.lazy` route ahead of the real render.
 *
 * `renderToString` cannot wait on suspended components — it emits the Suspense
 * fallback and moves on, which prerenders the shell with an empty body.
 * `React.lazy` only begins loading when React first tries to render it, so
 * importing the modules directly is not enough: the lazy wrapper tracks its
 * own state.
 *
 * The reliable fix is to render each route once (populating those wrappers),
 * let the microtask queue drain, and only then render for real. Called once by
 * the prerender script before its loop.
 */
export async function warmup(urls: string[]) {
  for (const url of urls) {
    try {
      render(url)
    } catch {
      // A suspend during warmup is the expected outcome, not a failure.
    }
  }
  // Let the dynamic imports triggered above settle. Two macrotask turns is
  // enough for the import promises and React's lazy bookkeeping to complete.
  await new Promise((resolve) => setTimeout(resolve, 0))
  await new Promise((resolve) => setTimeout(resolve, 0))
}
