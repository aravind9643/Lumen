import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { config } from '../config'
import { totalLessonCount, tutorialsMeta } from '../content/manifest'
import { useSEO } from '../lib/seo'
import { useProgress } from '../lib/progress'
import type { IconName } from '../lib/icons'
import { TutorialCard } from '../components/ui/TutorialCard'
import { AdSlot } from '../components/ads/AdSlot'
import { Icon } from '../components/ui/Icon'

const FEATURES: { icon: IconName; title: string; text: string }[] = [
  { icon: 'book', title: 'Structured, not scattered', text: 'Every course builds in a deliberate order. Concepts arrive when you have the background to absorb them.' },
  { icon: 'headphones', title: 'Listen while you commute', text: 'Any lesson can be read aloud with adjustable voice, speed, and pitch — with the text following along.' },
  { icon: 'target', title: 'Understanding, not memorising', text: 'Worked examples, honest trade-offs, and quizzes that explain why an answer is right rather than just marking it.' },
  { icon: 'moon', title: 'Built for long reading', text: 'Light and dark themes, five accent palettes, and adjustable text size. Your eyes will last the whole chapter.' },
  { icon: 'keyPoints', title: 'Progress that persists', text: 'Completed lessons, bookmarks, and study streaks are saved locally — no account, no email, no tracking wall.' },
  { icon: 'code', title: 'Real code, run it yourself', text: 'Examples are complete and copyable, not fragments. Every snippet was written to actually execute.' },
]

export function Home() {
  const { state, overall } = useProgress()

  useSEO({
    title: config.site.name,
    description: config.site.description,
    path: '/',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      name: config.site.name,
      description: config.site.description,
      url: config.site.url,
    },
  })

  const resume = state.lastVisited

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-border-token bg-bg-subtle/50">
        <div className="absolute inset-0 grid-fade opacity-90" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-token bg-bg-elev/70 px-4 py-1.5 text-xs font-medium backdrop-blur-sm"
            >
              <Icon name="sparkles" size={12} className="text-accent" />
              {totalLessonCount} in-depth lessons across {tutorialsMeta.length} courses
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-balance text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl"
            >
              Learn how things
              <br />
              <span className="text-accent-flat">actually work.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-fg-muted sm:text-xl"
            >
              No hype, no hand-waving. Every course starts from zero, defines its terms,
              and explains the real mechanism — for people who want to genuinely understand.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <Link
                to={resume ? `/tutorials/${resume.tutorialSlug}/${resume.lessonSlug}` : `/tutorials/${tutorialsMeta[0].slug}`}
                className="group inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 font-semibold text-accent-fg shadow-lg shadow-black/10 transition-all hover:scale-[1.03] hover:shadow-xl"
              >
                {resume ? 'Continue where you left off' : 'Start with the fundamentals'}
                <Icon name="arrowRight" size={15} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/tutorials"
                className="inline-flex items-center gap-2 rounded-xl border border-border-token bg-bg-elev/70 px-6 py-3.5 font-semibold backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
              >
                Browse all courses
              </Link>
            </motion.div>

            {overall.done > 0 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-6 text-sm text-fg-muted"
              >
                You've completed <strong className="text-accent">{overall.done}</strong> of {overall.total} lessons
                {state.streak.count > 1 && (
                  <>
                    {' · '}
                    <Icon name="fire" size={12} className="text-accent" />
                    {' '}{state.streak.count}-day streak
                  </>
                )}
              </motion.p>
            )}
          </div>
        </div>
      </section>

      {/* ── Courses ───────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Courses"
          title={tutorialsMeta.length > 1 ? 'Start anywhere. They connect.' : 'One path, start to finish.'}
          subtitle={
            tutorialsMeta.length > 1
              ? 'Each course stands alone, but they are ordered so the concepts compound if you take them in sequence.'
              : 'A single, deliberately ordered course — each lesson builds on the last, all the way to job-ready.'
          }
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tutorialsMeta.map((tutorial, i) => (
            <TutorialCard key={tutorial.slug} tutorial={tutorial} index={i} />
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AdSlot placement="inArticle" className="my-8" />
      </div>

      {/* ── Features ──────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why here"
          title="Designed for reading, not for scrolling."
          subtitle="The tooling exists to get out of the way of the material."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: Math.min(i * 0.06, 0.3) }}
              className="group rounded-2xl border border-border-token bg-bg-elev p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lg hover:shadow-black/5"
            >
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent transition-transform group-hover:scale-105">
                <Icon name={icon} size={17} />
              </span>
              <h3 className="mb-2 font-bold tracking-tight">{title}</h3>
              <p className="text-sm leading-relaxed text-fg-muted">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-border-token bg-bg-subtle px-6 py-16 text-center sm:px-12"
        >
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
              Everything here is free.
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-fg-muted">
              No account, no paywall, no email capture. Open the first lesson and start reading.
            </p>
            <Link
              to={`/tutorials/${tutorialsMeta[0].slug}`}
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 font-semibold text-accent-fg shadow-lg transition-all hover:scale-[1.03]"
            >
              Open the first lesson
              <Icon name="arrowRight" size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  )
}

export function SectionHeading({
  eyebrow, title, subtitle,
}: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.45 }}
      className="max-w-2xl"
    >
      {eyebrow && (
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-accent">{eyebrow}</p>
      )}
      <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-pretty leading-relaxed text-fg-muted">{subtitle}</p>}
    </motion.div>
  )
}
