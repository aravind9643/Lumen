import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { searchContent } from '../../content'
import { events } from '../../lib/analytics'
import { cn } from '../../lib/cn'
import { Icon } from './Icon'

export function SearchDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  /** Element focused before opening, so focus can be handed back on close. */
  const restoreFocusTo = useRef<HTMLElement | null>(null)
  const navigate = useNavigate()

  // Debounce the query itself, not just the analytics event. Searching scans
  // every lesson's prose, which is wasted work on each keystroke of a word
  // the user is still typing.
  const [debounced, setDebounced] = useState('')
  useEffect(() => {
    const id = window.setTimeout(() => setDebounced(query), 120)
    return () => window.clearTimeout(id)
  }, [query])

  const [recentSearches, setRecentSearches] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('lumen:recent-searches')
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  })

  const saveRecentSearch = useCallback((term: string) => {
    const trimmed = term.trim()
    if (!trimmed) return
    setRecentSearches((prev) => {
      const updated = [trimmed, ...prev.filter((s) => s.toLowerCase() !== trimmed.toLowerCase())].slice(0, 5)
      try {
        localStorage.setItem('lumen:recent-searches', JSON.stringify(updated))
      } catch {
        // ignore
      }
      return updated
    })
  }, [])

  const clearRecentSearches = () => {
    setRecentSearches([])
    try {
      localStorage.removeItem('lumen:recent-searches')
    } catch {
      // ignore
    }
  }

  const TRENDING_TOPICS = [
    'LoRA & QLoRA',
    'FastAPI',
    'Spring Boot',
    'Docker Compose',
    'RAG & Vector DBs',
    'Transformers',
    'Options Greeks',
    'PySpark',
    'Jetpack Compose',
    'Entity Framework',
  ]

  const QUICK_TRACKS = [
    { label: 'Generative AI', slug: 'generative-ai', icon: 'brain' as const, color: '#6366f1' },
    { label: 'Python Mastery', slug: 'python-programming', icon: 'code' as const, color: '#0ea5e9' },
    { label: 'Java Enterprise', slug: 'java-enterprise', icon: 'code' as const, color: '#f97316' },
    { label: 'AWS Cloud Architecture', slug: 'aws-cloud', icon: 'chart' as const, color: '#f59e0b' },
    { label: 'Full-Stack Web Dev', slug: 'web-development', icon: 'code' as const, color: '#10b981' },
    { label: 'Flutter Mobile', slug: 'flutter-dart', icon: 'robot' as const, color: '#0284c7' },
  ]

  const results = useMemo(() => searchContent(debounced), [debounced])

  useEffect(() => {
    if (!open) return
    setQuery('')
    setActive(0)
    restoreFocusTo.current = document.activeElement as HTMLElement | null
    // Wait for the enter animation before focusing so the caret lands cleanly.
    const id = window.setTimeout(() => inputRef.current?.focus(), 60)
    return () => {
      window.clearTimeout(id)
      restoreFocusTo.current?.focus?.()
    }
  }, [open])

  // Keep the highlighted result within the scroll viewport as arrows move it.
  useEffect(() => {
    if (!open) return
    listRef.current
      ?.querySelector(`[data-index="${active}"]`)
      ?.scrollIntoView({ block: 'nearest' })
  }, [active, open])

  useEffect(() => setActive(0), [query])

  // Report searches once the user pauses, not on every keystroke.
  useEffect(() => {
    if (query.trim().length < 2) return
    const id = window.setTimeout(() => events.search(query, results.length), 700)
    return () => window.clearTimeout(id)
  }, [query, results.length])

  const handleSelectResult = useCallback((r: (typeof results)[0]) => {
    saveRecentSearch(query || r.lessonTitle)
    navigate(`/tutorials/${r.tutorialSlug}/${r.lessonSlug}`)
    onClose()
  }, [navigate, onClose, query, saveRecentSearch])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { onClose(); return }
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setActive((i) => Math.min(i + 1, results.length - 1))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setActive((i) => Math.max(i - 1, 0))
      } else if (e.key === 'Enter' && results[active]) {
        e.preventDefault()
        handleSelectResult(results[active])
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, results, active, onClose, handleSelectResult])

  // Prevent the page behind the dialog from scrolling.
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center p-4 pt-[10vh]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Search tutorials"
            initial={{ opacity: 0, scale: 0.97, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -12 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-border-token bg-bg-elev shadow-2xl"
          >
            <div className="flex items-center gap-3 border-b border-border-token px-4">
              <Icon name="search" size={16} className="shrink-0 text-fg-muted" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search lessons, concepts, code, or topics…"
                className="flex-1 bg-transparent py-4 text-[15px] outline-none placeholder:text-fg-muted"
                aria-label="Search query"
                role="combobox"
                aria-expanded={results.length > 0}
                aria-controls="search-results"
                aria-activedescendant={results[active] ? `search-result-${active}` : undefined}
                aria-autocomplete="list"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="rounded-lg p-1 text-fg-muted hover:text-fg"
                  aria-label="Clear query"
                >
                  <Icon name="close" size={13} />
                </button>
              )}
              <button
                onClick={onClose}
                className="rounded-lg p-1.5 text-fg-muted transition-colors hover:bg-bg-subtle hover:text-fg"
                aria-label="Close search"
              >
                <Icon name="close" size={15} />
              </button>
            </div>

            <div
              ref={listRef}
              id="search-results"
              role="listbox"
              aria-label="Search results"
              className="max-h-[55vh] overflow-y-auto p-3"
            >
              {query.trim().length < 2 ? (
                <div className="space-y-5 p-2">
                  {/* Recent Searches */}
                  {recentSearches.length > 0 && (
                    <div>
                      <div className="mb-2 flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-fg-muted">
                          <Icon name="clock" size={11} /> Recent Searches
                        </span>
                        <button
                          onClick={clearRecentSearches}
                          className="text-[11px] text-fg-muted hover:text-accent hover:underline"
                        >
                          Clear
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {recentSearches.map((s) => (
                          <button
                            key={s}
                            onClick={() => setQuery(s)}
                            className="flex items-center gap-1.5 rounded-lg border border-border-token bg-bg px-2.5 py-1 text-xs text-fg hover:border-accent hover:text-accent"
                          >
                            <Icon name="clock" size={10} className="text-fg-muted" />
                            <span>{s}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Trending Topics */}
                  <div>
                    <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-fg-muted">
                      Trending Topics
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {TRENDING_TOPICS.map((t) => (
                        <button
                          key={t}
                          onClick={() => setQuery(t)}
                          className="rounded-lg border border-border-token/80 bg-bg-subtle px-2.5 py-1 text-xs text-fg-muted transition-colors hover:border-accent hover:text-accent"
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quick Jump Tracks */}
                  <div>
                    <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-fg-muted">
                      Quick Jump Tracks
                    </span>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                      {QUICK_TRACKS.map((track) => (
                        <button
                          key={track.slug}
                          onClick={() => {
                            navigate(`/tutorials/${track.slug}`)
                            onClose()
                          }}
                          className="flex items-center gap-2.5 rounded-xl border border-border-token/80 bg-bg p-2.5 text-left text-xs font-semibold text-fg transition-all hover:border-accent hover:text-accent"
                        >
                          <span
                            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-white text-[11px]"
                            style={{ background: track.color }}
                          >
                            <Icon name={track.icon} size={11} />
                          </span>
                          <span className="truncate">{track.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : results.length === 0 ? (
                <div className="py-12 text-center text-sm text-fg-muted">
                  <Icon name="search" size={24} className="mx-auto mb-2 opacity-50" />
                  <p>No results found for &ldquo;{query}&rdquo;</p>
                  <p className="mt-1 text-xs text-fg-muted/70">
                    Try searching for a different keyword or topic tag.
                  </p>
                </div>
              ) : (
                results.map((r, i) => (
                  <button
                    key={`${r.tutorialSlug}/${r.lessonSlug}`}
                    id={`search-result-${i}`}
                    data-index={i}
                    role="option"
                    aria-selected={i === active}
                    tabIndex={-1}
                    onMouseEnter={() => setActive(i)}
                    onClick={() => handleSelectResult(r)}
                    className={cn(
                      'flex w-full items-start gap-3 rounded-xl p-3 text-left transition-colors',
                      i === active ? 'bg-accent-soft' : 'hover:bg-bg-subtle',
                    )}
                  >
                    <span
                      className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-white"
                      style={{ background: r.color }}
                      aria-hidden="true"
                    >
                      <Icon name={r.icon} size={13} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="truncate text-sm font-semibold text-fg">{r.lessonTitle}</span>
                        <span className="shrink-0 rounded-md bg-bg-subtle px-1.5 py-0.5 text-[10px] font-medium text-fg-muted">
                          {r.tutorialTitle}
                        </span>
                      </div>
                      <p className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-fg-muted">
                        {r.excerpt}
                      </p>
                    </div>
                    {i === active && (
                      <Icon name="enter" size={12} className="mt-1 shrink-0 text-accent" />
                    )}
                  </button>
                ))
              )}
            </div>

            <div className="flex items-center justify-between border-t border-border-token bg-bg-subtle/50 px-4 py-2.5 text-[11px] text-fg-muted">
              <span className="flex items-center gap-3">
                <Kbd>↑</Kbd><Kbd>↓</Kbd> navigate
                <Kbd>↵</Kbd> open
                <Kbd>esc</Kbd> close
              </span>
              {/* Live region: announces result counts as the query changes. */}
              <span className="flex items-center gap-1" role="status" aria-live="polite">
                <Icon name="file" size={10} />
                {results.length} result{results.length === 1 ? '' : 's'}
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

const Kbd = ({ children }: { children: React.ReactNode }) => (
  <kbd className="rounded border border-border-token bg-bg-elev px-1.5 py-0.5 font-sans text-[10px]">
    {children}
  </kbd>
)
