import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'
// import '@/css/docsearch.css' // Uncomment if using algolia docsearch
// import '@docsearch/css' // Uncomment if using algolia docsearch

import type {AppProps} from 'next/app'
import Head from 'next/head'
import {ThemeProvider} from 'next-themes'

import siteMetadata from '@/data/siteMetadata'
import LayoutWrapper from 'src/components/LayoutWrapper'

export default function App({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
