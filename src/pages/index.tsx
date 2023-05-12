import {createClient} from 'next-sanity'
import clientConfig from '@/sanity/clientConfig'
import BookmarksLayout from '@/layouts/BookmarksLayout'
import siteMetadata from '@/data/siteMetadata'

const PAGE_SIZE = siteMetadata.pageSize

export default function Home({bookmarks, title, pagination}) {
  return (
    <>
      <BookmarksLayout bookmarks={bookmarks} title={title} pagination={pagination} />
    </>
  )
}

const client = createClient(clientConfig)

export async function getStaticProps() {
  const bookmarks = await client.fetch(
    `*[_type == 'bookmark' && private != true]
      {_id, link, title, _createdAt, _updatedAt,'tags': tags[]->{_id, name}}
      | order(_updatedAt desc)[$start...$end]
    `,
    {start: 0, end: PAGE_SIZE}
  )
  const total = await client.fetch(`count(*[_type == 'bookmark' && private != true])
`)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(total / PAGE_SIZE),
  }
  const title = siteMetadata.homePageTitle

  return {
    props: {
      bookmarks,
      title,
      pagination,
    },
    revalidate: 60,
  }
}
