import { TUserContext, TUserProfile } from './user-context.types'

import { createContext } from 'react'

export const InitialUserData: TUserProfile = {
  avatarUrl: '',
  description: '',
  name: '',
  repositories: [],
}

export const UserContext = createContext<TUserContext>({
  status: 'idle',
  setStatus: undefined,
  userData: InitialUserData,
  setUserData: undefined,
})
