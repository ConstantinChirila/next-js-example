import { TGetUserDetailsTransformed } from './../../../services/get-user-details/get-user-details.types'

import { MutationStatus } from 'react-query'

export type TUserDetailsProperties = {
  profile: TGetUserDetailsTransformed | undefined
  status: MutationStatus
}
