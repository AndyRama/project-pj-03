import type { PageParams } from "@/types/next";
import { SettingsDetailsForm } from "./../plan/SettingsDetailsForm";

export default async function RoutePage(props: PageParams<{}>) {
  return (
    <SettingsDetailsForm
      defaultValues={{
        name: "",
        email: "",
      }}
    />
  );
}
