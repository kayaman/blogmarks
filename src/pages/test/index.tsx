import siteMetadata from '@/data/siteMetadata'
import BookmarksSearchLayout from '@/layouts/BookmarksSearchLayout'
import {getAllBookmarksCount, getAllBookmarksPaginated} from '@/server/persistence/sanityRepository'

const PAGE_SIZE = 10

const ExamplePage = ({bookmarks, title, pagination}) => {
  return <BookmarksSearchLayout bookmarks={bookmarks} title={title} pagination={pagination} />
}

export async function getServerSideProps() {
  const bookmarks = (await getAllBookmarksPaginated(0, PAGE_SIZE)) || []
  const total = await getAllBookmarksCount()
  const title = siteMetadata.homePageTitle
  const pagination = {
    currentPage: 1,
    totalPages: Math.floor(total / PAGE_SIZE),
  }

  return {
    props: {
      bookmarks,
      title,
      pagination,
    },
  }
}

export default ExamplePage
