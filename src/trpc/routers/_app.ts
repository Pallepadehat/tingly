import { z } from "zod";
import { baseProcedure, createTRPCRouter, protectedProcedure } from "../init";
import prisma from "@/lib/db";
import { TRPCError } from "@trpc/server";
import { sendWaitlistConfirmationEmail } from "@/lib/email";

export const appRouter = createTRPCRouter({
  getUsers: protectedProcedure.query(({ ctx }) => {
    return prisma.user.findMany({
      where: {
        id: ctx.auth.user.id,
      },
    });
  }),

  // Waitlist endpoints
  waitlist: createTRPCRouter({
    join: baseProcedure
      .input(
        z.object({
          email: z.string().email("Please enter a valid email address"),
        })
      )
      .mutation(async ({ input }) => {
        try {
          // Check if email already exists
          const existing = await prisma.waitlist.findUnique({
            where: { email: input.email },
          });

          if (existing) {
            throw new TRPCError({
              code: "CONFLICT",
              message: "This email is already on the waitlist",
            });
          }

          // Create new waitlist entry
          const waitlistEntry = await prisma.waitlist.create({
            data: {
              email: input.email,
            },
          });

          // Get the position in the waitlist
          const position = await prisma.waitlist.count({
            where: {
              createdAt: {
                lte: waitlistEntry.createdAt,
              },
            },
          });

          // Send confirmation email (non-blocking - don't fail if email fails)
          try {
            await sendWaitlistConfirmationEmail(waitlistEntry.email, position);
          } catch (emailError) {
            console.error("Failed to send confirmation email:", emailError);
            // Continue anyway - user is still on the waitlist
          }

          return {
            success: true,
            position,
            email: waitlistEntry.email,
          };
        } catch (error) {
          if (error instanceof TRPCError) {
            throw error;
          }
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Failed to join waitlist. Please try again.",
          });
        }
      }),

    getCount: baseProcedure.query(async () => {
      const count = await prisma.waitlist.count();
      return { count };
    }),

    getFirst: protectedProcedure
      .input(z.object({ limit: z.number().min(1).max(100).default(10) }))
      .query(async ({ input }) => {
        const entries = await prisma.waitlist.findMany({
          take: input.limit,
          orderBy: {
            createdAt: "asc",
          },
          select: {
            id: true,
            email: true,
            createdAt: true,
          },
        });

        return entries;
      }),
  }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
