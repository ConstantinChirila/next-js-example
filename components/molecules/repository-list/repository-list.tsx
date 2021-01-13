import React, { ReactElement } from 'react'

import {
  Description,
  Heading,
  Pill,
  Spinner,
  StyledRepositoryListWrapper,
  TRepositoryListProperties,
} from '@tooploox-test/components'

export function RepositoryList({
  fallbackMessage,
  heading,
  list,
  status,
}: TRepositoryListProperties): ReactElement | null {
  if (status === 'idle') {
    return null
  }

  if (status === 'loading') {
    return <Spinner />
  }

  if (!list || list.length === 0 || status === 'error') {
    return <Description>{fallbackMessage}</Description>
  }

  return (
    <StyledRepositoryListWrapper>
      <Heading as="h2">{heading}</Heading>
      {list.map(({ name, url, stars }, index) => (
        <Pill as="a" href={url} key={`repository-list-item-${index}`}>
          {name}
          {stars}
        </Pill>
      ))}
    </StyledRepositoryListWrapper>
  )
}
