const Heading = ({text}) => {
  return (
    <>
      <div className="columns-2">
        <h1 className="text-l fl leading-2 sm:leading-2 md:leading-2 grid w-full place-items-start items-center justify-self-start align-middle font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:text-3xl">
          {text}
        </h1>
        <div className="leading-2 sm:leading-2 md:leading-2 float-right grid w-full place-items-end items-end self-end justify-self-end text-end align-middle font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:text-3xl">
          Seach goes here..
        </div>
      </div>
    </>
  )
}

export default Heading
