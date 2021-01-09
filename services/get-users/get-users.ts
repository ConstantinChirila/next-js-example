import { urls } from '@tooploox-test/configuration'

// TODO: fix any type
export async function getUsers(name: string): Promise<any> {
  try {
    const response = await fetch(`${urls.githubApi}/${name}`)
    const json = await response.json()

    return json
  } catch (error) {
    console.error(error)
  }
}
