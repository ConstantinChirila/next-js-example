import styled from 'styled-components'

export const StyledAvatar = styled.img`
  border-radius: ${({ theme }) => theme.radius.lg};
  display: block;
  height: 6.4rem;
  object-fit: cover;
  object-position: center;
  width: 6.4rem;
`
