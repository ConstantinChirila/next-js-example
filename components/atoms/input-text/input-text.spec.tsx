import React from 'react'
import { screen } from '@testing-library/react'

import { InputText } from './input-text'
import { IconMagnifier } from '../../molecules/icons'
import { renderWithTheme } from '../../../test-helpers'

describe('InputText', () => {
  it('should match a snapshot', () => {
    const { container } = renderWithTheme(
      <InputText placeholder="yoyo" id="yoyo" />
    )
    expect(container).toMatchSnapshot()
  })

  it('should render icon if passed', () => {
    renderWithTheme(
      <InputText placeholder="yoyo" id="yoyo" icon={<IconMagnifier />} />
    )
    expect(screen.getByText(/magnifier icon/i)).toBeInTheDocument()
  })
})
