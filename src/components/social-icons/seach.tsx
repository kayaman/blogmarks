
import algoliasearch  from 'algoliasearch/lite'
import { InstantSearch,
    Confiure, 
    SearchBox,
    Hits,
    Reain,
    Pagination,
    HighLight,
} 
from 'react-instantsearch-dom';

const APP_ID = 'IUBI46TDU9'
const API_KEY = '934609271f37b4520c961634b5f9b592'
const searchClient = algoliasearch(APP_ID, API_KEY)

const hitsHandle = (bookmark) => {
  console.log('hit: ', bookmark)
}

const SearchPage = () => {
  return (
    <>
    <InstantSearch searchClient = {searchClient} indexName = "bookmarksIndex">
      <SearchBox />
      <Hits hitComponent={hitsHandle} />
   </InstantSearch>
  </>
  )
}
export default SearchPage 

