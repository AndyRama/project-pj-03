import { requiredAuth } from "@/lib/auth/helper";
import type { LayoutParams } from "@/types/next";

export default async function RouteLayout(props: LayoutParams<{}>) {
  await requiredAuth();
  
  return <>{props.children}</>;
}