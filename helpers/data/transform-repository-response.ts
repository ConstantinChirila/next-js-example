import {
  TGetUserRespositoriesResponse,
  TRepositorySingle,
} from 'services/get-user-repositories/get-user-repositories.types'

function mapRepositorySingle({
  name,
  // eslint-disable-next-line @typescript-eslint/camelcase
  stargazers_count,
  // eslint-disable-next-line @typescript-eslint/camelcase
  html_url,
}: TRepositorySingle) {
  return {
    name,
    // eslint-disable-next-line @typescript-eslint/camelcase
    stars: stargazers_count,
    // eslint-disable-next-line @typescript-eslint/camelcase
    url: html_url,
  }
}

export function transformRepositoryResponse(
  response: TGetUserRespositoriesResponse
) {
  const { items: itemsArray } = response
  const threeElementsArray = [...itemsArray].slice(0, 3)
  const transformedArray = threeElementsArray.map(mapRepositorySingle)
  return transformedArray
}
