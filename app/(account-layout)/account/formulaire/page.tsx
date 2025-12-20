import { auth } from "@/lib/auth/helper";
import { prisma } from "@/lib/prisma";
import type { PageParams } from "@/types/next";
import { SettingsAlimentaireForm } from "./SettingsAlimentaireForm";
import { redirect } from "next/navigation";

export default async function RoutePage(props: PageParams<{}>) {
  const user = await auth();
  
  if (!user?.id) {
    redirect("/auth/signin");
  }
  
  // Fetch existing alimentaire profile
  const existingProfile = await prisma.alimentaireProfile.findFirst({
    where: {
      userId: user.id
    }
  });
  
  // Prepare default values
  const defaultValues = existingProfile ? {
    age: existingProfile.age?.toString() || "",
    profession: existingProfile.profession || "",
    pathology: existingProfile.pathology || "",
    hoursActivityPerWeek: existingProfile.hoursActivityPerWeek || "",
    stepsPerWeek: existingProfile.stepsPerWeek || "",
    leftArm: existingProfile.leftArm?.toString() || "",
    rightArm: existingProfile.rightArm?.toString() || "",
    glutes: existingProfile.glutes?.toString() || "",
    leftThigh: existingProfile.leftThigh?.toString() || "",
    rightThigh: existingProfile.rightThigh?.toString() || "",
    shoulders: existingProfile.shoulders?.toString() || "",
    chest: existingProfile.chest?.toString() || "",
    waist: existingProfile.waist?.toString() || "",
    sleepHours: existingProfile.sleepHours || "",
    size: existingProfile.size?.toString() || "",
    weight: existingProfile.weight?.toString() || "",
  } : {
    age: "",
    profession: "",
    pathology: "",
    hoursActivityPerWeek: "",
    stepsPerWeek: "",
    leftArm: "",
    rightArm: "",
    glutes: "",
    leftThigh: "",
    rightThigh: "",
    shoulders: "",
    chest: "",
    waist: "",
    sleepHours: "",
    size: "",
    weight: "",
  };
  
  return (
    <SettingsAlimentaireForm
      defaultValues={defaultValues}
      userId={user.id}
      profileId={existingProfile?.id}
    />
  );
}