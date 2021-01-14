import styled from 'styled-components'

import { THeadingProperties } from './heading.types'

export const StyledHeading = styled.h1<THeadingProperties>`
  display: block;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: 1.8rem;
  letter-spacing: 0.015rem;
  line-height: 1.3;

  @media only screen and (min-width: ${({ theme }) => theme.screen.smMin}) {
    font-size: 2.4rem;
  }
`
