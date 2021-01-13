import {
  TRepositoriesTransformed,
  TStarsType,
} from './get-user-repositories.types'
import { TRepositorySingle } from 'services/get-user-repositories/get-user-repositories.types'

function mapRepositorySingle({
  name,
  // eslint-disable-next-line @typescript-eslint/camelcase
  stargazers_count,
  // eslint-disable-next-line @typescript-eslint/camelcase
  html_url,
}: TRepositorySingle): TRepositoriesTransformed {
  return {
    name,
    // eslint-disable-next-line @typescript-eslint/camelcase
    stars: stargazers_count,
    // eslint-disable-next-line @typescript-eslint/camelcase
    url: html_url,
  }
}

function sortByStars(previous: TStarsType, next: TStarsType) {
  return next.stargazers_count - previous.stargazers_count
}

export function transformRepositoryResponse(
  items: TRepositorySingle[]
): TRepositoriesTransformed[] {
  if (items.length === 0) {
    return []
  }

  const sortedArray = [...items].sort(sortByStars)
  const threeElementsArray = sortedArray.slice(0, 3)
  const transformedArray = threeElementsArray.map(mapRepositorySingle)
  return transformedArray
}
