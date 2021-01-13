import { useQuery } from 'react-query'

import { getUserRepositories } from '@tooploox-test/services'

export function useRepositories(name: string, isFetchEnabled: boolean) {
  return useQuery(
    ['repositories', name && name],
    () => getUserRepositories(name),
    {
      enabled: isFetchEnabled,
    }
  )
}
