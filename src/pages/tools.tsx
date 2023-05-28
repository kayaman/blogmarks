import siteMetadata from '@/data/siteMetadata'
import BookmarksSearchLayout from '@/layouts/BookmarksSearchLayout'
import {getAllBookmarksByTagName} from '@/server/persistence/sanityRepository'

const Tools = ({bookmarks, title}) => {
  return <BookmarksSearchLayout bookmarks={bookmarks} title={title} />
}

export async function getStaticProps() {
  const title = siteMetadata.toolsPageTitle
  const tagName = 'tools'
  const bookmarks = await getAllBookmarksByTagName(tagName)

  return {
    props: {
      bookmarks,
      tagName,
      title,
    },
    revalidate: 60,
  }
}

export default Tools
