import { writeFileSync, unlinkSync, existsSync } from 'node:fs'
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

function makeQuiz(topic, qText, optCorrect, optWrong1, optWrong2, optWrong3, explanation) {
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

const COURSES = [
  {
    slug: 'html',
    varName: 'htmlCourse',
    title: 'HTML5 & Modern Web Semantics: Zero to Mastery',
    shortTitle: 'HTML5',
    description: 'Master semantic markup, modern document structure, accessible forms, audio/video integration, and SEO best practices from first principles.',
    category: 'Web Development',
    difficulty: 'beginner',
    icon: 'code',
    color: '#e34f26',
    tags: ['HTML5', 'Web Standards', 'Accessibility', 'SEO', 'Forms', 'Semantic Web'],
    chapters: [
      {
        title: 'Phase 1: Foundations & Document Structure',
        lessons: [
          {
            slug: 'document-structure-and-metadata',
            title: 'HTML5 Document Structure & Metadata',
            duration: 20,
            blocks: [
              { type: 'paragraph', text: 'HTML5 is the universal declarative language of the World Wide Web. Understanding document structure, the DOM hierarchy, and viewport metadata is essential for building fast, accessible web applications.' },
              { type: 'definition', term: 'DOM (Document Object Model)', plain: 'A tree representation of HTML elements that browsers construct in memory to render and script the page.', formal: 'W3C Document Object Model Level 3 Core Specification' },
              { type: 'code', language: 'html', code: `<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Modern Application</title>\n  </head>\n  <body>\n    <header>\n      <h1>Welcome to Lumen</h1>\n    </header>\n  </body>\n</html>`, filename: 'index.html' },
              { type: 'keyPoints', points: ['The DOCTYPE declaration triggers modern standards rendering mode.', 'meta charset UTF-8 prevents encoding vulnerabilities.', 'Viewport meta enables responsive layout scaling on mobile devices.'] },
              makeQuiz('HTML5', 'Why is the <!DOCTYPE html> declaration required at the very start of an HTML document?', 'It tells the browser to render the page in standard modern mode rather than legacy quirks mode.', 'It compiles the HTML into WebAssembly bytecode.', 'It enables synchronous multi-threaded socket communication.', 'It forces the browser to disable stylesheet caching.', 'The DOCTYPE switches the browser layout engine into strict standards compliance.')
            ]
          },
          {
            slug: 'semantic-elements-and-hierarchy',
            title: 'Semantic Elements & Content Hierarchy',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Semantic tags convey meaning to search engines and assistive screen readers, improving SEO and web accessibility without extra code.' },
              { type: 'analogy', text: 'Using generic divs for everything is like writing a book without chapters, headings, or index — readers and search tools cannot distinguish the header from the footer.' },
              { type: 'code', language: 'html', code: `<main>\n  <article>\n    <header>\n      <h2>Understanding Web Semantics</h2>\n      <time datetime="2026-08-17">Aug 17, 2026</time>\n    </header>\n    <p>Semantic markup provides structural meaning to browsers and search crawlers.</p>\n  </article>\n  <aside>\n    <h3>Related Topics</h3>\n  </aside>\n</main>`, filename: 'article.html' },
              { type: 'keyPoints', points: ['Use <main> for primary content and only once per page.', 'Articles represent self-contained syndicated content.', 'Sections represent thematic groupings of content with a heading.'] },
              makeQuiz('HTML5', 'What is the primary benefit of semantic HTML elements like <article>, <nav>, and <aside>?', 'They improve accessibility for assistive technologies and convey structural meaning to search engines.', 'They automatically apply modern gradient styling to the layout.', 'They prevent all cross-site scripting (XSS) attacks automatically.', 'They bypass the browser JavaScript event loop for faster rendering.', 'Semantic tags provide machine-readable intent to browsers, search engines, and screen readers.')
            ]
          }
        ]
      },
      {
        title: 'Phase 2: Forms, Media & Web Accessibility',
        lessons: [
          {
            slug: 'modern-forms-and-validation',
            title: 'Modern Forms, Input Types & Native Validation',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Modern HTML5 forms provide native input types, constraint validation attributes, and accessible labeling without relying on JavaScript libraries.' },
              { type: 'code', language: 'html', code: `<form action="/api/register" method="POST">\n  <label for="email">Work Email</label>\n  <input id="email" type="email" required placeholder="name@company.com" />\n\n  <label for="age">Age</label>\n  <input id="age" type="number" min="18" max="100" required />\n\n  <button type="submit">Create Account</button>\n</form>`, filename: 'form.html' },
              { type: 'keyPoints', points: ['Always pair inputs with explicit <label for="id"> tags for screen readers.', 'Use native types (email, number, url, date) for automatic mobile keyboard optimization.', 'Constraint validation attributes (required, min, max, pattern) validate before submission.'] },
              makeQuiz('HTML5', 'How does pairing an <input> with a <label for="..."> improve UX and accessibility?', 'It establishes a programmatic association for screen readers and allows users to click the label to focus the input.', 'It converts the text input into an encrypted cryptographic stream.', 'It automatically submits the form via WebSocket.', 'It disables autocomplete across all third-party password managers.', 'Explicit label association assists assistive devices and expands the clickable hit target.')
            ]
          },
          {
            slug: 'multimedia-and-canvas',
            title: 'Responsive Images, Video & Canvas Graphics',
            duration: 20,
            blocks: [
              { type: 'paragraph', text: 'Responsive media tags (<picture>, srcset, video, audio) allow browsers to download optimal image resolutions based on device DPI and network speed.' },
              { type: 'code', language: 'html', code: `<picture>\n  <source srcset="hero-large.webp" media="(min-width: 1024px)" type="image/webp" />\n  <source srcset="hero-medium.webp" media="(min-width: 640px)" type="image/webp" />\n  <img src="hero-fallback.jpg" alt="Engineering Team Collaboration" loading="lazy" />\n</picture>`, filename: 'responsive-image.html' },
              { type: 'keyPoints', points: ['loading="lazy" delays off-screen image loading until near the viewport.', 'The <picture> element enables art direction and format negotiation (AVIF/WebP).', 'Always supply descriptive alt attributes for non-decorative images.'] },
              makeQuiz('HTML5', 'What is the purpose of the loading="lazy" attribute on <img> tags?', 'It defers image fetching until the image is close to scrolling into the viewport, saving bandwidth and improving load speed.', 'It renders low-resolution vector placeholders permanently.', 'It converts animated GIF files into static SVG graphics.', 'It restricts image rendering to background Web Workers.', 'Lazy loading reduces initial page payload and improves Core Web Vitals.')
            ]
          }
        ]
      }
    ]
  },
  {
    slug: 'css',
    varName: 'cssCourse',
    title: 'CSS3 & Modern Layouts: Flexbox, Grid & Animations',
    shortTitle: 'CSS3',
    description: 'Master modern CSS layout systems, Flexbox, CSS Grid, Cascade Layers, Custom Properties, container queries, and GPU-accelerated transitions.',
    category: 'Web Development',
    difficulty: 'beginner',
    icon: 'palette',
    color: '#264de4',
    tags: ['CSS3', 'Flexbox', 'CSS Grid', 'Responsive', 'Animations', 'Design Systems'],
    chapters: [
      {
        title: 'Phase 1: Box Model & Modern Layouts',
        lessons: [
          {
            slug: 'box-model-and-custom-properties',
            title: 'The CSS Box Model & Custom Properties',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'The CSS Box Model defines how elements compute dimensions through content, padding, borders, and margins.' },
              { type: 'code', language: 'css', code: `:root {\n  --primary: #4f46e5;\n  --spacing-md: 1.5rem;\n  --radius: 0.75rem;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.card {\n  padding: var(--spacing-md);\n  background: var(--primary);\n  border-radius: var(--radius);\n}`, filename: 'styles.css' },
              { type: 'keyPoints', points: ['box-sizing: border-box includes padding and border in width calculations.', 'CSS Custom Properties (--var) enable runtime dynamic theming.', 'Margin collapsing occurs only on vertical block formatting contexts.'] },
              makeQuiz('CSS3', 'Why is box-sizing: border-box standard practice in modern CSS?', 'It includes padding and border within the declared width and height, preventing layout overflow calculations.', 'It converts 2D CSS elements into 3D WebGL canvas objects.', 'It disables the cascade mechanism entirely.', 'It forces all elements to display as inline text.', 'border-box makes sizing predictable by accounting for padding inside element dimensions.')
            ]
          },
          {
            slug: 'flexbox-deep-dive',
            title: 'Flexbox Architecture: 1D Alignment & Distribution',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Flexbox is designed for one-dimensional layouts, offering precise alignment along main and cross axes with flexible item distribution.' },
              { type: 'code', language: 'css', code: `.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n}\n\n.nav-links {\n  display: flex;\n  gap: 1.5rem;\n  list-style: none;\n}`, filename: 'flex.css' },
              { type: 'keyPoints', points: ['justify-content aligns items along the main axis.', 'align-items aligns items along the perpendicular cross axis.', 'gap replaces margin hacks between flex items.'] },
              makeQuiz('CSS3', 'Which Flexbox property aligns items along the cross axis (perpendicular to flex-direction)?', 'align-items', 'justify-content', 'flex-grow', 'order', 'align-items controls cross-axis alignment.')
            ]
          }
        ]
      },
      {
        title: 'Phase 2: CSS Grid & Fluid Animations',
        lessons: [
          {
            slug: 'css-grid-mastery',
            title: 'CSS Grid Mastery: 2D Complex Layout Systems',
            duration: 30,
            blocks: [
              { type: 'paragraph', text: 'CSS Grid provides a two-dimensional grid-based layout system with explicit columns, rows, auto-fill tracks, and named grid areas.' },
              { type: 'code', language: 'css', code: `.dashboard-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 1.5rem;\n}`, filename: 'grid.css' },
              { type: 'keyPoints', points: ['repeat(auto-fit, minmax(...)) creates responsive grids without media queries.', 'The fr unit represents a fraction of available free space.', 'grid-template-areas allows semantic layout mapping.'] },
              makeQuiz('CSS3', 'What does the "1fr" unit represent in CSS Grid?', 'One fraction of the available free space in the grid container.', 'One fixed root em character unit.', 'One absolute screen pixel on 1x display density.', 'One frame of hardware accelerated CSS animation.', 'The fr unit distributes remaining container space proportionally.')
            ]
          },
          {
            slug: 'animations-and-transitions',
            title: 'Hardware-Accelerated Transitions & Keyframes',
            duration: 20,
            blocks: [
              { type: 'paragraph', text: 'Modern CSS animations leverage the GPU compositor thread using transform and opacity properties to achieve smooth 60fps animations.' },
              { type: 'code', language: 'css', code: `@keyframes fadeIn {\n  from { opacity: 0; transform: translateY(10px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n\n.modal {\n  animation: fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;\n  will-change: transform, opacity;\n}`, filename: 'motion.css' },
              { type: 'keyPoints', points: ['Animate transform and opacity to avoid costly layout reflows and repaints.', 'cubic-bezier easing functions create natural physical motion curves.', 'will-change informs the browser to promote elements to dedicated GPU layers.'] },
              makeQuiz('CSS3', 'Which CSS properties can be animated without triggering layout reflows or repaints?', 'transform and opacity', 'width and height', 'margin and padding', 'top and left', 'transform and opacity are calculated entirely on the GPU compositor thread.')
            ]
          }
        ]
      }
    ]
  },
  {
    slug: 'javascript',
    varName: 'javascriptCourse',
    title: 'Modern JavaScript: ES6+, Async Patterns & DOM',
    shortTitle: 'JavaScript',
    description: 'Deep dive into modern JavaScript engineering: closures, prototypes, event loops, Promises, async/await, ES modules, and modern web APIs.',
    category: 'Web Development',
    difficulty: 'beginner',
    icon: 'code',
    color: '#f7df1e',
    tags: ['JavaScript', 'ES6+', 'Async', 'Event Loop', 'Closures', 'Promises', 'DOM'],
    chapters: [
      {
        title: 'Phase 1: Language Primitives & Closures',
        lessons: [
          {
            slug: 'scope-closures-and-execution-context',
            title: 'Execution Context, Scope Chains & Closures',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'JavaScript is a single-threaded, non-blocking asynchronous language. Understanding execution contexts, lexical scoping, and closures is fundamental.' },
              { type: 'code', language: 'javascript', code: `function createCounter(initial = 0) {\n  let count = initial;\n  return {\n    increment: () => ++count,\n    get: () => count\n  };\n}\n\nconst counter = createCounter(10);\nconsole.log(counter.increment()); // 11\nconsole.log(counter.get()); // 11`, filename: 'closures.js' },
              { type: 'keyPoints', points: ['A closure gives an inner function access to its outer lexical scope even after the outer function has returned.', 'const and let provide block-level scoping and temporal dead zones.', 'Arrow functions lexically bind this from their enclosing context.'] },
              makeQuiz('JavaScript', 'What is a closure in JavaScript?', 'A function bundled together with references to its surrounding lexical environment.', 'A syntax error that halts the V8 JavaScript engine.', 'A synchronous thread locking mechanism.', 'A method to serialize JSON objects into binary buffers.', 'Closures allow functions to maintain state across invocations.')
            ]
          },
          {
            slug: 'prototypes-and-modern-classes',
            title: 'Prototypes, Inheritance & ES6 Classes',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'JavaScript uses prototypal inheritance under the hood. ES6 class syntax is syntactic sugar over prototype chains.' },
              { type: 'code', language: 'javascript', code: `class Repository {\n  constructor(name) {\n    this.name = name;\n  }\n\n  describe() {\n    return \`Repository: \${this.name}\`;\n  }\n}\n\nconst repo = new Repository('Lumen');\nconsole.log(repo.describe());`, filename: 'classes.js' },
              { type: 'keyPoints', points: ['Objects link to a prototype object via [[Prototype]] / __proto__.', 'Method definitions on ES6 classes reside on Class.prototype.', 'super() calls the parent constructor during derived class instantiation.'] },
              makeQuiz('JavaScript', 'How does property lookup work across the JavaScript prototype chain?', 'The engine checks the object itself, then traverses up its prototype chain until found or reaching null.', 'The engine queries the global DOM window object directly.', 'Properties are cloned into every instance at compilation time.', 'The engine raises a reference error immediately if not found on the instance.', 'Prototype traversal walks the chain until finding the property or reaching the root.')
            ]
          }
        ]
      },
      {
        title: 'Phase 2: Asynchronous Event Loop & Web APIs',
        lessons: [
          {
            slug: 'event-loop-and-microtasks',
            title: 'The Event Loop, Microtasks & Macrotasks',
            duration: 30,
            blocks: [
              { type: 'paragraph', text: 'The JavaScript runtime uses a Call Stack, Web APIs, a Microtask Queue (Promises, queueMicrotask), and a Task Queue (setTimeout, I/O).' },
              { type: 'code', language: 'javascript', code: `console.log('1: Sync');\nsetTimeout(() => console.log('2: Timeout task'), 0);\nPromise.resolve().then(() => console.log('3: Microtask'));\nconsole.log('4: Sync');\n// Output: 1, 4, 3, 2`, filename: 'event-loop.js' },
              { type: 'keyPoints', points: ['Synchronous call stack code runs first to completion.', 'The microtask queue is drained completely after every stack frame before the next macrotask.', 'requestAnimationFrame runs immediately before browser layout/paint cycles.'] },
              makeQuiz('JavaScript', 'Between a resolved Promise (.then) and a setTimeout(..., 0), which executes first after synchronous code?', 'The Promise microtask executes first because microtasks are drained before the next macrotask.', 'setTimeout executes first due to timer priority.', 'Both execute in parallel on separate operating system threads.', 'Execution order is non-deterministic and randomized by the browser.', 'Microtasks have higher execution priority than timer macrotasks.')
            ]
          },
          {
            slug: 'async-await-and-fetch',
            title: 'Promises, Async/Await & Modern Fetch API',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Async/await provides clean sequential syntax over Promises with standard try/catch error handling and AbortController cancellation.' },
              { type: 'code', language: 'javascript', code: `async function fetchUserData(userId, signal) {\n  try {\n    const res = await fetch(\`/api/users/\${userId}\`, { signal });\n    if (!res.ok) throw new Error(\`HTTP \${res.status}\`);\n    return await res.json();\n  } catch (err) {\n    if (err.name === 'AbortError') return console.log('Request cancelled');\n    console.error('Fetch error:', err);\n  }\n}`, filename: 'fetch.js' },
              { type: 'keyPoints', points: ['async functions always return a Promise implicitly.', 'await pauses execution of the async function until the Promise settles.', 'AbortController allows cancelling pending in-flight network requests.'] },
              makeQuiz('JavaScript', 'What does an async function return if you return a plain primitive value like return 42?', 'A Promise that resolves to the value 42.', 'The literal number 42 synchronously.', 'An unresolved pending callback stream.', 'A DOM Node containing the string "42".', 'Async functions always wrap return values in a resolved Promise.')
            ]
          }
        ]
      }
    ]
  },
  {
    slug: 'typescript',
    varName: 'typescriptCourse',
    title: 'TypeScript Mastery: Type Systems & Advanced Generics',
    shortTitle: 'TypeScript',
    description: 'Master strict TypeScript engineering: utility types, conditional types, mapped types, template literal types, narrowing, and type-safe architecture.',
    category: 'Web Development',
    difficulty: 'intermediate',
    icon: 'code',
    color: '#3178c6',
    tags: ['TypeScript', 'Generics', 'Type Safety', 'Utility Types', 'AST', 'Architecture'],
    chapters: [
      {
        title: 'Phase 1: Type Primitives, Interfaces & Narrowing',
        lessons: [
          {
            slug: 'type-annotations-and-discriminated-unions',
            title: 'Discriminated Unions, Narrowing & Type Guards',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Discriminated unions provide exhaustive pattern matching and type narrowing based on a shared literal property.' },
              { type: 'code', language: 'typescript', code: `type ApiResponse =\n  | { status: 'success'; data: string[] }\n  | { status: 'error'; message: string };\n\nfunction handleResponse(res: ApiResponse) {\n  if (res.status === 'success') {\n    console.log(res.data.length); // TS knows res is success\n  } else {\n    console.error(res.message);   // TS knows res is error\n  }\n}`, filename: 'unions.ts' },
              { type: 'keyPoints', points: ['Discriminated unions use a common literal discriminant property.', 'Custom type guards use the arg is Type return predicate.', 'The never type guarantees exhaustive switch statement checking.'] },
              makeQuiz('TypeScript', 'What makes a TypeScript union type a "discriminated union"?', 'A common singleton/literal property present in all members of the union that TypeScript uses for narrowing.', 'The presence of an interface extending multiple classes.', 'Compiling with the --strictNullChecks compiler flag.', 'Using the any keyword to disable type verification.', 'A discriminant literal property enables compile-time type narrowing.')
            ]
          },
          {
            slug: 'interfaces-vs-type-aliases',
            title: 'Interfaces, Types & Declaration Merging',
            duration: 20,
            blocks: [
              { type: 'paragraph', text: 'Learn when to use interfaces for open, extensible object contracts and type aliases for unions, tuples, and mapped types.' },
              { type: 'code', language: 'typescript', code: `interface User {\n  id: string;\n  name: string;\n}\n\n// Declaration merging expands existing interfaces\ninterface User {\n  role: 'admin' | 'member';\n}\n\ntype Point = [x: number, y: number];`, filename: 'types.ts' },
              { type: 'keyPoints', points: ['Interfaces support declaration merging across module definitions.', 'Type aliases are required for primitives, unions, and intersection definitions.', 'prefer strict mode (strict: true) in tsconfig.json.'] },
              makeQuiz('TypeScript', 'Which TypeScript construct supports declaration merging across multiple definitions with the same name?', 'interface', 'type alias', 'enum', 'tuple', 'Interfaces merge declarations with the same identifier.')
            ]
          }
        ]
      },
      {
        title: 'Phase 2: Generics, Conditional Types & Mapped Types',
        lessons: [
          {
            slug: 'generics-and-type-constraints',
            title: 'Generics, Constraints & Utility Types',
            duration: 30,
            blocks: [
              { type: 'paragraph', text: 'Generics allow writing flexible, reusable functions and data structures while preserving full type safety across inputs and outputs.' },
              { type: 'code', language: 'typescript', code: `function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {\n  return obj[key];\n}\n\nconst user = { id: 'usr_1', score: 95 };\nconst score = getProperty(user, 'score'); // number`, filename: 'generics.ts' },
              { type: 'keyPoints', points: ['keyof T extracts the union of an object type keys.', 'K extends keyof T constrains generic parameters to valid object properties.', 'Built-in utilities (Partial, Required, Readonly, Record, Pick, Omit) transform types.'] },
              makeQuiz('TypeScript', 'What does the TypeScript operator "keyof T" produce?', 'A union of all known public property name string/number/symbol literal types of T.', 'An array of runtime object keys.', 'A Boolean value indicating whether T is an object.', 'The total number of properties in T.', 'keyof produces the union of keys for a given type.')
            ]
          },
          {
            slug: 'conditional-and-mapped-types',
            title: 'Conditional Types, infer & Template Literals',
            duration: 30,
            blocks: [
              { type: 'paragraph', text: 'Conditional types (T extends U ? X : Y) and infer allow extracting inner return types and crafting advanced metaprogramming typings.' },
              { type: 'code', language: 'typescript', code: `type ReturnTypeOf<T> = T extends (...args: any[]) => infer R ? R : never;\n\ntype EventName = \`on\${'Click' | 'Hover' | 'Focus'}\`;\n// 'onClick' | 'onHover' | 'onFocus'`, filename: 'advanced.ts' },
              { type: 'keyPoints', points: ['The infer keyword introduces a type variable within the conditional check.', 'Template literal types enable type-safe string manipulation.', 'Mapped types iterate over keys with in keyof.'] },
              makeQuiz('TypeScript', 'What does the "infer" keyword do inside a conditional type in TypeScript?', 'It declares a type variable to be deduced from the matched type structure.', 'It suppresses type-checking errors like @ts-ignore.', 'It forces the TypeScript compiler to emit runtime metadata.', 'It creates an infinite recursive type alias.', 'infer dynamically captures extracted types in conditional branches.')
            ]
          }
        ]
      }
    ]
  },
  {
    slug: 'react',
    varName: 'reactCourse',
    title: 'React Architecture: Components, Hooks & State',
    shortTitle: 'React',
    description: 'Master modern React architecture: JSX, custom hooks, reconciliation, concurrent rendering, Context API, state management, and performance optimization.',
    category: 'Web Development',
    difficulty: 'beginner',
    icon: 'code',
    color: '#61dafb',
    tags: ['React', 'Hooks', 'Virtual DOM', 'State', 'Context', 'SPA', 'Performance'],
    chapters: [
      {
        title: 'Phase 1: Component Fundamentals & State Reactivity',
        lessons: [
          {
            slug: 'components-props-and-state',
            title: 'Component Architecture, Props & useState',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'React components are pure functions that take props and state to render virtual DOM descriptions of UI.' },
              { type: 'code', language: 'tsx', code: `import { useState } from 'react';\n\ninterface ButtonProps {\n  label: string;\n  onPress: (count: number) => void;\n}\n\nexport function CounterButton({ label, onPress }: ButtonProps) {\n  const [count, setCount] = useState(0);\n\n  const handleClick = () => {\n    const next = count + 1;\n    setCount(next);\n    onPress(next);\n  };\n\n  return <button onClick={handleClick}>{label}: {count}</button>;\n}`, filename: 'Counter.tsx' },
              { type: 'keyPoints', points: ['Components re-render whenever their state or props change.', 'State updates should treat values as immutable.', 'Keys in lists must be stable, unique identifiers to maintain component identity.'] },
              makeQuiz('React', 'Why must state updates in React treat existing state objects as immutable?', 'Because React uses shallow reference equality checks (Object.is) to detect state changes and schedule re-renders.', 'Because JavaScript arrays and objects cannot be modified after instantiation.', 'Because mutation triggers immediate synchronous browser reloads.', 'Because the V8 engine deletes mutated objects from RAM.', 'Immutability ensures shallow comparison accurately detects changes.')
            ]
          },
          {
            slug: 'useeffect-and-lifecycle-synchronization',
            title: 'useEffect, Lifecycles & Synchronization',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'useEffect synchronizes your component with external systems (timers, subscriptions, DOM mutations, and network fetching).' },
              { type: 'code', language: 'tsx', code: `import { useEffect, useState } from 'react';\n\nexport function WindowTracker() {\n  const [width, setWidth] = useState(window.innerWidth);\n\n  useEffect(() => {\n    const onResize = () => setWidth(window.innerWidth);\n    window.addEventListener('resize', onResize);\n    return () => window.removeEventListener('resize', onResize);\n  }, []);\n\n  return <div>Viewport Width: {width}px</div>;\n}`, filename: 'WindowTracker.tsx' },
              { type: 'keyPoints', points: ['The dependency array tells React when to re-execute the effect.', 'Always return a cleanup function to prevent memory leaks and dangling listeners.', 'Do not use useEffect for deriving state that can be computed during render.'] },
              makeQuiz('React', 'What is the role of the cleanup function returned inside a useEffect callback?', 'It tears down subscriptions, timers, or listeners before the effect re-runs or when the component unmounts.', 'It deletes the component virtual DOM nodes from memory.', 'It converts async Promises into synchronous generator calls.', 'It forces the parent component to reset its props.', 'Cleanup functions clean up resources when dependencies change or components unmount.')
            ]
          }
        ]
      },
      {
        title: 'Phase 2: Advanced Hooks, Context & Performance',
        lessons: [
          {
            slug: 'custom-hooks-usememo-usecallback',
            title: 'Custom Hooks, useMemo & useCallback',
            duration: 30,
            blocks: [
              { type: 'paragraph', text: 'Custom hooks extract stateful logic into reusable functions, while useMemo and useCallback stabilize references across render cycles.' },
              { type: 'code', language: 'tsx', code: `import { useMemo, useCallback } from 'react';\n\nexport function ProductList({ items, filterText, onSelect }: Props) {\n  const filtered = useMemo(() => {\n    return items.filter(i => i.name.toLowerCase().includes(filterText.toLowerCase()));\n  }, [items, filterText]);\n\n  const handleSelect = useCallback((id: string) => {\n    onSelect(id);\n  }, [onSelect]);\n\n  return <ul>{filtered.map(i => <li key={i.id} onClick={() => handleSelect(i.id)}>{i.name}</li>)}</ul>;\n}`, filename: 'ProductList.tsx' },
              { type: 'keyPoints', points: ['useMemo caches the result of an expensive calculation.', 'useCallback caches a function definition between re-renders.', 'Custom hooks must adhere to the Rules of Hooks (call only at the top level).'] },
              makeQuiz('React', 'When is useCallback most beneficial in React applications?', 'When passing callback functions to memoized child components (React.memo) to prevent unnecessary re-renders.', 'When fetching data from REST endpoints synchronously.', 'When defining CSS styling rules inside JSX elements.', 'When replacing the root ReactDOM rendering container.', 'useCallback preserves callback reference identity across renders.')
            ]
          },
          {
            slug: 'context-api-and-global-state',
            title: 'Context API & Scalable State Architecture',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'React Context provides a way to pass data through the component tree without manually passing props down at every level.' },
              { type: 'code', language: 'tsx', code: `import { createContext, useContext, useState, ReactNode } from 'react';\n\ninterface ThemeContextType { dark: boolean; toggle: () => void; }\nconst ThemeContext = createContext<ThemeContextType | null>(null);\n\nexport function ThemeProvider({ children }: { children: ReactNode }) {\n  const [dark, setDark] = useState(false);\n  return (\n    <ThemeContext.Provider value={{ dark, toggle: () => setDark(!dark) }}>\n      {children}\n    </ThemeContext.Provider>\n  );\n}\n\nexport const useTheme = () => {\n  const ctx = useContext(ThemeContext);\n  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');\n  return ctx;\n};`, filename: 'ThemeContext.tsx' },
              { type: 'keyPoints', points: ['Context prevents prop-drilling across deeply nested component trees.', 'Split high-frequency state from static context values to optimize rendering performance.', 'Pair context with custom consumer hooks for runtime safety checks.'] },
              makeQuiz('React', 'What happens to all components calling useContext(MyContext) when the Provider value updates?', 'All consumer components re-render automatically to reflect the new context value.', 'Only the parent component re-renders while children freeze.', 'The browser immediately refreshes the webpage.', 'The context value is discarded and reset to initial default state.', 'Context value updates trigger re-renders in all subscribed consumers.')
            ]
          }
        ]
      }
    ]
  },
  {
    slug: 'nextjs',
    varName: 'nextjsCourse',
    title: 'Next.js & React Server Components: Full-Stack Web',
    shortTitle: 'Next.js',
    description: 'Master full-stack React with Next.js App Router, React Server Components (RSC), Server Actions, dynamic routing, caching, and Vercel edge deployment.',
    category: 'Web Development',
    difficulty: 'intermediate',
    icon: 'sparkles',
    color: '#000000',
    tags: ['Next.js', 'App Router', 'RSC', 'Server Actions', 'SSR', 'Full-Stack'],
    chapters: [
      {
        title: 'Phase 1: App Router & Server Components',
        lessons: [
          {
            slug: 'app-router-and-rsc-architecture',
            title: 'App Router & React Server Components (RSC)',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Next.js App Router uses React Server Components by default. Server components render on the server, sending zero client-side JavaScript bundle weight.' },
              { type: 'code', language: 'tsx', code: `// app/dashboard/page.tsx (Server Component by default)\nimport { db } from '@/lib/db';\n\nexport default async function DashboardPage() {\n  const users = await db.user.findMany();\n\n  return (\n    <main>\n      <h1>User Dashboard ({users.length})</h1>\n      <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>\n    </main>\n  );\n}`, filename: 'page.tsx' },
              { type: 'keyPoints', points: ['Server Components execute only on the server with direct database/filesystem access.', 'Use "use client" directive at the top of a file for client interactivity (hooks, events).', 'Client components can be nested inside server components as children.'] },
              makeQuiz('Next.js', 'What is the primary performance benefit of React Server Components (RSC)?', 'They execute on the server and emit HTML/RSC payloads with zero client JavaScript bundle overhead.', 'They disable all HTTP networking protocols.', 'They replace the database query optimizer with CSS rules.', 'They convert React components into WebAssembly assembly binaries.', 'Server Components keep heavy dependencies on the server without bloating client JS.')
            ]
          },
          {
            slug: 'server-actions-and-data-mutations',
            title: 'Server Actions, Forms & Revalidation',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Server Actions allow client forms to call asynchronous server functions directly without building custom REST API route handlers.' },
              { type: 'code', language: 'tsx', code: `// app/actions.ts\n'use server';\nimport { revalidatePath } from 'next/cache';\nimport { db } from '@/lib/db';\n\nexport async function createPost(formData: FormData) {\n  const title = formData.get('title') as string;\n  await db.post.create({ data: { title } });\n  revalidatePath('/posts');\n}`, filename: 'actions.ts' },
              { type: 'keyPoints', points: ['"use server" defines an endpoint callable from client or server forms.', 'revalidatePath invalidates cached server component data on demand.', 'Server Actions work with progressive enhancement even before JS hydrates.'] },
              makeQuiz('Next.js', 'What does "use server" at the top of an async function declare in Next.js?', 'It exposes the function as a secure, callable Server Action invoked via RPC from client forms.', 'It forces the client browser to start a local Node.js process.', 'It makes the code execute on a physical edge CDN hardware chip.', 'It encrypts the entire webpage with SSL certificates.', 'use server marks functions as Server Actions.')
            ]
          }
        ]
      },
      {
        title: 'Phase 2: Caching, Middleware & Edge Deployment',
        lessons: [
          {
            slug: 'caching-and-data-fetching',
            title: 'Next.js Caching Architecture & Data Fetching',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Next.js provides four distinct caching layers: Request Memoization, Data Cache, Full Route Cache, and the Client-side Router Cache.' },
              { type: 'code', language: 'tsx', code: `// Cached fetch with tag-based on-demand revalidation\nexport async function getProducts() {\n  const res = await fetch('https://api.example.com/products', {\n    next: { tags: ['products'], revalidate: 3600 }\n  });\n  return res.json();\n}`, filename: 'data.ts' },
              { type: 'keyPoints', points: ['fetch in Next.js is patched to cache responses in the Data Cache.', 'revalidateTag allows granular cache invalidation across distributed systems.', 'Route segments can specify export const revalidate = 60 for ISR.'] },
              makeQuiz('Next.js', 'How does Next.js handle repeated fetch() calls with the same URL within a single render pass?', 'It uses Request Memoization to execute the network call once and reuse the result.', 'It triggers duplicate parallel requests over HTTP/3.', 'It raises an unhandled promise rejection.', 'It cancels all requests after the first 10ms.', 'Request memoization deduplicates identical requests within a render tree.')
            ]
          },
          {
            slug: 'middleware-and-edge-routes',
            title: 'Middleware, Route Handlers & Edge Execution',
            duration: 20,
            blocks: [
              { type: 'paragraph', text: 'Next.js Middleware runs before a request is completed on Edge runtimes, ideal for authentication, redirects, and header rewriting.' },
              { type: 'code', language: 'typescript', code: `import { NextResponse } from 'next/server';\nimport type { NextRequest } from 'next/server';\n\nexport function middleware(request: NextRequest) {\n  const token = request.cookies.get('session')?.value;\n  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {\n    return NextResponse.redirect(new URL('/login', request.url));\n  }\n  return NextResponse.next();\n}\n\nexport const config = {\n  matcher: ['/dashboard/:path*'],\n};`, filename: 'middleware.ts' },
              { type: 'keyPoints', points: ['Middleware executes before static files and page routes are resolved.', 'Edge Runtime provides fast global cold starts without full Node.js overhead.', 'Route handlers in app/api/route.ts provide full Web Standard Request/Response APIs.'] },
              makeQuiz('Next.js', 'Where does Next.js Middleware execute relative to page rendering and route handlers?', 'Before any page rendering or route handler execution, intercepting incoming requests at the Edge.', 'After the client browser has completely rendered the DOM.', 'Only when an unhandled server error occurs.', 'Inside a Web Worker on the client device.', 'Middleware runs in front of all route resolution.')
            ]
          }
        ]
      }
    ]
  },
  {
    slug: 'angular',
    varName: 'angularCourse',
    title: 'Angular Enterprise: Signals, Standalone Components & RxJS',
    shortTitle: 'Angular',
    description: 'Master enterprise Angular development: Standalone components, modern Signals reactivity, Dependency Injection, RxJS, reactive forms, and routing.',
    category: 'Web Development',
    difficulty: 'intermediate',
    icon: 'code',
    color: '#dd0031',
    tags: ['Angular', 'TypeScript', 'Signals', 'RxJS', 'Enterprise', 'Standalone'],
    chapters: [
      {
        title: 'Phase 1: Standalone Components & Modern Signals',
        lessons: [
          {
            slug: 'standalone-components-and-signals',
            title: 'Standalone Components & Angular Signals',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Modern Angular uses standalone components and fine-grained reactive Signals (signal, computed, effect) eliminating NgModules.' },
              { type: 'code', language: 'typescript', code: `import { Component, signal, computed } from '@angular/core';\n\n@Component({\n  selector: 'app-counter',\n  standalone: true,\n  template: \`\n    <button (click)="increment()">Count: {{ count() }}</button>\n    <p>Double: {{ double() }}</p>\n  \`\n})\nexport class CounterComponent {\n  count = signal(0);\n  double = computed(() => this.count() * 2);\n\n  increment() {\n    this.count.update(v => v + 1);\n  }\n}`, filename: 'counter.component.ts' },
              { type: 'keyPoints', points: ['Standalone components declare their own imports directly in the decorator.', 'Signals track dependencies automatically for fine-grained DOM updates without Zone.js.', 'computed creates derived reactive values that re-calculate lazily.'] },
              makeQuiz('Angular', 'What is the primary advantage of Angular Signals over Zone.js change detection?', 'Signals provide fine-grained reactivity tracking, updating only the specific DOM nodes that depend on changed state.', 'Signals allow writing synchronous SQL queries inside component templates.', 'Signals compile Angular components into pure WebAssembly binaries.', 'Signals completely disable TypeScript typechecking at build time.', 'Signals enable fine-grained reactivity without full component tree dirty-checking.')
            ]
          },
          {
            slug: 'dependency-injection-and-services',
            title: 'Modern Dependency Injection & inject() API',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Angular features a hierarchical Dependency Injection system. The inject() function allows injecting tokens into services and functional route guards.' },
              { type: 'code', language: 'typescript', code: `import { Injectable, inject } from '@angular/core';\nimport { HttpClient } from '@angular/common/http';\n\n@Injectable({ providedIn: 'root' })\nexport class UserService {\n  private http = inject(HttpClient);\n\n  getUsers() {\n    return this.http.get<User[]>('/api/users');\n  }\n}`, filename: 'user.service.ts' },
              { type: 'keyPoints', points: ['providedIn: "root" creates application-wide singleton services.', 'The inject() function enables functional DI in guards, resolvers, and components.', 'Hierarchical injectors allow scoping services to specific component subtrees.'] },
              makeQuiz('Angular', 'What does @Injectable({ providedIn: "root" }) accomplish in Angular?', 'It registers the service as an application-wide singleton available throughout the injector tree.', 'It restricts service usage to server-side rendering only.', 'It converts HTTP responses into synchronous database transactions.', 'It injects the service into the global browser window object.', 'providedIn: root provides tree-shakable singleton services across the app.')
            ]
          }
        ]
      },
      {
        title: 'Phase 2: Reactive Forms, RxJS & Enterprise Routing',
        lessons: [
          {
            slug: 'reactive-forms-and-validation',
            title: 'Type-Safe Reactive Forms & Validation',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Angular Reactive Forms provide explicit, type-safe form model management with synchronous/asynchronous validation pipelines.' },
              { type: 'code', language: 'typescript', code: `import { Component, inject } from '@angular/core';\nimport { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';\n\n@Component({\n  standalone: true,\n  imports: [ReactiveFormsModule],\n  template: \`\n    <form [formGroup]="form" (ngSubmit)="onSubmit()">\n      <input formControlName="email" type="email" />\n      <button [disabled]="form.invalid">Submit</button>\n    </form>\n  \`\n})\nexport class LoginComponent {\n  private fb = inject(FormBuilder);\n  form = this.fb.group({\n    email: ['', [Validators.required, Validators.email]]\n  });\n\n  onSubmit() { if (this.form.valid) console.log(this.form.value); }\n}`, filename: 'login.component.ts' },
              { type: 'keyPoints', points: ['FormGroup and FormControl track form state, pristine/dirty, and validation status.', 'Type-safe forms infer form model shapes automatically in TypeScript.', 'Custom validators return validation error objects or null when valid.'] },
              makeQuiz('Angular', 'How does Angular Reactive Forms track validation state across complex forms?', 'Through an immutable programmatic model (FormGroup/FormControl) with structured validator functions.', 'By directly parsing DOM CSS classes in a MutationObserver.', 'By querying an external database schema over HTTP.', 'By disabling form submission buttons permanently.', 'Reactive forms manage state explicitly through programmatic FormGroups and Controls.')
            ]
          },
          {
            slug: 'rxjs-and-http-interceptors',
            title: 'RxJS Streams, Operators & HTTP Interceptors',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'RxJS powers asynchronous data pipelines in Angular with operators like switchMap, debounceTime, and functional HTTP interceptors.' },
              { type: 'code', language: 'typescript', code: `import { HttpInterceptorFn } from '@angular/common/http';\n\nexport const authInterceptor: HttpInterceptorFn = (req, next) => {\n  const token = localStorage.getItem('token');\n  const authReq = token\n    ? req.clone({ setHeaders: { Authorization: \`Bearer \${token}\` } })\n    : req;\n  return next(authReq);\n};`, filename: 'auth.interceptor.ts' },
              { type: 'keyPoints', points: ['Functional interceptors transform outgoing requests and incoming responses.', 'switchMap cancels previous in-flight inner observables when new values arrive.', 'takeUntilDestroyed cleans up subscriptions automatically on component destroy.'] },
              makeQuiz('Angular', 'What does the RxJS switchMap operator do when a new outer observable item arrives?', 'It cancels the previous inner observable subscription and switches execution to the new inner observable.', 'It merges all emissions simultaneously without cancellation.', 'It throws a runtime exception if an earlier request was pending.', 'It caches the first request and ignores all subsequent emissions.', 'switchMap cancels in-flight inner observables on new emissions.')
            ]
          }
        ]
      }
    ]
  },
  {
    slug: 'vue',
    varName: 'vueCourse',
    title: 'Vue 3 & Composition API: Reactive UI Architecture',
    shortTitle: 'Vue.js',
    description: 'Master Vue 3: Composition API, ref/reactive, computed, watchers, component props/emits, Pinia state management, and Vue Router.',
    category: 'Web Development',
    difficulty: 'beginner',
    icon: 'code',
    color: '#42b883',
    tags: ['Vue 3', 'Composition API', 'Pinia', 'Vite', 'Vue Router', 'Reactivity'],
    chapters: [
      {
        title: 'Phase 1: Composition API & Reactivity Core',
        lessons: [
          {
            slug: 'composition-api-and-reactivity',
            title: 'Vue 3 Composition API: ref, reactive & computed',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Vue 3 utilizes Proxy-based reactivity. <script setup> and the Composition API provide modular, composable component logic.' },
              { type: 'code', language: 'html', code: `<script setup lang="ts">\nimport { ref, computed } from 'vue';\n\nconst count = ref(0);\nconst double = computed(() => count.value * 2);\n\nfunction increment() {\n  count.value++;\n}\n</script>\n\n<template>\n  <button @click="increment">Count: {{ count }} (Double: {{ double }})</button>\n</template>`, filename: 'Counter.vue' },
              { type: 'keyPoints', points: ['ref creates a reactive wrapper with a .value property.', 'reactive creates a reactive Proxy around objects and arrays.', 'computed caches values based on reactive dependency tracking.'] },
              makeQuiz('Vue.js', 'How does Vue 3 detect property reads and writes in reactive state?', 'Using ES6 JavaScript Proxies that intercept getter and setter operations.', 'By polling the window object every 16ms with setInterval.', 'By parsing HTML template strings with regular expressions.', 'By converting objects into binary WebAssembly structs.', 'Vue 3 reactivity is built on native ES6 Proxies.')
            ]
          },
          {
            slug: 'components-props-and-emits',
            title: 'Component Architecture: Props, Emits & Slots',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Vue components communicate using defineProps for incoming data, defineEmits for parent events, and slots for content projection.' },
              { type: 'code', language: 'html', code: `<script setup lang="ts">\nconst props = defineProps<{ title: string; count?: number }>();\nconst emit = defineEmits<{ (e: 'delete', id: string): void }>();\n</script>\n\n<template>\n  <div class="card">\n    <h3>{{ props.title }}</h3>\n    <slot />\n    <button @click="emit('delete', 'item_1')">Delete</button>\n  </div>\n</template>`, filename: 'Card.vue' },
              { type: 'keyPoints', points: ['defineProps and defineEmits are compile-time compiler macros in <script setup>.', 'v-model provides two-way binding syntactic sugar over prop/emit pairs.', 'Scoped slots pass data from child components back up to parent templates.'] },
              makeQuiz('Vue.js', 'What are defineProps and defineEmits in Vue 3 <script setup>?', 'Compiler macros that are processed at build time without needing to be imported.', 'Runtime global variables attached to the window object.', 'Third-party plugins installed from npm.', 'Database connection functions for Node.js backends.', 'defineProps and defineEmits are compiler macros processed during build.')
            ]
          }
        ]
      },
      {
        title: 'Phase 2: State Management with Pinia & Vue Router',
        lessons: [
          {
            slug: 'pinia-state-management',
            title: 'Global State Management with Pinia',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Pinia is the official Vue state management library, offering modular stores, full TypeScript support, and zero mutation boilerplate.' },
              { type: 'code', language: 'typescript', code: `import { defineStore } from 'pinia';\nimport { ref, computed } from 'vue';\n\nexport const useCartStore = defineStore('cart', () => {\n  const items = ref<string[]>([]);\n  const count = computed(() => items.value.length);\n\n  function add(item: string) {\n    items.value.push(item);\n  }\n\n  return { items, count, add };\n});`, filename: 'cart.ts' },
              { type: 'keyPoints', points: ['Pinia stores use setup store syntax or options store syntax.', 'State properties can be updated directly without mutations.', 'Stores are fully type-safe and support DevTools time-travel debugging.'] },
              makeQuiz('Vue.js', 'Why did Pinia replace Vuex as the official state management standard for Vue?', 'Pinia eliminates mutations, provides first-class TypeScript inference, and uses a modular architecture.', 'Pinia converts Vue components into React JSX components.', 'Pinia forces all state to be stored in localStorage exclusively.', 'Pinia requires zero JavaScript code.', 'Pinia offers simpler syntax, direct state mutations, and full TypeScript support.')
            ]
          },
          {
            slug: 'vue-router-and-composables',
            title: 'Vue Router, Navigation Guards & Custom Composables',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Custom composables extract reusable reactive logic, while Vue Router manages client-side SPA navigation and route authentication guards.' },
              { type: 'code', language: 'typescript', code: `// composables/useFetch.ts\nimport { ref, watchEffect } from 'vue';\n\nexport function useFetch<T>(url: string) {\n  const data = ref<T | null>(null);\n  const error = ref<Error | null>(null);\n\n  watchEffect(async () => {\n    try {\n      const res = await fetch(url);\n      data.value = await res.json();\n    } catch (e) { error.value = e as Error; }\n  });\n\n  return { data, error };\n}`, filename: 'useFetch.ts' },
              { type: 'keyPoints', points: ['Composables are conventions for encapsulating stateful logic in Vue.', 'router.beforeEach provides global client navigation interception.', 'Routes can be lazy-loaded using dynamic import() declarations.'] },
              makeQuiz('Vue.js', 'What is a "Composable" in Vue 3?', 'A function that leverages Vue Composition API to encapsulate and share stateful logic across components.', 'A CSS stylesheet that compiles into Tailwind utility classes.', 'A build plugin that minifies static assets.', 'A database table migration script.', 'Composables encapsulate and share stateful logic using the Composition API.')
            ]
          }
        ]
      }
    ]
  },
  {
    slug: 'nodejs',
    varName: 'nodejsCourse',
    title: 'Node.js & Express: Backend Architecture & APIs',
    shortTitle: 'Node.js',
    description: 'Master backend web development: Node.js runtime, Event Loop, Streams, Buffers, Express REST APIs, middleware pipelines, JWT auth, and database ORMs.',
    category: 'Web Development',
    difficulty: 'intermediate',
    icon: 'code',
    color: '#339933',
    tags: ['Node.js', 'Express', 'Backend', 'REST API', 'JWT', 'PostgreSQL', 'Prisma'],
    chapters: [
      {
        title: 'Phase 1: Node.js Runtime & Express Foundations',
        lessons: [
          {
            slug: 'nodejs-runtime-and-streams',
            title: 'Node.js Runtime, Event Loop & Streams',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Node.js uses the V8 engine and libuv to provide non-blocking I/O operations through an asynchronous event loop and stream processing.' },
              { type: 'code', language: 'javascript', code: `import { createReadStream, createWriteStream } from 'node:fs';\nimport { pipeline } from 'node:stream/promises';\nimport { createGzip } from 'node:zlib';\n\nasync function compressFile(input, output) {\n  await pipeline(\n    createReadStream(input),\n    createGzip(),\n    createWriteStream(output)\n  );\n  console.log('Compression complete');\n}`, filename: 'compress.js' },
              { type: 'keyPoints', points: ['Streams process large data chunks in memory without buffering entire files.', 'libuv manages thread pools for file system and DNS operations.', 'The process object provides environment variables, signals, and exit handlers.'] },
              makeQuiz('Node.js', 'Why are Streams preferred over fs.readFile when handling large multi-gigabyte files in Node.js?', 'Streams process data piece by piece in small buffers, preventing memory exhaustion (OOM).', 'Streams convert binary files into synchronous string objects.', 'Streams disable operating system file access permissions.', 'Streams force execution onto the graphics card GPU.', 'Streams maintain a small constant memory footprint when streaming data.')
            ]
          },
          {
            slug: 'express-rest-api-architecture',
            title: 'Express Server, Middleware & REST Architecture',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Express is the foundational HTTP routing and middleware framework for Node.js, executing handlers along request-response pipelines.' },
              { type: 'code', language: 'typescript', code: `import express, { Request, Response, NextFunction } from 'express';\n\nconst app = express();\napp.use(express.json());\n\n// Logging middleware\napp.use((req: Request, _res: Response, next: NextFunction) => {\n  console.log(\`\${req.method} \${req.url}\`);\n  next();\n});\n\napp.get('/api/health', (_req: Request, res: Response) => {\n  res.json({ status: 'healthy', uptime: process.uptime() });\n});\n\napp.listen(3000, () => console.log('Server listening on port 3000'));`, filename: 'server.ts' },
              { type: 'keyPoints', points: ['Middleware functions have access to req, res, and the next() callback.', 'app.use(express.json()) parses incoming JSON request bodies.', 'Centralized error handling middleware uses four arguments: (err, req, res, next).'] },
              makeQuiz('Node.js', 'What is the signature of an Express error-handling middleware function?', '(err, req, res, next)', '(req, res)', '(err, callback)', '(status, data, next)', 'Express identifies error-handling middleware by its four parameters (err, req, res, next).')
            ]
          }
        ]
      },
      {
        title: 'Phase 2: Authentication, Security & Database ORM',
        lessons: [
          {
            slug: 'jwt-authentication-and-security',
            title: 'JWT Authentication, Password Hashing & Security',
            duration: 30,
            blocks: [
              { type: 'paragraph', text: 'Secure backend services with bcrypt password hashing, JSON Web Tokens (JWT), CORS headers, rate limiting, and helmet.' },
              { type: 'code', language: 'typescript', code: `import jwt from 'jsonwebtoken';\nimport bcrypt from 'bcrypt';\n\nconst JWT_SECRET = process.env.JWT_SECRET || 'secret';\n\nexport async function hashPassword(plain: string): Promise<string> {\n  return bcrypt.hash(plain, 12);\n}\n\nexport function generateToken(userId: string): string {\n  return jwt.sign({ sub: userId }, JWT_SECRET, { expiresIn: '1h' });\n}`, filename: 'auth.ts' },
              { type: 'keyPoints', points: ['bcrypt applies adaptive salt rounds to defend against rainbow table attacks.', 'JWTs consist of Header, Payload, and Signature parts.', 'Always validate token signatures before trusting request claims.'] },
              makeQuiz('Node.js', 'Why is bcrypt hashing preferred over plain SHA-256 for storing user passwords?', 'bcrypt is an adaptive hashing algorithm with salt rounds designed to be computationally slow against brute-force attacks.', 'bcrypt converts passwords into plain unencrypted text.', 'bcrypt automatically sends passwords to third-party databases.', 'bcrypt runs inside the browser DOM.', 'bcrypt slows down brute-force attacks through deliberate key derivation work factors.')
            ]
          },
          {
            slug: 'database-integration-prisma',
            title: 'Database Persistence with PostgreSQL & Prisma ORM',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Prisma ORM provides type-safe database queries, automated schema migrations, and relational modeling for PostgreSQL and MySQL.' },
              { type: 'code', language: 'typescript', code: `import { PrismaClient } from '@prisma/client';\nconst prisma = new PrismaClient();\n\nexport async function createUserWithProfile(name: string, email: string) {\n  return prisma.user.create({\n    data: {\n      name,\n      email,\n      profile: { create: { bio: 'Developer' } }\n    },\n    include: { profile: true }\n  });\n}`, filename: 'database.ts' },
              { type: 'keyPoints', points: ['Prisma Client generates TypeScript types directly from your database schema.', 'prisma migrate dev manages incremental SQL schema migrations.', 'Transactions execute atomic multi-record mutations safely.'] },
              makeQuiz('Node.js', 'What is the primary advantage of using a TypeScript ORM like Prisma in a Node.js backend?', 'It guarantees compile-time type safety across database queries, preventing schema runtime errors.', 'It converts relational tables into NoSQL documents automatically.', 'It bypasses SQL query planning and network sockets.', 'It disables database primary key constraints.', 'Prisma provides compile-time type safety and autocomplete derived from database schemas.')
            ]
          }
        ]
      }
    ]
  },
  {
    slug: 'nestjs',
    varName: 'nestjsCourse',
    title: 'NestJS Enterprise: Architecture, Microservices & APIs',
    shortTitle: 'NestJS',
    description: 'Master enterprise backend architecture with NestJS: Modular design, Controllers, Providers, Dependency Injection, Pipes, Guards, and Microservices.',
    category: 'Web Development',
    difficulty: 'advanced',
    icon: 'code',
    color: '#e0234e',
    tags: ['NestJS', 'TypeScript', 'Microservices', 'Dependency Injection', 'Backend', 'Architecture'],
    chapters: [
      {
        title: 'Phase 1: Modular Architecture & Controllers',
        lessons: [
          {
            slug: 'modules-controllers-and-providers',
            title: 'Modular Architecture, Controllers & Providers',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'NestJS is an opinionated, architectural framework inspired by Angular that uses decorators, modules, and inversion-of-control.' },
              { type: 'code', language: 'typescript', code: `import { Controller, Get, Post, Body, Injectable } from '@nestjs/common';\n\n@Injectable()\nexport class UsersService {\n  private users: string[] = ['Alice', 'Bob'];\n  findAll() { return this.users; }\n}\n\n@Controller('users')\nexport class UsersController {\n  constructor(private readonly usersService: UsersService) {}\n\n  @Get()\n  getUsers() { return this.usersService.findAll(); }\n}`, filename: 'users.controller.ts' },
              { type: 'keyPoints', points: ['@Module() encapsulates related controllers, providers, and exports.', '@Controller() maps HTTP request routes to handler methods.', '@Injectable() registers classes in the IoC dependency container.'] },
              makeQuiz('NestJS', 'How does NestJS instantiate and inject dependencies into Controllers?', 'Through Inversion of Control (IoC) and constructor-based Dependency Injection.', 'By parsing global window objects at startup.', 'By creating manual singleton global variables in index.js.', 'By calling synchronous child processes on the server.', 'NestJS uses an IoC container for constructor-based dependency injection.')
            ]
          },
          {
            slug: 'pipes-guards-and-interceptors',
            title: 'Pipes (Validation), Guards (Auth) & Interceptors',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'NestJS provides a cohesive request lifecycle pipeline using Pipes for DTO validation, Guards for auth authorization, and Interceptors for response transformation.' },
              { type: 'code', language: 'typescript', code: `import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';\n\n@Injectable()\nexport class AuthGuard implements CanActivate {\n  canActivate(context: ExecutionContext): boolean {\n    const request = context.switchToHttp().getRequest();\n    return Boolean(request.headers['authorization']);\n  }\n}`, filename: 'auth.guard.ts' },
              { type: 'keyPoints', points: ['Pipes transform input data and validate DTO schemas using class-validator.', 'Guards determine whether a given request should be handled by the route handler.', 'Interceptors bind extra logic before or after method execution.'] },
              makeQuiz('NestJS', 'In the NestJS request lifecycle, what is the role of a Guard?', 'It evaluates authentication and permission logic to decide if the request can proceed to the route handler.', 'It compresses HTTP response bodies with gzip.', 'It manages database connection pooling.', 'It renders HTML templates on the server.', 'Guards handle authentication and authorization access checks.')
            ]
          }
        ]
      }
    ]
  },
  {
    slug: 'tailwindcss',
    varName: 'tailwindcssCourse',
    title: 'Tailwind CSS: Modern Design Systems & Styling',
    shortTitle: 'Tailwind CSS',
    description: 'Master utility-first styling: Responsive design, Dark mode, custom theme tokens, typography, CSS grid utilities, and scalable component architecture.',
    category: 'Web Development',
    difficulty: 'beginner',
    icon: 'palette',
    color: '#38bdf8',
    tags: ['TailwindCSS', 'CSS', 'Design Systems', 'Responsive', 'Dark Mode', 'UI'],
    chapters: [
      {
        title: 'Phase 1: Utility-First Fundamentals & Layouts',
        lessons: [
          {
            slug: 'utility-first-philosophy-and-layout',
            title: 'Utility-First Philosophy, Flexbox & Spacing',
            duration: 20,
            blocks: [
              { type: 'paragraph', text: 'Tailwind CSS provides low-level utility classes that compose directly in your markup without inventing arbitrary class names.' },
              { type: 'code', language: 'html', code: `<div class="max-w-md mx-auto bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-6 border border-zinc-200 dark:border-zinc-800">\n  <h2 class="text-xl font-bold text-zinc-900 dark:text-white">Design Token</h2>\n  <p class="mt-2 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">\n    Build scalable interfaces with utility-first classes.\n  </p>\n  <button class="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl transition-all">\n    Explore System\n  </button>\n</div>`, filename: 'card.html' },
              { type: 'keyPoints', points: ['Utility classes eliminate context switching between HTML and separate CSS files.', 'Tailwind compiler purges unused classes emitting minimal production CSS.', 'Spacing and sizing follow a consistent 4px multiplier scale.'] },
              makeQuiz('Tailwind CSS', 'What is the primary benefit of the utility-first CSS approach?', 'It allows building custom designs directly in markup with consistent constraints without writing custom CSS rules.', 'It compiles HTML into binary C++ executables.', 'It removes the need for web browsers to support CSS.', 'It forces all websites to look identical with default presets.', 'Utility classes provide design consistency without leaving markup.')
            ]
          },
          {
            slug: 'responsive-variants-and-dark-mode',
            title: 'Responsive Breakpoints, Dark Mode & Theme Tokens',
            duration: 20,
            blocks: [
              { type: 'paragraph', text: 'Tailwind uses mobile-first responsive prefixes (sm:, md:, lg:, xl:) and the dark: variant for seamless dark mode adaptation.' },
              { type: 'code', language: 'html', code: `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">\n  <div class="p-4 bg-zinc-100 dark:bg-zinc-800 rounded-xl">\n    <span class="text-xs font-semibold text-indigo-600 dark:text-indigo-400">Metric 1</span>\n  </div>\n</div>`, filename: 'grid.html' },
              { type: 'keyPoints', points: ['Breakpoints apply from the specified screen width and upwards (mobile-first).', 'dark: class strategies enable manual or OS-preference dark mode switching.', 'Arbitrary values like w-[350px] provide escape hatches when needed.'] },
              makeQuiz('Tailwind CSS', 'How do responsive breakpoint variants (e.g. md:grid-cols-2) work in Tailwind CSS?', 'They use mobile-first min-width media queries, applying styles at that breakpoint and larger screens.', 'They apply only on desktop screens smaller than 300px.', 'They execute JavaScript resize event listeners on the client.', 'They replace the HTML DOM with mobile canvas elements.', 'Tailwind responsive variants use mobile-first min-width media queries.')
            ]
          }
        ]
      }
    ]
  },
  {
    slug: 'svelte',
    varName: 'svelteCourse',
    title: 'Svelte & SvelteKit: Compiler-Driven Web Architecture',
    shortTitle: 'Svelte',
    description: 'Master Svelte and SvelteKit: Compiler philosophy, Runes reactivity ($state, $derived), Stores, component slots, and full-stack SvelteKit SSR.',
    category: 'Web Development',
    difficulty: 'intermediate',
    icon: 'code',
    color: '#ff3e00',
    tags: ['Svelte', 'SvelteKit', 'Runes', 'Reactivity', 'Compiler', 'SSR'],
    chapters: [
      {
        title: 'Phase 1: Svelte Reactivity & Component Architecture',
        lessons: [
          {
            slug: 'compiler-philosophy-and-runes',
            title: 'Compiler Philosophy & Svelte Runes Reactivity',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Svelte is a compiler that converts declarative components into surgical, imperative DOM-manipulating JavaScript without a Virtual DOM.' },
              { type: 'code', language: 'html', code: `<script lang="ts">\nlet count = $state(0);\nlet double = $derived(count * 2);\n\nfunction increment() {\n  count += 1;\n}\n</script>\n\n<button on:click={increment}>\n  Count: {count} (Double: {double})\n</button>`, filename: 'Counter.svelte' },
              { type: 'keyPoints', points: ['Svelte compiles components at build time, eliminating Virtual DOM runtime overhead.', 'Runes ($state, $derived, $effect) provide explicit, universal reactivity.', 'Bindings (bind:value) create seamless two-way form input synchronization.'] },
              makeQuiz('Svelte', 'How does Svelte achieve high runtime UI performance compared to traditional frameworks?', 'It shifts reactivity into a compile-time step that generates minimal surgical DOM updates without a Virtual DOM.', 'It runs exclusively on server-side WebAssembly clusters.', 'It replaces JavaScript with raw C binary extensions.', 'It renders the entire web page as a static canvas image.', 'Svelte compiles reactivity into direct DOM operations at build time.')
            ]
          },
          {
            slug: 'sveltekit-full-stack-architecture',
            title: 'SvelteKit: File-Based Routing, SSR & Form Actions',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'SvelteKit is the application framework for Svelte offering file-based routing, server-side rendering (SSR), and form actions.' },
              { type: 'code', language: 'typescript', code: `// src/routes/users/+page.server.ts\nimport type { PageServerLoad } from './$types';\nimport { db } from '$lib/server/db';\n\nexport const load: PageServerLoad = async () => {\n  const users = await db.user.findMany();\n  return { users };\n};`, filename: '+page.server.ts' },
              { type: 'keyPoints', points: ['+page.svelte defines the UI, while +page.server.ts loads data on the server.', 'Form actions in +page.server.ts handle mutations with progressive enhancement.', 'Adapters deploy SvelteKit applications to Node, Vercel, Cloudflare, or static hosts.'] },
              makeQuiz('Svelte', 'In a SvelteKit route folder, what is the role of the +page.server.ts file?', 'It defines server-side load functions and form actions that execute exclusively on the server.', 'It compiles CSS stylesheets into SCSS files.', 'It handles client-side service worker caching.', 'It configures Vite bundling plugins.', '+page.server.ts runs server-only data loading and form actions.')
            ]
          }
        ]
      }
    ]
  }
]

console.log(`Writing ${COURSES.length} individual courses into src/content/tutorials/...`)

// Remove old web-dev.ts if present
const oldWebDev = join(tutorialsDir, 'web-dev.ts')
if (existsSync(oldWebDev)) {
  unlinkSync(oldWebDev)
  console.log('Removed old monolithic web-dev.ts')
}

// Write each course file
for (const c of COURSES) {
  const chaptersWithDesc = c.chapters.map((ch) => ({
    title: ch.title,
    lessons: ch.lessons.map((l) => ({
      slug: l.slug,
      title: l.title,
      description:
        l.description ||
        `Master ${l.title} with practical examples, architectural deep dives, and key concepts.`,
      duration: l.duration,
      blocks: l.blocks,
    })),
  }))

  const code = `import type { Tutorial } from '../types'

export const ${c.varName}: Tutorial = ${JSON.stringify(
    {
      slug: c.slug,
      title: c.title,
      shortTitle: c.shortTitle,
      description: c.description,
      category: c.category,
      difficulty: c.difficulty,
      icon: c.icon,
      tags: c.tags,
      color: c.color,
      updated: '2026-08-17',
      prerequisites: ['Zero prior experience required — built from first principles.'],
      outcomes: [
        'Master modern ' + c.shortTitle + ' syntax, core mental models, and architectural patterns',
        'Build clean, performant, and production-grade ' + c.shortTitle + ' applications',
        'Understand trade-offs, testing strategies, and industry best practices'
      ],
      chapters: chaptersWithDesc
    },
    null,
    2
  )}
`
  const filePath = join(tutorialsDir, `${c.slug}.ts`)
  writeFileSync(filePath, code)
  console.log(`Wrote ${c.slug}.ts`)
}

console.log('Finished unpacking web dev courses.')
