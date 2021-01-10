import { Dispatch, SetStateAction } from 'react'

export type TApplicationStatus = 'idle' | 'success' | 'error'

export type TRepositorySingle = {
  name: string
  url: string
}

export type TUserProfile = {
  avatarUrl: string
  description: string
  name: string
  repositories: TRepositorySingle[]
}

export type TUserContext = {
  status: TApplicationStatus
  setStatus: Dispatch<SetStateAction<TApplicationStatus>> | undefined
  userData: TUserProfile
  setUserData: Dispatch<SetStateAction<TUserProfile>> | undefined
}
