import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { config } from '../config'
import { allCategories } from '../content/manifest'
import { useSEO } from '../lib/seo'
import { Icon } from '../components/ui/Icon'

export function About() {
  useSEO({
    title: 'About',
    description: `About ${config.site.name} — why it exists and how it is written.`,
    path: '/about',
  })

  return (
    <Prose title="About" lede={config.site.tagline}>
      <p>
        {config.site.name} exists because most explanations sit at one of two unhelpful extremes.
        Either they are marketing copy that explains nothing, or they are reference material that
        assumes you already understand the thing being explained. The middle ground — careful, honest,
        complete writing for someone genuinely trying to learn — is thin, whatever the subject.
      </p>

      <h2>How the material is written</h2>
      <p>
        Every lesson is built to be read start to finish rather than skimmed. Concepts arrive in an order
        where each one has the background it needs. Trade-offs are stated plainly, including the cases
        where a technique is the wrong choice. Code examples are complete programs rather than fragments,
        so you can copy one and run it.
      </p>

      <h2>Design choices worth knowing</h2>
      <ul>
        <li>
          <strong>Your progress stays yours.</strong> Completed lessons, bookmarks, and streaks live in
          your browser's local storage. There is no account and no server-side profile.
        </li>
        <li>
          <strong>Every lesson can be listened to.</strong> The voice player uses your device's built-in
          speech synthesis, so nothing is sent to a third party to produce audio.
        </li>
        <li>
          <strong>Ads pay for hosting, and that is all.</strong> They are clearly labelled, never
          disguised as content, and never placed inside a code block or mid-paragraph.
        </li>
        <li>
          <strong>The whole thing is free.</strong> No paywall, no email capture, no upsell.
        </li>
      </ul>

      <h2>What is covered</h2>
      <p>
        {config.site.name} is not tied to one subject. Courses currently span{' '}
        {allCategories.length === 1 ? (
          <>{allCategories[0]}</>
        ) : (
          <>
            {allCategories.slice(0, -1).join(', ')} and {allCategories.at(-1)}
          </>
        )}
        , and the platform is built so a new subject is a content addition rather than a rebuild. If a
        topic can be taught from first principles, it belongs here.
      </p>
    </Prose>
  )
}

export function Privacy() {
  useSEO({
    title: 'Privacy',
    description: 'What data this site stores and what it does not.',
    path: '/privacy',
  })

  return (
    <Prose title="Privacy" lede="The short version: almost nothing leaves your browser.">
      <h2>What stays on your device</h2>
      <p>
        Reading progress, bookmarks, study streak, theme preference, accent colour, text size, and voice
        settings are all written to your browser's local storage. They are never transmitted to us, and
        clearing your browser data removes them completely. The Reset button on the progress page does the
        same thing deliberately.
      </p>

      <h2>Analytics</h2>
      <p>
        If analytics is configured for this deployment, Google Analytics records anonymised page views and
        interaction events such as lesson starts, scroll depth, and search terms. This is used to
        understand which material is useful and where readers get stuck. No personally identifying
        information is collected, and analytics is disabled entirely when no measurement ID is configured.
      </p>

      <h2>Advertising</h2>
      <p>
        Ad units are served by Google AdSense, which may use cookies to show relevant advertising. You can
        manage this through Google's{' '}
        <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
          Ads Settings
        </a>{' '}
        or by blocking third-party cookies in your browser. Nothing on this site depends on ads loading —
        blocking them breaks nothing.
      </p>

      <h2>Voice reading</h2>
      <p>
        Text-to-speech uses the Web Speech API built into your browser and operating system. Lesson text is
        passed to your device's own speech engine. Depending on your platform and the voice you select,
        that engine may process text locally or through your OS vendor's service — that behaviour is
        determined by your device, not by this site.
      </p>

      <h2>Contact</h2>
      <p>Questions about any of this are welcome via the links in the footer.</p>
    </Prose>
  )
}

export function NotFound() {
  useSEO({ title: 'Page not found', path: '/404' })

  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-32 text-center">
      <motion.p
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-accent-flat text-8xl font-extrabold tracking-tight"
      >
        404
      </motion.p>
      <h1 className="mt-4 text-2xl font-bold tracking-tight">This page doesn't exist</h1>
      <p className="mt-2 text-fg-muted">
        The link may be outdated, or the lesson may have been renamed.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 font-semibold text-accent-fg transition-transform hover:scale-105"
        >
          <Icon name="home" size={15} /> Back home
        </Link>
        <Link
          to="/tutorials"
          className="inline-flex items-center gap-2 rounded-xl border border-border-token px-5 py-3 font-semibold transition-colors hover:border-accent hover:text-accent"
        >
          <Icon name="search" size={15} /> Browse tutorials
        </Link>
      </div>
    </div>
  )
}

function Prose({ title, lede, children }: { title: string; lede: string; children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <motion.header
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="border-b border-border-token pb-7"
      >
        <h1 className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
        <p className="mt-3 text-lg text-fg-muted">{lede}</p>
      </motion.header>

      <div
        className={[
          'mt-8 space-y-5 text-[17px] leading-[1.8] text-fg/90',
          '[&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-fg',
          '[&_ul]:space-y-2.5 [&_ul]:pl-5 [&_li]:list-disc [&_li]:marker:text-accent',
          '[&_strong]:font-semibold [&_strong]:text-fg',
          '[&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2',
        ].join(' ')}
      >
        {children}
      </div>
    </div>
  )
}
