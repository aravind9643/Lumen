import type { Tutorial } from '../types'

export const javascriptCourse: Tutorial = {
  "slug": "javascript",
  "title": "Modern JavaScript (ES6+): Zero to Mastery",
  "shortTitle": "JavaScript",
  "description": "A complete, beginner-to-mastery path covering JavaScript fundamentals, variables, control flow, functions, objects, DOM manipulation, asynchronous programming, and modern ES6+ features.",
  "category": "Web Development",
  "difficulty": "beginner",
  "icon": "code",
  "tags": [
    "JavaScript",
    "ES6+",
    "Event Loop",
    "DOM",
    "Async/Await",
    "V8"
  ],
  "color": "#f7df1e",
  "updated": "2026-08-18",
  "prerequisites": [
    "Zero prior experience required — built from first principles."
  ],
  "outcomes": [
    "Master modern JavaScript syntax, core mental models, and architectural patterns",
    "Build clean, performant, and production-grade JavaScript applications",
    "Understand trade-offs, testing strategies, and industry best practices"
  ],
  "chapters": [
    {
      "title": "Chapter 1: JavaScript Fundamentals & Control Flow (Beginner)",
      "lessons": [
        {
          "slug": "what-is-javascript-and-running-code",
          "title": "What is JavaScript & How Does Code Run?",
          "description": "Understand the role of JavaScript in web pages, browser developer console, console.log, comments, and the JS execution environment.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "Level: Beginner | Prerequisites: HTML & CSS Basics"
            },
            {
              "type": "paragraph",
              "text": "JavaScript is the programming language of the web. While HTML creates the structure and CSS creates the appearance, JavaScript adds life, logic, and interactivity to web pages — responding to user clicks, validating forms, updating content without reloading, and communicating with servers."
            },
            {
              "type": "definition",
              "term": "JavaScript (JS)",
              "plain": "A dynamic, high-level, interpreted scripting language that conforms to the ECMAScript standard and powers browser client-side interactivity.",
              "formal": "ECMA-262 ECMAScript Language Specification"
            },
            {
              "type": "analogy",
              "title": "The Human Body Analogy",
              "text": "HTML is the skeleton (bones that give structure). CSS is the skin and clothing (colors, hair, style). JavaScript is the nervous system and muscles (the brain sending signals to move, speak, and react to touch)."
            },
            {
              "type": "code",
              "language": "javascript",
              "code": "// Output messages to the browser developer tools console\nconsole.log(\"Hello, Engineer! JavaScript is running.\");\n\n/* Multi-line comment:\n   JavaScript code executes sequentially from top to bottom. */\nconsole.log(10 + 5); // Outputs: 15",
              "filename": "index.js"
            },
            {
              "type": "keyPoints",
              "points": [
                "JavaScript is the only programming language natively understood by all web browsers.",
                "Use console.log() to inspect values and debug code.",
                "Open Chrome/Edge DevTools (F12 or Ctrl+Shift+I) to view the live Console tab."
              ]
            },
            {
              "type": "quiz",
              "question": "What is the primary role of JavaScript in a web application?",
              "options": [
                "To add dynamic interactivity, logic, and user event handling to the page.",
                "To format the font size and margins of paragraph text.",
                "To define the HTML document doctype skeleton.",
                "To manufacture physical computer RAM chips."
              ],
              "answer": 0,
              "explanation": "JavaScript is the programming language that makes web pages interactive and dynamic."
            }
          ]
        },
        {
          "slug": "variables-and-data-types",
          "title": "Variables, Constants & Primitive Data Types",
          "description": "Learn let vs const vs var, strings, numbers, booleans, null, undefined, and the typeof operator.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Programs need to store, track, and update information in memory. A variable is a labeled container that holds a value in memory."
            },
            {
              "type": "definition",
              "term": "let vs const vs var",
              "plain": "const declares a variable whose value cannot be reassigned. let declares a variable whose value can change later. var is legacy and should be avoided.",
              "formal": "ECMAScript Block-Scoped Bindings"
            },
            {
              "type": "analogy",
              "title": "The Labeled Box Metaphor",
              "text": "Think of a variable as a cardboard box with a name written on the outside. You can put an item inside the box, look inside to see what is there, or replace the item with something new (if using let)."
            },
            {
              "type": "code",
              "language": "javascript",
              "code": "// const: Use by default for values that do not change\nconst siteName = \"Lumen\";\nconst foundingYear = 2026;\nconst isProduction = true;\n\n// let: Use only when you intend to reassign the value\nlet userScore = 0;\nuserScore = userScore + 10; // score is now 10\n\n// Primitive Data Types\nconst name = \"Aravind\";       // String (text inside quotes)\nconst age = 28;               // Number (integers or decimals)\nconst isVerified = true;      // Boolean (true or false)\nlet emptyValue = null;        // Null (explicitly empty)\nlet notAssigned;              // Undefined (declared but not assigned)",
              "filename": "variables.js"
            },
            {
              "type": "keyPoints",
              "points": [
                "Always use const by default; use let only when reassigning.",
                "Never use legacy var because of hoisting and scoping pitfalls.",
                "JavaScript has 7 primitive types: string, number, bigint, boolean, undefined, symbol, null."
              ]
            },
            {
              "type": "quiz",
              "question": "When should you declare a variable using const instead of let?",
              "options": [
                "Only when storing integer numbers.",
                "Whenever the variable value does not need to be reassigned after its initial declaration.",
                "Only when writing HTML files.",
                "When the variable needs to be shared with a SQL database."
              ],
              "answer": 1,
              "explanation": "const prevents accidental reassignment bugs and is the recommended default in modern JavaScript."
            }
          ]
        },
        {
          "slug": "operators-and-conditional-logic",
          "title": "Operators & Conditional Logic (if / else / switch)",
          "description": "Master arithmetic operators, strict equality (===), logical operators (&&, ||, !), if/else statements, and the ternary operator.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Conditional logic allows your program to make decisions: \"IF the user is logged in, show their dashboard; ELSE, show the login button.\""
            },
            {
              "type": "definition",
              "term": "Strict Equality (===) vs Loose Equality (==)",
              "plain": "=== checks both value AND data type without implicit conversion (5 === \"5\" is false). == performs unexpected type coercion (5 == \"5\" is true). Always use ===.",
              "formal": "Strict Equality Comparison Algorithm"
            },
            {
              "type": "code",
              "language": "javascript",
              "code": "const userAge = 20;\nconst hasPaidSubscription = true;\n\n// Logical AND (&&): Both conditions must be true\nif (userAge >= 18 && hasPaidSubscription) {\n  console.log(\"Access Granted: Welcome to the Full Curriculum!\");\n} else if (userAge >= 18 && !hasPaidSubscription) {\n  console.log(\"Access Limited: Please purchase a subscription.\");\n} else {\n  console.log(\"Access Denied: Must be 18 or older.\");\n}\n\n// Ternary Operator: shorthand if/else condition ? ifTrue : ifFalse\nconst statusMessage = hasPaidSubscription ? \"Active Member\" : \"Free Tier\";",
              "filename": "conditionals.js"
            },
            {
              "type": "keyPoints",
              "points": [
                "Always use strict equality === and strict inequality !==.",
                "Logical operators: && (AND), || (OR), ! (NOT).",
                "The ternary operator (cond ? a : b) is great for concise inline decisions."
              ]
            },
            {
              "type": "quiz",
              "question": "Why is strict equality (===) strongly recommended over loose equality (==) in JavaScript?",
              "options": [
                "=== runs 10 times faster on the CPU.",
                "== is not supported in modern browsers.",
                "=== compares both value and data type without performing unexpected implicit type coercion.",
                "=== encrypts the comparison operation."
              ],
              "answer": 2,
              "explanation": "Strict equality avoids silent coercion bugs where unexpected values like false == 0 or null == undefined evaluate to true."
            }
          ]
        },
        {
          "slug": "loops-and-iteration",
          "title": "Loops & Iteration: for, while & for...of",
          "description": "Automate repetitive tasks with standard for loops, while loops, and modern for...of array iterators.",
          "duration": 20,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Loops execute a block of code multiple times until a specified exit condition is met, preventing you from writing repetitive manual code."
            },
            {
              "type": "code",
              "language": "javascript",
              "code": "// 1. Classic for loop: counter-based iteration\nfor (let i = 1; i <= 5; i++) {\n  console.log(\"Lesson count:\", i);\n}\n\n// 2. Modern for...of loop: iterating over arrays\nconst frameworks = [\"React\", \"Next.js\", \"Angular\", \"Vue\", \"Svelte\"];\nfor (const name of frameworks) {\n  console.log(\"Mastering framework:\", name);\n}\n\n// 3. While loop: runs as long as condition remains true\nlet attempts = 0;\nwhile (attempts < 3) {\n  console.log(\"Retrying connection, attempt:\", attempts + 1);\n  attempts++;\n}",
              "filename": "loops.js"
            },
            {
              "type": "keyPoints",
              "points": [
                "for (let i=0; i<N; i++) is standard for index-based counting.",
                "for...of is the cleanest syntax for iterating over array elements.",
                "Always ensure while loops have an incrementing condition to avoid infinite freezing loops."
              ]
            },
            {
              "type": "quiz",
              "question": "Which modern loop syntax is the cleanest and most readable for iterating over elements in an array?",
              "options": [
                "for (let i = 0; i < array.length; i++)",
                "while (true)",
                "loop.iterate(array)",
                "for (const item of array)"
              ],
              "answer": 3,
              "explanation": "The for...of statement creates a loop iterating over iterable objects (including Array, Map, Set) directly."
            }
          ]
        }
      ]
    },
    {
      "title": "Chapter 2: Functions, Objects & DOM Manipulation (Mastery)",
      "lessons": [
        {
          "slug": "functions-and-scope",
          "title": "Functions, Parameters, Arrow Functions & Scope",
          "description": "Organize code into reusable functions, understand parameters and return values, modern ES6 arrow functions, and lexical scope.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Functions are the fundamental building blocks of software. A function is a reusable block of code designed to perform a specific task, take input values (parameters), and return an output value."
            },
            {
              "type": "definition",
              "term": "Parameter vs Argument",
              "plain": "A parameter is the placeholder variable defined in the function declaration (e.g. function add(a, b)). An argument is the actual concrete value passed when calling it (e.g. add(5, 10)).",
              "formal": "Function Formal Parameter vs Call Argument"
            },
            {
              "type": "code",
              "language": "javascript",
              "code": "// 1. Function Declaration\nfunction calculateTax(subtotal, taxRate = 0.08) {\n  return subtotal * taxRate;\n}\n\n// 2. Modern Arrow Function (ES6+)\nconst calculateTotal = (subtotal, taxRate = 0.08) => {\n  const tax = calculateTax(subtotal, taxRate);\n  return subtotal + tax;\n};\n\n// 3. Concise one-line arrow function (implicit return)\nconst square = (n) => n * n;\n\nconsole.log(\"Total cost:\", calculateTotal(100)); // Outputs: 108",
              "filename": "functions.js"
            },
            {
              "type": "keyPoints",
              "points": [
                "Functions encapsulate logic and promote DRY (Don't Repeat Yourself) code.",
                "Arrow functions (() => {}) provide concise syntax and lexical this binding.",
                "Variables defined inside a function have local scope and cannot be accessed outside."
              ]
            },
            {
              "type": "quiz",
              "question": "What is the difference between a function parameter and a function argument?",
              "options": [
                "A parameter is the placeholder variable in the function definition; an argument is the actual value passed in the function call.",
                "Parameters are used for math, while arguments are used for strings.",
                "Parameters are only used in CSS.",
                "There is no difference; they are exact synonyms in all contexts."
              ],
              "answer": 0,
              "explanation": "Parameters define the function signature; arguments provide the runtime values during execution."
            }
          ]
        },
        {
          "slug": "arrays-and-objects-data-structures",
          "title": "Arrays, Objects & Modern Array Methods",
          "description": "Master JavaScript core data structures: Objects (key-value pairs), Arrays (ordered lists), .map(), .filter(), and destructuring.",
          "duration": 30,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Complex applications store structured data using Arrays (ordered lists of items) and Objects (collections of named key-value properties)."
            },
            {
              "type": "code",
              "language": "javascript",
              "code": "// Object representing a structured user profile\nconst user = {\n  id: \"usr_101\",\n  name: \"Aravind\",\n  skills: [\"JavaScript\", \"TypeScript\", \"React\"],\n  isPremium: true,\n};\n\n// Destructuring property extraction\nconst { name, skills } = user;\n\n// Array of objects\nconst courses = [\n  { id: 1, title: \"HTML5\", price: 0 },\n  { id: 2, title: \"TypeScript\", price: 49 },\n  { id: 3, title: \"Next.js\", price: 79 },\n];\n\n// .filter(): Select items that match condition\nconst paidCourses = courses.filter((c) => c.price > 0);\n\n// .map(): Transform each item into a new format\nconst courseTitles = courses.map((c) => c.title.toUpperCase());",
              "filename": "data-structures.js"
            },
            {
              "type": "keyPoints",
              "points": [
                "Objects store named key-value properties; Arrays store ordered sequential items.",
                ".map() transforms an array into a new array of the exact same length.",
                ".filter() creates a new array containing only items that satisfy a boolean test."
              ]
            },
            {
              "type": "quiz",
              "question": "What does the array .filter() method return?",
              "options": [
                "The single first element that matched.",
                "A brand new array containing only the elements that returned true from the callback function.",
                "A number representing the total count.",
                "It modifies the original array in place without returning anything."
              ],
              "answer": 1,
              "explanation": ".filter() creates and returns a new filtered array without mutating the original source array."
            }
          ]
        },
        {
          "slug": "dom-manipulation-and-event-listeners",
          "title": "DOM Manipulation & Event Listeners",
          "description": "Select HTML elements with document.querySelector, change text/classes dynamically, and respond to user clicks with addEventListener.",
          "duration": 30,
          "blocks": [
            {
              "type": "paragraph",
              "text": "The DOM (Document Object Model) is the browser in-memory representation of your HTML page. JavaScript uses DOM methods to select elements, update text, toggle CSS classes, and handle user interactions."
            },
            {
              "type": "code",
              "language": "javascript",
              "code": "// 1. Select elements from the DOM\nconst counterBtn = document.querySelector(\"#counter-btn\");\nconst countDisplay = document.querySelector(\"#count-display\");\n\nlet count = 0;\n\n// 2. Attach an Event Listener to respond to clicks\ncounterBtn.addEventListener(\"click\", () => {\n  count++;\n  countDisplay.textContent = `Clicked ${count} times`;\n  \n  // Dynamically toggle a CSS class\n  if (count >= 10) {\n    countDisplay.classList.add(\"text-celebration\");\n  }\n});",
              "filename": "dom.js"
            },
            {
              "type": "keyPoints",
              "points": [
                "document.querySelector(\"#id\" or \".class\") selects elements using standard CSS selector syntax.",
                "addEventListener(\"click\", callback) attaches non-blocking event handlers.",
                "textContent updates text safely without introducing XSS vulnerabilities."
              ]
            },
            {
              "type": "quiz",
              "question": "Which method is the modern standard for attaching user event handlers (like button clicks) to DOM elements?",
              "options": [
                "element.attachOnClick(callback)",
                "document.listen(\"click\")",
                "element.addEventListener(\"click\", callback)",
                "window.addEvent(\"click\")"
              ],
              "answer": 2,
              "explanation": "addEventListener is the universal W3C standard method for registering event callbacks on DOM nodes."
            }
          ]
        },
        {
          "slug": "asynchronous-javascript-and-fetch",
          "title": "Asynchronous JavaScript: Promises, Async/Await & Fetch",
          "description": "Master non-blocking asynchronous programming: Promises, async/await syntax, making HTTP requests with fetch(), and error handling with try/catch.",
          "duration": 30,
          "blocks": [
            {
              "type": "paragraph",
              "text": "JavaScript is single-threaded. When making network requests to fetch data from a server, JavaScript uses Asynchronous Promises so the browser does not freeze while waiting for data."
            },
            {
              "type": "definition",
              "term": "Promise & async/await",
              "plain": "A Promise is an object representing eventual completion of an async operation. async/await is modern syntax that lets you write async code that reads sequentially like normal synchronous code.",
              "formal": "ECMAScript Asynchronous Function Definitions"
            },
            {
              "type": "code",
              "language": "javascript",
              "code": "// Fetch JSON data from an external REST API using async/await\nasync function loadUserProfile(userId) {\n  try {\n    console.log(\"1: Sending network request...\");\n    const response = await fetch(`https://api.example.com/users/${userId}`);\n    \n    if (!response.ok) {\n      throw new Error(`HTTP Server Error: ${response.status}`);\n    }\n    \n    const data = await response.json();\n    console.log(\"2: Data received successfully:\", data.name);\n    return data;\n  } catch (error) {\n    console.error(\"3: Network request failed:\", error.message);\n  }\n}\n\nloadUserProfile(101);",
              "filename": "fetch.js"
            },
            {
              "type": "keyPoints",
              "points": [
                "async functions always return a Promise.",
                "await pauses function execution until the Promise resolves without blocking the browser thread.",
                "Always wrap await statements in try/catch blocks for bulletproof error handling."
              ]
            },
            {
              "type": "quiz",
              "question": "What is the main benefit of using async/await over raw callback functions for network requests?",
              "options": [
                "It increases the internet connection bandwidth.",
                "It forces the browser to run on multiple CPU cores simultaneously.",
                "It converts JSON responses into HTML tables automatically.",
                "It allows asynchronous code to be written cleanly and sequentially with standard try/catch error handling, avoiding callback hell."
              ],
              "answer": 3,
              "explanation": "async/await provides clean, sequential syntax for managing asynchronous operations with standard error handling."
            }
          ]
        }
      ]
    }
  ]
}
