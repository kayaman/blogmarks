import BookmarksLayout from '@/layouts/BookmarksLayout'
import siteMetadata from '@/data/siteMetadata'
import {getAllBookmarksByTagName} from '@/server/persistence/sanityRepository'
import BookmarksLayoutPropTypes from '@/layouts/BookmarksLayoutPropTypes'

interface ReferencesPagePropTypes extends BookmarksLayoutPropTypes {}

const ReferencesPage = (props: ReferencesPagePropTypes) => {
  const {bookmarks, pagination, title, searchableBookmarks} = props

  return (
    <BookmarksLayout
      bookmarks={bookmarks}
      title={title}
      pagination={pagination}
      searchableBookmarks={searchableBookmarks}
    />
  )
}

export async function getStaticProps() {
  const title = siteMetadata.referencesPageTitle
  const tagName = 'reference'
  const bookmarks = await getAllBookmarksByTagName(tagName)
  const searchableBookmarks = bookmarks // page scope search

  return {
    props: {
      bookmarks,
      searchableBookmarks,
      title,
    },
    revalidate: 60,
  }
}

export default ReferencesPage
