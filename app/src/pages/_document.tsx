import { createGetInitialProps } from "@mantine/next"
import Document, { Head, Html, Main, NextScript } from "next/document"
import Script from "next/script"

const getInitialProps = createGetInitialProps()

export default class _Document extends Document {
  static getInitialProps = getInitialProps

  render() {
    return (
      <Html data-theme="lofi">
        <Head />
        <body>
          <Main />
          <NextScript />
          <Script
            src="https://unpkg.com/zdog@1/dist/zdog.dist.min.js"
            strategy="beforeInteractive"
          />
        </body>
      </Html>
    )
  }
}
