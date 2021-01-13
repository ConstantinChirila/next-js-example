import React, { ReactElement } from 'react'

import { Heading } from '@tooploox-test/components'

import { TErrorProperties } from './error.types'
import {
  StyledError,
  StyledErrorMessage,
  StyledNotFoundIcon,
} from './error.styled'

export function Error({ isNotFound }: TErrorProperties): ReactElement {
  // a fallback in case if we expect a certain error
  // in our case we know it might 404 when user is not found
  if (isNotFound) {
    return (
      <StyledError>
        <StyledNotFoundIcon />
        <Heading as="p">User not found!</Heading>
      </StyledError>
    )
  }

  return (
    <StyledError>
      <Heading as="p">Ah snap!</Heading>
      <StyledErrorMessage>
        Error has ocurred... Do not worry, it is us! <br />
        We will try to get this sorted ASAP. <br />
        Please try again a little bit later!
      </StyledErrorMessage>
    </StyledError>
  )
}
