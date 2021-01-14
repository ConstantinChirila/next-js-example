import React from 'react'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

import IndexPage from '../pages'
import { renderWithReactQueryContext } from '../test-helpers'
import { urls } from '../configuration'
import { githubResponseWithUser, gitubResponseWithRepositories } from '../mocks'

// default happy path handlers
const handlers = [
  rest.get(
    `${urls.githubUsersApi}/kentcdodds`,
    (_request, response, context) => {
      return response(context.json(githubResponseWithUser))
    }
  ),
  rest.get(
    `${urls.githubUsersApi}/kentcdodds/repos*`,
    (_request, response, context) => {
      return response(context.json(gitubResponseWithRepositories))
    }
  ),
]

// default server with the correct responses
const server = setupServer(...handlers)
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

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

it('should render user profile with repositories when correct response', async () => {
  renderWithReactQueryContext(<IndexPage />)

  userEvent.type(
    screen.getByRole('textbox', {
      name: /search for users/i,
    }),
    'kentcdodds'
  )
  userEvent.click(
    screen.getByRole('button', {
      name: /search/i,
    })
  )

  await waitFor(() =>
    expect(
      screen.getByRole('img', {
        name: /avatar of kent c\. dodds/i,
      })
    ).toBeInTheDocument()
  )

  expect(
    screen.getByRole('heading', {
      name: /kent c\. dodds/i,
    })
  ).toBeInTheDocument()
  expect(screen.getByText(/lovely bio from kentcdodds/i)).toBeInTheDocument()

  await waitFor(() =>
    expect(
      screen.getByRole('heading', {
        name: /top repositories/i,
      })
    ).toBeInTheDocument()
  )

  expect(
    screen.getByRole('link', {
      name: /most-starred-repo/i,
    })
  ).toBeInTheDocument()

  expect(
    screen.getByRole('link', {
      name: /sort-of-accepted-library/i,
    })
  ).toBeInTheDocument()

  expect(
    screen.queryByRole('link', {
      name: /most-hated-library/i,
    })
  ).not.toBeInTheDocument()
})

it('should render 404 message if user is not found', async () => {
  server.use(
    rest.get(
      `${urls.githubUsersApi}/kentcdodds`,
      async (_request, response, context) => {
        return response(
          context.status(404),
          context.json({ message: 'Not Found' })
        )
      }
    )
  )

  renderWithReactQueryContext(<IndexPage />)

  userEvent.type(
    screen.getByRole('textbox', {
      name: /search for users/i,
    }),
    'kentcdodds'
  )

  userEvent.click(
    screen.getByRole('button', {
      name: /search/i,
    })
  )

  await waitFor(() =>
    expect(screen.getByText(/user not found!/i)).toBeInTheDocument()
  )
})

it('should render error message if other error happen', async () => {
  server.use(
    rest.get(
      `${urls.githubUsersApi}/kentcdodds`,
      async (_request, response, context) => {
        return response(
          context.status(500),
          context.json({ message: 'Server error' })
        )
      }
    )
  )

  renderWithReactQueryContext(<IndexPage />)

  userEvent.type(
    screen.getByRole('textbox', {
      name: /search for users/i,
    }),
    'kentcdodds'
  )

  userEvent.click(
    screen.getByRole('button', {
      name: /search/i,
    })
  )

  await waitFor(() => expect(screen.getByText(/ah snap!/i)).toBeInTheDocument())
})
