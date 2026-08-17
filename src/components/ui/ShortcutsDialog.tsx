import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Icon } from './Icon'

interface ShortcutsDialogProps {
  open: boolean
  onClose: () => void
}

const SHORTCUTS = [
  { keys: ['⌘', 'K'], altKeys: ['Ctrl', 'K'], label: 'Open Global Search with smart suggestions' },
  { keys: ['←'], label: 'Navigate to Previous Lesson' },
  { keys: ['→'], label: 'Navigate to Next Lesson' },
  { keys: ['Space'], label: 'Play / Pause voice audio narration' },
  { keys: ['B'], label: 'Save / Bookmark current lesson' },
  { keys: ['F'], label: 'Toggle Focus Reading Mode' },
  { keys: ['N'], label: 'Open / Close Lesson Notes drawer' },
  { keys: ['?'], label: 'Open this Keyboard Shortcuts cheat sheet' },
  { keys: ['Esc'], label: 'Close dialogs and modals' },
]

export function ShortcutsDialog({ open, onClose }: ShortcutsDialogProps) {
  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
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
            aria-label="Keyboard Shortcuts"
            initial={{ opacity: 0, scale: 0.95, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 8 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-border-token bg-bg-elev p-6 shadow-2xl sm:p-8"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border-token pb-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Icon name="keyboard" size={16} />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-fg">Keyboard Shortcuts</h3>
                  <p className="text-xs text-fg-muted">Navigate and learn faster without leaving your keyboard</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="rounded-lg p-1.5 text-fg-muted hover:bg-bg-subtle hover:text-fg"
                aria-label="Close"
              >
                <Icon name="close" size={14} />
              </button>
            </div>

            {/* List */}
            <div className="mt-4 divide-y divide-border-token/60 max-h-[60vh] overflow-y-auto">
              {SHORTCUTS.map((s, idx) => (
                <div key={idx} className="flex items-center justify-between py-2.5 text-sm">
                  <span className="text-fg-muted text-xs leading-relaxed sm:text-sm">{s.label}</span>
                  <div className="flex items-center gap-1 shrink-0 ml-3">
                    {s.keys.map((k) => (
                      <kbd
                        key={k}
                        className="min-w-6 rounded-md border border-border-token bg-bg px-2 py-1 text-center font-mono text-xs font-bold text-fg shadow-2xs"
                      >
                        {k}
                      </kbd>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-border-token pt-3 text-right">
              <button
                onClick={onClose}
                className="rounded-xl bg-accent px-4 py-2 text-xs font-semibold text-accent-fg shadow-sm hover:opacity-90"
              >
                Got it
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
