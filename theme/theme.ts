import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html {
    font-family: ${({ theme }) => theme.font.family.primary}, sans-serif;
    font-size: 62.5%;
  }
`

export const defaultTheme = {
  colors: {
    black: '#000000',
    blue: '#2F80ED',
    grey1: '#F0F3F4',
    grey2: '#E5E5E5',
    grey3: '#828282',
    grey4: '#9E9E9E',
    grey5: '#4F4F4F',
    navy: '#452CDC',
    white: '#FFFFFF',
  },
  font: {
    family: {
      primary: 'Roboto',
    },
    weight: {
      regular: 400,
      semiBold: 600,
      bold: 700,
    },
  },
  radius: {
    sm: '0.4rem',
    md: '0.8rem',
    lg: '1.2rem',
    xl: '1.6rem',
  },
}
