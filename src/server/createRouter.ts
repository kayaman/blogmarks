import * as trpc from '@trpc/server'

import type {BookmarksContextType} from './context'

export function createTRPCRouter() {
  return trpc.router<BookmarksContextType>()
}
