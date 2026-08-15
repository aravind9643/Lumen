import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { blocksToText, extractHeadings, resolveLesson } from '../content'
import { config } from '../config'
import { useSEO } from '../lib/seo'
import { useProgress } from '../lib/progress'
import { useTTS } from '../lib/tts'
import { events } from '../lib/analytics'
import { cn } from '../lib/cn'
import { card } from '../lib/card'
import { BlockRenderer } from '../components/content/BlockRenderer'
import { VoicePlayer } from '../components/ui/VoicePlayer'
import { AdSlot } from '../components/ads/AdSlot'
import { Icon } from '../components/ui/Icon'

export function Lesson() {
  const { tutorialSlug = '', lessonSlug = '' } = useParams()
  const resolved = useMemo(() => resolveLesson(tutorialSlug, lessonSlug), [tutorialSlug, lessonSlug])

  const { isComplete, toggleComplete, markComplete, isBookmarked, toggleBookmark, visit } = useProgress()
  const { current: speakingSegment, speaking } = useTTS()
  const [activeHeading, setActiveHeading] = useState<string>('')
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
  }, [tutorialSlug, lessonSlug])

  useEffect(() => {
    if (!resolved) return
    visit(tutorialSlug, lessonSlug)
    events.lessonStart(tutorialSlug, lessonSlug)
  }, [resolved, tutorialSlug, lessonSlug, visit])

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

  if (!resolved) return <Navigate to="/tutorials" replace />

  const { tutorial, chapter, lesson, index, total, prev, next } = resolved
  const complete = isComplete(tutorialSlug, lessonSlug)
  const bookmarked = isBookmarked(tutorialSlug, lessonSlug)
  const speakingBlock = speaking && speakingSegment >= 0 ? segmentToBlock[speakingSegment] ?? -1 : -1

  return (
    <>
      {/* Bottom padding clears the floating voice player so it never covers text. */}
      <div className="mx-auto max-w-7xl px-4 pb-28 pt-10 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-12">
          {/* ── Article ──────────────────────────────────────── */}
          <div className="min-w-0 max-w-3xl">
            <nav className="mb-5 flex flex-wrap items-center gap-1.5 text-sm text-fg-muted" aria-label="Breadcrumb">
              <Link to="/tutorials" className="transition-colors hover:text-accent">Tutorials</Link>
              <Icon name="chevronRight" size={10} />
              <Link to={`/tutorials/${tutorial.slug}`} className="transition-colors hover:text-accent">
                {tutorial.shortTitle ?? tutorial.title}
              </Link>
              <Icon name="chevronRight" size={10} />
              <span className="text-fg-muted/70">{chapter.title}</span>
            </nav>

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
                  <Icon name="clock" size={12} /> {lesson.duration} min read
                </span>

                <button
                  onClick={() => {
                    toggleComplete(tutorialSlug, lessonSlug)
                    if (!complete) events.lessonComplete(tutorialSlug, lessonSlug)
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
              </div>
            </motion.header>

            <article className="pb-8" style={{ fontSize: 'calc(1rem * var(--font-scale, 1))' }}>
              <BlockRenderer
                blocks={lesson.blocks}
                tutorialSlug={tutorialSlug}
                lessonSlug={lessonSlug}
                speakingBlockIndex={speakingBlock}
                adAfterBlocks={9}
              />
            </article>

            {/* ── Prev / next ────────────────────────────────── */}
            <nav className="mt-10 grid gap-4 border-t border-border-token pt-8 sm:grid-cols-2" aria-label="Lesson navigation">
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
          </div>

          {/* ── Sidebar ──────────────────────────────────────── */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              {headings.length > 0 && (
                <nav aria-label="On this page">
                  <h2 className="mb-3 flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-fg-muted">
                    <Icon name="list" size={12} /> On this page
                  </h2>
                  <ul className="space-y-1 border-l border-border-token">
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

              <AdSlot placement="sidebar" />
            </div>
          </aside>
        </div>
      </div>

      <VoicePlayer segments={segments} />
    </>
  )
}
