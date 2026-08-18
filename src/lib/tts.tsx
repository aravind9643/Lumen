import {
  createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode,
} from 'react'
import { usePersistentState } from './storage'
import { events } from './analytics'

import { cleanTextForSpeech, findBestVoice } from './speechSanitizer'

export interface TTSSettings {
  rate: number
  pitch: number
  volume: number
  voiceURI: string | null
}

interface TTSContextValue {
  supported: boolean
  speaking: boolean
  paused: boolean
  /** Index into the queue currently being spoken, or -1 when idle. */
  current: number
  voices: SpeechSynthesisVoice[]
  settings: TTSSettings
  setSettings: (patch: Partial<TTSSettings>) => void
  speak: (segments: string[], startAt?: number) => void
  pause: () => void
  resume: () => void
  stop: () => void
  next: () => void
  previous: () => void
  /** Re-speaks the current segment at the latest settings, so a rate/pitch
   *  change is audible immediately rather than waiting for the segment to end. */
  restartCurrent: () => void
}

const TTSContext = createContext<TTSContextValue | null>(null)

const DEFAULTS: TTSSettings = { rate: 1, pitch: 1, volume: 1, voiceURI: null }

/**
 * Speech synthesis queue.
 *
 * The Web Speech API is unreliable when handed one very long utterance —
 * Chrome silently truncates after ~15s and offers no reliable progress signal.
 * We therefore queue one utterance per segment and advance on `onend`, which
 * also gives us free sentence-level highlighting via `current`.
 */
export function TTSProvider({ children }: { children: ReactNode }) {
  const supported = typeof window !== 'undefined' && 'speechSynthesis' in window

  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])
  const [speaking, setSpeaking] = useState(false)
  const [paused, setPaused] = useState(false)
  const [current, setCurrent] = useState(-1)
  const [settings, setSettingsState] = usePersistentState<TTSSettings>('tts:settings', DEFAULTS)

  const queue = useRef<string[]>([])
  const index = useRef(-1)
  const session = useRef(0)
  const settingsRef = useRef(settings)
  settingsRef.current = settings

  useEffect(() => {
    if (!supported) return
    const load = () => {
      const allVoices = window.speechSynthesis.getVoices()
      setVoices(allVoices)
    }
    load() // Firefox populates synchronously
    window.speechSynthesis.addEventListener('voiceschanged', load) // Chrome, async
    return () => window.speechSynthesis.removeEventListener('voiceschanged', load)
  }, [supported])

  const speakAt = useCallback(
    (i: number) => {
      if (i < 0 || i >= queue.current.length) {
        setSpeaking(false)
        setPaused(false)
        setCurrent(-1)
        index.current = -1
        return
      }

      index.current = i
      setCurrent(i)

      const mySession = session.current
      const rawSegment = queue.current[i]
      const cleanSegment = cleanTextForSpeech(rawSegment)
      const u = new SpeechSynthesisUtterance(cleanSegment)
      const s = settingsRef.current
      u.rate = s.rate
      u.pitch = s.pitch
      u.volume = s.volume

      // Read voices at speak time and select the best natural voice
      const allVoices = window.speechSynthesis.getVoices()
      const voice = findBestVoice(allVoices, s.voiceURI)
      if (voice) {
        u.voice = voice
        u.lang = voice.lang
      }

      const advance = () => {
        if (session.current !== mySession) return
        speakAt(i + 1)
      }

      u.onend = advance
      u.onerror = (e) => {
        if (e.error === 'interrupted' || e.error === 'canceled') return
        console.warn('[tts] utterance error:', e.error)
        advance()
      }

      window.speechSynthesis.speak(u)
    },
    [],
  )

  const stop = useCallback(() => {
    if (!supported) return
    session.current++
    window.speechSynthesis.cancel()
    queue.current = []
    index.current = -1
    setSpeaking(false)
    setPaused(false)
    setCurrent(-1)
    events.ttsToggle('stop')
  }, [supported])

  const speak = useCallback(
    (segments: string[], startAt = 0) => {
      if (!supported) return
      session.current++
      window.speechSynthesis.cancel()

      const cleanedSegments = segments
        .map(cleanTextForSpeech)
        .filter((s) => s.trim().length > 0)

      queue.current = cleanedSegments
      if (!queue.current.length) return

      setSpeaking(true)
      setPaused(false)
      events.ttsToggle('play')
      speakAt(Math.min(startAt, queue.current.length - 1))
    },
    [supported, speakAt],
  )

  const pause = useCallback(() => {
    if (!supported || !window.speechSynthesis.speaking) return
    window.speechSynthesis.pause()
    setPaused(true)
    events.ttsToggle('pause')
  }, [supported])

  const resume = useCallback(() => {
    if (!supported) return
    window.speechSynthesis.resume()
    setPaused(false)
    events.ttsToggle('play')
  }, [supported])

  const jump = useCallback(
    (delta: number) => {
      if (!queue.current.length) return
      const target = Math.max(0, Math.min(index.current + delta, queue.current.length - 1))
      session.current++
      window.speechSynthesis.cancel()
      setPaused(false)
      speakAt(target)
    },
    [speakAt],
  )

  const next = useCallback(() => jump(1), [jump])
  const previous = useCallback(() => jump(-1), [jump])

  const restartCurrent = useCallback(() => {
    if (index.current < 0 || !queue.current.length) return
    session.current++
    window.speechSynthesis.cancel()
    speakAt(index.current)
  }, [speakAt])

  const setSettings = useCallback(
    (patch: Partial<TTSSettings>) => setSettingsState((prev) => ({ ...prev, ...patch })),
    [setSettingsState],
  )

  // Chrome stops long-running synthesis after ~15s; this nudge keeps it alive.
  // Gated on actually speaking so the timer does not run for the lifetime of
  // the app, and so it can never un-pause a user who paused deliberately.
  useEffect(() => {
    if (!supported || !speaking || paused) return
    const id = window.setInterval(() => {
      if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
        window.speechSynthesis.pause()
        window.speechSynthesis.resume()
      }
    }, 10_000)
    return () => window.clearInterval(id)
  }, [supported, speaking, paused])

  // Never let audio outlive the page.
  useEffect(() => {
    if (!supported) return
    const cancel = () => window.speechSynthesis.cancel()
    window.addEventListener('beforeunload', cancel)
    return () => {
      window.removeEventListener('beforeunload', cancel)
      window.speechSynthesis.cancel()
    }
  }, [supported])

  const value = useMemo(
    () => ({ supported, speaking, paused, current, voices, settings, setSettings, speak, pause, resume, stop, next, previous, restartCurrent }),
    [supported, speaking, paused, current, voices, settings, setSettings, speak, pause, resume, stop, next, previous, restartCurrent],
  )

  return <TTSContext.Provider value={value}>{children}</TTSContext.Provider>
}

export function useTTS() {
  const ctx = useContext(TTSContext)
  if (!ctx) throw new Error('useTTS must be used within <TTSProvider>')
  return ctx
}
