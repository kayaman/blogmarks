import {ChangeEvent, useState} from 'react'
import siteMetadata from '@/data/siteMetadata'
import Pagination from '@/components/Pagination'
import Heading from '@/components/Heading'
import BookmarkCard from '@/components/BookmarkCard'
import Bookmark from '../types/Bookmark'
import Tag from '../types/Tag'
import PaginationType from '../types/PaginationType'
import bookmark from 'schemas/Bookmark'

interface BookmarkLayoutPropTypes {
  bookmarks: Bookmark[]
  pagination: PaginationType
  title: string
  allBookmarks: Bookmark[]
}

const BookmarksLayout = (props: BookmarkLayoutPropTypes) => {
  const {bookmarks, pagination, allBookmarks} = props
  const [searchValue, setSearchValue] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
    const searchResults = search(event.target.value)
    setSearchResults(searchResults)
  }

  const search = (term: string): string[] => {
    const resultsMap: Map<string, Bookmark> = new Map()
    allBookmarks.forEach((bookmark) => {
      const tags = ''
      bookmark.tags?.map((tag: Tag) => {
        tags.concat(tag.name)
      })

      if (bookmark.link?.match(term) || bookmark.title?.match(term) || tags.match(term)) {
        resultsMap.set(bookmark._id, bookmark)
        console.log(bookmark._id)
      }
    })
    const results = []
    resultsMap.forEach((bookmark) => results.push(bookmark))
    return results
  }

  let bookmarksToDisplay = []
  if (searchValue && searchResults) {
    bookmarksToDisplay = searchResults
  } else if (bookmarks) {
    bookmarksToDisplay = bookmarks
  } else {
    bookmarksToDisplay = []
  }

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="flex-row pt-1 pb-8 space-y-2 md:space-y-5">
          <div className="inline-flex items-baseline">
            <div className="self-start justify-self-start">
              <Heading text={siteMetadata.headerText} />
            </div>
          </div>
          <div className="relative max-w-lg">
            <input
              onChange={handleChange}
              aria-label="Search bookmarks..."
              type="text"
              placeholder="Search bookmarks..."
              className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
            />
            <svg
              className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {bookmarksToDisplay &&
            bookmarksToDisplay.map((bookmark) => {
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
