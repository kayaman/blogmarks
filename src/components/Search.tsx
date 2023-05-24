import Bookmark from '@/types/Bookmark'
import algoliasearch from 'algoliasearch'
import {InstantSearch} from 'react-instantsearch-hooks'
import {Hits, SearchBox} from 'react-instantsearch-hooks-web'
import BookmarkCard from './BookmarkCard'

// const searchClient = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_API_KEY)
const searchClient = algoliasearch('IUBI46TDU9', '947ade8c4264835723bd6c97b69c285d')

const Search = () => {
  function Hit({hit}) {
    console.log(hit)

    return <BookmarkCard bookmark={hit} />
  }

  return (
    <>
      <InstantSearch searchClient={searchClient} indexName="bookmarksIndex">
        <SearchBox placeholder="Search" autoFocus />
        <Hits hitComponent={Hit} />
      </InstantSearch>
    </>
  )
}

export default Search
