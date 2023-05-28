import siteMetadata from '@/data/siteMetadata'
import BookmarksSearchLayout from '@/layouts/BookmarksSearchLayout'
import {getAllBookmarksCount, getAllBookmarksPaginated} from '@/server/persistence/sanityRepository'

const PaginatedBookmarksList = ({bookmarks, title, pagination}) => {
  return <BookmarksSearchLayout bookmarks={bookmarks} title={title} pagination={pagination} />
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

  const title = siteMetadata.homePageTitle
  const pagination = {
    currentPage: parseInt(page),
    totalPages: Math.ceil(total / PAGE_SIZE),
  }

  return {
    props: {
      title,
      pagination,
    },
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

export default PaginatedBookmarksList
