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
      {list?.map(({ name, url, stars }, index) => (
        <Pill as="a" href={url} key={`repository-list-item-${index}`}>
          {name}
          {stars}
        </Pill>
      ))}
    </StyledRepositoryListWrapper>
  )
}
