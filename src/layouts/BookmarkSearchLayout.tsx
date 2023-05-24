import siteMetadata from '@/data/siteMetadata'
import Top from '@/components/Top'
import {Hits, InstantSearch, SearchBox} from 'react-instantsearch-hooks-web'
import algoliasearch from 'algoliasearch'
import BookmarkCard from '@/components/BookmarkCard'

const PAGE_SIZE = siteMetadata.pageSize
const searchClient = algoliasearch('IUBI46TDU9', '947ade8c4264835723bd6c97b69c285d')

const Hit = ({hit}) => {
  return <BookmarkCard bookmark={hit} />
}

const BookmarksSearchLayout = (props) => {
  const {bookmarks, pagination} = props

  return (
    <>
      <InstantSearch searchClient={searchClient} indexName="bookmarksIndex">
        <div className="flex flex-row">
          <div className="flex flex-col">
            <div className="flex">
              <h1 className="flex justify-start text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
                {siteMetadata.homePageTitle}
              </h1>
            </div>
            <div className="flex">
              <p className="text-lg leading-7 text-gray-500 dark:text-gray-400 ">
                {siteMetadata.description}
              </p>
            </div>
          </div>
          <div className="flex justify-end align-top justify-items-end">
            <SearchBox />
          </div>
        </div>
        <Hits hitComponent={Hit} />
      </InstantSearch>
    </>
  )
}

export default BookmarksSearchLayout

// <div className="divide-y divide-gray-200 dark:divide-gray-700"></div>

{
  /* <Top /> */
}
{
  /* <InstantSearch searchClient={searchClient}>
        <SearchBox />
      </InstantSearch> */
}
