# Lumen — AI Tutorial Platform

A production-ready React tutorial site. Content lives as typed data; one renderer draws it everywhere.

```bash
npm install
npm run dev      # http://localhost:5173
npm run verify   # manifest + import boundary + typecheck + lint
npm run build    # runs verify, then -> dist/
```

> **Contributing with an AI agent?** [CLAUDE.md](./CLAUDE.md) holds the full working rules — architecture invariants, content style, design constraints, and known gaps. [AGENTS.md](./AGENTS.md) points other tools at it.

### Build-time guards

Five invariants are machine-checked, because each fails silently otherwise:

| Check | Catches | Why it matters |
|---|---|---|
| `check:imports` | An eagerly-loaded module importing the full content registry | Nothing breaks — the site just quietly ships 213kB of lesson prose on the landing page |
| `check:manifest` | `content/manifest.ts` drifting from the real content | Wrong lesson counts and durations across the shell |
| `check:quiz` | Correct answers clustered at one position; out-of-range indices | A reader can score 100% by pattern-matching instead of learning |
| `check:bundle` | Eager JS over 200kB gzipped, or lesson prose in the entry chunk | Guards the content-splitting win from silently regressing |
| `typecheck` | A `Block` variant with no `BlockRenderer` case | The block renders as nothing |

CI (`.github/workflows/ci.yml`) runs all of them on push and pull request.

Note that `typecheck` is `tsc -b --force`, not `tsc --noEmit` — the root tsconfig is a solution file, so a bare `tsc --noEmit` resolves no files and passes vacuously.

## Architecture

The central idea is that **tutorial content is data, not markup**. A lesson is a `Block[]` — a discriminated union of 15 content kinds — and `<BlockRenderer />` is the single component that renders any of them. Pages never branch on content shape.

```
src/
├── content/
│   ├── types.ts              # Block union, Lesson, Chapter, Tutorial
│   ├── manifest.ts           # course metadata only — NO lesson bodies
│   ├── index.ts              # registry, resolution, search, text projection
│   └── tutorials/            # one file per course
├── components/
│   ├── content/              # BlockRenderer, CodeBlock, Quiz
│   ├── layout/               # Header, Footer
│   ├── ui/                   # TutorialCard, SearchDialog, VoicePlayer, ThemeControls
│   └── ads/AdSlot.tsx
├── lib/                      # theme, progress, tts, analytics, seo, storage
├── pages/
└── config.ts                 # all third-party integration, env-driven
```

### Adding a lesson

Append to the relevant file in `src/content/tutorials/`:

```ts
{
  slug: 'my-lesson',
  title: 'My Lesson',
  description: 'One sentence.',
  duration: 10,
  blocks: [
    { type: 'paragraph', text: 'Body text with `code` and **bold**.' },
    { type: 'code', language: 'python', filename: 'x.py', code: '...', highlight: [3] },
    { type: 'quiz', question: '...', options: ['a','b'], answer: 1, explanation: '...' },
  ],
}
```

Routing, search indexing, table of contents, progress tracking, and voice reading all pick it up with no further work.

### The manifest — read this before adding a lesson

`content/manifest.ts` duplicates course metadata (slugs, titles, durations) **without** the lesson bodies. This is deliberate: the header, footer, landing page, and progress tracker all need to know what lessons exist, and importing the full registry for that pulled ~213kB of prose into the initial bundle.

**When you add or rename a lesson, update `manifest.ts` too.** `npm run check:manifest` runs on every build, parses both sides with the TypeScript compiler, and fails with a diff if they disagree — so drift is caught, not shipped.

The rule that keeps this working: **never import from `content/tutorials/` in a module that loads eagerly.** Anything reachable from `App.tsx` without a `lazy()` boundary drags the whole content graph back into the entry chunk. Use `content/manifest` there; use `content/index` only inside lazy routes.

### Adding an icon

Icons live in one registry so content never imports from the UI layer:

```ts
// src/lib/icons.ts
import { faRocket } from '@fortawesome/free-solid-svg-icons'
export const ICONS = { ..., rocket: faRocket }
```

Then use `<Icon name="rocket" size={16} />` anywhere, or set `icon: 'rocket'` on a tutorial. `IconName` is derived from the registry, so a typo fails the build.

> Watch icon legibility at small sizes. `faSun` renders as a gear below ~20px because its rays cannot resolve — that is why the header theme toggle uses `faCircleHalfStroke`.

### Adding a new content kind

1. Add a variant to the `Block` union in `content/types.ts`
2. Add a `case` in `BlockRenderer`

TypeScript's exhaustiveness guard fails the build until step 2 is done. If the block carries readable prose, also add it to `blocksToText()` so it is searchable and narratable.

## Available blocks

**Structure & prose** — `heading` · `paragraph` · `list` · `quote` · `divider` · `table` · `image` · `video`

**Emphasis** — `callout` (info/tip/warning/danger/success) · `keyPoints` · `steps` · `comparison` · `code`

**Teaching** — these exist specifically to support beginners:

| Block | Purpose |
|---|---|
| `definition` | Defines jargon on first use, so no term is ever left unexplained |
| `analogy` | An everyday comparison, placed *before* the technical mechanism |
| `exercise` | A task with a hint and a solution the reader reveals when ready |
| `recap` | Opens a lesson by restating what the previous one established |

## Features

| Feature | Notes |
|---|---|
| **Theming** | Light/dark/system, 5 accent hues, adjustable reading size. Applied pre-paint via an inline script, so no flash on reload. |
| **Flat design** | No gradients anywhere — solid accent fills and per-course flat colours only. The one `linear-gradient` left is the hero grid, where it draws repeating rules rather than a colour blend. |
| **Icons** | Font Awesome SVG throughout, no emoji. Content references icons by name via `lib/icons.ts`, so content files stay pure data. |
| **Voice reading** | Web Speech API, one utterance per sentence so highlighting tracks the text and Chrome's length limit is never hit. Voice/rate/pitch persist. |
| **Progress** | Completion, bookmarks, streaks, resume-where-you-left-off. localStorage only, synced across tabs. |
| **Search** | ⌘K dialog, full-text over all lesson prose, weighted ranking with excerpts. |
| **Analytics** | GA4, lazily loaded and fully disabled when no measurement ID is set. |
| **Ads** | AdSense with reserved height (no layout shift) and dev placeholders. |
| **SEO** | Per-route meta, Open Graph, canonical URLs. JSON-LD on every page type (`EducationalOrganization`, `Course`, `LearningResource` + `BreadcrumbList`). `sitemap.xml` and `robots.txt` generated at build time from the content registry. |
| **A11y** | Skip link, focus rings, `prefers-reduced-motion`. Search is a proper combobox/listbox with `aria-activedescendant`; dialogs restore focus and close on Escape; quiz results and search counts are live regions; accent colours meet WCAG AA. |
| **Resilience** | Error boundaries at app and route level. Lazy-chunk failures after a redeploy show a "needs refreshing" prompt instead of a blank page. |

## Configuration

Copy `.env.example` to `.env`. **Every value is optional** — with none set the site is fully functional and makes zero third-party requests.

```
VITE_SITE_URL=https://your-domain.com
VITE_OG_IMAGE=/og.png
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX
VITE_ADSENSE_SLOT_IN_ARTICLE=1234567890
VITE_ADSENSE_SLOT_SIDEBAR=1234567891
VITE_ADSENSE_SLOT_FOOTER=1234567892
```

Both a client ID *and* the relevant slot ID are required for an ad unit to render; otherwise that slot stays hidden.

## Deployment

Static SPA — `dist/` works on any host. `public/_redirects` (Netlify) and `vercel.json` are included so deep links don't 404. For other hosts, rewrite all paths to `/index.html`.

## Content included

Three AI courses, **20 lessons**, written zero-to-hero: no coding or maths background is assumed, and every technical term is defined the first time it appears.

**AI Fundamentals** (8 lessons) — assumes literally nothing
1. What AI actually is · 2. Data, features and labels
3. Your first model, drawn by hand · 4. Gradient descent
5. Overfitting and honest evaluation
6. What a neural network really is
7. Measuring success properly · 8. Putting it all together

**Prompt Engineering** (6 lessons) — no coding required
1. What a prompt is and why yours isn't working
2. The five parts of a reliable prompt · 3. Teaching by example
4. Getting the AI to think first · 5. When AI makes things up
6. Testing prompts properly · plus a reusable playbook

**LLM Engineering** (6 lessons) — assumes AI Fundamentals
1. What a language model does · 2. Tokens and embeddings
3. Attention and the cost of context
4. Building a RAG system · 5. Running it in production

Each lesson opens with a recap, defines its jargon, gives an analogy before the mechanism, and ends with an exercise and a quiz that explains its answer.
