import algoliasearch from 'algoliasearch'
import {Hits, InstantSearch, SearchBox} from 'react-instantsearch-hooks-web'
import bookmark from 'schemas/Bookmark'

const hitsHandler = ({hit}) => {
  console.log(hit)
  return <div>{hit.title}</div>
}
const searchClient = algoliasearch('IUBI46TDU9', '934609271f37b4520c961634b5f9b592')

const AlgoliaSeach = () => {
  return (
    <InstantSearch searchClient={searchClient} indexName="bookmarksIndexProd" routing={true}>
      <SearchBox
        classNames={{
          root: 'p-3 shadow-sm',
          form: 'relative',
          input:
            'block w-full pl-9 pr-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md focus:ring-1',
          submitIcon: 'absolute top-0 left-0 bottom-0 w-6',
        }}
      />
      <Hits hitComponent={hitsHandler} />
    </InstantSearch>
  )
}
export default AlgoliaSeach
