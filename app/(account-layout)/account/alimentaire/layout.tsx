import {
  Layout,
  LayoutContent,
  LayoutDescription,
  LayoutHeader,
  LayoutTitle,
} from "@/features/page/layout";
import type { LayoutParams } from "@/types/next";
// import { SettingsNavigation } from "@/features/layout/SettingsNavigation";


export default async function RouteLayout(
  props: LayoutParams<{ productId: string }>,
) {
  return (
    <>
      <Layout>
        <LayoutTitle>Plan Alimentaire</LayoutTitle>
        {/* <LayoutHeader>
          <LayoutDescription>
            Veuillez remplire ce formulaire. je vous crée un plan alimentaire qui vous sera envoyer par Email.
          </LayoutDescription>
        </LayoutHeader> */}
        <LayoutContent className="mt-8 flex items-start gap-4 max-lg:flex-col">
          <div className="w-full flex-1">{props.children}</div>
        </LayoutContent>
      </Layout>
    </>
  );
}
