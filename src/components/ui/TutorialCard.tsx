import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { lessonCount, totalDuration, type TutorialMeta } from '../../content/manifest'
import { useProgress } from '../../lib/progress'
import { cn } from '../../lib/cn'
import { Icon } from './Icon'

const DIFFICULTY = {
  beginner: 'bg-emerald-500/12 text-emerald-600 dark:text-emerald-400',
  intermediate: 'bg-amber-500/12 text-amber-600 dark:text-amber-400',
  advanced: 'bg-red-500/12 text-red-600 dark:text-red-400',
} as const

export function TutorialCard({ tutorial, index = 0 }: { tutorial: TutorialMeta; index?: number }) {
  const { tutorialProgress } = useProgress()
  const { percent, done, total } = tutorialProgress(tutorial.slug)

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.07, 0.35), ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={`/tutorials/${tutorial.slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border-token bg-bg-elev p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-black/5"
      >
        {/* Flat colour bar identifying the course. Inset by the border width so
            it meets the rounded corners cleanly rather than appearing clipped. */}
        <div
          className="absolute inset-x-px top-px h-1 rounded-t-2xl"
          style={{ background: tutorial.color }}
          aria-hidden="true"
        />

        <div className="relative flex items-start justify-between gap-3">
          <span
            className="flex h-12 w-12 items-center justify-center rounded-2xl text-white transition-transform duration-300 group-hover:scale-105"
            style={{ background: tutorial.color }}
            aria-hidden="true"
          >
            <Icon name={tutorial.icon} size={20} />
          </span>
          <span
            className={cn(
              'rounded-full px-2.5 py-1 text-[11px] font-semibold capitalize',
              DIFFICULTY[tutorial.difficulty],
            )}
          >
            {tutorial.difficulty}
          </span>
        </div>

        <p className="relative mt-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-fg-muted">
          {tutorial.category}
        </p>
        <h3 className="relative mt-1 text-lg font-bold leading-snug tracking-tight transition-colors group-hover:text-accent">
          {tutorial.title}
        </h3>
        <p className="relative mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-fg-muted">
          {tutorial.description}
        </p>

        <div className="relative mt-4 flex flex-wrap gap-1.5">
          {tutorial.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-bg-subtle px-2 py-0.5 text-[11px] font-medium text-fg-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        {percent > 0 && (
          <div className="relative mt-4">
            <div className="mb-1.5 flex justify-between text-[11px] font-medium text-fg-muted">
              <span>{done} of {total} lessons</span>
              <span className="text-accent">{percent}%</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-bg-subtle">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${percent}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="h-full rounded-full bg-accent"
              />
            </div>
          </div>
        )}

        <div className="relative mt-5 flex items-center justify-between border-t border-border-token pt-4 text-xs text-fg-muted">
          <span className="flex items-center gap-3">
            <span className="flex items-center gap-1.5"><Icon name="bookOpen" size={12} /> {lessonCount(tutorial)} lessons</span>
            <span className="flex items-center gap-1.5"><Icon name="clock" size={12} /> {totalDuration(tutorial)} min</span>
          </span>
          <Icon name="arrowRight" size={14} className="text-accent transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </Link>
    </motion.article>
  )
}
