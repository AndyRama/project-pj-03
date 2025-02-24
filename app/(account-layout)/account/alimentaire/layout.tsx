import {
  Layout,
  LayoutContent,
  LayoutDescription,
  LayoutHeader,
  LayoutTitle,
  LayoutActions,
} from "@/features/page/layout";
import { Button } from "@/components/ui/button";
import type { LayoutParams } from "@/types/next";
import { SettingsNavigation } from "@/features/layout/SettingsNavigation";

export default async function RouteLayout(
  props: LayoutParams<{ productId: string }>,
) {
  return (
    <Layout>
      <LayoutTitle>Plan Alimentaire</LayoutTitle>
      <LayoutHeader>
        <LayoutActions className="hidden gap-6 lg:flex">
          <Button variant="invert">Booking a visio</Button>
        </LayoutActions>
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
              href: `/settings`,
              label: "Utilisateur",
              badge: ""
            },
            {
              href: `/settings/notifications`,
              label: "information",
              badge: ""
            },
          ]}
        />
        <div className="w-full flex-1">{props.children}</div>
      </LayoutContent>
    </Layout>
  );
}
