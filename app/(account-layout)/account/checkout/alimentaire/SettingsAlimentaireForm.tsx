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
  profileId: string | undefined;
};

export const SettingsAlimentaireForm = ({ 
  defaultValues, 
  userId, 
  profileId 
}: ProductFormProps) => {
  const form = useZodForm({
    schema: SettingsAlimentaireFormSchema,
    defaultValues,
  });
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (values: SettingsAlimentaireFormType) => {
      const result = await updateSettingsAction({
        ...values,
        userId,
        profileId
      });

      if (!result || result.serverError) {
        toast.error("Échec de la mise à jour des paramètres");
        throw new Error("Échec de la mise à jour des paramètres");
      }

      toast.success("Paramètres mis à jour avec succès");
      router.refresh();
      
      if (profileId) {
        router.push('/alimentaire');
      } else {
        form.reset(result.data as SettingsAlimentaireFormType);
      }
    },
  });

  return (
    <FormUnsavedBar
      form={form}
      onSubmit={async (v) => mutation.mutateAsync(v)}
      className="flex w-full flex-col gap-6 lg:gap-8"
    >
      {[
        { name: "firstName", label: "Prénom", placeholder: "Votre prénom" },
        { name: "lastName", label: "Nom", placeholder: "Votre nom" },
        { name: "age", label: "Âge", placeholder: "Votre âge", type: "number" },
        { name: "size", label: "Taille (cm)", placeholder: "Votre taille en cm", type: "number" },
        { name: "weight", label: "Poids (kg)", placeholder: "Votre poids en kg", type: "number", step: "0.1" },
      ].map(({ name, label, placeholder, type = "text", step }) => (
        <Card key={name} className="p-4">
          <CardHeader>
            <CardTitle>{label}</CardTitle>
            <CardDescription>
              {`Veuillez renseigner votre ${label.toLowerCase()}.`}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name={name}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type={type}
                      placeholder={placeholder}
                      {...field}
                      {...(type === "number" && {
                        onChange: (e) => field.onChange(e.target.value),
                        step,
                      })}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>
      ))}
    </FormUnsavedBar>
  );
};
