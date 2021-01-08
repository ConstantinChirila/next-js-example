import React from 'react'
import ReactDOM from 'react-dom'
import App from 'next/app'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '@tooploox-theme'
import { hasWindow } from '@tooploox-helpers'

const isLocalEnv = process.env.NODE_ENV === 'development'

if (isLocalEnv && !hasWindow()) {
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
