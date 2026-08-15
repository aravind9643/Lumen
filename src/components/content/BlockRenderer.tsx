import { Fragment, memo, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import type { Block, CalloutKind } from '../../content/types'
import { slugifyHeading } from '../../content'
import { cn } from '../../lib/cn'
import type { IconName } from '../../lib/icons'
import { CodeBlock } from './CodeBlock'
import { Quiz } from './Quiz'
import { Exercise } from './Exercise'
import { AdSlot } from '../ads/AdSlot'
import { Icon } from '../ui/Icon'

/**
 * The single rendering mechanism for all tutorial content.
 *
 * Pages never branch on content shape — they hand a `Block[]` to this
 * component. Supporting a new content kind means adding a variant to the
 * `Block` union and one case here.
 */

const CALLOUTS: Record<CalloutKind, { icon: IconName; wrap: string; accent: string; label: string }> = {
  info: { icon: 'info', wrap: 'border-sky-500/30 bg-sky-500/5', accent: 'text-sky-600 dark:text-sky-400', label: 'Note' },
  tip: { icon: 'tip', wrap: 'border-violet-500/30 bg-violet-500/5', accent: 'text-violet-600 dark:text-violet-400', label: 'Tip' },
  warning: { icon: 'warning', wrap: 'border-amber-500/30 bg-amber-500/5', accent: 'text-amber-600 dark:text-amber-400', label: 'Warning' },
  danger: { icon: 'danger', wrap: 'border-red-500/30 bg-red-500/5', accent: 'text-red-600 dark:text-red-400', label: 'Caution' },
  success: { icon: 'success', wrap: 'border-emerald-500/30 bg-emerald-500/5', accent: 'text-emerald-600 dark:text-emerald-400', label: 'Success' },
}

const fade = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
}

/**
 * Renders lightweight inline markup: `code`, **bold**, *italic*.
 * Deliberately not full markdown — content is structured, so inline syntax
 * only needs to cover emphasis inside prose.
 */
function inline(text: string): ReactNode {
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('`') && part.endsWith('`') && part.length > 1) {
      return (
        <code
          key={i}
          className="rounded-md border border-border-token bg-code-bg px-1.5 py-0.5 font-mono text-[0.87em] text-accent"
        >
          {part.slice(1, -1)}
        </code>
      )
    }
    if (part.startsWith('**') && part.endsWith('**') && part.length > 3) {
      return <strong key={i} className="font-semibold text-fg">{part.slice(2, -2)}</strong>
    }
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
      return <em key={i}>{part.slice(1, -1)}</em>
    }
    return <Fragment key={i}>{part}</Fragment>
  })
}

interface BlockRendererProps {
  blocks: Block[]
  tutorialSlug: string
  lessonSlug: string
  /**
   * Index of the text segment currently being spoken, mapped back onto blocks.
   * Blocks whose text range contains it get the reading highlight.
   */
  speakingBlockIndex?: number
  /** Inject an in-article ad after this many top-level blocks (0 disables). */
  adAfterBlocks?: number
}

export function BlockRenderer({
  blocks,
  tutorialSlug,
  lessonSlug,
  speakingBlockIndex = -1,
  adAfterBlocks = 0,
}: BlockRendererProps) {
  return (
    <>
      {blocks.map((block, i) => (
        <Fragment key={i}>
          <div
            data-block-index={i}
            className={cn(speakingBlockIndex === i && 'tts-active')}
          >
            <SingleBlock block={block} tutorialSlug={tutorialSlug} lessonSlug={lessonSlug} blockIndex={i} />
          </div>
          {adAfterBlocks > 0 && i > 0 && (i + 1) % adAfterBlocks === 0 && i < blocks.length - 3 && (
            <AdSlot placement="inArticle" className="my-10" />
          )}
        </Fragment>
      ))}
    </>
  )
}

/**
 * Memoised because `speakingBlockIndex` changes on every spoken sentence.
 * Without this, narrating a lesson re-renders all ~23 blocks — including the
 * regex-highlighted code blocks — several times a minute. The props here are
 * stable per lesson, so the memo effectively never misses.
 */
const SingleBlock = memo(function SingleBlock({
  block, tutorialSlug, lessonSlug, blockIndex,
}: { block: Block; tutorialSlug: string; lessonSlug: string; blockIndex: number }) {
  switch (block.type) {
    case 'heading': {
      const id = block.id ?? slugifyHeading(block.text)
      const styles = {
        2: 'mt-14 mb-5 text-2xl sm:text-3xl font-bold tracking-tight',
        3: 'mt-10 mb-4 text-xl sm:text-2xl font-semibold tracking-tight',
        4: 'mt-8 mb-3 text-lg font-semibold',
      }[block.level]
      const Tag = `h${block.level}` as 'h2' | 'h3' | 'h4'

      return (
        <motion.div {...fade}>
          <Tag id={id} className={cn('group scroll-mt-28 text-fg', styles)}>
            <a href={`#${id}`} className="no-underline">
              {block.text}
              <span className="ml-2 select-none text-accent opacity-0 transition-opacity group-hover:opacity-60">
                #
              </span>
            </a>
          </Tag>
        </motion.div>
      )
    }

    case 'paragraph':
      return (
        <motion.p {...fade} className="my-5 text-[17px] leading-[1.8] text-fg/90">
          {inline(block.text)}
        </motion.p>
      )

    case 'list': {
      const Tag = block.ordered ? 'ol' : 'ul'
      return (
        <motion.div {...fade}>
          <Tag className={cn('my-5 space-y-2.5 pl-1', 'list-none')}>
            {block.items.map((item, i) => (
              <li key={i} className="flex gap-3 text-[16.5px] leading-[1.75] text-fg/90">
                {block.ordered ? (
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft text-xs font-bold text-accent">
                    {i + 1}
                  </span>
                ) : (
                  <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                )}
                <span>{inline(item)}</span>
              </li>
            ))}
          </Tag>
        </motion.div>
      )
    }

    case 'code':
      return (
        <CodeBlock
          code={block.code}
          language={block.language}
          filename={block.filename}
          highlight={block.highlight}
        />
      )

    case 'callout': {
      const { icon, wrap, accent, label } = CALLOUTS[block.kind]
      return (
        <motion.aside {...fade} className={cn('my-7 rounded-2xl border p-5', wrap)}>
          <div className="flex gap-3.5">
            <Icon name={icon} size={18} className={cn('mt-0.5 shrink-0', accent)} />
            <div className="min-w-0">
              <p className={cn('mb-1.5 text-sm font-semibold', accent)}>
                {block.title ?? label}
              </p>
              <p className="text-[15.5px] leading-[1.75] text-fg/85">{inline(block.text)}</p>
            </div>
          </div>
        </motion.aside>
      )
    }

    case 'keyPoints': {
      const labelId = `keypoints-${slugifyHeading(block.title ?? 'key points')}-${blockIndex}`
      return (
        <motion.aside
          {...fade}
          role="group"
          aria-labelledby={labelId}
          className="my-8 rounded-2xl border border-accent/25 bg-accent-soft/30 p-6"
        >
          {/*
            A styled section label, not a document heading: this block can
            follow any heading level, and forcing it into the outline as a
            fixed <h4> risked skipping levels (an <h2> directly followed by
            this would jump straight to h4). role="group" + aria-labelledby
            gives the same "this text names that region" relationship without
            claiming an outline position it doesn't have.
          */}
          <div className="mb-4 flex items-center gap-2">
            <Icon name="keyPoints" size={16} className="text-accent" />
            <p id={labelId} className="text-sm font-bold uppercase tracking-[0.14em] text-accent">
              {block.title ?? 'Key points'}
            </p>
          </div>
          <ul className="space-y-2.5">
            {block.points.map((point, i) => (
              <li key={i} className="flex gap-3 text-[15.5px] leading-relaxed text-fg/90">
                <Icon name="check" size={14} className="mt-1.5 shrink-0 text-accent" />
                <span>{inline(point)}</span>
              </li>
            ))}
          </ul>
        </motion.aside>
      )
    }

    case 'steps':
      return (
        <motion.ol {...fade} className="my-8 space-y-1">
          {block.items.map((step, i) => (
            <li key={i} className="relative flex gap-4 pb-6 last:pb-0">
              {i < block.items.length - 1 && (
                <span className="absolute left-[17px] top-9 bottom-0 w-px bg-border-token" aria-hidden="true" />
              )}
              <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-fg shadow-sm">
                {i + 1}
              </span>
              <div className="min-w-0 pt-1">
                {/* Not a heading: the <ol> and numbered marker already convey
                    structure, and a per-item <h4> risked skipping outline
                    levels depending on what heading preceded this block. */}
                <p className="mb-1 font-semibold text-fg">{step.title}</p>
                <p className="text-[15.5px] leading-[1.75] text-fg/80">{inline(step.text)}</p>
              </div>
            </li>
          ))}
        </motion.ol>
      )

    case 'comparison':
      return (
        <motion.div {...fade} className="my-8">
          {block.title && (
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-fg-muted">
              <Icon name="compare" size={14} />
              {block.title}
            </div>
          )}
          <div className="grid gap-4 sm:grid-cols-2">
            {[block.left, block.right].map((side, s) => {
              const labelId = `comparison-${blockIndex}-${s}`
              return (
                <div
                  key={s}
                  role="group"
                  aria-labelledby={labelId}
                  className="rounded-2xl border border-border-token bg-bg-elev p-5 shadow-sm"
                >
                  {/* A card header, not a document heading — see the note on
                      the keyPoints block above for why this isn't <h4>. */}
                  <p
                    id={labelId}
                    className={cn(
                      'mb-3 border-b pb-2.5 text-sm font-bold uppercase tracking-wider',
                      s === 0
                        ? 'border-sky-500/25 text-sky-600 dark:text-sky-400'
                        : 'border-violet-500/25 text-violet-600 dark:text-violet-400',
                    )}
                  >
                    {side.label}
                  </p>
                  <ul className="space-y-2">
                    {side.items.map((item, i) => (
                      <li key={i} className="flex gap-2.5 text-[15px] leading-relaxed text-fg/85">
                        <span
                          className={cn(
                            'mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full',
                            s === 0 ? 'bg-sky-500' : 'bg-violet-500',
                          )}
                        />
                        <span>{inline(item)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </motion.div>
      )

    case 'table':
      return (
        <motion.div
          {...fade}
          className="my-8 overflow-x-auto rounded-2xl border border-border-token shadow-sm"
        >
          <table className="w-full min-w-[520px] border-collapse text-sm">
            <thead>
              <tr className="bg-bg-subtle">
                {block.headers.map((header, i) => (
                  <th
                    key={i}
                    className="border-b border-border-token px-4 py-3 text-left font-semibold text-fg"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r} className="transition-colors even:bg-bg-subtle/40 hover:bg-accent-soft/25">
                  {row.map((cell, c) => (
                    <td
                      key={c}
                      className={cn(
                        'border-b border-border-token px-4 py-3 align-top leading-relaxed text-fg/85',
                        c === 0 && 'font-medium text-fg',
                      )}
                    >
                      {inline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      )

    case 'quote':
      return (
        <motion.figure
          {...fade}
          className="my-8 rounded-r-2xl border-l-4 border-accent bg-accent-soft/25 py-5 pl-6 pr-5"
        >
          <Icon name="quote" size={18} className="mb-2 text-accent/50" />
          <blockquote className="text-lg italic leading-relaxed text-fg/90">
            {block.text}
          </blockquote>
          {block.author && (
            <figcaption className="mt-3 text-sm font-medium text-fg-muted">
              — {block.author}
            </figcaption>
          )}
        </motion.figure>
      )

    case 'image':
      return (
        <motion.figure {...fade} className="my-8">
          <img
            src={block.src}
            alt={block.alt}
            loading="lazy"
            decoding="async"
            className="w-full rounded-2xl border border-border-token shadow-sm"
          />
          {block.caption && (
            <figcaption className="mt-2.5 text-center text-sm text-fg-muted">
              {block.caption}
            </figcaption>
          )}
        </motion.figure>
      )

    case 'video':
      return (
        <motion.figure {...fade} className="my-8">
          <div className="aspect-video overflow-hidden rounded-2xl border border-border-token shadow-sm">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${block.id}`}
              title={block.title}
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </motion.figure>
      )

    case 'quiz':
      return (
        <Quiz
          question={block.question}
          options={block.options}
          answer={block.answer}
          explanation={block.explanation}
          tutorialSlug={tutorialSlug}
          lessonSlug={lessonSlug}
        />
      )

    case 'divider':
      return (
        <hr className="my-12 border-0 border-t border-border-token" />
      )

    case 'definition':
      return (
        <motion.dl
          {...fade}
          className="my-7 overflow-hidden rounded-2xl border border-border-token bg-bg-subtle/50"
        >
          <dt className="flex items-center gap-2 border-b border-border-token bg-bg-subtle px-5 py-2.5">
            <Icon name="definition" size={13} className="shrink-0 text-accent" />
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-fg-muted">
              In plain English
            </span>
            <span className="font-mono text-sm font-semibold text-accent">{block.term}</span>
          </dt>
          <dd className="px-5 py-4">
            <p className="text-[16px] leading-[1.75] text-fg/90">{inline(block.plain)}</p>
            {block.formal && (
              <p className="mt-3 border-t border-border-token pt-3 text-sm leading-relaxed text-fg-muted">
                <span className="font-semibold">More precisely: </span>
                {inline(block.formal)}
              </p>
            )}
          </dd>
        </motion.dl>
      )

    case 'analogy':
      return (
        <motion.aside
          {...fade}
          className="my-7 rounded-2xl border border-violet-500/25 bg-violet-500/[0.06] p-5"
        >
          <div className="mb-2 flex items-center gap-2">
            <Icon name="analogy" size={15} className="text-violet-600 dark:text-violet-400" />
            <span className="text-sm font-semibold text-violet-600 dark:text-violet-400">
              {block.title ?? 'Think of it like this'}
            </span>
          </div>
          <p className="text-[16px] leading-[1.8] text-fg/90">{inline(block.text)}</p>
        </motion.aside>
      )

    case 'exercise':
      return (
        <Exercise
          prompt={block.prompt}
          hint={block.hint}
          solution={block.solution}
          language={block.language}
        />
      )

    case 'recap':
      return (
        <motion.aside
          {...fade}
          className="my-7 rounded-2xl border border-border-token bg-bg-subtle/60 p-5"
        >
          <div className="mb-3 flex items-center gap-2">
            <Icon name="recap" size={13} className="text-fg-muted" />
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-fg-muted">
              Where we left off
            </span>
          </div>
          <ul className="space-y-2">
            {block.points.map((point, i) => (
              <li key={i} className="flex gap-2.5 text-[15px] leading-relaxed text-fg/80">
                <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-fg-muted/50" />
                <span>{inline(point)}</span>
              </li>
            ))}
          </ul>
        </motion.aside>
      )

    default: {
      // Exhaustiveness guard: a new Block variant fails to compile until handled.
      const _never: never = block
      return _never
    }
  }
})
