import React from 'react'

import { InputText } from './input-text'
import { renderWithTheme } from '../../../test-helpers'

describe('InputText', () => {
  it('should match a snapshot', () => {
    const { container } = renderWithTheme(
      <InputText placeholder="yoyo" id="yoyo" />
    )
    expect(container).toMatchSnapshot()
  })
})
