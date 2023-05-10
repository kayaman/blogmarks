import {createClient} from 'next-sanity'
import clientConfig from '@/sanity/clientConfig'
import BookmarksLayout from '@/layouts/BookmarksLayout'
import siteMetadata from '@/data/siteMetadata'

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
    {_id, link, title, _createdAt, _updatedAt, 'tags': tags[]->{_id, name}}
    | order(_updatedAt desc)
    `
  )
  const title = siteMetadata.homePageTitle
  return {
    props: {
      bookmarks,
      title,
    },
  }
}
