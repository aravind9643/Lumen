import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

/**
 * `initAnalytics` guards itself with a module-level `initialised` flag, so it
 * cannot be re-triggered within one module instance. Every test that cares
 * about that flag's starting state uses `vi.resetModules()` + a fresh
 * `import()`, otherwise tests would pass or fail based on run order.
 */

const mockConfig = vi.hoisted(() => ({
  analytics: { measurementId: '', debug: false },
}))

vi.mock('../../src/config', () => ({ config: mockConfig }))

async function freshModule() {
  vi.resetModules()
  return import('../../src/lib/analytics')
}

beforeEach(() => {
  mockConfig.analytics.measurementId = ''
  mockConfig.analytics.debug = false
  document.head.querySelectorAll('script').forEach((s) => s.remove())
  delete window.gtag
  delete window.dataLayer
})

afterEach(() => {
  vi.restoreAllMocks()
})

describe('initAnalytics', () => {
  it('does nothing when no measurement ID is configured', async () => {
    const { initAnalytics } = await freshModule()
    initAnalytics()
    expect(document.head.querySelector('script[src*="googletagmanager"]')).toBeNull()
    expect(window.gtag).toBeUndefined()
  })

  it('injects the GA script and defines gtag when an ID is set', async () => {
    mockConfig.analytics.measurementId = 'G-TEST123'
    const { initAnalytics } = await freshModule()
    initAnalytics()

    const script = document.head.querySelector<HTMLScriptElement>('script[src*="googletagmanager"]')
    expect(script?.src).toContain('G-TEST123')
    expect(window.gtag).toBeTypeOf('function')
  })

  it('disables automatic page_view, since routing is client-side', async () => {
    // The app fires page views itself on navigation (usePageTracking); if GA's
    // own automatic page_view were left on, every route change would be
    // double-counted.
    mockConfig.analytics.measurementId = 'G-TEST123'
    const { initAnalytics } = await freshModule()
    initAnalytics()

    const sentConfig = window.dataLayer?.find(
      (entry) => Array.isArray(entry) && entry[0] === 'config',
    ) as unknown[] | undefined
    expect(sentConfig?.[2]).toMatchObject({ send_page_view: false })
  })

  it('only injects the script once even if called repeatedly', async () => {
    mockConfig.analytics.measurementId = 'G-TEST123'
    const { initAnalytics } = await freshModule()
    initAnalytics()
    initAnalytics()
    initAnalytics()
    expect(document.head.querySelectorAll('script[src*="googletagmanager"]')).toHaveLength(1)
  })
})

describe('trackPageView and trackEvent', () => {
  it('is a silent no-op before gtag exists', async () => {
    const { trackPageView, trackEvent } = await freshModule()
    expect(() => trackPageView('/x')).not.toThrow()
    expect(() => trackEvent('anything')).not.toThrow()
  })

  it('forwards a page_view with path, title, and location', async () => {
    const { trackPageView } = await freshModule()
    const gtag = vi.fn()
    window.gtag = gtag

    trackPageView('/tutorials/x', 'X Page')
    expect(gtag).toHaveBeenCalledWith('event', 'page_view', {
      page_path: '/tutorials/x',
      page_title: 'X Page',
      page_location: window.location.href,
    })
  })

  it('falls back to document.title when no title is given', async () => {
    const { trackPageView } = await freshModule()
    document.title = 'Fallback Title'
    const gtag = vi.fn()
    window.gtag = gtag

    trackPageView('/x')
    expect(gtag).toHaveBeenCalledWith(
      'event',
      'page_view',
      expect.objectContaining({ page_title: 'Fallback Title' }),
    )
  })

  it('forwards a named event with its params', async () => {
    const { trackEvent } = await freshModule()
    const gtag = vi.fn()
    window.gtag = gtag

    trackEvent('custom_thing', { a: 1 })
    expect(gtag).toHaveBeenCalledWith('event', 'custom_thing', { a: 1 })
  })

  it('defaults params to an empty object', async () => {
    const { trackEvent } = await freshModule()
    const gtag = vi.fn()
    window.gtag = gtag

    trackEvent('no_params')
    expect(gtag).toHaveBeenCalledWith('event', 'no_params', {})
  })
})

describe('events', () => {
  it('every helper maps to the documented event name and shape', async () => {
    const { events } = await freshModule()
    const gtag = vi.fn()
    window.gtag = gtag

    events.lessonStart('t', 'l')
    expect(gtag).toHaveBeenLastCalledWith('event', 'lesson_start', { tutorial: 't', lesson: 'l' })

    events.lessonComplete('t', 'l')
    expect(gtag).toHaveBeenLastCalledWith('event', 'lesson_complete', { tutorial: 't', lesson: 'l' })

    events.scrollDepth('t', 'l', 50)
    expect(gtag).toHaveBeenLastCalledWith('event', 'scroll_depth', { tutorial: 't', lesson: 'l', percent: 50 })

    events.search('gradient descent', 3)
    expect(gtag).toHaveBeenLastCalledWith('event', 'search', { search_term: 'gradient descent', results: 3 })

    events.quizAnswer('t', 'l', true)
    expect(gtag).toHaveBeenLastCalledWith('event', 'quiz_answer', { tutorial: 't', lesson: 'l', correct: true })

    events.ttsToggle('pause')
    expect(gtag).toHaveBeenLastCalledWith('event', 'tts_toggle', { action: 'pause' })

    events.themeChange('dark')
    expect(gtag).toHaveBeenLastCalledWith('event', 'theme_change', { mode: 'dark' })

    events.codeCopy('python')
    expect(gtag).toHaveBeenLastCalledWith('event', 'code_copy', { language: 'python' })
  })
})
