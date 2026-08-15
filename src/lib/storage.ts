import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * localStorage-backed state that survives reload and stays in sync across tabs.
 * Falls back silently to in-memory behaviour when storage is unavailable
 * (private mode, blocked cookies, SSR).
 */
export function usePersistentState<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const raw = localStorage.getItem(key)
      return raw === null ? initial : (JSON.parse(raw) as T)
    } catch {
      return initial
    }
  })

  // Held in a ref so `reset` and the cross-tab handler stay stable even when
  // the caller passes a fresh object literal as `initial` on every render.
  const initialRef = useRef(initial)

  // Skip the first run: on mount `value` is whatever we just read back (or the
  // default), so writing it again is pure overhead on every page load.
  const hydrated = useRef(false)
  /**
   * Set by `reset` so the write below skips the state change reset causes.
   * Without it, removeItem is immediately undone by the effect re-persisting
   * the restored initial value, and the key reappears.
   */
  const skipNextWrite = useRef(false)

  useEffect(() => {
    if (!hydrated.current) {
      hydrated.current = true
      return
    }
    if (skipNextWrite.current) {
      skipNextWrite.current = false
      return
    }
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      /* quota exceeded or storage disabled — degrade to in-memory */
    }
  }, [key, value])

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key !== key) return
      // newValue === null means another tab called removeItem — i.e. a reset.
      // Propagating it keeps tabs consistent instead of silently diverging.
      if (e.newValue === null) {
        setValue(initialRef.current)
        return
      }
      try {
        setValue(JSON.parse(e.newValue) as T)
      } catch {
        /* ignore malformed payloads from other tabs */
      }
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [key])

  const reset = useCallback(() => {
    try {
      localStorage.removeItem(key)
    } catch {
      /* ignore */
    }
    skipNextWrite.current = true
    setValue(initialRef.current)
  }, [key])

  return [value, setValue, reset] as const
}
