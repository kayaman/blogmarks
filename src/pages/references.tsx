import BookmarksLayout from '@/layouts/BookmarksLayout'
import siteMetadata from '@/data/siteMetadata'
import {getAllBookmarksByTagName} from '@/server/persistence/sanityRepository'

const References = ({bookmarks, title}) => {
  return <BookmarksLayout bookmarks={bookmarks} title={title} />
}

export async function getStaticProps() {
  const title = siteMetadata.referencesPageTitle
  const tagName = 'reference'
  const bookmarks = await getAllBookmarksByTagName(tagName)

  return {
    props: {
      bookmarks,
      title,
    },
  }
}

export default References
