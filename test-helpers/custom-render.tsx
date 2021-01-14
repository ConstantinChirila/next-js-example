import { PropsWithChildren, ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import { render, RenderResult, RenderOptions } from '@testing-library/react'
import { QueryClientProvider, QueryClient } from 'react-query'

import { defaultTheme } from '@tooploox-test/theme'
import { reactQueryDefaults } from '@tooploox-test/configuration'

function DefaultThemeProviderWithReactQuery({
  children,
}: PropsWithChildren<{}>): ReactElement {
  const queryClient = new QueryClient({
    ...reactQueryDefaults,
  })

  return (
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  )
}

function DefaultThemeProvider({
  children,
}: PropsWithChildren<{}>): ReactElement {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
}

function renderWithReactQueryContext(
  ui: ReactElement,
  options?: RenderOptions
): RenderResult {
  return render(ui, { wrapper: DefaultThemeProviderWithReactQuery, ...options })
}

function renderWithTheme(
  ui: ReactElement,
  options?: RenderOptions
): RenderResult {
  return render(ui, { wrapper: DefaultThemeProvider, ...options })
}

export { renderWithTheme, renderWithReactQueryContext }
