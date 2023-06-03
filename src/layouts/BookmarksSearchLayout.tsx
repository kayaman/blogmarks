import {useState} from 'react'
import siteMetadata from '@/data/siteMetadata'
import Pagination from '@/components/Pagination'
import Heading from '@/components/Heading'
import BookmarkCard from '@/components/BookmarkCard'

function Hit({hit}) {
  return <BookmarkCard bookmark={hit} />
}

const BookmarksLayout = (props) => {
  const {bookmarks, pagination} = props
  const [searchValue, setSearchValue] = useState('')

  // flex-row space-y-2 pb-8 pt-1 md:space-y-5

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="flex flex-row justify-between pl-3">
          <div className="self-start justify-self-start">
            <Heading text={siteMetadata.headerText} />
          </div>
          <div className="flex self-end justify-self-end pr-5">
            <input type="search" value="12345" />
          </div>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {bookmarks &&
            bookmarks.map((bookmark) => {
              return <BookmarkCard key={bookmark._id} bookmark={bookmark} />
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
