import {
  Layout,
  LayoutContent,
  LayoutTitle,
} from "@/features/page/layout";
import type { LayoutParams } from "@/types/next";
import { Carrot } from "lucide-react";


export default async function RouteLayout(
  props: LayoutParams<{ productId: string }>,
) {
  return (
    <>
      <Layout>

        <LayoutTitle><span><Carrot /></span>Plan Alimentaire</LayoutTitle>
        <LayoutContent className="mt-8 flex items-start gap-4 max-lg:flex-col">
          <div className="w-full flex-1">{props.children}</div>
        </LayoutContent>
      </Layout>
    </>
  );
}
