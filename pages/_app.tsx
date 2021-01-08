import React from 'react'
import App from 'next/app'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '@tooploox-theme'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider theme={defaultTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
