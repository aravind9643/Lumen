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

// ==========================================
// 1. HTML5
// ==========================================
const htmlCourse = {
  slug: 'html',
  varName: 'htmlCourse',
  title: 'HTML5 & Modern Web Semantics: Zero to Mastery',
  shortTitle: 'HTML5',
  description: 'A complete, beginner-to-mastery path covering how the web works, HTML document structure, text formatting, links, lists, media, accessible forms, and modern semantic architecture.',
  category: 'Web Development',
  difficulty: 'beginner',
  icon: 'code',
  color: '#e34f26',
  tags: ['HTML5', 'Web Standards', 'Accessibility', 'SEO', 'Forms', 'Semantic Web'],
  chapters: [
    {
      title: 'Chapter 1: Web Foundations & Document Structure (Beginner)',
      lessons: [
        {
          slug: 'how-the-web-works-and-html-basics',
          title: 'How the Web Works & What is HTML?',
          description: 'Learn what the Internet is, how browsers request web pages, and the role of HTML as the foundational language of the web.',
          duration: 20,
          blocks: [
            { type: 'callout', kind: 'info', text: 'Level: Beginner | Prerequisites: Zero prior experience' },
            { type: 'paragraph', text: 'The World Wide Web is a global network of interconnected computers. When you type a website address into your browser, your computer (the client) sends an HTTP request across the internet to a server. The server replies with three primary files: HTML (the structure), CSS (the style), and JavaScript (the interactivity).' },
            { type: 'definition', term: 'HTML (HyperText Markup Language)', plain: 'The standard declarative language used to create the structure and content of web pages.', formal: 'W3C / WHATWG HTML5 Living Standard' },
            { type: 'analogy', title: 'The House Metaphor', text: 'Think of building a website like building a house. HTML is the concrete foundation, wooden framing, and brick walls. CSS is the interior paint, floor tiles, and wallpaper. JavaScript is the electrical wiring, water plumbing, and automated garage door opener.' },
            { type: 'definition', term: 'HTML Tag & Element', plain: 'A tag is a keyword enclosed in angle brackets like <p> (opening) and </p> (closing). An element is the entire combination of opening tag, content, and closing tag.', formal: 'HTML Element = Opening Tag + Text/Children + Closing Tag' },
            { type: 'code', language: 'html', code: `<!-- An HTML Element consists of an opening tag, content, and closing tag -->\n<p>Hello, World! This is my first web page.</p>\n\n<!-- Some elements are self-closing (void elements) because they do not wrap text -->\n<img src="logo.png" alt="Company Logo">\n<br>\n<hr>`, filename: 'basics.html' },
            { type: 'keyPoints', points: ['HTML provides structure; CSS provides style; JavaScript provides behavior.', 'Tags usually come in pairs: opening <tag> and closing </tag>.', 'Void tags like <img> and <input> do not have closing tags.'] },
            makeQuiz('What is the primary role of HTML in a website?', 'To define the structure, content, and meaning of the web page.', 'To style colors, borders, and animations.', 'To run backend database queries on the server.', 'To compile C++ code into machine instructions.', 'HTML is the structural markup language that defines headings, paragraphs, images, and page content.')
          ]
        },
        {
          slug: 'html-document-skeleton-and-head-metadata',
          title: 'Document Skeleton & Head Metadata',
          description: 'Understand <!DOCTYPE html>, the <html> root element, the <head> metadata container, and the visible <body>.',
          duration: 20,
          blocks: [
            { type: 'paragraph', text: 'Every valid HTML5 document follows a strict global skeleton. It starts with the doctype declaration, followed by the root <html> element containing two mandatory children: <head> (metadata not visible to users) and <body> (everything visible in the browser window).' },
            { type: 'definition', term: '<!DOCTYPE html>', plain: 'A declaration at the very top of a document that instructs the browser to render the page in modern standards compliance mode.', formal: 'HTML5 Standards Mode Document Type Trigger' },
            { type: 'definition', term: '<head> vs <body>', plain: '<head> contains machine-readable metadata like title, charset, and stylesheets. <body> contains all visible text, images, and interactive UI.', formal: 'HTML Document Hierarchy Specification' },
            { type: 'code', language: 'html', code: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <!-- Character encoding so special symbols & emojis render correctly -->\n  <meta charset="UTF-8">\n  <!-- Viewport meta tag: required for responsive mobile scaling -->\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My First Website</title>\n</head>\n<body>\n  <h1>Welcome to Web Engineering</h1>\n  <p>Everything inside the body tag is rendered visually on the screen.</p>\n</body>\n</html>`, filename: 'index.html' },
            { type: 'callout', kind: 'tip', title: 'Mobile Viewport Meta Tag', text: 'Without <meta name="viewport" content="width=device-width, initial-scale=1.0">, mobile browsers assume the site was built for a 980px desktop screen and zoom out, making text unreadably tiny.' },
            { type: 'keyPoints', points: ['Always start with <!DOCTYPE html> to prevent legacy quirks mode.', 'Set the lang attribute on <html> to assist screen readers and search engines.', 'The <title> tag in <head> sets the browser tab title and search engine search result headline.'] },
            makeQuiz('What is the purpose of the <meta name="viewport" ...> tag inside the <head> section?', 'It instructs mobile browsers to scale the webpage to the device physical screen width.', 'It increases the internet download speed of the webpage.', 'It encrypts the HTML file with SSL certificates.', 'It connects the webpage to a SQL database.', 'The viewport meta tag ensures responsive mobile scaling so pages render at mobile screen width without desktop zoom-out.')
          ]
        },
        {
          slug: 'headings-paragraphs-and-text-formatting',
          title: 'Headings, Paragraphs & Text Formatting',
          description: 'Master headings <h1> through <h6>, paragraphs <p>, bold <strong>, italic <em>, line breaks, and blockquotes.',
          duration: 20,
          blocks: [
            { type: 'paragraph', text: 'HTML text formatting elements organize unstructured text into meaningful outlines. Search engines like Google rely on heading hierarchy (h1 through h6) to understand what your page is about.' },
            { type: 'definition', term: 'Heading Hierarchy (h1 - h6)', plain: 'A 6-level ranking system for section titles. <h1> is the main topic of the page, <h2> represents major sections, and <h3> represents subsections.', formal: 'Heading Level Rank 1 through 6' },
            { type: 'definition', term: '<strong> vs <em>', plain: '<strong> indicates strong importance (rendered bold). <em> indicates emphasized stress (rendered italic). Both convey meaning to screen readers, unlike generic <b> and <i>.', formal: 'Semantic Text Emphasis Level' },
            { type: 'code', language: 'html', code: `<h1>Software Engineering from First Principles</h1>\n\n<h2>Introduction</h2>\n<p>Software is written by humans to instruct computers how to solve problems.</p>\n\n<p>It is <strong>critical</strong> to understand fundamentals before using frameworks.</p>\n\n<blockquote>\n  <p>"Simplicity is prerequisite for reliability." — Edsger W. Dijkstra</p>\n</blockquote>`, filename: 'text.html' },
            { type: 'keyPoints', points: ['Use only one <h1> per page representing the main subject.', 'Never skip heading levels (e.g. going from <h1> directly to <h3>).', 'Use <strong> for semantic importance and <em> for semantic vocal stress.'] },
            makeQuiz('Why should you use <strong> instead of <b> when you want to emphasize important text?', '<strong> conveys semantic importance to screen readers and search engines, while <b> only changes visual appearance.', '<strong> uses less computer memory than <b>.', '<b> is deprecated and deleted in modern browsers.', '<strong> automatically translates text into multiple languages.', '<strong> provides semantic meaning to assistive technologies and search crawlers, not just visual bold styling.')
          ]
        },
        {
          slug: 'links-lists-and-navigation',
          title: 'Hyperlinks, Lists & Web Navigation',
          description: 'Connect pages with anchor tags <a>, relative vs absolute URLs, ordered lists <ol>, and unordered lists <ul>.',
          duration: 25,
          blocks: [
            { type: 'paragraph', text: 'The defining feature of the web is the "hyperlink" — the ability to click text or images and navigate to another page or external website. Links are created using the anchor element <a> with the href attribute.' },
            { type: 'definition', term: 'Anchor Tag <a> & href', plain: '<a> creates a clickable hyperlink. href (Hypertext Reference) specifies the destination URL where the browser should navigate.', formal: 'HTML Anchor Element Specification' },
            { type: 'definition', term: 'Relative URL vs Absolute URL', plain: 'An absolute URL includes the full domain (https://example.com/page). A relative URL points to a file within the same website (/about.html).', formal: 'URI Reference Specification RFC 3986' },
            { type: 'code', language: 'html', code: `<!-- Absolute link to external website -->\n<a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer">\n  MDN Web Docs\n</a>\n\n<!-- Relative link to internal page -->\n<a href="/tutorials/css">Learn CSS</a>\n\n<!-- Unordered List (Bullet points) -->\n<ul>\n  <li>HTML5 Foundations</li>\n  <li>CSS3 Styling</li>\n  <li>JavaScript Logic</li>\n</ul>\n\n<!-- Ordered List (Numbered steps) -->\n<ol>\n  <li>Install a code editor</li>\n  <li>Create an index.html file</li>\n  <li>Open the file in a browser</li>\n</ol>`, filename: 'links-and-lists.html' },
            { type: 'callout', kind: 'warning', title: 'Security with target="_blank"', text: 'When opening links in a new tab with target="_blank", always add rel="noopener noreferrer" to prevent the newly opened page from controlling your page via window.opener.' },
            { type: 'keyPoints', points: ['<a> tag href specifies destination URLs.', 'Use <ul> for items where order does not matter; use <ol> for sequential numbered steps.', 'Always use rel="noopener noreferrer" on target="_blank" links for security.'] },
            makeQuiz('When should you use an ordered list <ol> instead of an unordered list <ul>?', 'When the sequence and numerical order of the items matters (such as recipe steps or tutorials).', 'When the list contains more than 100 items.', 'When the list items contain image thumbnails.', 'When the list is rendered on a mobile device.', '<ol> renders sequential numbers for steps where order is important, whereas <ul> renders bullet points.')
          ]
        }
      ]
    },
    {
      title: 'Chapter 2: Semantic Layout, Media & Forms (Mastery)',
      lessons: [
        {
          slug: 'images-audio-and-video-media',
          title: 'Images, Audio & Video Media Elements',
          description: 'Embed images with <img>, descriptive alt text, responsive <picture>, and native HTML5 <video> and <audio>.',
          duration: 25,
          blocks: [
            { type: 'paragraph', text: 'Media elements enrich web content. To ensure fast performance and accessibility, images must include alt descriptions and explicit dimensions, while video and audio provide native playback controls.' },
            { type: 'definition', term: 'alt Attribute', plain: 'A text alternative describing an image for blind users with screen readers and shown if the image fails to load.', formal: 'W3C Accessible Rich Internet Image Alternative Text' },
            { type: 'code', language: 'html', code: `<!-- Responsive Image with Accessibility Description -->\n<img \n  src="/images/server-rack.webp" \n  alt="High-density data center server rack with blinking blue activity LEDs" \n  width="800" \n  height="450" \n  loading="lazy"\n>\n\n<!-- Native HTML5 Video with Controls -->\n<video controls width="640" height="360" poster="/images/poster.jpg">\n  <source src="/videos/intro.mp4" type="video/mp4">\n  <source src="/videos/intro.webm" type="video/webm">\n  <track kind="captions" src="/captions/intro-en.vtt" srclang="en" label="English" default>\n  <p>Your browser does not support HTML5 video.</p>\n</video>`, filename: 'media.html' },
            { type: 'keyPoints', points: ['Always provide descriptive alt text for images.', 'Include width and height attributes to prevent layout shifts (CLS).', 'Use loading="lazy" to defer downloading offscreen images until the user scrolls near them.'] },
            makeQuiz('Why is the alt attribute required on every <img> element?', 'It allows screen readers to read the image description to visually impaired users and displays fallback text if images fail.', 'It changes the image resolution to 4K.', 'It compresses the image file size by 50%.', 'It converts JPG images into PNG format.', 'The alt attribute is essential for accessibility so screen readers can describe images to users.')
          ]
        },
        {
          slug: 'html-tables-and-data-presentation',
          title: 'Tables & Structured Data Presentation',
          description: 'Create tabular data with <table>, <thead>, <tbody>, table rows <tr>, headers <th>, and cells <td>.',
          duration: 20,
          blocks: [
            { type: 'paragraph', text: 'HTML tables represent two-dimensional data matrices (like spreadsheets). Never use tables for page layouts — tables are strictly for structured tabular datasets.' },
            { type: 'code', language: 'html', code: `<table>\n  <caption>Engineering Course Curriculum</caption>\n  <thead>\n    <tr>\n      <th scope="col">Course</th>\n      <th scope="col">Level</th>\n      <th scope="col">Duration</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope="row">HTML5 Fundamentals</th>\n      <td>Beginner</td>\n      <td>4 Hours</td>\n    </tr>\n    <tr>\n      <th scope="row">TypeScript Mastery</th>\n      <td>Intermediate</td>\n      <td>8 Hours</td>\n    </tr>\n  </tbody>\n</table>`, filename: 'table.html' },
            { type: 'keyPoints', points: ['Use <thead>, <tbody>, and <tfoot> to segment table sections.', 'Use <th> for header cells with scope="col" or scope="row".', 'Tables must only be used for tabular data, never for general page layout.'] },
            makeQuiz('Which HTML tag should be used for column and row headers inside a table to provide accessible headings?', '<th>', '<td>', '<head>', '<header>', '<th> defines header cells that screen readers associate with data cells in the same row or column.')
          ]
        },
        {
          slug: 'html5-forms-and-input-validation',
          title: 'HTML5 Forms, Inputs & Native Validation',
          description: 'Build user input forms with <form>, <input>, <label>, <select>, <textarea>, and native constraint validation.',
          duration: 25,
          blocks: [
            { type: 'paragraph', text: 'Forms collect user input and submit data to web servers. Accessible forms require explicit pairing of inputs with <label> tags and native validation rules.' },
            { type: 'definition', term: '<form> Element', plain: 'A container that groups interactive input controls and submits their values to a server endpoint via GET or POST.', formal: 'HTML Form Submission Specification' },
            { type: 'code', language: 'html', code: `<form action="/api/register" method="POST">\n  <div class="form-group">\n    <label for="full-name">Full Name</label>\n    <input type="text" id="full-name" name="name" required minlength="2" placeholder="John Doe">\n  </div>\n\n  <div class="form-group">\n    <label for="user-email">Email Address</label>\n    <input type="email" id="user-email" name="email" required placeholder="john@example.com">\n  </div>\n\n  <div class="form-group">\n    <label for="role">Engineering Role</label>\n    <select id="role" name="role">\n      <option value="frontend">Frontend Engineer</option>\n      <option value="backend">Backend Engineer</option>\n      <option value="ai">AI / ML Engineer</option>\n    </select>\n  </div>\n\n  <button type="submit">Submit Registration</button>\n</form>`, filename: 'form.html' },
            { type: 'keyPoints', points: ['Always connect labels to inputs using matching id and for attributes.', 'Choose the right input type (email, number, tel, date) for automatic mobile keyboard selection.', 'Use required, minlength, maxlength, and pattern for native client-side validation.'] },
            makeQuiz('How do you connect a <label> tag to its corresponding <input> field?', 'By giving the input an id and matching it in the label for attribute.', 'By giving both the same class name.', 'By putting them in the same CSS file.', 'By writing a JavaScript onClick handler.', 'Setting <label for="my-id"> and <input id="my-id"> creates a programmatic link recognized by browsers and screen readers.')
          ]
        },
        {
          slug: 'semantic-html5-layout-and-seo',
          title: 'Semantic HTML5 Layout, SEO & Accessibility',
          description: 'Build complete semantic page layouts using <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> for top SEO ranking.',
          duration: 25,
          blocks: [
            { type: 'paragraph', text: 'Semantic HTML gives meaning to the structure of your page. Search engines reward semantically well-structured websites with higher search rankings because crawlers can instantly index headings, articles, and navigation.' },
            { type: 'code', language: 'html', code: `<body>\n  <header>\n    <nav aria-label="Main Navigation">\n      <a href="/">Home</a>\n      <a href="/tutorials">Tutorials</a>\n    </nav>\n  </header>\n\n  <main>\n    <article>\n      <header>\n        <h1>Understanding Semantic HTML</h1>\n        <p>Published on <time datetime="2026-08-18">August 18, 2026</time></p>\n      </header>\n      <section>\n        <h2>Why Semantics Matter</h2>\n        <p>Semantic tags improve accessibility, readability, and search rankings.</p>\n      </section>\n    </article>\n    <aside>\n      <h3>Related Courses</h3>\n    </aside>\n  </main>\n\n  <footer>\n    <p>&copy; 2026 Lumen. All rights reserved.</p>\n  </footer>\n</body>`, filename: 'semantic-page.html' },
            { type: 'keyPoints', points: ['Use <main> for the central content of the page (only one <main> per document).', '<article> is for standalone content; <section> is for thematic groups with a heading.', 'Semantic HTML is the single biggest factor for on-page SEO and screen reader accessibility.'] },
            makeQuiz('Which semantic tag should contain the primary, unique content of a web page?', '<main>', '<section>', '<div>', '<aside>', '<main> represents the dominant content unique to that specific document, excluding headers, sidebars, and footers.')
          ]
        }
      ]
    }
  ]
}

// ==========================================
// 2. CSS3
// ==========================================
const cssCourse = {
  slug: 'css',
  varName: 'cssCourse',
  title: 'CSS3 & Modern Layout Systems: Zero to Mastery',
  shortTitle: 'CSS3',
  description: 'A complete, beginner-to-mastery path covering how CSS styles HTML, selectors, the box model, Flexbox 1D layouts, CSS Grid 2D layouts, responsive design, and CSS variables.',
  category: 'Web Development',
  difficulty: 'beginner',
  icon: 'code',
  color: '#264de4',
  tags: ['CSS3', 'Flexbox', 'CSS Grid', 'Custom Properties', 'Animations', 'Responsive Design'],
  chapters: [
    {
      title: 'Chapter 1: CSS Foundations & The Box Model (Beginner)',
      lessons: [
        {
          slug: 'what-is-css-and-how-it-works',
          title: 'What is CSS & How Does Styling Work?',
          description: 'Understand what CSS is, inline vs internal vs external stylesheets, CSS rules, selectors, properties, and values.',
          duration: 20,
          blocks: [
            { type: 'callout', kind: 'info', text: 'Level: Beginner | Prerequisites: HTML5 Basics' },
            { type: 'paragraph', text: 'CSS (Cascading Style Sheets) is the language used to describe the presentation, color, typography, spacing, and layout of an HTML document.' },
            { type: 'definition', term: 'CSS Rule Structure', plain: 'A CSS rule consists of a Selector (which elements to target) and a Declaration Block containing Property: Value pairs enclosed in curly braces.', formal: 'CSS Rule = Selector { property: value; }' },
            { type: 'analogy', title: 'The Interior Designer Analogy', text: 'If HTML creates the bare walls and rooms of a building, CSS is the interior designer choosing paint swatches, lighting fixtures, curtain fabrics, and furniture placement.' },
            { type: 'code', language: 'css', code: `/* Target all <h1> elements and apply styles */\nh1 {\n  color: #6366f1;          /* Property: color, Value: indigo hex */\n  font-size: 2.5rem;       /* Property: font-size, Value: 40px */\n  text-align: center;      /* Center the text horizontally */\n  margin-bottom: 1rem;\n}`, filename: 'styles.css' },
            { type: 'keyPoints', points: ['Always use external stylesheets (<link rel="stylesheet" href="style.css">) for production code.', 'Every CSS declaration ends with a semicolon (;).', 'Properties are predefined keywords; values set the specific styling.'] },
            makeQuiz('What are the three core parts of a CSS rule?', 'Selector, Property, and Value.', 'HTML tag, URL, and Script.', 'Variable, Function, and Return.', 'Database, Table, and Row.', 'A CSS rule targets elements with a Selector, then applies styling using Property: Value declarations.')
          ]
        },
        {
          slug: 'css-selectors-classes-and-ids',
          title: 'CSS Selectors: Element, Class, ID & Pseudo-Classes',
          description: 'Master targeting HTML elements with tag selectors, reusable class selectors (.class), unique ID selectors (#id), and interactive pseudo-classes (:hover, :focus).',
          duration: 25,
          blocks: [
            { type: 'paragraph', text: 'CSS selectors determine which HTML elements on a page receive specific styles. Writing clean, maintainable CSS relies on using reusable class selectors rather than overly specific tag or ID selectors.' },
            { type: 'definition', term: 'Class Selector (.name) vs ID Selector (#name)', plain: 'Classes (.card) can be reused across dozens of elements on a page. IDs (#header) must be strictly unique to a single element.', formal: 'W3C CSS Selectors Level 4 Specification' },
            { type: 'code', language: 'css', code: `/* Element Selector: Targets every <button> on the page */\nbutton {\n  font-family: inherit;\n  cursor: pointer;\n}\n\n/* Class Selector: Reusable component class */\n.btn-primary {\n  background-color: #6366f1;\n  color: #ffffff;\n  padding: 10px 20px;\n  border-radius: 8px;\n  border: none;\n}\n\n/* Pseudo-Class: Applies style only when user hovers mouse */\n.btn-primary:hover {\n  background-color: #4f46e5;\n}`, filename: 'buttons.css' },
            { type: 'keyPoints', points: ['Use classes (.btn) for almost all styling to keep specificity manageable.', 'IDs (#main) have high specificity and cannot be reused on the same page.', 'Pseudo-classes (:hover, :focus, :active) style elements during user interactions.'] },
            makeQuiz('Why should class selectors (.name) be preferred over ID selectors (#name) for styling CSS components?', 'Classes are reusable across multiple elements and have lower, more manageable specificity.', 'Classes execute on the GPU.', 'IDs cannot contain text strings.', 'Classes automatically disable browser caching.', 'Class selectors are reusable and avoid high specificity conflicts that make CSS difficult to override.')
          ]
        },
        {
          slug: 'colors-typography-and-google-fonts',
          title: 'Colors, Typography & Font Management',
          description: 'Style text like a professional: Hex, RGB, HSL colors, font-family font stacks, Google Fonts, line-height, and font weights.',
          duration: 20,
          blocks: [
            { type: 'paragraph', text: 'Typography and color form the core visual identity of a web application. CSS supports named colors, Hex codes (#6366f1), RGB/RGBA (rgb(99, 102, 241)), and HSL (Hue, Saturation, Lightness).' },
            { type: 'code', language: 'css', code: `/* Import Google Font */\n@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');\n\nbody {\n  font-family: 'Inter', system-ui, sans-serif;\n  color: #1e293b;          /* Dark slate foreground text */\n  background-color: #f8fafc; /* Light slate background */\n  line-height: 1.6;        /* 160% line height for readability */\n}\n\nh1 {\n  font-weight: 800;        /* Extra bold */\n  letter-spacing: -0.02em; /* Tight letter tracking */\n}`, filename: 'typography.css' },
            { type: 'keyPoints', points: ['Always provide a fallback font stack ending in sans-serif or serif.', 'Use line-height between 1.5 and 1.7 for optimal body text readability.', 'HSL is the most intuitive color model for programmatic shading and themes.'] },
            makeQuiz('What is the purpose of providing multiple fonts in a font-family property like font-family: "Inter", system-ui, sans-serif;?', 'It provides fallback fonts so if the first font fails to download, the browser uses the next available system font.', 'It mixes all three fonts together to create a hybrid font.', 'It increases text rendering speed by 300%.', 'It translates English characters into Unicode symbols.', 'Font stacks ensure graceful degradation if custom web fonts are blocked or fail to load.')
          ]
        },
        {
          slug: 'the-css-box-model-and-sizing',
          title: 'The CSS Box Model: Margin, Border, Padding & Content',
          description: 'Master the fundamental layout calculation of the web: Content, Padding, Border, Margin, and why box-sizing: border-box is essential.',
          duration: 25,
          blocks: [
            { type: 'paragraph', text: 'Every element on a web page is enclosed in a rectangular box. The CSS Box Model calculates how much space an element occupies on the screen based on four concentric areas: Content, Padding, Border, and Margin.' },
            { type: 'definition', term: 'The 4 Box Model Layers', plain: '1. Content: Text or image. 2. Padding: Transparent space inside the border. 3. Border: The outer line. 4. Margin: Transparent space outside the border separating other elements.', formal: 'W3C CSS Box Model Module Level 3' },
            { type: 'analogy', title: 'The Framed Painting Metaphor', text: 'Imagine a framed picture on your wall. The canvas painting is the Content. The white matting around the painting is the Padding. The wooden frame is the Border. The empty wall space separating this frame from the next picture is the Margin.' },
            { type: 'code', language: 'css', code: `/* Universal Box Sizing Reset: Standard in all professional web projects */\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\n.card {\n  width: 300px;           /* Exact total outer width is 300px */\n  padding: 20px;          /* Space inside border */\n  border: 2px solid #cbd5e1;\n  margin-bottom: 24px;    /* Space outside border pushing next card */\n}`, filename: 'box-model.css' },
            { type: 'callout', kind: 'tip', title: 'Why border-box is Universal', text: 'Without box-sizing: border-box, adding 20px padding and 2px border to a 300px wide box increases its total width to 344px (300+20+20+2+2), breaking layouts unexpectedly!' },
            { type: 'keyPoints', points: ['Padding is inside the border; Margin is outside the border.', 'Always apply box-sizing: border-box globally.', 'Vertical margins of adjacent block elements collapse into the larger margin.'] },
            makeQuiz('When box-sizing: border-box is applied, what does the width property represent?', 'The total width of the element including content, padding, and border.', 'Only the inner text content width.', 'The screen resolution of the monitor.', 'The width of the parent container.', 'border-box makes width calculations predictable by including padding and borders inside the declared width.')
          ]
        }
      ]
    },
    {
      title: 'Chapter 2: Modern Layout Systems & Responsive Design (Mastery)',
      lessons: [
        {
          slug: 'display-property-and-positioning',
          title: 'Display Property & CSS Positioning',
          description: 'Understand block vs inline vs inline-block, and master relative, absolute, fixed, and sticky positioning.',
          duration: 25,
          blocks: [
            { type: 'paragraph', text: 'The `display` property controls how an element flows in the document layout. The `position` property allows taking elements out of normal flow for modal overlays, sticky headers, and dropdowns.' },
            { type: 'definition', term: 'Position Values', plain: 'static (normal flow), relative (offset relative to itself), absolute (positioned relative to closest positioned ancestor), fixed (fixed to viewport window), sticky (scrolls then sticks).', formal: 'CSS Positioned Layout Module Level 3' },
            { type: 'code', language: 'css', code: `/* Sticky Navigation Bar */\n.navbar {\n  position: sticky;\n  top: 0;\n  z-index: 50;\n  background: #ffffff;\n  border-bottom: 1px solid #e2e8f0;\n}\n\n/* Absolute Badge positioned inside Relative Card */\n.card {\n  position: relative; /* Anchor container for absolute children */\n  padding: 24px;\n}\n\n.badge {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  background: #ef4444;\n  color: white;\n}`, filename: 'positioning.css' },
            { type: 'keyPoints', points: ['block elements start on a new line and take full available width.', 'inline elements only take up as much width as their content.', 'absolute children require a positioned parent (usually position: relative).'] },
            makeQuiz('To position a badge in the top-right corner of a card using position: absolute, what position value must the parent card have?', 'position: relative (or any non-static value)', 'position: static', 'position: inline', 'display: none', 'An absolutely positioned element positions itself relative to its closest ancestor that has a non-static position.')
          ]
        },
        {
          slug: 'flexbox-one-dimensional-layouts',
          title: 'Flexbox: 1D Alignment, Direction & Distribution',
          description: 'Master Flexbox from first principles: Main Axis vs Cross Axis, justify-content, align-items, flex-direction, and flex-grow.',
          duration: 30,
          blocks: [
            { type: 'paragraph', text: 'Flexbox is the modern one-dimensional layout model for aligning items in rows or columns. It makes centring elements, distributing equal spacing, and building responsive toolbars effortless.' },
            { type: 'definition', term: 'Main Axis vs Cross Axis', plain: 'In a row container, the Main Axis is horizontal (controlled by justify-content) and Cross Axis is vertical (controlled by align-items). In a column container, they switch.', formal: 'CSS Flexible Box Layout Module Level 1' },
            { type: 'code', language: 'css', code: `.navbar {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between; /* Space items out evenly across Main Axis */\n  align-items: center;            /* Center items vertically across Cross Axis */\n  gap: 16px;\n}\n\n/* Center anything vertically and horizontally in 3 lines */\n.hero-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 400px;\n}`, filename: 'flexbox.css' },
            { type: 'keyPoints', points: ['justify-content controls alignment along the main axis.', 'align-items controls alignment along the cross axis.', 'gap sets space between flex items without margin hacks.'] },
            makeQuiz('Which CSS rule combination effortlessly centers an element both horizontally and vertically inside a Flex container?', 'justify-content: center; align-items: center;', 'text-align: middle; vertical-align: middle;', 'float: center; margin: auto;', 'position: center; display: block;', 'In a Flex container, justify-content: center centers along the main axis, and align-items: center centers along the cross axis.')
          ]
        },
        {
          slug: 'css-grid-two-dimensional-layouts',
          title: 'CSS Grid: 2D Spatial Layouts & Auto-Fit',
          description: 'Construct full 2-dimensional page architectures using explicit columns, fr fractional units, repeat(), minmax(), and auto-fit.',
          duration: 30,
          blocks: [
            { type: 'paragraph', text: 'While Flexbox is for 1-dimensional rows OR columns, CSS Grid is for 2-dimensional layouts (rows AND columns simultaneously). Grid allows designing responsive dashboards and cards without writing media queries.' },
            { type: 'definition', term: 'The fr (Fractional) Unit', plain: 'A flexible unit that represents a fraction of the remaining free space inside a Grid container.', formal: 'CSS Grid Fractional Free-Space Unit' },
            { type: 'code', language: 'css', code: `/* Responsive 3-Column Card Grid */\n.grid-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr); /* 3 equal columns */\n  gap: 24px;\n}\n\n/* Magical Responsive Grid without Media Queries */\n.auto-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 24px;\n}`, filename: 'grid.css' },
            { type: 'keyPoints', points: ['Grid controls both rows and columns at the same time.', 'repeat(auto-fit, minmax(280px, 1fr)) creates fluidly responsive cards automatically.', 'The fr unit shares remaining space proportionally.'] },
            makeQuiz('What happens when you use grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); on a grid container?', 'It automatically creates as many 250px+ columns as will fit on screen, stretching them to fill available space.', 'It restricts the grid to exactly 1 column.', 'It crashes mobile browser viewports.', 'It converts HTML elements into image thumbnails.', 'repeat(auto-fit, minmax(...)) dynamically calculates columns based on viewport width without needing media queries.')
          ]
        },
        {
          slug: 'responsive-design-and-css-custom-properties',
          title: 'Responsive Media Queries & CSS Variables',
          description: 'Make websites mobile-responsive with @media queries, and build dynamic light/dark themes with native CSS custom properties.',
          duration: 25,
          blocks: [
            { type: 'paragraph', text: 'Responsive Web Design ensures that websites look great on smartphones, tablets, laptops, and 4K desktop monitors. CSS Variables (`--name`) allow defining design tokens like colors and radii in one place and reusing them across the site.' },
            { type: 'code', language: 'css', code: `/* Define Design Tokens on Root */\n:root {\n  --primary-color: #6366f1;\n  --bg-color: #ffffff;\n  --text-color: #0f172a;\n}\n\n/* Dark Mode Overrides */\n[data-theme="dark"] {\n  --bg-color: #090d16;\n  --text-color: #f8fafc;\n}\n\nbody {\n  background-color: var(--bg-color);\n  color: var(--text-color);\n}\n\n/* Mobile-First Responsive Breakpoint */\n@media (min-width: 768px) {\n  .sidebar-layout {\n    display: grid;\n    grid-template-columns: 240px 1fr;\n  }\n}`, filename: 'responsive-theme.css' },
            { type: 'keyPoints', points: ['Mobile-first design writes base styles for smartphones first, then adds @media (min-width: ...) for larger screens.', 'CSS custom properties are referenced using var(--name).', 'Changing a CSS variable updates every element that uses it immediately.'] },
            makeQuiz('In mobile-first responsive design, which type of media query is standard for progressively enhancing desktop layouts?', '@media (min-width: 768px)', '@media (max-width: 768px)', '@media (orientation: portrait)', '@media (hover: none)', 'Mobile-first design starts with base styles for small screens, then uses min-width queries to add layout enhancements on larger viewports.')
          ]
        }
      ]
    }
  ]
}

console.log('Writing HTML and CSS courses...')
const coursesToGenerate = [htmlCourse, cssCourse]

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
