"use server";

import { authAction } from "@/lib/backend/safe-actions";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import {
  SettingsAlimentaireFormSchema,
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

      const profileData = {
        // Personal information
        age: parseInt(input.age),
        profession: input.profession,
        pathology: input.pathology || null,
        
        // Physical activity
        hoursActivityPerWeek: input.hoursActivityPerWeek,
        stepsPerWeek: input.stepsPerWeek,
        
        // Body measurements
        leftArm: parseFloat(input.leftArm),
        rightArm: parseFloat(input.rightArm),
        glutes: parseFloat(input.glutes),
        leftThigh: parseFloat(input.leftThigh),
        rightThigh: parseFloat(input.rightThigh),
        shoulders: parseFloat(input.shoulders),
        chest: parseFloat(input.chest),
        waist: parseFloat(input.waist),
        
        // Required existing fields (you need to add these to your schema and form)
        size: 0, // Temporary value - you should add this field to your form
        weight: 0, // Temporary value - you should add this field to your form
        
        // Sleep
        sleepHours: input.sleepHours,
        
        updatedAt: new Date(),
      };

      if (existingProfile) {
        // Update existing profile
        await prisma.alimentaireProfile.update({
          where: {
            id: existingProfile.id,
          },
          data: profileData,
        });
      } else {
        // Create new profile
        await prisma.alimentaireProfile.create({
          data: {
            ...profileData,
            userId,
          },
        });
      }
      
      // Revalidate the alimentaire page to update the data
      revalidatePath('/alimentaire');
      
      // Return the same data for the form update
      return input;
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
          profession: "",
          pathology: "",
          hoursActivityPerWeek: "",
          stepsPerWeek: "",
          leftArm: "",
          rightArm: "",
          glutes: "",
          leftThigh: "",
          rightThigh: "",
          shoulders: "",
          chest: "",
          waist: "",
          sleepHours: "",
        };
      }

      return {
        age: profile.age?.toString() || "",
        profession: profile.profession || "",
        pathology: profile.pathology || "",
        hoursActivityPerWeek: profile.hoursActivityPerWeek || "",
        stepsPerWeek: profile.stepsPerWeek || "",
        leftArm: profile.leftArm?.toString() || "",
        rightArm: profile.rightArm?.toString() || "",
        glutes: profile.glutes?.toString() || "",
        leftThigh: profile.leftThigh?.toString() || "",
        rightThigh: profile.rightThigh?.toString() || "",
        shoulders: profile.shoulders?.toString() || "",
        chest: profile.chest?.toString() || "",
        waist: profile.waist?.toString() || "",
        sleepHours: profile.sleepHours || "",
      };
    } catch (error) {
      console.error("Error fetching alimentaire profile:", error);
      throw error;
    }
  });