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

/** Height-stable fallback so lazy route swaps don't collapse the layout. */
function RouteFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center" role="status" aria-label="Loading">
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-border-token border-t-accent" />
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

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <ProgressProvider>
          <TTSProvider>
            <BrowserRouter>
              <Shell />
            </BrowserRouter>
          </TTSProvider>
        </ProgressProvider>
      </ThemeProvider>
    </ErrorBoundary>
  )
}
