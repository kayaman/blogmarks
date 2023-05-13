import * as trpc from '@trpc/server'
import {inferAsyncReturnType} from '@trpc/server'
import * as trpcNext from '@trpc/server/adapters/next'
import {SanityClient} from 'sanity'
import {nextAuthOptions} from '@/server/auth/common/auth'
import {getServerSession} from 'next-auth'

export async function createContext(ctx: trpcNext.CreateNextContextOptions) {
  const {req, res} = ctx
  const session = await getServerSession(req, res, nextAuthOptions)

  return {
    req,
    res,
    session,
    sanityClient: SanityClient,
  }
}
export type Context = inferAsyncReturnType<typeof createContext>
