import {useState} from 'react'
import siteMetadata from '@/data/siteMetadata'
import Pagination from '@/components/Pagination'
import Heading from '@/components/Heading'
import BookmarkCard from '@/components/BookmarkCard'

const PAGE_SIZE = siteMetadata.pageSize

function Hit({hit}) {
  return <BookmarkCard bookmark={hit} />
}

const BookmarksLayout = (props) => {
  const {bookmarks, pagination} = props
  const [searchValue, setSearchValue] = useState('')

  console.log('bookmarks:', bookmarks)

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="flex-row space-y-2 pb-8 pt-1 md:space-y-5">
          <div className="inline-flex items-baseline">
            <div className="self-start justify-self-start">
              <Heading text={siteMetadata.headerText} />
            </div>
          </div>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
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
