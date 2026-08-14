import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ACCENTS, useTheme, type ThemeMode } from '../../lib/theme'
import { cn } from '../../lib/cn'
import { events } from '../../lib/analytics'
import type { IconName } from '../../lib/icons'
import { Icon } from './Icon'

const MODES: { id: ThemeMode; label: string; icon: IconName }[] = [
  { id: 'light', label: 'Light', icon: 'sun' },
  { id: 'dark', label: 'Dark', icon: 'moon' },
  { id: 'system', label: 'System', icon: 'desktop' },
]

/** Quick light/dark toggle for the header. */
export function ThemeToggle() {
  const { resolved, toggle } = useTheme()

  return (
    <button
      onClick={() => {
        toggle()
        events.themeChange(resolved === 'dark' ? 'light' : 'dark')
      }}
      className="relative flex h-9 w-9 items-center justify-center rounded-xl text-fg-muted transition-colors hover:bg-bg-subtle hover:text-fg"
      aria-label={`Switch to ${resolved === 'dark' ? 'light' : 'dark'} mode`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={resolved}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.2 }}
          className="absolute"
        >
          <Icon name={resolved === 'dark' ? 'moon' : 'themeToggle'} size={16} />
        </motion.span>
      </AnimatePresence>
    </button>
  )
}

/** Full theming panel: mode, accent hue, and reading text size. */
export function ThemePanel() {
  const [open, setOpen] = useState(false)
  const { mode, setMode, accent, setAccent, fontScale, setFontScale } = useTheme()
  const triggerRef = useRef<HTMLButtonElement>(null)

  // Escape closes the panel and returns focus to the trigger. Without this the
  // only way to dismiss it is a mouse click on the overlay.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      setOpen(false)
      triggerRef.current?.focus()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <div className="relative">
      <button
        ref={triggerRef}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          'flex h-9 w-9 items-center justify-center rounded-xl transition-colors',
          open ? 'bg-accent-soft text-accent' : 'text-fg-muted hover:bg-bg-subtle hover:text-fg',
        )}
        aria-label="Appearance settings"
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-controls="theme-panel"
      >
        <Icon name="palette" size={16} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} aria-hidden="true" />
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.96 }}
              transition={{ duration: 0.18 }}
              id="theme-panel"
              role="dialog"
              aria-label="Appearance settings"
              className="absolute right-0 z-50 mt-2 w-72 origin-top-right rounded-2xl border border-border-token bg-bg-elev p-4 shadow-xl shadow-black/10"
            >
              <section className="mb-4">
                <h3 className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-fg-muted">
                  Appearance
                </h3>
                <div className="grid grid-cols-3 gap-1.5">
                  {MODES.map(({ id, label, icon }) => (
                    <button
                      key={id}
                      onClick={() => { setMode(id); events.themeChange(id) }}
                      className={cn(
                        'flex flex-col items-center gap-1.5 rounded-xl border px-2 py-2.5 text-xs font-medium transition-all',
                        mode === id
                          ? 'border-accent bg-accent-soft text-accent'
                          : 'border-border-token text-fg-muted hover:border-fg-muted/40 hover:text-fg',
                      )}
                    >
                      <Icon name={icon} size={14} />
                      {label}
                    </button>
                  ))}
                </div>
              </section>

              <section className="mb-4">
                <h3 className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-fg-muted">
                  Accent colour
                </h3>
                <div className="flex gap-2">
                  {ACCENTS.map(({ id, label, swatch }) => (
                    <button
                      key={id}
                      onClick={() => setAccent(id)}
                      style={{ background: swatch }}
                      className={cn(
                        'flex h-8 w-8 items-center justify-center rounded-full transition-transform hover:scale-110',
                        // An explicit ring colour — `ring-2` alone falls back to
                        // a default that can vanish against the swatch itself.
                        accent === id && 'ring-2 ring-fg ring-offset-2 ring-offset-bg-elev',
                      )}
                      aria-label={`${label} accent`}
                      aria-pressed={accent === id}
                    >
                      {/* Swatch hues vary in lightness, so a plain white tick
                          can wash out on amber. The shadow keeps it readable. */}
                      {accent === id && (
                        <Icon
                          name="check"
                          size={12}
                          className="text-white [filter:drop-shadow(0_0_1.5px_rgba(0,0,0,0.85))]"
                        />
                      )}
                    </button>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-fg-muted">
                  <Icon name="textSize" size={11} /> Reading size
                </h3>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min={0.9}
                    max={1.3}
                    step={0.05}
                    value={fontScale}
                    onChange={(e) => setFontScale(Number(e.target.value))}
                    className="h-1.5 flex-1 cursor-pointer appearance-none rounded-full bg-bg-subtle accent-[var(--accent)]"
                    aria-label="Reading text size"
                  />
                  <span className="w-10 text-right font-mono text-xs text-fg-muted">
                    {Math.round(fontScale * 100)}%
                  </span>
                </div>
              </section>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
