import React from 'react'
import { screen } from '@testing-library/react'

import IndexPage from '../pages'
import { renderWithReactQueryContext } from '../test-helpers'

it('should show only the form with a hint by default', async () => {
  renderWithReactQueryContext(<IndexPage />)
  expect(
    screen.getByRole('textbox', {
      name: /search for users/i,
    })
  ).toBeInTheDocument()
  expect(
    screen.getByRole('button', {
      name: /search/i,
    })
  ).toBeInTheDocument()
  expect(
    screen.getByText(/please search for any user e.g. tannerlinsley/i)
  ).toBeInTheDocument()
})
