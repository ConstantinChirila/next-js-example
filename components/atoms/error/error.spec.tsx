import React from 'react'

import { Error } from './Error'
import { renderWithTheme } from '../../../test-helpers'

describe('Error', () => {
  it('should match a snapshot', () => {
    const { container } = renderWithTheme(<Error />)
    expect(container).toMatchSnapshot()
  })

  it('should match a snapshot for 404', () => {
    const { container } = renderWithTheme(<Error isNotFound={true} />)
    expect(container).toMatchSnapshot()
  })
})
