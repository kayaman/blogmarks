import Link from 'next/link'
interface Props {
  name: string
}

const Tag = ({name}: Props) => {
  return (
    <Link
      href={`/tags/${name}`}
      className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
    >
      {`#${name}`}
    </Link>
  )
}

export default Tag
