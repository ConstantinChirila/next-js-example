import styled from 'styled-components'

import { THeadingProperties } from './heading.types'

export const StyledHeading = styled.h1<THeadingProperties>`
  display: block;
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
`
