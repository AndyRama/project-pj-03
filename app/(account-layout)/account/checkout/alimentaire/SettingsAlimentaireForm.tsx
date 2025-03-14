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
  userId: string;
};

export const SettingsAlimentaireForm = ({ defaultValues, userId }: ProductFormProps) => {
  const form = useZodForm({
    schema: SettingsAlimentaireFormSchema,
    defaultValues,
  });
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (values: SettingsAlimentaireFormType) => {
      const result = await updateSettingsAction({
        ...values,
        userId
      });

      if (!result || result.serverError) {
        toast.error("Échec de la mise à jour des paramètres");
        throw new Error("Échec de la mise à jour des paramètres");
      }

      toast.success("Paramètres mis à jour avec succès");
      router.refresh();
      form.reset(result.data as SettingsAlimentaireFormType);
    },
  });

  return (
    <FormUnsavedBar
      form={form}
      onSubmit={async (v) => mutation.mutateAsync(v)}
      className="w-half flex flex-col gap-6 lg:gap-8"
    >
      <Card className="p-4">
        <CardHeader>
          <CardTitle>Mensurations</CardTitle>
          <CardDescription>
            Ces informations sont essentielles pour adapter votre plan alimentaire à Votre
            morphologie et besoins spécifiques.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <CardTitle className="mb-2 text-sm font-medium">Prénom</CardTitle>
                  <FormControl>
                    <Input placeholder="Votre prénom" {...field} />
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
                  <CardTitle className="mb-2 text-sm font-medium">Nom</CardTitle>
                  <FormControl>
                    <Input placeholder="Votre nom" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <CardTitle className="mb-2 text-sm font-medium">Âge</CardTitle>
                <FormControl>
                  <Input 
                    type="number" 
                    placeholder="Votre âge" 
                    {...field} 
                    onChange={(e) => field.onChange(e.target.value)}
                  />
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
                    <Input 
                      type="number" 
                      placeholder="Votre taille en cm" 
                      {...field} 
                      onChange={(e) => field.onChange(e.target.value)}
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
                  <CardTitle className="mb-2 text-sm font-medium">Poids (kg)</CardTitle>
                  <FormControl>
                    <Input 
                      type="number" 
                      placeholder="Votre poids en kg" 
                      {...field}
                      onChange={(e) => field.onChange(e.target.value)}
                      step="0.1"
                    />
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