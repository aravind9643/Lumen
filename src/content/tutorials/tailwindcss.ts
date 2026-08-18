import type { Tutorial } from '../types'

export const tailwindcssCourse: Tutorial = {
  "slug": "tailwindcss",
  "title": "Tailwind CSS & Design Systems: Zero to Mastery",
  "shortTitle": "Tailwind CSS",
  "description": "A complete, beginner-to-mastery path covering utility-first CSS architecture, spacing tokens, typography, flexbox and grid utilities, responsive breakpoints, interactive state variants, and dark mode.",
  "category": "Web Development",
  "difficulty": "beginner",
  "icon": "code",
  "tags": [
    "TailwindCSS",
    "CSS",
    "Design Systems",
    "Responsive",
    "UI/UX",
    "JIT"
  ],
  "color": "#06b6d4",
  "updated": "2026-08-18",
  "prerequisites": [
    "Zero prior experience required — built from first principles."
  ],
  "outcomes": [
    "Master modern Tailwind CSS syntax, core mental models, and architectural patterns",
    "Build clean, performant, and production-grade Tailwind CSS applications",
    "Understand trade-offs, testing strategies, and industry best practices"
  ],
  "chapters": [
    {
      "title": "Chapter 1: Utility-First Architecture & Design Tokens (Beginner)",
      "lessons": [
        {
          "slug": "what-is-tailwind-and-utility-first-philosophy",
          "title": "What is Tailwind CSS & Utility-First Philosophy?",
          "description": "Understand the problems with traditional custom CSS class naming, and learn how atomic utility classes increase development speed and eliminate CSS bloat.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "Level: Beginner | Prerequisites: CSS Basics"
            },
            {
              "type": "paragraph",
              "text": "In traditional CSS, you write custom class names (like `.author-bio-card-container-wrapper`) in separate CSS files. This leads to class naming fatigue, CSS file bloat over time, and fear of deleting old styles. Tailwind CSS is a utility-first CSS framework packed with single-purpose utility classes (like `flex`, `pt-4`, `text-center`, `bg-blue-500`) that you compose directly in your HTML markup."
            },
            {
              "type": "definition",
              "term": "Utility-First CSS",
              "plain": "An architectural approach where you build custom designs by composing atomic, single-purpose utility classes directly in markup instead of writing custom CSS rules.",
              "formal": "Atomic CSS Design Token Methodology"
            },
            {
              "type": "analogy",
              "title": "The Pre-Fabricated Building Blocks Metaphor",
              "text": "Traditional CSS is like hand-mixing concrete, cutting every single piece of lumber, and firing custom bricks for every house you build. Tailwind CSS is an organized workshop of standardized, pre-engineered modular building blocks that snap together perfectly every time."
            },
            {
              "type": "code",
              "language": "html",
              "code": "<!-- Beautiful card built completely with Tailwind atomic utilities without writing 1 line of custom CSS -->\n<div class=\"max-w-sm mx-auto p-6 bg-white rounded-2xl shadow-lg border border-slate-100\">\n  <h3 class=\"text-xl font-bold text-slate-900\">Tailwind Mastery</h3>\n  <p class=\"mt-2 text-slate-600 text-sm\">Build modern websites without ever leaving your HTML.</p>\n  <button class=\"mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors\">\n    Get Started\n  </button>\n</div>",
              "filename": "Card.html"
            },
            {
              "type": "keyPoints",
              "points": [
                "No more naming fatigue inventing arbitrary CSS class names.",
                "CSS files stop growing because the same utility classes are reused everywhere.",
                "Safe changes: editing a component HTML will never accidentally break styles on another page."
              ]
            },
            {
              "type": "quiz",
              "question": "What is the major architectural advantage of utility-first CSS over writing bespoke custom CSS classes?",
              "options": [
                "Your CSS bundle size stays tiny and constant over time because utility classes are reused across all pages.",
                "Utility classes run inside the GPU.",
                "Tailwind replaces all HTML tags with SVG.",
                "Tailwind eliminates the need for JavaScript."
              ],
              "answer": 0,
              "explanation": "Because utility classes are reused everywhere, your CSS bundle size plateaus rather than growing with every new feature."
            }
          ]
        },
        {
          "slug": "spacing-sizing-and-layout-utilities",
          "title": "Spacing, Sizing & Layout Scales",
          "description": "Master the Tailwind numeric scale for padding (p-4), margin (m-4), width (w-full), height (h-screen), and max-width.",
          "duration": 20,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Tailwind spacing utilities are based on a disciplined 4px numeric scale: `1` = 0.25rem (4px), `4` = 1rem (16px), `8` = 2rem (32px). This creates visual consistency across margins, paddings, and widths."
            },
            {
              "type": "code",
              "language": "html",
              "code": "<div class=\"p-6 m-4 w-full max-w-md h-64 bg-slate-100 rounded-xl\">\n  <!-- p-6 = padding 24px (1.5rem) -->\n  <!-- m-4 = margin 16px (1rem) -->\n  <!-- w-full = width: 100% -->\n  <!-- max-w-md = max-width: 28rem (448px) -->\n  <!-- h-64 = height: 16rem (256px) -->\n  <p class=\"text-slate-800\">Disciplined Design Scale</p>\n</div>",
              "filename": "spacing.html"
            },
            {
              "type": "keyPoints",
              "points": [
                "p-4 applies 16px padding on all 4 sides; px-4 applies horizontal, py-4 vertical.",
                "m-auto centers block elements with automatic margins.",
                "max-w-screen-xl sets comfortable desktop container widths."
              ]
            },
            {
              "type": "quiz",
              "question": "In Tailwind standard spacing scale, what CSS padding value does the class p-4 produce?",
              "options": [
                "4px",
                "1rem (16px)",
                "40px",
                "4rem (64px)"
              ],
              "answer": 1,
              "explanation": "In Tailwind, 1 spacing unit equals 0.25rem (4px), so p-4 equals 1rem (16px)."
            }
          ]
        },
        {
          "slug": "typography-and-color-palette",
          "title": "Typography & Curated Color Systems",
          "description": "Style text with text sizes (text-sm, text-2xl), font weights (font-bold), line heights (leading-relaxed), and colors from 50 (lightest) to 950 (darkest).",
          "duration": 20,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Tailwind provides a professionally tuned color palette. Colors range numerically from 50 (subtle tint) through 500 (standard vibrant) to 950 (deep dark shade)."
            },
            {
              "type": "code",
              "language": "html",
              "code": "<article class=\"prose max-w-none\">\n  <h1 class=\"text-3xl font-extrabold tracking-tight text-slate-900\">\n    Software Engineering from First Principles\n  </h1>\n  <p class=\"mt-2 text-base text-slate-600 leading-relaxed\">\n    Tailwind includes carefully curated contrast ratios to ensure WCAG accessibility.\n  </p>\n  <span class=\"inline-block px-3 py-1 text-xs font-semibold text-indigo-700 bg-indigo-50 rounded-full\">\n    Featured Guide\n  </span>\n</article>",
              "filename": "typography.html"
            },
            {
              "type": "keyPoints",
              "points": [
                "Color classes follow property-color-shade syntax (e.g. text-blue-600, bg-slate-900).",
                "Font sizes automatically configure corresponding line-heights.",
                "Use text-balance to prevent awkward orphan words in headlines."
              ]
            },
            {
              "type": "quiz",
              "question": "What do the numeric shade numbers (e.g., 50 vs 500 vs 900) indicate in the Tailwind color palette?",
              "options": [
                "The pixel resolution of the color.",
                "The font size of the text.",
                "Lower numbers (50-100) are very light tints; higher numbers (800-950) are deep dark shades.",
                "The animation speed in milliseconds."
              ],
              "answer": 2,
              "explanation": "The 50–950 numerical scale organizes colors from lightest background tints to deepest dark shades."
            }
          ]
        },
        {
          "slug": "borders-radii-and-shadow-effects",
          "title": "Borders, Border Radii & Elevation Shadows",
          "description": "Style rounded corners (rounded-lg, rounded-full), borders (border, border-slate-200), and elevation drop shadows (shadow-md, shadow-xl).",
          "duration": 20,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Tailwind elevation utilities (`shadow-sm`, `shadow-md`, `shadow-xl`) and corner radii (`rounded-md`, `rounded-2xl`, `rounded-full`) create modern, tactile UI cards and buttons."
            },
            {
              "type": "code",
              "language": "html",
              "code": "<button class=\"px-5 py-2.5 rounded-full border border-indigo-600 bg-white text-indigo-600 font-semibold shadow-md hover:bg-indigo-50 transition-shadow\">\n  Interactive Pill Button\n</button>",
              "filename": "button.html"
            },
            {
              "type": "keyPoints",
              "points": [
                "rounded-full creates circular avatars or pill-shaped buttons.",
                "shadow-lg creates depth and visual hierarchy.",
                "Use ring-2 ring-indigo-500 for accessible focus indicators."
              ]
            },
            {
              "type": "quiz",
              "question": "Which Tailwind class creates a perfectly pill-shaped button or circular avatar?",
              "options": [
                "border-circle",
                "radius-pill",
                "corner-round",
                "rounded-full"
              ],
              "answer": 3,
              "explanation": "rounded-full applies border-radius: 9999px to create completely rounded pill buttons or circles."
            }
          ]
        }
      ]
    },
    {
      "title": "Chapter 2: Layouts, Responsive Design & Dark Mode (Mastery)",
      "lessons": [
        {
          "slug": "flexbox-utilities-in-tailwind",
          "title": "Flexbox Utilities: Alignment, Justification & Gap",
          "description": "Construct 1-dimensional layouts with flex, flex-col, items-center, justify-between, and gap-4.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Flexbox in Tailwind is fast and intuitive: add `flex` to the parent, then configure `justify-between`, `items-center`, and `gap-6` without writing custom CSS selectors."
            },
            {
              "type": "code",
              "language": "html",
              "code": "<!-- Responsive Navigation Header -->\n<nav class=\"flex items-center justify-between p-4 bg-white border-b border-slate-200\">\n  <div class=\"flex items-center gap-3\">\n    <img src=\"/logo.svg\" class=\"w-8 h-8\" alt=\"Lumen Logo\">\n    <span class=\"font-bold text-lg text-slate-900\">Lumen</span>\n  </div>\n  \n  <div class=\"flex items-center gap-4\">\n    <a href=\"/courses\" class=\"text-sm font-medium text-slate-600 hover:text-slate-900\">Courses</a>\n    <a href=\"/login\" class=\"px-3 py-1.5 text-sm font-medium text-white bg-indigo-600 rounded-md\">Log In</a>\n  </div>\n</nav>",
              "filename": "nav.html"
            },
            {
              "type": "keyPoints",
              "points": [
                "flex activates flexbox on the container.",
                "justify-between spreads items across the main axis.",
                "gap-N applies uniform gutters between children."
              ]
            },
            {
              "type": "exercise",
              "prompt": "Write an HTML snippet using Tailwind CSS to create a responsive card with horizontal alignment, centering, and rounded corners.",
              "hint": "Combine flex, items-center, justify-between, p-6, and rounded-2xl.",
              "solution": "<div class=\"flex items-center justify-between p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md\">\n  <h4 class=\"font-bold text-slate-900 dark:text-white\">Responsive Card</h4>\n  <button class=\"px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-500\">\n    Action\n  </button>\n</div>",
              "language": "html"
            },
            {
              "type": "quiz",
              "question": "Which Tailwind utility class vertically centers items across the cross axis inside a Flex container?",
              "options": [
                "items-center",
                "justify-center",
                "align-middle",
                "content-center"
              ],
              "answer": 0,
              "explanation": "items-center sets align-items: center in CSS, centering children vertically in a row container."
            }
          ]
        },
        {
          "slug": "css-grid-utilities-in-tailwind",
          "title": "CSS Grid Utilities: grid-cols & Column Spanning",
          "description": "Build 2D responsive grids with grid, grid-cols-12, col-span-4, and gap utilities.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Tailwind provides full support for CSS Grid: divide containers into 12 columns with `grid grid-cols-12` and specify child column widths with `col-span-8`."
            },
            {
              "type": "code",
              "language": "html",
              "code": "<!-- 3-Column Card Grid -->\n<div class=\"grid grid-cols-1 md:grid-cols-3 gap-6 p-6\">\n  <div class=\"p-4 bg-white rounded-xl shadow-sm border\">Card 1</div>\n  <div class=\"p-4 bg-white rounded-xl shadow-sm border\">Card 2</div>\n  <div class=\"p-4 bg-white rounded-xl shadow-sm border\">Card 3</div>\n</div>",
              "filename": "grid.html"
            },
            {
              "type": "keyPoints",
              "points": [
                "grid-cols-N defines the number of grid columns.",
                "col-span-N allows cards to span multiple columns.",
                "Combine with responsive prefixes (md:grid-cols-3) for responsive layouts."
              ]
            },
            {
              "type": "quiz",
              "question": "Which Tailwind class specifies that a grid item should span across 2 columns in a grid layout?",
              "options": [
                "grid-span-2",
                "col-span-2",
                "width-2cols",
                "columns-2"
              ],
              "answer": 1,
              "explanation": "col-span-2 sets grid-column: span 2 / span 2."
            }
          ]
        },
        {
          "slug": "mobile-first-responsive-design-breakpoints",
          "title": "Mobile-First Responsive Design & Breakpoints",
          "description": "Master mobile-first responsive modifiers: sm: (640px), md: (768px), lg: (1024px), and xl: (1280px).",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Tailwind uses a strict mobile-first design strategy: unprefixed utilities (like `w-full`) target mobile devices first, and breakpoint prefixes (like `md:w-1/2`) apply on larger screens."
            },
            {
              "type": "code",
              "language": "html",
              "code": "<!-- Stacked on mobile (1 col), 2 columns on tablet (md:), 4 columns on desktop (lg:) -->\n<div class=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4\">\n  <div class=\"p-4 bg-slate-100 rounded-lg\">Course 1</div>\n  <div class=\"p-4 bg-slate-100 rounded-lg\">Course 2</div>\n  <div class=\"p-4 bg-slate-100 rounded-lg\">Course 3</div>\n  <div class=\"p-4 bg-slate-100 rounded-lg\">Course 4</div>\n</div>",
              "filename": "responsive.html"
            },
            {
              "type": "keyPoints",
              "points": [
                "Unprefixed classes target all screen sizes starting at mobile (0px+).",
                "md: targets viewports 768px and wider (min-width: 768px).",
                "Never use prefixes to target mobile — write mobile styles unprefixed."
              ]
            },
            {
              "type": "quiz",
              "question": "In Tailwind mobile-first design, what screen sizes does the class md:text-xl apply to?",
              "options": [
                "Only mobile screens smaller than 768px.",
                "Only exact 768px screen sizes.",
                "Screens at 768px width and wider (tablets, laptops, desktops).",
                "All screens regardless of size."
              ],
              "answer": 2,
              "explanation": "Tailwind responsive prefixes use min-width media queries, targeting that breakpoint and all larger viewports."
            }
          ]
        },
        {
          "slug": "interactive-states-and-dark-mode",
          "title": "Interactive States (hover, focus) & Dark Mode",
          "description": "Style user interactions with hover:, focus-visible:, group-hover:, and build seamless dark mode themes with dark:.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Tailwind makes interactive states effortless using prefix modifiers (`hover:`, `focus:`, `active:`, `disabled:`), parent group hover (`group-hover:`), and dark mode (`dark:`)."
            },
            {
              "type": "code",
              "language": "html",
              "code": "<!-- Dark-mode aware, interactive group card -->\n<div class=\"group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-400 transition-all cursor-pointer\">\n  <h4 class=\"font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400\">\n    Full-Stack Architecture Track\n  </h4>\n  <p class=\"text-sm text-slate-600 dark:text-slate-400 mt-1\">\n    Master Node.js, Express, and PostgreSQL from scratch.\n  </p>\n</div>",
              "filename": "dark-mode.html"
            },
            {
              "type": "keyPoints",
              "points": [
                "dark: prefix styles elements when dark mode is active.",
                "group on parent and group-hover: on children coordinates animations.",
                "focus-visible:ring-2 creates accessible keyboard focus rings."
              ]
            },
            {
              "type": "quiz",
              "question": "How do you apply a dark background color specifically when dark mode is enabled in Tailwind CSS?",
              "options": [
                "By writing [dark]=\"bg-slate-900\"",
                "By creating a separate dark.css file manually",
                "By adding a CSS style tag with media=\"dark\"",
                "By prefixing the class with dark:, e.g. dark:bg-slate-900"
              ],
              "answer": 3,
              "explanation": "The dark: variant modifier applies the utility only when dark mode is active."
            }
          ]
        }
      ]
    }
  ]
}
