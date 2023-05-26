// 'use client'
import React from 'react'
import algoliasearch from 'algoliasearch/lite'
import {InstantSearch, SearchBox, Hits} from 'react-instantsearch-hooks-web'
import BookmarkCard from '@/components/BookmarkCard'

// const searchClient = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_API_TOKEN)
const searchClient = algoliasearch('IUBI46TDU9', '0e16ff588d44cb6c0982a8db1310c525')

const handleHit = (hit) => {
  console.log('hit: ', hit)
  return <BookmarkCard bookmark={hit} />
}

const SearchPage = () => {
  return (
    <>
      <InstantSearch searchClient={searchClient} indexName="bookmarksIndex">
        <SearchBox placeholder="Search bookmarks" searchAsYouType={true} autoFocus />
        <Hits hitComponent={handleHit} />
      </InstantSearch>
    </>
  )
}

export default SearchPage
