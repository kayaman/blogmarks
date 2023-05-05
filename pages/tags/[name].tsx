import { InferGetStaticPropsType } from 'next'
import { createClient } from 'next-sanity'
import clientConfig from '@/sanity/clientConfig'
import SimpleListLayout from '@/layouts/SimpleListLayout'

export default function Tag({tagName, bookmarks}: InferGetStaticPropsType<typeof getStaticProps>) {
  // const title = ["#"].join(tag.name).toUpperCase()
  console.log("================(tag)2>", tagName)
  
  return (
    <>
      <SimpleListLayout bookmarks={bookmarks} currentTag={tagName} />
    </>
  )
}

const client = createClient(clientConfig);

export async function getStaticProps({ params }) {
  const { name: tagName } = params;
  const data = await client.fetch(
    `*[_type=="tag" && name==$tagName ]{
      "bookmarks": *[_type=='bookmark' && references(^._id)]{ name, link }
    }`,
    { "tagName": tagName }
  );
  const { bookmarks } = data[0];
  console.log("================(tagName)1>", tagName)
  return {
    props: {
      bookmarks,
      tagName
    }
  }
}

export async function getStaticPaths() {
  const tags = await client.fetch(`*[_type == 'tag']{name}`);
  
  const paths = tags.map((tag) => ({
    params: { name: tag.name },
  }));

  return { paths, fallback: false }
}

