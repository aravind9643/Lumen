import { useEffect, useRef, useState } from 'react'
import { Icon } from './Icon'
import { cn } from '../../lib/cn'
import { usePersistentState } from '../../lib/storage'

export type FontSize = 'sm' | 'base' | 'lg' | 'xl'
export type FontFamily = 'sans' | 'serif' | 'mono'

export interface ReaderPreferences {
  fontSize: FontSize
  fontFamily: FontFamily
  focusMode: boolean
}

const DEFAULT_PREFS: ReaderPreferences = {
  fontSize: 'base',
  fontFamily: 'sans',
  focusMode: false,
}

export function useReaderPreferences() {
  return usePersistentState<ReaderPreferences>('lumen:reader-prefs', DEFAULT_PREFS)
}

export function ReaderSettings({
  prefs,
  onChange,
}: {
  prefs: ReaderPreferences
  onChange: (updater: (prev: ReaderPreferences) => ReaderPreferences) => void
}) {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onMouseDown = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    if (open) {
      document.addEventListener('mousedown', onMouseDown)
    }
    return () => document.removeEventListener('mousedown', onMouseDown)
  }, [open])

  const setFontSize = (fontSize: FontSize) => {
    onChange((p) => ({ ...p, fontSize }))
  }

  const setFontFamily = (fontFamily: FontFamily) => {
    onChange((p) => ({ ...p, fontFamily }))
  }

  const toggleFocusMode = () => {
    onChange((p) => ({ ...p, focusMode: !p.focusMode }))
  }

  return (
    <div ref={menuRef} className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          'flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition-all',
          open
            ? 'border-accent bg-accent-soft text-accent'
            : 'border-border-token bg-bg text-fg-muted hover:border-accent hover:text-accent',
        )}
        aria-label="Reader settings"
        title="Customize typography & focus mode"
      >
        <span className="font-serif font-bold text-sm leading-none">Aa</span>
        <span className="hidden sm:inline">Reader</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-64 rounded-2xl border border-border-token bg-bg-elev p-4 shadow-xl backdrop-blur-md">
          <div className="space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border-token pb-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-fg-muted">
                Reader Preferences
              </span>
              <button
                onClick={() => setOpen(false)}
                className="text-fg-muted hover:text-fg"
                aria-label="Close"
              >
                <Icon name="close" size={12} />
              </button>
            </div>

            {/* Font Size */}
            <div>
              <label className="mb-2 block text-xs font-semibold text-fg">Text Size</label>
              <div className="grid grid-cols-4 gap-1.5 rounded-xl border border-border-token bg-bg p-1 text-center">
                {(['sm', 'base', 'lg', 'xl'] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => setFontSize(s)}
                    className={cn(
                      'rounded-lg py-1 text-xs font-bold transition-all',
                      prefs.fontSize === s
                        ? 'bg-accent text-accent-fg shadow-xs'
                        : 'text-fg-muted hover:text-fg',
                    )}
                  >
                    {s === 'sm' && 'A-'}
                    {s === 'base' && 'A'}
                    {s === 'lg' && 'A+'}
                    {s === 'xl' && 'A++'}
                  </button>
                ))}
              </div>
            </div>

            {/* Font Family */}
            <div>
              <label className="mb-2 block text-xs font-semibold text-fg">Typeface</label>
              <div className="grid grid-cols-3 gap-1.5">
                <button
                  onClick={() => setFontFamily('sans')}
                  className={cn(
                    'rounded-xl border py-1.5 text-xs font-sans font-medium transition-all',
                    prefs.fontFamily === 'sans'
                      ? 'border-accent bg-accent text-accent-fg'
                      : 'border-border-token bg-bg text-fg-muted hover:border-accent hover:text-fg',
                  )}
                >
                  Modern Sans
                </button>
                <button
                  onClick={() => setFontFamily('serif')}
                  className={cn(
                    'rounded-xl border py-1.5 text-xs font-serif font-medium transition-all',
                    prefs.fontFamily === 'serif'
                      ? 'border-accent bg-accent text-accent-fg'
                      : 'border-border-token bg-bg text-fg-muted hover:border-accent hover:text-fg',
                  )}
                >
                  Book Serif
                </button>
                <button
                  onClick={() => setFontFamily('mono')}
                  className={cn(
                    'rounded-xl border py-1.5 text-xs font-mono font-medium transition-all',
                    prefs.fontFamily === 'mono'
                      ? 'border-accent bg-accent text-accent-fg'
                      : 'border-border-token bg-bg text-fg-muted hover:border-accent hover:text-fg',
                  )}
                >
                  Code Mono
                </button>
              </div>
            </div>

            {/* Focus Mode */}
            <div className="border-t border-border-token pt-3">
              <button
                onClick={toggleFocusMode}
                className={cn(
                  'flex w-full items-center justify-between rounded-xl border px-3 py-2 text-xs font-semibold transition-all',
                  prefs.focusMode
                    ? 'border-accent bg-accent-soft text-accent'
                    : 'border-border-token bg-bg text-fg-muted hover:border-accent hover:text-fg',
                )}
              >
                <span className="flex items-center gap-2">
                  <Icon name={prefs.focusMode ? 'eye' : 'eyeSlash'} size={13} />
                  Focus Reading Mode
                </span>
                <span className="text-[11px] font-bold uppercase">
                  {prefs.focusMode ? 'Active' : 'Off'}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
