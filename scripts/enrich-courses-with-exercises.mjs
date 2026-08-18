import { readFileSync, writeFileSync, readdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const tutorialsDir = join(root, 'src/content/tutorials')

const EXERCISE_MAP = {
  // HTML
  'how-the-web-works-and-html-basics': {
    prompt: 'Create a minimal HTML5 document with a level-1 heading saying "Engineering Principles" and a paragraph containing text with a strong emphasis.',
    hint: 'Use <h1> for the title, <p> for the quote, and <strong> to emphasize words.',
    solution: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Principles</title>\n</head>\n<body>\n  <h1>Engineering Principles</h1>\n  <p>Software reliability is <strong>essential</strong> for modern systems.</p>\n</body>\n</html>',
    language: 'html'
  },
  'html-document-skeleton-and-head-metadata': {
    prompt: 'Add the mobile viewport meta tag and UTF-8 charset inside the <head> of an HTML document, setting the title to "Lumen Architecture".',
    hint: 'Use <meta charset="UTF-8"> and <meta name="viewport" content="width=device-width, initial-scale=1.0">.',
    solution: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Lumen Architecture</title>\n</head>\n<body>\n  <h1>Ready for mobile devices</h1>\n</body>\n</html>',
    language: 'html'
  },
  'headings-paragraphs-and-text-formatting': {
    prompt: 'Write an article outline with an <h1> main title, two <h2> subsections, and a <blockquote> quote with an author attribution.',
    hint: 'Use <h1> for the article title, <h2> for sub-topics, and <blockquote><p>Quote</p></blockquote>.',
    solution: '<h1>Frontend Architecture</h1>\n\n<h2>1. Component Modularity</h2>\n<p>Isolating state simplifies maintenance.</p>\n\n<h2>2. Performance Optimization</h2>\n<blockquote>\n  <p>"Premature optimization is the root of all evil." — Donald Knuth</p>\n</blockquote>',
    language: 'html'
  },
  'links-lists-and-navigation': {
    prompt: 'Create an accessible navigation bar containing an unordered list of three links (Home, Courses, Roadmaps) with appropriate anchor tags.',
    hint: 'Wrap a <ul> inside a <nav aria-label="Main"> element with <li><a href="...">Text</a></li>.',
    solution: '<nav aria-label="Main Navigation">\n  <ul>\n    <li><a href="/">Home</a></li>\n    <li><a href="/courses">Courses</a></li>\n    <li><a href="/roadmaps">Roadmaps</a></li>\n  </ul>\n</nav>',
    language: 'html'
  },
  'images-audio-and-video-media': {
    prompt: 'Embed a responsive WebP image with explicit width (800) and height (450), a descriptive alt text, and lazy loading.',
    hint: 'Use loading="lazy" alongside src, alt, width, and height.',
    solution: '<img \n  src="/images/server-cluster.webp"\n  alt="High availability cloud server cluster in a modern data center"\n  width="800"\n  height="450"\n  loading="lazy"\n>',
    language: 'html'
  },
  'html-tables-and-data-presentation': {
    prompt: 'Construct an accessible 2-column table displaying Course Name and Duration with <thead>, <tbody>, and proper <th> scope attributes.',
    hint: 'Use scope="col" on table header cells inside <thead>.',
    solution: '<table>\n  <caption>Curriculum Breakdown</caption>\n  <thead>\n    <tr>\n      <th scope="col">Course Title</th>\n      <th scope="col">Duration</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>HTML5 Semantics</td>\n      <td>4 Hours</td>\n    </tr>\n  </tbody>\n</table>',
    language: 'html'
  },
  'html5-forms-and-input-validation': {
    prompt: 'Build an accessible login form with an email input and password input, both explicitly connected to <label> elements with required validation.',
    hint: 'Match label for="email-field" with input id="email-field".',
    solution: '<form action="/api/login" method="POST">\n  <div>\n    <label for="user-email">Email Address</label>\n    <input type="email" id="user-email" name="email" required>\n  </div>\n  <div>\n    <label for="user-pwd">Password</label>\n    <input type="password" id="user-pwd" name="password" required minlength="8">\n  </div>\n  <button type="submit">Sign In</button>\n</form>',
    language: 'html'
  },
  'semantic-html5-layout-and-seo': {
    prompt: 'Write a semantic HTML document layout utilizing <header>, <nav>, <main>, <article>, <aside>, and <footer>.',
    hint: 'Nest the primary content within <main><article>...</article><aside>...</aside></main>.',
    solution: '<header>\n  <nav><a href="/">Lumen</a></nav>\n</header>\n<main>\n  <article>\n    <h1>Semantic Layouts</h1>\n    <p>Articles represent self-contained content.</p>\n  </article>\n  <aside>\n    <h3>Related Courses</h3>\n  </aside>\n</main>\n<footer>\n  <p>&copy; 2026 Lumen</p>\n</footer>',
    language: 'html'
  },

  // CSS
  'the-css-box-model-and-sizing': {
    prompt: 'Style a .card component with a fixed width of 360px, 24px padding, 2px border, 20px bottom margin, and box-sizing: border-box.',
    hint: 'Declare box-sizing: border-box so the 360px width includes padding and border.',
    solution: '.card {\n  box-sizing: border-box;\n  width: 360px;\n  padding: 24px;\n  border: 2px solid #e2e8f0;\n  margin-bottom: 20px;\n  border-radius: 12px;\n}',
    language: 'css'
  },
  'flexbox-one-dimensional-layouts': {
    prompt: 'Write CSS to create a horizontal navigation bar that spaces items evenly across the main axis and vertically centers them with a 16px gap.',
    hint: 'Use display: flex, justify-content: space-between, align-items: center, and gap: 16px.',
    solution: '.navbar {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  padding: 12px 24px;\n}',
    language: 'css'
  },
  'css-grid-two-dimensional-layouts': {
    prompt: 'Create a responsive auto-fitting grid of cards that automatically adjusts between 1, 2, and 3 columns without using any media queries.',
    hint: 'Use grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) and gap: 24px.',
    solution: '.card-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 24px;\n}',
    language: 'css'
  },

  // JavaScript
  'variables-and-data-types': {
    prompt: 'Declare a const variable named siteName set to "Lumen", and a let variable named userScore set to 0. Increment userScore by 50 and log both.',
    hint: 'Use const for siteName and let for userScore since its value will change.',
    solution: 'const siteName = "Lumen";\nlet userScore = 0;\n\nuserScore += 50;\n\nconsole.log(siteName, "Current Score:", userScore);',
    language: 'javascript'
  },
  'functions-and-scope': {
    prompt: 'Write an arrow function named calculateDiscount that accepts price and discountPercent (defaulting to 10), and returns the discounted total.',
    hint: 'Use parameter default syntax (discountPercent = 10) and compute price * (1 - discountPercent / 100).',
    solution: 'const calculateDiscount = (price, discountPercent = 10) => {\n  return price * (1 - discountPercent / 100);\n};\n\nconsole.log(calculateDiscount(200)); // Outputs: 180',
    language: 'javascript'
  },
  'asynchronous-javascript-and-fetch': {
    prompt: 'Write an async function loadData(url) that uses fetch and await to retrieve and return JSON data with try/catch error handling.',
    hint: 'Check if response.ok is true, then return await response.json().',
    solution: 'async function loadData(url) {\n  try {\n    const response = await fetch(url);\n    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);\n    return await response.json();\n  } catch (err) {\n    console.error("Fetch failed:", err.message);\n  }\n}',
    language: 'javascript'
  },

  // TypeScript
  'generics-from-first-principles': {
    prompt: 'Write a generic function wrapInArray<T>(item: T): T[] that takes an item of any type and returns a single-element array of that type.',
    hint: 'Declare <T> in the function signature and return [item].',
    solution: 'function wrapInArray<T>(item: T): T[] {\n  return [item];\n}\n\nconst strArray = wrapInArray("TypeScript"); // string[]\nconst numArray = wrapInArray(42);           // number[]',
    language: 'typescript'
  },

  // React
  'state-with-usestate': {
    prompt: 'Build a ToggleTheme component in React with a button that toggles between "Light Mode ☀️" and "Dark Mode 🌙" on click using useState.',
    hint: 'Declare const [isDark, setIsDark] = useState(false) and toggle it with setIsDark(prev => !prev).',
    solution: 'import { useState } from "react";\n\nexport function ToggleTheme() {\n  const [isDark, setIsDark] = useState(false);\n\n  return (\n    <button onClick={() => setIsDark((prev) => !prev)}>\n      Current: {isDark ? "Dark Mode 🌙" : "Light Mode ☀️"}\n    </button>\n  );\n}',
    language: 'tsx'
  },

  // Next.js
  'server-actions-and-form-mutations': {
    prompt: 'Write a Next.js Server Action in app/actions.ts named addBookmark that extracts a courseSlug from FormData and calls revalidatePath("/courses").',
    hint: 'Add "use server" at the top of the file and import { revalidatePath } from "next/cache".',
    solution: '// app/actions.ts\n"use server";\nimport { revalidatePath } from "next/cache";\n\nexport async function addBookmark(formData: FormData) {\n  const courseSlug = formData.get("courseSlug") as string;\n  console.log("Bookmarked:", courseSlug);\n  revalidatePath("/courses");\n}',
    language: 'typescript'
  },

  // Angular
  'signals-reactivity-engine': {
    prompt: 'Create an Angular component with a count writable signal and a doubled computed signal derived from count.',
    hint: 'Use count = signal(0) and doubled = computed(() => this.count() * 2).',
    solution: 'import { Component, signal, computed } from "@angular/core";\n\n@Component({\n  selector: "app-counter",\n  standalone: true,\n  template: `<button (click)="inc()">Count: {{ count() }} (Doubled: {{ doubled() }})</button>`\n})\nexport class CounterComponent {\n  count = signal(0);\n  doubled = computed(() => this.count() * 2);\n\n  inc() {\n    this.count.update(c => c + 1);\n  }\n}',
    language: 'typescript'
  },

  // Vue
  'reactivity-with-ref-and-reactive': {
    prompt: 'Create a Vue 3 <script setup> component with a reactive ref named count and an increment function.',
    hint: 'Use const count = ref(0) and count.value++ inside the function.',
    solution: '<script setup lang="ts">\nimport { ref } from "vue";\n\nconst count = ref(0);\nfunction increment() {\n  count.value++;\n}\n</script>\n\n<template>\n  <button @click="increment">Count: {{ count }}</button>\n</template>',
    language: 'html'
  },

  // Svelte
  'svelte-5-runes-state-and-derived': {
    prompt: 'Create a Svelte 5 component using $state() for a reactive score and $derived() to compute a bonusScore.',
    hint: 'Use let score = $state(100) and let bonusScore = $derived(score * 1.5).',
    solution: '<script lang="ts">\n  let score = $state(100);\n  let bonusScore = $derived(score * 1.5);\n</script>\n\n<button onclick={() => score += 10}>\n  Score: {score} (Bonus: {bonusScore})\n</button>',
    language: 'html'
  },

  // Tailwind
  'flexbox-utilities-in-tailwind': {
    prompt: 'Write an HTML snippet using Tailwind CSS to create a responsive card with horizontal alignment, centering, and rounded corners.',
    hint: 'Combine flex, items-center, justify-between, p-6, and rounded-2xl.',
    solution: '<div class="flex items-center justify-between p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md">\n  <h4 class="font-bold text-slate-900 dark:text-white">Responsive Card</h4>\n  <button class="px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-500">\n    Action\n  </button>\n</div>',
    language: 'html'
  },

  // Node.js
  'express-middleware-and-request-body': {
    prompt: 'Write an Express middleware that logs the request method and path, and attaches a timestamp to the request object.',
    hint: 'Create a middleware function (req, res, next) => { ... next(); }.',
    solution: 'import express from "express";\n\nconst app = express();\n\napp.use((req, res, next) => {\n  req.requestTime = Date.now();\n  console.log(`[${req.method}] ${req.url} at ${req.requestTime}`);\n  next();\n});',
    language: 'javascript'
  },

  // NestJS
  'controllers-and-http-routing': {
    prompt: 'Create a NestJS CoursesController with a GET /courses/:id route that extracts the id parameter using @Param("id").',
    hint: 'Use @Controller("courses"), @Get(":id"), and @Param("id") id: string.',
    solution: 'import { Controller, Get, Param } from "@nestjs/common";\n\n@Controller("courses")\nexport class CoursesController {\n  @Get(":id")\n  findOne(@Param("id") id: string) {\n    return { courseId: id, status: "active" };\n  }\n}',
    language: 'typescript'
  }
}

console.log('Enriching courses with practical exercises...')
const files = readdirSync(tutorialsDir).filter(f => f.endsWith('.ts'))

for (const file of files) {
  const filePath = join(tutorialsDir, file)
  const content = readFileSync(filePath, 'utf-8')
  
  // Parse export const ...
  const match = content.match(/export const (\w+): Tutorial = ([\s\S]+)/)
  if (!match) continue
  
  const varName = match[1]
  let tutorial
  try {
    tutorial = JSON.parse(match[2].trim())
  } catch {
    continue
  }

  let modified = false
  for (const chapter of tutorial.chapters) {
    for (const lesson of chapter.lessons) {
      const exercise = EXERCISE_MAP[lesson.slug]
      const hasExercise = lesson.blocks.some(b => b.type === 'exercise')
      
      if (exercise && !hasExercise) {
        // Insert exercise right before the quiz (or at the end)
        const quizIdx = lesson.blocks.findIndex(b => b.type === 'quiz')
        const exerciseBlock = {
          type: 'exercise',
          prompt: exercise.prompt,
          hint: exercise.hint,
          solution: exercise.solution,
          language: exercise.language || 'typescript',
        }
        
        if (quizIdx !== -1) {
          lesson.blocks.splice(quizIdx, 0, exerciseBlock)
        } else {
          lesson.blocks.push(exerciseBlock)
        }
        modified = true
      }
    }
  }

  if (modified) {
    const newCode = `import type { Tutorial } from '../types'\n\nexport const ${varName}: Tutorial = ${JSON.stringify(tutorial, null, 2)}\n`
    writeFileSync(filePath, newCode, 'utf-8')
    console.log(`✓ Enriched exercises in ${file}`)
  }
}
