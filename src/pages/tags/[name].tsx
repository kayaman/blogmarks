import BookmarksLayout from '@/layouts/BookmarksLayout'
import BookmarksLayoutPropTypes from '@/src/layouts/BookmarksLayoutPropTypes'
import {
  getAllBookmarksByTagName,
  getAllBookmarksPaginated,
  getAllTags,
} from '@/src/server/persistence/sanityRepository'
import Bookmark from '@/src/types/Bookmark'

interface TagPageProps extends BookmarksLayoutPropTypes {}

export default function TagPage(props: TagPageProps) {
  const {bookmarks, title, pagination, searchableBookmarks} = props

  return (
    <BookmarksLayout
      bookmarks={bookmarks}
      title={title}
      pagination={pagination}
      searchableBookmarks={searchableBookmarks}
    />
  )
}

export const getStaticProps = async ({params}) => {
  const {name: tagName} = params
  const bookmarks = await getAllBookmarksByTagName(tagName)
  const title = '#'.concat(tagName.toUpperCase())
  const pagination = {}
  const searchableBookmarks = (await getAllBookmarksPaginated(0, 10000)) || []
  return {
    props: {
      bookmarks,
      pagination,
      searchableBookmarks,
      title,
    },
    revalidate: 60,
  }
}

export async function getStaticPaths() {
  const tags = await getAllTags()
  const paths = tags.map((tag) => ({
    params: {name: tag.name},
  }))
  return {paths, fallback: false}
}
