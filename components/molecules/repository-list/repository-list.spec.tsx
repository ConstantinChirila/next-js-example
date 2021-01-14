import React from 'react'
import { screen } from '@testing-library/react'

import { RepositoryList } from './repository-list'
import { renderWithTheme } from '../../../test-helpers'

describe('RepositoryList', () => {
  describe('statuses', () => {
    it('should NOT render if status is idle', () => {
      const { container } = renderWithTheme(<RepositoryList status="idle" />)
      expect(container.firstChild).toBeNull()
    })

    it('should render spinner if status is loading', () => {
      renderWithTheme(<RepositoryList status="loading" />)
      expect(screen.getByText(/spinner icon/i)).toBeInTheDocument()
    })

    it('should render error if status is error', () => {
      renderWithTheme(<RepositoryList status="error" />)
      expect(screen.getByText(/ah snap!/i)).toBeInTheDocument()
    })
  })

  describe('list', () => {
    it('should render fallback message if there are no repositories', () => {
      renderWithTheme(
        <RepositoryList fallbackMessage="fallback text" status="success" />
      )
      expect(screen.getByText(/fallback text/i)).toBeInTheDocument()
    })

    it('should render list properly', () => {
      renderWithTheme(
        <RepositoryList
          fallbackMessage="fallback text"
          heading="hello"
          list={[{ name: 'John', url: 'http://google.com', stars: 5 }]}
          status="success"
        />
      )

      expect(screen.getByText(/hello/i)).toBeInTheDocument()
      expect(screen.getByText(/john/i)).toBeInTheDocument()
      expect(
        screen.getByRole('link', {
          name: /john/i,
        })
      ).toHaveAttribute('href', 'http://google.com')
    })
  })
})
