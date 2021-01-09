import React, { ReactElement } from 'react'

import { StyledHeading } from './heading.styled'
import { THeadingProperties } from './heading.types'

export function Heading(properties: THeadingProperties): ReactElement {
  return <StyledHeading {...properties} />
}
