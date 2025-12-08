"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SubmitButton } from "@/features/form/SubmitButton";
import { toast } from "sonner";
import { editPasswordAction } from "./edit-profile.action";
import type { EditPasswordFormType } from "./edit-profile.schema";
import { EditPasswordFormSchema } from "./edit-profile.schema";

export const EditPasswordForm = () => {
  const form = useForm<EditPasswordFormType>({
    resolver: zodResolver(EditPasswordFormSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: EditPasswordFormType) => {
    const result = await editPasswordAction(values);

    if (result?.serverError) {
      toast.error(result.serverError);
      return;
    }

    toast.success("Password updated");
    form.reset();
  };

  const handleFormSubmit = form.handleSubmit(onSubmit);

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col gap-4"
    >
      <FormField
        control={form.control}
        name="currentPassword"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Current Password</FormLabel>
            <FormControl>
              <Input type="password" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="newPassword"
        render={({ field }) => (
          <FormItem>
            <FormLabel>New Password</FormLabel>
            <FormControl>
              <Input type="password" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="confirmPassword"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Confirm new Password</FormLabel>
            <FormControl>
              <Input type="password" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <SubmitButton className="w-fit self-end">Save</SubmitButton>
    </form>
  );
};