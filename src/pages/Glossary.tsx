import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { tutorials } from '../content'
import { useSEO } from '../lib/seo'
import { Icon } from '../components/ui/Icon'
import { card } from '../lib/card'
import { cn } from '../lib/cn'

interface GlossaryItem {
  term: string
  plain: string
  formal?: string
  tutorialSlug: string
  tutorialTitle: string
  tutorialColor: string
  category: string
  lessonSlug: string
  lessonTitle: string
}

export function Glossary() {
  useSEO({
    title: 'Developer Glossary & Term Index | Lumen',
    description: 'A comprehensive, searchable index of core software engineering, web development, AI, and cloud computing terms defined from first principles.',
    path: '/glossary',
  })

  const [query, setQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  // Extract all definitions across all courses and lessons
  const allDefinitions = useMemo(() => {
    const items: GlossaryItem[] = []
    const seen = new Set<string>()

    for (const tutorial of tutorials) {
      for (const chapter of tutorial.chapters) {
        for (const lesson of chapter.lessons) {
          for (const block of lesson.blocks) {
            if (block.type === 'definition') {
              const key = `${block.term.toLowerCase()}_${tutorial.slug}`
              if (!seen.has(key)) {
                seen.add(key)
                items.push({
                  term: block.term,
                  plain: block.plain,
                  formal: block.formal,
                  tutorialSlug: tutorial.slug,
                  tutorialTitle: tutorial.shortTitle || tutorial.title,
                  tutorialColor: tutorial.color,
                  category: tutorial.category,
                  lessonSlug: lesson.slug,
                  lessonTitle: lesson.title,
                })
              }
            }
          }
        }
      }
    }

    return items.sort((a, b) => a.term.localeCompare(b.term))
  }, [])

  const categories = useMemo(() => {
    const cats = ['All', ...new Set(allDefinitions.map((d) => d.category))]
    return cats
  }, [allDefinitions])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return allDefinitions.filter((item) => {
      const matchesCat = selectedCategory === 'All' || item.category === selectedCategory
      if (!matchesCat) return false
      if (!q) return true
      return (
        item.term.toLowerCase().includes(q) ||
        item.plain.toLowerCase().includes(q) ||
        (item.formal && item.formal.toLowerCase().includes(q)) ||
        item.tutorialTitle.toLowerCase().includes(q)
      )
    })
  }, [allDefinitions, query, selectedCategory])

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-3xl"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft/40 px-3.5 py-1 text-xs font-semibold text-accent">
          <Icon name="sparkles" size={13} /> First-Principles Knowledge Base
        </span>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Developer Glossary & Term Index
        </h1>
        <p className="mt-2 text-lg text-fg-muted">
          Every technical term defined in plain English before mechanical code. Search {allDefinitions.length} core engineering definitions.
        </p>
      </motion.div>

      {/* Search & Category Filter Bar */}
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-md flex-1">
          <Icon name="search" size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-fg-muted" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search terms (e.g. JSX, Closure, Signal, Hoisting, RSC)..."
            className="w-full rounded-xl border border-border-token bg-bg-elev pl-10 pr-4 py-2.5 text-sm text-fg placeholder:text-fg-muted focus:border-accent focus:outline-none"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                'rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors',
                selectedCategory === cat
                  ? 'bg-accent text-accent-fg shadow-sm'
                  : 'border border-border-token bg-bg-elev text-fg-muted hover:border-accent hover:text-accent',
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="mt-4 text-xs font-medium text-fg-muted">
        Showing {filtered.length} of {allDefinitions.length} definitions
      </div>

      {/* Definition Grid */}
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item, idx) => (
          <motion.div
            key={`${item.term}-${idx}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: Math.min(idx * 0.02, 0.3) }}
            className={card({ className: 'flex flex-col justify-between p-6' })}
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="inline-block rounded-md bg-accent-soft px-2 py-0.5 text-[11px] font-semibold text-accent">
                  {item.category}
                </span>
                <span
                  className="inline-block rounded-full px-2 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider"
                  style={{ backgroundColor: item.tutorialColor }}
                >
                  {item.tutorialTitle}
                </span>
              </div>

              <h3 className="mt-3 text-lg font-bold text-fg">
                {item.term}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-fg/90">
                {item.plain}
              </p>

              {item.formal && (
                <p className="mt-3 rounded-lg border border-border-token bg-bg-subtle p-2.5 font-mono text-[11px] text-fg-muted">
                  <strong className="font-semibold text-fg">Spec: </strong>
                  {item.formal}
                </p>
              )}
            </div>

            <div className="mt-6 border-t border-border-token pt-3">
              <Link
                to={`/tutorials/${item.tutorialSlug}/${item.lessonSlug}`}
                className="flex items-center justify-between text-xs font-semibold text-accent transition-colors hover:underline"
              >
                <span>From: {item.lessonTitle}</span>
                <Icon name="arrowRight" size={11} />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="my-16 text-center text-fg-muted">
          <Icon name="search" size={32} className="mx-auto mb-2 opacity-50" />
          <p className="text-base font-semibold">No definitions matched your search.</p>
          <p className="text-sm">Try searching for broader terms like "State", "DOM", "Component", or "Event".</p>
        </div>
      )}
    </div>
  )
}
