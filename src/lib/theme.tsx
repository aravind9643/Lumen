import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { usePersistentState } from './storage'

export type ThemeMode = 'light' | 'dark' | 'system'
export type Accent = 'indigo' | 'violet' | 'emerald' | 'amber' | 'rose'

export const ACCENTS: { id: Accent; label: string; swatch: string }[] = [
  { id: 'indigo', label: 'Indigo', swatch: 'oklch(0.55 0.21 264)' },
  { id: 'violet', label: 'Violet', swatch: 'oklch(0.56 0.24 300)' },
  { id: 'emerald', label: 'Emerald', swatch: 'oklch(0.58 0.15 165)' },
  { id: 'amber', label: 'Amber', swatch: 'oklch(0.63 0.16 55)' },
  { id: 'rose', label: 'Rose', swatch: 'oklch(0.57 0.22 12)' },
]

interface ThemeContextValue {
  mode: ThemeMode
  setMode: (m: ThemeMode) => void
  /** The mode actually in effect, with 'system' already resolved. */
  resolved: 'light' | 'dark'
  toggle: () => void
  accent: Accent
  setAccent: (a: Accent) => void
  fontScale: number
  setFontScale: (n: number) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

const prefersDark = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = usePersistentState<ThemeMode>('theme:mode', 'system')
  const [accent, setAccent] = usePersistentState<Accent>('theme:accent', 'indigo')
  const [fontScale, setFontScale] = usePersistentState<number>('theme:font-scale', 1)
  // Plain state, not persisted: this mirrors the OS setting, which we can read
  // directly at any time. Storing it meant a stale value drove the first render
  // in `system` mode — a visible flash — and it round-tripped between tabs.
  const [systemDark, setSystemDark] = useState(prefersDark)

  // Track the OS preference so 'system' mode reacts live.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (e: MediaQueryListEvent) => setSystemDark(e.matches)
    setSystemDark(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [setSystemDark])

  const resolved: 'light' | 'dark' = mode === 'system' ? (systemDark ? 'dark' : 'light') : mode

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', resolved === 'dark')
    root.dataset.accent = accent
    root.style.colorScheme = resolved
    root.style.setProperty('--font-scale', String(fontScale))
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', resolved === 'dark' ? '#1a1b26' : '#ffffff')
  }, [resolved, accent, fontScale])

  const toggle = useCallback(
    () => setMode(resolved === 'dark' ? 'light' : 'dark'),
    [resolved, setMode],
  )

  const value = useMemo(
    () => ({ mode, setMode, resolved, toggle, accent, setAccent, fontScale, setFontScale }),
    [mode, setMode, resolved, toggle, accent, setAccent, fontScale, setFontScale],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within <ThemeProvider>')
  return ctx
}
