import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { privateProcedure, publicProcedure, router } from "./trpc";
import { TRPCError } from "@trpc/server";
import { db } from "@/db";
import { z } from "zod"

/**
 * query is mainly for GET Request
 */
export const appRouter = router({
    authCallback: publicProcedure.query(async () => {
        const { getUser } = getKindeServerSession()
        //const user = await getUser()
        const user = await getUser()

        if(!user || !user.id || !user.email) 
        {throw new TRPCError({ code: 'UNAUTHORIZED'})}
        console.log(user)
        // if(!user || !user.id || !user.email) 
        //     throw new TRPCError({ code: "UNAUTHORIZED" });


        //check if the user is in the database
        const dbUser = await db.user.findFirst({
            where: {
                id: user.id,
            },
        })

        console.log(dbUser)
        
        if(!dbUser) {
            //create user in db
            await db.user.create({
                data: {
                    id: user.id,
                    email: user.email
                }
            })
        }
        return {success: true}
    }),

    getUserFiles: privateProcedure.query(async ({ctx}) => {
        const { userId } = ctx

        return await db.file.findMany({
            where: {
                userId
            }
        })
    }),

    /* created this at 3:12:00*/

    deleteFile: privateProcedure.input(
        z.object({id: z.string() })
        ).mutation( async ({ctx, input}) => {
        const {userId} = ctx

        const file = await db.file.findFirst({
            where: {
                id: input.id,
                userId,
            }
        })

        if(!file) throw new TRPCError({code: "NOT_FOUND"})

        await db.file.delete({
            where: {
                id: input.id,
            },
        })

        return file
    }),
});


// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;