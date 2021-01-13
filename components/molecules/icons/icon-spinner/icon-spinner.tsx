import React, { ReactElement } from 'react'
import { SVGIcon, TIconTypes } from '@tooploox-test/components'

export function IconSpinner(properties: TIconTypes): ReactElement {
  return (
    <SVGIcon
      viewBox="0 0 100 100"
      enable-background="new 0 0 0 0"
      {...properties}
    >
      <circle fill="none" strokeWidth="4" cx="50" cy="50" r="44" />
      <circle strokeWidth="3" cx="8" cy="54" r="6">
        <animateTransform
          attributeName="transform"
          dur="2s"
          type="rotate"
          from="0 50 48"
          to="360 50 52"
          repeatCount="indefinite"
        />
      </circle>
    </SVGIcon>
  )
}
