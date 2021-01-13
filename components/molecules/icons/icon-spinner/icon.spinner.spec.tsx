import React from 'react'

import { IconSpinner } from './icon-spinner'
import { renderWithTheme } from '../../../../test-helpers'

describe('IconSpinner', () => {
  it('should match a snapshot', () => {
    const { container } = renderWithTheme(<IconSpinner />)
    expect(container).toMatchSnapshot()
  })
})
