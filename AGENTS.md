# Agent instructions

See **[CLAUDE.md](./CLAUDE.md)** — it is the single source of truth for this repo and applies to every AI agent, not just Claude.

Quick summary, but read the full file before editing:

1. Run `npm run verify` before finishing. It gates manifest sync, the import boundary, typecheck, and lint.
2. Do **not** run bare `tsc --noEmit` — the root tsconfig is a solution file, so it silently checks nothing and exits 0. Use `npm run typecheck`.
3. Never import `src/content/index.ts` from an eagerly-loaded module — use `src/content/manifest.ts`.
4. Update `src/content/manifest.ts` whenever you add or rename a lesson.
5. Flat colours only, no gradients. Font Awesome icons only, no emoji.
6. Lessons assume zero background: define every term, analogy before mechanism.
