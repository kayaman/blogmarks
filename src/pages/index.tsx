'use client'
import BookmarksLayout from '@/layouts/BookmarksLayout'
import siteMetadata from '@/data/siteMetadata'
import {getAllBookmarksCount, getAllBookmarksPaginated} from '@/server/persistence/sanityRepository'
import {search} from '@/server/services/search'

const PAGE_SIZE = siteMetadata.pageSize

export default function Home({bookmarks, title, pagination}) {
  return <BookmarksLayout bookmarks={bookmarks} title={title} pagination={pagination} />
}

export async function getStaticProps() {
  const bookmarks = await getAllBookmarksPaginated(0, PAGE_SIZE)
  const total = await getAllBookmarksCount()
  const title = siteMetadata.homePageTitle
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(total / PAGE_SIZE),
  }

  return {
    props: {
      bookmarks,
      title,
      pagination,
    },
    revalidate: 60,
  }
}
