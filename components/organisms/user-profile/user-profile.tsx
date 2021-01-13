import React, { ReactElement } from 'react'

import { UserDetails } from '@tooploox-test/components'

import { useProfileDetails, useRepositories } from '@tooploox-test/hooks'
import { StyledUserProfile } from './user-profile.styled'
import { RepositoryList } from 'components/molecules'
import { TUserProfileProperties } from './user-profile.types'

export function UserProfile({
  profileName,
}: TUserProfileProperties): ReactElement {
  const { data: profile, status: profileStatus } = useProfileDetails(
    profileName
  )
  // we are depending if user exists, then fetch repositories for them
  const { data: repositories, status: repositoriesStatus } = useRepositories(
    profileName,
    !!profile
  )

  return (
    <StyledUserProfile>
      <UserDetails profile={profile} status={profileStatus} />
      <RepositoryList
        fallbackMessage="No repositories found for a given user..."
        heading="Top repositories"
        list={repositories}
        status={repositoriesStatus}
      />
    </StyledUserProfile>
  )
}
