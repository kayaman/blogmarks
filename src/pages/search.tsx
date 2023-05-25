import BookmarkCard from '@/components/BookmarkCard'
import algoliasearch from 'algoliasearch'
import {InstantSearch} from 'react-instantsearch-hooks'
import {Hits, SearchBox} from 'react-instantsearch-hooks-web'

const searchClient = algoliasearch('IUBI46TDU9', '0e16ff588d44cb6c0982a8db1310c525')

const handleHit = (hit) => {
  return <BookmarkCard bookmark={hit} />
}

function SearchPage() {
  return (
    <>
      <div className="container flex mx-auto">
        <InstantSearch searchClient={searchClient} indexName="bookmarksIndex">
          <SearchBox />

          <Hits hitComponent={handleHit} />
        </InstantSearch>
      </div>
    </>
  )
}

export default SearchPage
