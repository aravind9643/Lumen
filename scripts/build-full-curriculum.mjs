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
  }
]

console.log('Writing enhanced curriculum...')
COURSES.forEach((c) => {
  const filePath = join(tutorialsDir, `${c.slug}.ts`)
  const code = `import type { Tutorial } from '../types'\n\nexport const ${c.varName}: Tutorial = ${JSON.stringify(c, null, 2)}\n`
  writeFileSync(filePath, code, 'utf-8')
  console.log(`Updated ${c.slug}.ts with ${c.chapters.reduce((a, ch) => a + ch.lessons.length, 0)} lessons.`)
})
