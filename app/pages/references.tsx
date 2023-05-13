import BookmarksLayout from '@/layouts/BookmarksLayout'
import Bookmark from '@/types/Bookmark'
import siteMetadata from '@/data/siteMetadata'
import {getAllBookmarksByTagName} from '@/server/persistence/sanityRepository'

interface IRerencesProps {
  bookmarks: Bookmark[]
  title: string
}

const References = ({bookmarks, title}: IRerencesProps) => {
  return <BookmarksLayout bookmarks={bookmarks} title={title} />
}

export async function getStaticProps() {
  const title = siteMetadata.toolsPageTitle
  const tagName = 'reference'
  const bookmarks = await getAllBookmarksByTagName(tagName)

  return {
    props: {
      bookmarks,
      title,
    },
    revalidate: 60,
  }
}

export default References
