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
// Course 10: Tailwind CSS (8 Lessons)
// -------------------------------------------------------------
const tailwindcssCourse = {
  slug: 'tailwindcss',
  varName: 'tailwindcssCourse',
  title: 'Tailwind CSS & Design Systems: Zero to Mastery',
  shortTitle: 'Tailwind CSS',
  description: 'A complete, beginner-to-mastery path covering utility-first CSS architecture, spacing tokens, typography, flexbox and grid utilities, responsive breakpoints, interactive state variants, and dark mode.',
  category: 'Web Development',
  difficulty: 'beginner',
  icon: 'code',
  color: '#06b6d4',
  tags: ['TailwindCSS', 'CSS', 'Design Systems', 'Responsive', 'UI/UX', 'JIT'],
  chapters: [
    {
      title: 'Chapter 1: Utility-First Architecture & Design Tokens (Beginner)',
      lessons: [
        {
          slug: 'what-is-tailwind-and-utility-first-philosophy',
          title: 'What is Tailwind CSS & Utility-First Philosophy?',
          description: 'Understand the problems with traditional custom CSS class naming, and learn how atomic utility classes increase development speed and eliminate CSS bloat.',
          duration: 20,
          blocks: [
            { type: 'callout', kind: 'info', text: 'Level: Beginner | Prerequisites: CSS Basics' },
            { type: 'paragraph', text: 'In traditional CSS, you write custom class names (like `.author-bio-card-container-wrapper`) in separate CSS files. This leads to class naming fatigue, CSS file bloat over time, and fear of deleting old styles. Tailwind CSS is a utility-first CSS framework packed with single-purpose utility classes (like `flex`, `pt-4`, `text-center`, `bg-blue-500`) that you compose directly in your HTML markup.' },
            { type: 'definition', term: 'Utility-First CSS', plain: 'An architectural approach where you build custom designs by composing atomic, single-purpose utility classes directly in markup instead of writing custom CSS rules.', formal: 'Atomic CSS Design Token Methodology' },
            { type: 'analogy', title: 'The Pre-Fabricated Building Blocks Metaphor', text: 'Traditional CSS is like hand-mixing concrete, cutting every single piece of lumber, and firing custom bricks for every house you build. Tailwind CSS is an organized workshop of standardized, pre-engineered modular building blocks that snap together perfectly every time.' },
            { type: 'code', language: 'html', code: `<!-- Beautiful card built completely with Tailwind atomic utilities without writing 1 line of custom CSS -->\n<div class="max-w-sm mx-auto p-6 bg-white rounded-2xl shadow-lg border border-slate-100">\n  <h3 class="text-xl font-bold text-slate-900">Tailwind Mastery</h3>\n  <p class="mt-2 text-slate-600 text-sm">Build modern websites without ever leaving your HTML.</p>\n  <button class="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors">\n    Get Started\n  </button>\n</div>`, filename: 'Card.html' },
            { type: 'keyPoints', points: ['No more naming fatigue inventing arbitrary CSS class names.', 'CSS files stop growing because the same utility classes are reused everywhere.', 'Safe changes: editing a component HTML will never accidentally break styles on another page.'] },
            makeQuiz('What is the major architectural advantage of utility-first CSS over writing bespoke custom CSS classes?', 'Your CSS bundle size stays tiny and constant over time because utility classes are reused across all pages.', 'Utility classes run inside the GPU.', 'Tailwind replaces all HTML tags with SVG.', 'Tailwind eliminates the need for JavaScript.', 'Because utility classes are reused everywhere, your CSS bundle size plateaus rather than growing with every new feature.')
          ]
        },
        {
          slug: 'spacing-sizing-and-layout-utilities',
          title: 'Spacing, Sizing & Layout Scales',
          description: 'Master the Tailwind numeric scale for padding (p-4), margin (m-4), width (w-full), height (h-screen), and max-width.',
          duration: 20,
          blocks: [
            { type: 'paragraph', text: 'Tailwind spacing utilities are based on a disciplined 4px numeric scale: `1` = 0.25rem (4px), `4` = 1rem (16px), `8` = 2rem (32px). This creates visual consistency across margins, paddings, and widths.' },
            { type: 'code', language: 'html', code: `<div class="p-6 m-4 w-full max-w-md h-64 bg-slate-100 rounded-xl">\n  <!-- p-6 = padding 24px (1.5rem) -->\n  <!-- m-4 = margin 16px (1rem) -->\n  <!-- w-full = width: 100% -->\n  <!-- max-w-md = max-width: 28rem (448px) -->\n  <!-- h-64 = height: 16rem (256px) -->\n  <p class="text-slate-800">Disciplined Design Scale</p>\n</div>`, filename: 'spacing.html' },
            { type: 'keyPoints', points: ['p-4 applies 16px padding on all 4 sides; px-4 applies horizontal, py-4 vertical.', 'm-auto centers block elements with automatic margins.', 'max-w-screen-xl sets comfortable desktop container widths.'] },
            makeQuiz('In Tailwind standard spacing scale, what CSS padding value does the class p-4 produce?', '1rem (16px)', '4px', '40px', '4rem (64px)', 'In Tailwind, 1 spacing unit equals 0.25rem (4px), so p-4 equals 1rem (16px).')
          ]
        },
        {
          slug: 'typography-and-color-palette',
          title: 'Typography & Curated Color Systems',
          description: 'Style text with text sizes (text-sm, text-2xl), font weights (font-bold), line heights (leading-relaxed), and colors from 50 (lightest) to 950 (darkest).',
          duration: 20,
          blocks: [
            { type: 'paragraph', text: 'Tailwind provides a professionally tuned color palette. Colors range numerically from 50 (subtle tint) through 500 (standard vibrant) to 950 (deep dark shade).' },
            { type: 'code', language: 'html', code: `<article class="prose max-w-none">\n  <h1 class="text-3xl font-extrabold tracking-tight text-slate-900">\n    Software Engineering from First Principles\n  </h1>\n  <p class="mt-2 text-base text-slate-600 leading-relaxed">\n    Tailwind includes carefully curated contrast ratios to ensure WCAG accessibility.\n  </p>\n  <span class="inline-block px-3 py-1 text-xs font-semibold text-indigo-700 bg-indigo-50 rounded-full">\n    Featured Guide\n  </span>\n</article>`, filename: 'typography.html' },
            { type: 'keyPoints', points: ['Color classes follow property-color-shade syntax (e.g. text-blue-600, bg-slate-900).', 'Font sizes automatically configure corresponding line-heights.', 'Use text-balance to prevent awkward orphan words in headlines.'] },
            makeQuiz('What do the numeric shade numbers (e.g., 50 vs 500 vs 900) indicate in the Tailwind color palette?', 'Lower numbers (50-100) are very light tints; higher numbers (800-950) are deep dark shades.', 'The pixel resolution of the color.', 'The font size of the text.', 'The animation speed in milliseconds.', 'The 50–950 numerical scale organizes colors from lightest background tints to deepest dark shades.')
          ]
        },
        {
          slug: 'borders-radii-and-shadow-effects',
          title: 'Borders, Border Radii & Elevation Shadows',
          description: 'Style rounded corners (rounded-lg, rounded-full), borders (border, border-slate-200), and elevation drop shadows (shadow-md, shadow-xl).',
          duration: 20,
          blocks: [
            { type: 'paragraph', text: 'Tailwind elevation utilities (`shadow-sm`, `shadow-md`, `shadow-xl`) and corner radii (`rounded-md`, `rounded-2xl`, `rounded-full`) create modern, tactile UI cards and buttons.' },
            { type: 'code', language: 'html', code: `<button class="px-5 py-2.5 rounded-full border border-indigo-600 bg-white text-indigo-600 font-semibold shadow-md hover:bg-indigo-50 transition-shadow">\n  Interactive Pill Button\n</button>`, filename: 'button.html' },
            { type: 'keyPoints', points: ['rounded-full creates circular avatars or pill-shaped buttons.', 'shadow-lg creates depth and visual hierarchy.', 'Use ring-2 ring-indigo-500 for accessible focus indicators.'] },
            makeQuiz('Which Tailwind class creates a perfectly pill-shaped button or circular avatar?', 'rounded-full', 'border-circle', 'radius-pill', 'corner-round', 'rounded-full applies border-radius: 9999px to create completely rounded pill buttons or circles.')
          ]
        }
      ]
    },
    {
      title: 'Chapter 2: Layouts, Responsive Design & Dark Mode (Mastery)',
      lessons: [
        {
          slug: 'flexbox-utilities-in-tailwind',
          title: 'Flexbox Utilities: Alignment, Justification & Gap',
          description: 'Construct 1-dimensional layouts with flex, flex-col, items-center, justify-between, and gap-4.',
          duration: 25,
          blocks: [
            { type: 'paragraph', text: 'Flexbox in Tailwind is fast and intuitive: add `flex` to the parent, then configure `justify-between`, `items-center`, and `gap-6` without writing custom CSS selectors.' },
            { type: 'code', language: 'html', code: `<!-- Responsive Navigation Header -->\n<nav class="flex items-center justify-between p-4 bg-white border-b border-slate-200">\n  <div class="flex items-center gap-3">\n    <img src="/logo.svg" class="w-8 h-8" alt="Lumen Logo">\n    <span class="font-bold text-lg text-slate-900">Lumen</span>\n  </div>\n  \n  <div class="flex items-center gap-4">\n    <a href="/courses" class="text-sm font-medium text-slate-600 hover:text-slate-900">Courses</a>\n    <a href="/login" class="px-3 py-1.5 text-sm font-medium text-white bg-indigo-600 rounded-md">Log In</a>\n  </div>\n</nav>`, filename: 'nav.html' },
            { type: 'keyPoints', points: ['flex activates flexbox on the container.', 'justify-between spreads items across the main axis.', 'gap-N applies uniform gutters between children.'] },
            makeQuiz('Which Tailwind utility class vertically centers items across the cross axis inside a Flex container?', 'items-center', 'justify-center', 'align-middle', 'content-center', 'items-center sets align-items: center in CSS, centering children vertically in a row container.')
          ]
        },
        {
          slug: 'css-grid-utilities-in-tailwind',
          title: 'CSS Grid Utilities: grid-cols & Column Spanning',
          description: 'Build 2D responsive grids with grid, grid-cols-12, col-span-4, and gap utilities.',
          duration: 25,
          blocks: [
            { type: 'paragraph', text: 'Tailwind provides full support for CSS Grid: divide containers into 12 columns with `grid grid-cols-12` and specify child column widths with `col-span-8`.' },
            { type: 'code', language: 'html', code: `<!-- 3-Column Card Grid -->\n<div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">\n  <div class="p-4 bg-white rounded-xl shadow-sm border">Card 1</div>\n  <div class="p-4 bg-white rounded-xl shadow-sm border">Card 2</div>\n  <div class="p-4 bg-white rounded-xl shadow-sm border">Card 3</div>\n</div>`, filename: 'grid.html' },
            { type: 'keyPoints', points: ['grid-cols-N defines the number of grid columns.', 'col-span-N allows cards to span multiple columns.', 'Combine with responsive prefixes (md:grid-cols-3) for responsive layouts.'] },
            makeQuiz('Which Tailwind class specifies that a grid item should span across 2 columns in a grid layout?', 'col-span-2', 'grid-span-2', 'width-2cols', 'columns-2', 'col-span-2 sets grid-column: span 2 / span 2.')
          ]
        },
        {
          slug: 'mobile-first-responsive-design-breakpoints',
          title: 'Mobile-First Responsive Design & Breakpoints',
          description: 'Master mobile-first responsive modifiers: sm: (640px), md: (768px), lg: (1024px), and xl: (1280px).',
          duration: 25,
          blocks: [
            { type: 'paragraph', text: 'Tailwind uses a strict mobile-first design strategy: unprefixed utilities (like `w-full`) target mobile devices first, and breakpoint prefixes (like `md:w-1/2`) apply on larger screens.' },
            { type: 'code', language: 'html', code: `<!-- Stacked on mobile (1 col), 2 columns on tablet (md:), 4 columns on desktop (lg:) -->\n<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">\n  <div class="p-4 bg-slate-100 rounded-lg">Course 1</div>\n  <div class="p-4 bg-slate-100 rounded-lg">Course 2</div>\n  <div class="p-4 bg-slate-100 rounded-lg">Course 3</div>\n  <div class="p-4 bg-slate-100 rounded-lg">Course 4</div>\n</div>`, filename: 'responsive.html' },
            { type: 'keyPoints', points: ['Unprefixed classes target all screen sizes starting at mobile (0px+).', 'md: targets viewports 768px and wider (min-width: 768px).', 'Never use prefixes to target mobile — write mobile styles unprefixed.'] },
            makeQuiz('In Tailwind mobile-first design, what screen sizes does the class md:text-xl apply to?', 'Screens at 768px width and wider (tablets, laptops, desktops).', 'Only mobile screens smaller than 768px.', 'Only exact 768px screen sizes.', 'All screens regardless of size.', 'Tailwind responsive prefixes use min-width media queries, targeting that breakpoint and all larger viewports.')
          ]
        },
        {
          slug: 'interactive-states-and-dark-mode',
          title: 'Interactive States (hover, focus) & Dark Mode',
          description: 'Style user interactions with hover:, focus-visible:, group-hover:, and build seamless dark mode themes with dark:.',
          duration: 25,
          blocks: [
            { type: 'paragraph', text: 'Tailwind makes interactive states effortless using prefix modifiers (`hover:`, `focus:`, `active:`, `disabled:`), parent group hover (`group-hover:`), and dark mode (`dark:`).' },
            { type: 'code', language: 'html', code: `<!-- Dark-mode aware, interactive group card -->\n<div class="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-400 transition-all cursor-pointer">\n  <h4 class="font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">\n    Full-Stack Architecture Track\n  </h4>\n  <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">\n    Master Node.js, Express, and PostgreSQL from scratch.\n  </p>\n</div>`, filename: 'dark-mode.html' },
            { type: 'keyPoints', points: ['dark: prefix styles elements when dark mode is active.', 'group on parent and group-hover: on children coordinates animations.', 'focus-visible:ring-2 creates accessible keyboard focus rings.'] },
            makeQuiz('How do you apply a dark background color specifically when dark mode is enabled in Tailwind CSS?', 'By prefixing the class with dark:, e.g. dark:bg-slate-900', 'By writing [dark]="bg-slate-900"', 'By creating a separate dark.css file manually', 'By adding a CSS style tag with media="dark"', 'The dark: variant modifier applies the utility only when dark mode is active.')
          ]
        }
      ]
    }
  ]
}

// -------------------------------------------------------------
// Course 11: Node.js (8 Lessons)
// -------------------------------------------------------------
const nodejsCourse = {
  slug: 'nodejs',
  varName: 'nodejsCourse',
  title: 'Node.js & Express Architecture: REST APIs to Mastery',
  shortTitle: 'Node.js',
  description: 'A complete, beginner-to-mastery path covering JavaScript on the server with Node.js, npm package management, file systems, HTTP servers, Express.js REST APIs, middleware, and database integration.',
  category: 'Web Development',
  difficulty: 'intermediate',
  icon: 'code',
  color: '#339933',
  tags: ['Node.js', 'Express', 'Backend', 'REST API', 'Streams', 'Libuv', 'JWT'],
  chapters: [
    {
      title: 'Chapter 1: Node.js Internals & Core Server APIs (Beginner)',
      lessons: [
        {
          slug: 'what-is-nodejs-and-running-scripts',
          title: 'What is Node.js & Running Server JavaScript?',
          description: 'Learn why Node.js was created by Ryan Dahl, the V8 JavaScript engine, the Libuv event loop, and executing your first backend script with node.',
          duration: 20,
          blocks: [
            { type: 'callout', kind: 'info', text: 'Level: Beginner | Prerequisites: JavaScript Fundamentals' },
            { type: 'paragraph', text: 'Historically, JavaScript only ran inside web browsers. In 2009, Ryan Dahl combined Google\'s high-performance V8 JavaScript engine with a C++ asynchronous event loop (Libuv) to create Node.js — allowing JavaScript to run directly on servers, interact with operating system files, and handle millions of concurrent network connections.' },
            { type: 'definition', term: 'Node.js', plain: 'An open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser.', formal: 'Asynchronous Event-Driven JavaScript Runtime' },
            { type: 'analogy', title: 'The Fast-Food Order Counter Metaphor', text: 'Traditional multi-threaded servers (like PHP/Apache) assign a dedicated waiter to stand at your table doing nothing while the chef cooks. Node.js is a fast-food order counter: a single cashier takes your order, gives you a buzzer, immediately takes the next customer\'s order, and buzzes you when the kitchen finishes your food.' },
            { type: 'code', language: 'javascript', code: `// hello-node.js\nconsole.log('Node.js is executing on the server!');\nconsole.log('Server Platform:', process.platform);\nconsole.log('Node Version:', process.version);\n\n// Run in your terminal:\n// $ node hello-node.js`, filename: 'hello-node.js' },
            { type: 'keyPoints', points: ['Node.js allows JavaScript to run on servers and desktops.', 'Node.js is single-threaded and non-blocking (asynchronous I/O).', 'Run any JS file from your terminal with: node filename.js.'] },
            makeQuiz('What makes Node.js capable of handling thousands of concurrent network connections on a single JavaScript execution thread?', 'Its non-blocking asynchronous event-driven I/O model powered by Libuv.', 'It creates 10,000 operating system threads simultaneously.', 'It deletes all user data after 1 second.', 'It converts JavaScript into SQL statements.', 'Non-blocking I/O allows a single thread to service incoming connections without waiting for slow disk or network operations.')
          ]
        },
        {
          slug: 'module-system-and-npm-package-manager',
          title: 'Node Module System (ESM vs CommonJS) & npm',
          description: 'Manage dependencies with npm, understand package.json, and master modern ES Module imports (import/export) vs CommonJS (require).',
          duration: 25,
          blocks: [
            { type: 'paragraph', text: 'Node.js organizes code into modules. Modern Node.js uses standard ES Modules (`import`/`export`), configured by adding `"type": "module"` in `package.json`.' },
            { type: 'code', language: 'javascript', code: `// math.js: Exporting functions\nexport function calculateSum(a, b) {\n  return a + b;\n}\n\n// app.js: Importing functions\nimport { calculateSum } from './math.js';\nimport os from 'node:os';\n\nconsole.log('Sum:', calculateSum(10, 20));\nconsole.log('Total System RAM:', os.totalmem() / (1024 * 1024 * 1024), 'GB');`, filename: 'app.js' },
            { type: 'keyPoints', points: ['package.json defines your project dependencies, scripts, and metadata.', 'npm install package-name downloads packages from the public npm registry.', 'Always use ES Modules (import/export) with "type": "module".'] },
            makeQuiz('How do you configure a Node.js project to use modern ES Modules (import/export) natively?', 'Add "type": "module" inside your project package.json file.', 'Write use esm; at the top of every file.', 'Rename your computer operating system.', 'Install Python 3.', '"type": "module" in package.json informs Node.js that .js files should be treated as ECMAScript modules.')
          ]
        },
        {
          slug: 'working-with-files-and-paths',
          title: 'File System & Paths (node:fs/promises & node:path)',
          description: 'Read files, write JSON data, create directories, and manipulate cross-platform file paths using node:fs/promises and node:path.',
          duration: 25,
          blocks: [
            { type: 'paragraph', text: 'Node.js provides built-in modules for interacting with the operating system: `node:fs/promises` for reading and writing files asynchronously, and `node:path` for joining cross-platform directory paths.' },
            { type: 'code', language: 'javascript', code: `import fs from 'node:fs/promises';\nimport path from 'node:path';\n\nasync function handleFileOperations() {\n  const filePath = path.join(process.cwd(), 'database', 'users.json');\n  \n  // 1. Write structured JSON data to disk\n  const users = [{ id: 1, name: 'Aravind', role: 'Engineer' }];\n  await fs.writeFile(filePath, JSON.stringify(users, null, 2), 'utf-8');\n  console.log('File written successfully.');\n\n  // 2. Read file data from disk\n  const rawData = await fs.readFile(filePath, 'utf-8');\n  const parsed = JSON.parse(rawData);\n  console.log('Read users from disk:', parsed.length);\n}\n\nhandleFileOperations();`, filename: 'files.js' },
            { type: 'keyPoints', points: ['Always use node:fs/promises with async/await for non-blocking disk I/O.', 'Use path.join() to prevent path separator bugs across Windows (\\) and Linux (/).', 'Never use synchronous methods (like readFileSync) in production servers as they block the event loop.'] },
            makeQuiz('Why should you use path.join() rather than string concatenation ("dir/" + file) when constructing file paths in Node.js?', 'path.join() handles cross-platform path separators automatically between Windows (\\) and POSIX/Linux (/).', 'path.join() compresses the file.', 'path.join() encrypts the file path.', 'String concatenation is forbidden by JavaScript syntax.', 'Windows uses backslashes while macOS/Linux use forward slashes; path.join() normalizes paths across operating systems.')
          ]
        },
        {
          slug: 'http-fundamentals-and-native-server',
          title: 'HTTP Fundamentals & Creating a Native Web Server',
          description: 'Understand HTTP request/response lifecycles, HTTP methods, headers, status codes, and build a native server with node:http.',
          duration: 25,
          blocks: [
            { type: 'paragraph', text: 'Web communication is built on HTTP: a client sends an HTTP Request (Method, URL, Headers, Body), and the server replies with an HTTP Response (Status Code, Headers, Body).' },
            { type: 'code', language: 'javascript', code: `import http from 'node:http';\n\nconst server = http.createServer((req, res) => {\n  console.log(\`[\${new Date().toISOString()}] \${req.method} \${req.url}\`);\n  \n  // Set HTTP Response Headers\n  res.writeHead(200, { 'Content-Type': 'application/json' });\n  \n  // Send JSON response body\n  res.end(JSON.stringify({\n    message: 'Hello from Node.js Native HTTP Server!',\n    url: req.url,\n  }));\n});\n\nconst PORT = 3000;\nserver.listen(PORT, () => {\n  console.log(\`Server listening at http://localhost:\${PORT}\`);\n});`, filename: 'native-server.js' },
            { type: 'keyPoints', points: ['HTTP Status 200 = OK, 201 = Created, 400 = Bad Request, 404 = Not Found, 500 = Server Error.', 'res.writeHead() sets HTTP response headers and status codes.', 'res.end() finishes sending response data to the client.'] },
            makeQuiz('Which HTTP status code signifies that a resource was successfully created on the server (such as creating a new user)?', '201 Created', '200 OK', '404 Not Found', '500 Internal Server Error', 'HTTP status code 201 specifically indicates that a request succeeded and resulted in a new resource being created.')
          ]
        }
      ]
    },
    {
      title: 'Chapter 2: Express.js REST APIs & Backend Architecture (Mastery)',
      lessons: [
        {
          slug: 'introduction-to-expressjs',
          title: 'Introduction to Express.js Framework & Routing',
          description: 'Learn why Express is the most popular Node.js web framework, create an Express application, and handle GET, POST, PUT, and DELETE routes.',
          duration: 25,
          blocks: [
            { type: 'paragraph', text: 'While `node:http` works, writing complex routing and JSON body parsing from scratch requires hundreds of lines of boilerplate. Express.js is a minimal, flexible web framework that simplifies route handling, middleware, and REST API creation.' },
            { type: 'code', language: 'javascript', code: `import express from 'express';\n\nconst app = express();\nconst PORT = 3000;\n\n// Route handling for GET /api/health\napp.get('/api/health', (req, res) => {\n  res.json({ status: 'healthy', timestamp: Date.now() });\n});\n\n// Route handling for GET /api/courses\napp.get('/api/courses', (req, res) => {\n  res.json([\n    { id: 1, title: 'Node.js Mastery' },\n    { id: 2, title: 'TypeScript Deep Dive' }\n  ]);\n});\n\napp.listen(PORT, () => console.log(\`Express API running on port \${PORT}\`));`, filename: 'server.js' },
            { type: 'keyPoints', points: ['Express simplifies routing with app.get(), app.post(), app.put(), app.delete().', 'res.json() automatically formats objects into JSON and sets appropriate headers.', 'Express is unopinionated, lightweight, and extensible.'] },
            makeQuiz('What does res.json({ data: "value" }) do inside an Express route handler?', 'It serializes the object to JSON, sets the Content-Type: application/json header, and sends the HTTP response.', 'It writes the data to a local text file.', 'It reloads the client browser window.', 'It compiles the JavaScript into SQL.', 'res.json() automates JSON serialization, header configuration, and response transmission.')
          ]
        },
        {
          slug: 'express-middleware-and-request-body',
          title: 'Express Middleware & Request Parsing (req.body, req.params)',
          description: 'Master the Express middleware pipeline (req, res, next), parse JSON request payloads with express.json(), and access URL parameters and query strings.',
          duration: 30,
          blocks: [
            { type: 'paragraph', text: 'Middleware functions are functions that have access to the request object (`req`), response object (`res`), and the `next` function in the application’s request-response cycle.' },
            { type: 'definition', term: 'Express Middleware', plain: 'A function (req, res, next) => {} that intercepts incoming HTTP requests, performs logic (like logging or auth), and calls next() to pass control to the next handler.', formal: 'Express HTTP Interception Pipeline' },
            { type: 'code', language: 'javascript', code: `import express from 'express';\n\nconst app = express();\n\n// 1. Built-in body parsing middleware\napp.use(express.json());\n\n// 2. Custom logging middleware\napp.use((req, res, next) => {\n  console.log(\`[\${req.method}] \${req.url}\`);\n  next(); // Mandatory: pass control to the next middleware/route\n});\n\n// 3. Dynamic Route Parameters (req.params) & Query Strings (req.query)\napp.get('/api/users/:id', (req, res) => {\n  const userId = req.params.id;         // from URL path /api/users/42\n  const includeBio = req.query.includeBio; // from URL query ?includeBio=true\n  res.json({ id: userId, bioIncluded: includeBio });\n});`, filename: 'middleware.js' },
            { type: 'keyPoints', points: ['Always call next() in middleware unless sending an immediate response.', 'app.use(express.json()) is strictly required to read POST request bodies (req.body).', 'Access URL path parameters with req.params.id and query strings with req.query.filter.'] },
            makeQuiz('What happens if a custom Express middleware does not call next() and does not send a response with res.send()/res.json()?', 'The HTTP request hangs indefinitely until the client times out.', 'The server restarts automatically.', 'Express skips to the next route automatically.', 'The database crashes.', 'If next() is never invoked and no response is closed, the connection remains open until the client or server timeout occurs.')
          ]
        },
        {
          slug: 'building-a-crud-rest-api',
          title: 'Building a Complete CRUD REST API',
          description: 'Construct a full CRUD (Create, Read, Update, Delete) RESTful API for a resources collection with proper HTTP status codes and error handling.',
          duration: 30,
          blocks: [
            { type: 'paragraph', text: 'REST (Representational State Transfer) is the industry standard architectural style for web APIs. Standard CRUD operations map cleanly to HTTP methods: POST (Create), GET (Read), PUT/PATCH (Update), DELETE (Delete).' },
            { type: 'code', language: 'javascript', code: `import express from 'express';\n\nconst app = express();\napp.use(express.json());\n\nlet courses = [\n  { id: 1, title: 'HTML5 Foundations' },\n  { id: 2, title: 'Node.js Architecture' },\n];\n\n// READ ALL\napp.get('/api/courses', (req, res) => res.json(courses));\n\n// CREATE\napp.post('/api/courses', (req, res) => {\n  const { title } = req.body;\n  if (!title) return res.status(400).json({ error: 'Title is required' });\n  const newCourse = { id: Date.now(), title };\n  courses.push(newCourse);\n  res.status(201).json(newCourse);\n});\n\n// DELETE\napp.delete('/api/courses/:id', (req, res) => {\n  courses = courses.filter(c => c.id !== Number(req.params.id));\n  res.status(204).send(); // 204 No Content\n});`, filename: 'crud-api.js' },
            { type: 'keyPoints', points: ['POST returns 201 Created with the newly created resource.', 'DELETE successful operations return 204 No Content.', 'Always validate request body fields before saving data.'] },
            makeQuiz('Which HTTP method should be used when creating a new resource record in a RESTful API?', 'POST', 'GET', 'DELETE', 'OPTIONS', 'POST is the standard RESTful HTTP method for submitting data to create a new resource.')
          ]
        },
        {
          slug: 'database-orm-and-jwt-security',
          title: 'Database Integration with Prisma ORM & JWT Security',
          description: 'Connect Node.js to relational databases using Prisma ORM, hash passwords securely with bcrypt, and issue JSON Web Tokens (JWT) for authentication.',
          duration: 30,
          blocks: [
            { type: 'paragraph', text: 'Production Node.js backends use ORMs (like Prisma) for type-safe database queries and JWT (JSON Web Tokens) for stateless authentication.' },
            { type: 'code', language: 'javascript', code: `import jwt from 'jsonwebtoken';\nimport bcrypt from 'bcrypt';\n\nconst JWT_SECRET = process.env.JWT_SECRET || 'secret-key';\n\n// 1. Password Hashing with Salt Rounds\nexport async function hashPassword(plainPassword) {\n  return bcrypt.hash(plainPassword, 12);\n}\n\n// 2. Generating signed JWT Token on Login\nexport function generateAuthToken(user) {\n  return jwt.sign(\n    { sub: user.id, role: user.role },\n    JWT_SECRET,\n    { expiresIn: '24h' }\n  );\n}\n\n// 3. Authentication Verification Middleware\nexport function requireAuth(req, res, next) {\n  const authHeader = req.headers.authorization;\n  if (!authHeader?.startsWith('Bearer ')) {\n    return res.status(401).json({ error: 'Unauthorized: Missing token' });\n  }\n  try {\n    const token = authHeader.split(' ')[1];\n    req.user = jwt.verify(token, JWT_SECRET);\n    next();\n  } catch {\n    res.status(401).json({ error: 'Invalid or expired token' });\n  }\n}`, filename: 'auth.js' },
            { type: 'keyPoints', points: ['Never store plain-text passwords; always use salted adaptive hashes (bcrypt/argon2).', 'JWT tokens are cryptographically signed, preventing tampering.', 'Protect sensitive endpoints with authentication middleware.'] },
            makeQuiz('Why is plain text password storage strictly forbidden in web development?', 'If the database is compromised, plain text passwords expose user accounts across all websites where they reused that password.', 'Plain text passwords take up too much disk storage space.', 'Plain text strings cannot be sent over HTTPS.', 'Browsers refuse to type plain text passwords.', 'Passwords must always be hashed with salted cryptographic algorithms like bcrypt to protect users.')
          ]
        }
      ]
    }
  ]
}

// -------------------------------------------------------------
// Course 12: NestJS (8 Lessons)
// -------------------------------------------------------------
const nestjsCourse = {
  slug: 'nestjs',
  varName: 'nestjsCourse',
  title: 'NestJS Enterprise Architecture: Microservices & DI',
  shortTitle: 'NestJS',
  description: 'A complete, beginner-to-mastery path covering enterprise TypeScript backend architecture with NestJS: Dependency Injection, Controllers, Providers, Modules, DTO validation, Guards, and Exception Filters.',
  category: 'Web Development',
  difficulty: 'advanced',
  icon: 'code',
  color: '#e0234e',
  tags: ['NestJS', 'TypeScript', 'Dependency Injection', 'Backend', 'Microservices', 'Enterprise'],
  chapters: [
    {
      title: 'Chapter 1: Enterprise Architecture & Dependency Injection (Beginner)',
      lessons: [
        {
          slug: 'what-is-nestjs-and-enterprise-architecture',
          title: 'What is NestJS & Enterprise Architecture?',
          description: 'Learn why enterprise teams choose NestJS over unopinionated Express, the Angular-inspired architecture, and Inversion of Control (IoC).',
          duration: 20,
          blocks: [
            { type: 'callout', kind: 'info', text: 'Level: Advanced | Prerequisites: TypeScript & Node.js Basics' },
            { type: 'paragraph', text: 'While plain Express is great for small scripts, large teams often suffer from inconsistent project structures, missing architectural guidelines, and untyped spaghetti code. NestJS is a progressive Node.js framework built with TypeScript that provides an out-of-the-box application architecture (Controllers, Providers, Modules) heavily inspired by Angular and Spring Boot.' },
            { type: 'definition', term: 'NestJS', plain: 'An enterprise-grade TypeScript backend framework built on top of Express or Fastify that uses decorators and Inversion of Control (IoC).', formal: 'Enterprise Progressive Node.js Framework' },
            { type: 'analogy', title: 'The Architectural Skyscraper Blueprint', text: 'Express is a pile of high-quality bricks and lumber left on an empty lot with no instructions. NestJS is a steel skyscraper structural framework with certified zoning, elevator shafts, fire escapes, and electrical conduits pre-engineered.' },
            { type: 'code', language: 'typescript', code: `// main.ts: Application Bootstrap\nimport { NestFactory } from '@nestjs/core';\nimport { AppModule } from './app.module';\n\nasync function bootstrap() {\n  const app = await NestFactory.create(AppModule);\n  app.setGlobalPrefix('api');\n  await app.listen(3000);\n  console.log('NestJS Enterprise Server running on http://localhost:3000/api');\n}\nbootstrap();`, filename: 'main.ts' },
            { type: 'keyPoints', points: ['NestJS uses TypeScript decorators (@Module, @Controller, @Injectable).', 'Encourages modular, maintainable, and testable code structures.', 'Built on top of battle-tested HTTP engines (Express or Fastify).'] },
            makeQuiz('What is a primary reason enterprise teams adopt NestJS for backend development?', 'It provides a structured, standardized TypeScript architecture with built-in Dependency Injection and modular design.', 'It replaces all SQL databases with JSON files.', 'It compiles TypeScript into native iOS apps.', 'It disables HTTP authentication.', 'NestJS enforces structured architecture and type safety, preventing large codebases from degrading into unmaintainable spaghetti code.')
          ]
        },
        {
          slug: 'nestjs-project-structure-and-cli',
          title: 'NestJS Project Structure & Nest CLI',
          description: 'Generate boilerplate code with the Nest CLI (nest g resource, nest g controller), and understand main.ts, app.module.ts, and feature modules.',
          duration: 20,
          blocks: [
            { type: 'paragraph', text: 'The Nest CLI accelerates development by scaffolding modules, controllers, and services with standard file naming conventions and automated testing files.' },
            { type: 'code', language: 'bash', code: `# Install Nest CLI globally\n$ npm install -g @nestjs/cli\n\n# Create a new project\n$ nest new enterprise-api\n\n# Automatically generate a full CRUD resource (Module, Controller, Service, DTOs)\n$ nest g resource courses`, filename: 'terminal' },
            { type: 'keyPoints', points: ['nest new initializes a production-ready repository with tsconfig, linter, and tests.', 'nest g resource generates complete CRUD scaffolds in seconds.', 'The CLI automatically registers generated controllers and services into their parent modules.'] },
            makeQuiz('Which Nest CLI command automatically generates a complete CRUD feature with Module, Controller, Service, and DTO files?', 'nest g resource <name>', 'nest create all', 'nest make crud', 'nest build feature', 'nest g resource generates all boilerplate files and registers them into the application module.')
          ]
        },
        {
          slug: 'controllers-and-http-routing',
          title: 'Controllers & HTTP Routing (@Get, @Post, @Param)',
          description: 'Master NestJS routing decorators: @Controller(), @Get(), @Post(), @Param(), @Body(), @Query(), and @HttpCode().',
          duration: 25,
          blocks: [
            { type: 'paragraph', text: 'Controllers are responsible for handling incoming HTTP requests and returning responses to the client. The `@Controller(\'courses\')` decorator defines the base route prefix.' },
            { type: 'code', language: 'typescript', code: `import { Controller, Get, Post, Param, Body, HttpCode, HttpStatus } from '@nestjs/common';\nimport { CoursesService } from './courses.service';\n\n@Controller('courses')\nexport class CoursesController {\n  constructor(private readonly coursesService: CoursesService) {}\n\n  @Get()\n  async findAll() {\n    return this.coursesService.getAllCourses();\n  }\n\n  @Get(':id')\n  async findOne(@Param('id') id: string) {\n    return this.coursesService.getCourseById(id);\n  }\n\n  @Post()\n  @HttpCode(HttpStatus.CREATED)\n  async create(@Body() createDto: { title: string }) {\n    return this.coursesService.createCourse(createDto);\n  }\n}`, filename: 'courses.controller.ts' },
            { type: 'keyPoints', points: ['@Controller("prefix") sets the base URL route for all methods in the class.', '@Param("id") extracts URL path parameters.', '@Body() extracts and injects the parsed JSON request payload.'] },
            makeQuiz('Which NestJS decorator is used to extract the JSON request payload from an incoming HTTP POST request?', '@Body()', '@Param()', '@Payload()', '@Request()', '@Body() extracts the request body and binds it to a handler parameter.')
          ]
        },
        {
          slug: 'providers-and-dependency-injection-in-nest',
          title: 'Providers & Dependency Injection (@Injectable)',
          description: 'Encapsulate business logic in Services decorated with @Injectable(), and master constructor dependency injection via the NestJS IoC container.',
          duration: 30,
          blocks: [
            { type: 'paragraph', text: 'Providers are plain JavaScript classes marked with `@Injectable()`. The NestJS Inversion of Control (IoC) container handles creating singletons and injecting them into constructors automatically.' },
            { type: 'code', language: 'typescript', code: `import { Injectable, NotFoundException } from '@nestjs/common';\n\nexport interface Course {\n  id: string;\n  title: string;\n}\n\n@Injectable()\nexport class CoursesService {\n  private courses: Course[] = [\n    { id: '1', title: 'NestJS Architecture' },\n  ];\n\n  getAllCourses(): Course[] {\n    return this.courses;\n  }\n\n  getCourseById(id: string): Course {\n    const course = this.courses.find(c => c.id === id);\n    if (!course) throw new NotFoundException(\`Course #\${id} not found\`);\n    return course;\n  }\n}`, filename: 'courses.service.ts' },
            { type: 'keyPoints', points: ['Services marked with @Injectable() are managed by the Nest IoC container.', 'Throwing built-in exceptions (like NotFoundException) automatically returns HTTP 404 JSON responses.', 'Services are singletons by default across the application lifecycle.'] },
            makeQuiz('What decorator must be attached to a class in NestJS to allow it to be injected into controllers via Dependency Injection?', '@Injectable()', '@Service()', '@Provider()', '@Component()', '@Injectable() attaches metadata declaring that the class can be managed by the Nest IoC container.')
          ]
        }
      ]
    },
    {
      title: 'Chapter 2: Modules, Validation & Enterprise Security (Mastery)',
      lessons: [
        {
          slug: 'modules-and-modular-architecture',
          title: 'Modules & Modular Architecture (@Module)',
          description: 'Organize applications into cohesive feature modules with @Module(), manage imports and exports, and build shared common modules.',
          duration: 25,
          blocks: [
            { type: 'paragraph', text: 'A module is a class annotated with a `@Module()` decorator. Nest uses modules to organize the application structure into cohesive, self-contained feature boundaries.' },
            { type: 'code', language: 'typescript', code: `import { Module } from '@nestjs/common';\nimport { CoursesController } from './courses.controller';\nimport { CoursesService } from './courses.service';\n\n@Module({\n  controllers: [CoursesController], // HTTP route handlers\n  providers: [CoursesService],       // Business logic services\n  exports: [CoursesService],         // Make service available to other importing modules\n})\nexport class CoursesModule {}\n`, filename: 'courses.module.ts' },
            { type: 'keyPoints', points: ['Every Nest application has at least one root module (AppModule).', 'exports array makes providers visible and reusable in other feature modules.', 'Modules provide clean architectural boundaries and prevent circular dependencies.'] },
            makeQuiz('What array inside the @Module decorator must be configured to share a service with other modules that import it?', 'exports', 'imports', 'controllers', 'declarations', 'The exports array lists providers that should be available in other modules importing this module.')
          ]
        },
        {
          slug: 'data-transfer-objects-and-validation-pipes',
          title: 'DTOs & Validation with class-validator',
          description: 'Protect APIs with Data Transfer Objects (DTO), class-validator decorator rules, and the global ValidationPipe with whitelist sanitization.',
          duration: 30,
          blocks: [
            { type: 'paragraph', text: 'Data Transfer Objects (DTO) define the schema for data sent over the network. Combined with `class-validator` and `ValidationPipe`, NestJS automatically rejects invalid inputs with HTTP 400 Bad Request errors.' },
            { type: 'code', language: 'typescript', code: `// create-course.dto.ts\nimport { IsString, IsNotEmpty, MinLength, IsInt, Min } from 'class-validator';\n\nexport class CreateCourseDto {\n  @IsString()\n  @IsNotEmpty()\n  @MinLength(3)\n  readonly title: string;\n\n  @IsInt()\n  @Min(1)\n  readonly durationHours: number;\n}\n\n// In main.ts: Enable global automated validation\n// app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));`, filename: 'create-course.dto.ts' },
            { type: 'keyPoints', points: ['DTOs enforce strict input shapes for incoming HTTP requests.', 'ValidationPipe with whitelist: true automatically strips un-whitelisted malicious properties.', 'Decorators like @IsString() and @MinLength() provide declarative validation.'] },
            makeQuiz('What security benefit does enabling whitelist: true in NestJS ValidationPipe provide?', 'It automatically strips away any properties sent in the request body that are not explicitly defined on the DTO class.', 'It encrypts all database records.', 'It requires users to enter a password.', 'It blocks requests from Chrome browsers.', 'Whitelisting removes unmapped parameters, preventing parameter injection and mass assignment attacks.')
          ]
        },
        {
          slug: 'guards-and-role-based-authorization-in-nest',
          title: 'Guards, ExecutionContext & Role-Based Access (RBAC)',
          description: 'Control route access with Guards (CanActivate), inspect ExecutionContext, and implement role-based access control with custom decorators and Reflector.',
          duration: 30,
          blocks: [
            { type: 'paragraph', text: 'Guards determine whether a request has permission to access a route handler. They implement `CanActivate` and execute after middleware but before pipes.' },
            { type: 'code', language: 'typescript', code: `import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';\n\n@Injectable()\nexport class AuthGuard implements CanActivate {\n  canActivate(context: ExecutionContext): boolean {\n    const request = context.switchToHttp().getRequest();\n    const authHeader = request.headers.authorization;\n    \n    if (!authHeader || !authHeader.startsWith('Bearer ')) {\n      throw new UnauthorizedException('Authentication token is missing');\n    }\n    \n    // In real app: verify JWT token and attach user to request\n    request.user = { id: 'usr_1', role: 'admin' };\n    return true;\n  }\n}`, filename: 'auth.guard.ts' },
            { type: 'keyPoints', points: ['Guards implement CanActivate and return a boolean or Promise<boolean>.', 'Apply guards at the controller or route method level with @UseGuards(AuthGuard).', 'ExecutionContext provides access to the underlying HTTP request object.'] },
            makeQuiz('What interface must a NestJS Guard implement to control access to route handlers?', 'CanActivate', 'CanDeactivate', 'Interceptor', 'PipeTransform', 'Guards implement the CanActivate interface containing the canActivate(context: ExecutionContext) method.')
          ]
        },
        {
          slug: 'exception-filters-and-interceptors',
          title: 'Exception Filters & Interceptors',
          description: 'Format standard error responses globally with Exception Filters (@Catch), and transform response streams with Interceptors and RxJS.',
          duration: 25,
          blocks: [
            { type: 'paragraph', text: 'Exception Filters catch unhandled exceptions across the entire application and format uniform JSON error responses with timestamps and status codes. Interceptors bind extra logic before and after method execution.' },
            { type: 'code', language: 'typescript', code: `import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';\nimport { Response } from 'express';\n\n@Catch()\nexport class GlobalExceptionFilter implements ExceptionFilter {\n  catch(exception: unknown, host: ArgumentsHost) {\n    const ctx = host.switchToHttp();\n    const response = ctx.getResponse<Response>();\n    \n    const status = exception instanceof HttpException\n      ? exception.getStatus()\n      : HttpStatus.INTERNAL_SERVER_ERROR;\n\n    response.status(status).json({\n      statusCode: status,\n      timestamp: new Date().toISOString(),\n      message: (exception as Error).message || 'Internal server error',\n    });\n  }\n}`, filename: 'global-exception.filter.ts' },
            { type: 'keyPoints', points: ['Exception Filters (@Catch) catch all thrown errors and format standardized JSON output.', 'Interceptors can measure method execution time, cache responses, or transform data.', 'Global filters are registered with app.useGlobalFilters().'] },
            makeQuiz('Which NestJS feature is specifically engineered to catch runtime exceptions and format uniform JSON error responses across the application?', 'Exception Filters (@Catch)', 'Pipes', 'Middleware', 'Providers', 'Exception Filters catch thrown exceptions and format standardized JSON error structures with HTTP status codes.')
          ]
        }
      ]
    }
  ]
}

console.log('Writing final courses (Tailwind, Node, Nest)...')
const coursesToGenerate = [tailwindcssCourse, nodejsCourse, nestjsCourse]

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
