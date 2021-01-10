import { urls } from '@tooploox-test/configuration'

import {
  TGetUserRespositoriesResponse,
  TRepositorySingle,
} from './get-user-repositories.types'

export async function getUserRepositories(
  name: string
): Promise<TRepositorySingle[]> {
  try {
    const response = await fetch(
      `${urls.githubSearchApi}/repositories?q=user:${name}+sort:stars`
    )
    const { items } = (await response.json()) as TGetUserRespositoriesResponse

    return items
  } catch (error) {
    // we can handle it with Sentry, AppInsights, Rollbar etc
    console.error(error)
    return error
  }
}
