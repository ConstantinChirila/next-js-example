import { useQuery } from 'react-query'

import { getUserDetails } from '@tooploox-test/services'

export function useProfileDetails(name: string) {
  return useQuery(['profile', name], () => getUserDetails(name), {
    enabled: !!name,
  })
}
