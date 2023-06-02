import algoliasearch from 'algoliasearch/lite'
import {Hits, InstantSearch, SearchBox} from 'react-instantsearch-hooks-web'
import siteMetadata from '@/data/siteMetadata'
import {getAllBookmarksCount, getAllBookmarksPaginated} from '@/server/persistence/sanityRepository'
import BookmarksLayout from '../layouts/BookmarksLayout'

const PAGE_SIZE = siteMetadata.pageSize

export default function Home({bookmarks, title, pagination}) {
  console.log('HOME: ', bookmarks, title, pagination)
  return <BookmarksLayout bookmarks={bookmarks} title={title} pagination={pagination} />
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
