import type { Tutorial } from '../types'

export const htmlCourse: Tutorial = {
  "slug": "html",
  "title": "HTML5 & Modern Web Semantics: Zero to Mastery",
  "shortTitle": "HTML5",
  "description": "Master semantic markup, modern document structure, accessible forms, audio/video integration, and SEO best practices from first principles.",
  "category": "Web Development",
  "difficulty": "beginner",
  "icon": "code",
  "tags": [
    "HTML5",
    "Web Standards",
    "Accessibility",
    "SEO",
    "Forms",
    "Semantic Web"
  ],
  "color": "#e34f26",
  "updated": "2026-08-17",
  "prerequisites": [
    "Zero prior experience required — built from first principles."
  ],
  "outcomes": [
    "Master modern HTML5 syntax, core mental models, and architectural patterns",
    "Build clean, performant, and production-grade HTML5 applications",
    "Understand trade-offs, testing strategies, and industry best practices"
  ],
  "chapters": [
    {
      "title": "Phase 1: Foundations & Document Structure",
      "lessons": [
        {
          "slug": "document-structure-and-metadata",
          "title": "HTML5 Document Structure & Metadata",
          "description": "Master HTML5 Document Structure & Metadata with practical examples, architectural deep dives, and key concepts.",
          "duration": 20,
          "blocks": [
            {
              "type": "paragraph",
              "text": "HTML5 is the universal declarative language of the World Wide Web. Understanding document structure, the DOM hierarchy, and viewport metadata is essential for building fast, accessible web applications."
            },
            {
              "type": "definition",
              "term": "DOM (Document Object Model)",
              "plain": "A tree representation of HTML elements that browsers construct in memory to render and script the page.",
              "formal": "W3C Document Object Model Level 3 Core Specification"
            },
            {
              "type": "code",
              "language": "html",
              "code": "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Modern Application</title>\n  </head>\n  <body>\n    <header>\n      <h1>Welcome to Lumen</h1>\n    </header>\n  </body>\n</html>",
              "filename": "index.html"
            },
            {
              "type": "keyPoints",
              "points": [
                "The DOCTYPE declaration triggers modern standards rendering mode.",
                "meta charset UTF-8 prevents encoding vulnerabilities.",
                "Viewport meta enables responsive layout scaling on mobile devices."
              ]
            },
            {
              "type": "quiz",
              "question": "Why is the <!DOCTYPE html> declaration required at the very start of an HTML document?",
              "options": [
                "It tells the browser to render the page in standard modern mode rather than legacy quirks mode.",
                "It compiles the HTML into WebAssembly bytecode.",
                "It enables synchronous multi-threaded socket communication.",
                "It forces the browser to disable stylesheet caching."
              ],
              "answer": 0,
              "explanation": "The DOCTYPE switches the browser layout engine into strict standards compliance."
            }
          ]
        },
        {
          "slug": "semantic-elements-and-hierarchy",
          "title": "Semantic Elements & Content Hierarchy",
          "description": "Master Semantic Elements & Content Hierarchy with practical examples, architectural deep dives, and key concepts.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Semantic tags convey meaning to search engines and assistive screen readers, improving SEO and web accessibility without extra code."
            },
            {
              "type": "analogy",
              "text": "Using generic divs for everything is like writing a book without chapters, headings, or index — readers and search tools cannot distinguish the header from the footer."
            },
            {
              "type": "code",
              "language": "html",
              "code": "<main>\n  <article>\n    <header>\n      <h2>Understanding Web Semantics</h2>\n      <time datetime=\"2026-08-17\">Aug 17, 2026</time>\n    </header>\n    <p>Semantic markup provides structural meaning to browsers and search crawlers.</p>\n  </article>\n  <aside>\n    <h3>Related Topics</h3>\n  </aside>\n</main>",
              "filename": "article.html"
            },
            {
              "type": "keyPoints",
              "points": [
                "Use <main> for primary content and only once per page.",
                "Articles represent self-contained syndicated content.",
                "Sections represent thematic groupings of content with a heading."
              ]
            },
            {
              "type": "quiz",
              "question": "What is the primary benefit of semantic HTML elements like <article>, <nav>, and <aside>?",
              "options": [
                "They automatically apply modern gradient styling to the layout.",
                "They improve accessibility for assistive technologies and convey structural meaning to search engines.",
                "They prevent all cross-site scripting (XSS) attacks automatically.",
                "They bypass the browser JavaScript event loop for faster rendering."
              ],
              "answer": 1,
              "explanation": "Semantic tags provide machine-readable intent to browsers, search engines, and screen readers."
            }
          ]
        }
      ]
    },
    {
      "title": "Phase 2: Forms, Media & Web Accessibility",
      "lessons": [
        {
          "slug": "modern-forms-and-validation",
          "title": "Modern Forms, Input Types & Native Validation",
          "description": "Master Modern Forms, Input Types & Native Validation with practical examples, architectural deep dives, and key concepts.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Modern HTML5 forms provide native input types, constraint validation attributes, and accessible labeling without relying on JavaScript libraries."
            },
            {
              "type": "code",
              "language": "html",
              "code": "<form action=\"/api/register\" method=\"POST\">\n  <label for=\"email\">Work Email</label>\n  <input id=\"email\" type=\"email\" required placeholder=\"name@company.com\" />\n\n  <label for=\"age\">Age</label>\n  <input id=\"age\" type=\"number\" min=\"18\" max=\"100\" required />\n\n  <button type=\"submit\">Create Account</button>\n</form>",
              "filename": "form.html"
            },
            {
              "type": "keyPoints",
              "points": [
                "Always pair inputs with explicit <label for=\"id\"> tags for screen readers.",
                "Use native types (email, number, url, date) for automatic mobile keyboard optimization.",
                "Constraint validation attributes (required, min, max, pattern) validate before submission."
              ]
            },
            {
              "type": "quiz",
              "question": "How does pairing an <input> with a <label for=\"...\"> improve UX and accessibility?",
              "options": [
                "It converts the text input into an encrypted cryptographic stream.",
                "It automatically submits the form via WebSocket.",
                "It establishes a programmatic association for screen readers and allows users to click the label to focus the input.",
                "It disables autocomplete across all third-party password managers."
              ],
              "answer": 2,
              "explanation": "Explicit label association assists assistive devices and expands the clickable hit target."
            }
          ]
        },
        {
          "slug": "multimedia-and-canvas",
          "title": "Responsive Images, Video & Canvas Graphics",
          "description": "Master Responsive Images, Video & Canvas Graphics with practical examples, architectural deep dives, and key concepts.",
          "duration": 20,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Responsive media tags (<picture>, srcset, video, audio) allow browsers to download optimal image resolutions based on device DPI and network speed."
            },
            {
              "type": "code",
              "language": "html",
              "code": "<picture>\n  <source srcset=\"hero-large.webp\" media=\"(min-width: 1024px)\" type=\"image/webp\" />\n  <source srcset=\"hero-medium.webp\" media=\"(min-width: 640px)\" type=\"image/webp\" />\n  <img src=\"hero-fallback.jpg\" alt=\"Engineering Team Collaboration\" loading=\"lazy\" />\n</picture>",
              "filename": "responsive-image.html"
            },
            {
              "type": "keyPoints",
              "points": [
                "loading=\"lazy\" delays off-screen image loading until near the viewport.",
                "The <picture> element enables art direction and format negotiation (AVIF/WebP).",
                "Always supply descriptive alt attributes for non-decorative images."
              ]
            },
            {
              "type": "quiz",
              "question": "What is the purpose of the loading=\"lazy\" attribute on <img> tags?",
              "options": [
                "It renders low-resolution vector placeholders permanently.",
                "It converts animated GIF files into static SVG graphics.",
                "It restricts image rendering to background Web Workers.",
                "It defers image fetching until the image is close to scrolling into the viewport, saving bandwidth and improving load speed."
              ],
              "answer": 3,
              "explanation": "Lazy loading reduces initial page payload and improves Core Web Vitals."
            }
          ]
        }
      ]
    }
  ]
}
