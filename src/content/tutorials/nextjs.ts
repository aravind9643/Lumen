import type { Tutorial } from '../types'

export const nextjsCourse: Tutorial = {
  "slug": "nextjs",
  "title": "Next.js & React Server Components: Zero to Mastery",
  "shortTitle": "Next.js",
  "description": "A complete, beginner-to-mastery path covering full-stack React with Next.js App Router, React Server Components (RSC), file-based routing, server data fetching, loading UI, Server Actions, and SEO metadata.",
  "category": "Web Development",
  "difficulty": "intermediate",
  "icon": "code",
  "tags": [
    "Next.js",
    "React Server Components",
    "App Router",
    "Server Actions",
    "SSR",
    "Edge"
  ],
  "color": "#000000",
  "updated": "2026-08-18",
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
      "title": "Chapter 1: Full-Stack React & App Router Foundations (Beginner)",
      "lessons": [
        {
          "slug": "what-is-nextjs-and-server-rendering",
          "title": "What is Next.js & Why Server-Side Rendering (SSR)?",
          "description": "Learn why Next.js was created, compare Client-Side Rendering (CSR) vs Server-Side Rendering (SSR) vs Static Site Generation (SSG), and understand the App Router architecture.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "Level: Intermediate | Prerequisites: React Fundamentals"
            },
            {
              "type": "paragraph",
              "text": "In standard React (Vite / CRA), the browser downloads an empty HTML file and a giant JavaScript bundle, parsing and rendering everything on the client device (Client-Side Rendering). This causes slow initial page loads and poor search engine SEO. Next.js is a full-stack React framework that renders React components on the server ahead of time, shipping fast, pre-rendered HTML to the user."
            },
            {
              "type": "definition",
              "term": "Next.js & Server-Side Rendering (SSR)",
              "plain": "A React framework that compiles and renders React components on the web server, generating HTML dynamically on every request.",
              "formal": "Full-Stack React Application Framework"
            },
            {
              "type": "analogy",
              "title": "The Meal Kit vs Restaurant Kitchen Analogy",
              "text": "Pure client-side React is like a meal kit delivery: you receive raw ingredients and must cook the entire meal on your stove (the client CPU). Next.js is a restaurant kitchen: professional chefs cook the meal completely on the server and hand you a steaming, ready-to-eat plate immediately."
            },
            {
              "type": "keyPoints",
              "points": [
                "Next.js pre-renders HTML on the server for instant page loads and superior SEO.",
                "The App Router uses React Server Components (RSC) by default.",
                "Next.js provides built-in routing, API endpoints, caching, and image optimization."
              ]
            },
            {
              "type": "quiz",
              "question": "What is the major performance benefit of Server-Side Rendering (SSR) in Next.js compared to traditional client-side React?",
              "options": [
                "Users receive pre-rendered, visible HTML immediately upon the first request, rather than waiting for client JavaScript to download and execute.",
                "It converts TypeScript code into C++ binaries.",
                "It eliminates the need for CSS styling.",
                "It disables browser cookies."
              ],
              "answer": 0,
              "explanation": "Server-Side Rendering delivers ready-to-display HTML instantly, drastically improving First Contentful Paint and SEO."
            }
          ]
        },
        {
          "slug": "file-based-routing-and-layouts",
          "title": "File-Based Routing, Pages & Nested Layouts",
          "description": "Master the app/ directory, page.tsx, persistent layout.tsx, and seamless client navigation with <Link>.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Next.js uses file-system based routing: the folders inside the `app/` directory define the URL paths of your website. A folder named `app/dashboard/analytics/` automatically becomes the route `/dashboard/analytics` when it contains a `page.tsx` file."
            },
            {
              "type": "code",
              "language": "tsx",
              "code": "// app/layout.tsx: Persistent Root Layout shared across all pages\nimport Link from 'next/link';\n\nexport default function RootLayout({ children }: { children: React.ReactNode }) {\n  return (\n    <html lang=\"en\">\n      <body>\n        <nav className=\"main-nav\">\n          <Link href=\"/\">Home</Link>\n          <Link href=\"/courses\">Courses</Link>\n          <Link href=\"/dashboard\">Dashboard</Link>\n        </nav>\n        <main>{children}</main>\n      </body>\n    </html>\n  );\n}",
              "filename": "app/layout.tsx"
            },
            {
              "type": "keyPoints",
              "points": [
                "A page.tsx file makes a folder publicly accessible as a URL route.",
                "layout.tsx wraps child pages and preserves state across route navigations without re-rendering.",
                "Always use <Link href=\"...\"> for fast client-side SPA navigation without full browser refreshes."
              ]
            },
            {
              "type": "quiz",
              "question": "In the Next.js App Router, which specific filename creates a publicly accessible web page for a directory segment?",
              "options": [
                "index.html",
                "page.tsx",
                "route.js",
                "view.tsx"
              ],
              "answer": 1,
              "explanation": "The page.tsx file is the special Next.js file required to make a route segment publicly accessible."
            }
          ]
        },
        {
          "slug": "server-components-vs-client-components",
          "title": "Server Components vs Client Components (\"use client\")",
          "description": "Understand the React Server Component (RSC) mental model: when to use Server Components (by default) vs Client Components for interactivity.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "In Next.js App Router, all components inside the `app/` folder are React Server Components (RSC) by default. Server Components run ONLY on the server and send 0 bytes of JavaScript to the client. When you need browser interactivity (useState, useEffect, onClick), you add the `\"use client\"` directive at the top of the file."
            },
            {
              "type": "definition",
              "term": "\"use client\" Directive",
              "plain": "A boundary marker placed at the very top of a file that declares the component and its imported children as Client Components requiring browser interactivity.",
              "formal": "React Client Component Module Boundary Trigger"
            },
            {
              "type": "code",
              "language": "tsx",
              "code": "// app/components/LikeButton.tsx\n'use client'; // Required for browser interactivity (state & event handlers)\n\nimport { useState } from 'react';\n\nexport function LikeButton() {\n  const [likes, setLikes] = useState(0);\n  return (\n    <button onClick={() => setLikes(l => l + 1)}>\n      ❤️ Likes: {likes}\n    </button>\n  );\n}",
              "filename": "LikeButton.tsx"
            },
            {
              "type": "keyPoints",
              "points": [
                "Use Server Components by default for data fetching, backend secrets, and static content.",
                "Use Client Components (\"use client\") for useState, useEffect, window events, and user clicks.",
                "You can pass Server Components as children into Client Components."
              ]
            },
            {
              "type": "quiz",
              "question": "When is adding the \"use client\" directive strictly required at the top of a Next.js component file?",
              "options": [
                "When connecting to a SQL database on the server.",
                "When writing CSS class names in JSX.",
                "Whenever the component uses React state (useState), lifecycle hooks (useEffect), or browser event handlers (onClick).",
                "In every single file across the entire project."
              ],
              "answer": 2,
              "explanation": "\"use client\" marks the boundary where React needs to hydrate interactivity, state, and browser DOM event handlers."
            }
          ]
        },
        {
          "slug": "server-data-fetching-and-caching",
          "title": "Server Data Fetching & Caching Strategies",
          "description": "Fetch data directly inside async Server Components with async/await, query databases securely, and configure fetch caching and revalidation.",
          "duration": 30,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Because Server Components execute exclusively on the server, you can turn component functions directly into `async` functions and `await` database queries or fetch calls directly without useEffect or loading spinners."
            },
            {
              "type": "code",
              "language": "tsx",
              "code": "// app/courses/page.tsx: Async Server Component\ninterface Course {\n  id: string;\n  title: string;\n  lessons: number;\n}\n\nexport default async function CoursesPage() {\n  // Fetch data directly on the server (automatically deduplicated)\n  const res = await fetch('https://api.example.com/courses', {\n    next: { revalidate: 3600 } // Revalidate cache every 1 hour (ISR)\n  });\n  const courses: Course[] = await res.json();\n\n  return (\n    <div>\n      <h1>Mastery Courses</h1>\n      <ul>\n        {courses.map(c => (\n          <li key={c.id}>{c.title} — {c.lessons} Lessons</li>\n        ))}\n      </ul>\n    </div>\n  );\n}",
              "filename": "app/courses/page.tsx"
            },
            {
              "type": "keyPoints",
              "points": [
                "Server Components can be directly declared as async functions.",
                "Database queries and private API keys are completely secure because code never runs in the browser.",
                "next: { revalidate: N } enables Incremental Static Regeneration (ISR) with time-based caching."
              ]
            },
            {
              "type": "quiz",
              "question": "Why can database connection credentials and private API keys be safely used inside Next.js Server Components?",
              "options": [
                "Because Next.js encrypts all client-side code with SHA-256.",
                "Because browsers automatically block users from opening DevTools.",
                "Because Next.js deletes database passwords after running.",
                "Because Server Components execute exclusively on the server and their source code is never transmitted to the client browser."
              ],
              "answer": 3,
              "explanation": "Server Components run strictly in the backend node/server environment, so credentials and private keys never leak to client bundles."
            }
          ]
        }
      ]
    },
    {
      "title": "Chapter 2: Mutations, Streaming & Production Mastery",
      "lessons": [
        {
          "slug": "loading-ui-and-error-boundaries",
          "title": "Instant Loading UI, Suspense & Error Boundaries",
          "description": "Provide instant page transitions with loading.tsx, stream data with React Suspense, and catch runtime exceptions gracefully with error.tsx.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Next.js provides special convention files for handling loading states and errors automatically: `loading.tsx` wraps pages in a React Suspense fallback, and `error.tsx` catches exceptions."
            },
            {
              "type": "code",
              "language": "tsx",
              "code": "// app/dashboard/loading.tsx: Automatically displayed while dashboard page fetches data\nexport default function DashboardLoading() {\n  return (\n    <div className=\"skeleton-container\">\n      <div className=\"skeleton-title\" />\n      <div className=\"skeleton-grid\" />\n    </div>\n  );\n}\n\n// app/dashboard/error.tsx: Automatically catches runtime exceptions\n'use client';\nexport default function DashboardError({ error, reset }: { error: Error; reset: () => void }) {\n  return (\n    <div className=\"error-alert\">\n      <h3>Something went wrong!</h3>\n      <p>{error.message}</p>\n      <button onClick={() => reset()}>Try Again</button>\n    </div>\n  );\n}",
              "filename": "app/dashboard/loading.tsx"
            },
            {
              "type": "keyPoints",
              "points": [
                "loading.tsx shows an instant skeleton UI while server data is loading.",
                "error.tsx must always be a Client Component (\"use client\").",
                "React Suspense allows streaming slow components without blocking fast ones."
              ]
            },
            {
              "type": "quiz",
              "question": "Which file in the Next.js App Router automatically renders an instant fallback UI while a route server component is fetching data?",
              "options": [
                "loading.tsx",
                "page.tsx",
                "wait.tsx",
                "fallback.html"
              ],
              "answer": 0,
              "explanation": "Next.js automatically wraps page.tsx in a React Suspense boundary using loading.tsx as the fallback."
            }
          ]
        },
        {
          "slug": "server-actions-and-form-mutations",
          "title": "Server Actions: Zero-API Data Mutations",
          "description": "Mutate server data directly from HTML forms using Server Actions (\"use server\"), form actions, and revalidatePath().",
          "duration": 30,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Server Actions allow you to define asynchronous server functions that can be called directly from client forms without writing separate API route handlers or managing manual fetch POST calls."
            },
            {
              "type": "code",
              "language": "tsx",
              "code": "// app/actions.ts\n'use server';\nimport { revalidatePath } from 'next/cache';\n\nexport async function createBookmark(formData: FormData) {\n  const courseSlug = formData.get('courseSlug') as string;\n  \n  // Save bookmark to database on server...\n  console.log(\"Saving bookmark on server for:\", courseSlug);\n  \n  // Invalidate cache and update the UI automatically\n  revalidatePath('/courses');\n}",
              "filename": "app/actions.ts"
            },
            {
              "type": "keyPoints",
              "points": [
                "\"use server\" at the top of a file or function marks it as a Server Action.",
                "Server Actions work with native HTML <form action={myAction}>.",
                "revalidatePath() purges the cache for a given route and re-renders server components."
              ]
            },
            {
              "type": "exercise",
              "prompt": "Write a Next.js Server Action in app/actions.ts named addBookmark that extracts a courseSlug from FormData and calls revalidatePath(\"/courses\").",
              "hint": "Add \"use server\" at the top of the file and import { revalidatePath } from \"next/cache\".",
              "solution": "// app/actions.ts\n\"use server\";\nimport { revalidatePath } from \"next/cache\";\n\nexport async function addBookmark(formData: FormData) {\n  const courseSlug = formData.get(\"courseSlug\") as string;\n  console.log(\"Bookmarked:\", courseSlug);\n  revalidatePath(\"/courses\");\n}",
              "language": "typescript"
            },
            {
              "type": "quiz",
              "question": "What directive is written at the top of an action file or function to declare a Next.js Server Action?",
              "options": [
                "\"use client\"",
                "\"use server\"",
                "\"use action\"",
                "\"server only\""
              ],
              "answer": 1,
              "explanation": "\"use server\" instructs Next.js to expose the async function as a callable server RPC endpoint."
            }
          ]
        },
        {
          "slug": "dynamic-routes-and-route-handlers",
          "title": "Dynamic Routes ([slug]) & REST Route Handlers (route.ts)",
          "description": "Create dynamic parameter routes (app/courses/[slug]/page.tsx) and build custom RESTful backend endpoints with route.ts.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Dynamic routes use square brackets like `[slug]` to capture URL parameters. For building custom backend REST APIs (e.g. for mobile apps or webhooks), Next.js provides `route.ts` handlers."
            },
            {
              "type": "code",
              "language": "tsx",
              "code": "// app/api/status/route.ts: Custom Backend API Route Handler\nimport { NextResponse } from 'next/server';\n\nexport async function GET() {\n  return NextResponse.json({\n    platform: 'Lumen',\n    status: 'operational',\n    timestamp: new Date().toISOString(),\n  });\n}\n\nexport async function POST(request: Request) {\n  const payload = await request.json();\n  return NextResponse.json({ received: true, data: payload }, { status: 201 });\n}",
              "filename": "app/api/status/route.ts"
            },
            {
              "type": "keyPoints",
              "points": [
                "Dynamic routes use [paramName] folders, accessed via params prop in page.tsx.",
                "route.ts files export standard HTTP methods (GET, POST, PUT, DELETE).",
                "Use NextResponse.json() to return structured JSON payloads with HTTP status codes."
              ]
            },
            {
              "type": "quiz",
              "question": "In the Next.js App Router, what special filename is used to build custom backend REST API endpoints?",
              "options": [
                "api.ts",
                "endpoint.ts",
                "route.ts (or route.js)",
                "server.ts"
              ],
              "answer": 2,
              "explanation": "route.ts files define custom request handlers for a given route segment."
            }
          ]
        },
        {
          "slug": "metadata-images-and-seo-optimization",
          "title": "SEO Metadata, Image Optimization & Deployment",
          "description": "Configure static and dynamic Open Graph SEO metadata, optimize images with next/image, and prepare for production deployment.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Next.js has first-class built-in SEO tools. The Metadata API generates perfect social share preview cards, and `<Image>` automatically optimizes, converts (to WebP/AVIF), and resizes images."
            },
            {
              "type": "code",
              "language": "tsx",
              "code": "// app/courses/[slug]/page.tsx: Dynamic SEO Metadata\nimport type { Metadata } from 'next';\n\nexport async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {\n  return {\n    title: `${params.slug.toUpperCase()} Mastery | Lumen`,\n    description: `Master ${params.slug} from first principles with zero prior experience.`,\n    openGraph: {\n      images: ['/og-image.png'],\n    },\n  };\n}",
              "filename": "metadata.tsx"
            },
            {
              "type": "keyPoints",
              "points": [
                "generateMetadata dynamically creates page titles, descriptions, and social share previews.",
                "next/image automatically prevents layout shifts (CLS) and converts images to WebP/AVIF.",
                "Next.js deploys seamlessly to Vercel, Node.js servers, or Docker containers."
              ]
            },
            {
              "type": "quiz",
              "question": "Which function is exported from a Next.js page file to compute dynamic SEO title and description tags based on route parameters?",
              "options": [
                "getStaticProps()",
                "initSEO()",
                "setMetadata()",
                "generateMetadata()"
              ],
              "answer": 3,
              "explanation": "generateMetadata dynamically produces Metadata objects containing title, description, OpenGraph, and Twitter tags."
            }
          ]
        }
      ]
    }
  ]
}
