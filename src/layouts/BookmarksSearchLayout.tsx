'use client'
import {useState} from 'react'
import siteMetadata from '@/data/siteMetadata'
import Pagination from '@/components/Pagination'
import Heading from '@/components/Heading'
import {Hits, InstantSearch, SearchBox} from 'react-instantsearch-hooks-web'
import algoliasearch from 'algoliasearch'
import BookmarkCard from '@/components/BookmarkCard'
const PAGE_SIZE = siteMetadata.pageSize
const searchClient = algoliasearch('IUBI46TDU9', '947ade8c4264835723bd6c97b69c285d')

function Hit({hit}) {
  console.log('Hit: ', hit)
  console.log('------------(hit)>: ', hit)
  return <BookmarkCard bookmark={hit} />
}

const BookmarksSearchLayout = (props) => {
  const {bookmarks, _createdAt, title, pagination} = props
  const [searchValue, setSearchValue] = useState('')

  const searchClient = algoliasearch('IUBI46TDU9', '947ade8c4264835723bd6c97b69c285d')

  // const filteredBookmarks = bookmarks.filter((bookmark) => {
  //   let searchContent = bookmark.title + bookmark.link
  //   searchContent += bookmark.tags && bookmark.tags.length > 0 ? bookmark.tags.join(' ') : ''
  //   return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  // })

  // const displayBookmarks = bookmarks.length > 0 && !searchValue ? bookmarks : searchResults

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

export default BookmarksSearchLayout
