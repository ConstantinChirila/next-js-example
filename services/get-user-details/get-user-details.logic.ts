import {
  TGetUserDetailsResponse,
  TGetUserDetailsTransformed,
} from './get-user-details.types'

export function getBasicUserProfileDetails({
  // eslint-disable-next-line @typescript-eslint/camelcase
  avatar_url,
  bio,
  name,
}: TGetUserDetailsResponse): TGetUserDetailsTransformed {
  return {
    // eslint-disable-next-line @typescript-eslint/camelcase
    avatarUrl: avatar_url,
    description: bio,
    name,
  }
}

export function transformUserDetailsResponse(
  response: TGetUserDetailsResponse
): TGetUserDetailsTransformed {
  const userDetailsTransformed = getBasicUserProfileDetails(response)
  return userDetailsTransformed
}
