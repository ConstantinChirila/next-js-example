import React from 'react'
import { screen } from '@testing-library/react'

import { Spinner } from './spinner'
import { renderWithTheme } from '../../../test-helpers'

describe('Spinner', () => {
  it('should render icon spinner with correct colors', () => {
    renderWithTheme(<Spinner />)
    expect(screen.getByText(/spinner icon/i).parentElement).toHaveAttribute(
      'fill',
      '#452CDC'
    )
    expect(screen.getByText(/spinner icon/i).parentElement).toHaveAttribute(
      'stroke',
      '#F0F3F4'
    )
  })
})
