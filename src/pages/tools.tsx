import TagLink from '@/components/TagLink'
import {BookmarkLink} from '@/components/BookmarkLink'
import siteMetadata from '@/data/siteMetadata'
import clientConfig from '@/sanity/clientConfig'
import {createClient} from 'next-sanity'
import {formatDate} from 'pliny/utils/formatDate'

const Tools = ({bookmarks}) => {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {siteMetadata.toolsPageHeading}
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.toolsPageDescription}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!bookmarks && 'No bookmarks found.'}
          {bookmarks &&
            bookmarks.map((bookmark) => {
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
    </>
  )
}

export default Tools

const client = createClient(clientConfig)

export async function getStaticProps() {
  const response =
    (await client.fetch(
      `*[_type=='tag' && name==$tagName ]
        {_id, name, 'bookmarks': 
        *[_type=='bookmark' && references(^._id)]
        {_id, _createdAt, link, title, 'tags': tags[]-> }
      }`,
      {tagName: 'tools'}
    )) || []
  const {bookmarks} = response[0] ? response[0] : {bookmarks: []}
  return {
    props: {
      bookmarks,
    },
  }
}
