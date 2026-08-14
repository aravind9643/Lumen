import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { config } from '../config'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    adsbygoogle?: unknown[]
  }
}

let initialised = false

/**
 * Loads GA4 lazily and only when a measurement ID is configured, so local
 * development and self-hosted deployments make zero third-party requests.
 */
export function initAnalytics() {
  if (initialised || !config.analytics.measurementId || typeof window === 'undefined') return
  initialised = true

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${config.analytics.measurementId}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args)
  }
  window.gtag('js', new Date())
  // Routing is client-side, so page views are sent manually per navigation.
  window.gtag('config', config.analytics.measurementId, { send_page_view: false })
}

export function trackPageView(path: string, title?: string) {
  if (config.analytics.debug) console.debug('[analytics] page_view', path, title)
  window.gtag?.('event', 'page_view', {
    page_path: path,
    page_title: title ?? document.title,
    page_location: window.location.href,
  })
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (config.analytics.debug) console.debug('[analytics]', name, params)
  window.gtag?.('event', name, params)
}

/** Fires a page_view on every client-side navigation. */
export function usePageTracking() {
  const { pathname, search } = useLocation()

  useEffect(() => {
    // Defer a tick so the route's <SEO> has updated document.title first.
    const id = window.setTimeout(() => trackPageView(pathname + search), 0)
    return () => window.clearTimeout(id)
  }, [pathname, search])
}

/** Domain events, named in one place so reporting stays consistent. */
export const events = {
  lessonStart: (tutorial: string, lesson: string) => trackEvent('lesson_start', { tutorial, lesson }),
  lessonComplete: (tutorial: string, lesson: string) => trackEvent('lesson_complete', { tutorial, lesson }),
  scrollDepth: (tutorial: string, lesson: string, percent: number) =>
    trackEvent('scroll_depth', { tutorial, lesson, percent }),
  search: (query: string, results: number) => trackEvent('search', { search_term: query, results }),
  quizAnswer: (tutorial: string, lesson: string, correct: boolean) =>
    trackEvent('quiz_answer', { tutorial, lesson, correct }),
  ttsToggle: (action: 'play' | 'pause' | 'stop') => trackEvent('tts_toggle', { action }),
  themeChange: (mode: string) => trackEvent('theme_change', { mode }),
  codeCopy: (language: string) => trackEvent('code_copy', { language }),
}
