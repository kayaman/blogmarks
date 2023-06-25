import BookmarksLayout from '@/layouts/BookmarksLayout'
import { getAllBookmarksByTagName, getAllTags } from '@/src/server/persistence/sanityRepository';
import Bookmark from '@/src/types/Bookmark';

interface TagPageProps {
  bookmarks: Bookmark[]
  title: string
}

export default function TagPage({ bookmarks, title }: TagPageProps) {
  return <BookmarksLayout bookmarks={bookmarks} title={title} />
}

export const getStaticProps = async ({params}) => {
  const { name: tagName } = params
  const bookmarks = await getAllBookmarksByTagName(tagName)
  const title = '#'.concat(tagName.toUpperCase())
  return {
    props: {
      bookmarks,
      title,
    },
  }
}

export async function getStaticPaths() {
  const tags = await getAllTags()
  const paths = tags.map((tag) => ({
    params: {name: tag.name},
  }))
  return {paths, fallback: false}
}