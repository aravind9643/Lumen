import type { Difficulty } from './types'
import type { IconName } from '../lib/icons'

export interface LessonMeta {
  slug: string
  title: string
  duration: number
}

export interface ChapterMeta {
  title: string
  lessons: LessonMeta[]
}

export interface TutorialMeta {
  slug: string
  title: string
  shortTitle?: string
  description: string
  category: string
  difficulty: Difficulty
  icon: IconName
  tags: string[]
  color: string
  updated: string
  chapters: ChapterMeta[]
}

export const generativeAIMeta: TutorialMeta = {
  "slug": "generative-ai",
  "title": "GenAI Engineer: Zero to Job-Ready",
  "shortTitle": "Generative AI",
  "description": "From zero background to job-ready GenAI Engineer: complete hands-on guide to LLM architecture, prompt engineering, RAG, fine-tuning, AI agents, production deployment, and interview preparation.",
  "category": "Artificial Intelligence",
  "difficulty": "beginner",
  "icon": "brain",
  "tags": [
    "AI",
    "LLM",
    "RAG",
    "Agents",
    "Fine-Tuning",
    "PyTorch",
    "vLLM",
    "LangChain"
  ],
  "color": "#6366f1",
  "updated": "2026-08-17",
  "chapters": [
    {
      "title": "Phase 1 — Foundations (Weeks 1–8)",
      "lessons": [
        {
          "slug": "python-and-math-foundations",
          "title": "Module 1: Python & Math Foundations",
          "duration": 25
        },
        {
          "slug": "machine-learning-basics",
          "title": "Module 2: Machine Learning Basics",
          "duration": 20
        },
        {
          "slug": "deep-learning-and-neural-networks",
          "title": "Module 3: Deep Learning & Neural Networks",
          "duration": 25
        },
        {
          "slug": "nlp-fundamentals",
          "title": "Module 4: NLP Fundamentals",
          "duration": 20
        }
      ]
    },
    {
      "title": "Phase 2 — Core GenAI (Weeks 9–20)",
      "lessons": [
        {
          "slug": "transformer-architecture",
          "title": "Module 5: Transformer Architecture",
          "duration": 30
        },
        {
          "slug": "large-language-models",
          "title": "Module 6: Large Language Models (LLMs)",
          "duration": 25
        },
        {
          "slug": "prompt-engineering",
          "title": "Module 7: Prompt Engineering",
          "duration": 20
        },
        {
          "slug": "fine-tuning-llms",
          "title": "Module 8: Fine-Tuning LLMs",
          "duration": 25
        },
        {
          "slug": "rag-and-vector-databases",
          "title": "Module 9: RAG & Vector Databases",
          "duration": 30
        },
        {
          "slug": "langchain-and-frameworks",
          "title": "Module 10: LangChain & Frameworks",
          "duration": 25
        },
        {
          "slug": "ai-agents",
          "title": "Module 11: AI Agents",
          "duration": 25
        }
      ]
    },
    {
      "title": "Phase 3 — Production (Weeks 21–26)",
      "lessons": [
        {
          "slug": "deployment-and-mlops",
          "title": "Module 12: Deployment & MLOps",
          "duration": 25
        },
        {
          "slug": "evaluation-and-testing",
          "title": "Module 16: Evaluation Metrics & Testing",
          "duration": 20
        },
        {
          "slug": "security-and-guardrails",
          "title": "Module 17: Security & Guardrails",
          "duration": 20
        },
        {
          "slug": "model-serving-and-infrastructure",
          "title": "Module 18: Model Serving & Infrastructure",
          "duration": 25
        }
      ]
    },
    {
      "title": "Phase 4 — Career (Weeks 27–30)",
      "lessons": [
        {
          "slug": "advanced-topics",
          "title": "Module 13: Advanced Topics",
          "duration": 25
        },
        {
          "slug": "capstone-projects",
          "title": "Module 14: Capstone Projects",
          "duration": 30
        },
        {
          "slug": "interview-preparation",
          "title": "Module 15: Interview Preparation",
          "duration": 35
        }
      ]
    }
  ]
}

export const tutorialsMeta: TutorialMeta[] = [generativeAIMeta]

export const getTutorialMeta = (slug: string) => tutorialsMeta.find((t) => t.slug === slug)

export const allTags = [...new Set(tutorialsMeta.flatMap((t) => t.tags))].sort()

/** Distinct subjects, in the order they first appear in the registry. */
export const allCategories = [...new Set(tutorialsMeta.map((t) => t.category))]

/**
 * Courses grouped by subject, for browsing. Registry order is preserved
 * within each group so a course sequence stays intact.
 */
export function tutorialsByCategory(list: TutorialMeta[] = tutorialsMeta) {
  const groups = new Map<string, TutorialMeta[]>()
  for (const tutorial of list) {
    const existing = groups.get(tutorial.category)
    if (existing) existing.push(tutorial)
    else groups.set(tutorial.category, [tutorial])
  }
  return [...groups.entries()].map(([category, tutorials]) => ({ category, tutorials }))
}

export const flatLessonsMeta = (tutorial: TutorialMeta) =>
  tutorial.chapters.flatMap((chapter) => chapter.lessons.map((lesson) => ({ chapter, lesson })))

export const lessonCount = (tutorial: TutorialMeta) => flatLessonsMeta(tutorial).length

export const totalDuration = (tutorial: TutorialMeta) =>
  flatLessonsMeta(tutorial).reduce((sum, { lesson }) => sum + lesson.duration, 0)

export const totalLessonCount = tutorialsMeta.reduce((n, t) => n + lessonCount(t), 0)

/**
 * Suggests what to take after finishing `tutorial` — prefers another course in
 * the same category (natural continuation), falling back to any other course
 * if the category only has this one. Registry order decides ties, since it
 * already reflects a deliberate beginner-to-advanced sequence.
 */
export function nextTutorial(tutorial: TutorialMeta): TutorialMeta | undefined {
  const sameCategory = tutorialsMeta.find((t) => t.slug !== tutorial.slug && t.category === tutorial.category)
  return sameCategory ?? tutorialsMeta.find((t) => t.slug !== tutorial.slug)
}
