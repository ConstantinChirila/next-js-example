import { TRepositorySingle } from 'services/get-users-repositories/get-users-repositories.types'

export function getFirstThreeElementsFromArray(array: []) {
  return [...array].slice(0, 3)
}

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

export function transformRepositoryResponse(array: TRepositorySingle[]) {
  const threeElementsArray = getFirstThreeElementsFromArray(array)
  const transformedArray = threeElementsArray.map(mapRepositorySingle)
  return transformedArray
}
