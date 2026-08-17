import { useEffect, useRef, useState } from 'react'
import { config, isAdSenseEnabled } from '../../config'
import { cn } from '../../lib/cn'

/**
 * Set once the AdSense loader script itself fails — most commonly an ad
 * blocker rejecting the request outright, which is one of the most-blocked
 * domains on the web. Module-level because the script is injected once for
 * the whole app (`useAdSenseScript`), so every `<AdSlot>` should react to it.
 */
let scriptBlocked = false
const blockedListeners = new Set<(blocked: boolean) => void>()
const markScriptBlocked = () => {
  scriptBlocked = true
  blockedListeners.forEach((fn) => fn(true))
}

type Placement = 'inArticle' | 'sidebar' | 'footer'

interface AdSlotProps {
  placement: Placement
  className?: string
  /** Shown above the unit — AdSense policy requires ads be distinguishable. */
  label?: string
}

const FORMATS: Record<Placement, { format: string; layout?: string; minHeight: number }> = {
  inArticle: { format: 'fluid', layout: 'in-article', minHeight: 200 },
  sidebar: { format: 'auto', minHeight: 600 },
  footer: { format: 'auto', minHeight: 120 },
}

/**
 * A single reusable AdSense unit.
 *
 * Reserves its height up front so ad loading never causes layout shift, and
 * degrades to a labelled placeholder in development or when no publisher ID
 * is configured.
 */
export function AdSlot({ placement, className, label = 'Advertisement' }: AdSlotProps) {
  const ref = useRef<HTMLModElement>(null)
  const pushed = useRef(false)
  const spec = FORMATS[placement]
  const slot = config.adsense.slots[placement]

  // Re-renders once if the loader script is already known to be blocked, or
  // if it becomes blocked while this slot is mounted. Without this, a blocked
  // ad blocker request left the reserved minHeight as permanent blank space —
  // nothing ever told the slot the ad was never coming.
  const [blocked, setBlocked] = useState(scriptBlocked)
  useEffect(() => {
    if (blocked) return
    blockedListeners.add(setBlocked)
    return () => {
      blockedListeners.delete(setBlocked)
    }
  }, [blocked])

  useEffect(() => {
    if (!isAdSenseEnabled || !slot || pushed.current || blocked) return
    // React 18 StrictMode double-invokes effects; pushing twice throws.
    pushed.current = true
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.warn('[adsense] push failed', err)
    }
  }, [slot, blocked])

  if (!isAdSenseEnabled || !slot || blocked) {
    if (!config.adsense.showPlaceholders) return null
    return (
      <div
        className={cn(
          'flex flex-col items-center justify-center gap-1 rounded-2xl border border-dashed',
          'border-border-token bg-bg-subtle/50 text-fg-muted',
          className,
        )}
        style={{ minHeight: spec.minHeight }}
        aria-hidden="true"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
          {blocked ? 'Ad blocked' : 'Ad placeholder'}
        </span>
        <span className="text-xs opacity-60">{placement}</span>
      </div>
    )
  }

  return (
    <aside className={cn('w-full overflow-hidden', className)} aria-label={label}>
      <div className="mb-1 text-center text-[10px] font-medium uppercase tracking-[0.18em] text-fg-muted/70">
        {label}
      </div>
      <ins
        ref={ref}
        className="adsbygoogle block"
        style={{ display: 'block', minHeight: spec.minHeight }}
        data-ad-client={config.adsense.client}
        data-ad-slot={slot}
        data-ad-format={spec.format}
        {...(spec.layout ? { 'data-ad-layout': spec.layout } : {})}
        data-full-width-responsive="true"
      />
    </aside>
  )
}

/** Injects the AdSense loader once, only when a publisher ID is present. */
export function useAdSenseScript() {
  useEffect(() => {
    if (!isAdSenseEnabled) return
    const src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${config.adsense.client}`
    if (document.querySelector(`script[src="${src}"]`)) return

    const script = document.createElement('script')
    script.async = true
    script.src = src
    script.crossOrigin = 'anonymous'
    // AdSense is one of the most commonly ad-blocked domains on the web.
    // Without this, a blocked request left every <AdSlot> reserving its
    // minHeight forever with nothing inside — a permanent blank gap.
    script.onerror = markScriptBlocked
    document.head.appendChild(script)
  }, [])
}
