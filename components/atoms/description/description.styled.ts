import styled from 'styled-components'

import { TDescriptionProperties } from './description.types'

export const StyledDescription = styled.p<TDescriptionProperties>`
  color: ${({ theme }) => theme.colors.grey3};
  display: block;
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.font.weight.regular};
  letter-spacing: 0.04rem;
  line-height: ${19 / 14};
  max-width: 28rem;
  width: 100%;
`
