import Bookmark from '@/types/Bookmark'
import {BookmarkLink} from './BookmarkLink'
import {CreatedAt} from './CreatedAt'
import TagLink from './TagLink'

interface Props
  extends React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  bookmark: Bookmark
}

const BookmarkCard: React.FunctionComponent<Props> = ({bookmark}) => {
  const {_id, _createdAt, link, title, tags} = bookmark
  // console.log('bookmark')

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-blue-700"></div>

      <li key={_id} className="py-4 border-y-2">
        <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0 cardsBorder">
          <CreatedAt date={_createdAt} />
          <div className="space-y-3 xl:col-span-3">
            <h3 className="text-2xl font-bold leading-8 tracking-tight">
              <BookmarkLink
                href={link}
                title={title}
                className="text-gray-900 dark:text-gray-100"
              />
            </h3>
            <div className="flex flex-wrap">
              {tags && tags.map((tag) => <TagLink key={tag._id} name={tag.name} />)}
            </div>
            <div className="flex flex-wrap">
              <BookmarkLink href={link}>{title}</BookmarkLink>
            </div>
          </div>
        </article>
      </li>
    </>
  )
}

export default BookmarkCard
