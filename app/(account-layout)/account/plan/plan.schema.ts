import { z } from "zod";

export const PlanFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  height: z.number().min(1, "Height is required").max(300, "Height must be less than 300 cm"),
  weight: z.number().min(1, "Weight is required").max(500, "Weight must be less than 500 kg"),
  sex: z.enum(["male", "female"], {
    required_error: "Please select a sex",
  }),
  age: z.number().min(1, "Age is required").max(120, "Age must be less than 120"),
});

export type PlanFormType = z.infer<typeof PlanFormSchema>;