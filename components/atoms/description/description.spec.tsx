import React from 'react'

import { Description } from './Description'
import { renderWithTheme } from '../../../test-helpers'

describe('Description', () => {
  it('should match a snapshot', () => {
    const { container } = renderWithTheme(<Description>hello</Description>)
    expect(container).toMatchSnapshot()
  })
})
