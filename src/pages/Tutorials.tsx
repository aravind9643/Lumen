import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { allCategories, allTags, tutorialsByCategory, tutorialsMeta } from '../content/manifest'
import type { Difficulty } from '../content/types'
import { useSEO } from '../lib/seo'
import { cn } from '../lib/cn'
import { TutorialCard } from '../components/ui/TutorialCard'
import { AdSlot } from '../components/ads/AdSlot'
import { Icon } from '../components/ui/Icon'

const LEVELS: (Difficulty | 'all')[] = ['all', 'beginner', 'intermediate', 'advanced']

/** Local slug helper — avoids importing the heavy content registry for one id. */
const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

export function Tutorials() {
  const [level, setLevel] = useState<Difficulty | 'all'>('all')
  const [tag, setTag] = useState<string | null>(null)
  const [category, setCategory] = useState<string | null>(null)

  useSEO({
    title: 'All Tutorials',
    description: `Browse every course across ${allCategories.length > 1 ? allCategories.join(', ') : allCategories[0]}.`,
    path: '/tutorials',
  })

  const filtered = useMemo(
    () =>
      tutorialsMeta.filter(
        (t) =>
          (level === 'all' || t.difficulty === level) &&
          (!tag || t.tags.includes(tag)) &&
          (!category || t.category === category),
      ),
    [level, tag, category],
  )

  // Group only when there is more than one subject to show — a single heading
  // above a single group is noise.
  const groups = useMemo(() => tutorialsByCategory(filtered), [filtered])
  const showGroupHeadings = groups.length > 1

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <motion.header
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="max-w-2xl"
      >
        <h1 className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
          All tutorials
        </h1>
        <p className="mt-3 text-pretty text-lg leading-relaxed text-fg-muted">
          Every course is complete, free, and written to be read start to finish.
        </p>
      </motion.header>

      <div className="mt-9 space-y-4">
        {/* Only worth showing once there is more than one subject. */}
        {allCategories.length > 1 && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-fg-muted">
              <Icon name="book" size={12} /> Subject
            </span>
            <button
              onClick={() => setCategory(null)}
              className={cn(
                'rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all',
                category === null
                  ? 'border-accent bg-accent text-accent-fg'
                  : 'border-border-token text-fg-muted hover:border-accent hover:text-accent',
              )}
            >
              All subjects
            </button>
            {allCategories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(category === c ? null : c)}
                className={cn(
                  'rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all',
                  category === c
                    ? 'border-accent bg-accent text-accent-fg'
                    : 'border-border-token text-fg-muted hover:border-accent hover:text-accent',
                )}
              >
                {c}
              </button>
            ))}
          </div>
        )}

        <div className="flex flex-wrap items-center gap-2">
          <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-fg-muted">
            <Icon name="filters" size={12} /> Level
          </span>
          {LEVELS.map((l) => (
            <button
              key={l}
              onClick={() => setLevel(l)}
              className={cn(
                'rounded-full border px-3.5 py-1.5 text-xs font-semibold capitalize transition-all',
                level === l
                  ? 'border-accent bg-accent text-accent-fg'
                  : 'border-border-token text-fg-muted hover:border-accent hover:text-accent',
              )}
            >
              {l === 'all' ? 'All levels' : l}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-fg-muted">Topic</span>
          {allTags.map((t) => (
            <button
              key={t}
              onClick={() => setTag(tag === t ? null : t)}
              className={cn(
                'rounded-full border px-3 py-1 text-xs font-medium transition-all',
                tag === t
                  ? 'border-accent bg-accent-soft text-accent'
                  : 'border-border-token text-fg-muted hover:border-accent hover:text-accent',
              )}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-6 text-sm text-fg-muted">
        Showing {filtered.length} of {tutorialsMeta.length} course{tutorialsMeta.length === 1 ? '' : 's'}
      </p>

      {filtered.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-dashed border-border-token py-20 text-center">
          <p className="text-fg-muted">No courses match those filters.</p>
          <button
            onClick={() => { setLevel('all'); setTag(null); setCategory(null) }}
            className="mt-3 text-sm font-semibold text-accent hover:underline"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="mt-6 space-y-12">
          {groups.map(({ category: name, tutorials }) => (
            <section key={name} aria-labelledby={`cat-${slugify(name)}`}>
              {showGroupHeadings && (
                <h2
                  id={`cat-${slugify(name)}`}
                  className="mb-5 flex items-center gap-2.5 text-sm font-bold uppercase tracking-[0.14em] text-fg-muted"
                >
                  {name}
                  <span className="rounded-full bg-bg-subtle px-2 py-0.5 text-[11px] font-semibold normal-case tracking-normal">
                    {tutorials.length}
                  </span>
                </h2>
              )}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {tutorials.map((tutorial, i) => (
                  <TutorialCard key={tutorial.slug} tutorial={tutorial} index={i} />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}

      <AdSlot placement="footer" className="mt-14" />
    </div>
  )
}
