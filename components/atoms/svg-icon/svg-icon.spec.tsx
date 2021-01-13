import React from 'react'

import { SVGIcon } from './svg-icon'
import { renderWithTheme } from '../../../test-helpers'

describe('SVGIcon', () => {
  it('should match a snapshot', () => {
    const { container } = renderWithTheme(<SVGIcon>hello</SVGIcon>)
    expect(container).toMatchSnapshot()
  })
})
