import type { Tutorial } from '../types'

export const cssCourse: Tutorial = {
  "slug": "css",
  "title": "CSS3 & Modern Layouts: Flexbox, Grid & Animations",
  "shortTitle": "CSS3",
  "description": "Master modern CSS layout systems, Flexbox, CSS Grid, Cascade Layers, Custom Properties, container queries, and GPU-accelerated transitions.",
  "category": "Web Development",
  "difficulty": "beginner",
  "icon": "palette",
  "tags": [
    "CSS3",
    "Flexbox",
    "CSS Grid",
    "Responsive",
    "Animations",
    "Design Systems"
  ],
  "color": "#264de4",
  "updated": "2026-08-17",
  "prerequisites": [
    "Zero prior experience required — built from first principles."
  ],
  "outcomes": [
    "Master modern CSS3 syntax, core mental models, and architectural patterns",
    "Build clean, performant, and production-grade CSS3 applications",
    "Understand trade-offs, testing strategies, and industry best practices"
  ],
  "chapters": [
    {
      "title": "Phase 1: Box Model & Modern Layouts",
      "lessons": [
        {
          "slug": "box-model-and-custom-properties",
          "title": "The CSS Box Model & Custom Properties",
          "description": "Master The CSS Box Model & Custom Properties with practical examples, architectural deep dives, and key concepts.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "The CSS Box Model defines how elements compute dimensions through content, padding, borders, and margins."
            },
            {
              "type": "code",
              "language": "css",
              "code": ":root {\n  --primary: #4f46e5;\n  --spacing-md: 1.5rem;\n  --radius: 0.75rem;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.card {\n  padding: var(--spacing-md);\n  background: var(--primary);\n  border-radius: var(--radius);\n}",
              "filename": "styles.css"
            },
            {
              "type": "keyPoints",
              "points": [
                "box-sizing: border-box includes padding and border in width calculations.",
                "CSS Custom Properties (--var) enable runtime dynamic theming.",
                "Margin collapsing occurs only on vertical block formatting contexts."
              ]
            },
            {
              "type": "quiz",
              "question": "Why is box-sizing: border-box standard practice in modern CSS?",
              "options": [
                "It includes padding and border within the declared width and height, preventing layout overflow calculations.",
                "It converts 2D CSS elements into 3D WebGL canvas objects.",
                "It disables the cascade mechanism entirely.",
                "It forces all elements to display as inline text."
              ],
              "answer": 0,
              "explanation": "border-box makes sizing predictable by accounting for padding inside element dimensions."
            }
          ]
        },
        {
          "slug": "flexbox-deep-dive",
          "title": "Flexbox Architecture: 1D Alignment & Distribution",
          "description": "Master Flexbox Architecture: 1D Alignment & Distribution with practical examples, architectural deep dives, and key concepts.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Flexbox is designed for one-dimensional layouts, offering precise alignment along main and cross axes with flexible item distribution."
            },
            {
              "type": "code",
              "language": "css",
              "code": ".navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n}\n\n.nav-links {\n  display: flex;\n  gap: 1.5rem;\n  list-style: none;\n}",
              "filename": "flex.css"
            },
            {
              "type": "keyPoints",
              "points": [
                "justify-content aligns items along the main axis.",
                "align-items aligns items along the perpendicular cross axis.",
                "gap replaces margin hacks between flex items."
              ]
            },
            {
              "type": "quiz",
              "question": "Which Flexbox property aligns items along the cross axis (perpendicular to flex-direction)?",
              "options": [
                "justify-content",
                "align-items",
                "flex-grow",
                "order"
              ],
              "answer": 1,
              "explanation": "align-items controls cross-axis alignment."
            }
          ]
        }
      ]
    },
    {
      "title": "Phase 2: CSS Grid & Fluid Animations",
      "lessons": [
        {
          "slug": "css-grid-mastery",
          "title": "CSS Grid Mastery: 2D Complex Layout Systems",
          "description": "Master CSS Grid Mastery: 2D Complex Layout Systems with practical examples, architectural deep dives, and key concepts.",
          "duration": 30,
          "blocks": [
            {
              "type": "paragraph",
              "text": "CSS Grid provides a two-dimensional grid-based layout system with explicit columns, rows, auto-fill tracks, and named grid areas."
            },
            {
              "type": "code",
              "language": "css",
              "code": ".dashboard-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 1.5rem;\n}",
              "filename": "grid.css"
            },
            {
              "type": "keyPoints",
              "points": [
                "repeat(auto-fit, minmax(...)) creates responsive grids without media queries.",
                "The fr unit represents a fraction of available free space.",
                "grid-template-areas allows semantic layout mapping."
              ]
            },
            {
              "type": "quiz",
              "question": "What does the \"1fr\" unit represent in CSS Grid?",
              "options": [
                "One fixed root em character unit.",
                "One absolute screen pixel on 1x display density.",
                "One fraction of the available free space in the grid container.",
                "One frame of hardware accelerated CSS animation."
              ],
              "answer": 2,
              "explanation": "The fr unit distributes remaining container space proportionally."
            }
          ]
        },
        {
          "slug": "animations-and-transitions",
          "title": "Hardware-Accelerated Transitions & Keyframes",
          "description": "Master Hardware-Accelerated Transitions & Keyframes with practical examples, architectural deep dives, and key concepts.",
          "duration": 20,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Modern CSS animations leverage the GPU compositor thread using transform and opacity properties to achieve smooth 60fps animations."
            },
            {
              "type": "code",
              "language": "css",
              "code": "@keyframes fadeIn {\n  from { opacity: 0; transform: translateY(10px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n\n.modal {\n  animation: fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;\n  will-change: transform, opacity;\n}",
              "filename": "motion.css"
            },
            {
              "type": "keyPoints",
              "points": [
                "Animate transform and opacity to avoid costly layout reflows and repaints.",
                "cubic-bezier easing functions create natural physical motion curves.",
                "will-change informs the browser to promote elements to dedicated GPU layers."
              ]
            },
            {
              "type": "quiz",
              "question": "Which CSS properties can be animated without triggering layout reflows or repaints?",
              "options": [
                "width and height",
                "margin and padding",
                "top and left",
                "transform and opacity"
              ],
              "answer": 3,
              "explanation": "transform and opacity are calculated entirely on the GPU compositor thread."
            }
          ]
        }
      ]
    }
  ]
}
