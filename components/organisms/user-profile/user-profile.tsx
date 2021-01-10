import React, { ReactElement } from 'react'

import { RepositoryList, UserDetails } from '@tooploox-test/components'
import { StyledUserProfile } from './user-profile.styled'

export function UserProfile(): ReactElement {
  return (
    <StyledUserProfile>
      <UserDetails
        avatarUrl="http://placekitten.com/64/64"
        description="Software developer, Blockchain @tooploox, fan of hackathons, react Wroclaw meetup organiser, ML enthusiast"
        profileName="Krzysztof Nowakowski"
      />
      <RepositoryList
        fallbackMessage="No repositories found for a given user..."
        heading="Top repositories"
        list={[]}
      />
    </StyledUserProfile>
  )
}
