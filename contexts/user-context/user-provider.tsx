import React, { PropsWithChildren, ReactElement, useState } from 'react'

import { InitialUserData, UserContext } from './user-context'
import { TUserProfile, TApplicationStatus } from './user-context.types'

export function UserProvider({
  children,
}: PropsWithChildren<{}>): ReactElement {
  const [userData, setUserData] = useState<TUserProfile>(InitialUserData)
  const [status, setStatus] = useState<TApplicationStatus>('idle')

  return (
    <UserContext.Provider value={{ status, setStatus, setUserData, userData }}>
      {children}
    </UserContext.Provider>
  )
}
