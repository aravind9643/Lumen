import type { Tutorial } from '../types'

export const vueCourse: Tutorial = {
  "slug": "vue",
  "title": "Vue 3 & Composition API: Reactive UI Architecture",
  "shortTitle": "Vue.js",
  "description": "Master Vue 3: Composition API, ref/reactive, computed, watchers, component props/emits, Pinia state management, and Vue Router.",
  "category": "Web Development",
  "difficulty": "beginner",
  "icon": "code",
  "tags": [
    "Vue 3",
    "Composition API",
    "Pinia",
    "Vite",
    "Vue Router",
    "Reactivity"
  ],
  "color": "#42b883",
  "updated": "2026-08-17",
  "prerequisites": [
    "Zero prior experience required — built from first principles."
  ],
  "outcomes": [
    "Master modern Vue.js syntax, core mental models, and architectural patterns",
    "Build clean, performant, and production-grade Vue.js applications",
    "Understand trade-offs, testing strategies, and industry best practices"
  ],
  "chapters": [
    {
      "title": "Phase 1: Composition API & Reactivity Core",
      "lessons": [
        {
          "slug": "composition-api-and-reactivity",
          "title": "Vue 3 Composition API: ref, reactive & computed",
          "description": "Master Vue 3 Composition API: ref, reactive & computed with practical examples, architectural deep dives, and key concepts.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Vue 3 utilizes Proxy-based reactivity. <script setup> and the Composition API provide modular, composable component logic."
            },
            {
              "type": "code",
              "language": "html",
              "code": "<script setup lang=\"ts\">\nimport { ref, computed } from 'vue';\n\nconst count = ref(0);\nconst double = computed(() => count.value * 2);\n\nfunction increment() {\n  count.value++;\n}\n</script>\n\n<template>\n  <button @click=\"increment\">Count: {{ count }} (Double: {{ double }})</button>\n</template>",
              "filename": "Counter.vue"
            },
            {
              "type": "keyPoints",
              "points": [
                "ref creates a reactive wrapper with a .value property.",
                "reactive creates a reactive Proxy around objects and arrays.",
                "computed caches values based on reactive dependency tracking."
              ]
            },
            {
              "type": "quiz",
              "question": "How does Vue 3 detect property reads and writes in reactive state?",
              "options": [
                "Using ES6 JavaScript Proxies that intercept getter and setter operations.",
                "By polling the window object every 16ms with setInterval.",
                "By parsing HTML template strings with regular expressions.",
                "By converting objects into binary WebAssembly structs."
              ],
              "answer": 0,
              "explanation": "Vue 3 reactivity is built on native ES6 Proxies."
            }
          ]
        },
        {
          "slug": "components-props-and-emits",
          "title": "Component Architecture: Props, Emits & Slots",
          "description": "Master Component Architecture: Props, Emits & Slots with practical examples, architectural deep dives, and key concepts.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Vue components communicate using defineProps for incoming data, defineEmits for parent events, and slots for content projection."
            },
            {
              "type": "code",
              "language": "html",
              "code": "<script setup lang=\"ts\">\nconst props = defineProps<{ title: string; count?: number }>();\nconst emit = defineEmits<{ (e: 'delete', id: string): void }>();\n</script>\n\n<template>\n  <div class=\"card\">\n    <h3>{{ props.title }}</h3>\n    <slot />\n    <button @click=\"emit('delete', 'item_1')\">Delete</button>\n  </div>\n</template>",
              "filename": "Card.vue"
            },
            {
              "type": "keyPoints",
              "points": [
                "defineProps and defineEmits are compile-time compiler macros in <script setup>.",
                "v-model provides two-way binding syntactic sugar over prop/emit pairs.",
                "Scoped slots pass data from child components back up to parent templates."
              ]
            },
            {
              "type": "quiz",
              "question": "What are defineProps and defineEmits in Vue 3 <script setup>?",
              "options": [
                "Runtime global variables attached to the window object.",
                "Compiler macros that are processed at build time without needing to be imported.",
                "Third-party plugins installed from npm.",
                "Database connection functions for Node.js backends."
              ],
              "answer": 1,
              "explanation": "defineProps and defineEmits are compiler macros processed during build."
            }
          ]
        }
      ]
    },
    {
      "title": "Phase 2: State Management with Pinia & Vue Router",
      "lessons": [
        {
          "slug": "pinia-state-management",
          "title": "Global State Management with Pinia",
          "description": "Master Global State Management with Pinia with practical examples, architectural deep dives, and key concepts.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Pinia is the official Vue state management library, offering modular stores, full TypeScript support, and zero mutation boilerplate."
            },
            {
              "type": "code",
              "language": "typescript",
              "code": "import { defineStore } from 'pinia';\nimport { ref, computed } from 'vue';\n\nexport const useCartStore = defineStore('cart', () => {\n  const items = ref<string[]>([]);\n  const count = computed(() => items.value.length);\n\n  function add(item: string) {\n    items.value.push(item);\n  }\n\n  return { items, count, add };\n});",
              "filename": "cart.ts"
            },
            {
              "type": "keyPoints",
              "points": [
                "Pinia stores use setup store syntax or options store syntax.",
                "State properties can be updated directly without mutations.",
                "Stores are fully type-safe and support DevTools time-travel debugging."
              ]
            },
            {
              "type": "quiz",
              "question": "Why did Pinia replace Vuex as the official state management standard for Vue?",
              "options": [
                "Pinia converts Vue components into React JSX components.",
                "Pinia forces all state to be stored in localStorage exclusively.",
                "Pinia eliminates mutations, provides first-class TypeScript inference, and uses a modular architecture.",
                "Pinia requires zero JavaScript code."
              ],
              "answer": 2,
              "explanation": "Pinia offers simpler syntax, direct state mutations, and full TypeScript support."
            }
          ]
        },
        {
          "slug": "vue-router-and-composables",
          "title": "Vue Router, Navigation Guards & Custom Composables",
          "description": "Master Vue Router, Navigation Guards & Custom Composables with practical examples, architectural deep dives, and key concepts.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Custom composables extract reusable reactive logic, while Vue Router manages client-side SPA navigation and route authentication guards."
            },
            {
              "type": "code",
              "language": "typescript",
              "code": "// composables/useFetch.ts\nimport { ref, watchEffect } from 'vue';\n\nexport function useFetch<T>(url: string) {\n  const data = ref<T | null>(null);\n  const error = ref<Error | null>(null);\n\n  watchEffect(async () => {\n    try {\n      const res = await fetch(url);\n      data.value = await res.json();\n    } catch (e) { error.value = e as Error; }\n  });\n\n  return { data, error };\n}",
              "filename": "useFetch.ts"
            },
            {
              "type": "keyPoints",
              "points": [
                "Composables are conventions for encapsulating stateful logic in Vue.",
                "router.beforeEach provides global client navigation interception.",
                "Routes can be lazy-loaded using dynamic import() declarations."
              ]
            },
            {
              "type": "quiz",
              "question": "What is a \"Composable\" in Vue 3?",
              "options": [
                "A CSS stylesheet that compiles into Tailwind utility classes.",
                "A build plugin that minifies static assets.",
                "A database table migration script.",
                "A function that leverages Vue Composition API to encapsulate and share stateful logic across components."
              ],
              "answer": 3,
              "explanation": "Composables encapsulate and share stateful logic using the Composition API."
            }
          ]
        }
      ]
    }
  ]
}
