import { urls, authTokensForGithub } from '@tooploox-test/configuration'
import { transformUserDetailsResponse } from './get-user-details.logic'
import { TGetUserDetailsTransformed } from './get-user-details.types'

export async function getUserDetails(
  name: string
): Promise<TGetUserDetailsTransformed> {
  const response = await fetch(`${urls.githubUsersApi}/${name}`, {
    headers: authTokensForGithub,
  })
  if (!response.ok) {
    // we can log it here to rollbar, sentry, app-insights etc or with the onError in React-Query hook
    throw response.statusText
  }

  const json = await response.json()
  const transformedResponse = transformUserDetailsResponse(json)

  return transformedResponse
}
