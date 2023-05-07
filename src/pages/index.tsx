import Link from 'next/link'
import TagLink from 'src/components/TagLink'
import siteMetadata from '@/data/siteMetadata'
import {formatDate} from 'pliny/utils/formatDate'
import {createClient} from 'next-sanity'
import clientConfig from '@/sanity/clientConfig'

const MAX_DISPLAY = 1000 // TODO: implement pagination

const client = createClient(clientConfig)

export default function Home({bookmarks}) {
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
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!bookmarks && 'No bookmarks found.'}
          {bookmarks &&
            bookmarks.slice(0, MAX_DISPLAY).map((bookmark) => {
              const {_id, link, _createdAt: date, tags} = bookmark

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
                              <Link href={link} className="text-gray-900 dark:text-gray-100">
                                {link}
                              </Link>
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
                          <a
                            href={`/tags/}`}
                            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          >
                            Read more &rarr;
                          </a>
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
    `*[_type == 'bookmark']{_id, link, _createdAt, tags[]->{_id, name}}`
  )

  return {
    props: {
      bookmarks,
    },
  }
}
