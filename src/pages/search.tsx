import {getAllBookmarksByTagName} from '../server/persistence/sanityRepository'
import BookmarksLayout from '../layouts/BookmarksLayout'

const SearchPage = ({bookmarks}) => {
  console.log('bookmarks: ', bookmarks)

  return <BookmarksLayout bookmarks={bookmarks} />
}

export const getStaticProps = async () => {
  const bookmarks = await getAllBookmarksByTagName('programming')
  return {
    props: {
      bookmarks,
    },
  }
}

export default SearchPage
