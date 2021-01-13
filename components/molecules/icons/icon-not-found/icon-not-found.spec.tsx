import React from 'react'

import { IconNotFound } from './icon-not-found'
import { renderWithTheme } from '../../../../test-helpers'

describe('IconNotFound', () => {
  it('should match a snapshot', () => {
    const { container } = renderWithTheme(<IconNotFound />)
    expect(container).toMatchSnapshot()
  })
})
