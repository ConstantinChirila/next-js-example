import React, { ReactElement } from 'react'

import {
  Avatar,
  Description,
  Error,
  Heading,
  Spinner,
} from '@tooploox-test/components'

import {
  StyledUserAvatarWrapper,
  StyledUserDetails,
} from './user-details.styled'
import { TUserDetailsProperties } from './user-details.types'

export function UserDetails({
  error,
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
    const isNotFound = error === 'Not Found'
    return <Error isNotFound={isNotFound} />
  }

  const { avatarUrl, description, name } = profile
  return (
    <StyledUserDetails>
      <StyledUserAvatarWrapper>
        {avatarUrl && (
          <Avatar
            alt={`Avatar of ${name || 'user without specified full name'}`}
            src={avatarUrl}
          />
        )}
        <Heading>{name || 'Name not specified'}</Heading>
      </StyledUserAvatarWrapper>
      <Description>{description || 'Description not specified'}</Description>
    </StyledUserDetails>
  )
}
