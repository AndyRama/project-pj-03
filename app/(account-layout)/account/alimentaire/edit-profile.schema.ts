import { z } from "zod";

export const ProfileFormSchema = z.object({
  name: z.string().optional().nullable(),
  email: z.string(),
});

export const AlimentaireFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  age: z.number().min(0, "Age must be positive").max(150, "Invalid age"),
  weight: z.number().min(0, "Weight must be positive").max(500, "Invalid weight"),
  size: z.number().min(0, "Size must be positive").max(300, "Invalid size"),
});

export const EditPasswordFormSchema = z.object({
  currentPassword: z.string().min(8),
  newPassword: z.string().min(8),
  confirmPassword: z.string().min(8),
});

export type ProfileFormType = z.infer<typeof ProfileFormSchema>;
export type AlimentaireFormType = z.infer<typeof AlimentaireFormSchema>;
export type EditPasswordFormType = z.infer<typeof EditPasswordFormSchema>;
