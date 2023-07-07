import {isDesktop, isMobile} from 'react-device-detect'
import siteMetadata from '@/data/siteMetadata'
import {getAllBookmarksCount, getAllBookmarksPaginated} from '@/server/persistence/sanityRepository'
import BookmarksLayout from '@/layouts/BookmarksLayout'
import BookmarksLayoutPropTypes from '../layouts/BookmarksLayoutPropTypes'
import PaginationType from '../types/PaginationType'

interface HomePageProps extends BookmarksLayoutPropTypes {}

export default function Home(props: HomePageProps) {
  const {bookmarks, title, pagination, searchableBookmarks} = props

  return (
    <BookmarksLayout
      bookmarks={bookmarks}
      title={title}
      pagination={pagination}
      searchableBookmarks={searchableBookmarks}
    />
  )
}

export async function getServerSideProps() {
  const PAGE_SIZE = siteMetadata.pageSize
  const paginatedBookmarks = (await getAllBookmarksPaginated(0, PAGE_SIZE)) || []
  const searchableBookmarks = (await getAllBookmarksPaginated(0, 10000)) || []
  const title = siteMetadata.homePageTitle
  const total = await getAllBookmarksCount()

  const pagination: PaginationType = {
    currentPage: 1,
    totalPages: Math.floor(total / PAGE_SIZE),
    infiniteScroll: true, // isDesktop ? false : true,
  }

  const bookmarks = pagination?.infiniteScroll ? searchableBookmarks : paginatedBookmarks

  return {
    props: {
      bookmarks,
      pagination,
      searchableBookmarks,
      title,
      total,
    },
  }
}
