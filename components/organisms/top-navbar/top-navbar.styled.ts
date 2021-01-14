import styled from 'styled-components'

export const StyledTopNavbar = styled.nav`
  box-shadow: ${({ theme }) => theme.boxShadow.regular};
  padding: 2.4rem;
`

export const StyledFormWrapper = styled.form`
  display: grid;
  grid-template-columns: minmax(24.5rem, 2fr) minmax(6.4rem, 15rem);
  grid-gap: 1.6rem;
`
