'use client'

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
//   Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Type pour le profil alimentaire
type AlimentaireProfileData = {
  id?: string;
  size: number;
  age: number;
  weight: number;
  userId?: string;
};

// Schéma de validation pour le formulaire
const calculatorSchema = z.object({
  gender: z.enum(["male", "female"], {
    required_error: "Veuillez sélectionner votre genre",
  }),
  age: z.coerce.number().int().min(15).max(100),
  weight: z.coerce.number().positive().min(30).max(300),
  height: z.coerce.number().int().min(100).max(250),
  activityLevel: z.enum(["sedentary", "light", "moderate", "active", "very-active"]),
  goal: z.enum(["lose", "maintain", "gain"]),
});

// Type inféré à partir du schéma zod
type CalculatorFormValues = z.infer<typeof calculatorSchema>;

// Type pour les résultats du calcul
type CalorieResult = {
  bmr: number;
  tdee: number;
  goalCalories: number;
  macros: {
    protein: number;
    carbs: number;
    fats: number;
  };
};

interface CalorieCalculatorModalProps {
  profileData?: AlimentaireProfileData | null;
}

export function CalorieCalculatorModal({ profileData }: CalorieCalculatorModalProps) {
  const [result, setResult] = useState<CalorieResult | null>(null);
  
  // Initialiser le formulaire avec les données du profil si disponibles
  const form = useForm<CalculatorFormValues>({
    resolver: zodResolver(calculatorSchema),
    defaultValues: {
      gender: "male",
      age: profileData?.age || 30,
      weight: profileData?.weight || 70,
      height: profileData?.size || 170,
      activityLevel: "sedentary",
      goal: "maintain",
    },
  });

  const calculateCalories = (data: CalculatorFormValues): CalorieResult => {
    // Formule Harris-Benedict
    let bmr = 0;
    
    if (data.gender === "male") {
      bmr = 88.362 + (13.397 * data.weight) + (4.799 * data.height) - (5.677 * data.age);
    } else {
      bmr = 447.593 + (9.247 * data.weight) + (3.098 * data.height) - (4.330 * data.age);
    }
    
    // Facteur d'activité
    const activityFactors = {
      sedentary: 1.2,     // Peu ou pas d'exercice
      light: 1.375,       // Exercice léger 1-3 fois/semaine
      moderate: 1.55,     // Exercice modéré 3-5 fois/semaine
      active: 1.725,      // Exercice intense 6-7 fois/semaine
      "very-active": 1.9, // Exercice très intense, travail physique
    };
    
    const tdee = bmr * activityFactors[data.activityLevel];
    
    // Ajustement selon l'objectif
    let goalCalories = tdee;
    let protein = 0;
    let carbs = 0;
    let fats = 0;
    
    if (data.goal === "lose") {
      goalCalories = tdee - 500; // Déficit de 500 calories pour perte de poids
      protein = (data.weight * 2.2); // 2.2g/kg pour préserver la masse musculaire
      fats = ((goalCalories * 0.25) / 9); // 25% des calories
      carbs = ((goalCalories - (protein * 4) - (fats * 9)) / 4); // Le reste en glucides
    } else if (data.goal === "maintain") {
      protein = (data.weight * 1.6); // 1.6g/kg pour maintien
      fats = ((goalCalories * 0.30) / 9); // 30% des calories
      carbs = ((goalCalories - (protein * 4) - (fats * 9)) / 4);
    } else if (data.goal === "gain") {
      goalCalories = tdee + 500; // Surplus de 500 calories pour prise de masse
      protein = (data.weight * 2); // 2g/kg pour favoriser la synthèse protéique
      fats = ((goalCalories * 0.25) / 9); // 25% des calories
      carbs = ((goalCalories - (protein * 4) - (fats * 9)) / 4); // Le reste en glucides
    }
    
    return {
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
      goalCalories: Math.round(goalCalories),
      macros: {
        protein: Math.round(protein),
        carbs: Math.round(carbs),
        fats: Math.round(fats),
      }
    };
  };

  const onSubmit = (data: CalculatorFormValues) => {
    try {
      const calorieData = calculateCalories(data);
      setResult(calorieData);
      // Notification sans utiliser use-toast
      alert("Calcul effectué avec succès");
    } catch (error) {
      console.error(error);
      alert("Une erreur est survenue lors du calcul");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Calculatrice de besoins caloriques</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Calculatrice de besoins caloriques</DialogTitle>
          <DialogDescription>
            Calculez vos besoins caloriques et macronutriments en fonction de vos caractéristiques et objectifs.
          </DialogDescription>
        </DialogHeader>
        
        <Tabs defaultValue="calculator" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="calculator">Calculatrice</TabsTrigger>
            <TabsTrigger value="results" disabled={!result}>Résultats</TabsTrigger>
          </TabsList>
          
          <TabsContent value="calculator">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel>Genre</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex space-x-4"
                      >
                        <FormItem className="flex items-center space-x-2">
                          <FormControl>
                            <RadioGroupItem value="male" />
                          </FormControl>
                          <FormLabel className="font-normal">Homme</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2">
                          <FormControl>
                            <RadioGroupItem value="female" />
                          </FormControl>
                          <FormLabel className="font-normal">Femme</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="age"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Âge</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Âge" {...field} />
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
                      <FormLabel>Poids (kg)</FormLabel>
                      <FormControl>
                        <Input type="number" step="0.1" placeholder="Poids" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="height"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Taille (cm)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Taille" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="activityLevel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Niveau d'activité</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez votre niveau d'activité" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="sedentary">Sédentaire (peu ou pas d'exercice)</SelectItem>
                        <SelectItem value="light">Légèrement actif (exercice léger 1-3 fois/semaine)</SelectItem>
                        <SelectItem value="moderate">Modérément actif (exercice modéré 3-5 fois/semaine)</SelectItem>
                        <SelectItem value="active">Très actif (exercice intense 6-7 fois/semaine)</SelectItem>
                        <SelectItem value="very-active">Extrêmement actif (exercice très intense, travail physique)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="goal"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Objectif</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez votre objectif" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="lose">Perte de poids</SelectItem>
                        <SelectItem value="maintain">Maintien du poids</SelectItem>
                        <SelectItem value="gain">Prise de masse</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <DialogFooter>
                <Button type="submit">Calculer</Button>
              </DialogFooter>
            </form>
          </TabsContent>
          
          <TabsContent value="results">
            {result && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg border bg-muted/50 p-4">
                    <h3 className="mb-2 font-semibold">Métabolisme de base</h3>
                    <p className="text-2xl font-bold">{result.bmr} kcal</p>
                    <p className="text-sm text-muted-foreground">Calories brûlées au repos</p>
                  </div>
                  
                  <div className="rounded-lg border bg-muted/50 p-4">
                    <h3 className="mb-2 font-semibold">Dépense énergétique totale</h3>
                    <p className="text-2xl font-bold">{result.tdee} kcal</p>
                    <p className="text-sm text-muted-foreground">Avec niveau d'activité</p>
                  </div>
                </div>
                
                <div className="rounded-lg border bg-primary/10 p-4">
                  <h3 className="mb-2 font-semibold">Objectif recommandé</h3>
                  <p className="text-3xl font-bold text-primary">{result.goalCalories} kcal</p>
                  <p className="text-sm text-muted-foreground">Consommation quotidienne recommandée</p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-semibold">Répartition des macronutriments</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="rounded-lg border p-3">
                      <p className="text-sm font-medium">Protéines</p>
                      <p className="text-xl font-bold">{result.macros.protein}g</p>
                      <p className="text-xs text-muted-foreground">{Math.round(result.macros.protein * 4)} kcal</p>
                    </div>
                    <div className="rounded-lg border p-3">
                      <p className="text-sm font-medium">Glucides</p>
                      <p className="text-xl font-bold">{result.macros.carbs}g</p>
                      <p className="text-xs text-muted-foreground">{Math.round(result.macros.carbs * 4)} kcal</p>
                    </div>
                    <div className="rounded-lg border p-3">
                      <p className="text-sm font-medium">Lipides</p>
                      <p className="text-xl font-bold">{result.macros.fats}g</p>
                      <p className="text-xs text-muted-foreground">{Math.round(result.macros.fats * 9)} kcal</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}