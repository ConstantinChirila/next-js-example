import React, { ReactElement } from 'react'

import { StyledSVGIcon } from './svg-icon.styled'
import { TSVGIconProperties } from './svg-icon.types'

export function SVGIcon(properties: TSVGIconProperties): ReactElement {
  return <StyledSVGIcon xmlns="http://www.w3.org/2000/svg" {...properties} />
}
