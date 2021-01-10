import { urls } from '@tooploox-test/configuration'

import {
  TGetUserRespositoriesResponse,
  TRepositorySingle,
} from './get-users-repositories.types'

export async function getUsersRepositories(
  name: string
): Promise<TRepositorySingle[]> {
  try {
    const response = await fetch(
      `${urls.githubSearchApi}/repositories?q=user:${name}+sort:stars`
    )
    const { items } = (await response.json()) as TGetUserRespositoriesResponse

    return items
  } catch (error) {
    console.error(error)
    return error
  }
}
