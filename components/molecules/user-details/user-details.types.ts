import { TGetUserDetailsTransformed } from '@tooploox-test/services'

import { MutationStatus } from 'react-query'

export type TUserDetailsProperties = {
  error: unknown
  profile: TGetUserDetailsTransformed | undefined
  status: MutationStatus
}
