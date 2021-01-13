import { TGetUserDetailsTransformed } from '@tooploox-test/services'

import { MutationStatus } from 'react-query'

export type TUserDetailsProperties = {
  profile: TGetUserDetailsTransformed | undefined
  status: MutationStatus
}
