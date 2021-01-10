import { TUserContext, TUserProfile } from './user-context.types'

import { createContext } from 'react'

export const InitialUserData: TUserProfile = {
  avatarUrl: '',
  description: '',
  name: '',
}

export const UserContext = createContext<TUserContext>({
  status: 'idle',
  repositories: [],
  userProfile: InitialUserData,
  setStatus: () => 'idle',
  setUserProfile: () => InitialUserData,
  setRepositories: () => [],
})
