import { useQuery } from 'react-query'

import { getUserDetails } from '@tooploox-test/services'

export function useProfileDetails(name: string) {
  return useQuery(['name', name], () => getUserDetails(name))
}
