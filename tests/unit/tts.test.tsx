import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import type { ReactNode } from 'react'
import { TTSProvider, useTTS } from '../../src/lib/tts'
import { installFakeSpeechSynthesis } from './fake-speech-synthesis'

let speech: ReturnType<typeof installFakeSpeechSynthesis>

beforeEach(() => {
  speech = installFakeSpeechSynthesis()
})

afterEach(() => {
  vi.useRealTimers()
})

const wrapper = ({ children }: { children: ReactNode }) => <TTSProvider>{children}</TTSProvider>
const setup = () => renderHook(() => useTTS(), { wrapper })

describe('basic queue playback', () => {
  it('reports supported when speechSynthesis exists', () => {
    const { result } = setup()
    expect(result.current.supported).toBe(true)
  })

  it('starts speaking the first segment', () => {
    const { result } = setup()
    act(() => result.current.speak(['one', 'two', 'three']))
    expect(result.current.speaking).toBe(true)
    expect(result.current.current).toBe(0)
    expect(speech.spoken[0].text).toBe('one')
  })

  it('advances to the next segment when an utterance ends', () => {
    const { result } = setup()
    act(() => result.current.speak(['one', 'two']))
    act(() => speech.resolveNext())
    expect(result.current.current).toBe(1)
    expect(speech.spoken[1].text).toBe('two')
  })

  it('stops and resets current when the queue is exhausted', () => {
    const { result } = setup()
    act(() => result.current.speak(['only']))
    act(() => speech.resolveNext())
    expect(result.current.speaking).toBe(false)
    expect(result.current.current).toBe(-1)
  })

  it('filters out blank segments before queuing', () => {
    const { result } = setup()
    act(() => result.current.speak(['', '  ', 'real', '']))
    expect(speech.spoken).toHaveLength(1)
    expect(speech.spoken[0].text).toBe('real')
  })

  it('does nothing when handed only blank segments', () => {
    const { result } = setup()
    act(() => result.current.speak(['', '   ']))
    expect(result.current.speaking).toBe(false)
    expect(speech.fake.speak).not.toHaveBeenCalled()
  })

  it('can start partway through via startAt', () => {
    const { result } = setup()
    act(() => result.current.speak(['a', 'b', 'c'], 2))
    expect(result.current.current).toBe(2)
    expect(speech.spoken[0].text).toBe('c')
  })

  it('clamps an out-of-range startAt to the last segment', () => {
    const { result } = setup()
    act(() => result.current.speak(['a', 'b'], 99))
    expect(result.current.current).toBe(1)
  })
})

describe('stop, pause, resume', () => {
  it('stop clears the queue and returns to idle', () => {
    const { result } = setup()
    act(() => result.current.speak(['one', 'two']))
    act(() => result.current.stop())
    expect(result.current.speaking).toBe(false)
    expect(result.current.current).toBe(-1)
    expect(speech.fake.cancel).toHaveBeenCalled()
  })

  it('a stale onend from before stop() does not restart narration', () => {
    // This is the bug the session-token guard exists for: Chrome's cancel()
    // does not synchronously fire onend, so a late callback could previously
    // arrive after stop() and call speakAt(0), replaying the lesson.
    const { result } = setup()
    act(() => result.current.speak(['one', 'two']))
    const inFlight = speech.spoken[0]

    act(() => result.current.stop())
    act(() => speech.resolveStale(inFlight))

    expect(result.current.speaking).toBe(false)
    expect(result.current.current).toBe(-1)
    // Only the original utterance should ever have been spoken.
    expect(speech.spoken).toHaveLength(1)
  })

  it('pause and resume toggle the paused flag', () => {
    const { result } = setup()
    act(() => result.current.speak(['one']))
    act(() => result.current.pause())
    expect(result.current.paused).toBe(true)
    expect(speech.fake.pause).toHaveBeenCalled()

    act(() => result.current.resume())
    expect(result.current.paused).toBe(false)
    expect(speech.fake.resume).toHaveBeenCalled()
  })

  it('pause is a no-op when nothing is speaking', () => {
    const { result } = setup()
    act(() => result.current.pause())
    expect(speech.fake.pause).not.toHaveBeenCalled()
  })
})

describe('next / previous', () => {
  it('next jumps forward without replaying the current segment', () => {
    const { result } = setup()
    act(() => result.current.speak(['a', 'b', 'c']))
    act(() => result.current.next())
    expect(result.current.current).toBe(1)
    expect(speech.spoken.at(-1)!.text).toBe('b')
  })

  it('previous jumps backward', () => {
    const { result } = setup()
    act(() => result.current.speak(['a', 'b', 'c'], 2))
    act(() => result.current.previous())
    expect(result.current.current).toBe(1)
  })

  it('clamps at the ends of the queue', () => {
    const { result } = setup()
    act(() => result.current.speak(['a', 'b']))
    act(() => result.current.previous())
    expect(result.current.current).toBe(0)

    act(() => result.current.next())
    act(() => result.current.next())
    expect(result.current.current).toBe(1)
  })

  it('a jump invalidates the utterance it interrupted', () => {
    // Same race as stop(): jumping away mid-utterance must not let that
    // utterance's eventual onend advance the (now stale) old index.
    const { result } = setup()
    act(() => result.current.speak(['a', 'b', 'c']))
    const interrupted = speech.spoken[0]

    act(() => result.current.next())
    expect(result.current.current).toBe(1)

    act(() => speech.resolveStale(interrupted))
    // Had the stale callback been honoured, this would have jumped to 1
    // (0 + 1) and clobbered the state set by next(). It must not move.
    expect(result.current.current).toBe(1)
  })
})

describe('error handling', () => {
  it('advances past an utterance that errors', () => {
    const { result } = setup()
    act(() => result.current.speak(['one', 'two']))
    act(() => speech.rejectNext('synthesis-failed'))
    expect(result.current.current).toBe(1)
  })

  it('does not advance twice for an interrupted/canceled error', () => {
    // These errors are the expected side effect of our own cancel() calls.
    const { result } = setup()
    act(() => result.current.speak(['one', 'two']))
    act(() => speech.rejectNext('canceled'))
    expect(result.current.current).toBe(0)
  })
})

describe('voice selection', () => {
  it('reads voices at speak time, not from stale captured state', () => {
    // getVoices() is populated asynchronously by the browser; reading it only
    // once at mount would silently ignore the user's saved choice.
    const { result } = setup()
    speech.setVoices([{ voiceURI: 'v1', lang: 'en-GB', name: 'Voice One' }])
    act(() => result.current.setSettings({ voiceURI: 'v1' }))
    act(() => result.current.speak(['hello']))
    expect(speech.spoken[0].voice).toMatchObject({ voiceURI: 'v1' })
    expect(speech.spoken[0].lang).toBe('en-GB')
  })

  it('falls back to the system default when the saved voice is not found', () => {
    const { result } = setup()
    act(() => result.current.setSettings({ voiceURI: 'does-not-exist' }))
    act(() => result.current.speak(['hello']))
    expect(speech.spoken[0].voice).toBeNull()
  })
})

describe('settings', () => {
  it('applies rate/pitch/volume to each utterance', () => {
    const { result } = setup()
    act(() => result.current.setSettings({ rate: 1.5, pitch: 0.8, volume: 0.5 }))
    act(() => result.current.speak(['hi']))
    expect(speech.spoken[0]).toMatchObject({ rate: 1.5, pitch: 0.8, volume: 0.5 })
  })

  it('merges a partial patch rather than replacing the whole settings object', () => {
    const { result } = setup()
    act(() => result.current.setSettings({ rate: 2 }))
    act(() => result.current.setSettings({ pitch: 0.5 }))
    expect(result.current.settings).toMatchObject({ rate: 2, pitch: 0.5, volume: 1 })
  })
})

describe('lifecycle', () => {
  it('cancels speech on unmount', () => {
    const { result, unmount } = setup()
    act(() => result.current.speak(['hi']))
    unmount()
    expect(speech.fake.cancel).toHaveBeenCalled()
  })
})
