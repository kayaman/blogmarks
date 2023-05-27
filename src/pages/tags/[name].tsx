'use client'
import {InferGetStaticPropsType} from 'next'
import {createClient} from 'next-sanity'
import clientConfig from '@/sanity/clientConfig'
import BookmarksLayout from '@/layouts/BookmarksLayout'

export default function TagPage({
  tagName,
  bookmarks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <BookmarksLayout bookmarks={bookmarks} title={tagName} />
    </>
  )
}

const client = createClient(clientConfig)

export async function getStaticProps({params}) {
  const {name: tagName} = params
  const data = await client.fetch(
    `*[_type=='tag' && name==$tagName ]
      {_id, name, 'bookmarks': 
      *[_type=='bookmark' && references(^._id)]{_id, _createdAt, link, title, 'tags': tags[]-> }
    }`,
    {tagName: tagName}
  )
  const {bookmarks} = data[0]

  return {
    props: {
      bookmarks,
      tagName,
    },
  }
}

export async function getStaticPaths() {
  const tags = await client.fetch(`*[_type == 'tag']{name}`)

  const paths = tags.map((tag) => ({
    params: {name: tag.name},
  }))
  return {paths, fallback: false}
}
