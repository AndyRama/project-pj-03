"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  useZodForm,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormUnsavedBar } from "@/features/form/FormUnsavedBar";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { updateSettingsAction } from "./settings.action";
import {
  SettingsAlimentaireFormSchema,
  type SettingsAlimentaireFormType,
} from "./settings.schema";

type ProductFormProps = {
  defaultValues: SettingsAlimentaireFormType;
};

export const SettingsAlimentaireForm = ({ defaultValues }: ProductFormProps) => {
  const form = useZodForm({
    schema: SettingsAlimentaireFormSchema,
    defaultValues,
  });
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (values: SettingsAlimentaireFormType) => {
      const result = await updateSettingsAction(values);

      if (!result || result.serverError) {
        toast.error("Échec de la mise à jour des paramètres");
        throw new Error("Échec de la mise à jour des paramètres");
      }

      router.refresh();
      form.reset(result.data as SettingsAlimentaireFormType);
    },
  });

  return (
    <FormUnsavedBar
      form={form}
      onSubmit={async (v) => mutation.mutateAsync(v)}
      className="flex w-full flex-col gap-6 lg:gap-8"
    >
      <Card className="p-4">
        <CardHeader>
          <CardTitle>Mensurations</CardTitle>
          <CardDescription>
            Ces informations sont essentielles pour adapter votre plan alimentaire à vos besoins spécifiques.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <CardTitle className="mb-2 text-sm font-medium">Âge</CardTitle>
                <FormControl>
                  <Input type="number" placeholder="Votre âge" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-1 gap-4">
            <FormField
              control={form.control}
              name="size"
              render={({ field }) => (
                <FormItem>
                  <CardTitle className="mb-2 text-sm font-medium">Taille (cm)</CardTitle>
                  <FormControl>
                    <Input type="number" placeholder="Votre taille en cm" {...field} />
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
                  <CardTitle className="mb-2 text-sm font-medium">Poids (kg)</CardTitle>
                  <FormControl>
                    <Input type="number" placeholder="Votre poids en kg" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </CardContent>
      </Card>
    </FormUnsavedBar>
  );
};