import { useQuery } from 'react-query'

import { getUserRepositories } from '@tooploox-test/services'

export function useRepositories(name: string) {
  return useQuery(['name', name], () => getUserRepositories(name))
}
