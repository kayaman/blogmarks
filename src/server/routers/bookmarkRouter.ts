import sanityClient from '../persistence/sanityClient'
import {procedure, router} from '../trpc'
import {getAllBookmarks} from '@/server/persistence/sanityRepository'

export const bookmarksRouter = router({
  getAll: procedure.query(() => {
    return getAllBookmarks()
  }),
  create: procedure.mutation((opts) => {
    const rawInput = opts['rawInput']
    sanityClient
      .create({
        _type: 'bookmark',
        link: rawInput.link,
        title: rawInput.title,
      })
      .then(() => {
        return {status: 201, msg: 'TODO!'}
      })
      .catch((err) => {
        console.log(err)
      })
  }),
})
