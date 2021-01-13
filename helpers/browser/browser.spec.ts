/**
 * @jest-environment node
 */

//  setting node enviroment is the easiest way to test it :-)

import { hasWindow } from './browser'

describe('HasWindow', () => {
  it('should return FALSE if window is undefined', () => {
    expect(hasWindow()).toBe(false)
  })

  it('should return TRUE if window is defined', () => {
    ;(global as any).window = {}
    expect(hasWindow()).toBe(true)
  })
})
