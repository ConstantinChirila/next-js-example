import Document, { DocumentContext } from 'next/document'
import { Fragment } from 'react'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(context: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = context.renderPage

    try {
      context.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (properties) =>
            sheet.collectStyles(<App {...properties} />),
        })

      const initialPropeties = await Document.getInitialProps(context)
      return {
        ...initialPropeties,
        styles: (
          <Fragment>
            {initialPropeties.styles}
            {sheet.getStyleElement()}
          </Fragment>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}
