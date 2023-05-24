import siteMetadata from '@/data/siteMetadata'
import algoliasearch from 'algoliasearch'
import {Hits, InstantSearch, SearchBox} from 'react-instantsearch-hooks-web'
import BookmarkCard from './BookmarkCard'

const Hit = ({hit}) => {
  return <BookmarkCard bookmark={hit} />
}

const Top = () => {
  const searchClient = algoliasearch('IUBI46TDU9', '947ade8c4264835723bd6c97b69c285d')
  return (
    <>
      <InstantSearch searchClient={searchClient} indexName="bookmarksIndex">
        <div className="flex flex-row">
          <div className="flex flex-1">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
              {siteMetadata.homePageTitle}
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400 ">
              {siteMetadata.description}
            </p>
          </div>
          <div className="flex justify-self-end">
            <SearchBox />
          </div>
        </div>
        <Hits hitComponent={Hit} />
        <div className="divide-y divide-gray-200 dark:divide-gray-700"></div>
      </InstantSearch>
    </>
  )
}

export default Top

// divide-y divide-gray-200 dark:divide-gray-700
