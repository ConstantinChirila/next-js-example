import { TGetUserDetailsResponse } from './../../services/get-user-details/get-user-details.types'
import { TUserProfile } from 'contexts/user-context/user-context.types'

export function getBasicUserProfileDetails({
  // eslint-disable-next-line @typescript-eslint/camelcase
  avatar_url,
  bio,
  name,
}: Pick<TGetUserDetailsResponse, 'avatar_url' | 'bio' | 'name'>): TUserProfile {
  return {
    // eslint-disable-next-line @typescript-eslint/camelcase
    avatarUrl: avatar_url,
    description: bio,
    name,
  }
}

export function transformUserDetailsResponse(
  response: TGetUserDetailsResponse
): TUserProfile {
  const userDetailsTransformed = getBasicUserProfileDetails(response)
  return userDetailsTransformed
}
