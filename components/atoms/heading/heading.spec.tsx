import React from 'react'

import { Heading } from './Heading'
import { renderWithTheme } from '../../../test-helpers'

describe('Heading', () => {
  it('should match a snapshot', () => {
    const { container } = renderWithTheme(<Heading>hello</Heading>)
    expect(container).toMatchSnapshot()
  })
})
