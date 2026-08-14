# Working in this repo

A React tutorial site for **any subject** — not an AI site. Content is data; one renderer draws it. Read this before editing.

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

Set a new `category` on the course. The subject filter, grouped sections, sitemap, and card labels all derive from it — no UI change needed. `src/content/tutorials/web-fundamentals.ts` is a worked reference for a non-AI course.

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

## Known gaps

Do not report these as discoveries; they are known and deliberate.

- **No prerendering.** Client-rendered SPA, so crawlers see an empty root div. All content is static and build-time-known, so `vite-plugin-ssg` would fix it. Largest open item.
- **No test suite.** Verification has been done with throwaway Playwright scripts. Making them permanent is worth doing.
- **Heading hierarchy.** `keyPoints`, `steps`, and `comparison` hardcode `<h4>` regardless of context, which can skip levels. Needs a content-model decision, not a patch.
- **Markup duplication.** The rounded-card shell is repeated across pages; a shared `<Card>` primitive would help.
