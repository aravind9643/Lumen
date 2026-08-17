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
    slug: 'generative-ai',
    title: 'Generative AI Engineer: Zero to Job-Ready',
    shortTitle: 'Generative AI Engineer',
    description:
      'A complete, job-focused path from zero background to building, evaluating, and shipping real generative AI systems — covering the core mechanisms, hands-on engineering with real APIs, production concerns, and how to actually land the role.',
    category: 'Artificial Intelligence',
    difficulty: 'beginner',
    icon: 'palette',
    tags: ['Generative AI', 'Career', 'Diffusion Models', 'LLMs', 'Fine-Tuning', 'MLOps'],
    color: '#db2777',
    updated: '2026-08-17',
    chapters: [
      {
        title: 'Chapter 1 — Foundations for Absolute Beginners',
        lessons: [
          { slug: 'what-is-ai-and-machine-learning', title: 'What AI and Machine Learning Actually Are', duration: 10 },
          { slug: 'how-models-learn', title: 'How a Model Actually Learns From Data', duration: 11 },
        ],
      },
      {
        title: 'Chapter 2 — How Generative AI Actually Works',
        lessons: [
          { slug: 'discriminative-vs-generative', title: 'Two Kinds of Model: Judging and Making', duration: 11 },
        ],
      },
      {
        title: 'Chapter 3 — The Transformer Architecture',
        lessons: [
          { slug: 'self-attention-and-qkv', title: 'Self-Attention: The Idea Behind Every Modern Model', duration: 14 },
          { slug: 'transformer-block-and-architecture', title: 'Multi-Head Attention, Position, and the Full Transformer Block', duration: 15 },
        ],
      },
      {
        title: 'Chapter 4 — Large Language Models',
        lessons: [
          { slug: 'how-llms-generate-and-are-trained', title: 'How LLMs Generate Text and How They Are Trained', duration: 15 },
          { slug: 'llm-families-and-apis', title: 'Choosing a Model Family and Calling Its API', duration: 10 },
        ],
      },
      {
        title: 'Chapter 5 — Prompt Engineering',
        lessons: [
          { slug: 'prompt-engineering-techniques', title: 'Prompt Engineering: Getting Reliable Results Without Retraining', duration: 14 },
        ],
      },
      {
        title: 'Chapter 6 — Generating Images: Diffusion, GANs, and VAEs',
        lessons: [
          { slug: 'diffusion-models-explained', title: 'Diffusion Models: How Image Generators Actually Create', duration: 12 },
          { slug: 'gans-vaes-and-the-generative-landscape', title: 'GANs, VAEs, and the Wider Generative Landscape', duration: 9 },
        ],
      },
      {
        title: 'Chapter 7 — Engineering With Real APIs',
        lessons: [
          { slug: 'calling-text-generation-apis', title: 'Calling Text Generation APIs Like a Professional', duration: 12 },
          { slug: 'calling-image-generation-apis', title: 'Calling Image Generation APIs and Prompting Them Well', duration: 10 },
          { slug: 'fine-tuning-and-rag', title: 'Fine-Tuning and Retrieval-Augmented Generation', duration: 13 },
        ],
      },
      {
        title: 'Chapter 8 — Evaluation, Safety, and Production',
        lessons: [
          { slug: 'evaluating-generative-systems', title: 'Evaluating a Generative System Properly', duration: 11 },
          { slug: 'safety-bias-and-misuse', title: 'Safety, Bias, and Misuse: A Job-Ready Understanding', duration: 13 },
          { slug: 'cost-latency-and-deployment', title: 'Cost, Latency, and Shipping to Production', duration: 12 },
        ],
      },
      {
        title: 'Chapter 9 — Getting Hired as a Generative AI Engineer',
        lessons: [
          { slug: 'building-a-portfolio-project', title: 'Building a Portfolio Project That Demonstrates Real Skill', duration: 10 },
          { slug: 'interview-preparation', title: 'Preparing for the Generative AI Engineer Interview', duration: 12 },
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
