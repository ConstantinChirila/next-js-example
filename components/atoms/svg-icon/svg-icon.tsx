import React, { ReactElement } from 'react'

import { TSVGIconProperties } from './svg-icon.types'

export function SVGIcon(properties: TSVGIconProperties): ReactElement {
  return <svg xmlns="http://www.w3.org/2000/svg" {...properties} />
}
