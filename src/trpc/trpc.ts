import { initTRPC } from "@trpc/server";

/**
 * Initialization of tRPC backend
 * Should be done only once per backend
 */

const t = initTRPC.create();

/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */


/**
 * publicProcedure means it essentially allows us to create API endpoint that 
 * anyone whether they are authenticated or not can call. It is also called as 
 * Public API.
 */
export const router = t.router;
export const publicProcedure = t.procedure;