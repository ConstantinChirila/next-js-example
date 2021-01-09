import React, { ReactElement } from 'react'

import { TPillProperties } from './pill.types'
import { StyledPill } from './pill.styled'

export function Pill(properties: TPillProperties): ReactElement {
  return <StyledPill {...properties} />
}
