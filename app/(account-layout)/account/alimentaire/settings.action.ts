"use server";

import { authAction } from "@/lib/backend/safe-actions";
import { z } from "zod";
import {
  SettingsAlimentaireFormSchema,
} from "./settings.schema";

export const updateSettingsAction = authAction
  .schema(SettingsAlimentaireFormSchema)
  .action(async ({ parsedInput: input }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Log des données reçues pour debug
    console.log("Données reçues:", input);
    // Update the data from the server and return the fresh data
    return input;
  });
