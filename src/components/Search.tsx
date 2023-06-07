import {
  RefinementList,
  SearchBox,
  Hits,
  Configure,
  Highlight,
  Pagination,
  InstantSearch,
} from 'react-instantsearch-dom'
import type { InstantSearchProps } from 'react-instantsearch-dom'

const HitComponent = ({ hit }: any) => (
  <div>
    <span>{hit.title}</span>
  </div>
)

export function Search(props: InstantSearchProps) {
  return (
    <InstantSearch {...props}>
      <Configure hitsPerPage={12} />
      <header>
        <h1>React InstantSearch + Next.js</h1>
        <SearchBox />
      </header>
      <main>
        <div className="menu">
          <RefinementList attribute="link" />
        </div>
        <div className="results">
          <Hits hitComponent={HitComponent} />
        </div>
      </main>
      <footer>
        <Pagination />
      </footer>
    </InstantSearch>
  )
}
