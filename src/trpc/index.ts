import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/dist/types/server";
import { publicProcedure, router } from "./trpc";
import { TRPCError } from "@trpc/server";


/**
 * query is mainly for GET Request
 */
export const appRouter = router({
    authCallback: publicProcedure.query(() => {
        const {getUser} = getKindeServerSession()
        const user = getUser()

        if(!user.id || user.email) 
            throw new TRPCError({code: "UNAUTHORISED"})

        //check if the user is in the database

        return {success: true}
    })
});


// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;