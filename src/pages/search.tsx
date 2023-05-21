import algoliasearch from 'algoliasearch'
import BookmarkCard from '@/components/BookmarkCard'
import InstantSearch from 'react-instantsearch-dom'
import {Hits, SearchBox} from 'react-instantsearch-hooks-web'

const searchClient = algoliasearch('IUBI46TDU9', '1829c4b97ebaa6e0c42f47ec8eda9520')

const Hit = ({hit}) => {
  console.log(hit)
  return <BookmarkCard bookmark={hit} />
}

const SearchComp = () => {
  return (
    <InstantSearch searchClient={searchClient} indexName="bookmarksIndex">
      <SearchBox />
      <Hits hitComponent={Hit} />
    </InstantSearch>
  )
}

export default SearchComp
