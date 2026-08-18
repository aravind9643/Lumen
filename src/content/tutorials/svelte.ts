import type { Tutorial } from '../types'

export const svelteCourse: Tutorial = {
  "slug": "svelte",
  "title": "Svelte 5 & SvelteKit: Compiler Reactivity",
  "shortTitle": "Svelte",
  "description": "A complete, beginner-to-mastery path covering Svelte compiler architecture, Svelte 5 Runes ($state, $derived, $effect), component props, two-way bindings, transitions, SvelteKit routing, and form actions.",
  "category": "Web Development",
  "difficulty": "intermediate",
  "icon": "code",
  "tags": [
    "Svelte",
    "Svelte 5",
    "Runes",
    "SvelteKit",
    "Reactivity",
    "Compiler"
  ],
  "color": "#ff3e00",
  "updated": "2026-08-18",
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
      "title": "Chapter 1: Svelte 5 Runes & Component Architecture (Beginner)",
      "lessons": [
        {
          "slug": "what-is-svelte-and-compiler-philosophy",
          "title": "What is Svelte & The Compiler Philosophy?",
          "description": "Learn why Svelte is a compiler rather than a runtime library, why it eliminates the Virtual DOM, and how Svelte components are structured.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "Level: Beginner | Prerequisites: HTML & JavaScript Basics"
            },
            {
              "type": "paragraph",
              "text": "Traditional frameworks (like React and Vue) ship a virtual DOM library to the browser to calculate diffs at runtime. Svelte takes a radical approach: it is a compiler that transforms your components into surgical, lightweight vanilla JavaScript DOM manipulations at build time."
            },
            {
              "type": "definition",
              "term": "Svelte Compiler",
              "plain": "A build tool that compiles declarative .svelte files into tiny, highly-optimized vanilla JavaScript DOM operations with zero Virtual DOM overhead.",
              "formal": "Ahead-of-Time Component Compilation Engine"
            },
            {
              "type": "analogy",
              "title": "The Blueprint vs Factory Metaphor",
              "text": "Traditional frameworks are like shipping an entire car manufacturing robot into the user's garage to assemble the car upon arrival. Svelte is manufacturing the completed, streamlined sports car in the factory ahead of time and driving it straight to the user."
            },
            {
              "type": "code",
              "language": "html",
              "code": "<script lang=\"ts\">\n  // Component Logic\n  let title = 'Welcome to Svelte 5';\n</script>\n\n<!-- Markup -->\n<div class=\"hero\">\n  <h1>{title}</h1>\n  <p>True compiler-driven reactivity with zero Virtual DOM overhead.</p>\n</div>\n\n<style>\n  /* Scoped CSS */\n  .hero { padding: 2rem; background: #fff7ed; border-radius: 12px; }\n</style>",
              "filename": "Hero.svelte"
            },
            {
              "type": "keyPoints",
              "points": [
                "Svelte runs at compile time, not in the browser runtime.",
                "Zero Virtual DOM means faster updates and tiny bundle sizes.",
                "Styles written inside <style> are automatically scoped to that component."
              ]
            },
            {
              "type": "quiz",
              "question": "How does Svelte achieve ultra-fast runtime performance compared to traditional Virtual DOM frameworks?",
              "options": [
                "It shifts reactivity work to compile time, generating direct, surgical vanilla DOM manipulation instructions.",
                "It executes all JavaScript inside GPU shader processors.",
                "It compiles components into WebGL canvas bitmaps.",
                "It completely disables all CSS animations."
              ],
              "answer": 0,
              "explanation": "Svelte compiles components into direct DOM operations ahead of time, eliminating Virtual DOM reconciliation overhead."
            }
          ]
        },
        {
          "slug": "svelte-5-runes-state-and-derived",
          "title": "Svelte 5 Runes: Reactive State ($state & $derived)",
          "description": "Master Svelte 5 universal Runes: $state() for reactive variables and objects, and $derived() for automatic computed state.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Svelte 5 introduces universal Runes — special symbols starting with `$` that instruct the Svelte compiler how to track reactivity in both `.svelte` components and plain `.svelte.js` TypeScript modules."
            },
            {
              "type": "definition",
              "term": "Svelte 5 Runes ($state, $derived)",
              "plain": "Explicit compiler symbols that declare fine-grained reactive state ($state) and auto-cached derived values ($derived).",
              "formal": "Universal Fine-Grained Reactive Primitives"
            },
            {
              "type": "code",
              "language": "html",
              "code": "<script lang=\"ts\">\n  // 1. Declare fine-grained reactive state\n  let count = $state(0);\n\n  // 2. Declare derived reactive state (auto-updates when count changes)\n  let doubled = $derived(count * 2);\n\n  function increment() {\n    count += 1;\n  }\n</script>\n\n<button onclick={increment}>\n  Count: {count} (Doubled: {doubled})\n</button>",
              "filename": "Counter.svelte"
            },
            {
              "type": "keyPoints",
              "points": [
                "$state(val) creates fine-grained reactive state for primitives and objects.",
                "$derived(expr) automatically recomputes when any referenced reactive values change.",
                "Runes work identically inside components and external .svelte.ts files."
              ]
            },
            {
              "type": "exercise",
              "prompt": "Create a Svelte 5 component using $state() for a reactive score and $derived() to compute a bonusScore.",
              "hint": "Use let score = $state(100) and let bonusScore = $derived(score * 1.5).",
              "solution": "<script lang=\"ts\">\n  let score = $state(100);\n  let bonusScore = $derived(score * 1.5);\n</script>\n\n<button onclick={() => score += 10}>\n  Score: {score} (Bonus: {bonusScore})\n</button>",
              "language": "html"
            },
            {
              "type": "quiz",
              "question": "Which Svelte 5 Rune is used to declare a derived, computed reactive value that updates automatically?",
              "options": [
                "$state()",
                "$derived()",
                "$computed()",
                "$effect()"
              ],
              "answer": 1,
              "explanation": "$derived() creates an auto-memoized reactive expression that recomputes whenever its dependencies change."
            }
          ]
        },
        {
          "slug": "effects-and-props-in-svelte-5",
          "title": "Side Effects ($effect) & Component Props ($props)",
          "description": "Manage side effects with the $effect() Rune, synchronize with external systems, and declare typed component props with $props().",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "In Svelte 5, component inputs are declared using the `$props()` Rune with TypeScript typing, and side effects (like updating `document.title` or timers) are managed with `$effect()`."
            },
            {
              "type": "code",
              "language": "html",
              "code": "<script lang=\"ts\">\n  // 1. Declare typed component props\n  interface Props {\n    courseTitle: string;\n    durationHours?: number;\n  }\n  let { courseTitle, durationHours = 5 }: Props = $props();\n\n  // 2. Synchronize side effects with state\n  $effect(() => {\n    console.log('Synchronized page title to:', courseTitle);\n    document.title = `${courseTitle} | Lumen`;\n  });\n</script>\n\n<h2>Course: {courseTitle} ({durationHours} hours)</h2>",
              "filename": "CourseHeader.svelte"
            },
            {
              "type": "keyPoints",
              "points": [
                "$props() destructures incoming props with strict TypeScript support.",
                "$effect() runs after the component renders and automatically re-executes when read state changes.",
                "Cleanup functions returned inside $effect() prevent memory leaks."
              ]
            },
            {
              "type": "quiz",
              "question": "When does the Svelte 5 $effect() callback execute?",
              "options": [
                "Only once when the browser initially loads the HTML page.",
                "Inside the SQL server query thread.",
                "After the DOM has rendered and updated, re-running whenever any reactive values read inside its body change.",
                "Before the TypeScript compiler compiles the file."
              ],
              "answer": 2,
              "explanation": "$effect() runs after DOM updates and tracks all read dependencies automatically."
            }
          ]
        },
        {
          "slug": "conditionals-loops-and-bindings",
          "title": "Conditionals ({#if}), Loops ({#each}) & Two-Way Binding (bind:)",
          "description": "Control templates with {#if} blocks, iterate over arrays with {#each}, handle events with onclick, and bind inputs with bind:value.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Svelte uses readable template blocks enclosed in curly braces for logic: `{#if}` for conditions, `{#each}` for lists, and `bind:value` for two-way input synchronization."
            },
            {
              "type": "code",
              "language": "html",
              "code": "<script lang=\"ts\">\n  let searchQuery = $state('');\n  let topics = $state(['HTML5', 'CSS3', 'JavaScript', 'Svelte 5']);\n\n  let filtered = $derived(\n    topics.filter(t => t.toLowerCase().includes(searchQuery.toLowerCase()))\n  );\n</script>\n\n<!-- Two-way binding on input -->\n<input bind:value={searchQuery} placeholder=\"Search topics...\" />\n\n<!-- Conditional block -->\n{#if filtered.length === 0}\n  <p>No matching topics found.</p>\n{:else}\n  <ul>\n    <!-- Loop block with unique key -->\n    {#each filtered as topic (topic)}\n      <li>{topic}</li>\n    {/each}\n  </ul>\n{/if}",
              "filename": "TopicSearch.svelte"
            },
            {
              "type": "keyPoints",
              "points": [
                "Use {#if condition} ... {:else} ... {/if} for conditional logic.",
                "Use {#each items as item (item.id)} with unique keys in parentheses for list rendering.",
                "Use bind:value={variable} for instant two-way form input synchronization."
              ]
            },
            {
              "type": "quiz",
              "question": "What syntax is used in Svelte to create two-way data binding on a text input element?",
              "options": [
                "v-model=\"myVariable\"",
                "[(ngModel)]=\"myVariable\"",
                "value={myVariable}",
                "bind:value={myVariable}"
              ],
              "answer": 3,
              "explanation": "bind:value creates a two-way synchronization between the input DOM value and the reactive variable."
            }
          ]
        }
      ]
    },
    {
      "title": "Chapter 2: Transitions, SvelteKit & Full-Stack Architecture (Mastery)",
      "lessons": [
        {
          "slug": "native-css-transitions-and-animations",
          "title": "Built-in Transitions & Animation Directives",
          "description": "Smoothly animate elements entering and leaving the DOM with built-in transition directives: fade, slide, fly, and scale.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Unlike other frameworks that require heavy animation libraries, Svelte has first-class native transitions built into the compiler. Elements animate smoothly when mounted or unmounted."
            },
            {
              "type": "code",
              "language": "html",
              "code": "<script lang=\"ts\">\n  import { fade, slide } from 'svelte/transition';\n  let isVisible = $state(true);\n</script>\n\n<button onclick={() => isVisible = !isVisible}>Toggle Panel</button>\n\n{#if isVisible}\n  <!-- Smooth 300ms slide and fade animation -->\n  <div transition:slide={{ duration: 300 }} class=\"panel\">\n    <p transition:fade>This alert animates smoothly into and out of view!</p>\n  </div>\n{/if}",
              "filename": "TransitionDemo.svelte"
            },
            {
              "type": "keyPoints",
              "points": [
                "transition: applies during both mounting and unmounting.",
                "Svelte coordinates the exit animation before removing the DOM node.",
                "in: and out: allow asymmetric enter/leave animations."
              ]
            },
            {
              "type": "quiz",
              "question": "What is the major advantage of Svelte native transition directives when removing elements from the DOM?",
              "options": [
                "Svelte coordinates the exit animation and only removes the DOM element after the transition finishes.",
                "It converts HTML elements into canvas graphics.",
                "It forces the page to reload.",
                "It prevents users from closing the browser."
              ],
              "answer": 0,
              "explanation": "Svelte pauses DOM node destruction until the outgoing animation finishes, eliminating abrupt UI jumps."
            }
          ]
        },
        {
          "slug": "sveltekit-routing-and-pages",
          "title": "SvelteKit Routing: +page.svelte & +layout.svelte",
          "description": "Master full-stack SvelteKit directory routing, +page.svelte, persistent nested +layout.svelte, and client-side navigation.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "SvelteKit is the official full-stack framework for Svelte. It maps directories inside `src/routes/` to web pages using standard file conventions like `+page.svelte` and `+layout.svelte`."
            },
            {
              "type": "code",
              "language": "html",
              "code": "<!-- src/routes/+layout.svelte: Global Application Shell -->\n<script lang=\"ts\">\n  let { children } = $props();\n</script>\n\n<nav>\n  <a href=\"/\">Home</a>\n  <a href=\"/courses\">Courses</a>\n</nav>\n\n<main>\n  {@render children()}\n</main>",
              "filename": "+layout.svelte"
            },
            {
              "type": "keyPoints",
              "points": [
                "+page.svelte renders the UI for that specific URL route.",
                "+layout.svelte persists state and wraps all child pages.",
                "{@render children()} renders child route content inside layouts."
              ]
            },
            {
              "type": "quiz",
              "question": "In SvelteKit, which file defines the UI for a specific URL route segment?",
              "options": [
                "page.tsx",
                "+page.svelte",
                "index.html",
                "+view.svelte"
              ],
              "answer": 1,
              "explanation": "+page.svelte is the standard SvelteKit convention for defining a route page component."
            }
          ]
        },
        {
          "slug": "sveltekit-server-load-functions",
          "title": "SvelteKit Server Load Functions (+page.server.ts)",
          "description": "Fetch data securely on the server with +page.server.ts load functions, query databases, and pass typed data to +page.svelte.",
          "duration": 30,
          "blocks": [
            {
              "type": "paragraph",
              "text": "In SvelteKit, server data fetching happens in `+page.server.ts`. These load functions execute exclusively on the server, keeping database queries, private keys, and backend logic completely secure."
            },
            {
              "type": "code",
              "language": "typescript",
              "code": "// src/routes/courses/+page.server.ts\nimport type { PageServerLoad } from './$types';\n\nexport const load: PageServerLoad = async () => {\n  // Direct database query on server (secrets never leak to browser)\n  return {\n    courses: [\n      { id: '1', title: 'Svelte 5 Compiler Mastery' },\n      { id: '2', title: 'TypeScript Deep Dive' }\n    ]\n  };\n};",
              "filename": "+page.server.ts"
            },
            {
              "type": "keyPoints",
              "points": [
                "+page.server.ts runs only on the server environment.",
                "Data returned from load() is available in +page.svelte via the data prop.",
                "Type safety is automatically generated via ./$types."
              ]
            },
            {
              "type": "quiz",
              "question": "Where does a SvelteKit +page.server.ts load function execute?",
              "options": [
                "Inside client browser local storage.",
                "In the browser Service Worker.",
                "Exclusively on the server, keeping private keys and database calls completely safe from client bundles.",
                "Only on mobile devices."
              ],
              "answer": 2,
              "explanation": "+page.server.ts runs exclusively on the server, ensuring database credentials and backend logic never reach client devices."
            }
          ]
        },
        {
          "slug": "sveltekit-form-actions-and-enhancement",
          "title": "SvelteKit Form Actions & Progressive Enhancement",
          "description": "Mutate data with SvelteKit Form Actions, handle validation errors, and use the use:enhance directive for smooth SPA transitions.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "SvelteKit Form Actions provide a full-stack data mutation standard. Forms work with standard HTML submissions even when JavaScript is disabled, and the `use:enhance` action enhances submissions with client-side fetch."
            },
            {
              "type": "code",
              "language": "html",
              "code": "<!-- src/routes/login/+page.svelte -->\n<script lang=\"ts\">\n  import { enhance } from '$app/forms';\n  let { form } = $props();\n</script>\n\n<form method=\"POST\" action=\"?/login\" use:enhance>\n  <label>Email</label>\n  <input name=\"email\" type=\"email\" required />\n  <button type=\"submit\">Sign In</button>\n  \n  {#if form?.error}\n    <p class=\"error\">{form.error}</p>\n  {/if}\n</form>",
              "filename": "+page.svelte"
            },
            {
              "type": "keyPoints",
              "points": [
                "Form actions live in +page.server.ts under export const actions.",
                "use:enhance intercepts form posts with fetch for smooth SPA transitions.",
                "Forms work out of the box without client JavaScript (Progressive Enhancement)."
              ]
            },
            {
              "type": "quiz",
              "question": "What is the purpose of the use:enhance action on a SvelteKit form?",
              "options": [
                "It encrypts form passwords with RSA.",
                "It converts HTML forms to WebSockets.",
                "It bypasses all server validation.",
                "It progressively enhances form submissions with client-side fetch, updating the UI smoothly without full page reloads."
              ],
              "answer": 3,
              "explanation": "use:enhance intercepts standard form submissions for seamless client-side updates while preserving standard HTML fallbacks."
            }
          ]
        }
      ]
    }
  ]
}
