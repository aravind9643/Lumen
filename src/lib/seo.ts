import { useEffect } from 'react'
import { config } from '../config'

interface SEOOptions {
  title: string
  description?: string
  /** Path only, e.g. "/tutorials/ai-fundamentals". */
  path?: string
  type?: 'website' | 'article'
  /** JSON-LD structured data injected for rich results. */
  jsonLd?: Record<string, unknown>
}

const setMeta = (selector: string, attr: string, key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/** Imperative document-head management — no external helmet dependency. */
export function useSEO({ title, description, path, type = 'website', jsonLd }: SEOOptions) {
  const desc = description ?? config.site.description

  useEffect(() => {
    const full = title === config.site.name ? title : `${title} · ${config.site.name}`
    document.title = full

    const url = `${config.site.url}${path ?? window.location.pathname}`

    setMeta('meta[name="description"]', 'name', 'description', desc)
    setMeta('meta[property="og:title"]', 'property', 'og:title', full)
    setMeta('meta[property="og:description"]', 'property', 'og:description', desc)
    setMeta('meta[property="og:type"]', 'property', 'og:type', type)
    setMeta('meta[property="og:url"]', 'property', 'og:url', url)
    setMeta('meta[property="og:site_name"]', 'property', 'og:site_name', config.site.name)
    // Only claim a large-image card when an image actually exists; otherwise
    // the platform renders an empty card instead of falling back to a summary.
    const image = config.site.ogImage ? `${config.site.url}${config.site.ogImage}` : null
    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', image ? 'summary_large_image' : 'summary')
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', full)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', desc)
    if (config.site.twitter) {
      setMeta('meta[name="twitter:site"]', 'name', 'twitter:site', config.site.twitter)
    }
    if (image) {
      setMeta('meta[property="og:image"]', 'property', 'og:image', image)
      setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', image)
    }

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = url
  }, [title, desc, path, type])

  // Callers pass an object literal, so its identity changes on every render.
  // Keying the effect on the serialised value instead means the script is
  // rewritten only when the structured data actually differs.
  const jsonLdKey = jsonLd ? JSON.stringify(jsonLd) : null

  useEffect(() => {
    if (!jsonLdKey) return
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = jsonLdKey
    document.head.appendChild(script)
    return () => script.remove()
  }, [jsonLdKey])
}
