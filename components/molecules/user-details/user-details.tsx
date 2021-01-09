import React, { ReactElement } from 'react'

import { Avatar, Description, Heading } from '@tooploox-test/components'

import {
  StyledUserAvatarWrapper,
  StyledUserDetails,
} from './user-details.styled'
import { TUserDetailsProperties } from './user-details.types'

export function UserDetails({
  avatarUrl,
  description,
  profileName,
}: TUserDetailsProperties): ReactElement {
  return (
    <StyledUserDetails>
      <StyledUserAvatarWrapper>
        <Avatar src={avatarUrl} alt={`Avatar of ${profileName}`} />
        <Heading>{profileName}</Heading>
      </StyledUserAvatarWrapper>
      <Description>{description}</Description>
    </StyledUserDetails>
  )
}
