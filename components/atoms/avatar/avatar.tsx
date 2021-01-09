import React, { ReactElement } from 'react'

import { StyledAvatar } from './avatar.styled'
import { TAvatarProperties } from './avatar.types'

export function Avatar(properties: TAvatarProperties): ReactElement {
  return <StyledAvatar {...properties} />
}
