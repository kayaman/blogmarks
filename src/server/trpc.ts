import {inferAsyncReturnType, initTRPC} from '@trpc/server'
import {createContext} from './context'

const t = initTRPC.create()

export const router = t.router
export const middleware = t.middleware
export const procedure = t.procedure
export const mergeRouters = t.mergeRouters

// experimental:

type Context = inferAsyncReturnType<typeof createContext>
export const tc = initTRPC.context<Context>().create()
