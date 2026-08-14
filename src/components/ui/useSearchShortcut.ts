import { useEffect } from 'react'

/**
 * Registers the global ⌘K / Ctrl-K shortcut.
 *
 * Kept in its own module rather than alongside `SearchDialog` so the header can
 * bind the shortcut without importing the dialog — and with it, the whole
 * search index and every lesson's text.
 */
export function useSearchShortcut(onOpen: () => void) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        onOpen()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onOpen])
}
