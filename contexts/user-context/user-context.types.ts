import { Dispatch, SetStateAction } from 'react'

export type TStatusTypes = 'idle' | 'fetching' | 'success' | 'error'
export type TStatus = Record<'status', TStatusTypes>
export type TErrorMessage = Record<'errorMessage', string>

export type TRepositorySingle = {
  name: string
  url: string
}

export type TUserProfile = {
  avatarUrl: string
  description: string
  name: string
}

export type TUserData = {
  userProfile: TUserProfile
  repositories: TRepositorySingle[]
}

export type TContextSetters = {
  setRepositories: Dispatch<SetStateAction<TRepositorySingle[]>>
  setStatus: Dispatch<SetStateAction<TStatusTypes>>
  setUserProfile: Dispatch<SetStateAction<TUserProfile>>
  setErrorMessage: Dispatch<SetStateAction<string>>
}

export type TUserContext = TStatus & TErrorMessage & TUserData & TContextSetters
