import type { Tutorial } from '../types'

export const htmlCourse: Tutorial = {
  "slug": "html",
  "title": "HTML5 & Modern Web Semantics: Zero to Mastery",
  "shortTitle": "HTML5",
  "description": "A complete, beginner-to-mastery path covering how the web works, HTML document structure, text formatting, links, lists, media, accessible forms, and modern semantic architecture.",
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
  "updated": "2026-08-18",
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
      "title": "Chapter 1: Web Foundations & Document Structure (Beginner)",
      "lessons": [
        {
          "slug": "how-the-web-works-and-html-basics",
          "title": "How the Web Works & What is HTML?",
          "description": "Learn what the Internet is, how browsers request web pages, and the role of HTML as the foundational language of the web.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "Level: Beginner | Prerequisites: Zero prior experience"
            },
            {
              "type": "paragraph",
              "text": "The World Wide Web is a global network of interconnected computers. When you type a website address into your browser, your computer (the client) sends an HTTP request across the internet to a server. The server replies with three primary files: HTML (the structure), CSS (the style), and JavaScript (the interactivity)."
            },
            {
              "type": "definition",
              "term": "HTML (HyperText Markup Language)",
              "plain": "The standard declarative language used to create the structure and content of web pages.",
              "formal": "W3C / WHATWG HTML5 Living Standard"
            },
            {
              "type": "analogy",
              "title": "The House Metaphor",
              "text": "Think of building a website like building a house. HTML is the concrete foundation, wooden framing, and brick walls. CSS is the interior paint, floor tiles, and wallpaper. JavaScript is the electrical wiring, water plumbing, and automated garage door opener."
            },
            {
              "type": "definition",
              "term": "HTML Tag & Element",
              "plain": "A tag is a keyword enclosed in angle brackets like <p> (opening) and </p> (closing). An element is the entire combination of opening tag, content, and closing tag.",
              "formal": "HTML Element = Opening Tag + Text/Children + Closing Tag"
            },
            {
              "type": "code",
              "language": "html",
              "code": "<!-- An HTML Element consists of an opening tag, content, and closing tag -->\n<p>Hello, World! This is my first web page.</p>\n\n<!-- Some elements are self-closing (void elements) because they do not wrap text -->\n<img src=\"logo.png\" alt=\"Company Logo\">\n<br>\n<hr>",
              "filename": "basics.html"
            },
            {
              "type": "keyPoints",
              "points": [
                "HTML provides structure; CSS provides style; JavaScript provides behavior.",
                "Tags usually come in pairs: opening <tag> and closing </tag>.",
                "Void tags like <img> and <input> do not have closing tags."
              ]
            },
            {
              "type": "exercise",
              "prompt": "Create a minimal HTML5 document with a level-1 heading saying \"Engineering Principles\" and a paragraph containing text with a strong emphasis.",
              "hint": "Use <h1> for the title, <p> for the quote, and <strong> to emphasize words.",
              "solution": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Principles</title>\n</head>\n<body>\n  <h1>Engineering Principles</h1>\n  <p>Software reliability is <strong>essential</strong> for modern systems.</p>\n</body>\n</html>",
              "language": "html"
            },
            {
              "type": "quiz",
              "question": "What is the primary role of HTML in a website?",
              "options": [
                "To define the structure, content, and meaning of the web page.",
                "To style colors, borders, and animations.",
                "To run backend database queries on the server.",
                "To compile C++ code into machine instructions."
              ],
              "answer": 0,
              "explanation": "HTML is the structural markup language that defines headings, paragraphs, images, and page content."
            }
          ]
        },
        {
          "slug": "html-document-skeleton-and-head-metadata",
          "title": "Document Skeleton & Head Metadata",
          "description": "Understand <!DOCTYPE html>, the <html> root element, the <head> metadata container, and the visible <body>.",
          "duration": 20,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Every valid HTML5 document follows a strict global skeleton. It starts with the doctype declaration, followed by the root <html> element containing two mandatory children: <head> (metadata not visible to users) and <body> (everything visible in the browser window)."
            },
            {
              "type": "definition",
              "term": "<!DOCTYPE html>",
              "plain": "A declaration at the very top of a document that instructs the browser to render the page in modern standards compliance mode.",
              "formal": "HTML5 Standards Mode Document Type Trigger"
            },
            {
              "type": "definition",
              "term": "<head> vs <body>",
              "plain": "<head> contains machine-readable metadata like title, charset, and stylesheets. <body> contains all visible text, images, and interactive UI.",
              "formal": "HTML Document Hierarchy Specification"
            },
            {
              "type": "code",
              "language": "html",
              "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <!-- Character encoding so special symbols & emojis render correctly -->\n  <meta charset=\"UTF-8\">\n  <!-- Viewport meta tag: required for responsive mobile scaling -->\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My First Website</title>\n</head>\n<body>\n  <h1>Welcome to Web Engineering</h1>\n  <p>Everything inside the body tag is rendered visually on the screen.</p>\n</body>\n</html>",
              "filename": "index.html"
            },
            {
              "type": "callout",
              "kind": "tip",
              "title": "Mobile Viewport Meta Tag",
              "text": "Without <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">, mobile browsers assume the site was built for a 980px desktop screen and zoom out, making text unreadably tiny."
            },
            {
              "type": "keyPoints",
              "points": [
                "Always start with <!DOCTYPE html> to prevent legacy quirks mode.",
                "Set the lang attribute on <html> to assist screen readers and search engines.",
                "The <title> tag in <head> sets the browser tab title and search engine search result headline."
              ]
            },
            {
              "type": "exercise",
              "prompt": "Add the mobile viewport meta tag and UTF-8 charset inside the <head> of an HTML document, setting the title to \"Lumen Architecture\".",
              "hint": "Use <meta charset=\"UTF-8\"> and <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">.",
              "solution": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Lumen Architecture</title>\n</head>\n<body>\n  <h1>Ready for mobile devices</h1>\n</body>\n</html>",
              "language": "html"
            },
            {
              "type": "quiz",
              "question": "What is the purpose of the <meta name=\"viewport\" ...> tag inside the <head> section?",
              "options": [
                "It increases the internet download speed of the webpage.",
                "It instructs mobile browsers to scale the webpage to the device physical screen width.",
                "It encrypts the HTML file with SSL certificates.",
                "It connects the webpage to a SQL database."
              ],
              "answer": 1,
              "explanation": "The viewport meta tag ensures responsive mobile scaling so pages render at mobile screen width without desktop zoom-out."
            }
          ]
        },
        {
          "slug": "headings-paragraphs-and-text-formatting",
          "title": "Headings, Paragraphs & Text Formatting",
          "description": "Master headings <h1> through <h6>, paragraphs <p>, bold <strong>, italic <em>, line breaks, and blockquotes.",
          "duration": 20,
          "blocks": [
            {
              "type": "paragraph",
              "text": "HTML text formatting elements organize unstructured text into meaningful outlines. Search engines like Google rely on heading hierarchy (h1 through h6) to understand what your page is about."
            },
            {
              "type": "definition",
              "term": "Heading Hierarchy (h1 - h6)",
              "plain": "A 6-level ranking system for section titles. <h1> is the main topic of the page, <h2> represents major sections, and <h3> represents subsections.",
              "formal": "Heading Level Rank 1 through 6"
            },
            {
              "type": "definition",
              "term": "<strong> vs <em>",
              "plain": "<strong> indicates strong importance (rendered bold). <em> indicates emphasized stress (rendered italic). Both convey meaning to screen readers, unlike generic <b> and <i>.",
              "formal": "Semantic Text Emphasis Level"
            },
            {
              "type": "code",
              "language": "html",
              "code": "<h1>Software Engineering from First Principles</h1>\n\n<h2>Introduction</h2>\n<p>Software is written by humans to instruct computers how to solve problems.</p>\n\n<p>It is <strong>critical</strong> to understand fundamentals before using frameworks.</p>\n\n<blockquote>\n  <p>\"Simplicity is prerequisite for reliability.\" — Edsger W. Dijkstra</p>\n</blockquote>",
              "filename": "text.html"
            },
            {
              "type": "keyPoints",
              "points": [
                "Use only one <h1> per page representing the main subject.",
                "Never skip heading levels (e.g. going from <h1> directly to <h3>).",
                "Use <strong> for semantic importance and <em> for semantic vocal stress."
              ]
            },
            {
              "type": "exercise",
              "prompt": "Write an article outline with an <h1> main title, two <h2> subsections, and a <blockquote> quote with an author attribution.",
              "hint": "Use <h1> for the article title, <h2> for sub-topics, and <blockquote><p>Quote</p></blockquote>.",
              "solution": "<h1>Frontend Architecture</h1>\n\n<h2>1. Component Modularity</h2>\n<p>Isolating state simplifies maintenance.</p>\n\n<h2>2. Performance Optimization</h2>\n<blockquote>\n  <p>\"Premature optimization is the root of all evil.\" — Donald Knuth</p>\n</blockquote>",
              "language": "html"
            },
            {
              "type": "quiz",
              "question": "Why should you use <strong> instead of <b> when you want to emphasize important text?",
              "options": [
                "<strong> uses less computer memory than <b>.",
                "<b> is deprecated and deleted in modern browsers.",
                "<strong> conveys semantic importance to screen readers and search engines, while <b> only changes visual appearance.",
                "<strong> automatically translates text into multiple languages."
              ],
              "answer": 2,
              "explanation": "<strong> provides semantic meaning to assistive technologies and search crawlers, not just visual bold styling."
            }
          ]
        },
        {
          "slug": "links-lists-and-navigation",
          "title": "Hyperlinks, Lists & Web Navigation",
          "description": "Connect pages with anchor tags <a>, relative vs absolute URLs, ordered lists <ol>, and unordered lists <ul>.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "The defining feature of the web is the \"hyperlink\" — the ability to click text or images and navigate to another page or external website. Links are created using the anchor element <a> with the href attribute."
            },
            {
              "type": "definition",
              "term": "Anchor Tag <a> & href",
              "plain": "<a> creates a clickable hyperlink. href (Hypertext Reference) specifies the destination URL where the browser should navigate.",
              "formal": "HTML Anchor Element Specification"
            },
            {
              "type": "definition",
              "term": "Relative URL vs Absolute URL",
              "plain": "An absolute URL includes the full domain (https://example.com/page). A relative URL points to a file within the same website (/about.html).",
              "formal": "URI Reference Specification RFC 3986"
            },
            {
              "type": "code",
              "language": "html",
              "code": "<!-- Absolute link to external website -->\n<a href=\"https://developer.mozilla.org\" target=\"_blank\" rel=\"noopener noreferrer\">\n  MDN Web Docs\n</a>\n\n<!-- Relative link to internal page -->\n<a href=\"/tutorials/css\">Learn CSS</a>\n\n<!-- Unordered List (Bullet points) -->\n<ul>\n  <li>HTML5 Foundations</li>\n  <li>CSS3 Styling</li>\n  <li>JavaScript Logic</li>\n</ul>\n\n<!-- Ordered List (Numbered steps) -->\n<ol>\n  <li>Install a code editor</li>\n  <li>Create an index.html file</li>\n  <li>Open the file in a browser</li>\n</ol>",
              "filename": "links-and-lists.html"
            },
            {
              "type": "callout",
              "kind": "warning",
              "title": "Security with target=\"_blank\"",
              "text": "When opening links in a new tab with target=\"_blank\", always add rel=\"noopener noreferrer\" to prevent the newly opened page from controlling your page via window.opener."
            },
            {
              "type": "keyPoints",
              "points": [
                "<a> tag href specifies destination URLs.",
                "Use <ul> for items where order does not matter; use <ol> for sequential numbered steps.",
                "Always use rel=\"noopener noreferrer\" on target=\"_blank\" links for security."
              ]
            },
            {
              "type": "exercise",
              "prompt": "Create an accessible navigation bar containing an unordered list of three links (Home, Courses, Roadmaps) with appropriate anchor tags.",
              "hint": "Wrap a <ul> inside a <nav aria-label=\"Main\"> element with <li><a href=\"...\">Text</a></li>.",
              "solution": "<nav aria-label=\"Main Navigation\">\n  <ul>\n    <li><a href=\"/\">Home</a></li>\n    <li><a href=\"/courses\">Courses</a></li>\n    <li><a href=\"/roadmaps\">Roadmaps</a></li>\n  </ul>\n</nav>",
              "language": "html"
            },
            {
              "type": "quiz",
              "question": "When should you use an ordered list <ol> instead of an unordered list <ul>?",
              "options": [
                "When the list contains more than 100 items.",
                "When the list items contain image thumbnails.",
                "When the list is rendered on a mobile device.",
                "When the sequence and numerical order of the items matters (such as recipe steps or tutorials)."
              ],
              "answer": 3,
              "explanation": "<ol> renders sequential numbers for steps where order is important, whereas <ul> renders bullet points."
            }
          ]
        }
      ]
    },
    {
      "title": "Chapter 2: Semantic Layout, Media & Forms (Mastery)",
      "lessons": [
        {
          "slug": "images-audio-and-video-media",
          "title": "Images, Audio & Video Media Elements",
          "description": "Embed images with <img>, descriptive alt text, responsive <picture>, and native HTML5 <video> and <audio>.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Media elements enrich web content. To ensure fast performance and accessibility, images must include alt descriptions and explicit dimensions, while video and audio provide native playback controls."
            },
            {
              "type": "definition",
              "term": "alt Attribute",
              "plain": "A text alternative describing an image for blind users with screen readers and shown if the image fails to load.",
              "formal": "W3C Accessible Rich Internet Image Alternative Text"
            },
            {
              "type": "code",
              "language": "html",
              "code": "<!-- Responsive Image with Accessibility Description -->\n<img \n  src=\"/images/server-rack.webp\" \n  alt=\"High-density data center server rack with blinking blue activity LEDs\" \n  width=\"800\" \n  height=\"450\" \n  loading=\"lazy\"\n>\n\n<!-- Native HTML5 Video with Controls -->\n<video controls width=\"640\" height=\"360\" poster=\"/images/poster.jpg\">\n  <source src=\"/videos/intro.mp4\" type=\"video/mp4\">\n  <source src=\"/videos/intro.webm\" type=\"video/webm\">\n  <track kind=\"captions\" src=\"/captions/intro-en.vtt\" srclang=\"en\" label=\"English\" default>\n  <p>Your browser does not support HTML5 video.</p>\n</video>",
              "filename": "media.html"
            },
            {
              "type": "keyPoints",
              "points": [
                "Always provide descriptive alt text for images.",
                "Include width and height attributes to prevent layout shifts (CLS).",
                "Use loading=\"lazy\" to defer downloading offscreen images until the user scrolls near them."
              ]
            },
            {
              "type": "exercise",
              "prompt": "Embed a responsive WebP image with explicit width (800) and height (450), a descriptive alt text, and lazy loading.",
              "hint": "Use loading=\"lazy\" alongside src, alt, width, and height.",
              "solution": "<img \n  src=\"/images/server-cluster.webp\"\n  alt=\"High availability cloud server cluster in a modern data center\"\n  width=\"800\"\n  height=\"450\"\n  loading=\"lazy\"\n>",
              "language": "html"
            },
            {
              "type": "quiz",
              "question": "Why is the alt attribute required on every <img> element?",
              "options": [
                "It allows screen readers to read the image description to visually impaired users and displays fallback text if images fail.",
                "It changes the image resolution to 4K.",
                "It compresses the image file size by 50%.",
                "It converts JPG images into PNG format."
              ],
              "answer": 0,
              "explanation": "The alt attribute is essential for accessibility so screen readers can describe images to users."
            }
          ]
        },
        {
          "slug": "html-tables-and-data-presentation",
          "title": "Tables & Structured Data Presentation",
          "description": "Create tabular data with <table>, <thead>, <tbody>, table rows <tr>, headers <th>, and cells <td>.",
          "duration": 20,
          "blocks": [
            {
              "type": "paragraph",
              "text": "HTML tables represent two-dimensional data matrices (like spreadsheets). Never use tables for page layouts — tables are strictly for structured tabular datasets."
            },
            {
              "type": "code",
              "language": "html",
              "code": "<table>\n  <caption>Engineering Course Curriculum</caption>\n  <thead>\n    <tr>\n      <th scope=\"col\">Course</th>\n      <th scope=\"col\">Level</th>\n      <th scope=\"col\">Duration</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope=\"row\">HTML5 Fundamentals</th>\n      <td>Beginner</td>\n      <td>4 Hours</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">TypeScript Mastery</th>\n      <td>Intermediate</td>\n      <td>8 Hours</td>\n    </tr>\n  </tbody>\n</table>",
              "filename": "table.html"
            },
            {
              "type": "keyPoints",
              "points": [
                "Use <thead>, <tbody>, and <tfoot> to segment table sections.",
                "Use <th> for header cells with scope=\"col\" or scope=\"row\".",
                "Tables must only be used for tabular data, never for general page layout."
              ]
            },
            {
              "type": "exercise",
              "prompt": "Construct an accessible 2-column table displaying Course Name and Duration with <thead>, <tbody>, and proper <th> scope attributes.",
              "hint": "Use scope=\"col\" on table header cells inside <thead>.",
              "solution": "<table>\n  <caption>Curriculum Breakdown</caption>\n  <thead>\n    <tr>\n      <th scope=\"col\">Course Title</th>\n      <th scope=\"col\">Duration</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>HTML5 Semantics</td>\n      <td>4 Hours</td>\n    </tr>\n  </tbody>\n</table>",
              "language": "html"
            },
            {
              "type": "quiz",
              "question": "Which HTML tag should be used for column and row headers inside a table to provide accessible headings?",
              "options": [
                "<td>",
                "<th>",
                "<head>",
                "<header>"
              ],
              "answer": 1,
              "explanation": "<th> defines header cells that screen readers associate with data cells in the same row or column."
            }
          ]
        },
        {
          "slug": "html5-forms-and-input-validation",
          "title": "HTML5 Forms, Inputs & Native Validation",
          "description": "Build user input forms with <form>, <input>, <label>, <select>, <textarea>, and native constraint validation.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Forms collect user input and submit data to web servers. Accessible forms require explicit pairing of inputs with <label> tags and native validation rules."
            },
            {
              "type": "definition",
              "term": "<form> Element",
              "plain": "A container that groups interactive input controls and submits their values to a server endpoint via GET or POST.",
              "formal": "HTML Form Submission Specification"
            },
            {
              "type": "code",
              "language": "html",
              "code": "<form action=\"/api/register\" method=\"POST\">\n  <div class=\"form-group\">\n    <label for=\"full-name\">Full Name</label>\n    <input type=\"text\" id=\"full-name\" name=\"name\" required minlength=\"2\" placeholder=\"John Doe\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"user-email\">Email Address</label>\n    <input type=\"email\" id=\"user-email\" name=\"email\" required placeholder=\"john@example.com\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"role\">Engineering Role</label>\n    <select id=\"role\" name=\"role\">\n      <option value=\"frontend\">Frontend Engineer</option>\n      <option value=\"backend\">Backend Engineer</option>\n      <option value=\"ai\">AI / ML Engineer</option>\n    </select>\n  </div>\n\n  <button type=\"submit\">Submit Registration</button>\n</form>",
              "filename": "form.html"
            },
            {
              "type": "keyPoints",
              "points": [
                "Always connect labels to inputs using matching id and for attributes.",
                "Choose the right input type (email, number, tel, date) for automatic mobile keyboard selection.",
                "Use required, minlength, maxlength, and pattern for native client-side validation."
              ]
            },
            {
              "type": "exercise",
              "prompt": "Build an accessible login form with an email input and password input, both explicitly connected to <label> elements with required validation.",
              "hint": "Match label for=\"email-field\" with input id=\"email-field\".",
              "solution": "<form action=\"/api/login\" method=\"POST\">\n  <div>\n    <label for=\"user-email\">Email Address</label>\n    <input type=\"email\" id=\"user-email\" name=\"email\" required>\n  </div>\n  <div>\n    <label for=\"user-pwd\">Password</label>\n    <input type=\"password\" id=\"user-pwd\" name=\"password\" required minlength=\"8\">\n  </div>\n  <button type=\"submit\">Sign In</button>\n</form>",
              "language": "html"
            },
            {
              "type": "quiz",
              "question": "How do you connect a <label> tag to its corresponding <input> field?",
              "options": [
                "By giving both the same class name.",
                "By putting them in the same CSS file.",
                "By giving the input an id and matching it in the label for attribute.",
                "By writing a JavaScript onClick handler."
              ],
              "answer": 2,
              "explanation": "Setting <label for=\"my-id\"> and <input id=\"my-id\"> creates a programmatic link recognized by browsers and screen readers."
            }
          ]
        },
        {
          "slug": "semantic-html5-layout-and-seo",
          "title": "Semantic HTML5 Layout, SEO & Accessibility",
          "description": "Build complete semantic page layouts using <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> for top SEO ranking.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Semantic HTML gives meaning to the structure of your page. Search engines reward semantically well-structured websites with higher search rankings because crawlers can instantly index headings, articles, and navigation."
            },
            {
              "type": "code",
              "language": "html",
              "code": "<body>\n  <header>\n    <nav aria-label=\"Main Navigation\">\n      <a href=\"/\">Home</a>\n      <a href=\"/tutorials\">Tutorials</a>\n    </nav>\n  </header>\n\n  <main>\n    <article>\n      <header>\n        <h1>Understanding Semantic HTML</h1>\n        <p>Published on <time datetime=\"2026-08-18\">August 18, 2026</time></p>\n      </header>\n      <section>\n        <h2>Why Semantics Matter</h2>\n        <p>Semantic tags improve accessibility, readability, and search rankings.</p>\n      </section>\n    </article>\n    <aside>\n      <h3>Related Courses</h3>\n    </aside>\n  </main>\n\n  <footer>\n    <p>&copy; 2026 Lumen. All rights reserved.</p>\n  </footer>\n</body>",
              "filename": "semantic-page.html"
            },
            {
              "type": "keyPoints",
              "points": [
                "Use <main> for the central content of the page (only one <main> per document).",
                "<article> is for standalone content; <section> is for thematic groups with a heading.",
                "Semantic HTML is the single biggest factor for on-page SEO and screen reader accessibility."
              ]
            },
            {
              "type": "exercise",
              "prompt": "Write a semantic HTML document layout utilizing <header>, <nav>, <main>, <article>, <aside>, and <footer>.",
              "hint": "Nest the primary content within <main><article>...</article><aside>...</aside></main>.",
              "solution": "<header>\n  <nav><a href=\"/\">Lumen</a></nav>\n</header>\n<main>\n  <article>\n    <h1>Semantic Layouts</h1>\n    <p>Articles represent self-contained content.</p>\n  </article>\n  <aside>\n    <h3>Related Courses</h3>\n  </aside>\n</main>\n<footer>\n  <p>&copy; 2026 Lumen</p>\n</footer>",
              "language": "html"
            },
            {
              "type": "quiz",
              "question": "Which semantic tag should contain the primary, unique content of a web page?",
              "options": [
                "<section>",
                "<div>",
                "<aside>",
                "<main>"
              ],
              "answer": 3,
              "explanation": "<main> represents the dominant content unique to that specific document, excluding headers, sidebars, and footers."
            }
          ]
        }
      ]
    }
  ]
}
