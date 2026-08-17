import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Icon } from '../ui/Icon'

interface LessonNotesProps {
  tutorialSlug: string
  lessonSlug: string
  lessonTitle: string
}

export function LessonNotes({ tutorialSlug, lessonSlug }: LessonNotesProps) {
  const noteKey = `lumen:note:${tutorialSlug}/${lessonSlug}`
  const [isOpen, setIsOpen] = useState(false)
  const [content, setContent] = useState(() => {
    try {
      return localStorage.getItem(noteKey) || ''
    } catch {
      return ''
    }
  })
  const [lastSaved, setLastSaved] = useState<string | null>(null)

  useEffect(() => {
    try {
      setContent(localStorage.getItem(noteKey) || '')
    } catch {
      setContent('')
    }
  }, [noteKey])

  const handleChange = (newVal: string) => {
    setContent(newVal)
    try {
      if (newVal.trim()) {
        localStorage.setItem(noteKey, newVal)
      } else {
        localStorage.removeItem(noteKey)
      }
      setLastSaved(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }))
    } catch {
      // ignore
    }
  }

  const wordCount = content.trim() ? content.trim().split(/\s+/).length : 0

  return (
    <div className="no-print my-8 overflow-hidden rounded-2xl border border-border-token bg-bg-elev shadow-xs">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between border-b border-border-token bg-bg-subtle/40 px-5 py-3 text-left transition-colors hover:bg-bg-subtle"
      >
        <div className="flex items-center gap-2">
          <Icon name="bookmark" size={14} className="text-accent" />
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-fg">
            My Lesson Notes {content.trim() ? `(${wordCount} words)` : ''}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {content.trim() && (
            <span className="rounded-md bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
              Note Saved
            </span>
          )}
          <span className="text-xs text-fg-muted">{isOpen ? 'Collapse' : 'Expand'}</span>
        </div>
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="p-5"
        >
          <textarea
            value={content}
            onChange={(e) => handleChange(e.target.value)}
            placeholder="Write key takeaways, insights, mental models, or questions for this lesson..."
            rows={5}
            className="w-full resize-y rounded-xl border border-border-token bg-bg p-3.5 text-sm leading-relaxed text-fg outline-none transition-all placeholder:text-fg-muted/60 focus:border-accent focus:ring-1 focus:ring-accent"
          />

          <div className="mt-3 flex items-center justify-between text-[11px] text-fg-muted">
            <span className="flex items-center gap-1.5">
              <Icon name="check" size={10} className="text-emerald-500" />
              {lastSaved ? `Autosaved at ${lastSaved}` : 'Notes are stored privately in your browser'}
            </span>
            <span>{content.length} characters · {wordCount} words</span>
          </div>
        </motion.div>
      )}
    </div>
  )
}
