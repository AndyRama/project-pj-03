"use client";

import { HeaderBase } from "./HeaderBase";
import { SuperAdminHeader } from "./SuperAdminHeader";
import { useUserRole } from "@/hooks/useUserRole";

export function Header() {
  const { isSuperAdmin } = useUserRole();
  
  return isSuperAdmin ? <SuperAdminHeader /> : <HeaderBase />;
}