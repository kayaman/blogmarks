import {procedure, router} from '../trpc'
import {authRouter} from './authRouter'
import {bookmarksRouter} from './bookmarkRouter'

export const appRouter = router({
  hi: procedure.query(() => 'hello'),
  bookmarks: bookmarksRouter,
  auth: authRouter,
})

export type AppRouter = typeof appRouter
