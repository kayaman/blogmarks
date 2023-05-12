import clientConfig from '@/sanity/clientConfig'
import {createClient} from 'next-sanity'
import Bookmark from '@/types/Bookmark'

const client = createClient(clientConfig)

export const getAll = async () => {
  const bookmarks: Bookmark[] = await client.fetch(
    `*[_type == 'bookmark' && private != true]
      {_id, link, title, _createdAt, _updatedAt,'tags': tags[]->{_id, name}}
      | order(_updatedAt desc)
    `
  )
  return bookmarks
}
