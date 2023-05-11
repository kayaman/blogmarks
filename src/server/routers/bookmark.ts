import Bookmark from '@/types/Bookmark'
// type BookmarkCore = {
//   link: string
//   title?: string
// }
bookmarkCreate: (data: {link: string; title?: string}) => Bookmark
