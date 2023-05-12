import {procedure, router} from '../trpc'
import {bookmarksRouter} from './bookmarkRouter'

export const appRouter = router({
  hi: procedure.query(() => 'hello'),
  bookmarks: bookmarksRouter,
})

export type AppRouter = typeof appRouter
