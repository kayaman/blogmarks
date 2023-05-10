import BookmarksLayout from '@/layouts/BookmarksLayout'
import clientConfig from '@/sanity/clientConfig'
import {createClient} from 'next-sanity'

const Tools = ({bookmarks, title}) => {
  return <BookmarksLayout bookmarks={bookmarks} title={title} />
}

export default Tools

const client = createClient(clientConfig)

export async function getStaticProps() {
  const title = 'Handy #tools'
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
      title,
    },
  }
}
