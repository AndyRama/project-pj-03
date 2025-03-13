"use server";

import { authAction } from "@/lib/backend/safe-actions";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import {
  SettingsAlimentaireFormSchema,
  type SettingsAlimentaireFormType
} from "./settings.schema";

export const updateSettingsAction = authAction
  .schema(SettingsAlimentaireFormSchema)
  .action(async ({ parsedInput: input, session }) => {
    try {
      // Ensure we have a valid session and user
      if (!session?.user?.id) {
        throw new Error("Utilisateur non authentifié");
      }

      const userId = input.userId || session.user.id;

      // Check if profile already exists
      const existingProfile = await prisma.alimentaireProfile.findFirst({
        where: {
          userId,
        },
      });

      if (existingProfile) {
        // Update existing profile
        await prisma.alimentaireProfile.update({
          where: {
            id: existingProfile.id,
          },
          data: {
            firstName: input.firstName,
            lastName: input.lastName,
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
            firstName: input.firstName,
            lastName: input.lastName,
            age: parseInt(input.age),
            size: parseInt(input.size),
            weight: parseFloat(input.weight),
            userId,
          },
        });
      }
      
      // Return the same data for the form update
      return {
        firstName: input.firstName,
        lastName: input.lastName,
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
  .schema(z.object({ userId: z.string().optional() }))
  .action(async ({ parsedInput: input, session }) => {
    try {
      if (!session?.user?.id) {
        throw new Error("Utilisateur non authentifié");
      }

      const userId = input.userId || session.user.id;

      const profile = await prisma.alimentaireProfile.findFirst({
        where: {
          userId,
        },
      });

      if (!profile) {
        return {
          firstName: "",
          lastName: "",
          age: "",
          size: "",
          weight: "",
        } as SettingsAlimentaireFormType;
      }

      return {
        firstName: profile.firstName,
        lastName: profile.lastName,
        age: profile.age.toString(),
        size: profile.size.toString(),
        weight: profile.weight.toString(),
      } as SettingsAlimentaireFormType;
    } catch (error) {
      console.error("Error fetching alimentaire profile:", error);
      throw error;
    }
  });