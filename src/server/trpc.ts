import {initTRPC} from '@trpc/server'
import {Context} from './context'
import superjson from 'superjson'

const t = initTRPC.create()
// experimental
// const tc = initTRPC.context<Context>().create()

export const router = t.router
export const middleware = t.middleware
export const procedure = t.procedure
// export const mergeRouters = t.mergeRouters
