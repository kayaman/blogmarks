import {InstantSearch} from 'react-instantsearch-hooks'
import {Hits, SearchBox} from 'react-instantsearch-hooks-web'
import BookmarkCard from './BookmarkCard'
import algoliasearch from 'algoliasearch'

const searchClient = algoliasearch('IUBI46TDU9', '934609271f37b4520c961634b5f9b592')
const hitHandler = ({hit}) => {
  console.log('Hit: ', hit)
  return <BookmarkCard bookmark={hit} />
}

const Search = () => {
  return (
    <>
      <InstantSearch searchClient={searchClient} indexName="">
        <SearchBox />
        <Hits hitComponent={hitHandler} />
      </InstantSearch>
    </>
  )
}
export default Search
