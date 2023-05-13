import {procedure, router, tc} from '../trpc'
import {getAllBookmarks} from '@/server/persistence/sanityRepository'
import {z} from 'zod'
export const bookmarksRouter = router({
  getAll: procedure.query(() => {
    return getAllBookmarks()
  }),
  create: procedure.mutation(async (config) => {
    console.log('----------------->', config.input)
    console.log('----------------->', config.ctx)
  }),
})
