import { useId, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CodeBlock } from './CodeBlock'
import { Icon } from '../ui/Icon'

interface ExerciseProps {
  prompt: string
  hint?: string
  solution: string
  language?: string
}

/**
 * A practice task. The solution stays hidden until the reader asks for it —
 * seeing the answer immediately defeats the point of trying.
 */
export function Exercise({ prompt, hint, solution, language }: ExerciseProps) {
  const [showHint, setShowHint] = useState(false)
  const [showSolution, setShowSolution] = useState(false)
  // Unique per instance so multiple exercises on a page keep distinct ids.
  const id = useId()

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4 }}
      className="my-8 overflow-hidden rounded-2xl border-2 border-dashed border-accent/40 bg-accent-soft/20"
    >
      <div className="flex items-center gap-2 border-b border-accent/20 bg-accent-soft/40 px-5 py-3">
        <Icon name="exercise" size={14} className="text-accent" />
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-accent">
          Your turn
        </span>
      </div>

      <div className="p-5">
        <p className="text-[16px] leading-[1.75] text-fg/90">{prompt}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {hint && (
            <button
              onClick={() => setShowHint((v) => !v)}
              aria-expanded={showHint}
              aria-controls={`${id}-hint`}
              className="flex items-center gap-1.5 rounded-lg border border-border-token bg-bg-elev px-3 py-1.5 text-xs font-semibold text-fg-muted transition-colors hover:border-accent hover:text-accent"
            >
              <Icon name="tip" size={12} />
              {showHint ? 'Hide hint' : 'Show hint'}
            </button>
          )}
          <button
            onClick={() => setShowSolution((v) => !v)}
            aria-expanded={showSolution}
            aria-controls={`${id}-solution`}
            className="flex items-center gap-1.5 rounded-lg border border-border-token bg-bg-elev px-3 py-1.5 text-xs font-semibold text-fg-muted transition-colors hover:border-accent hover:text-accent"
          >
            <Icon name={showSolution ? 'eyeSlash' : 'eye'} size={12} />
            {showSolution ? 'Hide solution' : 'Show solution'}
          </button>
        </div>

        <AnimatePresence>
          {showHint && hint && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
              id={`${id}-hint`}
            >
              <p className="mt-3 rounded-xl bg-amber-500/10 p-3.5 text-sm leading-relaxed text-amber-700 dark:text-amber-300">
                <strong className="font-semibold">Hint: </strong>
                {hint}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showSolution && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
              id={`${id}-solution`}
            >
              {language ? (
                <CodeBlock code={solution} language={language} filename="solution" />
              ) : (
                <p className="mt-3 rounded-xl bg-emerald-500/10 p-4 text-sm leading-[1.75] text-emerald-800 dark:text-emerald-200">
                  {solution}
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  )
}
