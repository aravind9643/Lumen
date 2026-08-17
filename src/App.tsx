import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ThemeProvider } from './lib/theme'
import { ProgressProvider } from './lib/progress'
import { TTSProvider } from './lib/tts'
import { initAnalytics, usePageTracking } from './lib/analytics'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { useAdSenseScript } from './components/ads/AdSlot'
import { ErrorBoundary } from './components/ErrorBoundary'
import { Home } from './pages/Home'

// Route-level code splitting: the lesson reader and its tutorial content are
// the bulk of the bundle and are not needed to paint the landing page.
const Tutorials = lazy(() => import('./pages/Tutorials').then((m) => ({ default: m.Tutorials })))
const TutorialDetail = lazy(() => import('./pages/TutorialDetail').then((m) => ({ default: m.TutorialDetail })))
const Lesson = lazy(() => import('./pages/Lesson').then((m) => ({ default: m.Lesson })))
const ProgressPage = lazy(() => import('./pages/Progress').then((m) => ({ default: m.ProgressPage })))
const About = lazy(() => import('./pages/Static').then((m) => ({ default: m.About })))
const Privacy = lazy(() => import('./pages/Static').then((m) => ({ default: m.Privacy })))
const NotFound = lazy(() => import('./pages/Static').then((m) => ({ default: m.NotFound })))

/**
 * Content-shaped skeleton so a lazy route swap reads as "the page is arriving"
 * rather than a bare spinner with no relation to what's about to render.
 * Shared across all lazy routes rather than one skeleton per page, since the
 * exact layout isn't known until the real component mounts anyway.
 */
function RouteFallback() {
  return (
    <div
      className="mx-auto w-full max-w-4xl animate-pulse space-y-6 px-4 py-10 sm:px-6 lg:px-8"
      role="status"
      aria-label="Loading"
    >
      <div className="h-4 w-24 rounded bg-bg-subtle" />
      <div className="h-8 w-2/3 rounded bg-bg-subtle" />
      <div className="h-4 w-full rounded bg-bg-subtle" />
      <div className="h-4 w-5/6 rounded bg-bg-subtle" />
      <div className="mt-8 h-40 w-full rounded-2xl bg-bg-subtle" />
      <div className="h-4 w-full rounded bg-bg-subtle" />
      <div className="h-4 w-4/5 rounded bg-bg-subtle" />
    </div>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    // Lesson pages manage their own scroll reset alongside tracking state.
    if (!pathname.match(/^\/tutorials\/[^/]+\/[^/]+$/)) {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname])
  return null
}

function AnimatedRoutes() {
  const location = useLocation()
  usePageTracking()

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1"
      >
        {/* Keyed by pathname so navigating away from a failed route recovers,
            rather than the boundary staying latched on the old error. */}
        <ErrorBoundary key={location.pathname}>
        <Suspense fallback={<RouteFallback />}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/tutorials/:tutorialSlug" element={<TutorialDetail />} />
          <Route path="/tutorials/:tutorialSlug/:lessonSlug" element={<Lesson />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
        </ErrorBoundary>
      </motion.main>
    </AnimatePresence>
  )
}

function Shell() {
  useAdSenseScript()

  useEffect(() => {
    initAnalytics()
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:font-semibold focus:text-accent-fg"
      >
        Skip to content
      </a>
      <Header />
      <div id="main" className="flex flex-1 flex-col">
        <ScrollToTop />
        <AnimatedRoutes />
      </div>
      <Footer />
    </div>
  )
}

/**
 * Everything below the router.
 *
 * Split out so the prerenderer can mount the same tree inside a StaticRouter
 * at build time, while the browser uses BrowserRouter. Nothing here may touch
 * `window` during render — only inside effects, which do not run on the server.
 */
export function AppRoutes() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <ProgressProvider>
          <TTSProvider>
            <Shell />
          </TTSProvider>
        </ProgressProvider>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
