import siteMetadata from '@/data/siteMetadata'
import clientConfig from '@/sanity/clientConfig'
import Bookmark from '@/types/Bookmark'
import {createClient} from 'next-sanity'
import BookmarksLayout from '@/layouts/BookmarksLayout'

// interface IPaginationProps {
//   totalPages: number
//   currentPage: number
// }

// interface IPaginatedBookmarksListProps {
//   page: number
//   bookmarks: Bookmark[]
//   title: string
//   pagination?: IPaginationProps
// }

const PaginatedBookmarksList = ({bookmarks, title, pagination}) => {
  return <BookmarksLayout bookmarks={bookmarks} title={title} pagination={pagination} />
}

const PAGE_SIZE = siteMetadata.pageSize
const client = createClient(clientConfig)

export const getStaticProps = async (context) => {
  const {
    params: {page},
  } = context
  let start = 0
  let end = start + PAGE_SIZE
  if (page && page > 1) {
    const mult = page - 1
    start = mult * PAGE_SIZE
    end = start + PAGE_SIZE
  }
  const total = await client.fetch(`count(*[_type == 'bookmark' && private != true])`)
  const bookmarks = await client.fetch(
    `*[_type == 'bookmark' && private != true]
      {_id, link, title, _createdAt, _updatedAt,'tags': tags[]->{_id, name}}
      | order(_updatedAt desc)[$start...$end]
    `,
    {start: start, end: end}
  )
  const title = siteMetadata.homePageTitle
  const pagination = {
    currentPage: parseInt(page),
    totalPages: Math.ceil(total / PAGE_SIZE),
  }

  return {
    props: {
      bookmarks,
      title,
      pagination,
    },
  }
}

export const getStaticPaths = async () => {
  const total = await client.fetch(`count(*[_type == 'bookmark' && private != true])`)
  const paths = Array.from(Array(total)).map((_, index) => ({
    params: {
      page: String(index),
    },
  }))
  return {paths, fallback: false}
}

export default PaginatedBookmarksList
