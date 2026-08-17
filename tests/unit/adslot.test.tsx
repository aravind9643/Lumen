import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'

/**
 * `AdSlot`'s "blocked script" state is module-level (shared across every slot
 * on the page, since the loader script is injected once). `vi.resetModules()`
 * per test keeps that state from leaking between tests — otherwise whichever
 * test runs first and triggers a block would poison every test after it.
 */
async function freshModule() {
  vi.resetModules()
  return import('../../src/components/ads/AdSlot')
}

const withAdsense = () => {
  vi.doMock('../../src/config', () => ({
    config: {
      adsense: {
        client: 'ca-pub-123',
        slots: { inArticle: 'slot-1', sidebar: 'slot-2', footer: 'slot-3' },
        showPlaceholders: false,
      },
    },
    isAdSenseEnabled: true,
  }))
}

const withoutAdsense = () => {
  vi.doMock('../../src/config', () => ({
    config: {
      adsense: { client: '', slots: {}, showPlaceholders: true },
    },
    isAdSenseEnabled: false,
  }))
}

beforeEach(() => {
  document.head.querySelectorAll('script').forEach((s) => s.remove())
  window.adsbygoogle = undefined
})

afterEach(() => {
  vi.doUnmock('../../src/config')
  vi.restoreAllMocks()
})

describe('AdSlot without a publisher configured', () => {
  it('shows a placeholder in dev, matching showPlaceholders', async () => {
    withoutAdsense()
    const { AdSlot } = await freshModule()
    render(<AdSlot placement="sidebar" />)
    expect(screen.getByText('Ad placeholder')).toBeInTheDocument()
  })
})

describe('AdSlot when the loader script is blocked', () => {
  it('renders the ad unit normally before any block is detected', async () => {
    withAdsense()
    const { AdSlot } = await freshModule()
    const { container } = render(<AdSlot placement="sidebar" />)
    expect(container.querySelector('ins.adsbygoogle')).toBeInTheDocument()
  })

  it('collapses to a placeholder once the script reports onerror', async () => {
    withAdsense()
    const { AdSlot, useAdSenseScript } = await freshModule()

    function Harness() {
      useAdSenseScript()
      return <AdSlot placement="sidebar" />
    }

    const { container } = render(<Harness />)
    expect(container.querySelector('ins.adsbygoogle')).toBeInTheDocument()

    const script = document.head.querySelector<HTMLScriptElement>(
      'script[src*="pagead2.googlesyndication.com"]',
    )
    expect(script).toBeTruthy()

    // Simulate an ad blocker rejecting the request.
    act(() => {
      script!.onerror?.(new Event('error'))
    })

    expect(container.querySelector('ins.adsbygoogle')).not.toBeInTheDocument()
  })

  it('renders nothing (not even a placeholder) in production once blocked', async () => {
    // showPlaceholders is false in the mocked config above — a blocked ad in
    // production should collapse to nothing, not linger as reserved space.
    withAdsense()
    const { AdSlot, useAdSenseScript } = await freshModule()

    function Harness() {
      useAdSenseScript()
      return <AdSlot placement="footer" />
    }

    const { container } = render(<Harness />)
    const script = document.head.querySelector<HTMLScriptElement>(
      'script[src*="pagead2.googlesyndication.com"]',
    )
    act(() => {
      script!.onerror?.(new Event('error'))
    })

    expect(container).toBeEmptyDOMElement()
  })

  it('a slot mounted after the block was already detected starts collapsed', async () => {
    // The block state is module-level and shared: a slot that mounts on a
    // later page view must not re-reserve space the app already knows is
    // never going to be filled.
    withAdsense()
    const { AdSlot, useAdSenseScript } = await freshModule()

    function Trigger() {
      useAdSenseScript()
      return null
    }
    render(<Trigger />)
    const script = document.head.querySelector<HTMLScriptElement>(
      'script[src*="pagead2.googlesyndication.com"]',
    )
    act(() => {
      script!.onerror?.(new Event('error'))
    })

    const { container } = render(<AdSlot placement="inArticle" />)
    expect(container.querySelector('ins.adsbygoogle')).not.toBeInTheDocument()
  })
})
