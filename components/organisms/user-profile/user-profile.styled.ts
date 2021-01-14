import styled from 'styled-components'

export const StyledUserProfile = styled.div`
  padding: 2.4rem;

  @media only screen and (min-width: ${({ theme }) => theme.screen.smMin}) {
    max-width: 60rem;
  }
`
