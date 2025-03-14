import { auth } from "@/lib/auth/helper";
import { prisma } from "@/lib/prisma";
import type { PageParams } from "@/types/next";
import { SettingsDetailsForm } from "./SettingsDetailsForm";
import { redirect } from "next/navigation";

export default async function RoutePage(props: PageParams<{}>) {
  const user = await auth();
  
  if (!user?.id) {
    redirect("/auth/signin");
  }
  
  // Fetch user data from database
  const userData = await prisma.user.findUnique({
    where: {
      id: user.id
    },
    select: {
      name: true,
      email: true
    }
  });
  
  return (
    <SettingsDetailsForm
      defaultValues={{
        name: userData?.name || "",
        email: userData?.email || "",
      }}
    />
  );
}