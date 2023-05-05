import { Bookmark } from '@/types/Bookmark';
import { Tag } from '@/types/Tag';
import { useState } from 'react'


interface SimpleListLayoutProps {
  bookmarks: Bookmark[],
  currentTag: string,    // current tag name
  tags?: Tag[],
  title?: string,
}

export default function ListLayout({
  bookmarks,
  currentTag,
  tags,
  title
}: SimpleListLayoutProps) {
  // TODO: implement search here
  const [searchValue, setSearchValue] = useState('')
  
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">{`#${currentTag}`}</h1>
          <div className="relative max-w-lg">
            <label>
              <span className="sr-only">Search bookmarks</span>
              <input
                aria-label="Search bookmarks"
                type="text"
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search bookmarks"
                className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
              />
            </label>
            <svg
              className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <ul>
          {bookmarks && bookmarks.map((bookmark) => (
              <li key={bookmark._id} className="py-4">
                { bookmark.link }
              </li>
              )
            )
          }
        </ul>
      </div>
    </>
  )
}