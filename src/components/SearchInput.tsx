import React, {useState} from 'react'
const [searchValue, setSearchValue] = useState('')

interface ISearchInput
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

export const SearchInput: React.FunctionComponent<ISearchInput> = (props) => {
  return (
    <div className="relative align-middle max-w-2xl">
      <label>
        <span className="sr-only">Search bookmarks</span>
        <input
          aria-label="Search bookmarks"
          type="text"
          onChange={(e) => {
            if (e.target.value && e.target.value.length > 2) {
              setSearchValue(e.target.value)
            }
          }}
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
  )
}
