import siteMetadata from '@/data/siteMetadata'
import {useRouter} from 'next/router'

interface PaginationProps {
  totalPages: number
  currentPage: number
}

const Pagination = ({totalPages, currentPage}: PaginationProps) => {
  const router = useRouter()
  const basePath = router.pathname //.split('/')[1]
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages
  return (
    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            Previous
          </button>
        )}
        {prevPage && (
          <a
            href={currentPage - 1 === 1 ? '/' : `/page/${currentPage - 1}`}
            rel="prev"
          >
            Previous
          </a>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            Next
          </button>
        )}
        {nextPage && (
          <a href={`/page/${currentPage + 1}`} rel="next">
            Next
          </a>
        )}
      </nav>
    </div>
  )
}

export default Pagination
