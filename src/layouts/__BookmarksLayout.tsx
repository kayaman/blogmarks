import {BookmarkLink} from '@/components/BookmarkLink'
import {CreatedAt} from '@/components/CreatedAt'
import {useState} from 'react'
import TagLink from '@/components/TagLink'
import siteMetadata from '@/data/siteMetadata'
import Pagination from '@/components/Pagination'
import algoliasearch from 'algoliasearch'

const BookmarksLayout = (props) => {
  const {bookmarks, title, pagination} = props
  const PAGE_SIZE = siteMetadata.pageSize
  const [searchValue, setSearchValue] = useState('')
  const filteredBookmarks = bookmarks.filter((bookmark) => {
    let searchContent = bookmark.title + bookmark.link
    searchContent += bookmark.tags && bookmark.tags.length > 0 ? bookmark.tags.join(' ') : ''
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  const searchClient = algoliasearch('1829c4b97ebaa6e0c42f47ec8eda9520', 'bookmarkIndex')

  const displayBookmarks = bookmarks.length > 0 && !searchValue ? bookmarks : filteredBookmarks

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <div className="flex flex-row justify-between space-around">
            <h2 className="text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
              {title}
            </h2>

            <div className="relative max-w-2xl align-middle"></div>
          </div>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!filteredBookmarks.length && 'No bookmarks found.'}
          {displayBookmarks.slice(0, PAGE_SIZE).map((bookmark) => {
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
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}

export default BookmarksLayout
