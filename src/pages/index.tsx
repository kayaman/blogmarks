import { isMobile, isTablet, isDesktop } from 'react-device-detect';
import siteMetadata from '@/data/siteMetadata'
import {getAllBookmarksCount, getAllBookmarksPaginated} from '@/server/persistence/sanityRepository'
import BookmarksSearchLayout from '@/layouts/BookmarksSearchLayout'
import Bookmark from '../types/Bookmark'
import PaginationType from '../types/PaginationType'

interface HomePageProps {
  allBookmarks: Bookmark[]
  bookmarks: Bookmark[]
  pagination: PaginationType
  title: string
  isMobileDevice?: boolean
}

const PAGE_SIZE = siteMetadata.pageSize

export default function Home({bookmarks, title, pagination, allBookmarks}: HomePageProps) {
  return (
    <BookmarksSearchLayout
      bookmarks={bookmarks}
      title={title}
      pagination={pagination}
      allBookmarks={allBookmarks}
    />
  )
}

export async function getServerSideProps() {
  const allBookmarks = (await getAllBookmarksPaginated(0, 10000)) || []
  const paginatedBookmarks = (await getAllBookmarksPaginated(0, PAGE_SIZE)) || []
  const total = await getAllBookmarksCount()
  const title = siteMetadata.homePageTitle
  
  const bookmarks = isMobile ? allBookmarks : paginatedBookmarks

  console.log(`isMobile?: ${isMobile}`)

  const pagination: PaginationType = {
    currentPage: 1,
    totalPages: Math.floor(total / PAGE_SIZE),
    infiniteScroll: isMobile ? true : false,
  }

  

  return {
    props: {
      allBookmarks,
      bookmarks,
      pagination,
      title,
      total,
    },
  }
}
