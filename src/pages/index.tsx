import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox } from 'react-instantsearch-hooks-web';
import siteMetadata from '@/data/siteMetadata'
import {getAllBookmarksCount, getAllBookmarksPaginated} from '@/server/persistence/sanityRepository'
import BookmarksSearchLayout from '@/layouts/BookmarksSearchLayout'

const PAGE_SIZE = siteMetadata.pageSize

const searchClient = algoliasearch('IUBI46TDU9',"934609271f37b4520c961634b5f9b592")

export default function Home({bookmarks, title, pagination}) {
  return (
  <InstantSearch searchClient={searchClient} indexName='bookmarksIndex'>
    <SearchBox  />
  </InstantSearch>
  )}
  // return <BookmarksSearchLayout bookmarks={bookmarks} title={title} pagination={pagination} />
// }

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
