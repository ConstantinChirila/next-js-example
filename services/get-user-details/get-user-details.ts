import { urls } from '@tooploox-test/configuration'
import { TGetUserDetailsResponse } from './get-user-details.types'

export async function getUserDetails(
  name: string
): Promise<TGetUserDetailsResponse> {
  try {
    const response = await fetch(`${urls.githubUserApi}/${name}`)
    const json = await response.json()

    return json
  } catch (error) {
    // we can handle it with Sentry, AppInsights, Rollbar etc
    console.error(error)
    return error
  }
}
