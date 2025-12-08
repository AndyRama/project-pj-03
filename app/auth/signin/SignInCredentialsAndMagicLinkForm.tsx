"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Typography } from "@/components/ui/typography";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useLocalStorage } from "react-use";
import { z } from "zod";

const LoginCredentialsFormScheme = z.object({
  email: z.string().email(),
  password: z.string().min(8).optional(),
});

type LoginCredentialsFormType = z.infer<typeof LoginCredentialsFormScheme>;

export const SignInCredentialsAndMagicLinkForm = () => {
  const form = useForm<LoginCredentialsFormType>({
    resolver: zodResolver(LoginCredentialsFormScheme),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const searchParams = useSearchParams();
  const [isUsingCredentials, setIsUsingCredentials] = useLocalStorage(
    "sign-in-with-credentials",
    false,
  );

  async function onSubmit(values: LoginCredentialsFormType) {
    if (isUsingCredentials) {
      await signIn("credentials", {
        email: values.email,
        password: values.password,
        callbackUrl: searchParams.get("callbackUrl") ?? undefined,
      });
    } else {
      await signIn("email", {
        email: values.email,
        callbackUrl: searchParams.get("callbackUrl") ?? undefined,
      });
    }
  }

  const handleFormSubmit = form.handleSubmit(onSubmit);

  return (
    <form onSubmit={handleFormSubmit} className="max-w-lg space-y-4">
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            {isUsingCredentials ? <FormLabel>Email</FormLabel> : null}
            <FormControl>
              <Input placeholder="john@doe.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {isUsingCredentials ? (
        <>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </>
      ) : (
        <Typography
          variant="link"
          as="button"
          type="button"
          className="text-sm"
          onClick={() => {
            setIsUsingCredentials(true);
          }}
        >
          Use password
        </Typography>
      )}

      <Button type="submit" className="w-full">
        {isUsingCredentials ? "Login with Password" : "Login with MagicLink"}
      </Button>

      {isUsingCredentials && (
        <Typography variant="small">
          Forgot password ?{" "}
          <Typography
            variant="link"
            as="button"
            type="button"
            onClick={() => {
              setIsUsingCredentials(false);
            }}
          >
            Login with magic link
          </Typography>
        </Typography>
      )}
    </form>
  );
};