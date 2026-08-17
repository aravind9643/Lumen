import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { allCategories, totalDuration, tutorialsByCategory, tutorialsMeta } from '../content/manifest'
import type { TutorialMeta } from '../content/manifest'
import type { Difficulty } from '../content/types'
import { useSEO } from '../lib/seo'
import { cn } from '../lib/cn'
import { TutorialCard } from '../components/ui/TutorialCard'
import { AdSlot } from '../components/ads/AdSlot'
import { Icon } from '../components/ui/Icon'

const LEVELS: (Difficulty | 'all')[] = ['all', 'beginner', 'intermediate', 'advanced']

const DIFFICULTY_RANK: Record<Difficulty, number> = { beginner: 0, intermediate: 1, advanced: 2 }

const SORTS = {
  featured: { label: 'Featured', compare: () => 0 },
  duration: { label: 'Shortest first', compare: (a: TutorialMeta, b: TutorialMeta) => totalDuration(a) - totalDuration(b) },
  updated: { label: 'Recently updated', compare: (a: TutorialMeta, b: TutorialMeta) => b.updated.localeCompare(a.updated) },
  level: { label: 'Difficulty', compare: (a: TutorialMeta, b: TutorialMeta) => DIFFICULTY_RANK[a.difficulty] - DIFFICULTY_RANK[b.difficulty] },
} as const

type SortKey = keyof typeof SORTS

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

export function Tutorials() {
  const [searchQuery, setSearchQuery] = useState('')
  const [level, setLevel] = useState<Difficulty | 'all'>('all')
  const [tag, setTag] = useState<string | null>(null)
  const [category, setCategory] = useState<string | null>(null)
  const [sort, setSort] = useState<SortKey>('featured')
  const [showAllTags, setShowAllTags] = useState(false)

  useSEO({
    title: 'All Tutorials',
    description:
      allCategories.length > 1
        ? `Browse every course across ${allCategories.join(', ')}.`
        : allCategories.length === 1
          ? `Browse every course in ${allCategories[0]}.`
          : 'Browse all tutorials.',
    path: '/tutorials',
  })

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts = new Map<string, number>()
    for (const t of tutorialsMeta) {
      counts.set(t.category, (counts.get(t.category) ?? 0) + 1)
    }
    return counts
  }, [])

  // Relevant tags based on active category
  const relevantTags = useMemo(() => {
    const list = category ? tutorialsMeta.filter((t) => t.category === category) : tutorialsMeta
    return [...new Set(list.flatMap((t) => t.tags))].sort()
  }, [category])

  // Filtered tutorials
  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    return tutorialsMeta.filter((t) => {
      if (level !== 'all' && t.difficulty !== level) return false
      if (tag && !t.tags.includes(tag)) return false
      if (category && t.category !== category) return false
      if (q) {
        const titleMatch = t.title.toLowerCase().includes(q)
        const descMatch = t.description.toLowerCase().includes(q)
        const tagMatch = t.tags.some((tg) => tg.toLowerCase().includes(q))
        if (!titleMatch && !descMatch && !tagMatch) return false
      }
      return true
    })
  }, [searchQuery, level, tag, category])

  const groups = useMemo(() => {
    const compare = SORTS[sort].compare
    return tutorialsByCategory(filtered).map((g) => ({ ...g, tutorials: [...g.tutorials].sort(compare) }))
  }, [filtered, sort])

  const showGroupHeadings = groups.length > 1

  const hasActiveFilters = Boolean(category || level !== 'all' || tag || searchQuery.trim())

  const clearAllFilters = () => {
    setCategory(null)
    setLevel('all')
    setTag(null)
    setSearchQuery('')
  }

  // Show top tags (or all if expanded or fewer than 14)
  const displayedTags = showAllTags || relevantTags.length <= 14 ? relevantTags : relevantTags.slice(0, 14)

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="max-w-3xl"
      >
        <h1 className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
          All tutorials
        </h1>
        <p className="mt-3 text-pretty text-lg leading-relaxed text-fg-muted">
          Every course is complete, free, and written to be read start to finish.
        </p>
      </motion.header>

      {/* Filter Card */}
      <div className="mt-8 rounded-2xl border border-border-token bg-bg-elev/40 p-5 shadow-xs backdrop-blur-sm sm:p-6">
        {/* Search & Subject Bar */}
        <div className="flex flex-col gap-5">
          {/* Search Input & Sort Bar */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative flex-1 max-w-md">
              <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-fg-muted">
                <Icon name="search" size={14} />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses, topics, or technologies..."
                className="w-full rounded-xl border border-border-token bg-bg py-2 pl-9 pr-8 text-sm outline-none transition-colors placeholder:text-fg-muted/60 focus:border-accent focus:ring-1 focus:ring-accent"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-fg-muted hover:text-fg"
                  aria-label="Clear search"
                >
                  <Icon name="close" size={12} />
                </button>
              )}
            </div>

            <div className="flex items-center gap-3">
              {/* Level Selector */}
              <div className="flex items-center rounded-xl border border-border-token bg-bg p-1 text-xs">
                {LEVELS.map((l) => (
                  <button
                    key={l}
                    onClick={() => setLevel(l)}
                    className={cn(
                      'rounded-lg px-2.5 py-1 font-semibold capitalize transition-all',
                      level === l
                        ? 'bg-accent text-accent-fg shadow-xs'
                        : 'text-fg-muted hover:text-fg',
                    )}
                  >
                    {l === 'all' ? 'All' : l}
                  </button>
                ))}
              </div>

              {/* Sort Selector */}
              <div className="relative flex items-center">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortKey)}
                  className="appearance-none rounded-xl border border-border-token bg-bg py-2 pl-3 pr-8 text-xs font-semibold text-fg-muted outline-none transition-colors hover:text-fg focus:border-accent"
                  aria-label="Sort courses by"
                >
                  {Object.entries(SORTS).map(([key, { label }]) => (
                    <option key={key} value={key}>
                      Sort: {label}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-2.5 text-fg-muted">
                  <Icon name="chevronRight" size={10} className="rotate-90" />
                </span>
              </div>
            </div>
          </div>

          {/* Subject Pills */}
          {allCategories.length > 1 && (
            <div className="border-t border-border-token/60 pt-4">
              <div className="mb-2.5 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-fg-muted">
                  <Icon name="book" size={11} /> Subject Tracks
                </span>
                {category && (
                  <button
                    onClick={() => setCategory(null)}
                    className="text-xs text-accent hover:underline"
                  >
                    Show all subjects
                  </button>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setCategory(null)}
                  className={cn(
                    'flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-semibold transition-all',
                    category === null
                      ? 'border-accent bg-accent text-accent-fg shadow-xs'
                      : 'border-border-token bg-bg text-fg-muted hover:border-accent hover:text-accent',
                  )}
                >
                  <span>All Tracks</span>
                  <span
                    className={cn(
                      'rounded-full px-1.5 py-0.2 text-[10px]',
                      category === null ? 'bg-accent-fg/20 text-accent-fg' : 'bg-bg-subtle text-fg-muted',
                    )}
                  >
                    {tutorialsMeta.length}
                  </span>
                </button>
                {allCategories.map((c) => {
                  const count = categoryCounts.get(c) ?? 0
                  const isSelected = category === c
                  return (
                    <button
                      key={c}
                      onClick={() => setCategory(isSelected ? null : c)}
                      className={cn(
                        'flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-semibold transition-all',
                        isSelected
                          ? 'border-accent bg-accent text-accent-fg shadow-xs'
                          : 'border-border-token bg-bg text-fg-muted hover:border-accent hover:text-accent',
                      )}
                    >
                      <span>{c}</span>
                      <span
                        className={cn(
                          'rounded-full px-1.5 py-0.2 text-[10px]',
                          isSelected ? 'bg-accent-fg/20 text-accent-fg' : 'bg-bg-subtle text-fg-muted',
                        )}
                      >
                        {count}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* Topic Tags Bar (Contextual & Clean) */}
          {relevantTags.length > 0 && (
            <div className="border-t border-border-token/60 pt-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-fg-muted">
                  <Icon name="keyPoints" size={11} /> Popular Topics
                </span>
                {relevantTags.length > 14 && (
                  <button
                    onClick={() => setShowAllTags(!showAllTags)}
                    className="text-xs font-medium text-accent hover:underline"
                  >
                    {showAllTags ? 'Show fewer topics' : `+ ${relevantTags.length - 14} more topics`}
                  </button>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-1.5">
                {displayedTags.map((t) => {
                  const isSelected = tag === t
                  return (
                    <button
                      key={t}
                      onClick={() => setTag(isSelected ? null : t)}
                      className={cn(
                        'rounded-lg border px-2.5 py-1 text-xs transition-all',
                        isSelected
                          ? 'border-accent bg-accent-soft font-semibold text-accent shadow-2xs'
                          : 'border-border-token/80 bg-bg/60 text-fg-muted hover:border-accent hover:text-fg',
                      )}
                    >
                      {t}
                    </button>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Results Status & Active Chips */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-sm font-medium text-fg-muted">
            Showing <span className="font-semibold text-fg">{filtered.length}</span> of{' '}
            {tutorialsMeta.length} course{tutorialsMeta.length === 1 ? '' : 's'}
          </p>

          {/* Active Filter Badges */}
          {hasActiveFilters && (
            <div className="flex flex-wrap items-center gap-1.5 pl-2">
              {category && (
                <span className="inline-flex items-center gap-1 rounded-md border border-accent/30 bg-accent-soft/40 px-2 py-0.5 text-xs font-medium text-accent">
                  Subject: {category}
                  <button onClick={() => setCategory(null)} className="hover:opacity-75">
                    <Icon name="close" size={10} />
                  </button>
                </span>
              )}
              {level !== 'all' && (
                <span className="inline-flex items-center gap-1 rounded-md border border-accent/30 bg-accent-soft/40 px-2 py-0.5 text-xs font-medium capitalize text-accent">
                  Level: {level}
                  <button onClick={() => setLevel('all')} className="hover:opacity-75">
                    <Icon name="close" size={10} />
                  </button>
                </span>
              )}
              {tag && (
                <span className="inline-flex items-center gap-1 rounded-md border border-accent/30 bg-accent-soft/40 px-2 py-0.5 text-xs font-medium text-accent">
                  Topic: {tag}
                  <button onClick={() => setTag(null)} className="hover:opacity-75">
                    <Icon name="close" size={10} />
                  </button>
                </span>
              )}
              {searchQuery && (
                <span className="inline-flex items-center gap-1 rounded-md border border-accent/30 bg-accent-soft/40 px-2 py-0.5 text-xs font-medium text-accent">
                  &ldquo;{searchQuery}&rdquo;
                  <button onClick={() => setSearchQuery('')} className="hover:opacity-75">
                    <Icon name="close" size={10} />
                  </button>
                </span>
              )}
              <button
                onClick={clearAllFilters}
                className="ml-1 text-xs font-semibold text-fg-muted hover:text-accent hover:underline"
              >
                Reset all
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Content Grid */}
      {filtered.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-dashed border-border-token bg-bg-elev/20 py-20 text-center">
          <Icon name="search" size={28} className="mx-auto mb-3 text-fg-muted/60" />
          <p className="font-semibold text-fg">No courses found</p>
          <p className="mt-1 text-sm text-fg-muted">
            Try adjusting your search terms, topic filters, or subject track.
          </p>
          <button
            onClick={clearAllFilters}
            className="mt-4 rounded-xl border border-border-token bg-bg px-4 py-2 text-sm font-semibold text-accent transition-colors hover:border-accent"
          >
            Clear all filters
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
                  <span className="rounded-full bg-bg-subtle px-2 py-0.5 text-[11px] font-semibold normal-case tracking-normal text-fg">
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

