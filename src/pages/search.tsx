'use client'
import {useState} from 'react'
import SearchBookmarksLayout from '@/layouts/SearchBookmarksLayout'
import siteMetadata from '@/data/siteMetadata'
import {getAllBookmarksCount, getAllBookmarksPaginated} from '@/server/persistence/sanityRepository'
import {search} from '@/server/services/search'
import {Loading} from '@/components/Loading'

const PAGE_SIZE = siteMetadata.pageSize

let searchResults

// const triggerSearchCommand = async (term: string): Promise<Bookmark[]> => {
//   //console.log('=================(search term)=> ', term)
//   bookmarks = []
//   searchResults = await search(term)
//   //console.log('=================(search results)=> ', searchResults)
// }

const Search = ({bookmarks, title, pagination}) => {
  const [isSearching, setIsSearching] = useState('')

  const executeSearch = async (term: string) => {
    bookmarks = []
    searchResults = await search(term)
  }

  const searchHandler = async (event) => {
    if (event.target && event.target.value.length > 2) {
      setIsSearching('true')
      console.log('event.target.value', event.target.value)
      await executeSearch(event.target.value)
    }
  }

  const displayBookmarks = bookmarks.length > 0 && !isSearching ? bookmarks : searchResults

  if (isSearching) return <Loading />

  return (
    <SearchBookmarksLayout
      bookmarks={displayBookmarks}
      title={title}
      pagination={pagination}
      searchHandler={searchHandler}
    />
  )
}

// export async function getServerSideProps() {}

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

export default Search
