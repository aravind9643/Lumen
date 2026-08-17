import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { render } from '@testing-library/react'
import { useSEO } from '../../src/lib/seo'

/**
 * `useSEO` builds `${config.site.url}${path}` directly. A trailing slash on
 * `VITE_SITE_URL` — an easy misconfiguration — previously produced a double
 * slash in canonical and og:url tags once the hook's effect ran, even though
 * the build-time prerender script defensively stripped it. The fix moved
 * normalisation into config.ts itself, so every consumer sees a clean value
 * with no per-call-site defence needed.
 */

function Probe(props: Parameters<typeof useSEO>[0]) {
  useSEO(props)
  return null
}

const getCanonical = () => document.head.querySelector('link[rel="canonical"]')?.getAttribute('href')
const getMeta = (selector: string) => document.head.querySelector(selector)?.getAttribute('content')

beforeEach(() => {
  document.head.querySelectorAll('link[rel="canonical"], meta, script[type="application/ld+json"]').forEach((n) => n.remove())
})

afterEach(() => {
  vi.restoreAllMocks()
})

describe('useSEO URL construction', () => {
  it('never produces a double slash between the site origin and a path', () => {
    render(<Probe title="Lesson" path="/tutorials/ai-fundamentals/what-is-ai" />)
    const canonical = getCanonical()
    expect(canonical).toBeTruthy()
    expect(canonical).not.toMatch(/[^:]\/\//)
    expect(canonical).toMatch(/\/tutorials\/ai-fundamentals\/what-is-ai$/)
  })

  it('sets og:url to the same normalised value as the canonical link', () => {
    render(<Probe title="Lesson" path="/tutorials/ai-fundamentals/what-is-ai" />)
    expect(getMeta('meta[property="og:url"]')).toBe(getCanonical())
  })

  it('falls back to the current pathname when no path is given', () => {
    render(<Probe title="Home" />)
    expect(getCanonical()).not.toMatch(/[^:]\/\//)
  })

  it('sets the document title, joined with the site name', () => {
    render(<Probe title="A Lesson" path="/x" />)
    expect(document.title).toMatch(/^A Lesson · /)
  })

  it('does not append the site name to itself', () => {
    render(<Probe title="Lumen" path="/" />)
    expect(document.title).toBe('Lumen')
  })
})
