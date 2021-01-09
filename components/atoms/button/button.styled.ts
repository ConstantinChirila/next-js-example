import styled from 'styled-components'

import { TButtonProperties } from './button.types'

export const StyledButton = styled.button<TButtonProperties>`
  background-color: ${({ theme }) => theme.colors.navy};
  border-radius: ${({ theme }) => theme.radius.md};
  border: none;
  color: ${({ theme }) => theme.colors.white};
  display: inline-block;
  font-family: inherit;
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  height: 3.6rem;
  letter-spacing: 0.04rem;
  padding: 1.2rem;
`
