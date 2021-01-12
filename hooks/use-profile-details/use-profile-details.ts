import { useQuery } from 'react-query'

import { getUserDetails } from '@tooploox-test/services'

export function getProfileDetails(name: string) {
  return useQuery(['name', name], () => getUserDetails(name))
}
