import React, { ReactElement, useContext } from 'react'
import { ThemeContext } from 'styled-components'

import { StyledSpinnerWrapper } from './spinner.styled'
import { IconSpinner } from '../icons'

export function Spinner(): ReactElement {
  const { colors } = useContext(ThemeContext)

  return (
    <StyledSpinnerWrapper>
      <IconSpinner fill={colors.navy} stroke={colors.grey1} />
    </StyledSpinnerWrapper>
  )
}
