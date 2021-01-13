import React, { ReactElement } from 'react'

import { StyledVisuallyHidden } from './visually-hidden.styled'
import { TVisuallyHiddenProperties } from './visually-hidden.types'

export function VisuallyHidden(
  properties: TVisuallyHiddenProperties
): ReactElement {
  return <StyledVisuallyHidden {...properties} />
}
