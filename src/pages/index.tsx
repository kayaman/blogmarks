import siteMetadata from '@/data/siteMetadata'
import {getAllBookmarksCount, getAllBookmarksPaginated} from '@/server/persistence/sanityRepository'
import BookmarksLayout from '@/layouts/BookmarksLayout'
import BookmarksLayoutPropTypes from '../layouts/BookmarksLayoutPropTypes'

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

export async function getStaticProps() {
  const PAGE_SIZE = siteMetadata.pageSize
  const bookmarks = (await getAllBookmarksPaginated(0, PAGE_SIZE)) || []
  const searchableBookmarks = (await getAllBookmarksPaginated(0, 10000)) || []
  const title = siteMetadata.homePageTitle
  const total = await getAllBookmarksCount()
  const pagination = {
    currentPage: 1,
    totalPages: Math.floor(total / PAGE_SIZE),
  }

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
