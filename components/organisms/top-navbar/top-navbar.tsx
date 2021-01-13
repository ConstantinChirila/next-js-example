import React, { ReactElement, useContext } from 'react'

import { Button, IconMagnifier, InputText } from '@tooploox-test/components'
import { StyledFormWrapper, StyledTopNavbar } from './top-navbar.styled'
import { TTopNavbarProperties } from './top-navbar.types'
import { ThemeContext } from 'styled-components'

export function TopNavbar({
  onChange,
  onSubmit,
}: TTopNavbarProperties): ReactElement {
  const { colors } = useContext(ThemeContext)

  return (
    <StyledTopNavbar>
      <StyledFormWrapper method="POST" onSubmit={onSubmit}>
        <InputText
          icon={<IconMagnifier fill={colors.grey5} />}
          id="search-for-user-input"
          onChange={onChange}
          placeholder="Search for users"
        />
        <Button>Search</Button>
      </StyledFormWrapper>
    </StyledTopNavbar>
  )
}
