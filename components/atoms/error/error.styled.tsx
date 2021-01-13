import styled from 'styled-components'

import { IconNotFound } from '@tooploox-test/components'

export const StyledError = styled.div`
  background-color: ${({ theme }) => theme.colors.red};
  border-radius: ${({ theme }) => theme.radius.sm};
  box-shadow: 0 0.2rem 0.7rem rgba(0, 0, 0, 0.1);
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.4rem;
  padding: 1.5rem;
`
export const StyledErrorMessage = styled.p`
  line-height: 1.6;
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
