import Header from '@/components/Header'
import Main from '@/components/Main'
import siteMetadata from '@/data/siteMetadata'
import {Head, Html, NextScript} from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang={siteMetadata.language} className="scroll-smooth">
        <Header />
        <body className="antialiased text-black bg-white dark:bg-gray-900 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
