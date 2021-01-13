import React from 'react'

import { Button } from './Button'
import { renderWithTheme } from '../../../test-helpers'

describe('Button', () => {
  it('should match a snapshot', () => {
    const { container } = renderWithTheme(<Button>hello</Button>)
    expect(container).toMatchSnapshot()
  })
})
