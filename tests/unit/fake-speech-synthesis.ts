/**
 * A minimal, controllable fake of the Web Speech API.
 *
 * jsdom implements neither `speechSynthesis` nor `SpeechSynthesisUtterance`,
 * and the real API's async, callback-driven shape is exactly what the bugs in
 * `tts.tsx` were about (a stale `onend`/`onerror` arriving after `cancel()`).
 * A synchronous fake that immediately resolves `speak()` would prove nothing
 * about that — this one defers utterance completion to an explicit
 * `resolveNext()` so tests can interleave `cancel()` with in-flight callbacks,
 * the way Chrome actually does.
 */
import { vi } from 'vitest'

export class FakeUtterance {
  text: string
  rate = 1
  pitch = 1
  volume = 1
  voice: SpeechSynthesisVoice | null = null
  lang = ''
  onend: (() => void) | null = null
  onerror: ((e: { error: string }) => void) | null = null

  constructor(text: string) {
    this.text = text
  }
}

export function installFakeSpeechSynthesis() {
  const spoken: FakeUtterance[] = []
  /** Utterances whose completion is awaiting a manual resolveNext() call. */
  const pending: FakeUtterance[] = []
  let voices: SpeechSynthesisVoice[] = []
  let speaking = false
  let paused = false

  const fake = {
    get speaking() {
      return speaking
    },
    get paused() {
      return paused
    },
    getVoices: vi.fn(() => voices),
    speak: vi.fn((u: FakeUtterance) => {
      speaking = true
      paused = false
      spoken.push(u)
      pending.push(u)
    }),
    cancel: vi.fn(() => {
      // Real cancel() does not synchronously fire onend/onerror for the
      // in-flight utterance — that arrives later, asynchronously, which is
      // the exact race the session-token guard in tts.tsx exists for.
      speaking = false
      paused = false
      pending.length = 0
    }),
    pause: vi.fn(() => {
      paused = true
    }),
    resume: vi.fn(() => {
      paused = false
    }),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  }

  Object.defineProperty(window, 'speechSynthesis', {
    configurable: true,
    value: fake,
  })
  Object.defineProperty(window, 'SpeechSynthesisUtterance', {
    configurable: true,
    value: FakeUtterance,
  })

  return {
    fake,
    spoken,
    setVoices: (v: Partial<SpeechSynthesisVoice>[]) => {
      voices = v as SpeechSynthesisVoice[]
    },
    /** Fires onend for the oldest utterance still awaiting completion. */
    resolveNext: () => {
      const u = pending.shift()
      u?.onend?.()
    },
    /** Fires onerror for the oldest utterance still awaiting completion. */
    rejectNext: (error: string) => {
      const u = pending.shift()
      u?.onerror?.({ error })
    },
    /** Simulates a stale callback arriving after cancel() already ran. */
    resolveStale: (u: FakeUtterance) => {
      u.onend?.()
    },
  }
}
