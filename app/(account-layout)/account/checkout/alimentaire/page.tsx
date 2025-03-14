import { redirect } from "next/navigation";

export default async function RoutePage() {
  // Redirect to the alimentaire (Formulaire) page by default
  redirect("/account/checkout/alimentaire");
}