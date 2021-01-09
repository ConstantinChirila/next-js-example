import React, { ReactElement } from 'react'

import { StyledButton } from './button.styled'
import { TButtonProperties } from './button.types'

export function Button({ ...properties }: TButtonProperties): ReactElement {
  return <StyledButton {...properties} />
}
