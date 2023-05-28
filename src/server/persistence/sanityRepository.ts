import Bookmark from '@/types/Bookmark'
import sanityClient from './sanityClient'
import Tag from '@/types/Tag'

export const getAllBookmarksCount = () => {
  return sanityClient.fetch(`count(*[_type == 'bookmark' && private != true])`)
}

export const getAllBookmarksPaginated = (start?: number, end?: number) => {
  return sanityClient.fetch(
    `*[_type == 'bookmark' && private != true]
    {_id, link, title, _createdAt, _updatedAt,'tags': tags[]->{_id, name}}
    | order(_updatedAt desc)`).then((value) => {
      console.log(value)
    })
}

export const getAllBookmarksByTagName = (tagName: string): Bookmark[] => {
  const result = sanityClient.fetch(
    `*[_type=='tag' && name==$tagName ]
      {_id, name, 'bookmarks': 
      *[_type=='bookmark' && references(^._id)]{_id, _createdAt, link, title, 'tags': tags[]->}
    }`).then((value) => {console.log(value, value)})
    // {tagName: tagName}
  const {bookmarks} = result[0]
  return bookmarks
}

export const getAllBookmarks = (): Bookmark[] => {
  throw new Error('Method not implemented.')
}

export const getAllTags = async (): Promise<Tag[]> => {
  return sanityClient.fetch(`*[_type == 'tag']{_id, name}|order(_updatedAt desc)`)
}
