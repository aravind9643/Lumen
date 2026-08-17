import type { Tutorial } from '../types'

export const nextjsCourse: Tutorial = {
  "slug": "nextjs",
  "title": "Next.js & React Server Components: Full-Stack Web",
  "shortTitle": "Next.js",
  "description": "Master full-stack React with Next.js App Router, React Server Components (RSC), Server Actions, dynamic routing, caching, and Vercel edge deployment.",
  "category": "Web Development",
  "difficulty": "intermediate",
  "icon": "sparkles",
  "tags": [
    "Next.js",
    "App Router",
    "RSC",
    "Server Actions",
    "SSR",
    "Full-Stack"
  ],
  "color": "#000000",
  "updated": "2026-08-17",
  "prerequisites": [
    "Zero prior experience required — built from first principles."
  ],
  "outcomes": [
    "Master modern Next.js syntax, core mental models, and architectural patterns",
    "Build clean, performant, and production-grade Next.js applications",
    "Understand trade-offs, testing strategies, and industry best practices"
  ],
  "chapters": [
    {
      "title": "Phase 1: App Router & Server Components",
      "lessons": [
        {
          "slug": "app-router-and-rsc-architecture",
          "title": "App Router & React Server Components (RSC)",
          "description": "Master App Router & React Server Components (RSC) with practical examples, architectural deep dives, and key concepts.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Next.js App Router uses React Server Components by default. Server components render on the server, sending zero client-side JavaScript bundle weight."
            },
            {
              "type": "code",
              "language": "tsx",
              "code": "// app/dashboard/page.tsx (Server Component by default)\nimport { db } from '@/lib/db';\n\nexport default async function DashboardPage() {\n  const users = await db.user.findMany();\n\n  return (\n    <main>\n      <h1>User Dashboard ({users.length})</h1>\n      <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>\n    </main>\n  );\n}",
              "filename": "page.tsx"
            },
            {
              "type": "keyPoints",
              "points": [
                "Server Components execute only on the server with direct database/filesystem access.",
                "Use \"use client\" directive at the top of a file for client interactivity (hooks, events).",
                "Client components can be nested inside server components as children."
              ]
            },
            {
              "type": "quiz",
              "question": "What is the primary performance benefit of React Server Components (RSC)?",
              "options": [
                "They execute on the server and emit HTML/RSC payloads with zero client JavaScript bundle overhead.",
                "They disable all HTTP networking protocols.",
                "They replace the database query optimizer with CSS rules.",
                "They convert React components into WebAssembly assembly binaries."
              ],
              "answer": 0,
              "explanation": "Server Components keep heavy dependencies on the server without bloating client JS."
            }
          ]
        },
        {
          "slug": "server-actions-and-data-mutations",
          "title": "Server Actions, Forms & Revalidation",
          "description": "Master Server Actions, Forms & Revalidation with practical examples, architectural deep dives, and key concepts.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Server Actions allow client forms to call asynchronous server functions directly without building custom REST API route handlers."
            },
            {
              "type": "code",
              "language": "tsx",
              "code": "// app/actions.ts\n'use server';\nimport { revalidatePath } from 'next/cache';\nimport { db } from '@/lib/db';\n\nexport async function createPost(formData: FormData) {\n  const title = formData.get('title') as string;\n  await db.post.create({ data: { title } });\n  revalidatePath('/posts');\n}",
              "filename": "actions.ts"
            },
            {
              "type": "keyPoints",
              "points": [
                "\"use server\" defines an endpoint callable from client or server forms.",
                "revalidatePath invalidates cached server component data on demand.",
                "Server Actions work with progressive enhancement even before JS hydrates."
              ]
            },
            {
              "type": "quiz",
              "question": "What does \"use server\" at the top of an async function declare in Next.js?",
              "options": [
                "It forces the client browser to start a local Node.js process.",
                "It exposes the function as a secure, callable Server Action invoked via RPC from client forms.",
                "It makes the code execute on a physical edge CDN hardware chip.",
                "It encrypts the entire webpage with SSL certificates."
              ],
              "answer": 1,
              "explanation": "use server marks functions as Server Actions."
            }
          ]
        }
      ]
    },
    {
      "title": "Phase 2: Caching, Middleware & Edge Deployment",
      "lessons": [
        {
          "slug": "caching-and-data-fetching",
          "title": "Next.js Caching Architecture & Data Fetching",
          "description": "Master Next.js Caching Architecture & Data Fetching with practical examples, architectural deep dives, and key concepts.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Next.js provides four distinct caching layers: Request Memoization, Data Cache, Full Route Cache, and the Client-side Router Cache."
            },
            {
              "type": "code",
              "language": "tsx",
              "code": "// Cached fetch with tag-based on-demand revalidation\nexport async function getProducts() {\n  const res = await fetch('https://api.example.com/products', {\n    next: { tags: ['products'], revalidate: 3600 }\n  });\n  return res.json();\n}",
              "filename": "data.ts"
            },
            {
              "type": "keyPoints",
              "points": [
                "fetch in Next.js is patched to cache responses in the Data Cache.",
                "revalidateTag allows granular cache invalidation across distributed systems.",
                "Route segments can specify export const revalidate = 60 for ISR."
              ]
            },
            {
              "type": "quiz",
              "question": "How does Next.js handle repeated fetch() calls with the same URL within a single render pass?",
              "options": [
                "It triggers duplicate parallel requests over HTTP/3.",
                "It raises an unhandled promise rejection.",
                "It uses Request Memoization to execute the network call once and reuse the result.",
                "It cancels all requests after the first 10ms."
              ],
              "answer": 2,
              "explanation": "Request memoization deduplicates identical requests within a render tree."
            }
          ]
        },
        {
          "slug": "middleware-and-edge-routes",
          "title": "Middleware, Route Handlers & Edge Execution",
          "description": "Master Middleware, Route Handlers & Edge Execution with practical examples, architectural deep dives, and key concepts.",
          "duration": 20,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Next.js Middleware runs before a request is completed on Edge runtimes, ideal for authentication, redirects, and header rewriting."
            },
            {
              "type": "code",
              "language": "typescript",
              "code": "import { NextResponse } from 'next/server';\nimport type { NextRequest } from 'next/server';\n\nexport function middleware(request: NextRequest) {\n  const token = request.cookies.get('session')?.value;\n  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {\n    return NextResponse.redirect(new URL('/login', request.url));\n  }\n  return NextResponse.next();\n}\n\nexport const config = {\n  matcher: ['/dashboard/:path*'],\n};",
              "filename": "middleware.ts"
            },
            {
              "type": "keyPoints",
              "points": [
                "Middleware executes before static files and page routes are resolved.",
                "Edge Runtime provides fast global cold starts without full Node.js overhead.",
                "Route handlers in app/api/route.ts provide full Web Standard Request/Response APIs."
              ]
            },
            {
              "type": "quiz",
              "question": "Where does Next.js Middleware execute relative to page rendering and route handlers?",
              "options": [
                "After the client browser has completely rendered the DOM.",
                "Only when an unhandled server error occurs.",
                "Inside a Web Worker on the client device.",
                "Before any page rendering or route handler execution, intercepting incoming requests at the Edge."
              ],
              "answer": 3,
              "explanation": "Middleware runs in front of all route resolution."
            }
          ]
        }
      ]
    }
  ]
}
