import React, { ReactElement } from 'react'

import { StyledDescription } from './description.styled'
import { TDescriptionProperties } from './description.types'

export function Description(properties: TDescriptionProperties): ReactElement {
  return <StyledDescription {...properties} />
}
