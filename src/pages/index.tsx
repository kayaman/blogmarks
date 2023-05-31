import algoliasearch from 'algoliasearch/lite'
import {Hits, InstantSearch, SearchBox} from 'react-instantsearch-hooks-web'
import siteMetadata from '@/data/siteMetadata'
import {getAllBookmarksCount, getAllBookmarksPaginated} from '@/server/persistence/sanityRepository'
import BookmarksLayout from '@/layouts/BookmarksSearchLayout'
import BookmarkCard from '@/components/BookmarkCard'

const PAGE_SIZE = siteMetadata.pageSize

const hitHandler = (hit) => {
  return <BookmarkCard bookmark={hit} />
}

export default function Home({bookmarks, title, pagination}) {
  console.log('---------------------------(bookmarks0')

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
