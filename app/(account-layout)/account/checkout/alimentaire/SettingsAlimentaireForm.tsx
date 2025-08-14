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
  FormLabel,
  useZodForm,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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

  const personalInfoFields = [
    { name: "age", label: "Âge", placeholder: "Votre âge", type: "number" },
    { name: "profession", label: "Profession", placeholder: "Votre profession", type: "text" },
  ];

  const activityFields = [
    { name: "hoursActivityPerWeek", label: "Heures d'activité / semaine", placeholder: "Ex: 15-20h", type: "text" },
    { name: "stepsPerWeek", label: "Pas par semaine", placeholder: "Ex: Moyenne hebdo d'environ 12000", type: "text" },
  ];

  const measurementFields = [
    { name: "leftArm", label: "Bras gauche (cm)", placeholder: "Tour de bras gauche", type: "number", step: "0.1" },
    { name: "rightArm", label: "Bras droit (cm)", placeholder: "Tour de bras droit", type: "number", step: "0.1" },
    { name: "glutes", label: "Fessiers (cm)", placeholder: "Tour de fessiers", type: "number", step: "0.1" },
    { name: "leftThigh", label: "Jambe gauche (cm)", placeholder: "Tour de jambe gauche", type: "number", step: "0.1" },
    { name: "rightThigh", label: "Jambe droite (cm)", placeholder: "Tour de jambe droite", type: "number", step: "0.1" },
    { name: "shoulders", label: "Tour d'épaules (cm)", placeholder: "Tour d'épaules", type: "number", step: "0.1" },
    { name: "chest", label: "Tour de poitrine (cm)", placeholder: "Tour de poitrine", type: "number", step: "0.1" },
    { name: "waist", label: "Tour de taille (cm)", placeholder: "Tour de taille", type: "number", step: "0.1" },
  ];
  
  return (
    <div className="mx-auto max-w-4xl">
      <FormUnsavedBar
        form={form}
        onSubmit={async (v) => mutation.mutateAsync(v)}
        className="flex w-full flex-col gap-6"
      >
        {/* Informations personnelles */}
        <Card className="border-orange-500">
          <CardHeader className="py-4 text-center ">
            <CardTitle className=" text-orange-500">Informations personnelles</CardTitle>
            <CardDescription>Renseignez vos informations de base</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {personalInfoFields.map(({ name, label, placeholder, type }) => (
                <FormField
                  key={name}
                  control={form.control}
                  name={name as keyof SettingsAlimentaireFormType}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-gray-700">{label}</FormLabel>
                      <FormControl>
                        <Input
                          type={type}
                          placeholder={placeholder}
                          className="border-gray-300 focus:border-orange-400 focus:ring-orange-400"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
              <FormField
                control={form.control}
                name="pathology"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel className="font-medium text-gray-700">Pathologie, maladie</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Aucune pathologie ou décrivez vos conditions médicales"
                        className="border-gray-300 focus:border-orange-400 focus:ring-orange-400"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
        </Card>

        {/* Activité physique */}
        <Card className="border-orange-500">
          <CardHeader className="py-4 text-center">
            <CardTitle className=" text-orange-500">Activité physique</CardTitle>
            <CardDescription>Informations sur votre niveau d'activité</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {activityFields.map(({ name, label, placeholder, type }) => (
                <FormField
                  key={name}
                  control={form.control}
                  name={name as keyof SettingsAlimentaireFormType}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-gray-700">{label}</FormLabel>
                      <FormControl>
                        <Input
                          type={type}
                          placeholder={placeholder}
                          className="border-gray-300 focus:border-orange-400 focus:ring-orange-400"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Mensurations */}
        <Card className="border-orange-500">
          <CardHeader className="py-4 text-center">
            <CardTitle className=" text-orange-500">Mensurations</CardTitle>
            <CardDescription>Prenez vos mesures corporelles en centimètres</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {measurementFields.map(({ name, label, placeholder, type, step }) => (
                <FormField
                  key={name}
                  control={form.control}
                  name={name as keyof SettingsAlimentaireFormType}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-gray-700">{label}</FormLabel>
                      <FormControl>
                        <Input
                          type={type}
                          placeholder={placeholder}
                          step={step}
                          className="border-gray-300 focus:border-orange-400 focus:ring-orange-400"
                          {...field}
                          {...(type === "number" && {
                            onChange: (e) => field.onChange(e.target.value),
                          })}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Sommeil */}
        <Card className="border-orange-500">
          <CardHeader className="py-4 text-center">
            <CardTitle className=" text-orange-500">Heures de sommeil</CardTitle>
            <CardDescription>Décrivez vos habitudes de sommeil</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <FormField
              control={form.control}
              name="sleepHours"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-gray-700">Heures de sommeil</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Ex: 5h30-6h quand je vais à la salle, 7h30-9h jours où j'y vais pas"
                      className="border-gray-300 focus:border-orange-400 focus:ring-orange-400"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>
      </FormUnsavedBar>
    </div>
  );
};