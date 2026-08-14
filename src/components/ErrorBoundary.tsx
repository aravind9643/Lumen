import { Component, type ErrorInfo, type ReactNode } from 'react'
import { Icon } from './ui/Icon'

interface Props {
  children: ReactNode
  /** Shown instead of the default panel, e.g. to scope failure to one route. */
  fallback?: ReactNode
}

interface State {
  error: Error | null
}

/**
 * Catches render errors so one broken component cannot blank the entire page.
 *
 * This also covers lazy-chunk load failures, which `<Suspense>` does not —
 * after a redeploy, a client holding the old HTML requests a hashed chunk that
 * no longer exists, and the resulting rejection surfaces here. Because that
 * specific failure is fixed by fetching the new HTML, we offer a reload.
 */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('[ErrorBoundary]', error, info.componentStack)
  }

  render() {
    const { error } = this.state
    if (!error) return this.props.children
    if (this.props.fallback) return this.props.fallback

    // A failed dynamic import means the deployed assets moved under us.
    const isChunkError = /Failed to fetch dynamically imported|Importing a module script failed|ChunkLoadError/i.test(
      error.message,
    )

    return (
      <div className="mx-auto flex max-w-lg flex-col items-center px-4 py-24 text-center">
        <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-red-500">
          <Icon name="warning" size={22} />
        </span>

        <h1 className="text-2xl font-bold tracking-tight">
          {isChunkError ? 'This page needs refreshing' : 'Something went wrong'}
        </h1>

        <p className="mt-2 leading-relaxed text-fg-muted">
          {isChunkError
            ? 'The site was updated while this tab was open, so part of it could not load. Reloading will fix it.'
            : 'An unexpected error stopped this page from rendering. Your saved progress is untouched.'}
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 font-semibold text-accent-fg transition-transform hover:scale-105"
          >
            <Icon name="reset" size={14} /> Reload the page
          </button>
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-border-token px-5 py-3 font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            <Icon name="home" size={14} /> Back home
          </a>
        </div>

        {import.meta.env.DEV && (
          <pre className="mt-8 max-w-full overflow-x-auto rounded-xl bg-code-bg p-4 text-left font-mono text-xs text-red-500">
            {error.stack ?? error.message}
          </pre>
        )}
      </div>
    )
  }
}
