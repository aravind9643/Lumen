import { writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const tutorialsDir = join(root, 'src/content/tutorials')

let quizAnswerCounter = 0
function getBalancedAnswer() {
  const ans = quizAnswerCounter % 4
  quizAnswerCounter++
  return ans
}

function makeQuiz(qText, optCorrect, optWrong1, optWrong2, optWrong3, explanation) {
  const ans = getBalancedAnswer()
  const options = []
  const wrongs = [optWrong1, optWrong2, optWrong3]
  let wrongIdx = 0
  for (let i = 0; i < 4; i++) {
    if (i === ans) {
      options.push(optCorrect)
    } else {
      options.push(wrongs[wrongIdx++])
    }
  }
  return {
    type: 'quiz',
    question: qText,
    options,
    answer: ans,
    explanation,
  }
}

// -------------------------------------------------------------
// Course 8: Vue 3 (8 Lessons)
// -------------------------------------------------------------
const vueCourse = {
  slug: 'vue',
  varName: 'vueCourse',
  title: 'Vue 3 & Composition API: Architecture & State',
  shortTitle: 'Vue 3',
  description: 'A complete, beginner-to-mastery path covering Vue 3 Single-File Components (.vue), <script setup>, Composition API, ref & reactive, computed properties, watchers, Pinia state stores, and Vue Router.',
  category: 'Web Development',
  difficulty: 'beginner',
  icon: 'code',
  color: '#42b883',
  tags: ['Vue 3', 'Composition API', 'Pinia', 'Reactivity', 'Vite', 'Frontend'],
  chapters: [
    {
      title: 'Chapter 1: Composition API & Reactivity Foundations (Beginner)',
      lessons: [
        {
          slug: 'what-is-vue-and-single-file-components',
          title: 'What is Vue.js & Single-File Components (.vue)?',
          description: 'Learn why Vue is famous for its progressive learning curve, and master the Single-File Component structure (<script setup>, <template>, <style scoped>).',
          duration: 20,
          blocks: [
            { type: 'callout', kind: 'info', text: 'Level: Beginner | Prerequisites: HTML & JavaScript Basics' },
            { type: 'paragraph', text: 'Vue.js is an approachable, performant, and versatile progressive framework for building user interfaces. It combines the declarative template syntax of HTML with a fine-grained Proxy-based reactivity system.' },
            { type: 'definition', term: 'Single-File Component (SFC / .vue)', plain: 'A file format that encapsulates a component logic (<script>), structure (<template>), and styling (<style>) in a single cohesive file.', formal: 'Vue Single-File Component Specification' },
            { type: 'code', language: 'html', code: `<script setup lang="ts">\n// Component Logic\nconst message = 'Welcome to Vue 3 Mastery!';\n</script>\n\n<template>\n  <!-- Visual HTML Structure -->\n  <div class="welcome-box">\n    <h1>{{ message }}</h1>\n    <p>Declarative, intuitive, and performant web engineering.</p>\n  </div>\n</template>\n\n<style scoped>\n/* Scoped CSS: Only applies to this specific component */\n.welcome-box {\n  padding: 24px;\n  border-radius: 12px;\n  background: #f0fdf4;\n}\n</style>`, filename: 'Welcome.vue' },
            { type: 'keyPoints', points: ['Vue SFCs group template, script, and style in one file.', '<script setup> is modern compile-time syntactic sugar that reduces boilerplate.', '<style scoped> guarantees CSS will not leak to other components.'] },
            makeQuiz('What are the three core sections of a Vue Single-File Component (.vue)?', '<script>, <template>, and <style>', '<head>, <body>, and <footer>', '<model>, <view>, and <controller>', '<input>, <action>, and <output>', 'A Vue SFC cleanly organizes component concerns into script (logic), template (markup), and style (presentation).')
          ]
        },
        {
          slug: 'template-syntax-and-directives',
          title: 'Template Syntax & Core Directives (v-bind, v-on, v-model)',
          description: 'Master dynamic templates: Text interpolation {{ }}, attribute binding (v-bind / :), event handling (v-on / @), and two-way form binding (v-model).',
          duration: 25,
          blocks: [
            { type: 'paragraph', text: 'Vue uses an HTML-based template syntax that lets you bind the rendered DOM to underlying component data. Special attributes starting with v- are called Directives.' },
            { type: 'code', language: 'html', code: `<script setup lang="ts">\nimport { ref } from 'vue';\n\nconst username = ref('Aravind');\nconst avatarUrl = ref('/avatars/user.png');\n\nfunction handleSave() {\n  console.log('Saved user:', username.value);\n}\n</script>\n\n<template>\n  <!-- v-bind shorthand (:) binds HTML attributes -->\n  <img :src="avatarUrl" :alt="username" width="64" height="64">\n\n  <!-- v-model creates two-way data binding on form inputs -->\n  <input v-model="username" type="text" placeholder="Enter name">\n\n  <!-- v-on shorthand (@) listens to DOM events -->\n  <button @click="handleSave">Save Changes</button>\n</template>`, filename: 'Directives.vue' },
            { type: 'keyPoints', points: ['v-bind shorthand is colon (:src="url").', 'v-on shorthand is at symbol (@click="handleClick").', 'v-model synchronizes form inputs with reactive state in two directions automatically.'] },
            makeQuiz('What is the shorthand syntax for the v-bind directive in Vue templates?', 'A single colon (:), such as :src="url"', 'An at sign (@)', 'Double curly braces {{ }}', 'A dollar sign ($)', 'The colon prefix :attr is the standard shorthand for v-bind:attr.')
          ]
        },
        {
          slug: 'reactivity-with-ref-and-reactive',
          title: 'Reactivity with ref() and reactive()',
          description: 'Understand Vue 3 Proxy-based reactivity, how ref() wraps primitives, accessing .value in script vs templates, and reactive() objects.',
          duration: 25,
          blocks: [
            { type: 'paragraph', text: 'Vue 3 tracks state changes using JavaScript ES6 Proxies. When you read a reactive property in your template, Vue tracks it as a dependency. When you mutate the property, Vue automatically updates the DOM.' },
            { type: 'definition', term: 'ref() vs reactive()', plain: 'ref() accepts any value (primitives like numbers/strings or objects) and requires .value in script. reactive() only accepts objects and does not use .value.', formal: 'Vue Reactivity Core API' },
            { type: 'code', language: 'html', code: `<script setup lang="ts">\nimport { ref } from 'vue';\n\n// 1. Declare reactive state with ref()\nconst count = ref(0);\n\nfunction increment() {\n  // In script: Access and mutate using .value\n  count.value++;\n}\n</script>\n\n<template>\n  <!-- In template: ref is automatically unwrapped (no .value needed!) -->\n  <button @click="increment">\n    Current Count: {{ count }}\n  </button>\n</template>`, filename: 'Counter.vue' },
            { type: 'keyPoints', points: ['ref() is the recommended default for all reactive state in Vue 3.', 'Always use .value in JavaScript/TypeScript; Vue automatically unwraps refs in templates.', 'Reactivity is fine-grained and tracks dependencies automatically.'] },
            makeQuiz('How do you update the value of a Vue ref() inside a <script setup> block?', 'By assigning to its .value property, e.g., count.value = 5;', 'By assigning directly to the variable: count = 5;', 'By calling count.set(5);', 'By calling this.$setState({ count: 5 });', 'In script code, ref objects hold their value inside the .value property.')
          ]
        },
        {
          slug: 'conditionals-and-list-rendering',
          title: 'Conditionals (v-if / v-show) & Lists (v-for)',
          description: 'Control element rendering with v-if, v-else-if, v-else, v-show, and loop over collections with v-for and unique :key bindings.',
          duration: 25,
          blocks: [
            { type: 'paragraph', text: 'Vue provides structural directives for conditional rendering (v-if adds/removes elements from DOM; v-show toggles CSS display:none) and list rendering (v-for).' },
            { type: 'code', language: 'html', code: `<script setup lang="ts">\nimport { ref } from 'vue';\n\nconst isPremium = ref(true);\nconst courses = ref([\n  { id: 'c1', title: 'HTML5 Foundations' },\n  { id: 'c2', title: 'Vue 3 Mastery' },\n]);\n</script>\n\n<template>\n  <!-- Conditional Rendering -->\n  <div v-if="isPremium" class="badge">⭐ Premium Member</div>\n  <div v-else class="badge">Free Tier</div>\n\n  <!-- List Rendering with mandatory :key -->\n  <ul>\n    <li v-for="course in courses" :key="course.id">\n      {{ course.title }}\n    </li>\n  </ul>\n</template>`, filename: 'ListDemo.vue' },
            { type: 'keyPoints', points: ['v-if physically mounts and unmounts elements from the DOM.', 'v-show toggles CSS display: none (ideal for frequently toggled UI like dropdowns).', 'Always provide a unique :key when using v-for for efficient DOM diffing.'] },
            makeQuiz('What is the key difference between v-if and v-show in Vue?', 'v-if creates/destroys DOM nodes, while v-show always keeps the element in the DOM and toggles CSS display: none.', 'v-show is for lists only.', 'v-if only works on mobile devices.', 'v-show runs on the server.', 'v-show has higher initial render cost but lower toggle cost because it simply toggles CSS visibility.')
          ]
        }
      ]
    },
    {
      title: 'Chapter 2: Computed Properties, Pinia & Full-Stack Vue (Mastery)',
      lessons: [
        {
          slug: 'computed-properties-and-watchers',
          title: 'Computed Properties & Watchers (computed, watch, watchEffect)',
          description: 'Cache derived values with computed(), listen to reactive mutations with watch(), and run automatic side-effects with watchEffect().',
          duration: 25,
          blocks: [
            { type: 'paragraph', text: 'Computed properties allow you to define derived values that are automatically cached based on their reactive dependencies. Watchers let you run side-effects (like saving to localStorage or fetching an API) when state changes.' },
            { type: 'code', language: 'html', code: `<script setup lang="ts">\nimport { ref, computed, watch } from 'vue';\n\nconst price = ref(100);\nconst discountPercent = ref(20);\n\n// 1. Computed Property: Cached automatically\nconst finalPrice = computed(() => price.value * (1 - discountPercent.value / 100));\n\n// 2. Watcher: React to changes\nwatch(finalPrice, (newPrice, oldPrice) => {\n  console.log(\`Price changed from \${oldPrice} to \${newPrice}\`);\n});\n</script>\n\n<template>\n  <p>Final Discounted Price: \${{ finalPrice }}</p>\n</template>`, filename: 'Pricing.vue' },
            { type: 'keyPoints', points: ['computed() returns a read-only ref that caches its value until dependencies change.', 'watch() evaluates lazily and gives access to both old and new values.', 'watchEffect() runs immediately and tracks all dependencies automatically.'] },
            makeQuiz('Why should expensive calculations be wrapped in computed() rather than plain methods in Vue templates?', 'computed properties cache their output and only re-evaluate when their specific reactive dependencies change.', 'computed calculations run inside WebGL.', 'methods cannot return string values.', 'computed disables CSS transitions.', 'Computed caching avoids running expensive computations on every single component re-render.')
          ]
        },
        {
          slug: 'component-props-and-custom-events',
          title: 'Component Props & Custom Events (defineProps & defineEmits)',
          description: 'Build composable component hierarchies using defineProps() for input data and defineEmits() for parent notifications.',
          duration: 25,
          blocks: [
            { type: 'paragraph', text: 'In Vue 3 <script setup>, components declare incoming props using the compiler macro defineProps() and emit custom events to parents using defineEmits().' },
            { type: 'code', language: 'html', code: `<!-- Child Component: CourseCard.vue -->\n<script setup lang="ts">\n// 1. Typed Props Declaration\nconst props = defineProps<{\n  title: string;\n  lessonsCount: number;\n}>();\n\n// 2. Custom Events Declaration\nconst emit = defineEmits<{\n  (e: 'select', title: string): void;\n}>();\n\nfunction handleClick() {\n  emit('select', props.title);\n}\n</script>\n\n<template>\n  <div class="card" @click="handleClick">\n    <h3>{{ title }}</h3>\n    <p>{{ lessonsCount }} Lessons</p>\n  </div>\n</template>`, filename: 'CourseCard.vue' },
            { type: 'keyPoints', points: ['defineProps and defineEmits are compile-time macros available in <script setup> without importing.', 'Props flow down (parent -> child); Emits flow up (child -> parent).', 'Always type props strictly using TypeScript generic syntax.'] },
            makeQuiz('Which compiler macro is used in Vue 3 <script setup> to emit custom events to a parent component?', 'defineEmits()', 'defineProps()', 'this.$emit()', 'dispatchEvent()', 'defineEmits() defines the custom events a component can emit to its parent in <script setup>.')
          ]
        },
        {
          slug: 'pinia-state-management-stores',
          title: 'Global State Management with Pinia Stores',
          description: 'Manage shared global state with Pinia: defineStore, state refs, computed getters, actions, and storeToRefs().',
          duration: 30,
          blocks: [
            { type: 'paragraph', text: 'Pinia is the official, type-safe global state management library for Vue 3. It replaces Vuex with a clean, modular API that integrates seamlessly with the Composition API.' },
            { type: 'code', language: 'typescript', code: `// stores/cart.ts: Modular Pinia Store using Setup Syntax\nimport { defineStore } from 'pinia';\nimport { ref, computed } from 'vue';\n\nexport const useCartStore = defineStore('cart', () => {\n  // State\n  const items = ref<string[]>([]);\n\n  // Getter (computed)\n  const itemCount = computed(() => items.value.length);\n\n  // Action (method)\n  function addItem(courseId: string) {\n    items.value.push(courseId);\n  }\n\n  return { items, itemCount, addItem };\n});`, filename: 'cart.store.ts' },
            { type: 'keyPoints', points: ['Pinia stores use standard ref() for state, computed() for getters, and functions for actions.', 'Stores are modular and can be imported anywhere across the application.', 'Use storeToRefs(store) when destructuring state to maintain reactivity.'] },
            makeQuiz('Which helper function must be used when destructuring reactive state properties from a Pinia store?', 'storeToRefs()', 'toRaw()', 'unref()', 'reactive()', 'storeToRefs() converts store properties into individual refs so destructuring does not break reactivity.')
          ]
        },
        {
          slug: 'vue-router-and-single-page-apps',
          title: 'Vue Router 4 & Client-Side Navigation',
          description: 'Configure client-side routing with createRouter, createWebHistory, route parameters, <RouterLink>, <RouterView>, and beforeEach navigation guards.',
          duration: 25,
          blocks: [
            { type: 'paragraph', text: 'Vue Router 4 enables Single Page Application navigation with clean URLs, dynamic route parameters (/courses/:slug), and navigation guards for authentication.' },
            { type: 'code', language: 'typescript', code: `import { createRouter, createWebHistory } from 'vue-router';\n\nexport const router = createRouter({\n  history: createWebHistory(),\n  routes: [\n    { path: '/', component: () => import('@/views/HomeView.vue') },\n    { path: '/courses/:slug', component: () => import('@/views/CourseDetailView.vue') },\n    { path: '/dashboard', component: () => import('@/views/DashboardView.vue'), meta: { requiresAuth: true } },\n  ],\n});\n\n// Global Navigation Guard\nrouter.beforeEach((to, from, next) => {\n  const isAuthenticated = Boolean(localStorage.getItem('token'));\n  if (to.meta.requiresAuth && !isAuthenticated) {\n    next('/login');\n  } else {\n    next();\n  }\n});`, filename: 'router.ts' },
            { type: 'keyPoints', points: ['createWebHistory() enables clean HTML5 pushState URLs without hash symbols (#).', '<RouterLink to="..."> provides instant client-side navigation.', 'beforeEach guards control access to protected routes.'] },
            makeQuiz('Which Vue Router component acts as the placeholder container where matching route components are rendered on screen?', '<RouterView />', '<RouterLink />', '<Outlet />', '<Template />', '<RouterView /> is the functional component that renders the matched component for the current URL path.')
          ]
        }
      ]
    }
  ]
}

// -------------------------------------------------------------
// Course 9: Svelte 5 (8 Lessons)
// -------------------------------------------------------------
const svelteCourse = {
  slug: 'svelte',
  varName: 'svelteCourse',
  title: 'Svelte 5 & SvelteKit: Compiler Reactivity',
  shortTitle: 'Svelte',
  description: 'A complete, beginner-to-mastery path covering Svelte compiler architecture, Svelte 5 Runes ($state, $derived, $effect), component props, two-way bindings, transitions, SvelteKit routing, and form actions.',
  category: 'Web Development',
  difficulty: 'intermediate',
  icon: 'code',
  color: '#ff3e00',
  tags: ['Svelte', 'Svelte 5', 'Runes', 'SvelteKit', 'Reactivity', 'Compiler'],
  chapters: [
    {
      title: 'Chapter 1: Svelte 5 Runes & Component Architecture (Beginner)',
      lessons: [
        {
          slug: 'what-is-svelte-and-compiler-philosophy',
          title: 'What is Svelte & The Compiler Philosophy?',
          description: 'Learn why Svelte is a compiler rather than a runtime library, why it eliminates the Virtual DOM, and how Svelte components are structured.',
          duration: 20,
          blocks: [
            { type: 'callout', kind: 'info', text: 'Level: Beginner | Prerequisites: HTML & JavaScript Basics' },
            { type: 'paragraph', text: 'Traditional frameworks (like React and Vue) ship a virtual DOM library to the browser to calculate diffs at runtime. Svelte takes a radical approach: it is a compiler that transforms your components into surgical, lightweight vanilla JavaScript DOM manipulations at build time.' },
            { type: 'definition', term: 'Svelte Compiler', plain: 'A build tool that compiles declarative .svelte files into tiny, highly-optimized vanilla JavaScript DOM operations with zero Virtual DOM overhead.', formal: 'Ahead-of-Time Component Compilation Engine' },
            { type: 'analogy', title: 'The Blueprint vs Factory Metaphor', text: 'Traditional frameworks are like shipping an entire car manufacturing robot into the user\'s garage to assemble the car upon arrival. Svelte is manufacturing the completed, streamlined sports car in the factory ahead of time and driving it straight to the user.' },
            { type: 'code', language: 'html', code: `<script lang="ts">\n  // Component Logic\n  let title = 'Welcome to Svelte 5';\n</script>\n\n<!-- Markup -->\n<div class="hero">\n  <h1>{title}</h1>\n  <p>True compiler-driven reactivity with zero Virtual DOM overhead.</p>\n</div>\n\n<style>\n  /* Scoped CSS */\n  .hero { padding: 2rem; background: #fff7ed; border-radius: 12px; }\n</style>`, filename: 'Hero.svelte' },
            { type: 'keyPoints', points: ['Svelte runs at compile time, not in the browser runtime.', 'Zero Virtual DOM means faster updates and tiny bundle sizes.', 'Styles written inside <style> are automatically scoped to that component.'] },
            makeQuiz('How does Svelte achieve ultra-fast runtime performance compared to traditional Virtual DOM frameworks?', 'It shifts reactivity work to compile time, generating direct, surgical vanilla DOM manipulation instructions.', 'It executes all JavaScript inside GPU shader processors.', 'It compiles components into WebGL canvas bitmaps.', 'It completely disables all CSS animations.', 'Svelte compiles components into direct DOM operations ahead of time, eliminating Virtual DOM reconciliation overhead.')
          ]
        },
        {
          slug: 'svelte-5-runes-state-and-derived',
          title: 'Svelte 5 Runes: Reactive State ($state & $derived)',
          description: 'Master Svelte 5 universal Runes: $state() for reactive variables and objects, and $derived() for automatic computed state.',
          duration: 25,
          blocks: [
            { type: 'paragraph', text: 'Svelte 5 introduces universal Runes — special symbols starting with `$` that instruct the Svelte compiler how to track reactivity in both `.svelte` components and plain `.svelte.js` TypeScript modules.' },
            { type: 'definition', term: 'Svelte 5 Runes ($state, $derived)', plain: 'Explicit compiler symbols that declare fine-grained reactive state ($state) and auto-cached derived values ($derived).', formal: 'Universal Fine-Grained Reactive Primitives' },
            { type: 'code', language: 'html', code: `<script lang="ts">\n  // 1. Declare fine-grained reactive state\n  let count = $state(0);\n\n  // 2. Declare derived reactive state (auto-updates when count changes)\n  let doubled = $derived(count * 2);\n\n  function increment() {\n    count += 1;\n  }\n</script>\n\n<button onclick={increment}>\n  Count: {count} (Doubled: {doubled})\n</button>`, filename: 'Counter.svelte' },
            { type: 'keyPoints', points: ['$state(val) creates fine-grained reactive state for primitives and objects.', '$derived(expr) automatically recomputes when any referenced reactive values change.', 'Runes work identically inside components and external .svelte.ts files.'] },
            makeQuiz('Which Svelte 5 Rune is used to declare a derived, computed reactive value that updates automatically?', '$derived()', '$state()', '$computed()', '$effect()', '$derived() creates an auto-memoized reactive expression that recomputes whenever its dependencies change.')
          ]
        },
        {
          slug: 'effects-and-props-in-svelte-5',
          title: 'Side Effects ($effect) & Component Props ($props)',
          description: 'Manage side effects with the $effect() Rune, synchronize with external systems, and declare typed component props with $props().',
          duration: 25,
          blocks: [
            { type: 'paragraph', text: 'In Svelte 5, component inputs are declared using the `$props()` Rune with TypeScript typing, and side effects (like updating `document.title` or timers) are managed with `$effect()`.' },
            { type: 'code', language: 'html', code: `<script lang="ts">\n  // 1. Declare typed component props\n  interface Props {\n    courseTitle: string;\n    durationHours?: number;\n  }\n  let { courseTitle, durationHours = 5 }: Props = $props();\n\n  // 2. Synchronize side effects with state\n  $effect(() => {\n    console.log('Synchronized page title to:', courseTitle);\n    document.title = \`\${courseTitle} | Lumen\`;\n  });\n</script>\n\n<h2>Course: {courseTitle} ({durationHours} hours)</h2>`, filename: 'CourseHeader.svelte' },
            { type: 'keyPoints', points: ['$props() destructures incoming props with strict TypeScript support.', '$effect() runs after the component renders and automatically re-executes when read state changes.', 'Cleanup functions returned inside $effect() prevent memory leaks.'] },
            makeQuiz('When does the Svelte 5 $effect() callback execute?', 'After the DOM has rendered and updated, re-running whenever any reactive values read inside its body change.', 'Only once when the browser initially loads the HTML page.', 'Inside the SQL server query thread.', 'Before the TypeScript compiler compiles the file.', '$effect() runs after DOM updates and tracks all read dependencies automatically.')
          ]
        },
        {
          slug: 'conditionals-loops-and-bindings',
          title: 'Conditionals ({#if}), Loops ({#each}) & Two-Way Binding (bind:)',
          description: 'Control templates with {#if} blocks, iterate over arrays with {#each}, handle events with onclick, and bind inputs with bind:value.',
          duration: 25,
          blocks: [
            { type: 'paragraph', text: 'Svelte uses readable template blocks enclosed in curly braces for logic: `{#if}` for conditions, `{#each}` for lists, and `bind:value` for two-way input synchronization.' },
            { type: 'code', language: 'html', code: `<script lang="ts">\n  let searchQuery = $state('');\n  let topics = $state(['HTML5', 'CSS3', 'JavaScript', 'Svelte 5']);\n\n  let filtered = $derived(\n    topics.filter(t => t.toLowerCase().includes(searchQuery.toLowerCase()))\n  );\n</script>\n\n<!-- Two-way binding on input -->\n<input bind:value={searchQuery} placeholder="Search topics..." />\n\n<!-- Conditional block -->\n{#if filtered.length === 0}\n  <p>No matching topics found.</p>\n{:else}\n  <ul>\n    <!-- Loop block with unique key -->\n    {#each filtered as topic (topic)}\n      <li>{topic}</li>\n    {/each}\n  </ul>\n{/if}`, filename: 'TopicSearch.svelte' },
            { type: 'keyPoints', points: ['Use {#if condition} ... {:else} ... {/if} for conditional logic.', 'Use {#each items as item (item.id)} with unique keys in parentheses for list rendering.', 'Use bind:value={variable} for instant two-way form input synchronization.'] },
            makeQuiz('What syntax is used in Svelte to create two-way data binding on a text input element?', 'bind:value={myVariable}', 'v-model="myVariable"', '[(ngModel)]="myVariable"', 'value={myVariable}', 'bind:value creates a two-way synchronization between the input DOM value and the reactive variable.')
          ]
        }
      ]
    },
    {
      title: 'Chapter 2: Transitions, SvelteKit & Full-Stack Architecture (Mastery)',
      lessons: [
        {
          slug: 'native-css-transitions-and-animations',
          title: 'Built-in Transitions & Animation Directives',
          description: 'Smoothly animate elements entering and leaving the DOM with built-in transition directives: fade, slide, fly, and scale.',
          duration: 25,
          blocks: [
            { type: 'paragraph', text: 'Unlike other frameworks that require heavy animation libraries, Svelte has first-class native transitions built into the compiler. Elements animate smoothly when mounted or unmounted.' },
            { type: 'code', language: 'html', code: `<script lang="ts">\n  import { fade, slide } from 'svelte/transition';\n  let isVisible = $state(true);\n</script>\n\n<button onclick={() => isVisible = !isVisible}>Toggle Panel</button>\n\n{#if isVisible}\n  <!-- Smooth 300ms slide and fade animation -->\n  <div transition:slide={{ duration: 300 }} class="panel">\n    <p transition:fade>This alert animates smoothly into and out of view!</p>\n  </div>\n{/if}`, filename: 'TransitionDemo.svelte' },
            { type: 'keyPoints', points: ['transition: applies during both mounting and unmounting.', 'Svelte coordinates the exit animation before removing the DOM node.', 'in: and out: allow asymmetric enter/leave animations.'] },
            makeQuiz('What is the major advantage of Svelte native transition directives when removing elements from the DOM?', 'Svelte coordinates the exit animation and only removes the DOM element after the transition finishes.', 'It converts HTML elements into canvas graphics.', 'It forces the page to reload.', 'It prevents users from closing the browser.', 'Svelte pauses DOM node destruction until the outgoing animation finishes, eliminating abrupt UI jumps.')
          ]
        },
        {
          slug: 'sveltekit-routing-and-pages',
          title: 'SvelteKit Routing: +page.svelte & +layout.svelte',
          description: 'Master full-stack SvelteKit directory routing, +page.svelte, persistent nested +layout.svelte, and client-side navigation.',
          duration: 25,
          blocks: [
            { type: 'paragraph', text: 'SvelteKit is the official full-stack framework for Svelte. It maps directories inside `src/routes/` to web pages using standard file conventions like `+page.svelte` and `+layout.svelte`.' },
            { type: 'code', language: 'html', code: `<!-- src/routes/+layout.svelte: Global Application Shell -->\n<script lang="ts">\n  let { children } = $props();\n</script>\n\n<nav>\n  <a href="/">Home</a>\n  <a href="/courses">Courses</a>\n</nav>\n\n<main>\n  {@render children()}\n</main>`, filename: '+layout.svelte' },
            { type: 'keyPoints', points: ['+page.svelte renders the UI for that specific URL route.', '+layout.svelte persists state and wraps all child pages.', '{@render children()} renders child route content inside layouts.'] },
            makeQuiz('In SvelteKit, which file defines the UI for a specific URL route segment?', '+page.svelte', 'page.tsx', 'index.html', '+view.svelte', '+page.svelte is the standard SvelteKit convention for defining a route page component.')
          ]
        },
        {
          slug: 'sveltekit-server-load-functions',
          title: 'SvelteKit Server Load Functions (+page.server.ts)',
          description: 'Fetch data securely on the server with +page.server.ts load functions, query databases, and pass typed data to +page.svelte.',
          duration: 30,
          blocks: [
            { type: 'paragraph', text: 'In SvelteKit, server data fetching happens in `+page.server.ts`. These load functions execute exclusively on the server, keeping database queries, private keys, and backend logic completely secure.' },
            { type: 'code', language: 'typescript', code: `// src/routes/courses/+page.server.ts\nimport type { PageServerLoad } from './$types';\n\nexport const load: PageServerLoad = async () => {\n  // Direct database query on server (secrets never leak to browser)\n  return {\n    courses: [\n      { id: '1', title: 'Svelte 5 Compiler Mastery' },\n      { id: '2', title: 'TypeScript Deep Dive' }\n    ]\n  };\n};`, filename: '+page.server.ts' },
            { type: 'keyPoints', points: ['+page.server.ts runs only on the server environment.', 'Data returned from load() is available in +page.svelte via the data prop.', 'Type safety is automatically generated via ./$types.'] },
            makeQuiz('Where does a SvelteKit +page.server.ts load function execute?', 'Exclusively on the server, keeping private keys and database calls completely safe from client bundles.', 'Inside client browser local storage.', 'In the browser Service Worker.', 'Only on mobile devices.', '+page.server.ts runs exclusively on the server, ensuring database credentials and backend logic never reach client devices.')
          ]
        },
        {
          slug: 'sveltekit-form-actions-and-enhancement',
          title: 'SvelteKit Form Actions & Progressive Enhancement',
          description: 'Mutate data with SvelteKit Form Actions, handle validation errors, and use the use:enhance directive for smooth SPA transitions.',
          duration: 25,
          blocks: [
            { type: 'paragraph', text: 'SvelteKit Form Actions provide a full-stack data mutation standard. Forms work with standard HTML submissions even when JavaScript is disabled, and the `use:enhance` action enhances submissions with client-side fetch.' },
            { type: 'code', language: 'html', code: `<!-- src/routes/login/+page.svelte -->\n<script lang="ts">\n  import { enhance } from '$app/forms';\n  let { form } = $props();\n</script>\n\n<form method="POST" action="?/login" use:enhance>\n  <label>Email</label>\n  <input name="email" type="email" required />\n  <button type="submit">Sign In</button>\n  \n  {#if form?.error}\n    <p class="error">{form.error}</p>\n  {/if}\n</form>`, filename: '+page.svelte' },
            { type: 'keyPoints', points: ['Form actions live in +page.server.ts under export const actions.', 'use:enhance intercepts form posts with fetch for smooth SPA transitions.', 'Forms work out of the box without client JavaScript (Progressive Enhancement).'] },
            makeQuiz('What is the purpose of the use:enhance action on a SvelteKit form?', 'It progressively enhances form submissions with client-side fetch, updating the UI smoothly without full page reloads.', 'It encrypts form passwords with RSA.', 'It converts HTML forms to WebSockets.', 'It bypasses all server validation.', 'use:enhance intercepts standard form submissions for seamless client-side updates while preserving standard HTML fallbacks.')
          ]
        }
      ]
    }
  ]
}

console.log('Writing Vue and Svelte courses...')
const coursesToGenerate = [vueCourse, svelteCourse]

coursesToGenerate.forEach((c) => {
  const filePath = join(tutorialsDir, `${c.slug}.ts`)
  const enrichedChapters = c.chapters.map((ch) => ({
    ...ch,
    lessons: ch.lessons.map((l) => ({
      ...l,
      description: l.description || `Master ${l.title} with practical examples, architectural deep dives, and key concepts.`
    }))
  }))

  const fullTutorial = {
    slug: c.slug,
    title: c.title,
    shortTitle: c.shortTitle,
    description: c.description,
    category: c.category,
    difficulty: c.difficulty,
    icon: c.icon,
    tags: c.tags,
    color: c.color,
    updated: '2026-08-18',
    prerequisites: ['Zero prior experience required — built from first principles.'],
    outcomes: [
      `Master modern ${c.shortTitle} syntax, core mental models, and architectural patterns`,
      `Build clean, performant, and production-grade ${c.shortTitle} applications`,
      'Understand trade-offs, testing strategies, and industry best practices'
    ],
    chapters: enrichedChapters
  }

  const code = `import type { Tutorial } from '../types'\n\nexport const ${c.varName}: Tutorial = ${JSON.stringify(fullTutorial, null, 2)}\n`
  writeFileSync(filePath, code, 'utf-8')
  const lessonCount = enrichedChapters.reduce((a, ch) => a + ch.lessons.length, 0)
  console.log(`✓ Updated ${c.slug}.ts (${lessonCount} lessons across ${c.chapters.length} chapters)`)
})
