import React, { ReactElement } from 'react'

import {
  Avatar,
  Description,
  Heading,
  Spinner,
} from '@tooploox-test/components'

import {
  StyledUserAvatarWrapper,
  StyledUserDetails,
} from './user-details.styled'
import { TUserDetailsProperties } from './user-details.types'

export function UserDetails({
  profile,
  status,
}: TUserDetailsProperties): ReactElement {
  if (status === 'idle') {
    return (
      <Description>Please search for any user e.g. tannerlinsley</Description>
    )
  }

  if (status === 'loading') {
    return <Spinner />
  }

  if (status === 'error' || !profile) {
    return <>error</>
  }

  const { avatarUrl, description, name } = profile
  return (
    <StyledUserDetails>
      <StyledUserAvatarWrapper>
        <Avatar
          alt={`Avatar of ${name || 'user without specified full name'}`}
          src={avatarUrl}
        />
        <Heading>{name || 'Name not specified'}</Heading>
      </StyledUserAvatarWrapper>
      <Description>{description || 'Description not specified'}</Description>
    </StyledUserDetails>
  )
}
