import { z } from "zod";

export const SettingsAlimentaireFormSchema = z.object({
  // Personal information
  firstName: z.string().min(1, { message: "Le prénom est obligatoire" }),
  age: z.string().refine((val: string) => !isNaN(Number(val)) && Number(val) > 0 && Number(val) <= 120, {
    message: "L'âge doit être un nombre positif entre 1 et 120",
  }),
  profession: z.string().min(1, { message: "La profession est obligatoire" }),
  pathology: z.string().optional(),
  
  // Physical activity
  hoursActivityPerWeek: z.string().refine((val: string) => !isNaN(Number(val)) && Number(val) >= 0, {
    message: "Les heures d'activité doivent être un nombre positif",
  }),
  stepsPerWeek: z.string().refine((val: string) => !isNaN(Number(val)) && Number(val) >= 0, {
    message: "Le nombre de pas doit être un nombre positif",
  }),
  
  // Body measurements
  leftArm: z.string().refine((val: string) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Le tour de bras gauche doit être un nombre positif",
  }),
  rightArm: z.string().refine((val: string) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Le tour de bras droit doit être un nombre positif",
  }),
  glutes: z.string().refine((val: string) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Le tour de fessiers doit être un nombre positif",
  }),
  leftThigh: z.string().refine((val: string) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Le tour de jambe gauche doit être un nombre positif",
  }),
  rightThigh: z.string().refine((val: string) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Le tour de jambe droite doit être un nombre positif",
  }),
  shoulders: z.string().refine((val: string) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Le tour d'épaules doit être un nombre positif",
  }),
  chest: z.string().refine((val: string) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Le tour de poitrine doit être un nombre positif",
  }),
  waist: z.string().refine((val: string) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Le tour de taille doit être un nombre positif",
  }),
  
  // Sleep
  sleepHours: z.string().min(1, { message: "Les heures de sommeil sont obligatoires" }),
  
  userId: z.string().optional(),
});

export type SettingsAlimentaireFormType = z.infer<typeof SettingsAlimentaireFormSchema>;