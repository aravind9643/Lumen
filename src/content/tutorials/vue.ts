import type { Tutorial } from '../types'

export const vueCourse: Tutorial = {
  "slug": "vue",
  "title": "Vue 3 & Composition API: Architecture & State",
  "shortTitle": "Vue 3",
  "description": "A complete, beginner-to-mastery path covering Vue 3 Single-File Components (.vue), <script setup>, Composition API, ref & reactive, computed properties, watchers, Pinia state stores, and Vue Router.",
  "category": "Web Development",
  "difficulty": "beginner",
  "icon": "code",
  "tags": [
    "Vue 3",
    "Composition API",
    "Pinia",
    "Reactivity",
    "Vite",
    "Frontend"
  ],
  "color": "#42b883",
  "updated": "2026-08-18",
  "prerequisites": [
    "Zero prior experience required — built from first principles."
  ],
  "outcomes": [
    "Master modern Vue 3 syntax, core mental models, and architectural patterns",
    "Build clean, performant, and production-grade Vue 3 applications",
    "Understand trade-offs, testing strategies, and industry best practices"
  ],
  "chapters": [
    {
      "title": "Chapter 1: Composition API & Reactivity Foundations (Beginner)",
      "lessons": [
        {
          "slug": "what-is-vue-and-single-file-components",
          "title": "What is Vue.js & Single-File Components (.vue)?",
          "description": "Learn why Vue is famous for its progressive learning curve, and master the Single-File Component structure (<script setup>, <template>, <style scoped>).",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "Level: Beginner | Prerequisites: HTML & JavaScript Basics"
            },
            {
              "type": "paragraph",
              "text": "Vue.js is an approachable, performant, and versatile progressive framework for building user interfaces. It combines the declarative template syntax of HTML with a fine-grained Proxy-based reactivity system."
            },
            {
              "type": "definition",
              "term": "Single-File Component (SFC / .vue)",
              "plain": "A file format that encapsulates a component logic (<script>), structure (<template>), and styling (<style>) in a single cohesive file.",
              "formal": "Vue Single-File Component Specification"
            },
            {
              "type": "code",
              "language": "html",
              "code": "<script setup lang=\"ts\">\n// Component Logic\nconst message = 'Welcome to Vue 3 Mastery!';\n</script>\n\n<template>\n  <!-- Visual HTML Structure -->\n  <div class=\"welcome-box\">\n    <h1>{{ message }}</h1>\n    <p>Declarative, intuitive, and performant web engineering.</p>\n  </div>\n</template>\n\n<style scoped>\n/* Scoped CSS: Only applies to this specific component */\n.welcome-box {\n  padding: 24px;\n  border-radius: 12px;\n  background: #f0fdf4;\n}\n</style>",
              "filename": "Welcome.vue"
            },
            {
              "type": "keyPoints",
              "points": [
                "Vue SFCs group template, script, and style in one file.",
                "<script setup> is modern compile-time syntactic sugar that reduces boilerplate.",
                "<style scoped> guarantees CSS will not leak to other components."
              ]
            },
            {
              "type": "quiz",
              "question": "What are the three core sections of a Vue Single-File Component (.vue)?",
              "options": [
                "<script>, <template>, and <style>",
                "<head>, <body>, and <footer>",
                "<model>, <view>, and <controller>",
                "<input>, <action>, and <output>"
              ],
              "answer": 0,
              "explanation": "A Vue SFC cleanly organizes component concerns into script (logic), template (markup), and style (presentation)."
            }
          ]
        },
        {
          "slug": "template-syntax-and-directives",
          "title": "Template Syntax & Core Directives (v-bind, v-on, v-model)",
          "description": "Master dynamic templates: Text interpolation {{ }}, attribute binding (v-bind / :), event handling (v-on / @), and two-way form binding (v-model).",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Vue uses an HTML-based template syntax that lets you bind the rendered DOM to underlying component data. Special attributes starting with v- are called Directives."
            },
            {
              "type": "code",
              "language": "html",
              "code": "<script setup lang=\"ts\">\nimport { ref } from 'vue';\n\nconst username = ref('Aravind');\nconst avatarUrl = ref('/avatars/user.png');\n\nfunction handleSave() {\n  console.log('Saved user:', username.value);\n}\n</script>\n\n<template>\n  <!-- v-bind shorthand (:) binds HTML attributes -->\n  <img :src=\"avatarUrl\" :alt=\"username\" width=\"64\" height=\"64\">\n\n  <!-- v-model creates two-way data binding on form inputs -->\n  <input v-model=\"username\" type=\"text\" placeholder=\"Enter name\">\n\n  <!-- v-on shorthand (@) listens to DOM events -->\n  <button @click=\"handleSave\">Save Changes</button>\n</template>",
              "filename": "Directives.vue"
            },
            {
              "type": "keyPoints",
              "points": [
                "v-bind shorthand is colon (:src=\"url\").",
                "v-on shorthand is at symbol (@click=\"handleClick\").",
                "v-model synchronizes form inputs with reactive state in two directions automatically."
              ]
            },
            {
              "type": "quiz",
              "question": "What is the shorthand syntax for the v-bind directive in Vue templates?",
              "options": [
                "An at sign (@)",
                "A single colon (:), such as :src=\"url\"",
                "Double curly braces {{ }}",
                "A dollar sign ($)"
              ],
              "answer": 1,
              "explanation": "The colon prefix :attr is the standard shorthand for v-bind:attr."
            }
          ]
        },
        {
          "slug": "reactivity-with-ref-and-reactive",
          "title": "Reactivity with ref() and reactive()",
          "description": "Understand Vue 3 Proxy-based reactivity, how ref() wraps primitives, accessing .value in script vs templates, and reactive() objects.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Vue 3 tracks state changes using JavaScript ES6 Proxies. When you read a reactive property in your template, Vue tracks it as a dependency. When you mutate the property, Vue automatically updates the DOM."
            },
            {
              "type": "definition",
              "term": "ref() vs reactive()",
              "plain": "ref() accepts any value (primitives like numbers/strings or objects) and requires .value in script. reactive() only accepts objects and does not use .value.",
              "formal": "Vue Reactivity Core API"
            },
            {
              "type": "code",
              "language": "html",
              "code": "<script setup lang=\"ts\">\nimport { ref } from 'vue';\n\n// 1. Declare reactive state with ref()\nconst count = ref(0);\n\nfunction increment() {\n  // In script: Access and mutate using .value\n  count.value++;\n}\n</script>\n\n<template>\n  <!-- In template: ref is automatically unwrapped (no .value needed!) -->\n  <button @click=\"increment\">\n    Current Count: {{ count }}\n  </button>\n</template>",
              "filename": "Counter.vue"
            },
            {
              "type": "keyPoints",
              "points": [
                "ref() is the recommended default for all reactive state in Vue 3.",
                "Always use .value in JavaScript/TypeScript; Vue automatically unwraps refs in templates.",
                "Reactivity is fine-grained and tracks dependencies automatically."
              ]
            },
            {
              "type": "quiz",
              "question": "How do you update the value of a Vue ref() inside a <script setup> block?",
              "options": [
                "By assigning directly to the variable: count = 5;",
                "By calling count.set(5);",
                "By assigning to its .value property, e.g., count.value = 5;",
                "By calling this.$setState({ count: 5 });"
              ],
              "answer": 2,
              "explanation": "In script code, ref objects hold their value inside the .value property."
            }
          ]
        },
        {
          "slug": "conditionals-and-list-rendering",
          "title": "Conditionals (v-if / v-show) & Lists (v-for)",
          "description": "Control element rendering with v-if, v-else-if, v-else, v-show, and loop over collections with v-for and unique :key bindings.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Vue provides structural directives for conditional rendering (v-if adds/removes elements from DOM; v-show toggles CSS display:none) and list rendering (v-for)."
            },
            {
              "type": "code",
              "language": "html",
              "code": "<script setup lang=\"ts\">\nimport { ref } from 'vue';\n\nconst isPremium = ref(true);\nconst courses = ref([\n  { id: 'c1', title: 'HTML5 Foundations' },\n  { id: 'c2', title: 'Vue 3 Mastery' },\n]);\n</script>\n\n<template>\n  <!-- Conditional Rendering -->\n  <div v-if=\"isPremium\" class=\"badge\">⭐ Premium Member</div>\n  <div v-else class=\"badge\">Free Tier</div>\n\n  <!-- List Rendering with mandatory :key -->\n  <ul>\n    <li v-for=\"course in courses\" :key=\"course.id\">\n      {{ course.title }}\n    </li>\n  </ul>\n</template>",
              "filename": "ListDemo.vue"
            },
            {
              "type": "keyPoints",
              "points": [
                "v-if physically mounts and unmounts elements from the DOM.",
                "v-show toggles CSS display: none (ideal for frequently toggled UI like dropdowns).",
                "Always provide a unique :key when using v-for for efficient DOM diffing."
              ]
            },
            {
              "type": "quiz",
              "question": "What is the key difference between v-if and v-show in Vue?",
              "options": [
                "v-show is for lists only.",
                "v-if only works on mobile devices.",
                "v-show runs on the server.",
                "v-if creates/destroys DOM nodes, while v-show always keeps the element in the DOM and toggles CSS display: none."
              ],
              "answer": 3,
              "explanation": "v-show has higher initial render cost but lower toggle cost because it simply toggles CSS visibility."
            }
          ]
        }
      ]
    },
    {
      "title": "Chapter 2: Computed Properties, Pinia & Full-Stack Vue (Mastery)",
      "lessons": [
        {
          "slug": "computed-properties-and-watchers",
          "title": "Computed Properties & Watchers (computed, watch, watchEffect)",
          "description": "Cache derived values with computed(), listen to reactive mutations with watch(), and run automatic side-effects with watchEffect().",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Computed properties allow you to define derived values that are automatically cached based on their reactive dependencies. Watchers let you run side-effects (like saving to localStorage or fetching an API) when state changes."
            },
            {
              "type": "code",
              "language": "html",
              "code": "<script setup lang=\"ts\">\nimport { ref, computed, watch } from 'vue';\n\nconst price = ref(100);\nconst discountPercent = ref(20);\n\n// 1. Computed Property: Cached automatically\nconst finalPrice = computed(() => price.value * (1 - discountPercent.value / 100));\n\n// 2. Watcher: React to changes\nwatch(finalPrice, (newPrice, oldPrice) => {\n  console.log(`Price changed from ${oldPrice} to ${newPrice}`);\n});\n</script>\n\n<template>\n  <p>Final Discounted Price: ${{ finalPrice }}</p>\n</template>",
              "filename": "Pricing.vue"
            },
            {
              "type": "keyPoints",
              "points": [
                "computed() returns a read-only ref that caches its value until dependencies change.",
                "watch() evaluates lazily and gives access to both old and new values.",
                "watchEffect() runs immediately and tracks all dependencies automatically."
              ]
            },
            {
              "type": "quiz",
              "question": "Why should expensive calculations be wrapped in computed() rather than plain methods in Vue templates?",
              "options": [
                "computed properties cache their output and only re-evaluate when their specific reactive dependencies change.",
                "computed calculations run inside WebGL.",
                "methods cannot return string values.",
                "computed disables CSS transitions."
              ],
              "answer": 0,
              "explanation": "Computed caching avoids running expensive computations on every single component re-render."
            }
          ]
        },
        {
          "slug": "component-props-and-custom-events",
          "title": "Component Props & Custom Events (defineProps & defineEmits)",
          "description": "Build composable component hierarchies using defineProps() for input data and defineEmits() for parent notifications.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "In Vue 3 <script setup>, components declare incoming props using the compiler macro defineProps() and emit custom events to parents using defineEmits()."
            },
            {
              "type": "code",
              "language": "html",
              "code": "<!-- Child Component: CourseCard.vue -->\n<script setup lang=\"ts\">\n// 1. Typed Props Declaration\nconst props = defineProps<{\n  title: string;\n  lessonsCount: number;\n}>();\n\n// 2. Custom Events Declaration\nconst emit = defineEmits<{\n  (e: 'select', title: string): void;\n}>();\n\nfunction handleClick() {\n  emit('select', props.title);\n}\n</script>\n\n<template>\n  <div class=\"card\" @click=\"handleClick\">\n    <h3>{{ title }}</h3>\n    <p>{{ lessonsCount }} Lessons</p>\n  </div>\n</template>",
              "filename": "CourseCard.vue"
            },
            {
              "type": "keyPoints",
              "points": [
                "defineProps and defineEmits are compile-time macros available in <script setup> without importing.",
                "Props flow down (parent -> child); Emits flow up (child -> parent).",
                "Always type props strictly using TypeScript generic syntax."
              ]
            },
            {
              "type": "quiz",
              "question": "Which compiler macro is used in Vue 3 <script setup> to emit custom events to a parent component?",
              "options": [
                "defineProps()",
                "defineEmits()",
                "this.$emit()",
                "dispatchEvent()"
              ],
              "answer": 1,
              "explanation": "defineEmits() defines the custom events a component can emit to its parent in <script setup>."
            }
          ]
        },
        {
          "slug": "pinia-state-management-stores",
          "title": "Global State Management with Pinia Stores",
          "description": "Manage shared global state with Pinia: defineStore, state refs, computed getters, actions, and storeToRefs().",
          "duration": 30,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Pinia is the official, type-safe global state management library for Vue 3. It replaces Vuex with a clean, modular API that integrates seamlessly with the Composition API."
            },
            {
              "type": "code",
              "language": "typescript",
              "code": "// stores/cart.ts: Modular Pinia Store using Setup Syntax\nimport { defineStore } from 'pinia';\nimport { ref, computed } from 'vue';\n\nexport const useCartStore = defineStore('cart', () => {\n  // State\n  const items = ref<string[]>([]);\n\n  // Getter (computed)\n  const itemCount = computed(() => items.value.length);\n\n  // Action (method)\n  function addItem(courseId: string) {\n    items.value.push(courseId);\n  }\n\n  return { items, itemCount, addItem };\n});",
              "filename": "cart.store.ts"
            },
            {
              "type": "keyPoints",
              "points": [
                "Pinia stores use standard ref() for state, computed() for getters, and functions for actions.",
                "Stores are modular and can be imported anywhere across the application.",
                "Use storeToRefs(store) when destructuring state to maintain reactivity."
              ]
            },
            {
              "type": "quiz",
              "question": "Which helper function must be used when destructuring reactive state properties from a Pinia store?",
              "options": [
                "toRaw()",
                "unref()",
                "storeToRefs()",
                "reactive()"
              ],
              "answer": 2,
              "explanation": "storeToRefs() converts store properties into individual refs so destructuring does not break reactivity."
            }
          ]
        },
        {
          "slug": "vue-router-and-single-page-apps",
          "title": "Vue Router 4 & Client-Side Navigation",
          "description": "Configure client-side routing with createRouter, createWebHistory, route parameters, <RouterLink>, <RouterView>, and beforeEach navigation guards.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Vue Router 4 enables Single Page Application navigation with clean URLs, dynamic route parameters (/courses/:slug), and navigation guards for authentication."
            },
            {
              "type": "code",
              "language": "typescript",
              "code": "import { createRouter, createWebHistory } from 'vue-router';\n\nexport const router = createRouter({\n  history: createWebHistory(),\n  routes: [\n    { path: '/', component: () => import('@/views/HomeView.vue') },\n    { path: '/courses/:slug', component: () => import('@/views/CourseDetailView.vue') },\n    { path: '/dashboard', component: () => import('@/views/DashboardView.vue'), meta: { requiresAuth: true } },\n  ],\n});\n\n// Global Navigation Guard\nrouter.beforeEach((to, from, next) => {\n  const isAuthenticated = Boolean(localStorage.getItem('token'));\n  if (to.meta.requiresAuth && !isAuthenticated) {\n    next('/login');\n  } else {\n    next();\n  }\n});",
              "filename": "router.ts"
            },
            {
              "type": "keyPoints",
              "points": [
                "createWebHistory() enables clean HTML5 pushState URLs without hash symbols (#).",
                "<RouterLink to=\"...\"> provides instant client-side navigation.",
                "beforeEach guards control access to protected routes."
              ]
            },
            {
              "type": "quiz",
              "question": "Which Vue Router component acts as the placeholder container where matching route components are rendered on screen?",
              "options": [
                "<RouterLink />",
                "<Outlet />",
                "<Template />",
                "<RouterView />"
              ],
              "answer": 3,
              "explanation": "<RouterView /> is the functional component that renders the matched component for the current URL path."
            }
          ]
        }
      ]
    }
  ]
}
