import { Fragment, type ReactNode } from 'react'

/**
 * Renders lightweight inline markup: `code`, **bold**, *italic*, __bold__, _italic_.
 * Parses markdown inline tokens into styled React components.
 */
export function inline(text: string): ReactNode {
  if (!text) return null

  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*|__[^_]+__|(?:\s|^)_[^_]+_(?:\s|$))/g)

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
    if (part.startsWith('__') && part.endsWith('__') && part.length > 3) {
      return <strong key={i} className="font-semibold text-fg">{part.slice(2, -2)}</strong>
    }
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
      return <em key={i}>{part.slice(1, -1)}</em>
    }
    return <Fragment key={i}>{part}</Fragment>
  })
}
