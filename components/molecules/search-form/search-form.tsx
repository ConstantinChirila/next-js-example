import React, { ReactElement } from 'react'

import { Button, IconMagnifier, InputText } from '@tooploox-test/components'

import { StyledFormWrapper } from './search-form.styled'
import { TSearchFormProperties } from './search-form.types'

export function SearchForm({
  ...properties
}: TSearchFormProperties): ReactElement {
  return (
    <StyledFormWrapper method="POST" {...properties}>
      <InputText icon={<IconMagnifier />} placeholder="Search for users" />
      <Button>Search</Button>
    </StyledFormWrapper>
  )
}
