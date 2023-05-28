'use client'
import siteMetadata from '@/data/siteMetadata'
import {getAllBookmarksCount, getAllBookmarksPaginated} from '@/server/persistence/sanityRepository'

const PAGE_SIZE = siteMetadata.pageSize

export default async function Home() {
  const bookmarks = await getAllBookmarksPaginated(0,2000) || [] //TODO:
  console.log("bookmarks from home():", bookmarks)
  const total = getAllBookmarksCount()
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
