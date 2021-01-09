import React, { ReactElement } from 'react'

import { SearchForm } from '@tooploox-test/components'
import { StyledTopNavbar } from './top-navbar.styled'

export function TopNavbar(): ReactElement {
  return (
    <StyledTopNavbar>
      <SearchForm />
    </StyledTopNavbar>
  )
}
