import type { Tutorial } from '../types'

export const svelteCourse: Tutorial = {
  "slug": "svelte",
  "title": "Svelte & SvelteKit: Compiler-Driven Web Architecture",
  "shortTitle": "Svelte",
  "description": "Master Svelte and SvelteKit: Compiler philosophy, Runes reactivity ($state, $derived), Stores, component slots, and full-stack SvelteKit SSR.",
  "category": "Web Development",
  "difficulty": "intermediate",
  "icon": "code",
  "tags": [
    "Svelte",
    "SvelteKit",
    "Runes",
    "Reactivity",
    "Compiler",
    "SSR"
  ],
  "color": "#ff3e00",
  "updated": "2026-08-17",
  "prerequisites": [
    "Zero prior experience required — built from first principles."
  ],
  "outcomes": [
    "Master modern Svelte syntax, core mental models, and architectural patterns",
    "Build clean, performant, and production-grade Svelte applications",
    "Understand trade-offs, testing strategies, and industry best practices"
  ],
  "chapters": [
    {
      "title": "Phase 1: Svelte Reactivity & Component Architecture",
      "lessons": [
        {
          "slug": "compiler-philosophy-and-runes",
          "title": "Compiler Philosophy & Svelte Runes Reactivity",
          "description": "Master Compiler Philosophy & Svelte Runes Reactivity with practical examples, architectural deep dives, and key concepts.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Svelte is a compiler that converts declarative components into surgical, imperative DOM-manipulating JavaScript without a Virtual DOM."
            },
            {
              "type": "code",
              "language": "html",
              "code": "<script lang=\"ts\">\nlet count = $state(0);\nlet double = $derived(count * 2);\n\nfunction increment() {\n  count += 1;\n}\n</script>\n\n<button on:click={increment}>\n  Count: {count} (Double: {double})\n</button>",
              "filename": "Counter.svelte"
            },
            {
              "type": "keyPoints",
              "points": [
                "Svelte compiles components at build time, eliminating Virtual DOM runtime overhead.",
                "Runes ($state, $derived, $effect) provide explicit, universal reactivity.",
                "Bindings (bind:value) create seamless two-way form input synchronization."
              ]
            },
            {
              "type": "quiz",
              "question": "How does Svelte achieve high runtime UI performance compared to traditional frameworks?",
              "options": [
                "It shifts reactivity into a compile-time step that generates minimal surgical DOM updates without a Virtual DOM.",
                "It runs exclusively on server-side WebAssembly clusters.",
                "It replaces JavaScript with raw C binary extensions.",
                "It renders the entire web page as a static canvas image."
              ],
              "answer": 0,
              "explanation": "Svelte compiles reactivity into direct DOM operations at build time."
            }
          ]
        },
        {
          "slug": "sveltekit-full-stack-architecture",
          "title": "SvelteKit: File-Based Routing, SSR & Form Actions",
          "description": "Master SvelteKit: File-Based Routing, SSR & Form Actions with practical examples, architectural deep dives, and key concepts.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "SvelteKit is the application framework for Svelte offering file-based routing, server-side rendering (SSR), and form actions."
            },
            {
              "type": "code",
              "language": "typescript",
              "code": "// src/routes/users/+page.server.ts\nimport type { PageServerLoad } from './$types';\nimport { db } from '$lib/server/db';\n\nexport const load: PageServerLoad = async () => {\n  const users = await db.user.findMany();\n  return { users };\n};",
              "filename": "+page.server.ts"
            },
            {
              "type": "keyPoints",
              "points": [
                "+page.svelte defines the UI, while +page.server.ts loads data on the server.",
                "Form actions in +page.server.ts handle mutations with progressive enhancement.",
                "Adapters deploy SvelteKit applications to Node, Vercel, Cloudflare, or static hosts."
              ]
            },
            {
              "type": "quiz",
              "question": "In a SvelteKit route folder, what is the role of the +page.server.ts file?",
              "options": [
                "It compiles CSS stylesheets into SCSS files.",
                "It defines server-side load functions and form actions that execute exclusively on the server.",
                "It handles client-side service worker caching.",
                "It configures Vite bundling plugins."
              ],
              "answer": 1,
              "explanation": "+page.server.ts runs server-only data loading and form actions."
            }
          ]
        }
      ]
    }
  ]
}
