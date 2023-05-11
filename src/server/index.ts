import {router, publicProcedure} from './trpc'
import {createHTTPServer} from '@trpc/server/adapters/standalone'
import db from './db'

const appRouter = router({
  getAll: publicProcedure.query(async () => {
    const bookmarks = await db.bookmarks.findAll()
    return bookmarks
  }),
})

export type AppRouter = typeof appRouter

const server = createHTTPServer({
  router: appRouter,
})

server.listen(3000)
