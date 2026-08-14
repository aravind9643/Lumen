import { useEffect, useMemo, useRef, useState } from 'react'
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
      // Return focus to whatever opened the dialog, so keyboard users are not
      // dumped at the top of the document.
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
        const r = results[active]
        navigate(`/tutorials/${r.tutorialSlug}/${r.lessonSlug}`)
        onClose()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, results, active, navigate, onClose])

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
        <div className="fixed inset-0 z-[100] flex items-start justify-center p-4 pt-[12vh]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
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
                placeholder="Search lessons, concepts, code…"
                className="flex-1 bg-transparent py-4 text-[15px] outline-none placeholder:text-fg-muted"
                aria-label="Search query"
                role="combobox"
                aria-expanded={results.length > 0}
                aria-controls="search-results"
                aria-activedescendant={results[active] ? `search-result-${active}` : undefined}
                aria-autocomplete="list"
              />
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
              className="max-h-[55vh] overflow-y-auto p-2"
            >
              {query.trim().length < 2 ? (
                <p className="px-3 py-10 text-center text-sm text-fg-muted">
                  Type at least two characters to search.
                </p>
              ) : results.length === 0 ? (
                <p className="px-3 py-10 text-center text-sm text-fg-muted">
                  No results for “{query}”.
                </p>
              ) : (
                results.map((r, i) => (
                  <button
                    key={`${r.tutorialSlug}/${r.lessonSlug}`}
                    id={`search-result-${i}`}
                    data-index={i}
                    role="option"
                    aria-selected={i === active}
                    // Arrow keys drive selection from the input, which keeps
                    // focus; results are reachable without being tab stops.
                    tabIndex={-1}
                    onMouseEnter={() => setActive(i)}
                    onClick={() => {
                      navigate(`/tutorials/${r.tutorialSlug}/${r.lessonSlug}`)
                      onClose()
                    }}
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
