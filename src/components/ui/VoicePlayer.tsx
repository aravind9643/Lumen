import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTTS } from '../../lib/tts'
import { cn } from '../../lib/cn'
import { Icon } from './Icon'

/**
 * Floating listen bar. Collapses to a single button when idle and expands to
 * full transport controls while speaking.
 */
export function VoicePlayer({ segments }: { segments: string[] }) {
  const {
    supported, speaking, paused, current, voices, settings, setSettings,
    speak, pause, resume, stop, next, previous, restartCurrent,
  } = useTTS()
  const [showSettings, setShowSettings] = useState(false)
  const [justApplied, setJustApplied] = useState(false)

  // Re-speaks the current segment at the new rate/pitch immediately, rather
  // than making the reader wait for the segment to finish to hear the change.
  // Only while actively speaking — restarting a paused/idle player would
  // surprise the reader by resuming narration they had deliberately stopped.
  const applySetting = (patch: { rate: number } | { pitch: number }) => {
    setSettings(patch)
    if (speaking && !paused) restartCurrent()
    setJustApplied(true)
    window.setTimeout(() => setJustApplied(false), 1200)
  }

  // Stop narration when navigating away from the lesson.
  useEffect(() => () => stop(), [stop])

  if (!supported) return null

  const total = segments.length
  const percent = speaking && total ? ((current + 1) / total) * 100 : 0

  return (
    <div className="no-print pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
      <AnimatePresence mode="wait">
        {!speaking ? (
          <motion.button
            key="idle"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.22 }}
            onClick={() => speak(segments)}
            className="pointer-events-auto flex items-center gap-2.5 rounded-full border border-border-token bg-bg-elev/95 px-5 py-3 text-sm font-medium shadow-xl backdrop-blur-md transition-colors hover:border-accent hover:text-accent"
          >
            <Icon name="headphones" size={15} className="text-accent" />
            Listen to this lesson
          </motion.button>
        ) : (
          <motion.div
            key="playing"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.22 }}
            className="pointer-events-auto w-full max-w-md overflow-hidden rounded-2xl border border-border-token bg-bg-elev/95 shadow-2xl backdrop-blur-md"
          >
            <div className="h-1 bg-bg-subtle">
              <motion.div
                animate={{ width: `${percent}%` }}
                transition={{ duration: 0.3 }}
                className="h-full bg-accent"
              />
            </div>

            <div className="flex items-center gap-1.5 p-3">
              <button onClick={previous} className={btn} aria-label="Previous section" disabled={current <= 0}>
                <Icon name="backward" size={14} />
              </button>

              <button
                onClick={paused ? resume : pause}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-fg shadow-md transition-transform hover:scale-105"
                aria-label={paused ? 'Resume' : 'Pause'}
              >
                <Icon name={paused ? 'play' : 'pause'} size={15} className={paused ? 'ml-0.5' : undefined} />
              </button>

              <button onClick={next} className={btn} aria-label="Next section" disabled={current >= total - 1}>
                <Icon name="forward" size={14} />
              </button>

              <button onClick={stop} className={btn} aria-label="Stop reading">
                <Icon name="stop" size={13} />
              </button>

              <div className="mx-2 min-w-0 flex-1">
                <div className="flex items-center gap-1.5 text-[11px] font-medium text-fg-muted">
                  <Icon name="volume" size={10} className="shrink-0 text-accent" />
                  <span className="truncate">Reading {current + 1} of {total}</span>
                </div>
              </div>

              <button
                onClick={() => setShowSettings((v) => !v)}
                className={cn(btn, showSettings && 'bg-accent-soft text-accent')}
                aria-label="Voice settings"
                aria-expanded={showSettings}
              >
                <Icon name="settings" size={14} />
              </button>
            </div>

            <AnimatePresence>
              {showSettings && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden border-t border-border-token"
                >
                  <div className="space-y-3 p-4">
                    <label className="block">
                      <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-fg-muted">
                        Voice
                      </span>
                      <select
                        value={settings.voiceURI ?? ''}
                        onChange={(e) => setSettings({ voiceURI: e.target.value || null })}
                        className="w-full rounded-lg border border-border-token bg-bg px-3 py-2 text-sm outline-none focus:border-accent"
                      >
                        <option value="">Recommended Natural Voice</option>
                        {[...voices]
                          .sort((a, b) => {
                            const aNat = a.name.includes('Natural') || a.name.includes('Online') || a.name.includes('Neural') || a.name.includes('Google')
                            const bNat = b.name.includes('Natural') || b.name.includes('Online') || b.name.includes('Neural') || b.name.includes('Google')
                            if (aNat && !bNat) return -1
                            if (!aNat && bNat) return 1
                            if (a.lang.startsWith('en') && !b.lang.startsWith('en')) return -1
                            if (!a.lang.startsWith('en') && b.lang.startsWith('en')) return 1
                            return a.name.localeCompare(b.name)
                          })
                          .map((v) => {
                            const isNat = v.name.includes('Natural') || v.name.includes('Online') || v.name.includes('Neural') || v.name.includes('Google')
                            return (
                              <option key={v.voiceURI} value={v.voiceURI}>
                                {isNat ? '✨ ' : ''}{v.name} ({v.lang})
                              </option>
                            )
                          })}
                      </select>
                    </label>

                    <Slider
                      label="Speed"
                      min={0.5} max={2} step={0.1}
                      value={settings.rate}
                      onChange={(rate) => applySetting({ rate })}
                      format={(v) => `${v.toFixed(1)}×`}
                    />
                    <Slider
                      label="Pitch"
                      min={0.5} max={1.5} step={0.1}
                      value={settings.pitch}
                      onChange={(pitch) => applySetting({ pitch })}
                      format={(v) => v.toFixed(1)}
                    />

                    <p
                      role="status"
                      aria-live="polite"
                      className={cn(
                        'text-[11px] leading-relaxed transition-colors',
                        justApplied ? 'text-accent' : 'text-fg-muted',
                      )}
                    >
                      {justApplied
                        ? 'Applied — hear it now in the current section.'
                        : 'Voice changes apply from the next section onward.'}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const btn =
  'flex h-8 w-8 items-center justify-center rounded-lg text-fg-muted transition-colors hover:bg-bg-subtle hover:text-fg disabled:opacity-30 disabled:pointer-events-none'

function Slider({
  label, min, max, step, value, onChange, format,
}: {
  label: string; min: number; max: number; step: number
  value: number; onChange: (n: number) => void; format: (n: number) => string
}) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-fg-muted">
        {label}
        <span className="font-mono normal-case tracking-normal">{format(value)}</span>
      </span>
      <input
        type="range"
        min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-bg-subtle accent-[var(--accent)]"
      />
    </label>
  )
}
