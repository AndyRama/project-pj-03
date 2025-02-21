"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useZodForm,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SubmitButton } from "@/features/form/SubmitButton";
import { toast } from "sonner";
import type { AlimentaireFormType } from "./edit-profile.schema";
import { AlimentaireFormSchema } from "./edit-profile.schema";

type Props = {
  defaultValues?: Partial<AlimentaireFormType>;
};

export const EditAlimentaireForm = ({ defaultValues }: Props) => {
  const form = useZodForm({
    schema: AlimentaireFormSchema,
    defaultValues,
  });

  const onSubmit = async (values: AlimentaireFormType) => {
    try {
      // TODO: Add your update action here
      toast.success("Profile updated successfully");
    } catch (error) {
      toast.error("Failed to update profile");
    }
  };

  return (
    <Form
      form={form}
      onSubmit={async (v) => onSubmit(v)}
      className="flex flex-col gap-4"
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Age</FormLabel>
              <FormControl>
                <Input 
                  type="number" 
                  {...field} 
                  onChange={e => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="weight"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Weight (kg)</FormLabel>
              <FormControl>
                <Input 
                  type="number" 
                  step="0.1"
                  {...field} 
                  onChange={e => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="size"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Size (cm)</FormLabel>
              <FormControl>
                <Input 
                  type="number"
                  {...field}
                  onChange={e => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <SubmitButton className="w-fit self-end">Save</SubmitButton>
    </Form>
  );
}; 