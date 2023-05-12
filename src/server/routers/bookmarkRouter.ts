import {procedure, router} from '../trpc'
import {getAll as getAllBookmarks} from '@/server/providers/bookmarksProvider'

export const bookmarksRouter = router({
  getAll: procedure.query(() => {
    return getAllBookmarks()
  }),
})
