import type { PageParams } from "@/types/next";
import { SettingsAlimentaireForm } from "./SettingsAlimentaireForm";
import { getAlimentaireProfileAction } from "./settings.action";
import { auth } from "@/lib/auth/helper";
import { redirect } from "next/navigation";
import type { SettingsAlimentaireFormType } from "./settings.schema";

export default async function RoutePage(props: PageParams<{}>) {
  const user = await auth();
  const searchParams = props.searchParams;
  const profileId = searchParams.id as string | undefined;
  
  if (!user?.id) {
    redirect("/auth/signin");
  }
  
  try {
    // Fetch the user's current profile data
    const result = await getAlimentaireProfileAction({ 
      userId: user.id,
      profileId // Pass the profileId if it exists
    });
    
    // Extract the data from the safe action result
    let defaultValues: SettingsAlimentaireFormType;
    
    if (result && 'data' in result && result.data) {
      defaultValues = result.data;
    } else {
      defaultValues = {
        firstName: "",
        lastName: "",
        age: "",
        size: "",
        weight: "",
      };
    }
    
    return (
      <SettingsAlimentaireForm
        defaultValues={defaultValues}
        userId={user.id}
        profileId={profileId}
      />
    );
  } catch (error) {
    console.error("Error loading alimentaire profile:", error);
    return (
      <div className="p-4 text-center text-red-500">
        Une erreur est survenue lors du chargement de votre profil. Veuillez réessayer.
      </div>
    );
  }
}