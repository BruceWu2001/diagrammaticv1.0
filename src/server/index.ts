import { publicProcedure, router } from './utils/trpc';


export const appRouter = router({
    hello: publicProcedure.query(() => {
      return {
        message: 'Hello, world!',
      };
    }),
  });