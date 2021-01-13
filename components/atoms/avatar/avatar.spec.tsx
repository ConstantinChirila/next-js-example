import React from 'react'

import { Avatar } from './avatar'
import { renderWithTheme } from '../../../test-helpers'

describe('Avatar', () => {
  it('should match a snapshot', () => {
    const { container } = renderWithTheme(
      <Avatar alt="hello alt" src="http://placekitten.com/90/90" />
    )
    expect(container).toMatchSnapshot()
  })
})
