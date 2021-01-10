import { TUserContext, TUserProfile } from './user-context.types'

import { createContext } from 'react'

export const InitialUserData: TUserProfile = {
  avatarUrl: '',
  description: '',
  name: '',
}

export const UserContext = createContext<TUserContext>({
  errorMessage: '',
  repositories: [],
  setErrorMessage: () => '',
  setRepositories: () => [],
  setStatus: () => 'idle',
  setUserProfile: () => InitialUserData,
  status: 'idle',
  userProfile: InitialUserData,
})
