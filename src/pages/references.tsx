import BookmarksLayout from '@/layouts/BookmarksLayout'
import Bookmark from '@/types/Bookmark'
import Tag from '../types/Tag'
import {createClient} from 'next-sanity'
import clientConfig from '@/sanity/clientConfig'
import siteMetadata from '@/data/siteMetadata'

interface IRerencesProps {
  bookmarks: Bookmark[]
  title: string
}

const References = ({bookmarks, title}: IRerencesProps) => {
  return <BookmarksLayout bookmarks={bookmarks} title={title} />
}

const client = createClient(clientConfig)
export const getStaticProps = async () => {
  const title = siteMetadata.referencesPageTitle
  const response =
    (await client.fetch(
      `*[_type=='tag' && name==$tagName ]
      {_id, name, 'bookmarks': 
      *[_type=='bookmark' && references(^._id)]
      {_id, _createdAt, link, title, 'tags': tags[]-> }
    }`,
      {tagName: 'reference'}
    )) || []
  const {bookmarks} = response[0] ? response[0] : {bookmarks: []}
  return {
    props: {
      bookmarks,
      title,
    },
  }
}

export default References
