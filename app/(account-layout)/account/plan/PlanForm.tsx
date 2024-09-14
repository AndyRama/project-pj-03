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
import { Textarea } from "@/components/ui/textarea";
import { SubmitButton } from "@/features/form/SubmitButton";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
// import { createPlanAction } from "./plan.action";
import type { PlanFormType } from "./plan.schema";
import { PlanFormSchema } from "./plan.schema";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { updateUserPhysicalAttributesAction } from "./plan.action";

type PlanFormProps = {
  defaultValues: Partial<PlanFormType>;
};

export const PlanForm = ({ defaultValues }: PlanFormProps) => {
  const form = useZodForm({
    schema: PlanFormSchema,
    defaultValues: {
      height: 0,
      weight: 0,
      sex: undefined,
      age: 0,
      ...defaultValues,
    },
  });
  const router = useRouter();

  const updateUserMutation = useMutation({
    mutationFn: async (values: PlanFormType) => {
      const result = await updateUserPhysicalAttributesAction(values);

      if (!result?.data) {
        throw new Error(
          result?.serverError || "Failed to update user attributes",
        );
      }

      return result.data;
    },
    onSuccess: () => {
      toast.success("User attributes updated successfully");
      router.refresh();
    },
    onError: (error) => {
      toast.error(error.message || "Failed to update user attributes");
    },
  });

  const onSubmit = async (values: PlanFormType) => {
    updateUserMutation.mutate(values);
  };

  return (
    <Form form={form} onSubmit={onSubmit} className="flex flex-col gap-4">
      <FormField
        control={form.control}
        name="sex"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Sex</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select your sex" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="height"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Height (cm)</FormLabel>
            <FormControl>
              <Input
                type="number"
                placeholder="Enter your height in cm"
                {...field}
                onChange={(e) => field.onChange(Number(e.target.value))}
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
                placeholder="Enter your weight in kg"
                {...field}
                onChange={(e) => field.onChange(Number(e.target.value))}
              />
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
                placeholder="Enter your age"
                {...field}
                onChange={(e) => field.onChange(Number(e.target.value))}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Plan Description</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Enter plan description"
                {...field}
                rows={4}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <SubmitButton
        className="w-fit self-end"
        size="sm"
        disabled={updateUserMutation.isPending}
      >
        {updateUserMutation.isPending
          ? "Updating..."
          : "Update User Attributes"}
      </SubmitButton>
    </Form>
  );
};
