import React from 'react'
import { fireEvent, screen } from '@testing-library/react'

import { TopNavbar } from './top-navbar'
import { renderWithTheme } from '../../../test-helpers'

const mockOnSubmit = jest.fn()
const mockOnChange = jest.fn()

describe('TopNavbar', () => {
  it('should render magnifier icon', () => {
    renderWithTheme(
      <TopNavbar onChange={mockOnChange} onSubmit={mockOnSubmit} />
    )
    expect(screen.getByText(/magnifier icon/i)).toBeInTheDocument()
  })

  it('should change if input changes', () => {
    renderWithTheme(
      <TopNavbar onChange={mockOnChange} onSubmit={mockOnSubmit} />
    )
    fireEvent.change(screen.getByLabelText(/search for users/i), {
      target: { value: 'a' },
    })
    expect(mockOnChange).toHaveBeenCalledTimes(1)
    expect(screen.getByLabelText(/search for users/i)).toHaveValue('a')
  })

  it('should send for if user submits', () => {
    renderWithTheme(
      <TopNavbar onChange={mockOnChange} onSubmit={mockOnSubmit} />
    )
    fireEvent.change(screen.getByLabelText(/search for users/i), {
      target: { value: 'a' },
    })

    fireEvent.submit(screen.getByLabelText(/search for users/i))
    expect(mockOnSubmit).toHaveBeenCalledTimes(1)
  })
})
