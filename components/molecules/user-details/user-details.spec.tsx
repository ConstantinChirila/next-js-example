import React from 'react'
import { screen } from '@testing-library/react'

import { UserDetails } from './user-details'
import { renderWithTheme } from '../../../test-helpers'

describe('UserDetails', () => {
  describe('statuses', () => {
    it('should NOT render if status is idle', () => {
      renderWithTheme(<UserDetails status="idle" profile={{}} error="" />)
      expect(
        screen.getByText(/please search for any user e.g. tannerlinsley/i)
      ).toBeInTheDocument()
    })

    it('should render spinner if status is loading', () => {
      renderWithTheme(<UserDetails status="loading" profile={{}} error="" />)
      expect(screen.getByText(/spinner icon/i)).toBeInTheDocument()
    })

    it('should render error if status is error', () => {
      renderWithTheme(<UserDetails profile={{}} error="" status="error" />)
      expect(screen.getByText(/ah snap!/i)).toBeInTheDocument()
    })

    it('should render 404 error if user is not found', () => {
      renderWithTheme(
        <UserDetails profile={{}} error="Not Found" status="error" />
      )
      expect(screen.getByText(/user not found!/i)).toBeInTheDocument()
    })
  })

  describe('profile', () => {
    describe('avatar url', () => {
      it('should NOT render if avatar url is NOT provided', () => {
        renderWithTheme(
          <UserDetails
            profile={{ avatarUrl: null }}
            error=""
            status="success"
          />
        )
        expect(screen.queryByRole('img')).toBeNull()
      })

      it('should render avatar if renders properly', () => {
        renderWithTheme(
          <UserDetails
            profile={{ avatarUrl: 'http://photo-of-kent.com' }}
            error=""
            status="success"
          />
        )
        expect(screen.getByRole('img')).toBeInTheDocument()
      })
    })

    describe('name', () => {
      it('should render fallback message if name is NOT provided', () => {
        renderWithTheme(
          <UserDetails profile={{ name: '' }} error="" status="success" />
        )
        expect(screen.getByText(/name not specified/i)).toBeInTheDocument()
      })

      it('should render if name is provided', () => {
        renderWithTheme(
          <UserDetails profile={{ name: 'yoyo' }} error="" status="success" />
        )
        expect(screen.getByText(/yoyo/i)).toBeInTheDocument()
      })
    })

    describe('description', () => {
      it('should render fallback message if description is NOT provided', () => {
        renderWithTheme(
          <UserDetails
            profile={{ description: '' }}
            error=""
            status="success"
          />
        )
        expect(
          screen.getByText(/description not specified/i)
        ).toBeInTheDocument()
      })

      it('should render if description is provided', () => {
        renderWithTheme(
          <UserDetails
            profile={{ description: 'hello' }}
            error=""
            status="success"
          />
        )
        expect(screen.getByText(/hello/i)).toBeInTheDocument()
      })
    })

    it('should return error message if status is success but profile is undefined', () => {
      renderWithTheme(
        <UserDetails profile={undefined} error="" status="success" />
      )
      expect(screen.getByText(/ah snap!/i)).toBeInTheDocument()
    })
  })
})
