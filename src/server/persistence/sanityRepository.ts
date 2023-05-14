import Bookmark, {BookmarkInput, BookmarkOutput} from '@/types/Bookmark'
import sanityClient from './sanityClient'
import Tag from '@/types/Tag'
import Tag from 'schemas/Tag'

export const getAllBookmarksCount = async (): Promise<number> => {
  return await sanityClient.fetch(`count(*[_type == 'bookmark' && private != true])`)
}

export const getAllBookmarksPaginated = async (start: number, end: number): Promise<Bookmark[]> => {
  return await sanityClient.fetch(
    `*[_type == 'bookmark' && private != true]
    {_id, link, title, _createdAt, _updatedAt,'tags': tags[]->{_id, name}}
    | order(_updatedAt desc)[$start...$end]
    `,
    {start: start, end: end}
  )
}

export const getAllBookmarksByTagName = async (tagName: string): Promise<Bookmark[]> => {
  const result = await sanityClient.fetch(
    `*[_type=='tag' && name==$tagName ]
      {_id, name, 'bookmarks': 
      *[_type=='bookmark' && references(^._id)]{_id, _createdAt, link, title, 'tags': tags[]->}
    }`,
    {tagName: tagName}
  )
  const {bookmarks} = result[0]
  return bookmarks
}

export const getAllBookmarks = async (): Promise<Bookmark[]> => {
  throw new Error('Method not implemented.')
}

export const getAllTags = async (): Promise<Tag[]> => {
  return await sanityClient.fetch(`*[_type == 'tag']{_id, name}|order(_updatedAt desc)`)
}
export const create = async (bookmark: BookmarkInput): Promise<BookmarkOutput> => {
  let created: BookmarkOutput
  const result = await sanityClient.create(bookmark).then((result) => {
    console.log(result)
  })
  return created
}
