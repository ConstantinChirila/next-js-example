import React, { ReactElement } from 'react'

import {
  SVGIcon,
  TIconProperties,
  VisuallyHidden,
} from '@tooploox-test/components'

export function IconMagnifier(properties: TIconProperties): ReactElement {
  return (
    <SVGIcon viewBox="0 0 16 16" {...properties} aria-hidden="true">
      <VisuallyHidden as="title">Magnifier icon</VisuallyHidden>
      <path d="M15.5893 14.4127L11.2367 10.06C13.3063 7.33945 12.7786 3.45627 10.058 1.38666C7.33745 -0.682932 3.45427 -0.155226 1.38466 2.56533C-0.684931 5.28588 -0.157224 9.16906 2.56333 11.2387C4.7776 12.9231 7.84371 12.9231 10.058 11.2387L14.4107 15.5913C14.7385 15.9111 15.2615 15.9111 15.5893 15.5913C15.9145 15.2657 15.9145 14.7383 15.5893 14.4127ZM1.83333 6.33333V6.33333C1.83333 3.84805 3.84805 1.83333 6.33333 1.83333C8.81861 1.83333 10.8333 3.84805 10.8333 6.33333C10.8333 8.81861 8.81861 10.8333 6.33333 10.8333C3.84927 10.8304 1.83627 8.81739 1.83333 6.33333L1.83333 6.33333Z" />
    </SVGIcon>
  )
}
