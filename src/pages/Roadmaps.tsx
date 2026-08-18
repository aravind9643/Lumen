import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useProgress } from '../lib/progress'
import { getTutorialMeta } from '../content/manifest'
import { useSEO } from '../lib/seo'
import { cn } from '../lib/cn'
import { Icon } from '../components/ui/Icon'
import type { IconName } from '../lib/icons'

interface RoadmapStep {
  courseSlug: string
  milestoneTitle: string
  focusAreas: string[]
  level: string
}

interface RoadmapTrack {
  id: string
  title: string
  tagline: string
  icon: IconName
  color: string
  roles: string[]
  estimatedWeeks: number
  steps: RoadmapStep[]
}

const ROADMAPS: RoadmapTrack[] = [
  {
    id: 'ai-engineer',
    title: 'AI & Generative AI Engineer',
    tagline: 'From Python & Deep Learning foundations to state-of-the-art LLMs, RAG, AI Agents, and production model serving.',
    icon: 'brain',
    color: '#6366f1',
    roles: ['AI Engineer', 'LLM Engineer', 'Applied Machine Learning Scientist', 'NLP Architect'],
    estimatedWeeks: 30,
    steps: [
      {
        courseSlug: 'python-programming',
        milestoneTitle: 'Step 1: Python & Numerical Foundations',
        focusAreas: ['NumPy Arrays', 'Vectorization', 'Data Structures', 'OOP & AsyncIO'],
        level: 'Beginner',
      },
      {
        courseSlug: 'sql-databases',
        milestoneTitle: 'Step 2: Relational Data & SQL Queries',
        focusAreas: ['Relational Modeling', 'Complex Joins', 'Data Extraction', 'Indexing'],
        level: 'Beginner',
      },
      {
        courseSlug: 'generative-ai',
        milestoneTitle: 'Step 3: Transformers, LLMs, RAG & AI Agents',
        focusAreas: ['Attention Mechanism', 'LoRA Fine-Tuning', 'Vector DBs (Chroma/FAISS)', 'LangGraph & vLLM'],
        level: 'Advanced',
      },
      {
        courseSlug: 'docker-containers',
        milestoneTitle: 'Step 4: Containerization & Model Packaging',
        focusAreas: ['Multi-stage Dockerfiles', 'GPU Container Runtimes', 'Docker Compose'],
        level: 'Intermediate',
      },
      {
        courseSlug: 'aws-cloud',
        milestoneTitle: 'Step 5: Cloud Deployment & MLOps',
        focusAreas: ['EC2 GPU Instances', 'S3 Model Artifacts', 'Serverless APIs'],
        level: 'Intermediate',
      },
    ],
  },
  {
    id: 'frontend-specialist',
    title: 'Modern Frontend Specialist',
    tagline: 'Master modern semantic web standards, advanced CSS styling, reactive component frameworks, and Server-Side Rendering.',
    icon: 'code',
    color: '#38bdf8',
    roles: ['Senior Frontend Engineer', 'UI/UX Developer', 'React / Next.js Specialist', 'Web Performance Architect'],
    estimatedWeeks: 20,
    steps: [
      {
        courseSlug: 'html',
        milestoneTitle: 'Step 1: HTML5 & Accessible Semantics',
        focusAreas: ['DOM Hierarchy', 'Accessible Forms', 'Responsive Picture Tags', 'Semantic Elements'],
        level: 'Beginner',
      },
      {
        courseSlug: 'css',
        milestoneTitle: 'Step 2: CSS3 Layouts & Animations',
        focusAreas: ['Flexbox 1D Alignment', 'CSS Grid 2D Systems', 'GPU Transforms', 'Custom Properties'],
        level: 'Beginner',
      },
      {
        courseSlug: 'tailwindcss',
        milestoneTitle: 'Step 3: Tailwind CSS & Design Tokens',
        focusAreas: ['Utility-First Philosophy', 'Responsive Variants', 'Dark Mode Tokens', 'JIT Compiler'],
        level: 'Beginner',
      },
      {
        courseSlug: 'javascript',
        milestoneTitle: 'Step 4: Modern JavaScript & Asynchronous Event Loop',
        focusAreas: ['Closures & Scopes', 'Prototypes', 'Microtasks & Macrotasks', 'Async/Await & Fetch'],
        level: 'Beginner',
      },
      {
        courseSlug: 'typescript',
        milestoneTitle: 'Step 5: TypeScript & Static Type Systems',
        focusAreas: ['Discriminated Unions', 'Generics', 'Conditional Types', 'Type Narrowing'],
        level: 'Intermediate',
      },
      {
        courseSlug: 'react',
        milestoneTitle: 'Step 6: React Architecture & Custom Hooks',
        focusAreas: ['Virtual DOM Reconciliation', 'Custom Hooks', 'Context API', 'State Management'],
        level: 'Beginner',
      },
      {
        courseSlug: 'nextjs',
        milestoneTitle: 'Step 7: Next.js & React Server Components',
        focusAreas: ['App Router', 'RSC Architecture', 'Server Actions', '4-Tier Caching'],
        level: 'Intermediate',
      },
    ],
  },
  {
    id: 'fullstack-engineer',
    title: 'Full-Stack TypeScript & Cloud Architect',
    tagline: 'End-to-end full-stack systems engineering: Frontend SPAs, high-throughput Node/NestJS APIs, relational databases, and containers.',
    icon: 'code',
    color: '#10b981',
    roles: ['Full-Stack Engineer', 'Node.js Architect', 'TypeScript Specialist', 'Cloud Solutions Developer'],
    estimatedWeeks: 24,
    steps: [
      {
        courseSlug: 'typescript',
        milestoneTitle: 'Step 1: TypeScript Foundations',
        focusAreas: ['Strict Type Systems', 'Generics & Utilities', 'Module Systems'],
        level: 'Intermediate',
      },
      {
        courseSlug: 'react',
        milestoneTitle: 'Step 2: Interactive Frontend with React',
        focusAreas: ['Component Hierarchy', 'State & Effects', 'Performance Optimization'],
        level: 'Beginner',
      },
      {
        courseSlug: 'nodejs',
        milestoneTitle: 'Step 3: Node.js & Express REST APIs',
        focusAreas: ['Event Loop & Streams', 'Express Middleware', 'JWT Security', 'Prisma ORM'],
        level: 'Intermediate',
      },
      {
        courseSlug: 'nestjs',
        milestoneTitle: 'Step 4: Enterprise Backend with NestJS',
        focusAreas: ['Dependency Injection & IoC', 'Pipes & Guards', 'Microservice Transports'],
        level: 'Advanced',
      },
      {
        courseSlug: 'sql-databases',
        milestoneTitle: 'Step 5: Database Design & Query Tuning',
        focusAreas: ['Normalization', 'ACID Transactions', 'Indexing Strategies'],
        level: 'Beginner',
      },
      {
        courseSlug: 'docker-containers',
        milestoneTitle: 'Step 6: Microservices Containerization',
        focusAreas: ['Multi-Stage Builds', 'Docker Compose', 'Container Networking'],
        level: 'Intermediate',
      },
    ],
  },
  {
    id: 'enterprise-backend',
    title: 'Enterprise Backend & Microservices Engineer',
    tagline: 'High-throughput systems architecture with Java Spring Boot, .NET Core, SQL tuning, and distributed cloud computing.',
    icon: 'chart',
    color: '#f97316',
    roles: ['Enterprise Backend Engineer', 'Java/Spring Architect', '.NET Solutions Architect'],
    estimatedWeeks: 24,
    steps: [
      {
        courseSlug: 'java-enterprise',
        milestoneTitle: 'Step 1: Core Java & Spring Boot Microservices',
        focusAreas: ['JVM Memory & GC', 'Spring Data JPA', 'Spring Security JWT', 'RESTful APIs'],
        level: 'Intermediate',
      },
      {
        courseSlug: 'dotnet-core',
        milestoneTitle: 'Step 2: C# & .NET Core Enterprise Systems',
        focusAreas: ['ASP.NET Core', 'Entity Framework Core', 'LINQ', 'Clean Architecture'],
        level: 'Intermediate',
      },
      {
        courseSlug: 'sql-databases',
        milestoneTitle: 'Step 3: Advanced Relational Database Tuning',
        focusAreas: ['Transaction Isolation', 'B-Tree Indexing', 'EXPLAIN ANALYZE Optimization'],
        level: 'Beginner',
      },
      {
        courseSlug: 'docker-containers',
        milestoneTitle: 'Step 4: Container Orchestration & Compose',
        focusAreas: ['Service Discovery', 'Docker Networks', 'Configuration Management'],
        level: 'Intermediate',
      },
      {
        courseSlug: 'azure-cloud',
        milestoneTitle: 'Step 5: Enterprise Cloud on Microsoft Azure',
        focusAreas: ['Entra ID & RBAC', 'Azure VNets', 'App Service', 'Blob Storage'],
        level: 'Intermediate',
      },
    ],
  },
  {
    id: 'mobile-architect',
    title: 'Cross-Platform & Native Mobile Architect',
    tagline: 'Build fluid mobile applications across iOS and Android with Flutter, Native Kotlin, React Native, and Capacitor.',
    icon: 'robot',
    color: '#0284c7',
    roles: ['Mobile Application Developer', 'Flutter Engineer', 'Android Native Specialist', 'React Native Developer'],
    estimatedWeeks: 22,
    steps: [
      {
        courseSlug: 'flutter-dart',
        milestoneTitle: 'Step 1: Cross-Platform Flutter & Dart',
        focusAreas: ['Null Safety', 'Material 3 & Cupertino', 'BLoC State Management', 'Native Device APIs'],
        level: 'Intermediate',
      },
      {
        courseSlug: 'android-kotlin',
        milestoneTitle: 'Step 2: Native Android with Jetpack Compose',
        focusAreas: ['Kotlin Coroutines & Flow', 'Declarative UI', 'Room DB', 'MAD Architecture'],
        level: 'Intermediate',
      },
      {
        courseSlug: 'react-native',
        milestoneTitle: 'Step 3: React Native & Expo Ecosystem',
        focusAreas: ['Flexbox Layouts', 'Reanimated Motion', 'Zustand Global State', 'EAS Builds'],
        level: 'Intermediate',
      },
      {
        courseSlug: 'ionic-capacitor',
        milestoneTitle: 'Step 4: Web-Native Mobile & PWAs',
        focusAreas: ['Web Components', 'Capacitor Hardware Bridges', 'Offline Persistence'],
        level: 'Beginner',
      },
    ],
  },
  {
    id: 'cloud-devops',
    title: 'Multi-Cloud & Platform DevOps Architect',
    tagline: 'Architect and automate enterprise cloud infrastructure across AWS, Microsoft Azure, Google Cloud, and container clusters.',
    icon: 'chart',
    color: '#f59e0b',
    roles: ['DevOps Engineer', 'Cloud Architect', 'Platform Infrastructure Engineer', 'Site Reliability Engineer (SRE)'],
    estimatedWeeks: 24,
    steps: [
      {
        courseSlug: 'docker-containers',
        milestoneTitle: 'Step 1: Containerization & Compose',
        focusAreas: ['Dockerfile Optimization', 'Multi-Container Services', 'Volume Persistence'],
        level: 'Intermediate',
      },
      {
        courseSlug: 'aws-cloud',
        milestoneTitle: 'Step 2: Amazon Web Services (AWS)',
        focusAreas: ['IAM Security & Roles', 'VPC Subnets & Routing', 'EC2 & ALB Scaling', 'S3 & DynamoDB'],
        level: 'Intermediate',
      },
      {
        courseSlug: 'azure-cloud',
        milestoneTitle: 'Step 3: Microsoft Azure Enterprise Infrastructure',
        focusAreas: ['Azure VNets', 'Entra ID Auth', 'App Service & Functions', 'Azure SQL'],
        level: 'Intermediate',
      },
      {
        courseSlug: 'google-cloud',
        milestoneTitle: 'Step 4: Google Cloud Platform (GCP)',
        focusAreas: ['Cloud Run Serverless', 'GKE Containers', 'BigQuery Analytics', 'Cloud IAM'],
        level: 'Intermediate',
      },
    ],
  },
  {
    id: 'quant-finance',
    title: 'Financial Markets & Quantitative Systems',
    tagline: 'Understand market microstructures, balance sheet fundamental analysis, candlestick technical patterns, and algorithmic trading.',
    icon: 'chart',
    color: '#14b8a6',
    roles: ['Quantitative Analyst', 'Algorithmic Trader', 'Financial Systems Engineer', 'Data Analyst'],
    estimatedWeeks: 18,
    steps: [
      {
        courseSlug: 'stock-market',
        milestoneTitle: 'Step 1: Market Mechanics & Fundamental Valuation',
        focusAreas: ['NSE/BSE Ecosystem', 'Valuation Ratios (P/E, ROE)', 'Financial Statements', 'SEBI Regulations'],
        level: 'Beginner',
      },
      {
        courseSlug: 'python-programming',
        milestoneTitle: 'Step 2: Python for Financial Analysis & Algorithmic Trading',
        focusAreas: ['Pandas Time-Series', 'NumPy Vectorization', 'Broker REST APIs', 'Backtesting Strategies'],
        level: 'Intermediate',
      },
      {
        courseSlug: 'sql-databases',
        milestoneTitle: 'Step 3: High-Volume Transactional Data Management',
        focusAreas: ['Time-Series Queries', 'Indexing Strategies', 'ACID Execution'],
        level: 'Beginner',
      },
      {
        courseSlug: 'google-cloud',
        milestoneTitle: 'Step 4: Scalable Cloud Data Pipelines & Analytics',
        focusAreas: ['BigQuery Processing', 'Cloud Functions Event Streaming', 'Data Warehousing'],
        level: 'Intermediate',
      },
    ],
  },
]

export function Roadmaps() {
  const [selectedTrack, setSelectedTrack] = useState<string>('ai-engineer')
  const { tutorialProgress } = useProgress()

  useSEO({
    title: 'Career Learning Roadmaps',
    description: 'Structured step-by-step career learning paths from fundamentals to advanced enterprise systems and AI engineering.',
    path: '/roadmaps',
  })

  const currentTrack = ROADMAPS.find((r) => r.id === selectedTrack) ?? ROADMAPS[0]

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="max-w-3xl"
      >
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-accent">
          Structured Learning Pathways
        </span>
        <h1 className="mt-2 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
          Career Roadmaps
        </h1>
        <p className="mt-3 text-pretty text-lg leading-relaxed text-fg-muted">
          Follow comprehensive, curated course sequences designed to take you from absolute foundations to job-ready production mastery.
        </p>
      </motion.header>

      {/* Track Selector Tabs */}
      <div className="mt-8 flex flex-wrap items-center gap-2 border-b border-border-token pb-4">
        {ROADMAPS.map((track) => {
          const isSelected = track.id === currentTrack.id
          return (
            <button
              key={track.id}
              onClick={() => setSelectedTrack(track.id)}
              className={cn(
                'flex items-center gap-2 rounded-xl border px-3.5 py-2 text-xs font-semibold transition-all',
                isSelected
                  ? 'border-accent bg-accent text-accent-fg shadow-sm'
                  : 'border-border-token bg-bg-elev/40 text-fg-muted hover:border-accent hover:text-accent',
              )}
            >
              <Icon name={track.icon} size={12} />
              <span>{track.title}</span>
            </button>
          )
        })}
      </div>

      {/* Selected Roadmap Overview Card */}
      <div className="mt-8 rounded-3xl border border-border-token bg-bg-elev/50 p-6 shadow-xs backdrop-blur-sm sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-white shadow-sm"
                style={{ background: currentTrack.color }}
              >
                <Icon name={currentTrack.icon} size={18} />
              </span>
              <div>
                <h2 className="text-2xl font-bold text-fg">{currentTrack.title}</h2>
                <p className="text-xs font-medium text-fg-muted">
                  Estimated duration: ~{currentTrack.estimatedWeeks} Weeks of hands-on study
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-fg-muted">{currentTrack.tagline}</p>
          </div>

          {/* Target Job Roles */}
          <div className="rounded-2xl border border-border-token bg-bg p-4 sm:max-w-xs">
            <span className="text-[11px] font-bold uppercase tracking-wider text-fg-muted">
              Target Job Roles
            </span>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {currentTrack.roles.map((r) => (
                <span
                  key={r}
                  className="rounded-md border border-border-token/80 bg-bg-subtle px-2 py-0.5 text-xs text-fg-muted"
                >
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Milestone Steps Timeline */}
        <div className="mt-10 space-y-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-fg-muted">
            Step-by-Step Curriculum Sequence
          </h3>

          <div className="relative space-y-6 pl-6 before:absolute before:bottom-3 before:left-[11px] before:top-3 before:w-[2px] before:bg-border-token">
            {currentTrack.steps.map((step, idx) => {
              const meta = getTutorialMeta(step.courseSlug)
              const prog = tutorialProgress(step.courseSlug)
              const isCompleted = prog.percent === 100
              const isInProgress = prog.percent > 0 && prog.percent < 100

              return (
                <div key={idx} className="relative group">
                  {/* Step Dot */}
                  <span
                    className={cn(
                      'absolute -left-6 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border-2 text-[10px] font-bold transition-all',
                      isCompleted
                        ? 'border-accent bg-accent text-accent-fg'
                        : isInProgress
                          ? 'border-accent bg-bg-elev text-accent'
                          : 'border-border-token bg-bg-elev text-fg-muted',
                    )}
                  >
                    {isCompleted ? <Icon name="check" size={10} /> : idx + 1}
                  </span>

                  {/* Step Card */}
                  <div className="rounded-2xl border border-border-token bg-bg p-5 transition-all hover:border-accent/60 hover:shadow-md">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-base font-bold text-fg">{step.milestoneTitle}</h4>
                          <span className="rounded-md bg-bg-subtle px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-fg-muted">
                            {step.level}
                          </span>
                        </div>
                        {meta && (
                          <p className="mt-0.5 text-xs text-fg-muted">
                            Course:{' '}
                            <span className="font-semibold text-fg">
                              {meta.shortTitle ?? meta.title}
                            </span>{' '}
                            ({meta.chapters.reduce((a, b) => a + b.lessons.length, 0)} Lessons)
                          </p>
                        )}
                      </div>

                      {/* Course Link / Status Action */}
                      <div className="flex items-center gap-3">
                        {prog.percent > 0 && (
                          <div className="text-right">
                            <span className="text-xs font-bold text-accent">{prog.percent}%</span>
                            <div className="h-1.5 w-16 overflow-hidden rounded-full bg-bg-subtle">
                              <div
                                className="h-full bg-accent transition-all"
                                style={{ width: `${prog.percent}%` }}
                              />
                            </div>
                          </div>
                        )}
                        <Link
                          to={`/tutorials/${step.courseSlug}`}
                          className={cn(
                            'flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-semibold transition-all',
                            isCompleted
                              ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                              : 'border-border-token bg-bg-elev text-fg hover:border-accent hover:text-accent',
                          )}
                        >
                          <span>{isCompleted ? 'Review Course' : prog.percent > 0 ? 'Continue' : 'Start Course'}</span>
                          <Icon name="arrowRight" size={10} />
                        </Link>
                      </div>
                    </div>

                    {/* Focus Key Concepts */}
                    <div className="mt-3 flex flex-wrap items-center gap-1.5 border-t border-border-token/50 pt-3">
                      <span className="text-[11px] font-medium text-fg-muted">Core Focus:</span>
                      {step.focusAreas.map((f) => (
                        <span
                          key={f}
                          className="rounded-md bg-bg-subtle px-2 py-0.5 text-[11px] font-medium text-fg"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
