import React, { ReactElement, useContext } from 'react'
import { ThemeContext } from 'styled-components'

import { Button, IconMagnifier, InputText } from '@tooploox-test/components'

import { StyledFormWrapper } from './search-form.styled'
import { TSearchFormProperties } from './search-form.types'

export function SearchForm({
  buttonProperties,
  formProperties,
  inputProperties,
}: TSearchFormProperties): ReactElement {
  const { colors } = useContext(ThemeContext)

  return (
    <StyledFormWrapper method="POST" {...formProperties}>
      <InputText
        icon={<IconMagnifier fill={colors.grey5} />}
        placeholder="Search for users"
        {...inputProperties}
      />
      <Button {...buttonProperties}>Search</Button>
    </StyledFormWrapper>
  )
}
