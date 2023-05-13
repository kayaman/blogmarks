import {procedure, router, tc} from '../trpc'
import {getAllBookmarks} from '@/server/persistence/sanityRepository'

export const authRouter = router({
  authenticate: procedure.mutation(() => true),
  signup: tc.procedure.mutation(async ({input, ctx}) => {
    return {
      status: 666,
    }
  }),
})
