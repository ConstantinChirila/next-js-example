import styled from 'styled-components'

import { StyledHeading } from 'components/atoms/heading/heading.styled'

export const StyledUserDetails = styled.div`
  display: block;
`

export const StyledUserAvatarWrapper = styled.div`
  align-items: flex-end;
  display: flex;
  height: 100%;
  justify-content: flex-start;
  width: 100%;

  > ${StyledHeading} {
    margin: 0 0 0 1.6rem;
    max-width: 10rem;
  }
`
