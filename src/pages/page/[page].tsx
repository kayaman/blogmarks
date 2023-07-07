import siteMetadata from '@/data/siteMetadata'
import BookmarksLayout from '@/layouts/BookmarksLayout'
import {getAllBookmarksCount, getAllBookmarksPaginated} from '@/server/persistence/sanityRepository'
import Bookmark from '@/src/types/Bookmark'
import PaginationType from '@/src/types/PaginationType'

interface PaginatedBookmarksPagePropTypes {
  bookmarks: Bookmark[]
  pagination: PaginationType
  title: string
  searchableBookmarks: Bookmark[]
}

const PaginatedBookmarksPage = (props: PaginatedBookmarksPagePropTypes) => {
  const {bookmarks, pagination, title, searchableBookmarks} = props

  return (
    <BookmarksLayout
      bookmarks={bookmarks}
      pagination={pagination}
      title="title"
      searchableBookmarks={searchableBookmarks}
    />
  )
}

const PAGE_SIZE = siteMetadata.pageSize

export const getStaticProps = async (context) => {
  const {
    params: {page},
  } = context
  let start = 0
  let end = start + PAGE_SIZE
  if (page && page > 1) {
    const mult = page - 1
    start = mult * PAGE_SIZE
    end = start + PAGE_SIZE
  }
  const total = await getAllBookmarksCount()
  const bookmarks = await getAllBookmarksPaginated(start, end)
  const searchableBookmarks = (await getAllBookmarksPaginated(0, 10000)) || []
  const title = siteMetadata.homePageTitle
  const pagination = {
    currentPage: parseInt(page),
    totalPages: Math.ceil(total / PAGE_SIZE),
  }

  return {
    props: {
      bookmarks,
      pagination,
      searchableBookmarks,
      title,
    },
    revalidate: 15,
  }
}

export const getStaticPaths = async () => {
  const numRecords = await getAllBookmarksCount()
  const numPages = Math.ceil(numRecords / PAGE_SIZE)
  const paths = Array.from(Array(numPages)).map((_, index) => ({
    params: {
      page: String(index),
    },
  }))
  return {paths, fallback: false}
}

export default PaginatedBookmarksPage
