import { lazy, Suspense, useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { config } from '../../config'
import { cn } from '../../lib/cn'
import { Icon } from '../ui/Icon'
import { ThemePanel, ThemeToggle } from '../ui/ThemeControls'
import { useSearchShortcut } from '../ui/useSearchShortcut'

// Lazy: SearchDialog imports the search index, which reaches the full tutorial
// content. Loading it eagerly would put every lesson's prose in the initial
// bundle just to render a header button.
const SearchDialog = lazy(() =>
  import('../ui/SearchDialog').then((m) => ({ default: m.SearchDialog })),
)

const NAV = [
  { to: '/', label: 'Home', end: true },
  { to: '/tutorials', label: 'Tutorials' },
  { to: '/roadmaps', label: 'Roadmaps' },
  { to: '/glossary', label: 'Glossary' },
  { to: '/progress', label: 'My Progress' },
  { to: '/about', label: 'About' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { pathname } = useLocation()

  useSearchShortcut(() => setSearchOpen(true))

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [pathname])

  return (
    <>
      <header
        className={cn(
          'no-print sticky top-0 z-50 transition-all duration-300',
          scrolled ? 'glass border-b border-border-token' : 'border-b border-transparent',
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
          <Link to="/" className="group flex shrink-0 items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-accent-fg shadow-sm transition-transform group-hover:scale-105">
              <Icon name="sparkles" size={16} />
            </span>
            <span className="text-lg font-bold tracking-tight">{config.site.name}</span>
          </Link>

          <nav className="ml-4 hidden items-center gap-1 md:flex" aria-label="Main">
            {NAV.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  cn(
                    'relative rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                    isActive ? 'text-accent' : 'text-fg-muted hover:text-fg',
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-accent"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-1.5">
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 rounded-xl border border-border-token bg-bg-subtle/60 px-3 py-2 text-sm text-fg-muted transition-colors hover:border-fg-muted/40 hover:text-fg"
              aria-label="Search"
            >
              <Icon name="search" size={14} />
              <span className="hidden lg:inline">Search…</span>
              <kbd className="hidden rounded border border-border-token bg-bg px-1.5 py-0.5 font-sans text-[10px] lg:inline">
                ⌘K
              </kbd>
            </button>

            <ThemeToggle />
            <ThemePanel />

            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-xl text-fg-muted transition-colors hover:bg-bg-subtle hover:text-fg md:hidden"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <Icon name={menuOpen ? 'close' : 'menu'} size={17} />
            </button>
          </div>
        </div>

        {/* Reading progress bar */}
        <motion.div
          style={{ scaleX: progress }}
          className="h-0.5 origin-left bg-accent"
        />

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="overflow-hidden border-t border-border-token bg-bg-elev md:hidden"
              aria-label="Mobile"
            >
              <div className="space-y-1 p-3">
                {NAV.map(({ to, label, end }) => (
                  <NavLink
                    key={to}
                    to={to}
                    end={end}
                    className={({ isActive }) =>
                      cn(
                        'block rounded-xl px-4 py-3 text-sm font-medium transition-colors',
                        isActive ? 'bg-accent-soft text-accent' : 'text-fg-muted hover:bg-bg-subtle hover:text-fg',
                      )
                    }
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Mounted only once opened, so its chunk is fetched on first use. */}
      {searchOpen && (
        <Suspense fallback={null}>
          <SearchDialog open onClose={() => setSearchOpen(false)} />
        </Suspense>
      )}
    </>
  )
}
