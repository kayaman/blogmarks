import {useState} from 'react'
import siteMetadata from '@/data/siteMetadata'
import Pagination from '@/components/Pagination'
import Heading from '@/components/Heading'
import BookmarkCard from '@/components/BookmarkCard'
import Bookmark from '../types/Bookmark'
import {getAllBookmarksPaginated} from '../server/persistence/sanityRepository'

const BookmarksLayout = (props) => {
  const {bookmarks, pagination} = props

  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])
  const content = getAllBookmarksPaginated(0, 1000).then((bookmarks) => {
    return bookmarks
  })

  const filterContent = (search: string): Bookmark[] => {
    console.log('search: ', search)
    const filtered = []
    for (const bookmark in content) {
      if (bookmark.toString().includes(search)) {
        filtered.push(bookmark)
      }
    }
    console.log(filtered)
    setResults(filtered)
    return results
  }

  let display = []
  if (results && results.length > 0) {
    display = results
  } else if (bookmarks && bookmarks.length > 0) {
    display = bookmarks
  }

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="flex-row pt-1 pb-8 space-y-2 md:space-y-5">
          <div>
            <div className="inline-flex items-baseline">
              <div className="self-start justify-self-start">
                <Heading text={siteMetadata.headerText} />
              </div>
            </div>
          </div>
          <div className="relative max-w-lg">
            <input
              onInput={(e) => console.log(e.currentTarget.value)}
              aria-label="Search bookmarks"
              type="search"
              placeholder="Search bookmarks"
              className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value)
                console.log('search term: ', search)
              }}
              onKeyUp={(e) => {
                filterContent(search)
                console.log('search term: ', search)
              }}
            ></input>
          </div>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {display.map((bookmark) => {
            return <BookmarkCard key={bookmark._id} bookmark={bookmark} />
          })}
        </ul>
      </div>
      {pagination && pagination.totalPages > 1 && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}

export default BookmarksLayout
