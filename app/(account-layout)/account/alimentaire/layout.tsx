import {
  Layout,
  LayoutContent,
  LayoutDescription,
  LayoutHeader,
  LayoutTitle,
} from "@/features/page/layout";
import type { LayoutParams } from "@/types/next";
import { SettingsNavigation } from "@/features/layout/SettingsNavigation";


export default async function RouteLayout(
  props: LayoutParams<{ productId: string }>,
) {
  return (
    <>
      <Layout>
        <LayoutTitle>Plan Alimentaire</LayoutTitle>
        <LayoutHeader>

          <LayoutDescription>
            Afin que je puisse repondre parfaitement a votre besoins veuillez remplire le formulaire.
            Je vous enverrez le plan alimentaire par Email et nous pourrons en discuter ensemble lors
            de notre 1 er call.
          </LayoutDescription>

        </LayoutHeader>
        <LayoutContent className="mt-8 flex items-start gap-4 max-lg:flex-col">
          <SettingsNavigation
            links={[
              {
                href: `alimentaire`,
                label: "Plan alimentaire",
                badge: ""
              },
            ]}
          />
          <div className="w-full flex-1">{props.children}</div>
        </LayoutContent>
      </Layout>
    </>
  );
}
