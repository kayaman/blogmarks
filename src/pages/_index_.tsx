import BookmarkCard from '@/components/BookmarkCard'
import {useState} from 'react'
import {InstantSearch} from 'react-instantsearch-hooks'
import {Hits, SearchBox} from 'react-instantsearch-hooks-web'
import siteMetadata from '@/data/siteMetadata.js'
import {
  getAllBookmarksCount,
  getAllBookmarksPaginated,
} from '../server/persistence/sanityRepository'
import BookmarksLayout from '../layouts/BookmarksLayout'
import searchClient from '@/server/search/searchClient'
const pageSize = siteMetadata.pageSize

const searchResults = []

const hitsHandler = ({hit}) => {
  searchResults.push(hit)
  return hit
}

const Home = ({bookmarks, title, pagination}) => {
  const [query, setQuery] = useState(false)
  // const [query, setQuery] = useState(false)

  // {
  //   query && searchResults
  //   return <BookmarksLayout bookmarks={searchResults} title={title} pagination={pagination} />
  // }
  return
  ;<div>
    (<BookmarksLayout bookmarks={bookmarks} title={title} pagination={pagination} />
    <InstantSearch searchClient={searchClient} indexName="bookmarksIndexProd">
      <SearchBox
        onChangeCapture={(event) => {
          let value = event.currentTarget.value
          setQuery(value)
          console.log(value)
        }}
      />
    </InstantSearch>
    )
  </div>
}

async function getStaticProps() {
  const bookmarks = getAllBookmarksPaginated(0, pageSize)
  const title = siteMetadata.homePageTitle
  const total = await getAllBookmarksCount()
  const pagination = {
    currentPage: 1,
    totalPages: Math.floor(total / siteMetadata.PAGE_SIZE),
  }

  return {
    props: {
      bookmarks,
      title,
      pagination,
    },
  }
}

export default Home
