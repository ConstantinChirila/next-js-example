import React, { ReactElement } from 'react'

import { Description, Heading, Pill } from '@tooploox-test/components'

import { TRepositoryListProperties } from './repository-list.types'
import { StyledRepositoryListWrapper } from './repository-list.styled'

export function RepositoryList({
  fallbackMessage,
  heading,
  list,
}: TRepositoryListProperties): ReactElement {
  return (
    <StyledRepositoryListWrapper>
      <Heading as="h2">{heading}</Heading>
      {!list ||
        (list.length === 0 && <Description>{fallbackMessage}</Description>)}
      {list?.map(({ link, text }) => (
        <Pill as="a" href={link}>
          {text}
        </Pill>
      ))}
    </StyledRepositoryListWrapper>
  )
}
