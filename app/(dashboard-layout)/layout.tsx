import type { LayoutParams } from "@/types/next";
import { DashboardNavigation } from "./DashboardNavigation";
import { useUserRole } from "@/hooks/useUserRole";
import { AccountNavigation } from "../(account-layout)/AccountNavigation";

export default function RouteLayout(props: LayoutParams<{}>) {
  const { isSuperAdmin } = useUserRole();

  if (isSuperAdmin) {
    return <DashboardNavigation>{props.children}</DashboardNavigation>;
  } else {
    return <AccountNavigation>{props.children}</AccountNavigation>;
  }
}
