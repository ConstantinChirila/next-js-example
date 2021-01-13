import React from 'react'

import { VisuallyHidden } from './visually-hidden'
import { renderWithTheme } from '../../../test-helpers'

describe('VisuallyHidden', () => {
  it('should match a snapshot', () => {
    const { container } = renderWithTheme(
      <VisuallyHidden>hello</VisuallyHidden>
    )
    expect(container).toMatchSnapshot()
  })
})
