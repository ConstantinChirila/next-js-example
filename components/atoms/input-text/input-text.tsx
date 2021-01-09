import React, { ReactElement } from 'react'

import {
  StyledIconWrapper,
  StyledInputText,
  StyledInputTextWrapper,
} from './input-text.styled'
import { TInputText } from './input-text.types'

export function InputText({ icon, ...properties }: TInputText): ReactElement {
  return (
    <StyledInputTextWrapper>
      {icon && <StyledIconWrapper>{icon}</StyledIconWrapper>}
      <StyledInputText {...properties} />
    </StyledInputTextWrapper>
  )
}
