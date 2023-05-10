import {createClient} from 'next-sanity'
import clientConfig from '@/sanity/clientConfig'
import BookmarksLayout from '@/layouts/BookmarksLayout'

export default function Home({bookmarks, title}) {
  return (
    <>
      <BookmarksLayout bookmarks={bookmarks} title={title} />
    </>
  )
}

const client = createClient(clientConfig)

export async function getStaticProps() {
  const bookmarks = await client.fetch(
    `*[_type == 'bookmark' && private != true]
    {_id, link, title, _createdAt, 'tags': tags[]->{_id, name}}
    | order(_createdAt desc)
    `
  )
  const title = 'Home'
  return {
    props: {
      bookmarks,
      title,
    },
  }
}
