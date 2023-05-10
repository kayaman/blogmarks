import Link from 'next/link'
import TagLink from 'src/components/TagLink'
import siteMetadata from '@/data/siteMetadata'
import {formatDate} from 'pliny/utils/formatDate'
import {createClient} from 'next-sanity'
import clientConfig from '@/sanity/clientConfig'
import {BookmarkLink} from '@/components/BookmarkLink'

const MAX_DISPLAY = 1000 // TODO: implement pagination

const client = createClient(clientConfig)

export default function Home({bookmarks}) {
  const [searchValue, setSearchValue] = useState('')

  const filteredBookmarks = bookmarks.filter((bookmark) => {
    console.log(bookmark)
    const searchContent = bookmark.title + bookmark.link + bookmark.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
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
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!bookmarks && 'No bookmarks found.'}
          {bookmarks &&
            bookmarks.slice(0, MAX_DISPLAY).map((bookmark) => {
              const {_id, link, title, _createdAt: date, tags} = bookmark
              return (
                <li key={_id} className="py-8">
                  <article>
                    <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                      <dl>
                        <dt className="sr-only">Created on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                        </dd>
                      </dl>
                      <div className="space-y-5 xl:col-span-3">
                        <div className="space-y-6">
                          <div>
                            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                              <BookmarkLink
                                href={link}
                                title={title}
                                className="text-lg antialiased text-gray-900 dark:text-gray-100"
                              />
                            </h2>

                            <div className="flex flex-wrap">
                              {tags && tags.map((tag) => <TagLink key={tag._id} name={tag.name} />)}
                            </div>
                          </div>
                          <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                            {/* {summary} */}
                          </div>
                        </div>
                        <div className="text-base font-medium leading-6">
                          {/* <a
                            href={`/tags/}`}
                            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          >
                            Read more &rarr;
                          </a> */}
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              )
            })}
        </ul>
      </div>
      {bookmarks && bookmarks.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="More bookmarks"
          >
            More bookmarks &rarr;
          </Link>
        </div>
      )}
    </>
  )
}

export async function getStaticProps() {
  const bookmarks = await client.fetch(
    `*[_type == 'bookmark' && private != true]
        {_id, link, title, _createdAt, tags[]->{_id, name}}
        | order(_createdAt desc)
    `
  )

  return {
    props: {
      bookmarks,
    },
  }
}
