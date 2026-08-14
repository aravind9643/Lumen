import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '../../lib/cn'
import { events } from '../../lib/analytics'
import { Icon } from '../ui/Icon'

interface QuizProps {
  question: string
  options: string[]
  answer: number
  explanation?: string
  tutorialSlug: string
  lessonSlug: string
}

export function Quiz({ question, options, answer, explanation, tutorialSlug, lessonSlug }: QuizProps) {
  const [picked, setPicked] = useState<number | null>(null)
  const submitted = picked !== null
  const correct = picked === answer

  const choose = (i: number) => {
    if (submitted) return
    setPicked(i)
    events.quizAnswer(tutorialSlug, lessonSlug, i === answer)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4 }}
      className="my-8 overflow-hidden rounded-2xl border border-border-token bg-bg-elev shadow-sm"
    >
      <div className="flex items-center gap-2 border-b border-border-token bg-accent-soft/40 px-5 py-3">
        <Icon name="quiz" size={15} className="text-accent" />
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          Check your understanding
        </span>
      </div>

      <div className="p-5">
        <p className="mb-4 font-medium leading-relaxed">{question}</p>

        <div role="radiogroup" aria-label={question} className="space-y-2">
          {options.map((option, i) => {
            const isAnswer = i === answer
            const isPicked = i === picked
            const showRight = submitted && isAnswer
            const showWrong = submitted && isPicked && !isAnswer

            return (
              <button
                key={i}
                role="radio"
                aria-checked={isPicked}
                // aria-disabled rather than `disabled`: a real disabled button
                // drops out of the tab order while focused, silently losing the
                // user's place. `choose` already ignores clicks once submitted.
                aria-disabled={submitted}
                onClick={() => choose(i)}
                className={cn(
                  'flex w-full items-start gap-3 rounded-xl border p-3.5 text-left text-sm transition-all',
                  !submitted &&
                    'border-border-token hover:border-accent hover:bg-accent-soft/30 cursor-pointer',
                  submitted && !showRight && !showWrong && 'border-border-token opacity-50',
                  showRight && 'border-emerald-500 bg-emerald-500/10',
                  showWrong && 'border-red-500 bg-red-500/10',
                )}
              >
                <span
                  className={cn(
                    'mt-px flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold',
                    !submitted && 'bg-bg-subtle text-fg-muted',
                    showRight && 'bg-emerald-500 text-white',
                    showWrong && 'bg-red-500 text-white',
                    submitted && !showRight && !showWrong && 'bg-bg-subtle text-fg-muted',
                  )}
                >
                  {showRight ? <Icon name="check" size={11} /> : showWrong ? <Icon name="close" size={11} /> : String.fromCharCode(65 + i)}
                </span>
                <span className="leading-relaxed">
                  {option}
                  {/* Correctness is otherwise signalled only by colour. */}
                  {showRight && <span className="sr-only"> — correct answer</span>}
                  {showWrong && <span className="sr-only"> — your answer, incorrect</span>}
                </span>
              </button>
            )
          })}
        </div>

        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {/* Live region so the outcome is announced — without it, the
                  result is conveyed only by colour and a silent DOM insert. */}
              <div
                role="status"
                aria-live="polite"
                className={cn(
                  'mt-4 rounded-xl p-4 text-sm leading-relaxed',
                  correct ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300' : 'bg-amber-500/10 text-amber-700 dark:text-amber-300',
                )}
              >
                <p className="mb-1 font-semibold">
                  {correct ? 'Correct.' : 'Not quite.'}
                </p>
                {explanation && <p className="opacity-90">{explanation}</p>}
              </div>

              <button
                onClick={() => setPicked(null)}
                className="mt-3 flex items-center gap-1.5 text-xs font-medium text-fg-muted transition-colors hover:text-accent"
              >
                <Icon name="reset" size={11} /> Try again
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
