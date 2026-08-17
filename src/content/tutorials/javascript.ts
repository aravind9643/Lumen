import type { Tutorial } from '../types'

export const javascriptCourse: Tutorial = {
  "slug": "javascript",
  "title": "Modern JavaScript: ES6+, Async Patterns & DOM",
  "shortTitle": "JavaScript",
  "description": "Deep dive into modern JavaScript engineering: closures, prototypes, event loops, Promises, async/await, ES modules, and modern web APIs.",
  "category": "Web Development",
  "difficulty": "beginner",
  "icon": "code",
  "tags": [
    "JavaScript",
    "ES6+",
    "Async",
    "Event Loop",
    "Closures",
    "Promises",
    "DOM"
  ],
  "color": "#f7df1e",
  "updated": "2026-08-17",
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
      "title": "Phase 1: Language Primitives & Closures",
      "lessons": [
        {
          "slug": "scope-closures-and-execution-context",
          "title": "Execution Context, Scope Chains & Closures",
          "description": "Master Execution Context, Scope Chains & Closures with practical examples, architectural deep dives, and key concepts.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "JavaScript is a single-threaded, non-blocking asynchronous language. Understanding execution contexts, lexical scoping, and closures is fundamental."
            },
            {
              "type": "code",
              "language": "javascript",
              "code": "function createCounter(initial = 0) {\n  let count = initial;\n  return {\n    increment: () => ++count,\n    get: () => count\n  };\n}\n\nconst counter = createCounter(10);\nconsole.log(counter.increment()); // 11\nconsole.log(counter.get()); // 11",
              "filename": "closures.js"
            },
            {
              "type": "keyPoints",
              "points": [
                "A closure gives an inner function access to its outer lexical scope even after the outer function has returned.",
                "const and let provide block-level scoping and temporal dead zones.",
                "Arrow functions lexically bind this from their enclosing context."
              ]
            },
            {
              "type": "quiz",
              "question": "What is a closure in JavaScript?",
              "options": [
                "A function bundled together with references to its surrounding lexical environment.",
                "A syntax error that halts the V8 JavaScript engine.",
                "A synchronous thread locking mechanism.",
                "A method to serialize JSON objects into binary buffers."
              ],
              "answer": 0,
              "explanation": "Closures allow functions to maintain state across invocations."
            }
          ]
        },
        {
          "slug": "prototypes-and-modern-classes",
          "title": "Prototypes, Inheritance & ES6 Classes",
          "description": "Master Prototypes, Inheritance & ES6 Classes with practical examples, architectural deep dives, and key concepts.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "JavaScript uses prototypal inheritance under the hood. ES6 class syntax is syntactic sugar over prototype chains."
            },
            {
              "type": "code",
              "language": "javascript",
              "code": "class Repository {\n  constructor(name) {\n    this.name = name;\n  }\n\n  describe() {\n    return `Repository: ${this.name}`;\n  }\n}\n\nconst repo = new Repository('Lumen');\nconsole.log(repo.describe());",
              "filename": "classes.js"
            },
            {
              "type": "keyPoints",
              "points": [
                "Objects link to a prototype object via [[Prototype]] / __proto__.",
                "Method definitions on ES6 classes reside on Class.prototype.",
                "super() calls the parent constructor during derived class instantiation."
              ]
            },
            {
              "type": "quiz",
              "question": "How does property lookup work across the JavaScript prototype chain?",
              "options": [
                "The engine queries the global DOM window object directly.",
                "The engine checks the object itself, then traverses up its prototype chain until found or reaching null.",
                "Properties are cloned into every instance at compilation time.",
                "The engine raises a reference error immediately if not found on the instance."
              ],
              "answer": 1,
              "explanation": "Prototype traversal walks the chain until finding the property or reaching the root."
            }
          ]
        }
      ]
    },
    {
      "title": "Phase 2: Asynchronous Event Loop & Web APIs",
      "lessons": [
        {
          "slug": "event-loop-and-microtasks",
          "title": "The Event Loop, Microtasks & Macrotasks",
          "description": "Master The Event Loop, Microtasks & Macrotasks with practical examples, architectural deep dives, and key concepts.",
          "duration": 30,
          "blocks": [
            {
              "type": "paragraph",
              "text": "The JavaScript runtime uses a Call Stack, Web APIs, a Microtask Queue (Promises, queueMicrotask), and a Task Queue (setTimeout, I/O)."
            },
            {
              "type": "code",
              "language": "javascript",
              "code": "console.log('1: Sync');\nsetTimeout(() => console.log('2: Timeout task'), 0);\nPromise.resolve().then(() => console.log('3: Microtask'));\nconsole.log('4: Sync');\n// Output: 1, 4, 3, 2",
              "filename": "event-loop.js"
            },
            {
              "type": "keyPoints",
              "points": [
                "Synchronous call stack code runs first to completion.",
                "The microtask queue is drained completely after every stack frame before the next macrotask.",
                "requestAnimationFrame runs immediately before browser layout/paint cycles."
              ]
            },
            {
              "type": "quiz",
              "question": "Between a resolved Promise (.then) and a setTimeout(..., 0), which executes first after synchronous code?",
              "options": [
                "setTimeout executes first due to timer priority.",
                "Both execute in parallel on separate operating system threads.",
                "The Promise microtask executes first because microtasks are drained before the next macrotask.",
                "Execution order is non-deterministic and randomized by the browser."
              ],
              "answer": 2,
              "explanation": "Microtasks have higher execution priority than timer macrotasks."
            }
          ]
        },
        {
          "slug": "async-await-and-fetch",
          "title": "Promises, Async/Await & Modern Fetch API",
          "description": "Master Promises, Async/Await & Modern Fetch API with practical examples, architectural deep dives, and key concepts.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Async/await provides clean sequential syntax over Promises with standard try/catch error handling and AbortController cancellation."
            },
            {
              "type": "code",
              "language": "javascript",
              "code": "async function fetchUserData(userId, signal) {\n  try {\n    const res = await fetch(`/api/users/${userId}`, { signal });\n    if (!res.ok) throw new Error(`HTTP ${res.status}`);\n    return await res.json();\n  } catch (err) {\n    if (err.name === 'AbortError') return console.log('Request cancelled');\n    console.error('Fetch error:', err);\n  }\n}",
              "filename": "fetch.js"
            },
            {
              "type": "keyPoints",
              "points": [
                "async functions always return a Promise implicitly.",
                "await pauses execution of the async function until the Promise settles.",
                "AbortController allows cancelling pending in-flight network requests."
              ]
            },
            {
              "type": "quiz",
              "question": "What does an async function return if you return a plain primitive value like return 42?",
              "options": [
                "The literal number 42 synchronously.",
                "An unresolved pending callback stream.",
                "A DOM Node containing the string \"42\".",
                "A Promise that resolves to the value 42."
              ],
              "answer": 3,
              "explanation": "Async functions always wrap return values in a resolved Promise."
            }
          ]
        }
      ]
    }
  ]
}
