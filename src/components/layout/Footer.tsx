import { Link } from 'react-router-dom'
import { config } from '../../config'
import { tutorialsMeta } from '../../content/manifest'
import { AdSlot } from '../ads/AdSlot'
import { Icon } from '../ui/Icon'

export function Footer() {
  return (
    <footer className="no-print mt-24 border-t border-border-token bg-bg-subtle/40">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <AdSlot placement="footer" className="mb-10" />
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="mb-3 flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-accent-fg">
                <Icon name="sparkles" size={14} />
              </span>
              <span className="font-bold tracking-tight">{config.site.name}</span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-fg-muted">
              {config.site.description}
            </p>
            <div className="mt-4 flex gap-2">
              <SocialLink href="mailto:hello@example.com" label="Email"><Icon name="mail" size={15} /></SocialLink>
              <SocialLink href="/feed.xml" label="RSS feed"><Icon name="rss" size={15} /></SocialLink>
            </div>
          </div>

          <nav aria-labelledby="footer-tutorials">
            <h3 id="footer-tutorials" className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-fg-muted">
              Tutorials
            </h3>
            <ul className="space-y-2">
              {tutorialsMeta.map((t) => (
                <li key={t.slug}>
                  <Link
                    to={`/tutorials/${t.slug}`}
                    className="text-sm text-fg-muted transition-colors hover:text-accent"
                  >
                    {t.shortTitle ?? t.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-site">
            <h3 id="footer-site" className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-fg-muted">
              Site
            </h3>
            <ul className="space-y-2">
              {[
                { to: '/tutorials', label: 'All tutorials' },
                { to: '/progress', label: 'My progress' },
                { to: '/about', label: 'About' },
                { to: '/privacy', label: 'Privacy' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-fg-muted transition-colors hover:text-accent">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border-token pt-6 text-xs text-fg-muted sm:flex-row">
          <p>© {new Date().getFullYear()} {config.site.name}. Built for people who want to actually understand how things work.</p>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('lumen:shortcuts'))}
            className="flex items-center gap-1.5 rounded-lg border border-border-token bg-bg px-2.5 py-1 text-[11px] font-semibold text-fg-muted transition-colors hover:border-accent hover:text-accent"
          >
            <Icon name="keyboard" size={12} />
            <span>Shortcuts (?)</span>
          </button>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-xl border border-border-token text-fg-muted transition-colors hover:border-accent hover:text-accent"
    >
      {children}
    </a>
  )
}
