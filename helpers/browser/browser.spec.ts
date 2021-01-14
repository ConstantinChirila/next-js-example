import { hasWindow } from './browser'

describe('HasWindow', () => {
  it('should return FALSE if window is undefined', () => {
    delete (global as any).window
    expect(hasWindow()).toBe(false)
  })

  it('should return TRUE if window is defined', () => {
    ;(global as any).window = {}
    expect(hasWindow()).toBe(true)
  })
})
