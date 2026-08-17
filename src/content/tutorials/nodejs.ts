import type { Tutorial } from '../types'

export const nodejsCourse: Tutorial = {
  "slug": "nodejs",
  "title": "Node.js & Express: Backend Architecture & APIs",
  "shortTitle": "Node.js",
  "description": "Master backend web development: Node.js runtime, Event Loop, Streams, Buffers, Express REST APIs, middleware pipelines, JWT auth, and database ORMs.",
  "category": "Web Development",
  "difficulty": "intermediate",
  "icon": "code",
  "tags": [
    "Node.js",
    "Express",
    "Backend",
    "REST API",
    "JWT",
    "PostgreSQL",
    "Prisma"
  ],
  "color": "#339933",
  "updated": "2026-08-17",
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
      "title": "Phase 1: Node.js Runtime & Express Foundations",
      "lessons": [
        {
          "slug": "nodejs-runtime-and-streams",
          "title": "Node.js Runtime, Event Loop & Streams",
          "description": "Master Node.js Runtime, Event Loop & Streams with practical examples, architectural deep dives, and key concepts.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Node.js uses the V8 engine and libuv to provide non-blocking I/O operations through an asynchronous event loop and stream processing."
            },
            {
              "type": "code",
              "language": "javascript",
              "code": "import { createReadStream, createWriteStream } from 'node:fs';\nimport { pipeline } from 'node:stream/promises';\nimport { createGzip } from 'node:zlib';\n\nasync function compressFile(input, output) {\n  await pipeline(\n    createReadStream(input),\n    createGzip(),\n    createWriteStream(output)\n  );\n  console.log('Compression complete');\n}",
              "filename": "compress.js"
            },
            {
              "type": "keyPoints",
              "points": [
                "Streams process large data chunks in memory without buffering entire files.",
                "libuv manages thread pools for file system and DNS operations.",
                "The process object provides environment variables, signals, and exit handlers."
              ]
            },
            {
              "type": "quiz",
              "question": "Why are Streams preferred over fs.readFile when handling large multi-gigabyte files in Node.js?",
              "options": [
                "Streams process data piece by piece in small buffers, preventing memory exhaustion (OOM).",
                "Streams convert binary files into synchronous string objects.",
                "Streams disable operating system file access permissions.",
                "Streams force execution onto the graphics card GPU."
              ],
              "answer": 0,
              "explanation": "Streams maintain a small constant memory footprint when streaming data."
            }
          ]
        },
        {
          "slug": "express-rest-api-architecture",
          "title": "Express Server, Middleware & REST Architecture",
          "description": "Master Express Server, Middleware & REST Architecture with practical examples, architectural deep dives, and key concepts.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Express is the foundational HTTP routing and middleware framework for Node.js, executing handlers along request-response pipelines."
            },
            {
              "type": "code",
              "language": "typescript",
              "code": "import express, { Request, Response, NextFunction } from 'express';\n\nconst app = express();\napp.use(express.json());\n\n// Logging middleware\napp.use((req: Request, _res: Response, next: NextFunction) => {\n  console.log(`${req.method} ${req.url}`);\n  next();\n});\n\napp.get('/api/health', (_req: Request, res: Response) => {\n  res.json({ status: 'healthy', uptime: process.uptime() });\n});\n\napp.listen(3000, () => console.log('Server listening on port 3000'));",
              "filename": "server.ts"
            },
            {
              "type": "keyPoints",
              "points": [
                "Middleware functions have access to req, res, and the next() callback.",
                "app.use(express.json()) parses incoming JSON request bodies.",
                "Centralized error handling middleware uses four arguments: (err, req, res, next)."
              ]
            },
            {
              "type": "quiz",
              "question": "What is the signature of an Express error-handling middleware function?",
              "options": [
                "(req, res)",
                "(err, req, res, next)",
                "(err, callback)",
                "(status, data, next)"
              ],
              "answer": 1,
              "explanation": "Express identifies error-handling middleware by its four parameters (err, req, res, next)."
            }
          ]
        }
      ]
    },
    {
      "title": "Phase 2: Authentication, Security & Database ORM",
      "lessons": [
        {
          "slug": "jwt-authentication-and-security",
          "title": "JWT Authentication, Password Hashing & Security",
          "description": "Master JWT Authentication, Password Hashing & Security with practical examples, architectural deep dives, and key concepts.",
          "duration": 30,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Secure backend services with bcrypt password hashing, JSON Web Tokens (JWT), CORS headers, rate limiting, and helmet."
            },
            {
              "type": "code",
              "language": "typescript",
              "code": "import jwt from 'jsonwebtoken';\nimport bcrypt from 'bcrypt';\n\nconst JWT_SECRET = process.env.JWT_SECRET || 'secret';\n\nexport async function hashPassword(plain: string): Promise<string> {\n  return bcrypt.hash(plain, 12);\n}\n\nexport function generateToken(userId: string): string {\n  return jwt.sign({ sub: userId }, JWT_SECRET, { expiresIn: '1h' });\n}",
              "filename": "auth.ts"
            },
            {
              "type": "keyPoints",
              "points": [
                "bcrypt applies adaptive salt rounds to defend against rainbow table attacks.",
                "JWTs consist of Header, Payload, and Signature parts.",
                "Always validate token signatures before trusting request claims."
              ]
            },
            {
              "type": "quiz",
              "question": "Why is bcrypt hashing preferred over plain SHA-256 for storing user passwords?",
              "options": [
                "bcrypt converts passwords into plain unencrypted text.",
                "bcrypt automatically sends passwords to third-party databases.",
                "bcrypt is an adaptive hashing algorithm with salt rounds designed to be computationally slow against brute-force attacks.",
                "bcrypt runs inside the browser DOM."
              ],
              "answer": 2,
              "explanation": "bcrypt slows down brute-force attacks through deliberate key derivation work factors."
            }
          ]
        },
        {
          "slug": "database-integration-prisma",
          "title": "Database Persistence with PostgreSQL & Prisma ORM",
          "description": "Master Database Persistence with PostgreSQL & Prisma ORM with practical examples, architectural deep dives, and key concepts.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Prisma ORM provides type-safe database queries, automated schema migrations, and relational modeling for PostgreSQL and MySQL."
            },
            {
              "type": "code",
              "language": "typescript",
              "code": "import { PrismaClient } from '@prisma/client';\nconst prisma = new PrismaClient();\n\nexport async function createUserWithProfile(name: string, email: string) {\n  return prisma.user.create({\n    data: {\n      name,\n      email,\n      profile: { create: { bio: 'Developer' } }\n    },\n    include: { profile: true }\n  });\n}",
              "filename": "database.ts"
            },
            {
              "type": "keyPoints",
              "points": [
                "Prisma Client generates TypeScript types directly from your database schema.",
                "prisma migrate dev manages incremental SQL schema migrations.",
                "Transactions execute atomic multi-record mutations safely."
              ]
            },
            {
              "type": "quiz",
              "question": "What is the primary advantage of using a TypeScript ORM like Prisma in a Node.js backend?",
              "options": [
                "It converts relational tables into NoSQL documents automatically.",
                "It bypasses SQL query planning and network sockets.",
                "It disables database primary key constraints.",
                "It guarantees compile-time type safety across database queries, preventing schema runtime errors."
              ],
              "answer": 3,
              "explanation": "Prisma provides compile-time type safety and autocomplete derived from database schemas."
            }
          ]
        }
      ]
    }
  ]
}
