
import siteMetadata from '@/data/siteMetadata'
import BookmarksSearchLayout from '@/layouts/BookmarksSearchLayout'
import {getAllBookmarksByTagName} from '@/server/persistence/sanityRepository'

const References = ({bookmarks, title}) => {
  return <BookmarksSearchLayout bookmarks={bookmarks} title={title} />
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
    revalidate: 60,
  }
}

export default References
