import {useState} from 'react'
import siteMetadata from '@/data/siteMetadata'
import Pagination from '@/components/Pagination'
import Heading from '@/components/Heading'
import BookmarkCard from '@/components/BookmarkCard'
import {InstantSearch} from 'react-instantsearch-hooks'
import {Hits} from 'react-instantsearch-hooks-web'

function Hit({hit}) {
  return <BookmarkCard bookmark={hit} />
}

const BookmarksLayout = (props) => {
  const {bookmarks, pagination} = props
  const [searchValue, setSearchValue] = useState('')

  const hitHandler = (hit) => {
    console.log('bookmark HIT: ', bookmarks)
    return <BookmarkCard bookmark={hit} />
  }

  return (
    <>
      <Hits hitComponent={hitHandler} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="flex-row pt-1 pb-8 space-y-2 md:space-y-5">
          <div className="inline-flex items-baseline">
            <div className="self-start justify-self-start">
              <Heading text={siteMetadata.headerText} />
            </div>
          </div>
        </div>

        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          // TODO: fix the code below, create a global var to get records from other sources ex.
          Algolia
          {bookmarks &&
            bookmarks.map((bookmark) => {
              return <BookmarkCard bookmark={bookmark} />
            })}
        </ul>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}

export default BookmarksLayout
