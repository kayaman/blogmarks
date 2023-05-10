import Bookmark from '@/types/Bookmark'
import {BookmarkLink} from '@/components/BookmarkLink'
import {useState} from 'react'
import TagLink from '@/components/TagLink'

interface IBookmarksLayoutProps {
  bookmarks: Bookmark[]
  title: string
  currentTag?: string
}

const BookmarksLayout: React.FunctionComponent<IBookmarksLayoutProps> = (props) => {
  const {bookmarks, title, currentTag} = props

  const [searchValue, setSearchValue] = useState('')

  const filteredBookmarks = bookmarks.filter((bookmark) => {
    console.log(bookmark)
    let searchContent = bookmark.title + bookmark.link
    searchContent += bookmark.tags && bookmark.tags.length > 0 ? bookmark.tags.join(' ') : ''
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  const displayBookmarks = bookmarks.length > 0 && !searchValue ? bookmarks : filteredBookmarks

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
          <div className="relative max-w-lg">
            <label>
              <span className="sr-only">Search bookmarks</span>
              <input
                aria-label="Search bookmarks"
                type="text"
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search bookmarks"
                className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
              />
            </label>
            <svg
              className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
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
          {!filteredBookmarks.length && 'No bookmarks found.'}
          {displayBookmarks.map((bookmark) => {
            const {_id, _createdAt, link, title, tags} = bookmark // tag wiped out, legacy blog code
            return (
              <li key={_id} className="py-4">
                <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <dl>
                    <dt className="sr-only">Created on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      {/* <time dateTime={_createdAt}>
                        {formatDate(_createdAt, siteMetadata.locale)}
                      </time> */}
                    </dd>
                  </dl>
                  <div className="space-y-3 xl:col-span-3">
                    <div>
                      <h3 className="text-2xl font-bold leading-8 tracking-tight">
                        <BookmarkLink
                          href={bookmark.link}
                          title={title}
                          className="text-gray-900 dark:text-gray-100"
                        />
                      </h3>
                      <div className="flex flex-wrap">
                        {tags && tags.map((tag) => <TagLink key={tag._id} name={tag.name} />)}
                      </div>
                      <div className="flex flex-wrap">
                        <BookmarkLink href={link}>{title}</BookmarkLink>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default BookmarksLayout
