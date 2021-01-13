/* Getting user's repositories from the github very tricky.
   There are three ways to get those responses, although not one is a perfect solution.
   1. We can go through all of the users repositories and make a list by ourselves in the memory, and then sort by stars.
   It would be extremely unperformant, will take ages and size of the app in memory would go crazy.
   2. We can send a request to the Search API and this enables you to get only three results with sorted results.
   Although, the problem comes if user has got no repositories, it throws an error 422, which by some configuration of error tracking system
   can be treated as unexpected throw and can use the limit rate(some of the services allow you to disable tracking this error), but it would still track this error.
   3. Third solution is used in this project is to use the users API and get first 100 repostories based on the response and sort it on front end.
   The issue comes if some would have 1000 repos, and we're taking only 100 firsts. But this API doesn't through any errors etc.

   Two best solutions:
   - I've looked on the github API graphQL API and this can provide sorting on the middleware level
   - build a custom endpoint do sorting on the backend as first of all, should take less time, second wouldn't take so much memory from the user.
    And as we all know, it's not the best to use front end for heavy data manipulation, as we're leaving them in user's machine hands which can be very slow.
*/

import { authTokensForGithub, urls } from '@tooploox-test/configuration'
import { transformRepositoryResponse } from './get-user-repositories.logic'

import { TRepositoriesTransformed } from './get-user-repositories.types'

export async function getUserRepositories(
  name: string
): Promise<TRepositoriesTransformed[]> {
  const url = new URL(`${urls.githubUsersApi}/${name}/repos?`)
  url.searchParams.append('direction', 'desc')
  url.searchParams.append('per_page', '100')
  url.searchParams.append('sort', 'updated')
  const stringifiedURL = url.toString()

  const response = await fetch(stringifiedURL, {
    headers: authTokensForGithub,
  })

  if (!response.ok) {
    // we can log it here to rollbar, sentry, app-insights etc or with the onError in React-Query hook
    throw response.statusText
  }

  const json = await response.json()
  const transformedRequest = transformRepositoryResponse(json)

  return transformedRequest
}
