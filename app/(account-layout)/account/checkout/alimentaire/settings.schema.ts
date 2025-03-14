import { z } from "zod";

/**
 * Warning
 * The schema here is used in settings.action.ts with `z.union`
 * You should never make all properties optional in a union schema
 * because `union` will always return the first schema that matches
 * So if you make all properties optional, the first schema will always match
 * and the second schema will never be used
 */

export const SettingsAlimentaireFormSchema = z.object({
  age: z.string().refine((val: string) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "L'âge doit être un nombre positif",
  }),
  size: z.string().refine((val: string) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "La taille doit être un nombre positif",
  }),
  weight: z.string().refine((val: string) => !isNaN(Number(val)) && Number(val) > 0 && Number(val) <= 500, {
    message: "Le poids doit être un nombre positif et inférieur à 500",
  }),
  userId: z.string().optional(),
});

export type SettingsAlimentaireFormType = z.infer<typeof SettingsAlimentaireFormSchema>;