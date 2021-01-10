import { urls, authTokensForGithub } from '@tooploox-test/configuration'
import { TGetUserDetailsResponse } from './get-user-details.types'

export async function getUserDetails(
  name: string
): Promise<TGetUserDetailsResponse | Error> {
  try {
    const response = await fetch(`${urls.githubUserApi}/${name}`, {
      headers: authTokensForGithub,
    })
    if (!response.ok) {
      return new Error(response.statusText)
    }

    const json = await response.json()

    return json
  } catch (error) {
    // we can handle it with Sentry, AppInsights, Rollbar etc
    console.error(error)
    return error
  }
}
