import { z } from "zod";
import { requests, users } from "~/server/db/schema";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const requestRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        title: z.string(),
        description: z.string(),
        priority: z.enum(["low", "medium", "high"]),
        userId: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(requests).values({
        title: input.title,
        description: input.description,
        priority: input.priority,
        userId: input.userId,
      });
    }),

  getAll: publicProcedure.query(async ({ ctx }) => {
    const requests = await ctx.db.query.requests.findMany();
    return requests;
  }),
});

export type RequestRouter = typeof requestRouter;
