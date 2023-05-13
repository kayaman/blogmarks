import siteMetadata from '@/data/siteMetadata'
import BookmarksLayout from '@/layouts/BookmarksLayout'
import Bookmark from '@/types/Bookmark'
import {getAllBookmarksByTagName} from '@/server/persistence/sanityRepository'

interface IToolsProps {
  bookmarks: Bookmark[]
  title: string
}

const Tools = ({bookmarks, title}: IToolsProps) => {
  return <BookmarksLayout bookmarks={bookmarks} title={title} />
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
