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

const COURSES = [
  // 1. HTML5
  {
    slug: 'html',
    varName: 'htmlCourse',
    title: 'HTML5 & Modern Web Semantics: Zero to Mastery',
    shortTitle: 'HTML5',
    description: 'Master HTML5 document architecture, accessible semantics, responsive media pipelines, and modern web forms from first principles.',
    category: 'Web Development',
    difficulty: 'beginner',
    icon: 'code',
    color: '#e34f26',
    tags: ['HTML5', 'Web Standards', 'Accessibility', 'SEO', 'Forms', 'Semantic Web'],
    chapters: [
      {
        title: 'Phase 1: Semantic Document Architecture & Accessibility',
        lessons: [
          {
            slug: 'dom-tree-and-document-structure',
            title: 'The DOM Tree, Document Structure & Parsing',
            duration: 20,
            blocks: [
              { type: 'paragraph', text: 'HTML is not a visual layout language — it is a structured data serialization format that instructs the browser how to construct the Document Object Model (DOM) tree in memory. When a browser receives an HTML document over HTTP, it processes raw bytes through four distinct pipeline stages: byte stream tokenization, character decoding, token-to-node conversion, and tree construction.' },
              { type: 'analogy', title: 'The Architectural Blueprint Metaphor', text: 'Think of HTML as an architect\'s blueprint. The blueprint does not paint the walls or wire the electricity; it specifies where the load-bearing pillars, doorways, and rooms exist so the construction crew (the browser engine) can erect the physical building accurately.' },
              { type: 'code', language: 'html', code: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Accessible Architecture</title>\n</head>\n<body>\n  <header role="banner">\n    <h1>Engineering First Principles</h1>\n  </header>\n  <main role="main">\n    <article>\n      <h2>Understanding the DOM</h2>\n      <p>Browsers parse tokens incrementally into tree nodes.</p>\n    </article>\n  </main>\n</body>\n</html>`, filename: 'index.html' },
              { type: 'callout', kind: 'tip', title: 'Incremental Parsing', text: 'Browsers do not wait for the entire HTML file to download before rendering. They parse tokens and build the DOM incrementally as network packets arrive.' },
              { type: 'keyPoints', points: ['HTML serializes the hierarchical parent-child relationships of DOM nodes.', '<!DOCTYPE html> triggers standards mode rendering in modern browser engines.', 'Proper lang attributes ensure correct text-to-speech pronunciation and hyphenation.'] },
              makeQuiz('What is the primary role of the <!DOCTYPE html> declaration at the top of an HTML document?', 'It forces the browser engine to render the document in standards mode rather than quirks mode.', 'It allocates RAM for JavaScript execution inside the V8 engine.', 'It compiles HTML into binary bytecode for WebAssembly.', 'It establishes a TLS 1.3 encrypted handshake with the web server.', 'Without <!DOCTYPE html>, browsers fall back to legacy quirks mode, altering box model calculations and CSS rendering.')
            ]
          },
          {
            slug: 'semantic-landmarks-and-landmarks',
            title: 'Semantic Sectioning & ARIA Landmarks',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'A semantic element conveys meaning about its content to both the browser and assistive technologies (screen readers, search engine crawlers, and read-it-later tools). Using generic <div> elements everywhere creates "div soup", stripping away essential navigational landmarks.' },
              { type: 'code', language: 'html', code: `<header>\n  <nav aria-label="Primary Navigation">\n    <ul>\n      <li><a href="/courses">Courses</a></li>\n      <li><a href="/roadmaps">Roadmaps</a></li>\n    </ul>\n  </nav>\n</header>\n\n<main id="main-content">\n  <article aria-labelledby="post-title">\n    <h1 id="post-title">Semantic Architecture</h1>\n    <p>Articles represent self-contained, syndicatable compositions.</p>\n  </article>\n  <aside aria-label="Related Topics">\n    <h3>Further Reading</h3>\n  </aside>\n</main>`, filename: 'semantic-layout.html' },
              { type: 'callout', kind: 'warning', title: 'ARIA Overuse Warning', text: 'The first rule of ARIA: Do not use ARIA if a native HTML element already provides the built-in semantics, keyboard behaviors, and accessible attributes.' },
              { type: 'keyPoints', points: ['Use one and only one <main> element per document viewport.', '<article> represents self-contained content, while <section> groups thematic content.', '<aside> holds tangentially related content like sidebars, callouts, or glossaries.'] },
              makeQuiz('Which element is semantically intended for completely independent, redistributable content like a blog post or news story?', '<article>', '<section>', '<aside>', '<header>', '<article> is designed for standalone content that makes complete sense on its own outside the surrounding page.')
            ]
          },
          {
            slug: 'accessible-interactive-forms',
            title: 'Accessible Forms & Client-Side Validation',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Web forms are the primary interactive input channel for web applications. Accessibility requires that every input element be explicitly associated with a <label> element using matching id and for attributes, ensuring screen readers announce the label upon focus.' },
              { type: 'code', language: 'html', code: `<form action="/api/register" method="POST" novalidate>\n  <div class="form-group">\n    <label for="user-email">Email Address <span aria-hidden="true">*</span></label>\n    <input \n      type="email" \n      id="user-email" \n      name="email" \n      required \n      autocomplete="email"\n      aria-describedby="email-hint"\n    />\n    <p id="email-hint" class="hint">We will never share your email address.</p>\n  </div>\n\n  <button type="submit">Create Account</button>\n</form>`, filename: 'register-form.html' },
              { type: 'callout', kind: 'info', title: 'Autocomplete Attributes', text: 'Providing explicit autocomplete tokens (e.g. current-password, postal-code) drastically speeds up form completion for users and password managers.' },
              { type: 'keyPoints', points: ['Always link inputs to labels via matching id and for attributes.', 'Use aria-describedby to link helper text and error descriptions to inputs.', 'Choose precise input types (email, tel, url, number) to invoke appropriate mobile keyboards.'] },
              makeQuiz('What is the purpose of the aria-describedby attribute on a form input?', 'It programmatically associates supplementary hint or error text with the input for assistive technology.', 'It converts the input into a floating point number.', 'It overrides the browser default font family.', 'It encrypts the field before transmission.', 'aria-describedby points to an element ID containing helper text or validation errors, announcing it when the field gains focus.')
            ]
          }
        ]
      },
      {
        title: 'Phase 2: Modern Media Pipelines & Document Optimization',
        lessons: [
          {
            slug: 'responsive-images-and-picture',
            title: 'Responsive Images with <picture> & srcset',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Modern web performance demands that high-resolution mobile devices receive crisp images without forcing low-bandwidth cellular users to download heavy desktop assets. HTML solves this with resolution switching (srcset and sizes) and art direction (<picture> and <source>).' },
              { type: 'code', language: 'html', code: `<picture>\n  <!-- Modern AVIF format for supporting browsers -->\n  <source srcset="hero-large.avif 1200w, hero-small.avif 600w" sizes="(max-width: 768px) 100vw, 1200px" type="image/avif">\n  <!-- Fallback WebP format -->\n  <source srcset="hero-large.webp 1200w, hero-small.webp 600w" sizes="(max-width: 768px) 100vw, 1200px" type="image/webp">\n  <!-- Standard fallback image -->\n  <img src="hero-fallback.jpg" alt="Engineers collaborating in a modern workshop" loading="lazy" decoding="async" width="1200" height="675">\n</picture>`, filename: 'responsive-media.html' },
              { type: 'callout', kind: 'tip', title: 'Preventing Layout Shift (CLS)', text: 'Always include explicit width and height attributes on <img> tags. Browsers use these to calculate aspect ratios and reserve space before images load.' },
              { type: 'keyPoints', points: ['Use srcset with w descriptors and sizes to let browsers pick optimal image sizes based on viewport width.', 'Use <picture> for art direction (different crop ratios) or format negotiation (AVIF -> WebP -> JPG).', 'Always declare width and height to prevent Cumulative Layout Shift (CLS).'] },
              makeQuiz('Why should width and height attributes always be specified on <img> elements even when styled with CSS?', 'To establish aspect ratio and allocate layout space, preventing layout shifts before the image finishes downloading.', 'To disable browser JavaScript memory garbage collection.', 'To force images into SVG vector format.', 'To verify digital copyright certificates.', 'Explicit dimensions allow the browser to compute aspect ratios and reserve box geometry immediately, eliminating jarring layout jumps.')
            ]
          },
          {
            slug: 'audio-video-and-streaming-media',
            title: 'Native Audio, Video & Web Accessibility',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'HTML5 provides native <video> and <audio> elements that eliminate the need for third-party plugins. Accessibility and international compliance require closed captioning and subtitles, achieved via the <track> element and WebVTT format.' },
              { type: 'code', language: 'html', code: `<video controls preload="metadata" poster="/assets/poster.webp" width="800" height="450">\n  <source src="/media/lecture.webm" type="video/webm">\n  <source src="/media/lecture.mp4" type="video/mp4">\n  <track kind="captions" src="/media/captions-en.vtt" srclang="en" label="English Captions" default>\n  <track kind="subtitles" src="/media/subtitles-es.vtt" srclang="es" label="Español">\n  <p>Your browser does not support HTML5 video. <a href="/media/lecture.mp4">Download lecture</a>.</p>\n</video>`, filename: 'video-player.html' },
              { type: 'callout', kind: 'info', title: 'WebVTT Captions', text: 'WebVTT (.vtt) files provide timestamped cue blocks that render synchronized text overlays over video frames.' },
              { type: 'keyPoints', points: ['Provide multiple <source> tags with different codecs for maximum cross-browser compatibility.', 'Always attach <track kind="captions"> for accessibility compliance (WCAG 2.1 AA).', 'Use preload="metadata" to download audio/video durations without wasting bandwidth downloading entire media streams prematurely.'] },
              makeQuiz('Which track kind should be used when providing transcriptions that include sound effects, speaker identifiers, and spoken dialogue for deaf or hard-of-hearing users?', 'kind="captions"', 'kind="descriptions"', 'kind="chapters"', 'kind="metadata"', 'kind="captions" is specifically designed to convey dialogue, speaker identity, and meaningful background audio cues for accessibility.')
            ]
          },
          {
            slug: 'html-templates-and-web-components',
            title: 'HTML Templates, Slots & Shadow DOM Primitives',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Modern HTML includes native encapsulation primitives: the <template> element (inert markup that is parsed but not rendered until cloned) and <slot> placeholders for Web Components shadow DOM distribution.' },
              { type: 'code', language: 'html', code: `<template id="user-badge-template">\n  <style>\n    .badge { display: inline-flex; align-items: center; padding: 4px 8px; border-radius: 9999px; background: #e0e7ff; color: #3730a3; font-size: 12px; font-weight: 600; }\n  </style>\n  <div class="badge">\n    <slot name="icon"></slot>\n    <slot>Standard User</slot>\n  </div>\n</template>`, filename: 'web-components.html' },
              { type: 'keyPoints', points: ['<template> contents are not executed, rendered, or fetched until instantiated with document.importNode() or cloneNode(true).', 'Shadow DOM provides true scoped CSS encapsulation without naming collisions.', 'Custom elements must contain a hyphen in their tag name (e.g. <user-card>).'] },
              makeQuiz('Why are scripts and images inside an HTML <template> element not executed or fetched when the page loads?', 'Because <template> contents exist as inert DocumentFragment nodes until explicitly cloned by script.', 'Because the browser converts all template tags into disabled text comments.', 'Because templates require an active WebAssembly virtual machine thread.', 'Because templates are compiled on the server into JSON schema definitions.', 'Templates remain inactive and inert until JavaScript clones their content into the active DOM tree.')
            ]
          }
        ]
      }
    ]
  },

  // 2. CSS3
  {
    slug: 'css',
    varName: 'cssCourse',
    title: 'CSS3 & Modern Layout Systems: Zero to Mastery',
    shortTitle: 'CSS3',
    description: 'Master CSS architecture: Cascade layers, the Box Model, Flexbox 1D alignment, CSS Grid 2D subgrids, animations, and custom properties.',
    category: 'Web Development',
    difficulty: 'beginner',
    icon: 'code',
    color: '#264de4',
    tags: ['CSS3', 'Flexbox', 'CSS Grid', 'Custom Properties', 'Animations', 'Responsive Design'],
    chapters: [
      {
        title: 'Phase 1: Cascade Mechanics, Box Model & Flexbox',
        lessons: [
          {
            slug: 'box-model-and-stacking-context',
            title: 'The CSS Box Model & Stacking Context',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Every HTML element rendered in a browser is enclosed in a rectangular geometry known as the CSS Box Model. The box consists of four concentric layers: Content, Padding, Border, and Margin. Setting box-sizing: border-box ensures that specified widths and heights include padding and borders.' },
              { type: 'code', language: 'css', code: `*, *::before, *::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.card {\n  width: 320px;\n  padding: 24px;\n  border: 1px solid var(--border-color);\n  margin-bottom: 16px;\n  /* Total computed visual width is exactly 320px */\n}`, filename: 'box-model.css' },
              { type: 'callout', kind: 'tip', title: 'Margin Collapsing', text: 'Vertical margins of adjacent block elements collapse into a single margin equal to the maximum of the two margins. Flex and Grid items never collapse margins.' },
              { type: 'keyPoints', points: ['border-box includes padding and border in the element declared width and height.', 'A stacking context is formed by root, opacity < 1, transform, filter, or positioned elements with z-index.', 'Child z-index values cannot escape their parent stacking context.'] },
              makeQuiz('When box-sizing: border-box is applied to an element with width: 200px, padding: 20px, and border: 2px, what is its total rendered outer width?', '200px', '244px', '222px', '180px', 'With border-box, the declared 200px width encompasses content, padding (20+20), and border (2+2).')
            ]
          },
          {
            slug: 'flexbox-1d-layout-systems',
            title: 'Flexbox: 1D Axis Alignment & Distribution',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Flexbox is a one-dimensional layout model engineered for distributing space and aligning items along a single axis (either horizontal row or vertical column). It excels at navigation bars, card rows, toolbars, and dynamic centring.' },
              { type: 'code', language: 'css', code: `.navbar {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between; /* Main Axis */\n  align-items: center;            /* Cross Axis */\n  gap: 1.5rem;\n}\n\n.search-input {\n  flex: 1 1 auto; /* Grow to fill available space, shrink if constrained */\n  min-width: 150px;\n}`, filename: 'flexbox.css' },
              { type: 'keyPoints', points: ['justify-content aligns items along the main axis; align-items aligns along the cross axis.', 'gap creates uniform gutters between flex items without negative margin hacks.', 'flex: 1 shorthand sets flex-grow: 1, flex-shrink: 1, and flex-basis: 0%.'] },
              makeQuiz('Which CSS property controls item alignment along the cross axis in a Flexbox container?', 'align-items', 'justify-content', 'flex-direction', 'flex-wrap', 'align-items aligns items perpendicular to the main axis (the cross axis).')
            ]
          },
          {
            slug: 'cascade-layers-and-specificity',
            title: 'CSS Cascade Layers (@layer) & Specificity Rules',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'CSS Specificity calculates priority based on ID (1,0,0), Class/Attribute/Pseudo-class (0,1,0), and Element/Pseudo-element (0,0,1). Modern CSS Cascade Layers (@layer) allow developers to organize styles into explicit priority tiers regardless of selector specificity.' },
              { type: 'code', language: 'css', code: `@layer reset, base, components, utilities;\n\n@layer reset {\n  button { all: unset; }\n}\n\n@layer components {\n  .btn-primary {\n    background: #6366f1;\n    color: white;\n    padding: 8px 16px;\n    border-radius: 8px;\n  }\n}\n\n@layer utilities {\n  .hidden { display: none !important; }\n}`, filename: 'layers.css' },
              { type: 'keyPoints', points: ['Layers defined later in the layer declaration order override earlier layers regardless of internal specificity.', 'Unlayered styles always win over layered styles.', 'Specificity wars and !important hacks are cleanly solved with @layer hierarchies.'] },
              makeQuiz('In CSS Cascade Layers, what determines which layer wins when conflicting styles match the same element?', 'The explicit order in which layers are declared in the @layer statement.', 'The number of ID selectors inside each layer rule.', 'The alphabetical name of the CSS file on disk.', 'The size of the HTML document in bytes.', 'Later-declared layers take precedence over earlier layers regardless of selector specificity within those layers.')
            ]
          }
        ]
      },
      {
        title: 'Phase 2: CSS Grid, Custom Properties & Animations',
        lessons: [
          {
            slug: 'css-grid-2d-layout-systems',
            title: 'CSS Grid: 2D Spatial Layouts & Auto-Fit',
            duration: 30,
            blocks: [
              { type: 'paragraph', text: 'CSS Grid is the only native web layout engine engineered for simultaneous two-dimensional alignment (rows and columns). Grid allows developers to divide viewports into structural coordinate grids where items can span rows, overlay cells, and auto-adapt across screen sizes without media queries.' },
              { type: 'code', language: 'css', code: `.dashboard-grid {\n  display: grid;\n  /* Responsive auto-fit grid without explicit media queries */\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 1.5rem;\n}\n\n.featured-card {\n  grid-column: span 2;\n  grid-row: span 2;\n}`, filename: 'grid-system.css' },
              { type: 'callout', kind: 'tip', title: 'Auto-Fit vs Auto-Fill', text: 'auto-fill creates empty ghost columns if space permits, whereas auto-fit stretches existing items to expand across all remaining container space.' },
              { type: 'keyPoints', points: ['Grid manages rows and columns simultaneously in 2D space.', 'The fr unit represents a fraction of remaining free space in the grid container.', 'repeat(auto-fit, minmax(min, 1fr)) creates fluidly responsive layouts without breakpoints.'] },
              makeQuiz('What does the fr unit represent in a CSS Grid container?', 'A fraction of the container remaining free space after allocating fixed columns.', 'Fixed font-relative pixels.', 'Frame rate frequency for CSS transitions.', 'Focal radius for SVG radial gradients.', 'fr units allocate fractional slices of available free space inside the grid container.')
            ]
          },
          {
            slug: 'css-custom-properties-and-tokens',
            title: 'CSS Custom Properties & Design Tokens',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'CSS Custom Properties (--variable-name) are reactive, cascade-aware values that can be defined at root or component scopes, read with var(), and dynamically modified via JavaScript or media queries at runtime.' },
              { type: 'code', language: 'css', code: `:root {\n  --color-bg: #ffffff;\n  --color-fg: #0f172a;\n  --color-accent: #6366f1;\n  --radius-card: 16px;\n}\n\n[data-theme="dark"] {\n  --color-bg: #090d16;\n  --color-fg: #f8fafc;\n  --color-accent: #818cf8;\n}\n\n.card {\n  background-color: var(--color-bg);\n  color: var(--color-fg);\n  border-radius: var(--radius-card);\n}`, filename: 'tokens.css' },
              { type: 'keyPoints', points: ['Custom properties follow standard CSS cascade and specificity inheritance rules.', 'Can provide fallback defaults: var(--accent, #6366f1).', 'Can be modified live via element.style.setProperty("--accent", color).'] },
              makeQuiz('What is a major advantage of native CSS Custom Properties over preprocessor variables like SASS $vars?', 'CSS Custom Properties participate live in the browser cascade and can be updated dynamically at runtime without recompilation.', 'CSS Custom Properties compile directly into C++ binary memory.', 'CSS Custom Properties only work inside WebGL canvas contexts.', 'CSS Custom Properties are automatically converted into SQLite records.', 'CSS variables exist in the live DOM and can adapt dynamically to theme changes, user preferences, and JS mutations.')
            ]
          },
          {
            slug: 'css-animations-and-gpu-transforms',
            title: 'Performant CSS Keyframes & GPU Transforms',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Smooth 60/120fps animations require animating properties that the browser can composite directly on the GPU (transform and opacity) without triggering costly Layout (reflow) or Paint stages in the browser rendering engine.' },
              { type: 'code', language: 'css', code: `@keyframes pulseGlow {\n  0% {\n    transform: scale(1);\n    opacity: 0.8;\n  }\n  50% {\n    transform: scale(1.05);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 0.8;\n  }\n}\n\n.badge-pulse {\n  display: inline-block;\n  animation: pulseGlow 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  will-change: transform, opacity;\n}`, filename: 'animations.css' },
              { type: 'callout', kind: 'warning', title: 'Avoid Animating Layout Properties', text: 'Never animate top, left, width, height, or margin in keyframe loops — animating these forces the CPU to recalculate geometry for the entire DOM tree on every frame.' },
              { type: 'keyPoints', points: ['transform and opacity are composite-only properties handled on the GPU layer.', 'Use cubic-bezier timing functions for natural physics-like easing curves.', 'will-change informs the browser to promote elements to dedicated GPU render layers.'] },
              makeQuiz('Which pair of CSS properties can be animated at high performance directly on the GPU without triggering layout reflow or repaint?', 'transform and opacity', 'width and height', 'margin-top and top', 'padding and border-width', 'transform and opacity are composited directly on the GPU compositing thread without recalculating layout geometry or repainting pixels.')
            ]
          }
        ]
      }
    ]
  },

  // 3. JAVASCRIPT
  {
    slug: 'javascript',
    varName: 'javascriptCourse',
    title: 'Modern JavaScript (ES6+): Zero to Mastery',
    shortTitle: 'JavaScript',
    description: 'Master JavaScript engine internals: Execution contexts, lexical closures, prototypal inheritance, the Event Loop, Promises, and async streams.',
    category: 'Web Development',
    difficulty: 'beginner',
    icon: 'code',
    color: '#f7df1e',
    tags: ['JavaScript', 'ES6+', 'Event Loop', 'Closures', 'Async/Await', 'V8'],
    chapters: [
      {
        title: 'Phase 1: Execution Model, Scopes & Prototypes',
        lessons: [
          {
            slug: 'execution-contexts-and-lexical-scope',
            title: 'Execution Contexts, Call Stack & Lexical Scope',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'JavaScript is a single-threaded, non-blocking asynchronous language. When code executes, the JavaScript engine (such as V8) creates Execution Contexts containing a Variable Environment, Lexical Environment, and `this` binding, pushed onto the Call Stack.' },
              { type: 'code', language: 'javascript', code: `function outer() {\n  const secret = 'encrypted-token';\n  return function inner() {\n    console.log('Accessed via lexical closure:', secret);\n  };\n}\n\nconst fn = outer();\nfn(); // Holds reference to secret even after outer() returned`, filename: 'closures.js' },
              { type: 'keyPoints', points: ['Each function call creates a new execution context pushed onto the call stack.', 'Closures preserve access to parent variables by maintaining lexical environment references in heap memory.', 'let and const have block scope and a Temporal Dead Zone (TDZ).'] },
              makeQuiz('What happens when a JavaScript function accesses a variable defined in its parent outer function after the parent has returned?', 'The inner function accesses the variable via a closure preserved on the heap.', 'The JavaScript engine throws a NullReferenceException.', 'The variable is automatically serialized into localStorage.', 'The variable resets to undefined.', 'Lexical closures retain heap references to their enclosing outer scope variables across asynchronous lifecycles.')
            ]
          },
          {
            slug: 'prototypes-and-class-syntax',
            title: 'Prototypal Inheritance & Modern ES6 Classes',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'JavaScript objects inherit properties directly from other objects via the prototype chain (__proto__). ES6 class syntax is syntactic sugar over prototypal delegation, compiling down to prototype object linking.' },
              { type: 'code', language: 'javascript', code: `class EventEmitter {\n  #events = new Map();\n\n  on(event, listener) {\n    if (!this.#events.has(event)) this.#events.set(event, new Set());\n    this.#events.get(event).add(listener);\n  }\n\n  emit(event, ...args) {\n    this.#events.get(event)?.forEach(fn => fn(...args));\n  }\n}`, filename: 'event-emitter.js' },
              { type: 'keyPoints', points: ['Objects delegate missing property lookups upwards along their [[Prototype]] chain.', 'Methods declared on class bodies are attached to the Class.prototype object, sharing single memory references.', 'Private class fields (#field) are enforced at the engine runtime level.'] },
              makeQuiz('Where are methods defined inside an ES6 class attached in memory?', 'On the Class.prototype object, shared across all instantiated instances.', 'Inside each individual object instance as isolated clones.', 'In the browser IndexedDB storage layer.', 'Inside the V8 JIT compiler assembly cache.', 'Class methods live on the shared prototype object to optimize memory usage across instances.')
            ]
          },
          {
            slug: 'es-modules-and-iterators',
            title: 'ES Modules (ESM), Iterables & Generators',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'ECMAScript Modules (ESM) provide standard static module graphs enabling tree-shaking, static analysis, and asynchronous top-level await.' },
              { type: 'code', language: 'javascript', code: `export function* range(start, end, step = 1) {\n  for (let i = start; i <= end; i += step) {\n    yield i;\n  }\n}\n\nfor (const num of range(1, 5)) {\n  console.log('Generated on-demand:', num);\n}`, filename: 'generators.js' },
              { type: 'keyPoints', points: ['ESM imports and exports are statically analyzed at compile time before execution.', 'Generators function* yield values lazily on demand, allowing infinite sequence generation.', 'Top-level await pauses module evaluation until the awaited promise resolves.'] },
              makeQuiz('What is a major advantage of ES Modules (import/export) over CommonJS (require)?', 'ESM imports are statically analyzable at build time, enabling automated tree-shaking of dead code.', 'ESM only works with synchronous XML files.', 'ESM disables all asynchronous Promise execution.', 'CommonJS modules cannot access string primitives.', 'Static analysis allows bundlers to safely eliminate unused exports from production bundles.')
            ]
          }
        ]
      },
      {
        title: 'Phase 2: Event Loop, Concurrency & Modern APIs',
        lessons: [
          {
            slug: 'event-loop-microtasks-and-macrotasks',
            title: 'The Event Loop: Microtasks vs Macrotasks',
            duration: 30,
            blocks: [
              { type: 'paragraph', text: 'The browser Event Loop coordinates synchronous execution, microtask queues (Promise callbacks, queueMicrotask, MutationObserver), and macrotask queues (setTimeout, setInterval, I/O, UI events). Microtasks are always drained to completion before the engine yields to the next macrotask or renders a screen frame.' },
              { type: 'code', language: 'javascript', code: `console.log('1: Synchronous');\n\nsetTimeout(() => console.log('4: Macrotask (setTimeout)'), 0);\n\nPromise.resolve().then(() => console.log('2: Microtask (Promise)'));\n\nqueueMicrotask(() => console.log('3: Microtask (queueMicrotask)'));\n\n// Logs in order: 1 -> 2 -> 3 -> 4`, filename: 'event-loop.js' },
              { type: 'callout', kind: 'info', title: 'Microtask Queue Drain', text: 'The engine completely empties the entire microtask queue before picking the next macrotask or performing browser layout and paint.' },
              { type: 'keyPoints', points: ['Synchronous call stack executes first.', 'All microtasks in the queue drain completely before any macrotask runs.', 'setTimeout(fn, 0) schedules a macrotask for the next event loop tick.'] },
              makeQuiz('In what order does the Event Loop process task queues after the synchronous call stack empties?', 'It drains all queued Microtasks first, then executes the next Macrotask.', 'It alternates 1 Macrotask then 1 Microtask.', 'It executes Macrotasks first then drops all Microtasks.', 'It executes tasks in random order based on thread priority.', 'The microtask queue has absolute priority and drains completely before the next macrotask is processed.')
            ]
          },
          {
            slug: 'async-await-and-promises',
            title: 'Promises, Async/Await & Error Propagation',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Promises represent eventual completion or rejection of asynchronous operations. Async/await provides non-blocking imperative syntax on top of Promises with structured try/catch error handling.' },
              { type: 'code', language: 'javascript', code: `async function fetchUserData(userId, signal) {\n  try {\n    const response = await fetch(\`/api/users/\${userId}\`, { signal });\n    if (!response.ok) throw new Error(\`HTTP Error \${response.status}\`);\n    return await response.json();\n  } catch (err) {\n    if (err.name === 'AbortError') return console.log('Fetch aborted');\n    throw err;\n  }\n}`, filename: 'fetch-user.js' },
              { type: 'keyPoints', points: ['Promise.all fails fast on first rejection; Promise.allSettled waits for all promises regardless of outcome.', 'AbortController allows cancelling in-flight fetch requests and event listeners.', 'Unhandled promise rejections crash Node.js processes and log errors in browsers.'] },
              makeQuiz('Which Promise combinator waits for all supplied promises to resolve or reject without short-circuiting on the first error?', 'Promise.allSettled()', 'Promise.all()', 'Promise.race()', 'Promise.any()', 'Promise.allSettled() returns an array of status objects for every promise after all have finished, never short-circuiting.')
            ]
          },
          {
            slug: 'modern-web-apis-and-streams',
            title: 'Modern Web APIs: Streams, Web Workers & Storage',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Modern browser runtimes provide powerful native APIs: Web Workers for true background multi-threading, ReadableStream for processing large payloads chunk-by-chunk, and IndexedDB for transactional offline storage.' },
              { type: 'code', language: 'javascript', code: `// Consume streaming HTTP response chunk-by-chunk\nasync function streamResponse(url) {\n  const response = await fetch(url);\n  const reader = response.body.getReader();\n  const decoder = new TextDecoder();\n\n  while (true) {\n    const { value, done } = await reader.read();\n    if (done) break;\n    console.log('Chunk received:', decoder.decode(value, { stream: true }));\n  }\n}`, filename: 'stream-consumer.js' },
              { type: 'keyPoints', points: ['ReadableStream processes data incrementally without buffering entire multi-gigabyte payloads in RAM.', 'Web Workers run code on dedicated OS threads communicating via postMessage.', 'Structured cloning transfers objects and ArrayBuffers between worker threads safely.'] },
              makeQuiz('What is the main purpose of Web Workers in client-side JavaScript applications?', 'To run heavy CPU calculations on a background OS thread without blocking the main UI thread.', 'To bypass HTTPS encryption certificates.', 'To automatically compile CSS stylesheets into SVG vectors.', 'To eliminate the need for HTTP cookie authentication.', 'Web Workers offload intensive CPU tasks to separate threads, preventing UI jank and freeze.')
            ]
          }
        ]
      }
    ]
  },

  // 4. TYPESCRIPT
  {
    slug: 'typescript',
    varName: 'typescriptCourse',
    title: 'TypeScript Mastery: Type Systems & Generics',
    shortTitle: 'TypeScript',
    description: 'Master static typing, discriminated unions, generic meta-programming, conditional types, mapped types, and enterprise architecture.',
    category: 'Web Development',
    difficulty: 'intermediate',
    icon: 'code',
    color: '#3178c6',
    tags: ['TypeScript', 'Generics', 'Type System', 'Interfaces', 'Meta-Programming', 'Strict'],
    chapters: [
      {
        title: 'Phase 1: Type System Foundations & Structural Subtyping',
        lessons: [
          {
            slug: 'structural-typing-and-primitives',
            title: 'Structural Typing & Strict Type Primitives',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'TypeScript uses a structural type system (duck typing): type compatibility is determined by an object\'s shape and property structure rather than explicit class inheritance hierarchies.' },
              { type: 'code', language: 'typescript', code: `interface Point2D {\n  x: number;\n  y: number;\n}\n\nfunction printCoords(pt: Point2D) {\n  console.log(\`Coords: (\${pt.x}, \${pt.y})\`);\n}\n\n// Compatible because Point3D has at least x and y (structural subtyping)\nconst point3D = { x: 10, y: 20, z: 30 };\nprintCoords(point3D);`, filename: 'structural.ts' },
              { type: 'keyPoints', points: ['TypeScript types are erased completely at compile time leaving zero runtime overhead.', 'Structural subtyping checks that all required properties exist with compatible types.', 'unknown is the type-safe alternative to any, requiring type narrowing before use.'] },
              makeQuiz('What is the key difference between any and unknown in TypeScript?', 'unknown forces developers to narrow or assert the type before performing operations, whereas any disables all type checking.', 'unknown only accepts integer numbers.', 'any is compiled into C++ structs at runtime.', 'unknown deletes the variable during tree-shaking.', 'unknown represents any value while enforcing type narrowing before invoking methods or properties on it.')
            ]
          },
          {
            slug: 'discriminated-unions-and-narrowing',
            title: 'Discriminated Unions & Exhaustiveness Checking',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Discriminated unions combine union types with a common literal discriminator property. TypeScript automatically narrows types within switch or if statements, and the `never` type ensures exhaustive coverage.' },
              { type: 'code', language: 'typescript', code: `type NetworkState =\n  | { status: 'idle' }\n  | { status: 'loading' }\n  | { status: 'success'; data: string[] }\n  | { status: 'error'; error: Error };\n\nfunction renderState(state: NetworkState): string {\n  switch (state.status) {\n    case 'idle': return 'Ready';\n    case 'loading': return 'Fetching...';\n    case 'success': return \`Items: \${state.data.length}\`;\n    case 'error': return \`Failed: \${state.error.message}\`;\n    default:\n      const _exhaustive: never = state;\n      return _exhaustive;\n  }\n}`, filename: 'unions.ts' },
              { type: 'keyPoints', points: ['Discriminated unions provide algebraic data types in TypeScript.', 'Type narrowing happens automatically on typeof, instanceof, in, and literal equality checks.', 'Assigning default cases to never catches missing union variants at compile time.'] },
              makeQuiz('What pattern is used to guarantee at compile time that every possible case of a union type is handled in a switch statement?', 'Assigning the default case to a variable of type never.', 'Using eval() inside the default block.', 'Declaring all variables with the var keyword.', 'Disabling noImplicitAny in tsconfig.json.', 'Assigning unhandled variants to type never triggers a compile error if new variants are added to the union without handling them.')
            ]
          },
          {
            slug: 'generics-and-type-constraints',
            title: 'Generic Functions, Interfaces & Type Constraints',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Generics allow writing reusable components and functions that work across multiple types while preserving strict type safety through type parameterization.' },
              { type: 'code', language: 'typescript', code: `interface HasId {\n  id: string | number;\n}\n\nexport function indexById<T extends HasId>(items: T[]): Map<T['id'], T> {\n  const map = new Map<T['id'], T>();\n  for (const item of items) {\n    map.set(item.id, item);\n  }\n  return map;\n}`, filename: 'generics.ts' },
              { type: 'keyPoints', points: ['Generics act as type arguments passed into functions, classes, and interfaces.', 'Type constraints (T extends Constraint) ensure generic parameters satisfy required shapes.', 'keyof T extracts the union of property keys of an object type.'] },
              makeQuiz('What does the constraint <T extends Record<string, any>> specify for a generic function?', 'It constrains T to be an object type with string keys.', 'It converts T into an array of numbers.', 'It restricts T to only boolean primitives.', 'It causes the function to run synchronously on the main thread.', 'The extends keyword establishes a structural constraint that incoming type arguments must satisfy.')
            ]
          }
        ]
      },
      {
        title: 'Phase 2: Advanced Meta-Programming & Strict Soundness',
        lessons: [
          {
            slug: 'conditional-and-mapped-types',
            title: 'Conditional Types, Infer & Mapped Types',
            duration: 30,
            blocks: [
              { type: 'paragraph', text: 'Conditional types (`T extends U ? X : Y`) bring ternary logic to the type system. Combined with the `infer` keyword and mapped types (`[K in keyof T]`), TypeScript enables powerful type transformations.' },
              { type: 'code', language: 'typescript', code: `// Extract return type of a Promise or function\ntype UnwrapPromise<T> = T extends Promise<infer U> ? U : T;\n\n// Make all properties readonly and optional\ntype DeepReadonly<T> = {\n  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];\n};`, filename: 'meta-types.ts' },
              { type: 'keyPoints', points: ['infer introduces a type variable within the true branch of a conditional type.', 'Mapped types iterate over keys to transform modifiers and value types.', 'Template literal types allow string pattern matching and validation in types.'] },
              makeQuiz('What is the role of the infer keyword in a TypeScript conditional type?', 'It introduces an inline type variable to be extracted from the matched type structure.', 'It casts runtime values to string format.', 'It disables strict null checks.', 'It runs a regex match on variable names.', 'infer captures and extracts part of a type structure (such as array element types or promise resolution types) during conditional type evaluation.')
            ]
          },
          {
            slug: 'utility-types-and-lookup-types',
            title: 'Built-In Utility Types & Indexed Access',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'TypeScript ships with essential built-in utilities: Partial<T>, Required<T>, Readonly<T>, Pick<T, K>, Omit<T, K>, Record<K, V>, and ReturnType<T>.' },
              { type: 'code', language: 'typescript', code: `interface User {\n  id: string;\n  name: string;\n  email: string;\n  role: 'admin' | 'member';\n}\n\ntype UserSummary = Pick<User, 'id' | 'name'>;\ntype UpdateUserDTO = Partial<Omit<User, 'id'>>;\n\nconst updates: UpdateUserDTO = { name: 'Aravind' };`, filename: 'utilities.ts' },
              { type: 'keyPoints', points: ['Pick extracts specified keys; Omit removes specified keys.', 'Partial makes all properties optional; Required makes all properties required.', 'Indexed access types (User["role"]) look up specific property types.'] },
              makeQuiz('Which built-in utility type creates a new type by selecting a specific subset of keys from an existing type?', 'Pick<T, Keys>', 'Omit<T, Keys>', 'Extract<T, U>', 'Exclude<T, U>', 'Pick<T, Keys> constructs a type by picking the set of properties Keys from type T.')
            ]
          },
          {
            slug: 'tsconfig-strict-mode-and-soundness',
            title: 'Strict tsconfig Compiler Flags & Architecture',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Production TypeScript projects should enable `strict: true`, activating `strictNullChecks`, `noImplicitAny`, `strictFunctionTypes`, and `noUncheckedIndexedAccess` to guarantee type safety.' },
              { type: 'code', language: 'json', code: `{\n  "compilerOptions": {\n    "target": "ES2022",\n    "module": "NodeNext",\n    "moduleResolution": "NodeNext",\n    "strict": true,\n    "noUncheckedIndexedAccess": true,\n    "exactOptionalPropertyTypes": true,\n    "skipLibCheck": true\n  }\n}`, filename: 'tsconfig.json' },
              { type: 'keyPoints', points: ['strictNullChecks prevents null and undefined from being implicitly assigned to all types.', 'noUncheckedIndexedAccess adds undefined to array index and record lookups.', 'moduleResolution NodeNext ensures proper ES module path resolution.'] },
              makeQuiz('What safety benefit does enabling noUncheckedIndexedAccess provide in tsconfig.json?', 'It automatically adds undefined to any array index or dynamic object property access, forcing null checks.', 'It encrypts compiled JavaScript files.', 'It compiles TypeScript twice as fast by skipping typechecks.', 'It prevents importing npm packages.', 'With noUncheckedIndexedAccess, accessing array[0] produces type T | undefined rather than unsafe T.')
            ]
          }
        ]
      }
    ]
  },

  // 5. REACT
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
              { type: 'paragraph', text: 'React components are pure functions of props and state that describe the desired UI. When state changes, React invokes the component again, calculates the Virtual DOM diff via Fiber reconciliation, and applies minimal changes to the real DOM.' },
              { type: 'code', language: 'tsx', code: `import { useState } from 'react';\n\ninterface ButtonProps {\n  label: string;\n  onPress: (count: number) => void;\n}\n\nexport function CounterButton({ label, onPress }: ButtonProps) {\n  const [count, setCount] = useState(0);\n\n  const handleClick = () => {\n    setCount((prev) => {\n      const next = prev + 1;\n      onPress(next);\n      return next;\n    });\n  };\n\n  return <button onClick={handleClick}>{label}: {count}</button>;\n}`, filename: 'Counter.tsx' },
              { type: 'keyPoints', points: ['State updates must be treated as immutable — never mutate state directly.', 'Use functional updates (setCount(prev => prev + 1)) when the new state depends on the previous state.', 'Keys in lists must be unique, stable identifiers.'] },
              makeQuiz('Why must state updates in React treat existing state objects as immutable?', 'Because React uses shallow reference equality checks (Object.is) to detect state changes and schedule re-renders.', 'Because JavaScript arrays and objects cannot be modified after instantiation.', 'Because mutation triggers immediate synchronous browser reloads.', 'Because the V8 engine deletes mutated objects from RAM.', 'Immutability ensures shallow comparison accurately detects changes.')
            ]
          },
          {
            slug: 'useeffect-and-lifecycle-synchronization',
            title: 'useEffect, Lifecycles & Synchronization',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'useEffect synchronizes your component with external systems (timers, subscriptions, DOM mutations, and network fetching). Effects run after the browser paints the screen.' },
              { type: 'code', language: 'tsx', code: `import { useEffect, useState } from 'react';\n\nexport function WindowTracker() {\n  const [width, setWidth] = useState(window.innerWidth);\n\n  useEffect(() => {\n    const onResize = () => setWidth(window.innerWidth);\n    window.addEventListener('resize', onResize);\n    return () => window.removeEventListener('resize', onResize);\n  }, []);\n\n  return <div>Viewport Width: {width}px</div>;\n}`, filename: 'WindowTracker.tsx' },
              { type: 'keyPoints', points: ['The dependency array tells React when to re-execute the effect.', 'Always return a cleanup function to prevent memory leaks and dangling listeners.', 'Do not use useEffect for deriving state that can be computed during render.'] },
              makeQuiz('What is the role of the cleanup function returned inside a useEffect callback?', 'It unbinds listeners, aborts network requests, or clears timers when dependencies change or the component unmounts.', 'It deletes the component virtual DOM nodes from memory.', 'It converts the component into a Web Worker.', 'It forces an immediate garbage collection cycle in the browser.', 'Cleanup functions prevent memory leaks by tearing down active subscriptions before the next effect or on unmount.')
            ]
          },
          {
            slug: 'custom-hooks-and-logic-reuse',
            title: 'Authoring Custom React Hooks',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Custom hooks allow encapsulating and sharing stateful logic across multiple components without duplicating code or creating component wrappers.' },
              { type: 'code', language: 'tsx', code: `import { useState, useEffect } from 'react';\n\nexport function useDebounce<T>(value: T, delay: number): T {\n  const [debouncedValue, setDebouncedValue] = useState<T>(value);\n\n  useEffect(() => {\n    const timer = setTimeout(() => setDebouncedValue(value), delay);\n    return () => clearTimeout(timer);\n  }, [value, delay]);\n\n  return debouncedValue;\n}`, filename: 'useDebounce.ts' },
              { type: 'keyPoints', points: ['Custom hook names must start with "use" to enforce the Rules of Hooks.', 'Custom hooks isolate stateful logic, but each calling component gets independent state.', 'Keep custom hooks focused on a single responsibility.'] },
              makeQuiz('What happens when two separate components call the exact same custom hook?', 'Each component receives its own completely isolated, independent instance of the hook state.', 'They share a single global state singleton across the app.', 'React throws an invalid hook invocation error.', 'The second component overwrites the first component state.', 'Each invocation of a custom hook instantiates isolated state inside that specific component instance.')
            ]
          }
        ]
      },
      {
        title: 'Phase 2: Context, Performance & Concurrent Features',
        lessons: [
          {
            slug: 'context-api-and-global-state',
            title: 'Context API & Scalable State Architecture',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'The React Context API passes state down the component tree without prop drilling. For large applications, splitting state and dispatch contexts prevents unnecessary re-renders.' },
              { type: 'code', language: 'tsx', code: `import { createContext, useContext, useState, ReactNode } from 'react';\n\ninterface ThemeContextType {\n  theme: 'light' | 'dark';\n  toggleTheme: () => void;\n}\n\nconst ThemeContext = createContext<ThemeContextType | null>(null);\n\nexport function ThemeProvider({ children }: { children: ReactNode }) {\n  const [theme, setTheme] = useState<'light' | 'dark'>('dark');\n  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');\n  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;\n}\n\nexport const useTheme = () => {\n  const ctx = useContext(ThemeContext);\n  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');\n  return ctx;\n};`, filename: 'ThemeContext.tsx' },
              { type: 'keyPoints', points: ['Context is ideal for global low-frequency updates like themes, user auth, and locale.', 'Every consumer of a context re-renders whenever the context value reference changes.', 'Split large contexts into separate providers to optimize render performance.'] },
              makeQuiz('Why is it recommended to split large Context objects into separate State and Dispatch contexts?', 'To prevent components that only dispatch actions from re-rendering when state values update.', 'Because React Context only supports primitive string values.', 'Because Context can only hold up to 256 bytes in RAM.', 'To ensure Context compiles into WebAssembly.', 'Splitting dispatch from state keeps action-triggering components from re-rendering when state values change.')
            ]
          },
          {
            slug: 'performance-usememo-and-usecallback',
            title: 'Performance Optimization: useMemo, useCallback & memo',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'React renders are generally fast, but heavy calculations or passing unstable function references to memoized children can degrade frame rates. `useMemo` caches values, `useCallback` caches function references, and `React.memo` skips re-rendering unchanged children.' },
              { type: 'code', language: 'tsx', code: `import { useMemo, useCallback, memo } from 'react';\n\nexport function UserDashboard({ users, filterQuery, onDelete }: DashboardProps) {\n  // Cache expensive filtering calculation\n  const filteredUsers = useMemo(() => {\n    return users.filter(u => u.name.toLowerCase().includes(filterQuery.toLowerCase()));\n  }, [users, filterQuery]);\n\n  // Cache function reference for memoized child\n  const handleDelete = useCallback((id: string) => {\n    onDelete(id);\n  }, [onDelete]);\n\n  return <UserList users={filteredUsers} onDelete={handleDelete} />;\n}`, filename: 'Dashboard.tsx' },
              { type: 'keyPoints', points: ['useMemo caches computed values between renders.', 'useCallback caches function definitions between renders.', 'Only optimize when profiling identifies a noticeable bottleneck.'] },
              makeQuiz('When is using useCallback genuinely beneficial in a React component?', 'When passing a callback function as a prop to a child component wrapped in React.memo.', 'When calling console.log inside an event handler.', 'Inside every single function definition in the application.', 'When writing CSS class names in JSX.', 'useCallback preserves stable function references so memoized child components do not re-render unnecessarily.')
            ]
          },
          {
            slug: 'fiber-reconciliation-and-suspense',
            title: 'Fiber Architecture, Concurrent Mode & Suspense',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'The React Fiber engine represents each virtual DOM node as a Fiber node linked in a mutable work-in-progress tree. Fiber enables interruptible, prioritized rendering and concurrent features like `useTransition` and `<Suspense>`.' },
              { type: 'code', language: 'tsx', code: `import { useState, useTransition, Suspense, lazy } from 'react';\n\nconst AnalyticsChart = lazy(() => import('./AnalyticsChart'));\n\nexport function TabContainer() {\n  const [tab, setTab] = useState('summary');\n  const [isPending, startTransition] = useTransition();\n\n  const selectTab = (nextTab: string) => {\n    startTransition(() => setTab(nextTab));\n  };\n\n  return (\n    <div>\n      <button onClick={() => selectTab('analytics')}>Analytics {isPending && '(Loading...)'}</button>\n      <Suspense fallback={<p>Loading chart chunk...</p>}>\n        {tab === 'analytics' && <AnalyticsChart />}\n      </Suspense>\n    </div>\n  );\n}`, filename: 'Tabs.tsx' },
              { type: 'keyPoints', points: ['Fiber allows React to pause, resume, or abort rendering work based on priority.', 'useTransition marks state updates as non-blocking background transitions.', 'Suspense displays fallback UI while asynchronous code or data is loading.'] },
              makeQuiz('What is the main purpose of the useTransition hook in React Concurrent Mode?', 'It marks state updates as non-urgent transitions, keeping the UI responsive to user input during heavy renders.', 'It converts all state into a WebSocket broadcast.', 'It deletes the previous page from browser cache.', 'It encrypts component props using AES-256.', 'useTransition tells React that an update can be interrupted if higher-priority user events (like typing or clicking) occur.')
            ]
          }
        ]
      }
    ]
  },

  // 6. NEXT.JS
  {
    slug: 'nextjs',
    varName: 'nextjsCourse',
    title: 'Next.js & React Server Components: Zero to Mastery',
    shortTitle: 'Next.js',
    description: 'Master full-stack React with the Next.js App Router: React Server Components, Server Actions, 4-tier caching, routing, and Edge middleware.',
    category: 'Web Development',
    difficulty: 'intermediate',
    icon: 'code',
    color: '#000000',
    tags: ['Next.js', 'React Server Components', 'App Router', 'Server Actions', 'SSR', 'Edge'],
    chapters: [
      {
        title: 'Phase 1: App Router Architecture & Server Components',
        lessons: [
          {
            slug: 'app-router-and-server-components',
            title: 'App Router & React Server Components (RSC)',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Next.js App Router introduces React Server Components (RSC) by default. Server Components execute exclusively on the server, have direct access to backend databases and file systems, and send zero JavaScript to the client bundle.' },
              { type: 'code', language: 'tsx', code: `// app/users/page.tsx (Server Component by default)\nimport { db } from '@/lib/db';\n\nexport default async function UsersPage() {\n  const users = await db.users.findMany(); // Direct database query on server\n\n  return (\n    <main>\n      <h1>Active Engineers ({users.length})</h1>\n      <ul>{users.map(u => <li key={u.id}>{u.name} - {u.email}</li>)}</ul>\n    </main>\n  );\n}`, filename: 'app/users/page.tsx' },
              { type: 'keyPoints', points: ['Server Components reduce client bundle size to zero for static and server-fetched content.', 'Use "use client" directive at the top of files that require browser interactivity, state, or event handlers.', 'Server and Client Components can be seamlessly composed in the same layout tree.'] },
              makeQuiz('What is the primary architectural benefit of React Server Components (RSC) in Next.js?', 'They execute exclusively on the server and transmit zero JavaScript runtime code to the browser bundle.', 'They eliminate the need for SQL database indexes.', 'They compile React JSX into raw SVG graphics.', 'They run exclusively inside browser Service Workers.', 'Server Components ship HTML and serialized UI descriptions rather than JavaScript code to the client.')
            ]
          },
          {
            slug: 'server-actions-and-mutations',
            title: 'Server Actions & Data Mutations',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Server Actions allow client forms and event handlers to invoke asynchronous server functions directly without manually creating separate REST/API endpoints.' },
              { type: 'code', language: 'tsx', code: `// app/actions.ts\n'use server';\nimport { revalidatePath } from 'next/cache';\nimport { db } from '@/lib/db';\n\nexport async function createUser(formData: FormData) {\n  const name = formData.get('name') as string;\n  const email = formData.get('email') as string;\n  await db.users.create({ data: { name, email } });\n  revalidatePath('/users'); // Invalidate Next.js cache and refresh UI\n}`, filename: 'actions.ts' },
              { type: 'keyPoints', points: ['"use server" defines server action endpoints executable from client or server components.', 'Works progressively with native HTML forms even when JavaScript is disabled.', 'revalidatePath and revalidateTag invalidate cached data and re-render server layouts.'] },
              makeQuiz('What function is called inside a Next.js Server Action to purge cached page data and trigger an automatic UI refresh?', 'revalidatePath()', 'window.location.reload()', 'cache.flushAll()', 'document.clearCache()', 'revalidatePath() purges the server-side cache for a given route, re-rendering the latest data seamlessly.')
            ]
          },
          {
            slug: 'routing-layouts-and-nested-routes',
            title: 'File-Based Routing, Layouts & Parallel Routes',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Next.js maps directory structures inside the `app/` folder to URL routes. Nested layouts (`layout.tsx`) preserve component state and prevent full-page re-renders during route transitions.' },
              { type: 'code', language: 'tsx', code: `// app/dashboard/layout.tsx\nexport default function DashboardLayout({\n  children,\n  analytics,\n  feed,\n}: { children: React.ReactNode; analytics: React.ReactNode; feed: React.ReactNode }) {\n  return (\n    <div className="dashboard-shell">\n      <aside>Dashboard Navigation</aside>\n      <main>{children}</main>\n      <section>{analytics}</section>\n      <section>{feed}</section>\n    </div>\n  );\n}`, filename: 'layout.tsx' },
              { type: 'keyPoints', points: ['layout.tsx wraps child pages and persists state across sub-route navigations.', 'loading.tsx automatically wraps page components in React Suspense boundaries.', 'error.tsx catches runtime exceptions using React Error Boundaries.'] },
              makeQuiz('Which file in the Next.js App Router automatically creates a React Suspense boundary for its route segment?', 'loading.tsx', 'page.tsx', 'template.tsx', 'route.ts', 'loading.tsx creates an instant Suspense fallback UI while the page.tsx server component fetches data.')
            ]
          }
        ]
      },
      {
        title: 'Phase 2: Caching, Middleware & Production Optimization',
        lessons: [
          {
            slug: 'four-tier-caching-architecture',
            title: 'Next.js 4-Tier Caching Pipeline & ISR',
            duration: 30,
            blocks: [
              { type: 'paragraph', text: 'Next.js implements a 4-tier caching architecture: Request Memoization (per-render deduplication), Data Cache (cross-request fetch cache), Full Route Cache (static HTML/RSC payloads on server), and Router Cache (client in-memory navigation cache).' },
              { type: 'code', language: 'tsx', code: `// Fetch with time-based revalidation (Incremental Static Regeneration)\nexport async function getMarketPrices() {\n  const res = await fetch('https://api.example.com/prices', {\n    next: { revalidate: 60, tags: ['market-data'] }\n  });\n  return res.json();\n}`, filename: 'fetch-prices.ts' },
              { type: 'keyPoints', points: ['Request memoization prevents duplicate fetch calls within the same render pass.', 'Incremental Static Regeneration (ISR) serves cached static pages and updates them in the background.', 'Use export const dynamic = "force-dynamic" for real-time un-cached requests.'] },
              makeQuiz('In Next.js, what does setting next: { revalidate: 60 } on a fetch request accomplish?', 'It implements Incremental Static Regeneration, caching the response for 60 seconds before background re-fetching.', 'It causes the browser to refresh the screen every 60 milliseconds.', 'It aborts the network request after 60 seconds of inactivity.', 'It restricts the route to 60 visitors per minute.', 'Incremental Static Regeneration serves cached pages fast and regenerates them in the background after the time window expires.')
            ]
          },
          {
            slug: 'middleware-and-edge-runtimes',
            title: 'Edge Middleware & Request Interception',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Next.js Middleware (`middleware.ts`) executes at the Edge before a request reaches the route handler, enabling instant authentication redirects, geolocation routing, A/B testing, and security header injection.' },
              { type: 'code', language: 'typescript', code: `import { NextResponse } from 'next/server';\nimport type { NextRequest } from 'next/server';\n\nexport function middleware(request: NextRequest) {\n  const token = request.cookies.get('session-token');\n  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {\n    return NextResponse.redirect(new URL('/login', request.url));\n  }\n  return NextResponse.next();\n}\n\nexport const config = {\n  matcher: ['/dashboard/:path*', '/api/protected/:path*']\n};`, filename: 'middleware.ts' },
              { type: 'keyPoints', points: ['Middleware runs before cached assets and server routes are evaluated.', 'Uses the lightweight V8 Edge runtime for minimal cold-start latency.', 'The matcher config specifies exactly which routes trigger middleware.'] },
              makeQuiz('Where does Next.js Middleware execute relative to incoming HTTP requests?', 'At the Edge network layer before the request reaches page routes or cached responses.', 'Inside the client browser WebWorker thread.', 'Only after the client finishes downloading all JavaScript assets.', 'Inside the PostgreSQL database transaction log.', 'Middleware intercepts requests at the Edge before route rendering or page cache retrieval occurs.')
            ]
          },
          {
            slug: 'metadata-and-seo-optimization',
            title: 'Dynamic Metadata, Open Graph & SEO Best Practices',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Next.js provides native Metadata APIs to generate search-engine optimized title tags, meta descriptions, Open Graph preview cards, canonical URLs, and dynamic sitemaps.' },
              { type: 'code', language: 'tsx', code: `import type { Metadata } from 'next';\n\nexport async function generateMetadata({ params }: Props): Promise<Metadata> {\n  const course = await getCourse(params.slug);\n  return {\n    title: \`\${course.title} | Lumen\`,\n    description: course.description,\n    openGraph: {\n      images: [{ url: course.coverImage, width: 1200, height: 630 }],\n    },\n  };\n}`, filename: 'metadata.ts' },
              { type: 'keyPoints', points: ['generateMetadata dynamically queries data to generate custom social share cards.', 'Next.js automatically generates sitemap.xml and robots.txt via special route files.', 'Structured Schema.org JSON-LD data enhances search engine rich snippets.'] },
              makeQuiz('Which function is exported from a Next.js Server Component to dynamically generate title, description, and OpenGraph tags?', 'generateMetadata()', 'getStaticProps()', 'getServerSideSEO()', 'initMetadata()', 'generateMetadata() computes route-specific meta tags dynamically based on route parameters and fetched data.')
            ]
          }
        ]
      }
    ]
  },

  // 7. ANGULAR
  {
    slug: 'angular',
    varName: 'angularCourse',
    title: 'Angular Enterprise Architecture: Signals & Standalone',
    shortTitle: 'Angular',
    description: 'Master enterprise Angular architecture: Standalone components, Signals reactivity, Dependency Injection, Reactive Forms, and routing guards.',
    category: 'Web Development',
    difficulty: 'intermediate',
    icon: 'code',
    color: '#dd0031',
    tags: ['Angular', 'Signals', 'TypeScript', 'Dependency Injection', 'Enterprise', 'RxJS'],
    chapters: [
      {
        title: 'Phase 1: Standalone Components & Signals Reactivity',
        lessons: [
          {
            slug: 'standalone-components-and-templates',
            title: 'Standalone Components & Control Flow Syntax',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Modern Angular uses Standalone Components (eliminating legacy NgModules) and built-in control flow (@if, @for, @switch) for clean, high-performance declarative UI templates.' },
              { type: 'code', language: 'typescript', code: `@Component({\n  selector: 'app-user-list',\n  standalone: true,\n  template: \`\n    <h2>Engineering Team</h2>\n    @if (users().length > 0) {\n      <ul>\n        @for (user of users(); track user.id) {\n          <li>{{ user.name }} ({{ user.role }})</li>\n        }\n      </ul>\n    } @else {\n      <p>No active users found.</p>\n    }\n  \`\n})\nexport class UserListComponent {\n  users = signal<User[]>([]);\n}`, filename: 'user-list.component.ts' },
              { type: 'keyPoints', points: ['Standalone components declare their own imports directly without NgModules.', '@for requires an explicit track expression (track user.id) for DOM reconciliation.', 'Control flow syntax (@if, @for) compiles into fast, minimal JS instructions.'] },
              makeQuiz('What expression is strictly required in Angular modern @for template loops to track item identity?', 'track item.id', 'key="id"', 'ngForTrackBy', 'id="item"', '@for requires an explicit track expression to uniquely identify elements for efficient DOM recycling.')
            ]
          },
          {
            slug: 'signals-reactivity-and-computed',
            title: 'Signals Reactivity Engine (signal, computed, effect)',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Angular Signals provide fine-grained, glitch-free reactivity. Unlike Zone.js dirty-checking which inspects the entire component tree, Signals notify only the exact DOM nodes and computed values that depend on updated state.' },
              { type: 'code', language: 'typescript', code: `import { Component, signal, computed, effect } from '@angular/core';\n\n@Component({ standalone: true, template: \`<h3>Total: \${{ total() }}</h3>\` })\nexport class CartComponent {\n  price = signal(100);\n  quantity = signal(2);\n\n  // Derived reactive value (auto-cached)\n  total = computed(() => this.price() * this.quantity());\n\n  constructor() {\n    effect(() => {\n      console.log('Cart updated. New total:', this.total());\n    });\n  }\n}`, filename: 'cart.component.ts' },
              { type: 'keyPoints', points: ['signal() holds a writable reactive state value.', 'computed() creates a memoized derived signal that re-evaluates only when dependencies change.', 'Signals enable fine-grained DOM updates without full-tree Zone.js change detection.'] },
              makeQuiz('What is a key advantage of Angular Signals over legacy Zone.js change detection?', 'Signals enable fine-grained, localized reactivity so only the exact DOM nodes dependent on changed signals update.', 'Signals convert all components into Web Workers.', 'Signals eliminate the need for TypeScript compilation.', 'Signals store all component state in MongoDB.', 'Signals track dependencies at the primitive level, eliminating the overhead of checking the entire component tree on every event.')
            ]
          },
          {
            slug: 'dependency-injection-and-services',
            title: 'Dependency Injection (DI) & Injectable Services',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Angular features a powerful hierarchical Dependency Injection (DI) system. Services marked with `@Injectable({ providedIn: "root" })` exist as application-wide singletons, injectable via the modern `inject()` function.' },
              { type: 'code', language: 'typescript', code: `@Injectable({ providedIn: 'root' })\nexport class AnalyticsService {\n  private http = inject(HttpClient);\n\n  trackEvent(event: string, payload: Record<string, any>) {\n    return this.http.post('/api/analytics', { event, payload, timestamp: Date.now() });\n  }\n}`, filename: 'analytics.service.ts' },
              { type: 'keyPoints', points: ['inject(Token) provides functional dependency injection without constructor boilerplate.', 'providedIn: "root" enables automatic tree-shaking for unused services.', 'Hierarchical injectors allow scoping service instances to specific routes or component subtrees.'] },
              makeQuiz('What does @Injectable({ providedIn: "root" }) achieve in an Angular service?', 'It registers the service as an application-wide singleton that is automatically tree-shakable if never imported.', 'It forces the service to execute on the server.', 'It compiles the service into a native iOS binary.', 'It bypasses all HTTP security CORS restrictions.', 'providedIn: "root" configures root-level singleton availability while allowing bundlers to tree-shake the service if unreferenced.')
            ]
          }
        ]
      },
      {
        title: 'Phase 2: Reactive Forms, Routing & Enterprise Patterns',
        lessons: [
          {
            slug: 'reactive-forms-and-validation',
            title: 'Reactive Forms, FormBuilder & Custom Validators',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Angular Reactive Forms provide synchronous, immutable access to form data streams, explicit validation schemas, and reactive status observables.' },
              { type: 'code', language: 'typescript', code: `@Component({ standalone: true, imports: [ReactiveFormsModule], template: \`...\` })\nexport class RegisterComponent {\n  private fb = inject(NonNullableFormBuilder);\n\n  form = this.fb.group({\n    username: ['', [Validators.required, Validators.minLength(3)]],\n    email: ['', [Validators.required, Validators.email]],\n  });\n\n  onSubmit() {\n    if (this.form.valid) console.log('Payload:', this.form.getRawValue());\n  }\n}`, filename: 'register.component.ts' },
              { type: 'keyPoints', points: ['NonNullableFormBuilder produces strictly typed form models without unexpected null values.', 'FormControls expose valueChanges and statusChanges observables.', 'Custom validators return ValidationErrors | null.'] },
              makeQuiz('What object structure must an Angular synchronous Validator function return when validation fails?', 'A ValidationErrors key-value object describing the error, or null if valid.', 'A boolean true value.', 'A Promise rejecting with string message.', 'A numeric error code integer.', 'Validators return null when valid, or a ValidationErrors map (e.g. { minLength: { required: 3, actual: 1 } }) when invalid.')
            ]
          },
          {
            slug: 'routing-and-functional-guards',
            title: 'Routing, Functional Guards & Lazy Loading',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Angular router supports lazy loading standalone components (`loadComponent: () => import(...)`) and lightweight functional route guards (`canActivate: [authGuard]`).' },
              { type: 'code', language: 'typescript', code: `export const authGuard: CanActivateFn = (route, state) => {\n  const authService = inject(AuthService);\n  const router = inject(Router);\n  return authService.isAuthenticated() ? true : router.parseUrl('/login');\n};\n\nexport const routes: Routes = [\n  {\n    path: 'admin',\n    canActivate: [authGuard],\n    loadComponent: () => import('./admin/admin.component').then(m => m.AdminComponent)\n  }\n];`, filename: 'app.routes.ts' },
              { type: 'keyPoints', points: ['loadComponent enables route-level code splitting into separate JS chunks.', 'Functional guards (CanActivateFn) replace verbose class-based guards.', 'Guards can return boolean, UrlTree, or observables of boolean/UrlTree.'] },
              makeQuiz('What is the modern Angular approach for creating route guards like authentication checks?', 'Writing a lightweight functional guard of type CanActivateFn using inject().', 'Subclassing the AngularJS $routeProvider controller.', 'Writing a custom Webpack loader plugin.', 'Configuring an XML route manifest in index.html.', 'Angular provides functional guards (CanActivateFn) that leverage inject() directly without class boilerplate.')
            ]
          },
          {
            slug: 'http-client-and-interceptors',
            title: 'HttpClient, Functional Interceptors & RxJS',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Angular `HttpClient` provides a reactive API for HTTP communication. Functional interceptors (`HttpInterceptorFn`) intercept requests to attach JWT authentication tokens, log telemetry, or handle global error status codes.' },
              { type: 'code', language: 'typescript', code: `export const authInterceptor: HttpInterceptorFn = (req, next) => {\n  const token = inject(AuthService).getToken();\n  const authReq = token \n    ? req.clone({ headers: req.headers.set('Authorization', \`Bearer \${token}\`) })\n    : req;\n  return next(authReq);\n};`, filename: 'auth.interceptor.ts' },
              { type: 'keyPoints', points: ['HttpRequest objects are immutable; use req.clone() to modify headers or parameters.', 'Interceptors form a pipeline processing requests outgoing and responses incoming.', 'provideHttpClient(withInterceptors([authInterceptor])) configures global interception.'] },
              makeQuiz('Why must HttpRequest objects be modified via req.clone() inside an Angular HTTP interceptor?', 'Because HttpRequest objects are immutable by design to prevent race conditions across interceptor pipelines.', 'Because JavaScript deletes mutated objects from RAM.', 'Because clone() automatically converts HTTP requests to WebSocket frames.', 'To enable multi-threading on the V8 engine.', 'Immutability ensures that each interceptor in the chain receives a consistent, uncorrupted request object.')
            ]
          }
        ]
      }
    ]
  },

  // 8. VUE.JS
  {
    slug: 'vue',
    varName: 'vueCourse',
    title: 'Vue 3 & Composition API: Architecture & State',
    shortTitle: 'Vue 3',
    description: 'Master Vue 3 architecture: Composition API, script setup, Proxy-based reactivity, Pinia state stores, and Vue Router.',
    category: 'Web Development',
    difficulty: 'beginner',
    icon: 'code',
    color: '#42b883',
    tags: ['Vue 3', 'Composition API', 'Pinia', 'Reactivity', 'Vite', 'Frontend'],
    chapters: [
      {
        title: 'Phase 1: Composition API & Reactivity Engine',
        lessons: [
          {
            slug: 'composition-api-and-script-setup',
            title: 'Composition API, <script setup> & ref/reactive',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Vue 3 Composition API organizes component logic by feature rather than Options API object sections. The `<script setup>` syntax is a compile-time syntactic sugar that provides cleaner, high-performance components.' },
              { type: 'code', language: 'html', code: `<script setup lang="ts">\nimport { ref, computed } from 'vue';\n\nconst count = ref(0);\nconst doubleCount = computed(() => count.value * 2);\n\nfunction increment() {\n  count.value++;\n}\n</script>\n\n<template>\n  <button @click="increment">\n    Count: {{ count }} (Double: {{ doubleCount }})\n  </button>\n</template>`, filename: 'Counter.vue' },
              { type: 'keyPoints', points: ['ref() holds reactive primitives or objects, accessed via .value in script and unwrapped in templates.', 'reactive() wraps objects in ES6 Proxies directly.', '<script setup> eliminates boilerplate returns and executes once per component creation.'] },
              makeQuiz('How is a Vue ref accessed in <script setup> code versus inside the <template>?', 'Using .value in script code, and automatically unwrapped without .value inside the template.', 'Without .value everywhere in both script and template.', 'Using .get() in script and .read() in template.', 'Using $ref() everywhere.', 'Vue automatically unwraps refs in template expressions so .value is only required when authoring script logic.')
            ]
          },
          {
            slug: 'vue-reactivity-internals-proxies',
            title: 'Proxy Reactivity Internals & Dependency Tracking',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Vue 3 uses JavaScript `Proxy` objects to intercept property access (get: track effect) and mutation (set: trigger effect). This enables native detection of added/deleted properties and array index mutations.' },
              { type: 'code', language: 'typescript', code: `// Simplified mental model of Vue 3 Proxy Reactivity\nfunction reactive<T extends object>(target: T): T {\n  return new Proxy(target, {\n    get(obj, key, receiver) {\n      track(obj, key); // Record active effect in dependency map\n      return Reflect.get(obj, key, receiver);\n    },\n    set(obj, key, value, receiver) {\n      const result = Reflect.set(obj, key, value, receiver);\n      trigger(obj, key); // Run all dependent effects and re-render\n      return result;\n    }\n  });\n}`, filename: 'reactivity-internals.ts' },
              { type: 'keyPoints', points: ['Proxy traps (get/set) automatically establish dependency graphs.', 'watchEffect() immediately runs and tracks dependencies; watch() lazily tracks explicit sources.', 'shallowRef() skips deep proxying for large datasets to maximize performance.'] },
              makeQuiz('What JavaScript mechanism does Vue 3 use to intercept property reads and mutations for reactivity?', 'ES6 Proxy objects and Reflect APIs.', 'Object.observe() legacy methods.', 'Polling interval loops inside requestAnimationFrame.', 'WebAssembly memory traps.', 'Vue 3 wraps reactive state in ES6 Proxies, tracking effects during get traps and triggering updates during set traps.')
            ]
          },
          {
            slug: 'custom-composables-and-reusability',
            title: 'Authoring Custom Composables',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Composables are functions that leverage Vue Composition API to encapsulate and share stateful logic across components (e.g. mouse tracking, API fetching, local storage synchronization).' },
              { type: 'code', language: 'typescript', code: `import { ref, onMounted, onUnmounted } from 'vue';\n\nexport function useOnlineStatus() {\n  const isOnline = ref(navigator.onLine);\n\n  const updateStatus = () => (isOnline.value = navigator.onLine);\n\n  onMounted(() => {\n    window.addEventListener('online', updateStatus);\n    window.addEventListener('offline', updateStatus);\n  });\n\n  onUnmounted(() => {\n    window.removeEventListener('online', updateStatus);\n    window.removeEventListener('offline', updateStatus);\n  });\n\n  return { isOnline };\n}`, filename: 'useOnlineStatus.ts' },
              { type: 'keyPoints', points: ['Composables start with "use" naming convention (e.g. useOnlineStatus).', 'Can accept refs or getters as arguments to react to reactive input changes.', 'Encapsulates lifecycle hooks (onMounted, onUnmounted) cleanly.'] },
              makeQuiz('What is the naming convention for Vue Composables that encapsulate stateful logic?', 'Function names starting with "use" (e.g. useFetch, useStorage).', 'Function names starting with "$vue".', 'Class names ending with "Mixin".', 'Variable names starting with "__".', 'The "use" prefix denotes a composable function that uses Composition API primitives.')
            ]
          }
        ]
      },
      {
        title: 'Phase 2: Pinia Stores, Routing & Performance',
        lessons: [
          {
            slug: 'pinia-state-management',
            title: 'Pinia: Modern Modular State Stores',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Pinia is the official, type-safe state management library for Vue 3. It replaces Vuex with a streamlined API without mutations, offering full TypeScript autocomplete and modular store splitting.' },
              { type: 'code', language: 'typescript', code: `import { defineStore } from 'pinia';\nimport { ref, computed } from 'vue';\n\nexport const useCartStore = defineStore('cart', () => {\n  const items = ref<CartItem[]>([]);\n  \n  const totalPrice = computed(() => \n    items.value.reduce((sum, item) => sum + item.price * item.quantity, 0)\n  );\n\n  function addItem(item: CartItem) {\n    const existing = items.value.find(i => i.id === item.id);\n    if (existing) existing.quantity++;\n    else items.value.push({ ...item, quantity: 1 });\n  }\n\n  return { items, totalPrice, addItem };\n});`, filename: 'cart.store.ts' },
              { type: 'keyPoints', points: ['Setup Stores use standard ref() for state and computed() for getters.', 'Pinia stores are modular and instantiate lazily when first used.', 'StoreToRefs() safely destructures state properties while preserving reactivity.'] },
              makeQuiz('Which Pinia helper function must be used when destructuring store state to prevent losing reactivity?', 'storeToRefs()', 'toRaw()', 'unref()', 'reactive()', 'storeToRefs() converts store properties into individual refs so destructuring preserves reactive binding.')
            ]
          },
          {
            slug: 'vue-router-and-navigation-guards',
            title: 'Vue Router 4 & Navigation Guards',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Vue Router 4 provides deep integration with Vue 3: dynamic routing, nested routes, route meta fields, and global beforeEach navigation guards for authentication.' },
              { type: 'code', language: 'typescript', code: `import { createRouter, createWebHistory } from 'vue-router';\nimport { useAuthStore } from '@/stores/auth';\n\nconst router = createRouter({\n  history: createWebHistory(),\n  routes: [\n    {\n      path: '/dashboard',\n      component: () => import('@/views/Dashboard.vue'),\n      meta: { requiresAuth: true }\n    }\n  ]\n});\n\nrouter.beforeEach((to, from) => {\n  const auth = useAuthStore();\n  if (to.meta.requiresAuth && !auth.isAuthenticated) {\n    return { path: '/login', query: { redirect: to.fullPath } };\n  }\n});`, filename: 'router.ts' },
              { type: 'keyPoints', points: ['createWebHistory() uses HTML5 pushState for clean URLs without hash tags.', 'beforeEach guards control, redirect, or abort navigation transitions.', 'route.meta stores custom metadata accessible across route guards.'] },
              makeQuiz('How does a Vue Router beforeEach guard redirect an unauthenticated user to the login page?', 'By returning a route location descriptor object (e.g. { path: "/login" }).', 'By throwing a fatal runtime Error.', 'By calling window.location.replace() synchronously.', 'By setting document.cookie to expired.', 'Returning a route object from beforeEach immediately cancels the target route and redirects to the specified location.')
            ]
          },
          {
            slug: 'vue-performance-and-teleport',
            title: 'Performance Optimization, Teleport & KeepAlive',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Vue 3 includes native architectural components for optimizing applications: `<Teleport>` to render modal dialogs directly into `document.body`, and `<KeepAlive>` to cache dynamic component instances in memory.' },
              { type: 'code', language: 'html', code: `<!-- Render modal outside parent DOM hierarchy directly into <body> -->\n<template>\n  <button @click="isOpen = true">Open Modal</button>\n  <Teleport to="body">\n    <div v-if="isOpen" class="modal-overlay">\n      <div class="modal-content">\n        <h3>Encapsulated Modal Dialog</h3>\n        <button @click="isOpen = false">Close</button>\n      </div>\n    </div>\n  </Teleport>\n</template>`, filename: 'Modal.vue' },
              { type: 'keyPoints', points: ['<Teleport to="target"> renders DOM nodes into arbitrary destinations while preserving component context.', '<KeepAlive> caches component state when switching tabs instead of destroying and recreating instances.', 'shallowRef skips nested proxy overhead for multi-megabyte datasets.'] },
              makeQuiz('What is the primary function of the <Teleport> component in Vue 3?', 'It renders a component template into a specified DOM node outside its parent hierarchy while retaining Vue context.', 'It transmits data via WebRTC to peer browsers.', 'It compiles templates into WebAssembly bytecode.', 'It transfers CSS styles into localStorage.', '<Teleport> moves rendered DOM nodes (like modals or tooltips) to body while keeping full reactivity and prop connections intact.')
            ]
          }
        ]
      }
    ]
  },

  // 9. SVELTE
  {
    slug: 'svelte',
    varName: 'svelteCourse',
    title: 'Svelte 5 & SvelteKit: Compiler Reactivity',
    shortTitle: 'Svelte',
    description: 'Master Svelte 5 and SvelteKit architecture: Compiler-driven reactivity, Runes ($state, $derived, $effect), server load functions, and form actions.',
    category: 'Web Development',
    difficulty: 'intermediate',
    icon: 'code',
    color: '#ff3e00',
    tags: ['Svelte', 'Svelte 5', 'Runes', 'SvelteKit', 'Reactivity', 'Compiler'],
    chapters: [
      {
        title: 'Phase 1: Svelte 5 Runes & Component Architecture',
        lessons: [
          {
            slug: 'compiler-reactivity-and-runes',
            title: 'Compiler Reactivity & Svelte 5 Runes ($state, $derived)',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Svelte is a compiler that transforms declarative components into surgical JavaScript DOM updates at build time, eliminating the runtime Virtual DOM overhead. Svelte 5 introduces universal Runes ($state, $derived, $effect) for consistent reactivity in both .svelte components and .svelte.js modules.' },
              { type: 'code', language: 'html', code: `<script lang="ts">\n  let count = $state(0);\n  let doubled = $derived(count * 2);\n\n  function increment() {\n    count += 1;\n  }\n</script>\n\n<button onclick={increment}>\n  Count: {count} (Doubled: {doubled})\n</button>`, filename: 'Counter.svelte' },
              { type: 'keyPoints', points: ['Svelte runs at compile time, outputting lightweight vanilla DOM manipulations.', '$state() declares fine-grained reactive state.', '$derived() automatically tracks reactive dependencies without explicit dependency arrays.'] },
              makeQuiz('How does Svelte achieve high runtime performance compared to traditional Virtual DOM frameworks?', 'It compiles components ahead-of-time into direct, surgical vanilla DOM manipulations with zero Virtual DOM overhead.', 'It runs all components inside the browser GPU shader compiler.', 'It replaces all JavaScript with WebAssembly binaries.', 'It prevents browser network requests completely.', 'Svelte shifts reactivity work from runtime Virtual DOM diffing into compile-time code generation.')
            ]
          },
          {
            slug: 'effects-props-and-snippets',
            title: '$effect, Component Props & Snippets',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'In Svelte 5, component props are declared with `$props()`, side-effects are synchronized using `$effect()`, and reusable template blocks are defined using Snippets.' },
              { type: 'code', language: 'html', code: `<script lang="ts">\n  interface Props {\n    title: string;\n    onSelect?: (id: string) => void;\n  }\n  let { title, onSelect }: Props = $props();\n\n  $effect(() => {\n    console.log('Document title synchronized:', title);\n    document.title = title;\n  });\n</script>\n\n<h1>{title}</h1>`, filename: 'Header.svelte' },
              { type: 'keyPoints', points: ['$props() destructures incoming props with strict TypeScript typing.', '$effect() runs after DOM updates and automatically re-executes when read state changes.', 'Snippets replace legacy slots with typed, parameterized template blocks.'] },
              makeQuiz('Which Svelte 5 Rune is used to synchronize side-effects (like modifying document.title or subscribing to listeners) with state changes?', '$effect()', '$derived()', '$state()', '$bind()', '$effect() runs after the DOM is rendered and re-executes whenever any reactive values read inside its body update.')
            ]
          },
          {
            slug: 'transitions-and-animations',
            title: 'Native CSS Transitions & Motion Directives',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Svelte provides first-class native transition directives (fade, slide, fly, scale) that smoothly animate elements entering and leaving the DOM without external animation libraries.' },
              { type: 'code', language: 'html', code: `<script>\n  import { fade, slide } from 'svelte/transition';\n  let visible = $state(true);\n</script>\n\n<button onclick={() => visible = !visible}>Toggle</button>\n\n{#if visible}\n  <div transition:slide={{ duration: 300 }} class="panel">\n    <p transition:fade>Smoothly animated entry and exit</p>\n  </div>\n{/if}`, filename: 'Transition.svelte' },
              { type: 'keyPoints', points: ['transition: applies during both mounting and unmounting.', 'in: and out: allow asymmetric entry and exit animations.', 'Svelte handles animating unmounting elements seamlessly before removing them from the DOM.'] },
              makeQuiz('What advantage does Svelte native transition directive provide when elements are conditionally removed from the DOM?', 'It automatically coordinates the exit animation before removing the DOM node from the document.', 'It forces the page to reload instantly.', 'It disables CSS transitions on mobile devices.', 'It converts HTML elements into canvas bitmaps.', 'Svelte pauses DOM node removal until the unmounting transition completes, eliminating abrupt layout pops.')
            ]
          }
        ]
      },
      {
        title: 'Phase 2: SvelteKit Full-Stack Architecture',
        lessons: [
          {
            slug: 'sveltekit-routing-and-load-functions',
            title: 'SvelteKit Routing & Universal Load Functions',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'SvelteKit is the official full-stack application framework for Svelte, featuring file-based routing (+page.svelte) and type-safe data loading functions (+page.ts / +page.server.ts).' },
              { type: 'code', language: 'typescript', code: `// src/routes/courses/[slug]/+page.server.ts\nimport { error } from '@sveltejs/kit';\nimport type { PageServerLoad } from './$types';\nimport { db } from '$lib/db';\n\nexport const load: PageServerLoad = async ({ params }) => {\n  const course = await db.course.findUnique({ where: { slug: params.slug } });\n  if (!course) throw error(404, 'Course not found');\n  return { course };\n};`, filename: '+page.server.ts' },
              { type: 'keyPoints', points: ['+page.server.ts runs exclusively on the server with direct database/API access.', '+page.ts universal loaders run on server during SSR and in browser during client navigation.', 'Data returned from load() is strictly typed in +page.svelte via PageData.'] },
              makeQuiz('Where does a SvelteKit +page.server.ts load function execute?', 'Exclusively on the server environment, keeping database queries and private keys secure.', 'Inside the browser client memory.', 'Only on client mobile devices.', 'In the browser Service Worker cache.', '+page.server.ts executes exclusively on the server, guaranteeing that private database credentials and backend logic never leak to client bundles.')
            ]
          },
          {
            slug: 'form-actions-and-progressive-enhancement',
            title: 'SvelteKit Form Actions & Progressive Enhancement',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Form Actions in SvelteKit allow mutating data using native HTML <form> elements. The `use:enhance` action progressively enhances forms with client-side JavaScript without page reloads while maintaining full functionality when JS is disabled.' },
              { type: 'code', language: 'html', code: `<!-- src/routes/login/+page.svelte -->\n<script lang="ts">\n  import { enhance } from '$app/forms';\n  let { form } = $props();\n</script>\n\n<form method="POST" action="?/login" use:enhance>\n  <input name="email" type="email" required />\n  <input name="password" type="password" required />\n  <button type="submit">Sign In</button>\n  {#if form?.error}<p class="error">{form.error}</p>{/if}\n</form>`, filename: '+page.svelte' },
              { type: 'keyPoints', points: ['Form actions live in +page.server.ts under export const actions.', 'use:enhance intercepts form submissions with fetch for smooth SPA transitions.', 'Forms work out of the box without client-side JavaScript (Progressive Enhancement).'] },
              makeQuiz('What is the role of the use:enhance directive on a SvelteKit form?', 'It progressively enhances the form submission via client-side fetch while preserving standard HTML form fallbacks.', 'It encrypts form values with RSA keys.', 'It disables server-side validation checks.', 'It converts the form into a WebSocket feed.', 'use:enhance intercepts standard form posts to update the UI smoothly without a full browser page refresh.')
            ]
          },
          {
            slug: 'sveltekit-hooks-and-adapters',
            title: 'SvelteKit Server Hooks & Production Adapters',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'SvelteKit server hooks (`src/hooks.server.ts`) intercept incoming HTTP requests to handle authentication, cookies, and context injection. SvelteKit Adapters compile your application for deployment to Node.js, Vercel, Cloudflare, or static hosting.' },
              { type: 'code', language: 'typescript', code: `// src/hooks.server.ts\nimport type { Handle } from '@sveltejs/kit';\n\nexport const handle: Handle = async ({ event, resolve }) => {\n  const session = event.cookies.get('session');\n  event.locals.user = session ? await getUserFromSession(session) : null;\n  return resolve(event);\n};`, filename: 'hooks.server.ts' },
              { type: 'keyPoints', points: ['hooks.server.ts runs on every server request before loaders or actions.', 'event.locals passes per-request context safely across server load functions.', 'Adapters (@sveltejs/adapter-vercel, adapter-node) tailor output bundles to specific deployment targets.'] },
              makeQuiz('What SvelteKit mechanism intercepts every incoming server request to populate user session data into event.locals?', 'The handle hook in src/hooks.server.ts.', 'The root layout +layout.svelte component.', 'The svelte.config.js plugins array.', 'The browser localStorage listener.', 'The handle hook in hooks.server.ts intercepts all incoming requests to manage sessions, headers, and request context.')
            ]
          }
        ]
      }
    ]
  },

  // 10. TAILWIND CSS
  {
    slug: 'tailwindcss',
    varName: 'tailwindcssCourse',
    title: 'Tailwind CSS & Design Systems: Zero to Mastery',
    shortTitle: 'Tailwind CSS',
    description: 'Master utility-first CSS architecture: Design tokens, mobile-first breakpoints, dark mode variants, custom plugins, and JIT compilation.',
    category: 'Web Development',
    difficulty: 'beginner',
    icon: 'code',
    color: '#06b6d4',
    tags: ['TailwindCSS', 'CSS', 'Design Systems', 'Responsive', 'UI/UX', 'JIT'],
    chapters: [
      {
        title: 'Phase 1: Utility-First Architecture & Layouts',
        lessons: [
          {
            slug: 'utility-first-philosophy-and-core-tokens',
            title: 'Utility-First Philosophy & Design Token Scales',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Tailwind CSS replaces bespoke CSS class names with composable atomic utility classes built on a disciplined design token scale (spacing, typography, colors, shadows, and radii).' },
              { type: 'code', language: 'html', code: `<div class="max-w-md mx-auto p-6 rounded-2xl bg-white shadow-xl border border-slate-100 dark:bg-slate-900 dark:border-slate-800">\n  <h3 class="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Design Token Architecture</h3>\n  <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">Atomic utilities eliminate naming fatigue and CSS bloat.</p>\n  <button class="mt-4 px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-500 transition-colors">\n    Get Started\n  </button>\n</div>`, filename: 'Card.html' },
              { type: 'keyPoints', points: ['Atomic classes compose directly in markup without switching between HTML and CSS files.', 'Disciplined spacing scales (p-4 = 1rem = 16px) ensure visual consistency.', 'CSS bundle size stays flat regardless of application growth because utilities are reused.'] },
              makeQuiz('What is a major architectural advantage of utility-first CSS over writing bespoke custom CSS classes for every component?', 'CSS bundle size plateaus because the fixed set of utility classes is reused throughout the entire codebase.', 'Utility classes execute on the GPU shader pipeline.', 'Tailwind removes the need for HTML markup.', 'Utility classes only work inside React components.', 'Because utility classes are reused everywhere, your CSS bundle size remains small and constant even as the application grows.')
            ]
          },
          {
            slug: 'flexbox-grid-and-spacing-utilities',
            title: 'Flexbox, CSS Grid & Coordinate Spacing Utilities',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Tailwind provides intuitive utility shorthands for constructing complex Flexbox and Grid layouts: `flex`, `items-center`, `justify-between`, `grid`, `grid-cols-12`, `gap-6`, and `col-span-4`.' },
              { type: 'code', language: 'html', code: `<div class="grid grid-cols-1 md:grid-cols-3 gap-6">\n  <article class="p-5 rounded-xl border border-border bg-card flex flex-col justify-between">\n    <div>\n      <span class="text-xs font-semibold text-accent uppercase">Feature</span>\n      <h4 class="text-lg font-bold mt-1">High Throughput</h4>\n    </div>\n    <div class="mt-4 flex items-center justify-between text-xs text-muted">\n      <span>Verified</span>\n      <span>99.99%</span>\n    </div>\n  </article>\n</div>`, filename: 'grid-layout.html' },
              { type: 'keyPoints', points: ['gap-x and gap-y control grid and flex gutters uniformly.', 'col-span-N allows items to span specific numbers of grid columns.', 'flex-1 shorthand expands flex items to fill available container space.'] },
              makeQuiz('Which Tailwind class creates an auto-adjusting 3-column grid layout on medium screens and larger?', 'md:grid-cols-3', 'grid-columns-3', 'flex-col-3', 'table-cols-3', 'md:grid-cols-3 sets grid-template-columns: repeat(3, minmax(0, 1fr)) at the md breakpoint.')
            ]
          },
          {
            slug: 'mobile-first-responsive-breakpoints',
            title: 'Mobile-First Responsive Design & Modifiers',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Tailwind uses a strict mobile-first design strategy: un-prefixed utilities apply to all screen sizes, while breakpoint modifiers (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`) apply at and above that viewport min-width.' },
              { type: 'code', language: 'html', code: `<!-- Stack vertically on mobile, 2 columns on tablet (md), 4 columns on desktop (lg) -->\n<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 md:p-8">\n  <div class="p-4 bg-muted rounded-lg">Card 1</div>\n  <div class="p-4 bg-muted rounded-lg">Card 2</div>\n  <div class="p-4 bg-muted rounded-lg">Card 3</div>\n  <div class="p-4 bg-muted rounded-lg">Card 4</div>\n</div>`, filename: 'responsive.html' },
              { type: 'keyPoints', points: ['Unprefixed utilities target mobile viewports first (e.g. text-sm).', 'Breakpoint prefixes use min-width media queries (e.g. md:text-base applies at >=768px).', 'Never use breakpoint prefixes to target small screens — write mobile classes unprefixed.'] },
              makeQuiz('In Tailwind CSS mobile-first responsive design, what viewport widths does the class lg:flex apply to?', 'Viewport widths at or above the lg breakpoint (1024px and wider).', 'Only mobile screens smaller than 640px.', 'Only exact 1024px screens, disabling on 1280px.', 'All screens regardless of viewport size.', 'Tailwind responsive modifiers apply min-width media queries, targeting that breakpoint and all larger screen sizes.')
            ]
          }
        ]
      },
      {
        title: 'Phase 2: Dark Mode, Custom Themes & JIT Optimization',
        lessons: [
          {
            slug: 'dark-mode-and-variant-modifiers',
            title: 'Dark Mode Strategies & State Variant Modifiers',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Tailwind supports dark mode via system preference (`media`) or manual toggle (`class` / `selector`). Variant modifiers (`hover:`, `focus-visible:`, `active:`, `disabled:`, `group-hover:`) style interactive states cleanly.' },
              { type: 'code', language: 'html', code: `<div class="group p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-all">\n  <p class="text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 font-semibold">\n    Interactive Group Hover Card\n  </p>\n</div>`, filename: 'dark-mode.html' },
              { type: 'keyPoints', points: ['dark: selector variant applies styles when the dark class is present on an ancestor element.', 'group and group-hover allow styling children based on parent hover state.', 'focus-visible: styles keyboard navigation focus rings without showing on mouse click.'] },
              makeQuiz('How does the group and group-hover pattern work in Tailwind CSS?', 'Adding group on a parent container allows child elements with group-hover:... to change styles when the parent is hovered.', 'It combines multiple HTML elements into a single canvas bitmap.', 'It compiles CSS into a WebWorker thread.', 'It assigns global CSS variables to the document root.', 'The group utility marks a container so child elements can react to parent state changes via group-hover, group-focus, etc.')
            ]
          },
          {
            slug: 'custom-theme-configuration-and-plugins',
            title: 'Custom Themes, Design Tokens & Tailwind Config',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Tailwind can be customized via `tailwind.config.js` or modern CSS theme directives, defining brand colors, custom font families, border radii, and custom utility plugins.' },
              { type: 'code', language: 'javascript', code: `// tailwind.config.js\n/** @type {import('tailwindcss').Config} */\nexport default {\n  darkMode: 'class',\n  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],\n  theme: {\n    extend: {\n      colors: {\n        brand: { DEFAULT: '#6366f1', dark: '#4f46e5', light: '#818cf8' },\n        surface: 'var(--bg-surface)',\n      },\n      borderRadius: { '3xl': '1.5rem' },\n    },\n  },\n  plugins: [],\n};`, filename: 'tailwind.config.js' },
              { type: 'keyPoints', points: ['theme.extend adds custom tokens without overriding default Tailwind utility scales.', 'CSS variables can be referenced in color definitions for dynamic live theme switching.', 'The content array specifies which source files the JIT compiler scans for class names.'] },
              makeQuiz('Why should custom tokens be placed inside theme.extend rather than directly under theme in tailwind.config.js?', 'To add your custom tokens alongside Tailwind defaults rather than completely overriding and deleting the default palette.', 'Because theme directly under root is not valid JavaScript syntax.', 'To force the compiler to output inline style attributes.', 'To disable all CSS purge optimizations.', 'Placing tokens inside theme.extend preserves all built-in Tailwind utilities while merging your custom additions.')
            ]
          },
          {
            slug: 'jit-compiler-and-production-optimization',
            title: 'Just-In-Time (JIT) Engine & Arbitrary Values',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'The Tailwind Just-In-Time (JIT) compiler scans source files in milliseconds and generates the exact CSS rules needed on demand, supporting arbitrary value syntax (`w-[calc(100%-20px)]`, `bg-[#1da1f2]`).' },
              { type: 'code', language: 'html', code: `<!-- Arbitrary values for one-off design specifications -->\n<div class="top-[117px] w-[clamp(200px,50vw,600px)] bg-[#0f172a]/80 backdrop-blur-md">\n  <p class="text-[13px] leading-[1.6]">Precision JIT compiled styling</p>\n</div>`, filename: 'arbitrary-values.html' },
              { type: 'keyPoints', points: ['JIT compiler produces ultra-small production CSS files (typically <15kB gzipped).', 'Arbitrary values (e.g. top-[73px]) generate bespoke classes on the fly.', 'Never construct class names via string concatenation (e.g. "bg-" + color) because the JIT scanner cannot detect dynamic strings.'] },
              makeQuiz('Why must Tailwind class names always be written as complete, unbroken string literals in source code?', 'Because the JIT compiler scans source files with static regex to find exact class names without executing JavaScript code.', 'Because browsers cannot parse CSS class names containing hyphens.', 'Because incomplete class names cause HTTP 500 server errors.', 'Because incomplete class names corrupt the git commit tree.', 'The JIT compiler uses static regex analysis to extract class names; dynamic string concatenation cannot be detected statically.')
            ]
          }
        ]
      }
    ]
  },

  // 11. NODE.JS
  {
    slug: 'nodejs',
    varName: 'nodejsCourse',
    title: 'Node.js & Express Architecture: REST APIs to Mastery',
    shortTitle: 'Node.js',
    description: 'Master Node.js runtime internals: Libuv event loop, streams and buffers, Express REST API middleware, JWT security, and Prisma ORM.',
    category: 'Web Development',
    difficulty: 'intermediate',
    icon: 'code',
    color: '#339933',
    tags: ['Node.js', 'Express', 'Backend', 'REST API', 'Streams', 'Libuv', 'JWT'],
    chapters: [
      {
        title: 'Phase 1: Runtime Internals, Libuv & Core Modules',
        lessons: [
          {
            slug: 'libuv-and-event-loop-architecture',
            title: 'Libuv, Event Loop & Single-Threaded Concurrency',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Node.js runs JavaScript on a single V8 thread, offloading asynchronous I/O (file system, network sockets, DNS, encryption) to the C++ Libuv thread pool and operating system epoll/kqueue event demultiplexers.' },
              { type: 'code', language: 'javascript', code: `import fs from 'node:fs/promises';\n\n// Non-blocking asynchronous I/O offloaded to OS kernel / Libuv thread pool\nasync function readConfig() {\n  console.log('1: Initiating async read');\n  const data = await fs.readFile('./config.json', 'utf-8');\n  console.log('3: Read complete with length:', data.length);\n}\n\nreadConfig();\nconsole.log('2: Main thread continues executing immediately');`, filename: 'async-io.js' },
              { type: 'keyPoints', points: ['Node.js uses non-blocking event-driven I/O for massive request concurrency.', 'CPU-intensive cryptographic and file system tasks use the Libuv worker thread pool.', 'The main thread never blocks waiting for network packets or disk reads.'] },
              makeQuiz('How does Node.js handle thousands of concurrent network connections on a single JavaScript execution thread?', 'By offloading non-blocking I/O events to the operating system kernel and Libuv event loop.', 'By creating a new operating system process for every connected user.', 'By disabling all TLS encryption.', 'By storing requests in synchronous local disk files.', 'Non-blocking I/O and asynchronous event notification allow a single thread to service thousands of concurrent sockets.')
            ]
          },
          {
            slug: 'buffers-streams-and-pipes',
            title: 'Buffers, Binary Data & Streaming Pipelines',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Buffers allocate raw binary memory outside the V8 heap. Streams process large data chunk-by-chunk in memory, handling backpressure to prevent RAM exhaustion.' },
              { type: 'code', language: 'javascript', code: `import { createReadStream, createWriteStream } from 'node:fs';\nimport { createGzip } from 'node:zlib';\nimport { pipeline } from 'node:stream/promises';\n\n// Stream multi-gigabyte files with constant ~20MB RAM usage\nasync function compressFile(source, target) {\n  await pipeline(\n    createReadStream(source),\n    createGzip(),\n    createWriteStream(target)\n  );\n  console.log('Compression pipeline completed safely with backpressure management.');\n}`, filename: 'stream-pipeline.js' },
              { type: 'keyPoints', points: ['Streams keep memory usage constant regardless of multi-gigabyte payload sizes.', 'pipeline() handles error cleanup and backpressure automatically.', 'Buffers represent fixed-size raw memory allocations outside V8 garbage collection.'] },
              makeQuiz('Why is pipeline() preferred over stream.pipe() when chaining Node.js streams together?', 'pipeline() properly forwards errors, cleans up stream handles, and destroys dangling streams on failure.', 'stream.pipe() only works with text files.', 'pipeline() compiles the stream into C++ binary code.', 'stream.pipe() disables all network encryption.', 'pipeline() ensures proper error propagation and resource cleanup across the entire stream chain.')
            ]
          },
          {
            slug: 'event-emitter-and-process-lifecycle',
            title: 'EventEmitter & Process Lifecycle Management',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'The `EventEmitter` class is the core pattern powering Node.js networking, HTTP servers, and streams. Robust applications listen for OS termination signals (`SIGTERM`, `SIGINT`) to perform graceful shutdowns.' },
              { type: 'code', language: 'javascript', code: `import http from 'node:http';\n\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'application/json' });\n  res.end(JSON.stringify({ status: 'healthy', timestamp: Date.now() }));\n});\n\nserver.listen(3000);\n\n// Graceful shutdown on deployment termination\nprocess.on('SIGTERM', () => {\n  console.log('SIGTERM received. Closing active HTTP connections...');\n  server.close(() => {\n    console.log('HTTP server closed cleanly. Exiting process.');\n    process.exit(0);\n  });\n});`, filename: 'server.js' },
              { type: 'keyPoints', points: ['EventEmitter allows asynchronous pub/sub event broadcasting within a process.', 'Listen for SIGTERM and SIGINT to close open database pools and finish pending HTTP requests before exiting.', 'Unhandled exceptions should be logged before exiting with code 1.'] },
              makeQuiz('What is the purpose of listening for the SIGTERM signal in a production Node.js application?', 'To execute a graceful shutdown, stopping new connections and finishing in-flight requests before exiting.', 'To trigger an immediate hard kill of the operating system.', 'To automatically increase the RAM allocation of the server.', 'To reload the package.json dependencies.', 'SIGTERM notifies the application that it is being stopped (e.g. by Docker or Kubernetes), allowing graceful shutdown.')
            ]
          }
        ]
      },
      {
        title: 'Phase 2: Express REST APIs, Security & Databases',
        lessons: [
          {
            slug: 'express-middleware-pipeline',
            title: 'Express.js Architecture & Middleware Pipelines',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Express is a minimal, unopinionated routing and middleware web framework. In Express, request handling is structured as a pipeline of middleware functions: `(req, res, next) => void`.' },
              { type: 'code', language: 'javascript', code: `import express from 'express';\n\nconst app = express();\napp.use(express.json()); // Body parsing middleware\n\n// Custom logging middleware\napp.use((req, res, next) => {\n  const start = Date.now();\n  res.on('finish', () => {\n    console.log(\`\${req.method} \${req.url} - \${res.statusCode} (\${Date.now() - start}ms)\`);\n  });\n  next(); // Pass control to next middleware\n});\n\napp.get('/api/health', (req, res) => res.json({ ok: true }));`, filename: 'app.js' },
              { type: 'keyPoints', points: ['Middleware functions execute sequentially in the order declared with app.use().', 'Always call next() or send a response (res.json()) to prevent hanging client connections.', 'Error-handling middleware takes 4 arguments: (err, req, res, next).'] },
              makeQuiz('How many arguments does an Express.js error-handling middleware function accept to distinguish it from regular middleware?', '4 arguments: (err, req, res, next)', '2 arguments: (req, res)', '1 argument: (err)', '3 arguments: (req, res, next)', 'Express inspects function.length; exactly 4 arguments signals that the middleware is dedicated to catching errors.')
            ]
          },
          {
            slug: 'jwt-authentication-and-security',
            title: 'JWT Authentication, Password Hashing & Security',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Secure Node.js backend services enforce password hashing using bcrypt or argon2, issue cryptographically signed JSON Web Tokens (JWT) for stateless authentication, and protect headers using Helmet and CORS.' },
              { type: 'code', language: 'javascript', code: `import jwt from 'jsonwebtoken';\nimport bcrypt from 'bcrypt';\n\nconst SECRET_KEY = process.env.JWT_SECRET || 'fallback-secret';\n\nexport async function hashPassword(plain) {\n  return bcrypt.hash(plain, 12); // Salt rounds = 12\n}\n\nexport function generateToken(user) {\n  return jwt.sign({ sub: user.id, role: user.role }, SECRET_KEY, { expiresIn: '1h' });\n}\n\nexport function authMiddleware(req, res, next) {\n  const authHeader = req.headers.authorization;\n  if (!authHeader?.startsWith('Bearer ')) return res.status(401).json({ error: 'Unauthorized' });\n  try {\n    req.user = jwt.verify(authHeader.split(' ')[1], SECRET_KEY);\n    next();\n  } catch {\n    res.status(401).json({ error: 'Invalid or expired token' });\n  }\n}`, filename: 'auth.js' },
              { type: 'keyPoints', points: ['Never store plain text passwords — always use salted adaptive hashes (bcrypt/argon2).', 'JWT tokens are signed, not encrypted by default — do not store sensitive secrets in payload claims.', 'Set secure HTTP-only cookies to protect tokens against XSS theft.'] },
              makeQuiz('Why should JWT authentication tokens be stored in httpOnly cookies rather than browser localStorage in web applications?', 'httpOnly cookies cannot be accessed by client-side JavaScript, protecting tokens from Cross-Site Scripting (XSS) theft.', 'httpOnly cookies automatically disable server CORS headers.', 'localStorage has a 16-byte memory storage limit.', 'Cookies are automatically compiled into binary database records.', 'The httpOnly flag prevents client JavaScript scripts from reading the cookie, mitigating XSS token extraction attacks.')
            ]
          },
          {
            slug: 'database-orm-and-prisma',
            title: 'Relational Database Integration with Prisma ORM',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Prisma ORM provides type-safe database queries, automated schema migrations, and relational modeling across PostgreSQL, MySQL, and SQLite.' },
              { type: 'code', language: 'typescript', code: `import { PrismaClient } from '@prisma/client';\n\nconst prisma = new PrismaClient();\n\nexport async function getActiveEngineersWithCourses() {\n  return prisma.user.findMany({\n    where: { status: 'ACTIVE' },\n    include: { enrolledCourses: true },\n    orderBy: { createdAt: 'desc' },\n  });\n}`, filename: 'database.ts' },
              { type: 'keyPoints', points: ['Prisma generates TypeScript types automatically from your schema.prisma file.', 'Connection pooling prevents exhausting database connection limits.', 'Parameterized queries prevent SQL injection vulnerabilities automatically.'] },
              makeQuiz('How does Prisma ORM prevent SQL injection attacks in database queries?', 'It uses parameterized queries, treating all user inputs as safe data values rather than executable SQL code.', 'By compiling all database queries into WebAssembly.', 'By encrypting table column names with SHA-256.', 'By running all queries through browser ServiceWorkers.', 'Parameterized query templates ensure user inputs cannot alter SQL syntax or execute injected statements.')
            ]
          }
        ]
      }
    ]
  },

  // 12. NESTJS
  {
    slug: 'nestjs',
    varName: 'nestjsCourse',
    title: 'NestJS Enterprise Architecture: Microservices & DI',
    shortTitle: 'NestJS',
    description: 'Master enterprise TypeScript backend architecture with NestJS: Dependency Injection, Controllers, Providers, Pipes, Guards, and Microservices.',
    category: 'Web Development',
    difficulty: 'advanced',
    icon: 'code',
    color: '#e0234e',
    tags: ['NestJS', 'TypeScript', 'Dependency Injection', 'Backend', 'Microservices', 'Enterprise'],
    chapters: [
      {
        title: 'Phase 1: Modular Architecture & Dependency Injection',
        lessons: [
          {
            slug: 'modules-controllers-and-providers',
            title: 'Modules, Controllers & Inversion of Control (IoC)',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'NestJS is a structured enterprise backend framework built with TypeScript and Inversion of Control (IoC). Applications are structured into cohesive Modules containing Controllers (handling HTTP endpoints) and Providers (business logic services).' },
              { type: 'code', language: 'typescript', code: `@Controller('courses')\nexport class CoursesController {\n  constructor(private readonly coursesService: CoursesService) {}\n\n  @Get(':id')\n  async findOne(@Param('id') id: string) {\n    return this.coursesService.findById(id);\n  }\n}\n\n@Injectable()\nexport class CoursesService {\n  async findById(id: string) {\n    return { id, title: 'NestJS Architecture', lessons: 6 };\n  }\n}`, filename: 'courses.controller.ts' },
              { type: 'keyPoints', points: ['@Module() groups related controllers, providers, and exported services.', '@Controller() defines route paths and handles incoming HTTP requests.', 'The NestJS IoC container instantiates and injects provider dependencies automatically.'] },
              makeQuiz('What is the role of the NestJS Inversion of Control (IoC) container?', 'It manages the lifecycle and automatically injects service dependencies into controllers and providers.', 'It converts TypeScript into native iOS binaries.', 'It handles CSS stylesheet compilation.', 'It disables database connection timeouts.', 'The IoC container creates singletons, resolves constructor dependencies, and injects them automatically at runtime.')
            ]
          },
          {
            slug: 'custom-providers-and-lifecycle-hooks',
            title: 'Custom Providers, Scopes & Lifecycle Hooks',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'NestJS supports custom providers (`useValue`, `useClass`, `useFactory`), injection scopes (DEFAULT singleton, REQUEST-scoped, TRANSIENT), and lifecycle hooks (`onModuleInit`, `onApplicationShutdown`).' },
              { type: 'code', language: 'typescript', code: `export const DatabaseProvider = {\n  provide: 'DATABASE_CONNECTION',\n  useFactory: async (config: ConfigService) => {\n    const connection = await createDbPool(config.get('DB_URI'));\n    return connection;\n  },\n  inject: [ConfigService],\n};`, filename: 'database.provider.ts' },
              { type: 'keyPoints', points: ['useFactory allows asynchronous dependency creation using injected configuration values.', 'DEFAULT singleton scope shares one service instance across the entire application.', 'onModuleInit and onApplicationShutdown manage startup and clean teardown lifecycles.'] },
              makeQuiz('Which NestJS custom provider strategy is used when a provider requires asynchronous initialization logic with other injected dependencies?', 'useFactory with inject array', 'useValue', 'useExisting', 'useStatic', 'useFactory supports asynchronous factory functions that can accept injected services as arguments.')
            ]
          },
          {
            slug: 'configuration-and-dynamic-modules',
            title: 'Configuration Management & Dynamic Modules',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Dynamic modules (`forRoot`, `forFeature`) allow configuring reusable modules dynamically with environment settings (e.g. `ConfigModule.forRoot({ isGlobal: true })`).' },
              { type: 'code', language: 'typescript', code: `@Module({})\nexport class EmailModule {\n  static forRoot(options: EmailOptions): DynamicModule {\n    return {\n      module: EmailModule,\n      providers: [{ provide: 'EMAIL_OPTIONS', useValue: options }, EmailService],\n      exports: [EmailService],\n    };\n  }\n}`, filename: 'email.module.ts' },
              { type: 'keyPoints', points: ['Dynamic modules export custom provider definitions parameterized by incoming config objects.', 'isGlobal: true exposes module providers across all feature modules without re-importing.', 'Joi or Zod validation schemas validate environment variables on startup.'] },
              makeQuiz('What method convention is commonly implemented on dynamic NestJS modules to configure them globally at the root module?', 'forRoot()', 'init()', 'start()', 'configure()', 'The forRoot() static method configures and returns a DynamicModule instance with custom settings for the application.')
            ]
          }
        ]
      },
      {
        title: 'Phase 2: Request Lifecycle, Security & Microservices',
        lessons: [
          {
            slug: 'pipes-validation-and-dto',
            title: 'Pipes, DTOs & Class-Validator Sanitization',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'NestJS Pipes transform and validate incoming request payloads before they reach route handler methods. Combined with Data Transfer Objects (DTO) and `class-validator`, invalid payloads are rejected with structured HTTP 400 errors.' },
              { type: 'code', language: 'typescript', code: `import { IsString, IsEmail, MinLength } from 'class-validator';\n\nexport class CreateUserDto {\n  @IsString()\n  @MinLength(3)\n  readonly name: string;\n\n  @IsEmail()\n  readonly email: string;\n}\n\n@Post()\nasync create(@Body(new ValidationPipe({ whitelist: true })) dto: CreateUserDto) {\n  return this.usersService.create(dto);\n}`, filename: 'create-user.dto.ts' },
              { type: 'keyPoints', points: ['ValidationPipe automatically validates DTO class decorator constraints.', 'whitelist: true strips out any unexpected properties not declared on the DTO class.', 'Pipes can transform types (e.g. ParseIntPipe, ParseUUIDPipe).'] },
              makeQuiz('What security benefit does enabling whitelist: true provide in the NestJS ValidationPipe?', 'It strips away any unexpected properties sent in the request body that are not explicitly defined on the DTO.', 'It encrypts the payload using TLS.', 'It converts strings into uppercase letters.', 'It forces requests to come from verified IP addresses.', 'Whitelisting removes unmapped extra properties from request payloads, preventing malicious parameter injection attacks.')
            ]
          },
          {
            slug: 'guards-and-role-based-authorization',
            title: 'Guards, ExecutionContext & Role-Based Access (RBAC)',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'NestJS Guards implement `CanActivate` to determine whether a request has permission to access a route handler, inspecting JWT tokens, session cookies, and `@Roles()` custom metadata via the `Reflector` service.' },
              { type: 'code', language: 'typescript', code: `@Injectable()\nexport class RolesGuard implements CanActivate {\n  constructor(private reflector: Reflector) {}\n\n  canActivate(context: ExecutionContext): boolean {\n    const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());\n    if (!requiredRoles) return true;\n    const { user } = context.switchToHttp().getRequest();\n    return requiredRoles.includes(user?.role);\n  }\n}`, filename: 'roles.guard.ts' },
              { type: 'keyPoints', points: ['Guards execute after middleware but before interceptors and pipes.', 'ExecutionContext abstracts HTTP, Microservice, and WebSocket transport contexts.', 'Reflector reads custom metadata attached via custom decorators.'] },
              makeQuiz('What method must a NestJS Guard implement to determine if a request should be permitted to proceed?', 'canActivate(context: ExecutionContext): boolean | Promise<boolean>', 'handle(req, res): void', 'validate(dto): boolean', 'authorize(token): string', 'canActivate() returns a boolean or promise of boolean indicating whether the incoming request is authorized.')
            ]
          },
          {
            slug: 'interceptors-filters-and-microservices',
            title: 'Interceptors, Exception Filters & Microservices',
            duration: 25,
            blocks: [
              { type: 'paragraph', text: 'Interceptors bind extra logic before/after method execution (e.g. response transformation, caching, performance logging). Exception Filters catch unhandled exceptions to format standardized error JSON responses. NestJS also natively supports Microservice message patterns (Redis, RabbitMQ, Kafka, gRPC).' },
              { type: 'code', language: 'typescript', code: `@Catch()\nexport class AllExceptionsFilter implements ExceptionFilter {\n  catch(exception: unknown, host: ArgumentsHost) {\n    const ctx = host.switchToHttp();\n    const response = ctx.getResponse<Response>();\n    const status = exception instanceof HttpException ? exception.getStatus() : 500;\n\n    response.status(status).json({\n      statusCode: status,\n      timestamp: new Date().toISOString(),\n      message: (exception as Error).message || 'Internal Server Error',\n    });\n  }\n}`, filename: 'exception.filter.ts' },
              { type: 'keyPoints', points: ['Interceptors use RxJS operators (map, tap, catchError) to transform outgoing response streams.', 'Exception filters capture unhandled runtime errors globally.', 'NestJS Microservices communicate using message patterns (@MessagePattern) across message brokers.'] },
              makeQuiz('Which NestJS component is specifically designed to catch unhandled errors across controllers and format consistent JSON error responses?', 'Exception Filters (@Catch)', 'Pipes', 'Middleware', 'Providers', 'Exception Filters catch thrown exceptions and format standardized JSON error payloads with proper HTTP status codes.')
            ]
          }
        ]
      }
    ]
  }
]

console.log('Writing enhanced 12-course web curriculum...')
COURSES.forEach((c) => {
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
