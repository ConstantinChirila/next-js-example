import React, { ReactElement } from 'react'

import { Heading } from '@tooploox-test/components'

import { TErrorProperties } from './error.types'
import { StyledError, StyledErrorMessage } from './error.styled'
import { IconNotFound } from 'components/molecules/icons/icon-not-found'

export function Error({ message }: TErrorProperties): ReactElement {
  // a fallback in case if we expect a certain error
  // in our case we know it might 404 when user is not found
  if (message.toLocaleLowerCase() === 'not found') {
    return (
      <StyledError>
        <IconNotFound fill="white" width="50px" height="50px" />
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
