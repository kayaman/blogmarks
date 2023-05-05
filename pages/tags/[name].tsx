import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { InferGetStaticPropsType } from 'next'
import { createClient } from 'next-sanity'
import clientConfig from '@/sanity/clientConfig'

const client = createClient(clientConfig);

export async function getStaticPaths() {
  const names = await client.fetch(`*[_type == 'tag']{name}`);

  const paths = names.map(
    (tag) => ({ params: { name: tag.name }},)
  );

  return { paths, fallback: false }
}

export default function Tag({ tagName, bookmarks }: InferGetStaticPropsType<typeof getStaticProps>) {
  const title = "#".toString().join(tagName).toUpperCase()
  return (
    <>
      <ListLayout posts={bookmarks} title={title} />
    </>
  )
}
