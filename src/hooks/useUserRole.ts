import { useSession } from "next-auth/react";
import { UserPlan } from "@prisma/client";

export const useUserRole = () => {
  const { data: session } = useSession();
  const user = session?.user;
  
  const isSuperAdmin = user?.plan === UserPlan.SUPER_ADMIN;
  
  return {
    isSuperAdmin,
    userPlan: user?.plan || UserPlan.FREE
  };
};