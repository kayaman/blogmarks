import siteMetadata from '@/data/siteMetadata'
import BookmarksLayout from '@/layouts/BookmarksLayout'
import {getAllBookmarksByTagName} from '@/server/persistence/sanityRepository'
import BookmarksLayoutPropTypes from '../layouts/BookmarksLayoutPropTypes'

interface ToolsPagePropTypes extends BookmarksLayoutPropTypes {}

const ToolsPage = (props: ToolsPagePropTypes) => {
  const {bookmarks, pagination, title, searchableBookmarks} = props

  return (
    <BookmarksLayout
      bookmarks={bookmarks}
      pagination={pagination}
      title={title}
      searchableBookmarks={searchableBookmarks}
    />
  )
}

export async function getServerSideProps() {
  const title = siteMetadata.toolsPageTitle
  const tagName = 'tools'
  const bookmarks = await getAllBookmarksByTagName(tagName)
  const searchableBookmarks = bookmarks // page scope search

  return {
    props: {
      bookmarks,
      searchableBookmarks,
      tagName,
      title,
    },
  }
}

export default ToolsPage
