"use server";

import { authAction } from "@/lib/backend/safe-actions";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import {
  SettingsAlimentaireFormSchema,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type SettingsAlimentaireFormType
} from "./settings.schema";
import { revalidatePath } from "next/cache";

export const updateSettingsAction = authAction
  .schema(SettingsAlimentaireFormSchema.extend({
    profileId: z.string().optional()
  }))
  .action(async ({ parsedInput: input, ctx }) => {
    try {
      // Using the authenticated user from context
      const userId = input.userId || ctx.user.id;

      // Check if profile already exists
      let existingProfile;
      
      if (input.profileId) {
        existingProfile = await prisma.alimentaireProfile.findUnique({
          where: {
            id: input.profileId,
          },
        });
      } else {
        existingProfile = await prisma.alimentaireProfile.findFirst({
          where: {
            userId,
          },
        });
      }

      if (existingProfile) {
        // Update existing profile
        await prisma.alimentaireProfile.update({
          where: {
            id: existingProfile.id,
          },
          data: {
            age: parseInt(input.age),
            size: parseInt(input.size),
            weight: parseFloat(input.weight),
            updatedAt: new Date(),
          },
        });
      } else {
        // Create new profile
        await prisma.alimentaireProfile.create({
          data: {
            age: parseInt(input.age),
            size: parseInt(input.size),
            weight: parseFloat(input.weight),
            userId,
          },
        });
      }
      
      // Revalidate the alimentaire page to update the data
      revalidatePath('/alimentaire');
      
      // Return the same data for the form update
      return {
        age: input.age,
        size: input.size,
        weight: input.weight,
      };
    } catch (error) {
      console.error("Error updating alimentaire profile:", error);
      throw error;
    }
  });

export const getAlimentaireProfileAction = authAction
  .schema(z.object({ 
    userId: z.string().optional(),
    profileId: z.string().optional() 
  }))
  .action(async ({ parsedInput: input, ctx }) => {
    try {
      const userId = input.userId || ctx.user.id;
      
      let profile;
      
      if (input.profileId) {
        profile = await prisma.alimentaireProfile.findUnique({
          where: {
            id: input.profileId,
          },
        });
      } else {
        profile = await prisma.alimentaireProfile.findFirst({
          where: {
            userId,
          },
        });
      }

      if (!profile) {
        return {
          age: "",
          size: "",
          weight: "",
        };
      }

      return {
        age: profile.age.toString(),
        size: profile.size.toString(),
        weight: profile.weight.toString(),
      };
    } catch (error) {
      console.error("Error fetching alimentaire profile:", error);
      throw error;
    }
  });