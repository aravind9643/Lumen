# Working in this repo

A React tutorial site whose rendering engine is subject-agnostic — the shell has no AI-specific code anywhere. Content is currently a single AI-focused course, but that is a content choice, not an architectural one: nothing stops a non-AI course being added the same way `web-fundamentals.ts` previously proved out. Read this before editing.

> Courses are grouped by their `category` field, which drives the subject filter and the
> grouped sections on `/tutorials`. Keep UI copy subject-neutral: the hero, taglines, and
> About page must not assume a topic. Anything topic-specific belongs in a course, not the
> shell. `config.ts` holds all site-level copy — change it there, not inline.

> This file is the source of truth for **all** agents. `AGENTS.md`, `GEMINI.md`, and
> `.github/copilot-instructions.md` are identical short pointers to it, because each
> tool looks for a different filename. If you change the summary in one, change it in
> all four — or better, only change this file and leave the pointers alone.

**Always run `npm run verify` before saying you are done.** It runs the manifest check, the import-boundary check, typecheck, and lint. `npm run build` runs it too, so a broken invariant fails the build rather than shipping.

> **Do not run bare `tsc --noEmit` — it silently checks nothing.** The root `tsconfig.json` is a solution file (`"files": []` plus project references), so a bare invocation resolves zero input files and exits 0 no matter what is broken. Use `npm run typecheck` (`tsc -b --force`) or `npm run verify`.

---

## The four things that break silently

These are the mistakes that pass typecheck, render fine, and still cause real damage. Each has an automated check because each has been hit before.

### 1. Never import `content/index` from an eagerly-loaded module

`src/content/index.ts` reaches every lesson's prose — about 213kB. Anything reachable from `main.tsx` without passing through a `lazy()` boundary is in the initial bundle.

| Loading eagerly | Use |
|---|---|
| `Header`, `Footer`, `Home`, `lib/progress`, `TutorialCard` | `content/manifest` |
| Lazy routes (`Lesson`, `TutorialDetail`, `Progress`, `Tutorials`), `SearchDialog` | `content/index` |

Nothing visibly breaks if you get this wrong — the site just gets slower. `npm run check:imports` walks the static-import graph from `main.tsx` and fails with the offending filename.

### 2. Update `content/manifest.ts` when you add or rename a lesson

`manifest.ts` duplicates course metadata (slug, title, duration, icon, colour) **without** lesson bodies, so the shell can list courses without loading content. It is hand-maintained on purpose — the alternative is a codegen step that obscures where the data comes from.

`npm run check:manifest` parses both sides with the TypeScript compiler and prints a field-level diff on mismatch.

### 3. Quiz answers must stay spread across positions

`check:quiz` fails if more than half the correct answers sit at the same index. They were once 18-of-20 at index 1, which let a reader score full marks by pattern-matching instead of reading. When adding a quiz, put the correct option somewhere other than second.

It also catches an `answer` index pointing outside `options`, and a missing `explanation`.

### 4. Content files are pure data

`src/content/tutorials/*.ts` must not import from `components/` or anything with UI behaviour. Courses reference icons by name (`icon: 'brain'`), resolved through `lib/icons.ts`. Keeping content importable without pulling in React is what makes the build-time scripts possible.

---

## Adding content

A lesson is a `Block[]`. `BlockRenderer` maps each variant to a component; pages never branch on content shape.

```ts
// src/content/tutorials/<course>.ts
{
  slug: 'my-lesson',
  title: 'My Lesson',
  description: 'One sentence.',
  duration: 10,
  blocks: [
    { type: 'recap', points: ['What the previous lesson established'] },
    { type: 'paragraph', text: 'Body with `code` and **bold**.' },
    { type: 'definition', term: 'Jargon', plain: 'What it means, plainly.' },
    { type: 'analogy', text: 'An everyday comparison.' },
    { type: 'code', language: 'python', filename: 'x.py', code: '...' },
    { type: 'exercise', prompt: '...', hint: '...', solution: '...' },
    { type: 'quiz', question: '...', options: ['a', 'b'], answer: 1, explanation: '...' },
  ],
}
```

Then add the lesson to `manifest.ts`. Routing, search, table of contents, progress, and voice reading all pick it up with no further work.

### Adding a new subject

Set a new `category` on the course. The subject filter, grouped sections, sitemap, and card labels all derive from it — no UI change needed. With a single course currently in the registry, the subject-filter row in `Tutorials.tsx` hides itself automatically (`allCategories.length > 1`) — check that logic if you add a second category and the filter still doesn't appear.

### Adding a block type

1. Add a variant to the `Block` union in `content/types.ts`
2. Add a `case` in `BlockRenderer`
3. If it carries readable prose, add it to `blocksToText()` in `content/index.ts` — otherwise it is invisible to search and to voice reading

The exhaustiveness guard in `BlockRenderer`'s `default` case fails the build until step 2 is done. Step 3 has no guard; it is on you.

---

## Writing style for lessons

The courses are written zero-to-hero: **assume no coding background and no maths beyond arithmetic.** Match this or the content becomes inconsistent.

- Define every technical term on first use, with a `definition` block. A term used unexplained is a bug.
- Give the analogy **before** the mechanism, not after.
- Prefer concrete worked examples over abstract description. Code examples are complete runnable programs, not fragments.
- State trade-offs honestly, including when a technique is the wrong choice.
- Quiz `explanation` fields teach — say why the wrong answers are tempting, not just which is right.
- British spelling ("behaviour", "generalisation"), en dashes for ranges, `—` for asides.
- Do not pad. If a lesson is short because the idea is small, leave it short.

---

## Design constraints

- **Flat colours only.** No gradients. The one `linear-gradient` in `index.css` draws the hero grid's repeating rules — that is a drawing technique, not decoration. Do not add gradient fills, text, or washes.
- **Font Awesome icons only, never emoji.** Add to the `ICONS` registry in `lib/icons.ts` and use `<Icon name="..." />`. `IconName` is derived from the registry, so typos fail the build.
  - Watch legibility at small sizes: `faSun` reads as a gear below ~20px, which is why the header toggle uses `faCircleHalfStroke`.
- **Theme tokens, not raw colours.** Use `bg-bg-elev`, `text-fg-muted`, `border-border-token`, `text-accent`. Anything hardcoded breaks one of the two themes or one of the five accents.
- **Accent colours must clear WCAG AA (4.5:1) on white.** `--color-brand-600` is used for text. Emerald and amber are already at their lightness ceiling — if you change them, recompute the contrast rather than eyeballing it.

---

## Accessibility requirements

These are not optional polish; each was a real defect that got fixed.

- Dialogs restore focus to their trigger on close and close on Escape (`SearchDialog`, `ThemePanel`).
- Dynamic results live in `role="status" aria-live="polite"` regions (quiz outcome, search count).
- Never use `disabled` on a control that may be focused when it flips — focus is silently lost. Use `aria-disabled` and no-op the handler (see `Quiz.tsx`).
- Never convey state by colour alone. Add `sr-only` text.
- Reveal toggles need `aria-expanded` and `aria-controls` pointing at a real element id.
- `<Icon>` defaults to `aria-hidden`. Pass `title` only when the icon is the sole accessible name.
- A content block's own heading level is decided by the surrounding lesson (via the `heading` block's `level`), not by the block itself. `keyPoints`, `steps`, and `comparison` are section *labels*, not outline headings — they use `role="group"` + `aria-labelledby` on a `<p>`, never a hardcoded `<h4>`, because a fixed heading level can skip levels depending on what precedes it. Follow this pattern for any new block that needs a labelled sub-region.

---

## Shared UI

`lib/card.ts` exports `card()`, a class-builder for the rounded/bordered/elevated shell used across course cards, lesson nav cards, and progress rows. It is a function, not a wrapping component, because call sites vary between `<div>`, `<Link>`, and `<li>` — use it wherever you'd otherwise retype `rounded-2xl border border-border-token bg-bg-elev`. Pass `interactive: true` for the hover-lift variant used on clickable cards. Genuinely distinct visual treatments (accent-tinted variants, different shadow emphasis) should stay as their own literal classes rather than being forced through `card()`'s options.

---

## Performance rules

- Anything driven by scroll is rAF-throttled and detaches when its work is done (see the scroll-depth effect in `Lesson.tsx`).
- `SingleBlock` in `BlockRenderer` is memoised because `speakingBlockIndex` changes on every spoken sentence. Do not unwrap it.
- `CodeBlock` memoises highlighting on `code`. It is five regex passes per line — do not move it back into the render body.
- Measure before optimising, and measure with CPU throttling. On an unthrottled dev machine everything looks fine; the problems only appear at 4–6× throttle.
- `npm run check:bundle` enforces a 200kB gzipped budget on the eagerly-loaded JS and asserts no lesson prose reached it. If it fails, you almost certainly added a static import that reaches heavy code — find it rather than raising the budget.

---

## Third-party integrations

All opt-in via env vars. **With no `.env`, the site is fully functional and makes zero external requests** — keep it that way.

| Var | Effect if unset |
|---|---|
| `VITE_SITE_URL` | Canonical/OG URLs use a placeholder domain. **Set before production.** |
| `VITE_GA_MEASUREMENT_ID` | Analytics never loads |
| `VITE_ADSENSE_CLIENT` + slot IDs | Ads render as dev placeholders, or nothing in production |
| `VITE_OG_IMAGE` | No `og:image`; Twitter card degrades to `summary` |

---

## Conventions

- **Comments explain why, not what.** `// increment counter` is noise. `// aria-disabled rather than disabled: a real disabled button drops out of the tab order while focused` earns its place.
- Match surrounding style — this codebase uses no semicolons, single quotes, 2-space indent.
- `type` imports use `import type`. `verbatimModuleSyntax` is on.
- Prefer named exports. Pages export a named component; `App.tsx` default-exports.
- The `react/only-export-components` warnings in `lib/*.tsx` and `AdSlot.tsx` are the standard context-plus-hook pattern. **Leave them.** Splitting those files to silence the warning makes the code worse.

---

## Testing

```bash
npm run test:unit      # Vitest — fast, run this while working
npm run test:watch     # same, in watch mode
npm run test:e2e       # Playwright — needs `npm run build` first
npm run test:e2e:ui    # interactive debugging
```

`npm run verify` (and therefore `npm run build`) runs the unit tests. E2E runs separately because it needs built output.

- **Unit tests** (`tests/unit/`) cover pure logic and components in jsdom: content resolution, search, storage, progress, the quiz, and the block renderer.
- **E2E tests** (`tests/e2e/`) run against `dist/`, not the dev server — prerendering, hydration, and code splitting only exist after a build.

Two things to know:

- **E2E uses `tests/e2e/static-server.mjs`, not `vite preview`.** Preview applies the SPA fallback before looking for nested `index.html` files, so prerendered routes never get served and every page looks broken.
- **Framer-motion exit animations linger in the DOM.** Asserting an element is gone immediately after a state change is flaky. Assert on interactive state (`aria-disabled`, `aria-expanded`) or use `waitForElementToBeRemoved`.

When adding a `Block` type, add a case to the "gives every block type a renderer" test in `tests/unit/block-renderer.test.tsx` — the exhaustiveness guard catches a missing `case`, but not one that renders nothing.

## Prerendering

`npm run build` renders every route to static HTML in `dist/`, so crawlers get real content rather than an empty root div. The client hydrates on top.

Two things to know before touching it:

- **`renderToString` cannot wait for `React.lazy`.** It emits the Suspense fallback instead, which silently prerenders the bare shell. `scripts/prerender.mjs` calls `warmup()` on *every* route first. Warming one route per lazy chunk is not enough — `lazy()` state lives per wrapper, so `About`, `Privacy`, and `NotFound` each need warming even though all three come from `Static.tsx`.
- **`vite preview` cannot verify prerendering.** It applies the SPA fallback before looking for nested `index.html` files, so every route serves the root shell and looks broken. Use a plain static server that resolves `<path>/index.html` first — that is what Vercel and Netlify do.

Head tags are built from the content registry in the prerender script, not captured from the render, because `useSEO` writes them in effects that never run server-side. Adding a route means adding it to the `routes` array there.

`check:prerender` fails the build if any page renders under ~800 characters or if titles are not per-route.

### Adding a new static route (not a tutorial/lesson page)

Add it to `scripts/static-routes.mjs` first, with `indexable: true` unless the page has no evergreen content worth surfacing in search (that's why `/progress` is `indexable: false` — a fresh visitor just sees "0 of N complete"). `prerender.mjs` asserts its own route list agrees with `static-routes.mjs` and fails the build on mismatch — this is what previously let the sitemap silently miss `/progress` for a while, since the two scripts each hardcoded their own copy.

## Known gaps

- **No offline support.** No service worker, no web app manifest. A lost connection mid-lesson breaks navigation entirely. Reasonable for a reading-focused site to eventually want (people read on mobile/transit), but it's a deliberate absence, not an oversight — adding one is a real feature decision (cache strategy, storage budget, update flow), not a quick fix.
- **No user accounts or cross-device sync.** Progress, bookmarks, and quiz answers are `localStorage`-only. Export/import (see Progress page) covers manual device-to-device transfer; there is no server-backed account system, and adding one is a real architectural decision, not a quick fix.
- **Bookmarks are lesson-level only.** There is no way to bookmark a specific block or paragraph inside a lesson.

123 unit tests cover content resolution (including fuzzy search and a reading-time-accuracy sanity check against actual word count), storage, progress (including quiz-answer persistence and export/import round-tripping), the quiz, the block renderer, TTS (including the session-token race conditions), analytics, SEO URL construction, and AdSlot's ad-blocker resilience; 52 E2E tests (2 viewports) cover prerendering, hydration, search, theming, category browsing, resilience, and visual regression on the homepage, tutorials grid, and a lesson page.

If you find a real gap, add it here rather than fixing it silently — this list is what stops the same thing being "discovered" repeatedly.

## UX/UI conventions introduced for reading and review features

- **Print / export view.** A lesson's Print button (`window.print()`) relies on the `.no-print` utility class in `index.css` — anything that only makes sense on-screen (site header/footer, the floating voice player, the lesson sidebar, breadcrumbs, prev/next nav) is marked `.no-print` rather than the print stylesheet trying to guess what to hide. Add `.no-print` to any new lesson-page chrome that shouldn't appear in a printed copy.
- **Keyboard lesson navigation.** `Lesson.tsx` binds ← / → to previous/next lesson, ignored while a form control or contenteditable element has focus so it never hijacks typing. This is scoped to the lesson page, not global — a site-wide shortcut layer would need to coordinate with the search dialog's own key handling.
- **Quiz answers persist.** `ProgressState.quizAnswers` (in `lib/progress.tsx`) stores the last answer per `tutorialSlug/lessonSlug/blockIndex`, surfaced as `quizHistory` for the Progress page's review section. When adding a new field to `ProgressState`, remember existing users' `localStorage` predates it — `ProgressProvider` merges the persisted value over `EMPTY` specifically so a missing field doesn't crash the first read; do the same for any future field.
- **Progress export/import.** `exportState`/`importState` on `useProgress()` serialise/restore the whole `ProgressState` as JSON. `importState` validates the shallow shape (`completed` is an object, `bookmarks` is an array, `streak` is an object) before applying, since the input is a user-supplied file, not something the app produced this session — a malformed or foreign JSON blob is rejected outright rather than partially merged.
- **Search fuzzy fallback.** `searchContent` in `content/index.ts` only attempts a bounded-edit-distance fuzzy match against title/description words when the exact substring search finds nothing — it never fuzzy-matches against lesson bodies, which would make nearly everything "match" a short query. Fuzzy results always score below exact ones.
- **Visual regression baselines.** `tests/e2e/visual.spec.ts` screenshots the homepage (light/dark), tutorials grid, and a lesson page. Baselines are platform-specific (`*-win32.png` etc.) — regenerate with `npm run test:e2e:visual:update` on the same OS as CI if they start failing without an intended visual change. `maxDiffPixelRatio: 0.02` absorbs text antialiasing noise; a real regression (colour, layout, missing element) differs by far more than that.
