import React from 'react'
import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import { QueryClientProvider, QueryClient } from 'react-query'

import { defaultTheme, GlobalStyles } from '@tooploox-test/theme'
import { reactQueryDefaults } from '@tooploox-test/configuration'
import { hasWindow } from '@tooploox-test/helpers'

const isLocalEnvironment = process.env.NODE_ENV === 'development'

if (isLocalEnvironment && hasWindow()) {
  const ReactDOM = require('react-dom')
  const axe = require('@axe-core/react')
  axe(React, ReactDOM, 1000)
}
export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    const queryClient = new QueryClient({
      ...reactQueryDefaults,
    })

    return (
      <ThemeProvider theme={defaultTheme}>
        <QueryClientProvider client={queryClient}>
          <GlobalStyles />
          <Component {...pageProps} />
        </QueryClientProvider>
      </ThemeProvider>
    )
  }
}
