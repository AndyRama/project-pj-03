"use server";

import { requiredAuth } from "@/lib/auth/helper";
import { authAction } from "@/lib/backend/safe-actions";
import { prisma } from "@/lib/prisma";
import { AlimentaireFormSchema } from "./edit-profile.schema";

export const updateAlimentaireAction = authAction
  .schema(AlimentaireFormSchema)
  .action(async ({ parsedInput: input, ctx }) => {
    const alimentaire = await prisma.alimentaire.upsert({
      where: {
        userId: ctx.user.id,
      },
      update: {
        ...input,
      },
      create: {
        ...input,
        userId: ctx.user.id,
      },
    });

    return alimentaire;
  }); 