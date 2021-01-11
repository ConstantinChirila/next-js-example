import { authTokensForGithub, urls } from '@tooploox-test/configuration'

import { TGetUserRespositoriesResponse } from './get-user-repositories.types'

export async function getUserRepositories(
  name: string
): Promise<TGetUserRespositoriesResponse | Error> {
  try {
    const queryString = `q=${encodeURIComponent(
      `GitHub Octocat in:user:${name}+sort:stars`
    )}`
    const response = await fetch(
      `${urls.githubSearchApi}/repositories?${queryString}`,
      {
        headers: authTokensForGithub,
      }
    )
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
