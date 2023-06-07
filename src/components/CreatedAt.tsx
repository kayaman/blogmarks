import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.extend(relativeTime)
dayjs.extend(customParseFormat)

export const CreatedAt = ({date}) => {
  const daysAgo = new Date().getDate() - 1
  let formattedDate = ''

  if (dayjs().isAfter(dayjs(daysAgo))) {
    formattedDate = dayjs(date).fromNow()
  } else {
    formattedDate = dayjs(date).format('MMMM D, YYYY')
  }
  return (
    <dl>
      <dt className="sr-only">Created on</dt>
      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
        <time dateTime={String(date)}>{formattedDate}</time>
      </dd>
    </dl>
  )
}
