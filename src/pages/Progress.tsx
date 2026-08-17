import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { flatLessonsMeta, getTutorialMeta, tutorialsMeta } from '../content/manifest'
// Progress is a lazy route, so pulling in the full content registry here (for
// quiz question text) does not affect the eager bundle.
import { resolveLesson } from '../content'
import { useSEO } from '../lib/seo'
import { useProgress } from '../lib/progress'
import type { IconName } from '../lib/icons'
import { card } from '../lib/card'
import { cn } from '../lib/cn'
import { AdSlot } from '../components/ads/AdSlot'
import { Icon } from '../components/ui/Icon'

export function ProgressPage() {
  const { state, overall, tutorialProgress, toggleBookmark, reset, quizHistory, exportState, importState } =
    useProgress()
  const [importMessage, setImportMessage] = useState<{ ok: boolean; text: string } | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleExport = () => {
    const blob = new Blob([exportState()], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `lumen-progress-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleImportFile = async (file: File) => {
    const text = await file.text()
    const ok = importState(text)
    setImportMessage(
      ok
        ? { ok: true, text: 'Progress imported.' }
        : { ok: false, text: 'That file could not be read as a progress export.' },
    )
  }

  useSEO({
    title: 'My Progress',
    description: 'Track completed lessons, saved bookmarks, and your study streak.',
    path: '/progress',
  })

  /** Resolve a stored "tutorial/lesson" key against the manifest. */
  const lookup = (tutorialSlug: string, lessonSlug: string) => {
    const tutorial = getTutorialMeta(tutorialSlug)
    if (!tutorial) return null
    const lesson = flatLessonsMeta(tutorial).find((e) => e.lesson.slug === lessonSlug)?.lesson
    return lesson ? { tutorial, lesson } : null
  }

  // Saved keys can outlive a renamed course or lesson, so anything that no
  // longer resolves is dropped rather than rendered as a broken link.
  const bookmarks = state.bookmarks
    .map((key) => {
      const [tutorialSlug, lessonSlug] = key.split('/')
      return lookup(tutorialSlug, lessonSlug)
    })
    .filter((v): v is NonNullable<typeof v> => v !== null)

  const resume = state.lastVisited
    ? lookup(state.lastVisited.tutorialSlug, state.lastVisited.lessonSlug)
    : null

  // Resolve each saved quiz answer against the live content so a renamed or
  // removed lesson/question quietly drops out rather than showing stale text.
  const quizReview = quizHistory
    .map((entry) => {
      const resolved = resolveLesson(entry.tutorialSlug, entry.lessonSlug)
      const block = resolved?.lesson.blocks[entry.blockIndex]
      if (!resolved || !block || block.type !== 'quiz') return null
      return { ...entry, tutorial: resolved.tutorial, lesson: resolved.lesson, block }
    })
    .filter((v): v is NonNullable<typeof v> => v !== null)

  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
      <motion.header
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <h1 className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">Your progress</h1>
        <p className="mt-3 text-lg text-fg-muted">
          Stored only in this browser. Nothing is uploaded anywhere.
        </p>
      </motion.header>

      {/* ── Stats ────────────────────────────────────────────── */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat icon="target" label="Lessons complete" value={`${overall.done}/${overall.total}`} />
        <Stat icon="award" label="Overall" value={`${overall.percent}%`} />
        <Stat icon="clock" label="Time studied" value={`${overall.minutes} min`} />
        <Stat icon="fire" label="Day streak" value={String(state.streak.count)} />
      </div>

      {resume && (
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-6 rounded-2xl border border-accent/30 bg-accent-soft/25 p-5"
        >
          <p className="mb-1 text-xs font-bold uppercase tracking-[0.14em] text-accent">Pick up where you left off</p>
          <Link
            to={`/tutorials/${resume.tutorial.slug}/${resume.lesson.slug}`}
            className="text-lg font-semibold transition-colors hover:text-accent"
          >
            {resume.lesson.title}
          </Link>
          <p className="mt-0.5 text-sm text-fg-muted">
            {resume.tutorial.shortTitle ?? resume.tutorial.title}
          </p>
        </motion.div>
      )}

      {/* ── Per-course ───────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="mb-5 text-2xl font-bold tracking-tight">By course</h2>
        <div className="space-y-3">
          {tutorialsMeta.map((tutorial, i) => {
            const { percent, done, total } = tutorialProgress(tutorial.slug)
            return (
              <motion.div
                key={tutorial.slug}
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <Link
                  to={`/tutorials/${tutorial.slug}`}
                  className={card({ interactive: true, className: 'flex items-center gap-4 p-5' })}
                >
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white"
                    style={{ background: tutorial.color }}
                    aria-hidden="true"
                  >
                    <Icon name={tutorial.icon} size={16} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate font-semibold transition-colors group-hover:text-accent">
                      {tutorial.shortTitle ?? tutorial.title}
                    </h3>
                    <div className="mt-2 flex items-center gap-3">
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-bg-subtle">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${percent}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, delay: 0.15 }}
                          className="h-full rounded-full bg-accent"
                        />
                      </div>
                      <span className="shrink-0 text-xs font-medium text-fg-muted">{done}/{total}</span>
                    </div>
                  </div>
                  <span className="shrink-0 text-lg font-bold text-accent">{percent}%</span>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ── Quiz review ──────────────────────────────────────── */}
      {quizReview.length > 0 && (
        <section className="mt-12">
          <h2 className="mb-5 text-2xl font-bold tracking-tight">Quiz review</h2>
          <ul className="space-y-2">
            {quizReview.map(({ tutorial, lesson, blockIndex, block, correct, picked }) => (
              <li
                key={`${tutorial.slug}/${lesson.slug}/${blockIndex}`}
                className={card({ className: 'p-4' })}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={cn(
                      'mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full',
                      correct
                        ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                        : 'bg-amber-500/15 text-amber-600 dark:text-amber-400',
                    )}
                  >
                    <Icon name={correct ? 'check' : 'close'} size={12} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium leading-snug">{block.type === 'quiz' && block.question}</p>
                    <p className="mt-1 text-xs text-fg-muted">
                      Your answer: {block.type === 'quiz' && block.options[picked]}
                      {!correct && block.type === 'quiz' && (
                        <> · Correct: {block.options[block.answer]}</>
                      )}
                    </p>
                    <Link
                      to={`/tutorials/${tutorial.slug}/${lesson.slug}`}
                      className="mt-1.5 inline-flex items-center gap-1 text-xs font-semibold text-accent hover:underline"
                    >
                      {lesson.title} <Icon name="arrowRight" size={9} />
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* ── Bookmarks ────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="mb-5 text-2xl font-bold tracking-tight">Saved lessons</h2>
        {bookmarks.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border-token py-14 text-center">
            <Icon name="bookmark" size={22} className="mx-auto mb-3 text-fg-muted/50" />
            <p className="text-sm text-fg-muted">
              Nothing saved yet. Use the Save button on any lesson to bookmark it.
            </p>
          </div>
        ) : (
          <ul className="space-y-2">
            {bookmarks.map(({ tutorial, lesson }) => (
              <li
                key={`${tutorial.slug}/${lesson.slug}`}
                className={card({ className: 'flex items-center gap-3 p-4' })}
              >
                <Link
                  to={`/tutorials/${tutorial.slug}/${lesson.slug}`}
                  className="group min-w-0 flex-1"
                >
                  <h3 className="truncate font-semibold transition-colors group-hover:text-accent">
                    {lesson.title}
                  </h3>
                  <p className="truncate text-xs text-fg-muted">{tutorial.shortTitle ?? tutorial.title}</p>
                </Link>
                <button
                  onClick={() => toggleBookmark(tutorial.slug, lesson.slug)}
                  className="shrink-0 rounded-lg p-2 text-fg-muted transition-colors hover:bg-red-500/10 hover:text-red-500"
                  aria-label={`Remove ${lesson.title} from saved lessons`}
                >
                  <Icon name="trash" size={14} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      <AdSlot placement="footer" className="mt-14" />

      <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-border-token pt-6">
        <button
          onClick={handleExport}
          className="flex items-center gap-2 text-sm font-medium text-fg-muted transition-colors hover:text-accent"
        >
          <Icon name="file" size={13} /> Export progress
        </button>

        <button
          onClick={() => fileInputRef.current?.click()}
          className="flex items-center gap-2 text-sm font-medium text-fg-muted transition-colors hover:text-accent"
        >
          <Icon name="copy" size={13} /> Import progress
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="application/json"
          className="sr-only"
          onChange={(e) => {
            const file = e.target.files?.[0]
            if (file) handleImportFile(file)
            e.target.value = ''
          }}
        />

        <button
          onClick={() => {
            if (confirm('Reset all progress, bookmarks, and streak? This cannot be undone.')) reset()
          }}
          className="flex items-center gap-2 text-sm font-medium text-fg-muted transition-colors hover:text-red-500"
        >
          <Icon name="reset" size={13} /> Reset all progress
        </button>
      </div>

      {importMessage && (
        <p
          role="status"
          aria-live="polite"
          className={cn(
            'mt-3 text-sm',
            importMessage.ok ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-500',
          )}
        >
          {importMessage.text}
        </p>
      )}
    </div>
  )
}

function Stat({ icon, label, value }: { icon: IconName; label: string; value: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={card({ className: 'p-5' })}
    >
      <Icon name={icon} size={16} className="mb-2.5 text-accent" />
      <p className="text-2xl font-extrabold tracking-tight">{value}</p>
      <p className="mt-0.5 text-xs font-medium text-fg-muted">{label}</p>
    </motion.div>
  )
}
