import type { Tutorial } from '../types'

export const cssCourse: Tutorial = {
  "slug": "css",
  "title": "CSS3 & Modern Layout Systems: Zero to Mastery",
  "shortTitle": "CSS3",
  "description": "A complete, beginner-to-mastery path covering how CSS styles HTML, selectors, the box model, Flexbox 1D layouts, CSS Grid 2D layouts, responsive design, and CSS variables.",
  "category": "Web Development",
  "difficulty": "beginner",
  "icon": "code",
  "tags": [
    "CSS3",
    "Flexbox",
    "CSS Grid",
    "Custom Properties",
    "Animations",
    "Responsive Design"
  ],
  "color": "#264de4",
  "updated": "2026-08-18",
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
      "title": "Chapter 1: CSS Foundations & The Box Model (Beginner)",
      "lessons": [
        {
          "slug": "what-is-css-and-how-it-works",
          "title": "What is CSS & How Does Styling Work?",
          "description": "Understand what CSS is, inline vs internal vs external stylesheets, CSS rules, selectors, properties, and values.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "Level: Beginner | Prerequisites: HTML5 Basics"
            },
            {
              "type": "paragraph",
              "text": "CSS (Cascading Style Sheets) is the language used to describe the presentation, color, typography, spacing, and layout of an HTML document."
            },
            {
              "type": "definition",
              "term": "CSS Rule Structure",
              "plain": "A CSS rule consists of a Selector (which elements to target) and a Declaration Block containing Property: Value pairs enclosed in curly braces.",
              "formal": "CSS Rule = Selector { property: value; }"
            },
            {
              "type": "analogy",
              "title": "The Interior Designer Analogy",
              "text": "If HTML creates the bare walls and rooms of a building, CSS is the interior designer choosing paint swatches, lighting fixtures, curtain fabrics, and furniture placement."
            },
            {
              "type": "code",
              "language": "css",
              "code": "/* Target all <h1> elements and apply styles */\nh1 {\n  color: #6366f1;          /* Property: color, Value: indigo hex */\n  font-size: 2.5rem;       /* Property: font-size, Value: 40px */\n  text-align: center;      /* Center the text horizontally */\n  margin-bottom: 1rem;\n}",
              "filename": "styles.css"
            },
            {
              "type": "keyPoints",
              "points": [
                "Always use external stylesheets (<link rel=\"stylesheet\" href=\"style.css\">) for production code.",
                "Every CSS declaration ends with a semicolon (;).",
                "Properties are predefined keywords; values set the specific styling."
              ]
            },
            {
              "type": "quiz",
              "question": "What are the three core parts of a CSS rule?",
              "options": [
                "Selector, Property, and Value.",
                "HTML tag, URL, and Script.",
                "Variable, Function, and Return.",
                "Database, Table, and Row."
              ],
              "answer": 0,
              "explanation": "A CSS rule targets elements with a Selector, then applies styling using Property: Value declarations."
            }
          ]
        },
        {
          "slug": "css-selectors-classes-and-ids",
          "title": "CSS Selectors: Element, Class, ID & Pseudo-Classes",
          "description": "Master targeting HTML elements with tag selectors, reusable class selectors (.class), unique ID selectors (#id), and interactive pseudo-classes (:hover, :focus).",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "CSS selectors determine which HTML elements on a page receive specific styles. Writing clean, maintainable CSS relies on using reusable class selectors rather than overly specific tag or ID selectors."
            },
            {
              "type": "definition",
              "term": "Class Selector (.name) vs ID Selector (#name)",
              "plain": "Classes (.card) can be reused across dozens of elements on a page. IDs (#header) must be strictly unique to a single element.",
              "formal": "W3C CSS Selectors Level 4 Specification"
            },
            {
              "type": "code",
              "language": "css",
              "code": "/* Element Selector: Targets every <button> on the page */\nbutton {\n  font-family: inherit;\n  cursor: pointer;\n}\n\n/* Class Selector: Reusable component class */\n.btn-primary {\n  background-color: #6366f1;\n  color: #ffffff;\n  padding: 10px 20px;\n  border-radius: 8px;\n  border: none;\n}\n\n/* Pseudo-Class: Applies style only when user hovers mouse */\n.btn-primary:hover {\n  background-color: #4f46e5;\n}",
              "filename": "buttons.css"
            },
            {
              "type": "keyPoints",
              "points": [
                "Use classes (.btn) for almost all styling to keep specificity manageable.",
                "IDs (#main) have high specificity and cannot be reused on the same page.",
                "Pseudo-classes (:hover, :focus, :active) style elements during user interactions."
              ]
            },
            {
              "type": "quiz",
              "question": "Why should class selectors (.name) be preferred over ID selectors (#name) for styling CSS components?",
              "options": [
                "Classes execute on the GPU.",
                "Classes are reusable across multiple elements and have lower, more manageable specificity.",
                "IDs cannot contain text strings.",
                "Classes automatically disable browser caching."
              ],
              "answer": 1,
              "explanation": "Class selectors are reusable and avoid high specificity conflicts that make CSS difficult to override."
            }
          ]
        },
        {
          "slug": "colors-typography-and-google-fonts",
          "title": "Colors, Typography & Font Management",
          "description": "Style text like a professional: Hex, RGB, HSL colors, font-family font stacks, Google Fonts, line-height, and font weights.",
          "duration": 20,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Typography and color form the core visual identity of a web application. CSS supports named colors, Hex codes (#6366f1), RGB/RGBA (rgb(99, 102, 241)), and HSL (Hue, Saturation, Lightness)."
            },
            {
              "type": "code",
              "language": "css",
              "code": "/* Import Google Font */\n@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');\n\nbody {\n  font-family: 'Inter', system-ui, sans-serif;\n  color: #1e293b;          /* Dark slate foreground text */\n  background-color: #f8fafc; /* Light slate background */\n  line-height: 1.6;        /* 160% line height for readability */\n}\n\nh1 {\n  font-weight: 800;        /* Extra bold */\n  letter-spacing: -0.02em; /* Tight letter tracking */\n}",
              "filename": "typography.css"
            },
            {
              "type": "keyPoints",
              "points": [
                "Always provide a fallback font stack ending in sans-serif or serif.",
                "Use line-height between 1.5 and 1.7 for optimal body text readability.",
                "HSL is the most intuitive color model for programmatic shading and themes."
              ]
            },
            {
              "type": "quiz",
              "question": "What is the purpose of providing multiple fonts in a font-family property like font-family: \"Inter\", system-ui, sans-serif;?",
              "options": [
                "It mixes all three fonts together to create a hybrid font.",
                "It increases text rendering speed by 300%.",
                "It provides fallback fonts so if the first font fails to download, the browser uses the next available system font.",
                "It translates English characters into Unicode symbols."
              ],
              "answer": 2,
              "explanation": "Font stacks ensure graceful degradation if custom web fonts are blocked or fail to load."
            }
          ]
        },
        {
          "slug": "the-css-box-model-and-sizing",
          "title": "The CSS Box Model: Margin, Border, Padding & Content",
          "description": "Master the fundamental layout calculation of the web: Content, Padding, Border, Margin, and why box-sizing: border-box is essential.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Every element on a web page is enclosed in a rectangular box. The CSS Box Model calculates how much space an element occupies on the screen based on four concentric areas: Content, Padding, Border, and Margin."
            },
            {
              "type": "definition",
              "term": "The 4 Box Model Layers",
              "plain": "1. Content: Text or image. 2. Padding: Transparent space inside the border. 3. Border: The outer line. 4. Margin: Transparent space outside the border separating other elements.",
              "formal": "W3C CSS Box Model Module Level 3"
            },
            {
              "type": "analogy",
              "title": "The Framed Painting Metaphor",
              "text": "Imagine a framed picture on your wall. The canvas painting is the Content. The white matting around the painting is the Padding. The wooden frame is the Border. The empty wall space separating this frame from the next picture is the Margin."
            },
            {
              "type": "code",
              "language": "css",
              "code": "/* Universal Box Sizing Reset: Standard in all professional web projects */\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\n.card {\n  width: 300px;           /* Exact total outer width is 300px */\n  padding: 20px;          /* Space inside border */\n  border: 2px solid #cbd5e1;\n  margin-bottom: 24px;    /* Space outside border pushing next card */\n}",
              "filename": "box-model.css"
            },
            {
              "type": "callout",
              "kind": "tip",
              "title": "Why border-box is Universal",
              "text": "Without box-sizing: border-box, adding 20px padding and 2px border to a 300px wide box increases its total width to 344px (300+20+20+2+2), breaking layouts unexpectedly!"
            },
            {
              "type": "keyPoints",
              "points": [
                "Padding is inside the border; Margin is outside the border.",
                "Always apply box-sizing: border-box globally.",
                "Vertical margins of adjacent block elements collapse into the larger margin."
              ]
            },
            {
              "type": "exercise",
              "prompt": "Style a .card component with a fixed width of 360px, 24px padding, 2px border, 20px bottom margin, and box-sizing: border-box.",
              "hint": "Declare box-sizing: border-box so the 360px width includes padding and border.",
              "solution": ".card {\n  box-sizing: border-box;\n  width: 360px;\n  padding: 24px;\n  border: 2px solid #e2e8f0;\n  margin-bottom: 20px;\n  border-radius: 12px;\n}",
              "language": "css"
            },
            {
              "type": "quiz",
              "question": "When box-sizing: border-box is applied, what does the width property represent?",
              "options": [
                "Only the inner text content width.",
                "The screen resolution of the monitor.",
                "The width of the parent container.",
                "The total width of the element including content, padding, and border."
              ],
              "answer": 3,
              "explanation": "border-box makes width calculations predictable by including padding and borders inside the declared width."
            }
          ]
        }
      ]
    },
    {
      "title": "Chapter 2: Modern Layout Systems & Responsive Design (Mastery)",
      "lessons": [
        {
          "slug": "display-property-and-positioning",
          "title": "Display Property & CSS Positioning",
          "description": "Understand block vs inline vs inline-block, and master relative, absolute, fixed, and sticky positioning.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "The `display` property controls how an element flows in the document layout. The `position` property allows taking elements out of normal flow for modal overlays, sticky headers, and dropdowns."
            },
            {
              "type": "definition",
              "term": "Position Values",
              "plain": "static (normal flow), relative (offset relative to itself), absolute (positioned relative to closest positioned ancestor), fixed (fixed to viewport window), sticky (scrolls then sticks).",
              "formal": "CSS Positioned Layout Module Level 3"
            },
            {
              "type": "code",
              "language": "css",
              "code": "/* Sticky Navigation Bar */\n.navbar {\n  position: sticky;\n  top: 0;\n  z-index: 50;\n  background: #ffffff;\n  border-bottom: 1px solid #e2e8f0;\n}\n\n/* Absolute Badge positioned inside Relative Card */\n.card {\n  position: relative; /* Anchor container for absolute children */\n  padding: 24px;\n}\n\n.badge {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  background: #ef4444;\n  color: white;\n}",
              "filename": "positioning.css"
            },
            {
              "type": "keyPoints",
              "points": [
                "block elements start on a new line and take full available width.",
                "inline elements only take up as much width as their content.",
                "absolute children require a positioned parent (usually position: relative)."
              ]
            },
            {
              "type": "quiz",
              "question": "To position a badge in the top-right corner of a card using position: absolute, what position value must the parent card have?",
              "options": [
                "position: relative (or any non-static value)",
                "position: static",
                "position: inline",
                "display: none"
              ],
              "answer": 0,
              "explanation": "An absolutely positioned element positions itself relative to its closest ancestor that has a non-static position."
            }
          ]
        },
        {
          "slug": "flexbox-one-dimensional-layouts",
          "title": "Flexbox: 1D Alignment, Direction & Distribution",
          "description": "Master Flexbox from first principles: Main Axis vs Cross Axis, justify-content, align-items, flex-direction, and flex-grow.",
          "duration": 30,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Flexbox is the modern one-dimensional layout model for aligning items in rows or columns. It makes centring elements, distributing equal spacing, and building responsive toolbars effortless."
            },
            {
              "type": "definition",
              "term": "Main Axis vs Cross Axis",
              "plain": "In a row container, the Main Axis is horizontal (controlled by justify-content) and Cross Axis is vertical (controlled by align-items). In a column container, they switch.",
              "formal": "CSS Flexible Box Layout Module Level 1"
            },
            {
              "type": "code",
              "language": "css",
              "code": ".navbar {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between; /* Space items out evenly across Main Axis */\n  align-items: center;            /* Center items vertically across Cross Axis */\n  gap: 16px;\n}\n\n/* Center anything vertically and horizontally in 3 lines */\n.hero-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 400px;\n}",
              "filename": "flexbox.css"
            },
            {
              "type": "keyPoints",
              "points": [
                "justify-content controls alignment along the main axis.",
                "align-items controls alignment along the cross axis.",
                "gap sets space between flex items without margin hacks."
              ]
            },
            {
              "type": "exercise",
              "prompt": "Write CSS to create a horizontal navigation bar that spaces items evenly across the main axis and vertically centers them with a 16px gap.",
              "hint": "Use display: flex, justify-content: space-between, align-items: center, and gap: 16px.",
              "solution": ".navbar {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  padding: 12px 24px;\n}",
              "language": "css"
            },
            {
              "type": "quiz",
              "question": "Which CSS rule combination effortlessly centers an element both horizontally and vertically inside a Flex container?",
              "options": [
                "text-align: middle; vertical-align: middle;",
                "justify-content: center; align-items: center;",
                "float: center; margin: auto;",
                "position: center; display: block;"
              ],
              "answer": 1,
              "explanation": "In a Flex container, justify-content: center centers along the main axis, and align-items: center centers along the cross axis."
            }
          ]
        },
        {
          "slug": "css-grid-two-dimensional-layouts",
          "title": "CSS Grid: 2D Spatial Layouts & Auto-Fit",
          "description": "Construct full 2-dimensional page architectures using explicit columns, fr fractional units, repeat(), minmax(), and auto-fit.",
          "duration": 30,
          "blocks": [
            {
              "type": "paragraph",
              "text": "While Flexbox is for 1-dimensional rows OR columns, CSS Grid is for 2-dimensional layouts (rows AND columns simultaneously). Grid allows designing responsive dashboards and cards without writing media queries."
            },
            {
              "type": "definition",
              "term": "The fr (Fractional) Unit",
              "plain": "A flexible unit that represents a fraction of the remaining free space inside a Grid container.",
              "formal": "CSS Grid Fractional Free-Space Unit"
            },
            {
              "type": "code",
              "language": "css",
              "code": "/* Responsive 3-Column Card Grid */\n.grid-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr); /* 3 equal columns */\n  gap: 24px;\n}\n\n/* Magical Responsive Grid without Media Queries */\n.auto-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 24px;\n}",
              "filename": "grid.css"
            },
            {
              "type": "keyPoints",
              "points": [
                "Grid controls both rows and columns at the same time.",
                "repeat(auto-fit, minmax(280px, 1fr)) creates fluidly responsive cards automatically.",
                "The fr unit shares remaining space proportionally."
              ]
            },
            {
              "type": "exercise",
              "prompt": "Create a responsive auto-fitting grid of cards that automatically adjusts between 1, 2, and 3 columns without using any media queries.",
              "hint": "Use grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) and gap: 24px.",
              "solution": ".card-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 24px;\n}",
              "language": "css"
            },
            {
              "type": "quiz",
              "question": "What happens when you use grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); on a grid container?",
              "options": [
                "It restricts the grid to exactly 1 column.",
                "It crashes mobile browser viewports.",
                "It automatically creates as many 250px+ columns as will fit on screen, stretching them to fill available space.",
                "It converts HTML elements into image thumbnails."
              ],
              "answer": 2,
              "explanation": "repeat(auto-fit, minmax(...)) dynamically calculates columns based on viewport width without needing media queries."
            }
          ]
        },
        {
          "slug": "responsive-design-and-css-custom-properties",
          "title": "Responsive Media Queries & CSS Variables",
          "description": "Make websites mobile-responsive with @media queries, and build dynamic light/dark themes with native CSS custom properties.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Responsive Web Design ensures that websites look great on smartphones, tablets, laptops, and 4K desktop monitors. CSS Variables (`--name`) allow defining design tokens like colors and radii in one place and reusing them across the site."
            },
            {
              "type": "code",
              "language": "css",
              "code": "/* Define Design Tokens on Root */\n:root {\n  --primary-color: #6366f1;\n  --bg-color: #ffffff;\n  --text-color: #0f172a;\n}\n\n/* Dark Mode Overrides */\n[data-theme=\"dark\"] {\n  --bg-color: #090d16;\n  --text-color: #f8fafc;\n}\n\nbody {\n  background-color: var(--bg-color);\n  color: var(--text-color);\n}\n\n/* Mobile-First Responsive Breakpoint */\n@media (min-width: 768px) {\n  .sidebar-layout {\n    display: grid;\n    grid-template-columns: 240px 1fr;\n  }\n}",
              "filename": "responsive-theme.css"
            },
            {
              "type": "keyPoints",
              "points": [
                "Mobile-first design writes base styles for smartphones first, then adds @media (min-width: ...) for larger screens.",
                "CSS custom properties are referenced using var(--name).",
                "Changing a CSS variable updates every element that uses it immediately."
              ]
            },
            {
              "type": "quiz",
              "question": "In mobile-first responsive design, which type of media query is standard for progressively enhancing desktop layouts?",
              "options": [
                "@media (max-width: 768px)",
                "@media (orientation: portrait)",
                "@media (hover: none)",
                "@media (min-width: 768px)"
              ],
              "answer": 3,
              "explanation": "Mobile-first design starts with base styles for small screens, then uses min-width queries to add layout enhancements on larger viewports."
            }
          ]
        }
      ]
    }
  ]
}
