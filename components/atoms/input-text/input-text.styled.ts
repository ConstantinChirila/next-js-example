import styled from 'styled-components'

import { TInputTextProperties } from './input-text.types'

import { StyledSVGIcon } from '../svg-icon/svg-icon.styled'

export const StyledInputTextWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  position: relative;
  width: 100%;
`

export const StyledIconWrapper = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.grey1};
  border-radius: ${({ theme }) => theme.radius.md};
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  display: flex;
  height: 3.6rem;
  justify-content: center;
  padding-left: 0.5rem;
  pointer-events: none;
  width: 2.5rem;

  > ${StyledSVGIcon} {
    transform: scale(0.7);
  }
`

export const StyledInputText = styled.input<TInputTextProperties>`
  background-color: ${({ theme }) => theme.colors.grey1};
  border-radius: ${({ theme }) => theme.radius.md};
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border: none;
  color: ${({ theme }) => theme.colors.grey5};
  font-family: ${({ theme }) => theme.font.family.primary}, sans-serif;
  font-size: 1.4rem;
  height: 3.6rem;
  padding: 1.4rem 1.4rem 1.4rem 0.8rem;
  width: 100%;

  ::placeholder {
    color: ${({ theme }) => theme.colors.grey4};
    letter-spacing: 0.04rem;
  }
`
