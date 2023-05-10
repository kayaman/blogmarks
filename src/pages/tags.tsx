import Link from 'next/link'
import type Tag from 'src/types/Tag'
import clientConfig from '@/sanity/clientConfig'
import {createClient} from 'next-sanity'
import TagLink from 'src/components/TagLink'

type TagsProps = {
  tags: Tag[]
}

export default function Tags({tags}) {
  return (
    <>
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <div className="space-x-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
            Tags
          </h1>
        </div>
        <div className="flex max-w-lg flex-wrap">
          {Object.keys(tags).length === 0 && 'No tags found.'}
          {tags.map((tag) => {
            return (
              <div key={tag._id} className="mb-2 mr-5 mt-2">
                <Link
                  href={`/tags/${tag.name}`}
                  className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
                  aria-label={`View bookmarks tagged with ${tag.name}`}
                >
                  <TagLink name={tag.name} />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

const client = createClient(clientConfig)
export const getStaticProps = async () => {
  const tags: TagsProps[] = await client.fetch(`*[_type == 'tag']{_id, name}`)
  return {
    props: {
      tags,
    },
  }
}
