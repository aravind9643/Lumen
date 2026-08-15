import { describe, expect, it, vi } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import { usePersistentState } from '../../src/lib/storage'

describe('usePersistentState', () => {
  it('starts from the initial value when storage is empty', () => {
    const { result } = renderHook(() => usePersistentState('k', { n: 1 }))
    expect(result.current[0]).toEqual({ n: 1 })
  })

  it('reads an existing stored value', () => {
    localStorage.setItem('k', JSON.stringify({ n: 42 }))
    const { result } = renderHook(() => usePersistentState('k', { n: 1 }))
    expect(result.current[0]).toEqual({ n: 42 })
  })

  it('persists updates', () => {
    const { result } = renderHook(() => usePersistentState('k', 0))
    act(() => result.current[1](7))
    expect(JSON.parse(localStorage.getItem('k')!)).toBe(7)
  })

  it('does not write on mount, only on change', () => {
    // Writing the initial value back on every page load is pure overhead.
    const spy = vi.spyOn(Storage.prototype, 'setItem')
    const { result } = renderHook(() => usePersistentState('k', { a: 1 }))
    expect(spy).not.toHaveBeenCalled()
    act(() => result.current[1]({ a: 2 }))
    expect(spy).toHaveBeenCalledOnce()
  })

  it('falls back to the initial value on malformed JSON', () => {
    localStorage.setItem('k', '{not valid json')
    const { result } = renderHook(() => usePersistentState('k', 'fallback'))
    expect(result.current[0]).toBe('fallback')
  })

  it('degrades to in-memory when storage throws', () => {
    // Safari private mode and blocked-cookie setups throw on every access.
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new DOMException('SecurityError')
    })
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new DOMException('SecurityError')
    })

    const { result } = renderHook(() => usePersistentState('k', 'x'))
    expect(result.current[0]).toBe('x')
    expect(() => act(() => result.current[1]('y'))).not.toThrow()
    expect(result.current[0]).toBe('y')
  })

  it('reset clears storage and restores the initial value', () => {
    const { result } = renderHook(() => usePersistentState('k', 'start'))
    act(() => result.current[1]('changed'))
    act(() => result.current[2]())
    expect(result.current[0]).toBe('start')
    expect(localStorage.getItem('k')).toBeNull()
  })

  it('adopts values written by another tab', () => {
    const { result } = renderHook(() => usePersistentState('k', 1))
    act(() => {
      window.dispatchEvent(
        new StorageEvent('storage', { key: 'k', newValue: JSON.stringify(99) }),
      )
    })
    expect(result.current[0]).toBe(99)
  })

  it('propagates a reset from another tab', () => {
    // removeItem fires with newValue === null; ignoring it left tabs diverged.
    const { result } = renderHook(() => usePersistentState('k', 'initial'))
    act(() => result.current[1]('changed'))
    act(() => {
      window.dispatchEvent(new StorageEvent('storage', { key: 'k', newValue: null }))
    })
    expect(result.current[0]).toBe('initial')
  })

  it('ignores storage events for other keys', () => {
    const { result } = renderHook(() => usePersistentState('k', 1))
    act(() => {
      window.dispatchEvent(
        new StorageEvent('storage', { key: 'other', newValue: JSON.stringify(99) }),
      )
    })
    expect(result.current[0]).toBe(1)
  })
})
