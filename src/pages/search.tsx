import Head from 'next/head'
import React from 'react'
import {GetServerSideProps} from 'next'
import {renderToString} from 'react-dom/server'
import algoliasearch from 'algoliasearch/lite'
import {Hit as AlgoliaHit} from 'instantsearch.js'
import {
  DynamicWidgets,
  InstantSearch,
  Hits,
  Highlight,
  RefinementList,
  SearchBox,
  InstantSearchServerState,
  InstantSearchSSRProvider,
} from 'react-instantsearch-hooks-web'
import {getServerState} from 'react-instantsearch-hooks-server'
import {createInstantSearchRouterNext} from 'react-instantsearch-hooks-router-nextjs'
import singletonRouter from 'next/router'
import {Panel} from '@/components/Panel'
import BookmarkCard from '@/components/BookmarkCard'

const client = algoliasearch('IUBI46TDU9', '8dbf77c4a64674f6102b6022150df63c')

// type HitProps = {
//   hit: AlgoliaHit<{
//     link: string
//     title: number
//   }>
// }

function Hit({hit}) {
  return (
    <>
      <BookmarkCard bookmark={hit} />
      {/* <Highlight hit={hit} attribute="title" className="Hit-label" />
      <span className="Hit-price">{hit.title}</span> */}
    </>
  )
}

type HomePageProps = {
  serverState?: InstantSearchServerState
  url?: string
}

export default function SearchPage({serverState, url}: HomePageProps) {
  return (
    <InstantSearchSSRProvider {...serverState}>
      <Head>
        <title>React InstantSearch Hooks - Next.js</title>
      </Head>

      <InstantSearch
        searchClient={client}
        indexName="bookmarksIndex"
        routing={{
          router: createInstantSearchRouterNext({
            serverUrl: url,
            singletonRouter,
          }),
        }}
        insights={false}
      >
        <div className="Container">
          <div>
            <DynamicWidgets fallbackComponent={FallbackComponent} />
          </div>
          <div>
            <SearchBox className="bg-slate-200" />
            <Hits hitComponent={Hit} />
          </div>
        </div>
      </InstantSearch>
    </InstantSearchSSRProvider>
  )
}

function FallbackComponent({attribute}: {attribute: string}) {
  return (
    <Panel header={attribute}>
      <RefinementList attribute={attribute} />
    </Panel>
  )
}

export const getServerSideProps: GetServerSideProps<HomePageProps> =
  async function getServerSideProps({req}) {
    const protocol = req.headers.referer?.split('://')[0] || 'https'
    const url = `${protocol}://${req.headers.host}${req.url}`
    const serverState = await getServerState(<SearchPage url={url} />, {
      renderToString,
    })

    return {
      props: {
        serverState,
        url,
      },
    }
  }
