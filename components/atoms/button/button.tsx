import React, { ReactElement } from 'react'

import { StyledButton } from './button.styled'
import { TButtonProperties } from './button.types'

function Button({ children, ...properties }: TButtonProperties): ReactElement {
  return <StyledButton {...properties}>{children}</StyledButton>
}

export { Button }
