import {BookmarkLink} from '@/components/BookmarkLink'
import {CreatedAt} from '@/components/CreatedAt'
import {useState} from 'react'
import TagLink from '@/components/TagLink'
import siteMetadata from '@/data/siteMetadata'
import Pagination from '@/components/Pagination'
import Heading from '@/components/Heading'
import {Hits, InstantSearch, SearchBox} from 'react-instantsearch-hooks-web'
import algoliasearch from 'algoliasearch'
// import Search from '@/components/Search'
import BookmarkCard from '@/components/BookmarkCard'
import CustomHits from '@/components/CustomSearchHits'

const PAGE_SIZE = siteMetadata.pageSize
const searchClient = algoliasearch('IUBI46TDU9', '0e16ff588d44cb6c0982a8db1310c525')

function Hit({hit}) {
  return <BookmarkCard bookmark={hit} />
}

const BookmarksLayout = (props) => {
  const {bookmarks, pagination} = props
  const [searchValue, setSearchValue] = useState('')

  const filteredBookmarks = bookmarks.filter((bookmark) => {
    let searchContent = bookmark.title + bookmark.link
    searchContent += bookmark.tags && bookmark.tags.length > 0 ? bookmark.tags.join(' ') : ''
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  const displayBookmarks = bookmarks.length > 0 && !searchValue ? bookmarks : filteredBookmarks

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <InstantSearch searchClient={searchClient} indexName="bookmarksIndex">
          <div className="flex-row pt-6 pb-8 space-y-2 md:space-y-5">
            <div className="inline-flex items-baseline">
              <div className="self-start justify-self-start">
                <Heading text={'My latest findings'} />
              </div>
              <SearchBox className="justify-end" />
            </div>
          </div>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            <Hits hitComponent={Hit} />
            {/* {!filteredBookmarks.length && 'No bookmarks found.'}
            {displayBookmarks.slice(0, PAGE_SIZE).map((bookmark) => {
              return <BookmarkCard bookmark={bookmark} />
            })} */}
          </ul>
        </InstantSearch>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}

export default BookmarksLayout
