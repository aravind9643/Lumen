import { cn } from './cn'

interface CardOptions {
  /** Adds the hover-lift treatment used on clickable cards (Link, button). */
  interactive?: boolean
  /** Extra classes appended after the shared shell. */
  className?: string
}

/**
 * The rounded, bordered, elevated card shell repeated across the app —
 * course cards, lesson nav cards, progress rows, stat tiles.
 *
 * A class-builder rather than a wrapping component: call sites vary between
 * `<div>`, `<Link>`, and `<button>`, and a polymorphic `<Card as="...">`
 * component would add real complexity for what is, structurally, just a
 * shared set of Tailwind classes. This keeps the same "change the shell in
 * one place" benefit without forcing every site through one element type.
 */
export function card({ interactive = false, className }: CardOptions = {}) {
  return cn(
    'rounded-2xl border border-border-token bg-bg-elev',
    interactive &&
      'group transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-md',
    className,
  )
}
