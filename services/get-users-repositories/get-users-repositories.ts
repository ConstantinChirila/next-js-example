import { urls } from '@tooploox-test/configuration'

// TODO: fix any type
export async function getUsersRepositories(name: string): Promise<any> {
  try {
    const response = await fetch(
      `${urls.githubSearchApi}/repositories?q=user:${name}+sort:stars`
    )
    const json = await response.json()

    return json
  } catch (error) {
    console.error(error)
  }
}
