'use client'
import siteMetadata from '@/data/siteMetadata'
import {getAllBookmarksCount, getAllBookmarksPaginated} from '@/server/persistence/sanityRepository'
import BookmarksSearchLayout from '@/layouts/BookmarksSearchLayout'

const PAGE_SIZE = siteMetadata.pageSize

export default function Home({bookmarks, title, pagination}) {
  return <BookmarksSearchLayout bookmarks={bookmarks} title={title} pagination={pagination} />
}

export async function getServerSideProps() {
  const bookmarks = (await getAllBookmarksPaginated(0, PAGE_SIZE)) || []
  const total = await getAllBookmarksCount()
  const title = siteMetadata.homePageTitle
  const pagination = {
    currentPage: 1,
    totalPages: Math.floor(total / PAGE_SIZE),
  }

  return {
    props: {
      bookmarks,
      title,
      pagination,
    },
  }
}
