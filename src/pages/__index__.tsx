import algoliasearch from 'algoliasearch/lite'
import {Hits, InstantSearch, SearchBox} from 'react-instantsearch-hooks-web'
import siteMetadata from '@/data/siteMetadata'
import {getAllBookmarksCount, getAllBookmarksPaginated} from '@/server/persistence/sanityRepository'
import BookmarksLayout from '@/layouts/BookmarksLayout'
import BookmarkCard from '@/components/BookmarkCard'
import {useEffect, useState, useRef} from 'react'
import bookmark from 'schemas/Bookmark'

const PAGE_SIZE = siteMetadata.pageSize

const searchClient = algoliasearch('IUBI46TDU9', '934609271f37b4520c961634b5f9b592')

const hitHandler = (hit) => {
  return //<BookmarkCard bookmark={hit} />
}

export default function Home({bookmarks, title, pagination}) {
  const [isLoading, setIsLoading] = useState(false)
  const [query, setQuery] = useState('')

  return (
    <>
      {/* {!query && bookmarks && bookmarks.map((bookmark) => <BookmarkCard bookmark={bookmark} />)} */}

      <InstantSearch searchClient={searchClient} indexName="bookmarksIndexProd">
        <SearchBox />
        <Hits itemType="div" hitComponent={hitHandler} />
      </InstantSearch>
    </>
  )
}

// return <BookmarksSearchLayout bookmarks={bookmarks} title={title} pagination={pagination}>

export async function getServerSideProps() {
  const bookmarks = (await getAllBookmarksPaginated(0, PAGE_SIZE)) || []
  const total = await getAllBookmarksCount()
  const title = siteMetadata.homePageTitle
  const pagination = {
    currentPage: 1,
    totalPages: Math.floor(total / PAGE_SIZE),
  }

  return {
    props: {
      bookmarks,
      title,
      pagination,
    },
  }
}
