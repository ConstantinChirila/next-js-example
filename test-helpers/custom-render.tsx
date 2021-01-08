import { PropsWithChildren, ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import { render, RenderResult, RenderOptions } from '@testing-library/react'

function DefaultProviders({ children }: PropsWithChildren<{}>): ReactElement {
  return <ThemeProvider theme="default">{children}</ThemeProvider>
}

function customRenderWrapper(
  ui: ReactElement,
  options: RenderOptions
): RenderResult {
  return render(ui, { wrapper: DefaultProviders, ...options })
}

export { customRenderWrapper as customRender }
