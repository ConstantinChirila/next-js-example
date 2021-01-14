import styled from 'styled-components'

import { IconNotFound } from '@tooploox-test/components'

export const StyledError = styled.div`
  background-color: ${({ theme }) => theme.colors.red};
  border-radius: ${({ theme }) => theme.radius.sm};
  box-shadow: ${({ theme }) => theme.boxShadow.regular};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.4rem;
  padding: 1.5rem;

  @media only screen and (min-width: ${({ theme }) => theme.screen.smMin}) {
    font-size: 1.6rem;
    max-width: 100%;
  }
`
export const StyledErrorMessage = styled.p`
  line-height: 1.6;

  @media only screen and (min-width: ${({ theme }) => theme.screen.smMin}) {
    font-size: 1.6rem;
    max-width: 100%;
  }
`

export const StyledNotFoundIcon = styled((properties) => (
  <IconNotFound {...properties} />
))`
  && {
    fill: ${({ theme }) => theme.colors.white};
    height: 7rem;
    width: 7rem;
  }
`
