import { publicProcedure, router } from "../trpc";
import { z } from 'zod'

export const adminRouter = router({
    login: publicProcedure
        .input(z.object({email: z.string().email(), password: z.string()}))
        .mutation(async ({ ctx, input}) => {
            const { res } = ctx
            const {email, password} = input
    }),
})