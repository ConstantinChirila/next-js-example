import React, { PropsWithChildren, ReactElement, useState } from 'react'

import { InitialUserData, UserContext } from './user-context'
import {
  TUserProfile,
  TRepositorySingle,
  TStatusTypes,
} from './user-context.types'

export function UserProvider({
  children,
}: PropsWithChildren<{}>): ReactElement {
  const [userProfile, setUserProfile] = useState<TUserProfile>(InitialUserData)
  const [status, setStatus] = useState<TStatusTypes>('idle')
  const [repositories, setRepositories] = useState<TRepositorySingle[]>([])

  return (
    <UserContext.Provider
      value={{
        status,
        setStatus,
        setUserProfile,
        userProfile,
        repositories,
        setRepositories,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
