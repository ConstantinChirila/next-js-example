import React from 'react'
import ReactDOM from 'react-dom'
import App from 'next/app'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '@tooploox-test/theme'
import { hasWindow } from '@tooploox-test/helpers'

const isLocalEnvironment = process.env.NODE_ENV === 'development'

if (isLocalEnvironment && !hasWindow()) {
  const axe = require('react-axe')
  axe(React, ReactDOM, 1000)
}
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
