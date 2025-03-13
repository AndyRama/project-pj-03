import type { PageParams } from "@/types/next";
import { SettingsAlimentaireForm } from "./SettingsAlimentaireForm";
import { getAlimentaireProfileAction } from "./settings.action";
import { auth } from "@/lib/auth";
import type { SettingsAlimentaireFormType } from "./settings.schema";

export default async function RoutePage(props: PageParams<{}>) {
  const session = await auth();
  
  if (!session?.user?.id) {
    return (
      <div className="p-4 text-center">
        Veuillez vous connecter pour accéder à cette page.
      </div>
    );
  }
  
  try {
    // Fetch the user's current profile data
    const result = await getAlimentaireProfileAction({ 
      userId: session.user.id 
    });
    
    // Handle the result properly
    const defaultValues: SettingsAlimentaireFormType = (result && !result.serverError && result.data) 
      ? result.data as SettingsAlimentaireFormType
      : {
          firstName: "",
          lastName: "",
          age: "",
          size: "",
          weight: "",
        };
    
    return (
      <SettingsAlimentaireForm
        defaultValues={defaultValues}
        userId={session.user.id}
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