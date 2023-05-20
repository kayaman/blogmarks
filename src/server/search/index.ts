import Bookmark from "@/types/Bookmark"
import sanityClient from "../persistence/sanityClient"

export const searchBookmarks = async (term: string): Promise<Bookmark[]> => {
  // 1st: by titles and links
  
    // const result = await sanityClient.fetch(
    // `*[_type=='tag' && name==$tagName ]
    //   {_id, name, 'bookmarks': 
    //   *[_type=='bookmark' && references(^._id)]{_id, _createdAt, link, title, 'tags': tags[]->}
    // }`,
    // {tagName: tagName}
  )
  const {bookmarks} = result[0]

  // TODO: 
  return bookmarks
}