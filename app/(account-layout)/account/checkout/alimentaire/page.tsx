import type { PageParams } from "@/types/next";
import { SettingsAlimentaireForm } from "./SettingsAlimentaireForm";

export default async function RoutePage(props: PageParams<{}>) {
  /**
   * Usually in this page you would fetch the data from the database
   * So the form mount with the current data
   */
  return (
    <SettingsAlimentaireForm
      defaultValues={{
        firstName: "",
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
      }} 
      userId={""} 
      profileId={undefined}    
    />
  );
}