import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { blocksToText, extractHeadings, resolveLesson } from '../content'
import { getTutorialMeta, nextTutorial } from '../content/manifest'
import { config } from '../config'
import { useSEO } from '../lib/seo'
import { useProgress } from '../lib/progress'
import { useTTS } from '../lib/tts'
import { usePersistentState } from '../lib/storage'
import { events } from '../lib/analytics'
import { cn } from '../lib/cn'
import { card } from '../lib/card'
import { BlockRenderer } from '../components/content/BlockRenderer'
import { VoicePlayer } from '../components/ui/VoicePlayer'
import { Icon } from '../components/ui/Icon'
import { ReaderSettings, useReaderPreferences } from '../components/ui/ReaderSettings'
import { triggerConfetti } from '../components/ui/Confetti'

export function Lesson() {
  const { tutorialSlug = '', lessonSlug = '' } = useParams()
  const navigate = useNavigate()
  const resolved = useMemo(() => resolveLesson(tutorialSlug, lessonSlug), [tutorialSlug, lessonSlug])

  const { isComplete, toggleComplete, markComplete, isBookmarked, toggleBookmark, visit } = useProgress()
  const { current: speakingSegment, speaking, speak, supported: ttsSupported } = useTTS()
  const [readerPrefs, setReaderPrefs] = useReaderPreferences()
  const [activeHeading, setActiveHeading] = useState<string>('')
  const [scrollPercent, setScrollPercent] = useState(0)
  const [seenTip, setSeenTip] = usePersistentState('lesson:seen-first-visit-tip', false)
  const depthReported = useRef(new Set<number>())

  // LearningResource plus a breadcrumb trail — lesson pages are the ones that
  // earn search traffic, so they carry the richest structured data.
  const jsonLd = useMemo(() => {
    if (!resolved) return undefined
    const { tutorial, lesson, chapter } = resolved
    const base = config.site.url
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'LearningResource',
          name: lesson.title,
          description: lesson.description,
          url: `${base}/tutorials/${tutorial.slug}/${lesson.slug}`,
          timeRequired: `PT${lesson.duration}M`,
          educationalLevel: tutorial.difficulty,
          learningResourceType: 'Lesson',
          inLanguage: 'en',
          isPartOf: {
            '@type': 'Course',
            name: tutorial.title,
            url: `${base}/tutorials/${tutorial.slug}`,
          },
          provider: { '@type': 'Organization', name: config.site.name, url: base },
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Tutorials', item: `${base}/tutorials` },
            { '@type': 'ListItem', position: 2, name: tutorial.shortTitle ?? tutorial.title, item: `${base}/tutorials/${tutorial.slug}` },
            { '@type': 'ListItem', position: 3, name: chapter.title },
            { '@type': 'ListItem', position: 4, name: lesson.title },
          ],
        },
      ],
    }
  }, [resolved])

  useSEO({
    title: resolved?.lesson.title ?? 'Not found',
    description: resolved?.lesson.description,
    path: `/tutorials/${tutorialSlug}/${lessonSlug}`,
    type: 'article',
    jsonLd,
  })

  // Reset scroll and per-lesson tracking state on navigation.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    depthReported.current.clear()
    setScrollPercent(0)
  }, [tutorialSlug, lessonSlug])

  useEffect(() => {
    if (!resolved) return
    visit(tutorialSlug, lessonSlug)
    events.lessonStart(tutorialSlug, lessonSlug)
  }, [resolved, tutorialSlug, lessonSlug, visit])

  // Keyboard navigation between lessons — ignored while typing anywhere
  // (search dialog, a future text input) so single letters don't hijack input.
  useEffect(() => {
    if (!resolved) return
    const { prev, next } = resolved
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null
      if (target && /^(input|textarea|select)$/i.test(target.tagName)) return
      if (target?.isContentEditable) return
      if (e.metaKey || e.ctrlKey || e.altKey) return
      if (e.key === 'ArrowRight' && next) navigate(`/tutorials/${tutorialSlug}/${next.slug}`)
      if (e.key === 'ArrowLeft' && prev) navigate(`/tutorials/${tutorialSlug}/${prev.slug}`)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [resolved, tutorialSlug, navigate])

  // Scroll-depth milestones, each reported at most once per lesson.
  useEffect(() => {
    if (!resolved) return

    const MILESTONES = [25, 50, 75, 100]
    const mountedAt = Date.now()
    let frame = 0

    const check = () => {
      frame = 0
      // Reading layout here rather than in the scroll handler keeps the
      // forced reflow inside an animation frame instead of on every event.
      const max = document.documentElement.scrollHeight - window.innerHeight
      if (max <= 0) return
      const percent = Math.round((window.scrollY / max) * 100)
      setScrollPercent(Math.min(100, Math.max(0, percent)))

      for (const milestone of MILESTONES) {
        if (percent < milestone || depthReported.current.has(milestone)) continue
        // A lesson shorter than a screen-and-a-bit can start at 100%, so
        // require a little dwell time before counting it as read.
        if (milestone === 100 && Date.now() - mountedAt < 5000) continue
        depthReported.current.add(milestone)
        events.scrollDepth(tutorialSlug, lessonSlug, milestone)
        if (milestone === 100) markComplete(tutorialSlug, lessonSlug)
      }

      // Nothing left to observe — stop listening entirely.
      if (depthReported.current.size === MILESTONES.length) {
        window.removeEventListener('scroll', onScroll)
      }
    }

    // Coalesce bursts of scroll events into one measurement per frame.
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(check)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [resolved, tutorialSlug, lessonSlug, markComplete])

  // Highlight the table-of-contents entry nearest the top of the viewport.
  const headings = useMemo(() => (resolved ? extractHeadings(resolved.lesson.blocks) : []), [resolved])
  const tocListRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (!headings.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActiveHeading(visible[0].target.id)
      },
      { rootMargin: '-96px 0px -70% 0px', threshold: 0 },
    )
    headings.forEach((h) => {
      const el = document.getElementById(h.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [headings])

  useEffect(() => {
    if (!activeHeading || !tocListRef.current) return
    const activeEl = tocListRef.current.querySelector(`a[href="#${activeHeading}"]`) as HTMLElement | null
    if (activeEl) {
      activeEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
    }
  }, [activeHeading])

  /**
   * Text-to-speech segments, plus the block each segment came from so the
   * currently-spoken block can be highlighted as narration advances.
   */
  const { segments, segmentToBlock } = useMemo(() => {
    if (!resolved) return { segments: [] as string[], segmentToBlock: [] as number[] }
    const segs: string[] = []
    const map: number[] = []
    resolved.lesson.blocks.forEach((block, blockIndex) => {
      for (const text of blocksToText([block])) {
        // Split long prose into sentences so highlighting tracks closely and
        // Chrome's utterance length limit is never hit.
        const sentences = text.match(/[^.!?]+[.!?]+(?:\s|$)|[^.!?]+$/g) ?? [text]
        for (const s of sentences) {
          const trimmed = s.trim()
          if (!trimmed) continue
          segs.push(trimmed)
          map.push(blockIndex)
        }
      }
    })
    // Lead with the title so listening standalone makes sense.
    segs.unshift(resolved.lesson.title)
    map.unshift(-1)
    return { segments: segs, segmentToBlock: map }
  }, [resolved])

  // Inverse of segmentToBlock: the first segment index for each block, so
  // "Read from here" can jump narration straight to that point.
  const { firstSegmentOfBlock, readableBlocks } = useMemo(() => {
    const first = new Map<number, number>()
    segmentToBlock.forEach((blockIndex, segmentIndex) => {
      if (blockIndex >= 0 && !first.has(blockIndex)) first.set(blockIndex, segmentIndex)
    })
    return { firstSegmentOfBlock: first, readableBlocks: new Set(first.keys()) }
  }, [segmentToBlock])

  const readFromBlock = (blockIndex: number) => {
    const segmentIndex = firstSegmentOfBlock.get(blockIndex)
    if (segmentIndex !== undefined) speak(segments, segmentIndex)
  }

  if (!resolved) return <Navigate to="/tutorials" replace />

  const { tutorial, chapter, lesson, index, total, prev, next } = resolved
  const tutorialMeta = getTutorialMeta(tutorial.slug)
  const suggested = !next && tutorialMeta ? nextTutorial(tutorialMeta) : undefined
  const minutesLeft = Math.max(0, Math.round(lesson.duration * (1 - scrollPercent / 100)))
  const complete = isComplete(tutorialSlug, lessonSlug)
  const bookmarked = isBookmarked(tutorialSlug, lessonSlug)
  const speakingBlock = speaking && speakingSegment >= 0 ? segmentToBlock[speakingSegment] ?? -1 : -1

  const fontClass =
    readerPrefs.fontFamily === 'serif'
      ? 'font-serif'
      : readerPrefs.fontFamily === 'mono'
        ? 'font-mono'
        : 'font-sans'

  const sizeClass =
    readerPrefs.fontSize === 'sm'
      ? 'text-sm leading-relaxed'
      : readerPrefs.fontSize === 'lg'
        ? 'text-lg leading-relaxed'
        : readerPrefs.fontSize === 'xl'
          ? 'text-xl leading-relaxed'
          : 'text-base leading-relaxed'

  return (
    <>
      {/* ── Sticky Top Reading Progress Bar ─────────────────── */}
      <div
        className="fixed left-0 top-0 z-[60] h-[3px] bg-accent transition-all duration-150"
        style={{ width: `${scrollPercent}%` }}
        role="progressbar"
        aria-valuenow={scrollPercent}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* Bottom padding clears the floating voice player so it never covers text. */}
      <div className={cn('mx-auto px-4 pb-28 pt-10 sm:px-6 lg:px-8', readerPrefs.focusMode ? 'max-w-3xl' : 'max-w-7xl')}>
        <div className={cn(!readerPrefs.focusMode && 'lg:grid lg:grid-cols-[1fr_280px] lg:gap-12')}>
          {/* ── Article ──────────────────────────────────────── */}
          <div className={cn('min-w-0', !readerPrefs.focusMode && 'max-w-3xl')}>
            {!readerPrefs.focusMode && (
              <nav className="no-print mb-5 flex flex-wrap items-center gap-1.5 text-sm text-fg-muted" aria-label="Breadcrumb">
                <Link to="/tutorials" className="transition-colors hover:text-accent">Tutorials</Link>
                <Icon name="chevronRight" size={10} />
                <Link to={`/tutorials/${tutorial.slug}`} className="transition-colors hover:text-accent">
                  {tutorial.shortTitle ?? tutorial.title}
                </Link>
                <Icon name="chevronRight" size={10} />
                <span className="text-fg-muted/70">{chapter.title}</span>
              </nav>
            )}

            <motion.header
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="border-b border-border-token pb-7"
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                Lesson {index + 1} of {total}
              </p>
              <h1 className="text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                {lesson.title}
              </h1>
              <p className="mt-3 text-pretty text-lg leading-relaxed text-fg-muted">
                {lesson.description}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <span className="flex items-center gap-1.5 text-sm text-fg-muted">
                  <Icon name="clock" size={12} />
                  {complete || scrollPercent === 0
                    ? `${lesson.duration} min read`
                    : minutesLeft <= 0
                      ? 'almost done'
                      : `${minutesLeft} min left`}
                </span>

                <button
                  onClick={() => {
                    const willBeComplete = !complete
                    toggleComplete(tutorialSlug, lessonSlug)
                    if (willBeComplete) {
                      triggerConfetti()
                      events.lessonComplete(tutorialSlug, lessonSlug)
                    }
                  }}
                  className={cn(
                    'flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition-all',
                    complete
                      ? 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                      : 'border-border-token text-fg-muted hover:border-accent hover:text-accent',
                  )}
                >
                  <Icon name="check" size={12} /> {complete ? 'Completed' : 'Mark complete'}
                </button>

                <button
                  onClick={() => toggleBookmark(tutorialSlug, lessonSlug)}
                  className={cn(
                    'flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition-all',
                    bookmarked
                      ? 'border-accent bg-accent-soft text-accent'
                      : 'border-border-token text-fg-muted hover:border-accent hover:text-accent',
                  )}
                  aria-pressed={bookmarked}
                >
                  <Icon name="bookmark" size={12} />
                  {bookmarked ? 'Saved' : 'Save'}
                </button>

                <ReaderSettings prefs={readerPrefs} onChange={setReaderPrefs} />

                <button
                  onClick={() => {
                    events.lessonPrint(tutorialSlug, lessonSlug)
                    window.print()
                  }}
                  className="no-print flex items-center gap-1.5 rounded-lg border border-border-token px-3 py-1.5 text-xs font-semibold text-fg-muted transition-all hover:border-accent hover:text-accent"
                >
                  <Icon name="file" size={12} /> Print / Save PDF
                </button>
              </div>
            </motion.header>

            {!seenTip && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.15 }}
                className="no-print mt-6 flex items-start gap-3 rounded-2xl border border-accent/30 bg-accent-soft/25 p-4"
              >
                <Icon name="sparkles" size={15} className="mt-0.5 shrink-0 text-accent" />
                <div className="min-w-0 flex-1 text-sm leading-relaxed">
                  <p>
                    New here? You can have any lesson read aloud (bottom of the page), customize font size & typography with the <strong>Aa Reader</strong> menu, save it for later, and your progress is tracked automatically.
                  </p>
                </div>
                <button
                  onClick={() => setSeenTip(true)}
                  className="shrink-0 rounded-lg p-1.5 text-fg-muted transition-colors hover:bg-bg-subtle hover:text-fg"
                  aria-label="Dismiss tip"
                >
                  <Icon name="close" size={13} />
                </button>
              </motion.div>
            )}

            <article className={cn('pb-8', fontClass, sizeClass)}>
              <BlockRenderer
                blocks={lesson.blocks}
                tutorialSlug={tutorialSlug}
                lessonSlug={lessonSlug}
                speakingBlockIndex={speakingBlock}
                adAfterBlocks={9}
                onReadFromBlock={ttsSupported ? readFromBlock : undefined}
                readableBlocks={readableBlocks}
              />
            </article>

            {/* ── Prev / next ────────────────────────────────── */}
            {(prev || next) && (
              <p className="no-print mt-10 flex items-center gap-1.5 text-xs text-fg-muted/70">
                <Icon name="keyboard" size={11} /> Use ← / → to move between lessons
              </p>
            )}
            <nav className={cn('no-print grid gap-4 border-t border-border-token pt-8 sm:grid-cols-2', prev || next ? 'mt-2' : 'mt-10')} aria-label="Lesson navigation">
              {prev ? (
                <Link
                  to={`/tutorials/${tutorial.slug}/${prev.slug}`}
                  className={card({ interactive: true, className: 'flex flex-col p-4' })}
                >
                  <span className="mb-1 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-fg-muted">
                    <Icon name="arrowLeft" size={11} /> Previous
                  </span>
                  <span className="font-semibold leading-snug transition-colors group-hover:text-accent">
                    {prev.title}
                  </span>
                </Link>
              ) : <div className="hidden sm:block" />}

              {next ? (
                <Link
                  to={`/tutorials/${tutorial.slug}/${next.slug}`}
                  className={card({ interactive: true, className: 'flex flex-col p-4 text-right' })}
                >
                  <span className="mb-1 flex items-center justify-end gap-1.5 text-xs font-semibold uppercase tracking-wider text-fg-muted">
                    Next <Icon name="arrowRight" size={11} />
                  </span>
                  <span className="font-semibold leading-snug transition-colors group-hover:text-accent">
                    {next.title}
                  </span>
                </Link>
              ) : (
                <Link
                  to={`/tutorials/${tutorial.slug}`}
                  className="group flex flex-col rounded-2xl border border-accent/40 bg-accent-soft/30 p-4 text-right transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent">
                    Course complete
                  </span>
                  <span className="font-semibold leading-snug">Back to {tutorial.shortTitle ?? tutorial.title}</span>
                </Link>
              )}
            </nav>

            {!next && suggested && (
              <div className="no-print mt-4 flex items-center justify-between gap-4 rounded-2xl border border-border-token bg-bg-elev p-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-fg-muted">What&rsquo;s next</p>
                  <p className="font-semibold leading-snug">{suggested.shortTitle ?? suggested.title}</p>
                </div>
                <Link
                  to={`/tutorials/${suggested.slug}`}
                  className="flex shrink-0 items-center gap-1.5 rounded-lg border border-border-token px-3 py-1.5 text-xs font-semibold text-fg-muted transition-all hover:border-accent hover:text-accent"
                >
                  Start course <Icon name="arrowRight" size={11} />
                </Link>
              </div>
            )}
          </div>

          {/* ── Sidebar (hidden in focus mode) ──────────────── */}
          {!readerPrefs.focusMode && (
            <aside className="no-print hidden lg:block">
              <div className="sticky top-24 flex max-h-[calc(100vh-7rem)] flex-col overflow-hidden">
                {headings.length > 0 && (
                  <nav aria-label="On this page" className="flex min-h-0 flex-1 flex-col">
                    <h2 className="mb-3 flex shrink-0 items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-fg-muted">
                      <Icon name="list" size={12} /> On this page
                    </h2>
                    <ul
                      ref={tocListRef}
                      className="overflow-y-auto pr-2 space-y-1 border-l border-border-token [scrollbar-width:thin] [scrollbar-color:var(--border)_transparent]"
                    >
                      {headings.map((h) => (
                        <li key={h.id}>
                          <a
                            href={`#${h.id}`}
                            className={cn(
                              '-ml-px block border-l-2 py-1.5 text-sm leading-snug transition-all',
                              h.level === 3 ? 'pl-6' : 'pl-4',
                              activeHeading === h.id
                                ? 'border-accent font-medium text-accent'
                                : 'border-transparent text-fg-muted hover:border-fg-muted/40 hover:text-fg',
                            )}
                          >
                            {h.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                )}
              </div>
            </aside>
          )}
        </div>
      </div>

      <VoicePlayer segments={segments} />
    </>
  )
}
