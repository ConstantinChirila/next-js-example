import styled from 'styled-components'

export const StyledPill = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.boxShadow.regular};
  color: ${({ theme }) => theme.colors.blue};
  display: block;
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.font.weight.regular};
  letter-spacing: 0.04rem;
  line-height: 1.1;
  margin-bottom: 1.6rem;
  padding: 1.6rem;
  text-decoration: none;
  width: 100%;
`
