import type { Tutorial } from '../types'

export const nodejsCourse: Tutorial = {
  "slug": "nodejs",
  "title": "Node.js & Express Architecture: REST APIs to Mastery",
  "shortTitle": "Node.js",
  "description": "A complete, beginner-to-mastery path covering JavaScript on the server with Node.js, npm package management, file systems, HTTP servers, Express.js REST APIs, middleware, and database integration.",
  "category": "Web Development",
  "difficulty": "intermediate",
  "icon": "code",
  "tags": [
    "Node.js",
    "Express",
    "Backend",
    "REST API",
    "Streams",
    "Libuv",
    "JWT"
  ],
  "color": "#339933",
  "updated": "2026-08-18",
  "prerequisites": [
    "Zero prior experience required — built from first principles."
  ],
  "outcomes": [
    "Master modern Node.js syntax, core mental models, and architectural patterns",
    "Build clean, performant, and production-grade Node.js applications",
    "Understand trade-offs, testing strategies, and industry best practices"
  ],
  "chapters": [
    {
      "title": "Chapter 1: Node.js Internals & Core Server APIs (Beginner)",
      "lessons": [
        {
          "slug": "what-is-nodejs-and-running-scripts",
          "title": "What is Node.js & Running Server JavaScript?",
          "description": "Learn why Node.js was created by Ryan Dahl, the V8 JavaScript engine, the Libuv event loop, and executing your first backend script with node.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "Level: Beginner | Prerequisites: JavaScript Fundamentals"
            },
            {
              "type": "paragraph",
              "text": "Historically, JavaScript only ran inside web browsers. In 2009, Ryan Dahl combined Google's high-performance V8 JavaScript engine with a C++ asynchronous event loop (Libuv) to create Node.js — allowing JavaScript to run directly on servers, interact with operating system files, and handle millions of concurrent network connections."
            },
            {
              "type": "definition",
              "term": "Node.js",
              "plain": "An open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser.",
              "formal": "Asynchronous Event-Driven JavaScript Runtime"
            },
            {
              "type": "analogy",
              "title": "The Fast-Food Order Counter Metaphor",
              "text": "Traditional multi-threaded servers (like PHP/Apache) assign a dedicated waiter to stand at your table doing nothing while the chef cooks. Node.js is a fast-food order counter: a single cashier takes your order, gives you a buzzer, immediately takes the next customer's order, and buzzes you when the kitchen finishes your food."
            },
            {
              "type": "code",
              "language": "javascript",
              "code": "// hello-node.js\nconsole.log('Node.js is executing on the server!');\nconsole.log('Server Platform:', process.platform);\nconsole.log('Node Version:', process.version);\n\n// Run in your terminal:\n// $ node hello-node.js",
              "filename": "hello-node.js"
            },
            {
              "type": "keyPoints",
              "points": [
                "Node.js allows JavaScript to run on servers and desktops.",
                "Node.js is single-threaded and non-blocking (asynchronous I/O).",
                "Run any JS file from your terminal with: node filename.js."
              ]
            },
            {
              "type": "quiz",
              "question": "What makes Node.js capable of handling thousands of concurrent network connections on a single JavaScript execution thread?",
              "options": [
                "Its non-blocking asynchronous event-driven I/O model powered by Libuv.",
                "It creates 10,000 operating system threads simultaneously.",
                "It deletes all user data after 1 second.",
                "It converts JavaScript into SQL statements."
              ],
              "answer": 0,
              "explanation": "Non-blocking I/O allows a single thread to service incoming connections without waiting for slow disk or network operations."
            }
          ]
        },
        {
          "slug": "module-system-and-npm-package-manager",
          "title": "Node Module System (ESM vs CommonJS) & npm",
          "description": "Manage dependencies with npm, understand package.json, and master modern ES Module imports (import/export) vs CommonJS (require).",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Node.js organizes code into modules. Modern Node.js uses standard ES Modules (`import`/`export`), configured by adding `\"type\": \"module\"` in `package.json`."
            },
            {
              "type": "code",
              "language": "javascript",
              "code": "// math.js: Exporting functions\nexport function calculateSum(a, b) {\n  return a + b;\n}\n\n// app.js: Importing functions\nimport { calculateSum } from './math.js';\nimport os from 'node:os';\n\nconsole.log('Sum:', calculateSum(10, 20));\nconsole.log('Total System RAM:', os.totalmem() / (1024 * 1024 * 1024), 'GB');",
              "filename": "app.js"
            },
            {
              "type": "keyPoints",
              "points": [
                "package.json defines your project dependencies, scripts, and metadata.",
                "npm install package-name downloads packages from the public npm registry.",
                "Always use ES Modules (import/export) with \"type\": \"module\"."
              ]
            },
            {
              "type": "quiz",
              "question": "How do you configure a Node.js project to use modern ES Modules (import/export) natively?",
              "options": [
                "Write use esm; at the top of every file.",
                "Add \"type\": \"module\" inside your project package.json file.",
                "Rename your computer operating system.",
                "Install Python 3."
              ],
              "answer": 1,
              "explanation": "\"type\": \"module\" in package.json informs Node.js that .js files should be treated as ECMAScript modules."
            }
          ]
        },
        {
          "slug": "working-with-files-and-paths",
          "title": "File System & Paths (node:fs/promises & node:path)",
          "description": "Read files, write JSON data, create directories, and manipulate cross-platform file paths using node:fs/promises and node:path.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Node.js provides built-in modules for interacting with the operating system: `node:fs/promises` for reading and writing files asynchronously, and `node:path` for joining cross-platform directory paths."
            },
            {
              "type": "code",
              "language": "javascript",
              "code": "import fs from 'node:fs/promises';\nimport path from 'node:path';\n\nasync function handleFileOperations() {\n  const filePath = path.join(process.cwd(), 'database', 'users.json');\n  \n  // 1. Write structured JSON data to disk\n  const users = [{ id: 1, name: 'Aravind', role: 'Engineer' }];\n  await fs.writeFile(filePath, JSON.stringify(users, null, 2), 'utf-8');\n  console.log('File written successfully.');\n\n  // 2. Read file data from disk\n  const rawData = await fs.readFile(filePath, 'utf-8');\n  const parsed = JSON.parse(rawData);\n  console.log('Read users from disk:', parsed.length);\n}\n\nhandleFileOperations();",
              "filename": "files.js"
            },
            {
              "type": "keyPoints",
              "points": [
                "Always use node:fs/promises with async/await for non-blocking disk I/O.",
                "Use path.join() to prevent path separator bugs across Windows (\\) and Linux (/).",
                "Never use synchronous methods (like readFileSync) in production servers as they block the event loop."
              ]
            },
            {
              "type": "quiz",
              "question": "Why should you use path.join() rather than string concatenation (\"dir/\" + file) when constructing file paths in Node.js?",
              "options": [
                "path.join() compresses the file.",
                "path.join() encrypts the file path.",
                "path.join() handles cross-platform path separators automatically between Windows (\\) and POSIX/Linux (/).",
                "String concatenation is forbidden by JavaScript syntax."
              ],
              "answer": 2,
              "explanation": "Windows uses backslashes while macOS/Linux use forward slashes; path.join() normalizes paths across operating systems."
            }
          ]
        },
        {
          "slug": "http-fundamentals-and-native-server",
          "title": "HTTP Fundamentals & Creating a Native Web Server",
          "description": "Understand HTTP request/response lifecycles, HTTP methods, headers, status codes, and build a native server with node:http.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Web communication is built on HTTP: a client sends an HTTP Request (Method, URL, Headers, Body), and the server replies with an HTTP Response (Status Code, Headers, Body)."
            },
            {
              "type": "code",
              "language": "javascript",
              "code": "import http from 'node:http';\n\nconst server = http.createServer((req, res) => {\n  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);\n  \n  // Set HTTP Response Headers\n  res.writeHead(200, { 'Content-Type': 'application/json' });\n  \n  // Send JSON response body\n  res.end(JSON.stringify({\n    message: 'Hello from Node.js Native HTTP Server!',\n    url: req.url,\n  }));\n});\n\nconst PORT = 3000;\nserver.listen(PORT, () => {\n  console.log(`Server listening at http://localhost:${PORT}`);\n});",
              "filename": "native-server.js"
            },
            {
              "type": "keyPoints",
              "points": [
                "HTTP Status 200 = OK, 201 = Created, 400 = Bad Request, 404 = Not Found, 500 = Server Error.",
                "res.writeHead() sets HTTP response headers and status codes.",
                "res.end() finishes sending response data to the client."
              ]
            },
            {
              "type": "quiz",
              "question": "Which HTTP status code signifies that a resource was successfully created on the server (such as creating a new user)?",
              "options": [
                "200 OK",
                "404 Not Found",
                "500 Internal Server Error",
                "201 Created"
              ],
              "answer": 3,
              "explanation": "HTTP status code 201 specifically indicates that a request succeeded and resulted in a new resource being created."
            }
          ]
        }
      ]
    },
    {
      "title": "Chapter 2: Express.js REST APIs & Backend Architecture (Mastery)",
      "lessons": [
        {
          "slug": "introduction-to-expressjs",
          "title": "Introduction to Express.js Framework & Routing",
          "description": "Learn why Express is the most popular Node.js web framework, create an Express application, and handle GET, POST, PUT, and DELETE routes.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "While `node:http` works, writing complex routing and JSON body parsing from scratch requires hundreds of lines of boilerplate. Express.js is a minimal, flexible web framework that simplifies route handling, middleware, and REST API creation."
            },
            {
              "type": "code",
              "language": "javascript",
              "code": "import express from 'express';\n\nconst app = express();\nconst PORT = 3000;\n\n// Route handling for GET /api/health\napp.get('/api/health', (req, res) => {\n  res.json({ status: 'healthy', timestamp: Date.now() });\n});\n\n// Route handling for GET /api/courses\napp.get('/api/courses', (req, res) => {\n  res.json([\n    { id: 1, title: 'Node.js Mastery' },\n    { id: 2, title: 'TypeScript Deep Dive' }\n  ]);\n});\n\napp.listen(PORT, () => console.log(`Express API running on port ${PORT}`));",
              "filename": "server.js"
            },
            {
              "type": "keyPoints",
              "points": [
                "Express simplifies routing with app.get(), app.post(), app.put(), app.delete().",
                "res.json() automatically formats objects into JSON and sets appropriate headers.",
                "Express is unopinionated, lightweight, and extensible."
              ]
            },
            {
              "type": "quiz",
              "question": "What does res.json({ data: \"value\" }) do inside an Express route handler?",
              "options": [
                "It serializes the object to JSON, sets the Content-Type: application/json header, and sends the HTTP response.",
                "It writes the data to a local text file.",
                "It reloads the client browser window.",
                "It compiles the JavaScript into SQL."
              ],
              "answer": 0,
              "explanation": "res.json() automates JSON serialization, header configuration, and response transmission."
            }
          ]
        },
        {
          "slug": "express-middleware-and-request-body",
          "title": "Express Middleware & Request Parsing (req.body, req.params)",
          "description": "Master the Express middleware pipeline (req, res, next), parse JSON request payloads with express.json(), and access URL parameters and query strings.",
          "duration": 30,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Middleware functions are functions that have access to the request object (`req`), response object (`res`), and the `next` function in the application’s request-response cycle."
            },
            {
              "type": "definition",
              "term": "Express Middleware",
              "plain": "A function (req, res, next) => {} that intercepts incoming HTTP requests, performs logic (like logging or auth), and calls next() to pass control to the next handler.",
              "formal": "Express HTTP Interception Pipeline"
            },
            {
              "type": "code",
              "language": "javascript",
              "code": "import express from 'express';\n\nconst app = express();\n\n// 1. Built-in body parsing middleware\napp.use(express.json());\n\n// 2. Custom logging middleware\napp.use((req, res, next) => {\n  console.log(`[${req.method}] ${req.url}`);\n  next(); // Mandatory: pass control to the next middleware/route\n});\n\n// 3. Dynamic Route Parameters (req.params) & Query Strings (req.query)\napp.get('/api/users/:id', (req, res) => {\n  const userId = req.params.id;         // from URL path /api/users/42\n  const includeBio = req.query.includeBio; // from URL query ?includeBio=true\n  res.json({ id: userId, bioIncluded: includeBio });\n});",
              "filename": "middleware.js"
            },
            {
              "type": "keyPoints",
              "points": [
                "Always call next() in middleware unless sending an immediate response.",
                "app.use(express.json()) is strictly required to read POST request bodies (req.body).",
                "Access URL path parameters with req.params.id and query strings with req.query.filter."
              ]
            },
            {
              "type": "quiz",
              "question": "What happens if a custom Express middleware does not call next() and does not send a response with res.send()/res.json()?",
              "options": [
                "The server restarts automatically.",
                "The HTTP request hangs indefinitely until the client times out.",
                "Express skips to the next route automatically.",
                "The database crashes."
              ],
              "answer": 1,
              "explanation": "If next() is never invoked and no response is closed, the connection remains open until the client or server timeout occurs."
            }
          ]
        },
        {
          "slug": "building-a-crud-rest-api",
          "title": "Building a Complete CRUD REST API",
          "description": "Construct a full CRUD (Create, Read, Update, Delete) RESTful API for a resources collection with proper HTTP status codes and error handling.",
          "duration": 30,
          "blocks": [
            {
              "type": "paragraph",
              "text": "REST (Representational State Transfer) is the industry standard architectural style for web APIs. Standard CRUD operations map cleanly to HTTP methods: POST (Create), GET (Read), PUT/PATCH (Update), DELETE (Delete)."
            },
            {
              "type": "code",
              "language": "javascript",
              "code": "import express from 'express';\n\nconst app = express();\napp.use(express.json());\n\nlet courses = [\n  { id: 1, title: 'HTML5 Foundations' },\n  { id: 2, title: 'Node.js Architecture' },\n];\n\n// READ ALL\napp.get('/api/courses', (req, res) => res.json(courses));\n\n// CREATE\napp.post('/api/courses', (req, res) => {\n  const { title } = req.body;\n  if (!title) return res.status(400).json({ error: 'Title is required' });\n  const newCourse = { id: Date.now(), title };\n  courses.push(newCourse);\n  res.status(201).json(newCourse);\n});\n\n// DELETE\napp.delete('/api/courses/:id', (req, res) => {\n  courses = courses.filter(c => c.id !== Number(req.params.id));\n  res.status(204).send(); // 204 No Content\n});",
              "filename": "crud-api.js"
            },
            {
              "type": "keyPoints",
              "points": [
                "POST returns 201 Created with the newly created resource.",
                "DELETE successful operations return 204 No Content.",
                "Always validate request body fields before saving data."
              ]
            },
            {
              "type": "quiz",
              "question": "Which HTTP method should be used when creating a new resource record in a RESTful API?",
              "options": [
                "GET",
                "DELETE",
                "POST",
                "OPTIONS"
              ],
              "answer": 2,
              "explanation": "POST is the standard RESTful HTTP method for submitting data to create a new resource."
            }
          ]
        },
        {
          "slug": "database-orm-and-jwt-security",
          "title": "Database Integration with Prisma ORM & JWT Security",
          "description": "Connect Node.js to relational databases using Prisma ORM, hash passwords securely with bcrypt, and issue JSON Web Tokens (JWT) for authentication.",
          "duration": 30,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Production Node.js backends use ORMs (like Prisma) for type-safe database queries and JWT (JSON Web Tokens) for stateless authentication."
            },
            {
              "type": "code",
              "language": "javascript",
              "code": "import jwt from 'jsonwebtoken';\nimport bcrypt from 'bcrypt';\n\nconst JWT_SECRET = process.env.JWT_SECRET || 'secret-key';\n\n// 1. Password Hashing with Salt Rounds\nexport async function hashPassword(plainPassword) {\n  return bcrypt.hash(plainPassword, 12);\n}\n\n// 2. Generating signed JWT Token on Login\nexport function generateAuthToken(user) {\n  return jwt.sign(\n    { sub: user.id, role: user.role },\n    JWT_SECRET,\n    { expiresIn: '24h' }\n  );\n}\n\n// 3. Authentication Verification Middleware\nexport function requireAuth(req, res, next) {\n  const authHeader = req.headers.authorization;\n  if (!authHeader?.startsWith('Bearer ')) {\n    return res.status(401).json({ error: 'Unauthorized: Missing token' });\n  }\n  try {\n    const token = authHeader.split(' ')[1];\n    req.user = jwt.verify(token, JWT_SECRET);\n    next();\n  } catch {\n    res.status(401).json({ error: 'Invalid or expired token' });\n  }\n}",
              "filename": "auth.js"
            },
            {
              "type": "keyPoints",
              "points": [
                "Never store plain-text passwords; always use salted adaptive hashes (bcrypt/argon2).",
                "JWT tokens are cryptographically signed, preventing tampering.",
                "Protect sensitive endpoints with authentication middleware."
              ]
            },
            {
              "type": "quiz",
              "question": "Why is plain text password storage strictly forbidden in web development?",
              "options": [
                "Plain text passwords take up too much disk storage space.",
                "Plain text strings cannot be sent over HTTPS.",
                "Browsers refuse to type plain text passwords.",
                "If the database is compromised, plain text passwords expose user accounts across all websites where they reused that password."
              ],
              "answer": 3,
              "explanation": "Passwords must always be hashed with salted cryptographic algorithms like bcrypt to protect users."
            }
          ]
        }
      ]
    }
  ]
}
