import {useState} from 'react'
import siteMetadata from '@/data/siteMetadata'
import Pagination from '@/components/Pagination'
import Heading from '@/components/Heading'
import BookmarkCard from '@/components/BookmarkCard'
import {InstantSearch} from 'react-instantsearch-hooks'
import {Hits, SearchBox} from 'react-instantsearch-hooks-web'
import algoliasearch from 'algoliasearch/lite'

const searchClient = algoliasearch('IUBI46TDU9', '934609271f37b4520c961634b5f9b592')

const hitHandler = ({hit}) => {
  console.log('Hit: ', hit)
  return <BookmarkCard bookmark={hit} />
}

const BookmarksLayout = (props) => {
  const {bookmarks, pagination} = props
  const [searchValue, setSearchValue] = useState('')

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="flex-row pt-1 pb-8 pl-3 space-y-2 md:space-y-5">
          <div className="inline-flex items-baseline">
            <div className="self-start justify-self-start">
              <Heading text={siteMetadata.headerText} />
            </div>
          </div>
        </div>
        <div>
          <InstantSearch searchClient={searchClient} indexName="bookmarksIndexProd">
            <SearchBox />
            <Hits hitComponent={hitHandler} />
          </InstantSearch>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {bookmarks &&
            bookmarks.map((bookmark) => {
              return <BookmarkCard bookmark={bookmark} />
            })}
        </div>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}

export default BookmarksLayout
