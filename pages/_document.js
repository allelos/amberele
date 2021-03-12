import Document, { Html, Head, Main, NextScript } from "next/document"
import GoogleAnalytics from "@components/googleAnalytics"

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="/fonts/Inter.var.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link rel="icon" href="/assets/images/favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <GoogleAnalytics />
        </body>
      </Html>
    )
  }
}

export default MyDocument
