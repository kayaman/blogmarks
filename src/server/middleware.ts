import {middleware} from './trpc'

export const uselessMiddleware = middleware(async ({ctx, next}) => {
  return next({
    ctx: {
      ctx: ctx,
    },
  })
})
