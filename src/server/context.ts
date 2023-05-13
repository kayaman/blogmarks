import {inferAsyncReturnType} from '@trpc/server'
import {CreateNextContextOptions} from '@trpc/server/adapters/next'
import sanityClient from './persistence/sanityClient'
import {SanityClient} from 'sanity'
import superjson from 'superjson'

// Initialize a context for the server
function createContext(opts: CreateNextContextOptions) {
  const {req, res} = opts
  const ctx = {req, res}
  return {
    ctx,
    transformer: superjson,
  }
}

// Get the context type
export type Context = inferAsyncReturnType<typeof createContext>
