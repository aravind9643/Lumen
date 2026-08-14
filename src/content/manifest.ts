import type { Difficulty } from './types'
import type { IconName } from '../lib/icons'

/**
 * Lightweight course metadata — everything the shell needs, minus the prose.
 *
 * The landing page, course cards, footer, and progress tracking all need to
 * know *what* lessons exist without needing their content. Importing the full
 * registry for that pulled ~213kB of lesson text into the initial bundle.
 *
 * This module must stay free of any import from `./tutorials/*`, or the
 * content is dragged back into the eager graph. `npm run check:manifest`
 * enforces that it matches the real content.
 */

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

export const tutorialsMeta: TutorialMeta[] = [
  {
    slug: 'ai-fundamentals',
    title: 'AI Fundamentals: A Complete Beginner’s Course',
    shortTitle: 'AI Fundamentals',
    description:
      'Start with zero background and finish understanding how artificial intelligence actually works. Every term explained, every idea built from the ground up, nothing assumed.',
    category: 'Artificial Intelligence',
    difficulty: 'beginner',
    icon: 'brain',
    tags: ['AI', 'Machine Learning', 'Concepts', 'Foundations'],
    color: '#4f46e5',
    updated: '2026-08-14',
    chapters: [
      {
        title: 'Chapter 1 — What Is This Thing?',
        lessons: [
          { slug: 'what-is-ai', title: 'What Artificial Intelligence Actually Is', duration: 10 },
          { slug: 'understanding-data', title: 'Data: The Raw Material of Learning', duration: 11 },
        ],
      },
      {
        title: 'Chapter 2 — How Machines Actually Learn',
        lessons: [
          { slug: 'first-model', title: 'Your First Model, Drawn by Hand', duration: 12 },
          { slug: 'how-models-learn', title: 'How Learning Actually Happens: Gradient Descent', duration: 14 },
          { slug: 'overfitting-and-generalisation', title: 'Why a Perfect Score Can Mean Failure', duration: 13 },
        ],
      },
      {
        title: 'Chapter 3 — Neural Networks Demystified',
        lessons: [
          { slug: 'neural-networks', title: 'What a Neural Network Really Is', duration: 15 },
        ],
      },
      {
        title: 'Chapter 4 — Using AI in the Real World',
        lessons: [
          { slug: 'evaluating-models', title: 'Measuring Success Properly', duration: 13 },
          { slug: 'ai-in-practice', title: 'Putting It All Together', duration: 14 },
        ],
      },
    ],
  },
  {
    slug: 'prompt-engineering',
    title: 'Prompt Engineering: From First Message to Expert',
    shortTitle: 'Prompt Engineering',
    description:
      'Learn to get reliable, high-quality results from AI chat tools. No coding needed — just a clear method, taught from your very first prompt through to professional techniques.',
    category: 'Artificial Intelligence',
    difficulty: 'beginner',
    icon: 'sparkles',
    tags: ['Prompting', 'LLM', 'Best Practices', 'Evaluation'],
    color: '#d97706',
    updated: '2026-08-14',
    chapters: [
      {
        title: 'Chapter 1 — Getting Started',
        lessons: [
          { slug: 'what-is-a-prompt', title: 'What a Prompt Is and Why Yours Isn’t Working', duration: 10 },
          { slug: 'anatomy-of-a-prompt', title: 'The Five Parts of a Reliable Prompt', duration: 12 },
        ],
      },
      {
        title: 'Chapter 2 — Core Techniques',
        lessons: [
          { slug: 'examples-and-patterns', title: 'Teaching by Example', duration: 11 },
          { slug: 'reasoning-and-thinking', title: 'Getting the AI to Think Before It Answers', duration: 12 },
        ],
      },
      {
        title: 'Chapter 3 — Getting Reliable Results',
        lessons: [
          { slug: 'hallucination', title: 'When AI Makes Things Up', duration: 12 },
          { slug: 'testing-prompts', title: 'Testing Prompts Properly', duration: 11 },
          { slug: 'putting-it-together', title: 'Your Prompting Playbook', duration: 10 },
        ],
      },
    ],
  },
  {
    slug: 'llm-engineering',
    title: 'How Language Models Work: A Complete Guide',
    shortTitle: 'LLM Engineering',
    description:
      'Open up ChatGPT and see the machinery. Tokens, embeddings, attention, and context windows explained from scratch — then how to build real applications on top of them.',
    category: 'Artificial Intelligence',
    difficulty: 'intermediate',
    icon: 'robot',
    tags: ['LLM', 'Transformers', 'RAG', 'Embeddings', 'Production'],
    color: '#0284c7',
    updated: '2026-08-14',
    chapters: [
      {
        title: 'Chapter 1 — From Text to Numbers',
        lessons: [
          { slug: 'what-is-an-llm', title: 'What a Language Model Actually Does', duration: 11 },
          { slug: 'tokens-and-embeddings', title: 'Tokens: Why AI Can’t Count Letters', duration: 12 },
        ],
      },
      {
        title: 'Chapter 2 — Inside the Transformer',
        lessons: [
          { slug: 'attention-and-context', title: 'Attention: How Models Handle Long Text', duration: 14 },
        ],
      },
      {
        title: 'Chapter 3 — Building Real Applications',
        lessons: [
          { slug: 'rag-systems', title: 'Answering From Your Own Documents', duration: 16 },
          { slug: 'production-considerations', title: 'Running This in Production', duration: 14 },
        ],
      },
    ],
  },
]

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
