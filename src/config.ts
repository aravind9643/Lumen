/**
 * Single source of site-wide configuration.
 *
 * Every third-party integration is opt-in via environment variables: with no
 * .env present the site runs fully functional and makes zero external
 * requests, which keeps local development fast and private.
 */

const env = import.meta.env

/**
 * Strips a trailing slash so `${url}${path}` never produces a double slash.
 * Normalising once here — rather than in every place that builds a URL —
 * is what keeps the client-side `useSEO` hook, the sitemap generator, and
 * the prerender script from being able to disagree with each other.
 */
const stripTrailingSlash = (url: string) => url.replace(/\/+$/, '')

export const config = {
  site: {
    name: 'Lumen',
    tagline: 'Master Software & AI Engineering from First Principles',
    description:
      'Comprehensive, zero-fluff engineering courses covering Generative AI, Cloud Systems, Distributed Backend, Modern Frontend, Mobile Architecture, and Quantitative Finance.',
    url: stripTrailingSlash(env.VITE_SITE_URL ?? 'https://lumen-peach-two.vercel.app'),
    author: 'Lumen',
    twitter: '@lumenlearn',
    /**
     * Path to a social preview image, relative to the site root. Leave empty
     * and no og:image is emitted — the Twitter card then degrades to a plain
     * summary rather than rendering an empty large-image card.
     */
    ogImage: (env.VITE_OG_IMAGE as string | undefined) ?? '',
  },

  analytics: {
    measurementId: (env.VITE_GA_MEASUREMENT_ID as string | undefined) ?? '',
    debug: env.DEV,
  },

  adsense: {
    /** e.g. "ca-pub-1234567890123456" */
    client: (env.VITE_ADSENSE_CLIENT as string | undefined) ?? 'ca-pub-9316330718026325',
    slots: {
      inArticle: (env.VITE_ADSENSE_SLOT_IN_ARTICLE as string | undefined) ?? '',
      sidebar: (env.VITE_ADSENSE_SLOT_SIDEBAR as string | undefined) ?? '',
      footer: (env.VITE_ADSENSE_SLOT_FOOTER as string | undefined) ?? '',
    },
    /** Render labelled placeholders in dev so layout is visible without ads. */
    showPlaceholders: env.DEV,
  },

  features: {
    voiceReading: true,
    progressTracking: true,
    search: true,
  },
} as const

export const isAdSenseEnabled = Boolean(config.adsense.client)
