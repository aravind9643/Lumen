/**
 * Single source of site-wide configuration.
 *
 * Every third-party integration is opt-in via environment variables: with no
 * .env present the site runs fully functional and makes zero external
 * requests, which keeps local development fast and private.
 */

const env = import.meta.env

export const config = {
  site: {
    name: 'Lumen',
    tagline: 'Learn it properly.',
    description:
      'In-depth, carefully written tutorials that start from zero and build up. Free, open, and made for people who want to actually understand the subject.',
    url: env.VITE_SITE_URL ?? 'https://lumen.tutorial',
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
    client: (env.VITE_ADSENSE_CLIENT as string | undefined) ?? '',
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
