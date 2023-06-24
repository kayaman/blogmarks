import siteMetadata from '@/data/siteMetadata'
import {
  getAllBookmarksCount,
  getAllBookmarksPaginated,
} from '../server/persistence/sanityRepository'
import BookmarksSearchLayout from '../layouts/BookmarksSearchLayout'

export default async function Home({bookmarks, title, pagination, allBookmarks}) {
  return (
    <BookmarksSearchLayout
      bookmarks={bookmarks}
      title={title}
      pagination={pagination}
      allBookmarks={allBookmarks}
    />
  )
}

export const getServerSideProps = async () => {
  const allBookmarks = (await getAllBookmarksPaginated(0, Infinity)) || []
  const bookmarks = (await getAllBookmarksPaginated(0, 25)) || []
  const total = await getAllBookmarksCount()
  const title = siteMetadata.homePageTitle
  const pagination = {
    currentPage: 1,
    totalPages: Math.floor(total / siteMetadata.PAGE_SIZE),
  }

  return {
    props: {
      bookmarks,
      title,
      pagination,
      allBookmarks,
    },
  }
}
