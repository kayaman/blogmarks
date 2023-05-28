import siteMetadata from '@/data/siteMetadata'
import {getAllBookmarksCount, getAllBookmarksPaginated} from '@/server/persistence/sanityRepository'
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, RefinementList, Hits } from 'react-instantsearch-hooks-web';
import BookmarkCard from '@/components/BookmarkCard';
// <BookmarksSearchLayout bookmarks={bookmarks} title={title} pagination={pagination} />

const searchClient = algoliasearch('IUBI46TDU9', '934609271f37b4520c961634b5f9b592')

export const hitHandler = (hit) => {
  console.log("hit: ", hit)
  return BookmarkCard(hit)
}


function Home({bookmarks, title, pagination}) {
  return (
  <div>
    <InstantSearch searchClient={searchClient} indexName='bookmarksIndex'>
      <SearchBox autoFocus></SearchBox>

      {/* <Hits hitComponent={hitHandler} /> */}
      </InstantSearch>
  </div>
  )
}

export default Home
// const PAGE_SIZE = siteMetadata.pageSize

// export async function getServerSideProps() {
//   const bookmarks = (await getAllBookmarksPaginated(0, PAGE_SIZE)) || []
//   const total = await getAllBookmarksCount()
//   const title = siteMetadata.homePageTitle
//   const pagination = {
//     currentPage: 1,
//     totalPages: Math.floor(total / PAGE_SIZE),
//   }
  
//   return {
//     props: {
//       bookmarks,
//       title,
//       pagination,
//     },
//   }
// }
