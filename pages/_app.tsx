import React from 'react'
import ReactDOM from 'react-dom'
import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import { QueryClientProvider, QueryClient } from 'react-query'

import { defaultTheme, GlobalStyles } from '@tooploox-test/theme'
import { hasWindow } from '@tooploox-test/helpers'

const isLocalEnvironment = process.env.NODE_ENV === 'development'

if (isLocalEnvironment && !hasWindow()) {
  const axe = require('react-axe')
  axe(React, ReactDOM, 1000)
}
export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
          refetchOnMount: false,
          refetchOnWindowFocus: false,
        },
      },
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
