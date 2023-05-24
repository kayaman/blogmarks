import siteMetadata from '@/data/siteMetadata'

const Heading = ({text}) => {
  return (
    <>
      <h1 className="grid items-center font-extrabold leading-9 tracking-tight text-gray-900 align-middle justify-self-start text-l dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-3xl md:leading-10">
        {text}
      </h1>
      <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
        {siteMetadata.description}
      </p>
    </>
  )
}

export default Heading
