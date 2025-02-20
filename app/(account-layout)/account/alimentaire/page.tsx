'use client';

import React from 'react';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useZodForm,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { SubmitButton } from '@/features/form/SubmitButton';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

const AlimentaireFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  size: z.preprocess(
    (val) => parseFloat(val as string),
    z.number().min(1, 'Size must be a positive number')
  ),
  age: z.preprocess(
    (val) => parseFloat(val as string),
    z.number().min(1, 'Age must be a positive number')
  ),
  weight: z.preprocess(
    (val) => parseFloat(val as string),
    z.number().min(1, 'Weight must be a positive number')
  ),
});

type AlimentaireFormType = z.infer<typeof AlimentaireFormSchema>;

const AlimentairePage: React.FC = () => {
  const form = useZodForm({
    schema: AlimentaireFormSchema,
    defaultValues: {
      firstName: '',
      lastName: '',
      size: '',
      age: '',
      weight: '',
    },
  });

  const createAlimentaireMutation = useMutation({
    mutationFn: async (values: AlimentaireFormType) => {
      const response = await fetch('/api/alimentaire', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Failed to save data');
      }
      return response.json();
    },
    onSuccess: () => {
      toast.success('Data saved successfully!');
      form.reset();
    },
    onError: () => {
      toast.error('Failed to save data');
    },
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">Create Plan Alimentaire</h1>
      <Form
        form={form}
        onSubmit={async (values) => createAlimentaireMutation.mutateAsync(values)}
        className="max-w-md space-y-4"
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="First Name" {...field} />
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
                <Input placeholder="Last Name" {...field} />
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
                <Input type="number" placeholder="Size in cm" {...field} />
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
                <Input type="number" placeholder="Age" {...field} />
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
                <Input type="number" step="0.1" placeholder="Weight in kg" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <SubmitButton className="w-full" size="md">
          Save
        </SubmitButton>
      </Form>
    </div>
  );
};

export default AlimentairePage;
