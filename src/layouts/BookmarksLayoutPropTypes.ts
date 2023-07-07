import Bookmark from '@/types/Bookmark'
import PaginationType from '@/types/PaginationType'

interface BookmarksLayoutPropTypes {
  bookmarks: Bookmark[]
  pagination: PaginationType
  title: string
  searchableBookmarks: Bookmark[]
}

export default BookmarksLayoutPropTypes
