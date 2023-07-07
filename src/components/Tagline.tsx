import Bookmark from '@/types/Bookmark'
import {BookmarkLink} from './BookmarkLink'
import {CreatedAt} from './CreatedAt'
import TagLink from './TagLink'

// DetailedHTMLFactory<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  text: string
}

const Tagline: React.FunctionComponent<Props> = ({text}) => {
  return <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">{text}</p>
}

export default Tagline
