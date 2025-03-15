import type { LayoutParams } from "@/types/next";
import { DashboardNavigation } from "./DashboardNavigation";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth/helper";

export default async function RouteLayout(props: LayoutParams<{}>) {
  // Get the user using the auth helper function
  const user = await auth();
  
  // If not logged in, redirect to sign in
  if (!user) {
    redirect("/auth/signin");
  }
  
  // Check if user has SUPER_ADMIN plan
  const isSuperAdmin = user.plan === "SUPER_ADMIN";
  
  // If not SUPER_ADMIN, redirect to account page
  if (!isSuperAdmin) {
    redirect("/account");
  }
  
  // If user is SUPER_ADMIN, render dashboard layout
  return <DashboardNavigation>{props.children}</DashboardNavigation>;
}