import {BookmarkLink} from '@/components/BookmarkLink'
import {CreatedAt} from '@/components/CreatedAt'
import {useState} from 'react'
import TagLink from '@/components/TagLink'
import siteMetadata from '@/data/siteMetadata'
import Pagination from '@/components/Pagination'
import Heading from '@/components/Heading'

const PAGE_SIZE = siteMetadata.pageSize

const BookmarksLayout = (props) => {
  const {bookmarks, title, pagination} = props
  const [searchValue, setSearchValue] = useState('')

  const displayBookmarks = bookmarks || []

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="flex-row pt-6 pb-8 space-y-2 md:space-y-5">
          <div className="inline-flex items-baseline">
            <div className="self-start justify-self-start">
              <Heading text={title || 'References'} />
            </div>
          </div>
        </div>
        <ul key="searcLayout" className="list-none divide-y divide-gray-200 dark:divide-gray-700">
          {displayBookmarks.slice(0, PAGE_SIZE).map((bookmark) => {
            const {_id, _createdAt, link, title, tags} = bookmark // tag wiped out, legacy blog code
            return (
              <div key={_id} className="py-4 list-none">
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
              </div>
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
