"use client";

import { HeaderBase } from "./HeaderBase";
import { Typography } from "@/components/ui/typography";
import { UserPlan } from "@prisma/client";
import { useUserRole } from "@/hooks/useUserRole";

export function SuperAdminHeader() {
  const { userPlan } = useUserRole();
  
  return (
    <HeaderBase>
      {userPlan === UserPlan.SUPER_ADMIN && (
        <div className="flex items-center">
          <Typography variant="h3" className="font-bold text-primary">
            Super Admin Panel
          </Typography>
        </div>
      )}
    </HeaderBase>
  );
}