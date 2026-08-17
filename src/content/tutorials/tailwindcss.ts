import type { Tutorial } from '../types'

export const tailwindcssCourse: Tutorial = {
  "slug": "tailwindcss",
  "title": "Tailwind CSS: Modern Design Systems & Styling",
  "shortTitle": "Tailwind CSS",
  "description": "Master utility-first styling: Responsive design, Dark mode, custom theme tokens, typography, CSS grid utilities, and scalable component architecture.",
  "category": "Web Development",
  "difficulty": "beginner",
  "icon": "palette",
  "tags": [
    "TailwindCSS",
    "CSS",
    "Design Systems",
    "Responsive",
    "Dark Mode",
    "UI"
  ],
  "color": "#38bdf8",
  "updated": "2026-08-17",
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
      "title": "Phase 1: Utility-First Fundamentals & Layouts",
      "lessons": [
        {
          "slug": "utility-first-philosophy-and-layout",
          "title": "Utility-First Philosophy, Flexbox & Spacing",
          "description": "Master Utility-First Philosophy, Flexbox & Spacing with practical examples, architectural deep dives, and key concepts.",
          "duration": 20,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Tailwind CSS provides low-level utility classes that compose directly in your markup without inventing arbitrary class names."
            },
            {
              "type": "code",
              "language": "html",
              "code": "<div class=\"max-w-md mx-auto bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-6 border border-zinc-200 dark:border-zinc-800\">\n  <h2 class=\"text-xl font-bold text-zinc-900 dark:text-white\">Design Token</h2>\n  <p class=\"mt-2 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed\">\n    Build scalable interfaces with utility-first classes.\n  </p>\n  <button class=\"mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl transition-all\">\n    Explore System\n  </button>\n</div>",
              "filename": "card.html"
            },
            {
              "type": "keyPoints",
              "points": [
                "Utility classes eliminate context switching between HTML and separate CSS files.",
                "Tailwind compiler purges unused classes emitting minimal production CSS.",
                "Spacing and sizing follow a consistent 4px multiplier scale."
              ]
            },
            {
              "type": "quiz",
              "question": "What is the primary benefit of the utility-first CSS approach?",
              "options": [
                "It compiles HTML into binary C++ executables.",
                "It removes the need for web browsers to support CSS.",
                "It allows building custom designs directly in markup with consistent constraints without writing custom CSS rules.",
                "It forces all websites to look identical with default presets."
              ],
              "answer": 2,
              "explanation": "Utility classes provide design consistency without leaving markup."
            }
          ]
        },
        {
          "slug": "responsive-variants-and-dark-mode",
          "title": "Responsive Breakpoints, Dark Mode & Theme Tokens",
          "description": "Master Responsive Breakpoints, Dark Mode & Theme Tokens with practical examples, architectural deep dives, and key concepts.",
          "duration": 20,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Tailwind uses mobile-first responsive prefixes (sm:, md:, lg:, xl:) and the dark: variant for seamless dark mode adaptation."
            },
            {
              "type": "code",
              "language": "html",
              "code": "<div class=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4\">\n  <div class=\"p-4 bg-zinc-100 dark:bg-zinc-800 rounded-xl\">\n    <span class=\"text-xs font-semibold text-indigo-600 dark:text-indigo-400\">Metric 1</span>\n  </div>\n</div>",
              "filename": "grid.html"
            },
            {
              "type": "keyPoints",
              "points": [
                "Breakpoints apply from the specified screen width and upwards (mobile-first).",
                "dark: class strategies enable manual or OS-preference dark mode switching.",
                "Arbitrary values like w-[350px] provide escape hatches when needed."
              ]
            },
            {
              "type": "quiz",
              "question": "How do responsive breakpoint variants (e.g. md:grid-cols-2) work in Tailwind CSS?",
              "options": [
                "They apply only on desktop screens smaller than 300px.",
                "They execute JavaScript resize event listeners on the client.",
                "They replace the HTML DOM with mobile canvas elements.",
                "They use mobile-first min-width media queries, applying styles at that breakpoint and larger screens."
              ],
              "answer": 3,
              "explanation": "Tailwind responsive variants use mobile-first min-width media queries."
            }
          ]
        }
      ]
    }
  ]
}
