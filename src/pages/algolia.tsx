import algoliasearch from 'algoliasearch'
import {Hits, InstantSearch, SearchBox} from 'react-instantsearch-hooks-web'

const hitsHandler = ({hit}) => {
  return <div>{hit.title}</div>
}
const searchClient = algoliasearch('IUBI46TDU9', '934609271f37b4520c961634b5f9b592')

const AlgoliaSeach = () => {
  return (
    <InstantSearch searchClient={searchClient} indexName="bookmarksIndex">
      <SearchBox />
      <Hits hitComponent={hitsHandler} />
    </InstantSearch>
  )
}
export default AlgoliaSeach
