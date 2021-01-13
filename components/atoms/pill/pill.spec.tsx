import React from 'react'

import { Pill } from './Pill'
import { renderWithTheme } from '../../../test-helpers'

describe('Pill', () => {
  it('should match a snapshot', () => {
    const { container } = renderWithTheme(<Pill>hello</Pill>)
    expect(container).toMatchSnapshot()
  })
})
