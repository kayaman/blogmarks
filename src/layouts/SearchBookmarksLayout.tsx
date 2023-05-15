import {BookmarkLink} from '@/components/BookmarkLink'
import {CreatedAt} from '@/components/CreatedAt'
import {useState} from 'react'
import TagLink from '@/components/TagLink'
import siteMetadata from '@/data/siteMetadata'
import {SearchInput} from '@/components/SearchInput'

const SearchBookmarksLayout = (props) => {
  const {bookmarks, title, searchHandler} = props
  const [searchValue, setSearchValue] = useState('')
  const filteredBookmarks = []
  const displayBookmarks = bookmarks.length > 0 && !searchValue ? bookmarks : filteredBookmarks
  // console.log('====================BOOKMARKS> ', bookmarks)
  console.log('====================displayBookmarks> ', displayBookmarks)
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <div className="flex flex-row justify-between space-around">
            <h2 className="text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
              {title}
            </h2>
            <div className="relative align-middle max-w-2xl">
              <label>
                <span className="sr-only">Search bookmarks</span>
                <input
                  aria-label="Search bookmarks"
                  type="text"
                  onChange={searchHandler}
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
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!filteredBookmarks.length && 'No bookmarks found.'}
          {displayBookmarks.map((bookmark) => {
            const {_id, _createdAt, link, title, tags} = bookmark // tag wiped out, legacy blog code
            return (
              <li key={_id} className="py-4">
                <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <CreatedAt date={_createdAt} />
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

export default SearchBookmarksLayout
