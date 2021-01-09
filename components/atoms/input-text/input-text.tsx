import React, { ReactElement } from 'react'

import {
  StyledIconWrapper,
  StyledInputText,
  StyledInputTextWrapper,
} from './input-text.styled'
import { TInputTextProperties } from './input-text.types'

export function InputText({
  icon,
  ...properties
}: TInputTextProperties): ReactElement {
  return (
    <StyledInputTextWrapper>
      {icon && <StyledIconWrapper>{icon}</StyledIconWrapper>}
      <StyledInputText {...properties} />
    </StyledInputTextWrapper>
  )
}
