import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { flatLessonsMeta, getTutorialMeta, tutorialsMeta } from '../content/manifest'
import type { LessonMeta, TutorialMeta } from '../content/manifest'
import { resolveLesson } from '../content'
import { useSEO } from '../lib/seo'
import { useProgress } from '../lib/progress'
import { events } from '../lib/analytics'
import type { IconName } from '../lib/icons'
import { card } from '../lib/card'
import { cn } from '../lib/cn'
import { AdSlot } from '../components/ads/AdSlot'
import { Icon } from '../components/ui/Icon'
import { CertificateModal } from '../components/ui/CertificateModal'
import { triggerConfetti } from '../components/ui/Confetti'

export function ProgressPage() {
  const { state, overall, weeklyMinutes, tutorialProgress, toggleBookmark, reset, quizHistory, exportState, importState } =
    useProgress()
  const [importMessage, setImportMessage] = useState<{ ok: boolean; text: string } | null>(null)
  const [certCourse, setCertCourse] = useState<{ title: string; slug: string } | null>(null)
  const [flashcardOpen, setFlashcardOpen] = useState(false)
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleExport = () => {
    events.progressExport()
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
    events.progressImport(ok)
    setImportMessage(
      ok
        ? { ok: true, text: 'Progress imported.' }
        : { ok: false, text: 'That file could not be read as a progress export.' },
    )
  }

  useSEO({
    title: 'My Progress',
    description: 'Track completed lessons, weekly goals, certificates, and practice flashcards.',
    path: '/progress',
  })

  /** Resolve a stored "tutorial/lesson" key against the manifest. */
  const lookup = (tutorialSlug: string, lessonSlug: string) => {
    const tutorial = getTutorialMeta(tutorialSlug)
    if (!tutorial) return null
    const lesson = flatLessonsMeta(tutorial).find((e) => e.lesson.slug === lessonSlug)?.lesson
    return lesson ? { tutorial, lesson } : null
  }

  const bookmarks = state.bookmarks
    .map((key) => {
      const [tutorialSlug, lessonSlug] = key.split('/')
      return lookup(tutorialSlug, lessonSlug)
    })
    .filter((v): v is NonNullable<typeof v> => v !== null)

  const resume = state.lastVisited
    ? lookup(state.lastVisited.tutorialSlug, state.lastVisited.lessonSlug)
    : null

  const quizReview = quizHistory
    .map((entry) => {
      const resolved = resolveLesson(entry.tutorialSlug, entry.lessonSlug)
      const block = resolved?.lesson.blocks[entry.blockIndex]
      if (!resolved || !block || block.type !== 'quiz') return null
      return { ...entry, tutorial: resolved.tutorial, lesson: resolved.lesson, block }
    })
    .filter((v): v is NonNullable<typeof v> => v !== null)

  const savedNotes = useMemo(() => {
    try {
      const items: { tutorialSlug: string; lessonSlug: string; text: string; tutorial: TutorialMeta; lesson: LessonMeta }[] = []
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i)
        if (k && k.startsWith('lumen:note:')) {
          const path = k.replace('lumen:note:', '')
          const [tSlug, lSlug] = path.split('/')
          const val = localStorage.getItem(k)
          if (val && val.trim()) {
            const found = lookup(tSlug, lSlug)
            if (found) {
              items.push({ tutorialSlug: tSlug, lessonSlug: lSlug, text: val, tutorial: found.tutorial, lesson: found.lesson })
            }
          }
        }
      }
      return items
    } catch {
      return []
    }
  }, [])

  const completedCourses = tutorialsMeta.filter((t) => {
    const p = tutorialProgress(t.slug)
    return p.total > 0 && p.percent === 100
  })

  useEffect(() => {
    if (quizReview.length > 0) events.quizReviewView(quizReview.length)
  }, [quizReview.length])

  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
      <motion.header
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Personal Dashboard</span>
        <h1 className="mt-1 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">Your Progress</h1>
        <p className="mt-2 text-lg text-fg-muted">
          Continuous tracking, streaks, weekly targets, and certificates stored private to your browser.
        </p>
      </motion.header>

      {/* ── Stats & Weekly Target ────────────────────────────── */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat icon="target" label="Lessons complete" value={`${overall.done}/${overall.total}`} />
        <Stat icon="award" label="Curriculum mastery" value={`${overall.percent}%`} />
        <Stat icon="clock" label="This week" value={`${weeklyMinutes} / 60 min`} />
        <Stat icon="fire" label="Day streak" value={`${state.streak.count} ${state.streak.count === 1 ? 'day' : 'days'}`} />
      </div>

      {resume && (
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-6 flex flex-col gap-3 rounded-2xl border border-accent/30 bg-accent-soft/25 p-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="mb-1 text-xs font-bold uppercase tracking-[0.14em] text-accent">Pick up where you left off</p>
            <Link
              to={`/tutorials/${resume.tutorial.slug}/${resume.lesson.slug}`}
              className="text-lg font-bold transition-colors hover:text-accent"
            >
              {resume.lesson.title}
            </Link>
            <p className="mt-0.5 text-xs text-fg-muted">
              {resume.tutorial.shortTitle ?? resume.tutorial.title}
            </p>
          </div>
          <Link
            to={`/tutorials/${resume.tutorial.slug}/${resume.lesson.slug}`}
            className="inline-flex items-center gap-1.5 rounded-xl bg-accent px-4 py-2 text-xs font-semibold text-accent-fg shadow-sm transition-all hover:opacity-90 self-start sm:self-auto"
          >
            <span>Resume Lesson</span>
            <Icon name="arrowRight" size={11} />
          </Link>
        </motion.div>
      )}

      {/* ── Completed Course Certificates ────────────────────── */}
      {completedCourses.length > 0 && (
        <section className="mt-12">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight">Earned Certificates</h2>
            <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-bold text-accent">
              {completedCourses.length} Unlocked
            </span>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {completedCourses.map((tut) => (
              <div
                key={tut.slug}
                className="flex items-center justify-between rounded-2xl border border-emerald-500/40 bg-emerald-500/5 p-4"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-sm">
                    <Icon name="award" size={16} />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-fg">{tut.shortTitle ?? tut.title}</h4>
                    <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
                      100% Completed
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setCertCourse({ title: tut.title, slug: tut.slug })
                    triggerConfetti()
                  }}
                  className="rounded-xl bg-accent px-3 py-1.5 text-xs font-semibold text-accent-fg shadow-sm hover:opacity-90"
                >
                  View Certificate
                </button>
              </div>
            ))}
          </div>
        </section>
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

      {/* ── Quiz Review & Flashcards ────────────────────────── */}
      {quizReview.length > 0 && (
        <section className="mt-12">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-5">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Quiz Review & Practice</h2>
              <p className="text-xs text-fg-muted">Review questions you answered across completed lessons.</p>
            </div>
            <button
              onClick={() => {
                setFlashcardOpen(true)
                setCurrentCardIndex(0)
                setFlipped(false)
              }}
              className="flex items-center gap-2 rounded-xl bg-accent px-4 py-2 text-xs font-semibold text-accent-fg shadow-sm hover:opacity-90 self-start sm:self-auto"
            >
              <Icon name="sparkles" size={12} />
              <span>Practice Flashcards ({quizReview.length})</span>
            </button>
          </div>

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

      {/* ── Interactive Flashcard Practice Modal ─────────────── */}
      <AnimatePresence>
        {flashcardOpen && quizReview.length > 0 && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg rounded-3xl border border-border-token bg-bg-elev p-6 shadow-2xl sm:p-8"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-border-token pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-accent">
                  Flashcard {currentCardIndex + 1} of {quizReview.length}
                </span>
                <button
                  onClick={() => setFlashcardOpen(false)}
                  className="rounded-lg p-1.5 text-fg-muted hover:bg-bg-subtle hover:text-fg"
                >
                  <Icon name="close" size={14} />
                </button>
              </div>

              {/* Flashcard Body */}
              {(() => {
                const current = quizReview[currentCardIndex]
                if (!current || current.block.type !== 'quiz') return null
                return (
                  <div className="mt-6">
                    <div className="mb-2 flex items-center gap-2 text-xs text-fg-muted">
                      <span>{current.tutorial.shortTitle ?? current.tutorial.title}</span>
                      <span>·</span>
                      <span className="font-semibold text-fg">{current.lesson.title}</span>
                    </div>

                    <div
                      onClick={() => setFlipped(!flipped)}
                      className={cn(
                        'flex min-h-[220px] cursor-pointer flex-col justify-between rounded-2xl border p-6 text-center transition-all',
                        flipped
                          ? 'border-emerald-500/50 bg-emerald-500/10'
                          : 'border-border-token bg-bg hover:border-accent hover:shadow-md',
                      )}
                    >
                      {!flipped ? (
                        <div className="my-auto">
                          <p className="text-base font-bold leading-relaxed text-fg sm:text-lg">
                            {current.block.question}
                          </p>
                          <p className="mt-4 text-xs font-semibold text-accent">
                            (Click card to reveal correct answer & explanation)
                          </p>
                        </div>
                      ) : (
                        <div className="my-auto">
                          <span className="inline-block rounded-full bg-emerald-500 px-3 py-0.5 text-xs font-bold text-white mb-2">
                            Correct Answer
                          </span>
                          <p className="text-base font-extrabold text-fg sm:text-lg">
                            {current.block.options[current.block.answer]}
                          </p>
                          {current.block.explanation && (
                            <p className="mt-3 text-xs leading-relaxed text-fg-muted">
                              {current.block.explanation}
                            </p>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="mt-6 flex items-center justify-between">
                      <button
                        disabled={currentCardIndex === 0}
                        onClick={() => {
                          setCurrentCardIndex((i) => Math.max(0, i - 1))
                          setFlipped(false)
                        }}
                        className="flex items-center gap-1.5 rounded-xl border border-border-token bg-bg px-3.5 py-2 text-xs font-semibold text-fg-muted disabled:opacity-30 hover:border-accent hover:text-accent"
                      >
                        <Icon name="arrowLeft" size={11} /> Previous
                      </button>
                      <button
                        onClick={() => setFlipped(!flipped)}
                        className="rounded-xl border border-border-token bg-bg px-3.5 py-2 text-xs font-semibold text-fg hover:border-accent"
                      >
                        {flipped ? 'Hide Answer' : 'Flip Card'}
                      </button>
                      <button
                        disabled={currentCardIndex >= quizReview.length - 1}
                        onClick={() => {
                          setCurrentCardIndex((i) => Math.min(quizReview.length - 1, i + 1))
                          setFlipped(false)
                        }}
                        className="flex items-center gap-1.5 rounded-xl bg-accent px-3.5 py-2 text-xs font-semibold text-accent-fg disabled:opacity-30 hover:opacity-90"
                      >
                        Next <Icon name="arrowRight" size={11} />
                      </button>
                    </div>
                  </div>
                )
              })()}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── Certificate Modal ─────────────────────────────────── */}
      {certCourse && (
        <CertificateModal
          courseTitle={certCourse.title}
          courseSlug={certCourse.slug}
          onClose={() => setCertCourse(null)}
        />
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

      {/* ── Personal Notes Hub ─────────────────────────────── */}
      <section className="mt-12">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">My Lesson Notes</h2>
            <p className="text-xs text-fg-muted">Personal study insights and notes taken across lessons.</p>
          </div>
          {savedNotes.length > 0 && (
            <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-bold text-accent">
              {savedNotes.length} {savedNotes.length === 1 ? 'Note' : 'Notes'}
            </span>
          )}
        </div>

        {savedNotes.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border-token py-10 text-center">
            <Icon name="bookmark" size={20} className="mx-auto mb-2 text-fg-muted/40" />
            <p className="text-sm text-fg-muted">
              No notes taken yet. Use the <strong>My Lesson Notes</strong> drawer inside any lesson to record takeaways.
            </p>
          </div>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2">
            {savedNotes.map(({ tutorial, lesson, text }) => (
              <div
                key={`${tutorial.slug}/${lesson.slug}`}
                className="flex flex-col justify-between rounded-2xl border border-border-token bg-bg p-4 transition-all hover:border-accent/60"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="truncate text-xs font-semibold text-fg-muted">
                      {tutorial.shortTitle ?? tutorial.title}
                    </span>
                  </div>
                  <Link
                    to={`/tutorials/${tutorial.slug}/${lesson.slug}`}
                    className="mt-0.5 block font-bold text-fg hover:text-accent"
                  >
                    {lesson.title}
                  </Link>
                  <p className="mt-2 line-clamp-3 rounded-lg bg-bg-subtle p-2.5 font-mono text-xs leading-relaxed text-fg-muted">
                    {text}
                  </p>
                </div>
                <div className="mt-3 border-t border-border-token/50 pt-2 text-right">
                  <Link
                    to={`/tutorials/${tutorial.slug}/${lesson.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:underline"
                  >
                    Open Lesson <Icon name="arrowRight" size={9} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
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
