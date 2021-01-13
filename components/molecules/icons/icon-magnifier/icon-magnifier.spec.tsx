import React from 'react'

import { IconMagnifier } from './icon-magnifier'
import { renderWithTheme } from '../../../../test-helpers'

describe('IconMagnifier', () => {
  it('should match a snapshot', () => {
    const { container } = renderWithTheme(<IconMagnifier />)
    expect(container).toMatchSnapshot()
  })
})
