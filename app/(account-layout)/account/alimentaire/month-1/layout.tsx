import {
  Layout,
  LayoutContent,
  LayoutTitle,
} from "@/features/page/layout";
import type { LayoutParams } from "@/types/next";

export default async function RouteLayout(
  props: LayoutParams<{ productId: string }>,
) {
  return (
    <>
      <Layout>
        <LayoutTitle>Plan Alimentaire month 1</LayoutTitle>
        <LayoutContent className="mt-8 flex items-start gap-4 max-lg:flex-col">
          <div className="w-full flex-1">{props.children}</div>
        </LayoutContent>
      </Layout>
    </>
  );
}
