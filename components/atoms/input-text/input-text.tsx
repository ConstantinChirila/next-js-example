import React, { ReactElement } from 'react'

import {
  StyledIconWrapper,
  StyledInputText,
  StyledInputTextWrapper,
  StyledLabel,
} from './input-text.styled'
import { TInputTextProperties } from './input-text.types'

export function InputText({
  id,
  placeholder,
  icon,
  ...properties
}: TInputTextProperties): ReactElement {
  return (
    <StyledInputTextWrapper>
      {icon && <StyledIconWrapper>{icon}</StyledIconWrapper>}
      <StyledInputText {...properties} id={id} placeholder={placeholder} />
      <StyledLabel htmlFor={id}>{placeholder}</StyledLabel>
    </StyledInputTextWrapper>
  )
}
