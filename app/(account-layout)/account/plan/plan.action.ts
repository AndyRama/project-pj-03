"use server";

import { requiredAuth } from "@/lib/auth/helper";
import { ActionError, authAction } from "@/lib/backend/safe-actions";
import { prisma } from "@/lib/prisma";
import { PlanFormSchema } from "./plan.schema";

export const updateUserPhysicalAttributesAction = authAction
  .schema(PlanFormSchema)
  .action(async ({ parsedInput: input, ctx }) => {
    const user = await requiredAuth();

    try {
      const updatedUser = await prisma.user.update({
        where: { id: user.id },
        data: {
          height: input.height,
          weight: input.weight,
          sex: input.sex,
          age: input.age,
        },
      });

      return { data: updatedUser };
    } catch (error) {
      console.error("Failed to update user attributes:", error);
      throw new ActionError("Failed to update user attributes. Please try again.");
    }
  });