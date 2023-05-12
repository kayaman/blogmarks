import {procedure, router} from '../trpc'
import {getAllBookmarks} from '@/server/persistence/sanityRepository'

export const bookmarksRouter = router({
  getAll: procedure.query(() => {
    return getAllBookmarks()
  }),
})
