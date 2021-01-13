import { PropsWithChildren, ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import { render, RenderResult, RenderOptions } from '@testing-library/react'

import { defaultTheme } from '@tooploox-test/theme'

function DefaultProviders({ children }: PropsWithChildren<{}>): ReactElement {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
}

function renderWithTheme(
  ui: ReactElement,
  options?: RenderOptions
): RenderResult {
  return render(ui, { wrapper: DefaultProviders, ...options })
}

export { renderWithTheme }
