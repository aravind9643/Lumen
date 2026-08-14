import { Link, Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { flatLessons, getTutorial, lessonCount, totalDuration } from '../content'
import { config } from '../config'
import { useSEO } from '../lib/seo'
import { useProgress } from '../lib/progress'
import { cn } from '../lib/cn'
import { AdSlot } from '../components/ads/AdSlot'
import { Icon } from '../components/ui/Icon'

export function TutorialDetail() {
  const { tutorialSlug = '' } = useParams()
  const tutorial = getTutorial(tutorialSlug)
  const { isComplete, tutorialProgress } = useProgress()

  useSEO({
    title: tutorial?.title ?? 'Not found',
    description: tutorial?.description,
    path: `/tutorials/${tutorialSlug}`,
    type: 'article',
    jsonLd: tutorial
      ? {
          '@context': 'https://schema.org',
          '@type': 'Course',
          name: tutorial.title,
          description: tutorial.description,
          provider: { '@type': 'Organization', name: config.site.name },
          educationalLevel: tutorial.difficulty,
          keywords: tutorial.tags.join(', '),
        }
      : undefined,
  })

  if (!tutorial) return <Navigate to="/tutorials" replace />

  const { percent, done, total } = tutorialProgress(tutorial.slug)
  const flat = flatLessons(tutorial)
  const nextUp = flat.find(({ lesson }) => !isComplete(tutorial.slug, lesson.slug)) ?? flat[0]

  return (
    <div>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-border-token">
        {/* Flat colour band identifying the course */}
        <div
          className="absolute inset-x-0 top-0 h-1.5"
          style={{ background: tutorial.color }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <nav className="mb-6 flex items-center gap-1.5 text-sm text-fg-muted" aria-label="Breadcrumb">
            <Link to="/tutorials" className="transition-colors hover:text-accent">Tutorials</Link>
            <Icon name="chevronRight" size={11} />
            <span className="text-fg">{tutorial.shortTitle ?? tutorial.title}</span>
          </nav>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span
              className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-sm"
              style={{ background: tutorial.color }}
            >
              <Icon name={tutorial.icon} size={26} />
            </span>

            <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-accent">
              {tutorial.category}
            </p>
            <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              {tutorial.title}
            </h1>
            <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-fg-muted">
              {tutorial.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-fg-muted">
              <span className="flex items-center gap-1.5"><Icon name="bookOpen" size={13} /> {lessonCount(tutorial)} lessons</span>
              <span className="flex items-center gap-1.5"><Icon name="clock" size={13} /> {totalDuration(tutorial)} minutes</span>
              <span className="flex items-center gap-1.5 capitalize"><Icon name="target" size={13} /> {tutorial.difficulty}</span>
              <span className="text-xs">Updated {tutorial.updated}</span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to={`/tutorials/${tutorial.slug}/${nextUp.lesson.slug}`}
                className="group inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 font-semibold text-accent-fg shadow-lg transition-all hover:scale-[1.03]"
              >
                {done === 0 ? 'Start course' : done === total ? 'Review course' : 'Continue course'}
                <Icon name="arrowRight" size={15} className="transition-transform group-hover:translate-x-1" />
              </Link>

              {percent > 0 && (
                <div className="min-w-[180px] flex-1 sm:max-w-xs">
                  <div className="mb-1.5 flex justify-between text-xs font-medium">
                    <span className="text-fg-muted">{done} of {total} complete</span>
                    <span className="text-accent">{percent}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-bg-subtle">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${percent}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full rounded-full bg-accent"
                    />
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* ── Outcomes & prerequisites ────────────────────────── */}
        {(tutorial.outcomes || tutorial.prerequisites) && (
          <div className="mb-12 grid gap-5 sm:grid-cols-2">
            {tutorial.outcomes && (
              <InfoPanel title="What you'll be able to do" items={tutorial.outcomes} tone="accent" />
            )}
            {tutorial.prerequisites && (
              <InfoPanel title="Before you start" items={tutorial.prerequisites} tone="muted" />
            )}
          </div>
        )}

        {/* ── Curriculum ──────────────────────────────────────── */}
        <h2 className="mb-6 text-2xl font-bold tracking-tight">Curriculum</h2>

        <div className="space-y-8">
          {tutorial.chapters.map((chapter, ci) => (
            <motion.section
              key={chapter.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: ci * 0.06 }}
            >
              <h3 className="mb-3 flex items-center gap-2.5 text-sm font-bold uppercase tracking-[0.14em] text-fg-muted">
                <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-accent-soft text-[11px] text-accent">
                  {ci + 1}
                </span>
                {chapter.title}
              </h3>

              <ul className="space-y-2">
                {chapter.lessons.map((lesson) => {
                  const complete = isComplete(tutorial.slug, lesson.slug)
                  return (
                    <li key={lesson.slug}>
                      <Link
                        to={`/tutorials/${tutorial.slug}/${lesson.slug}`}
                        className="group flex items-start gap-4 rounded-2xl border border-border-token bg-bg-elev p-4 transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-md"
                      >
                        <span
                          className={cn(
                            'mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors',
                            complete ? 'bg-emerald-500 text-white' : 'bg-bg-subtle text-fg-muted group-hover:bg-accent-soft group-hover:text-accent',
                          )}
                        >
                          <Icon name={complete ? 'check' : 'circle'} size={complete ? 11 : 7} />
                        </span>

                        <div className="min-w-0 flex-1">
                          <h4 className={cn(
                            'font-semibold leading-snug transition-colors group-hover:text-accent',
                            complete && 'text-fg-muted',
                          )}>
                            {lesson.title}
                          </h4>
                          <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-fg-muted">
                            {lesson.description}
                          </p>
                        </div>

                        <span className="flex shrink-0 items-center gap-1 text-xs text-fg-muted">
                          <Icon name="clock" size={11} /> {lesson.duration}m
                        </span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </motion.section>
          ))}
        </div>

        <AdSlot placement="footer" className="mt-14" />
      </div>
    </div>
  )
}

function InfoPanel({ title, items, tone }: { title: string; items: string[]; tone: 'accent' | 'muted' }) {
  return (
    <div
      className={cn(
        'rounded-2xl border p-5',
        tone === 'accent' ? 'border-accent/25 bg-accent-soft/25' : 'border-border-token bg-bg-subtle/40',
      )}
    >
      <h3 className={cn(
        'mb-3 text-xs font-bold uppercase tracking-[0.14em]',
        tone === 'accent' ? 'text-accent' : 'text-fg-muted',
      )}>
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-fg/85">
            <span className={cn(
              'mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full',
              tone === 'accent' ? 'bg-accent' : 'bg-fg-muted',
            )} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
