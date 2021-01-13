import styled from 'styled-components'

import { StyledSVGIcon, TInputTextProperties } from '@tooploox-test/components'

export const StyledInputTextWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  position: relative;
  width: 100%;
`

export const StyledLabel = styled.label`
  color: ${({ theme }) => theme.colors.grey4};
  font-size: 1.4rem;
  left: 1rem;
  letter-spacing: 0.04rem;
  pointer-events: none;
  position: absolute;
  top: 1rem;
  transition: 0.1s ease transform, color, font-size;
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

  ~ ${StyledLabel} {
    left: 3rem;
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
    /* Why have done it?
     This is due to the design of the form element and a lack of time to find any better solution :-(
     Typically, I would just keep it as it has some benefits to give a hint for people what they need to enter in the field.
     I needed to use this trick... Sorry!
     */
    color: transparent;
  }

  &:focus,
  &:not(:placeholder-shown) {
    + ${StyledLabel} {
      color: ${({ theme }) => theme.colors.navy};
      font-size: 1rem;
      transform: translate3d(0, -1rem, 0);
    }
  }
`
