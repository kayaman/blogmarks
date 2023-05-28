import Link from 'next/link'
import TagLink from 'src/components/TagLink'
import {getAllTags} from '@/server/persistence/sanityRepository'

// const Top = (
//   return (
    
//   )
// )

const Tags = ({tags}) => {
  return (
    <>
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <div className="pt-6 pb-8 space-x-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
            Tags
          </h1>
        </div>
        <div className="flex flex-wrap max-w-lg">
          {tags &&
            tags.map((tag) => {
              return (
                <div key={tag._id} className="mt-2 mb-2 mr-5">
                  <Link
                    href={`/tags/${tag.name}`}
                    className="-ml-2 text-sm font-semibold text-gray-600 uppercase dark:text-gray-300"
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

export const getStaticProps = async () => {
  const tags = await getAllTags()
  return {
    props: {
      tags,
    },
  }
}

export default Tags
