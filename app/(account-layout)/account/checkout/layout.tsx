import { SettingsNavigation } from "@/features/layout/SettingsNavigation";
import {
  Layout,
  LayoutContent,
  LayoutDescription,
  LayoutHeader,
  LayoutTitle,
} from "@/features/page/layout";
import type { LayoutParams } from "@/types/next";

export default async function RouteLayout(
  props: LayoutParams<{ productId: string }>,
) {
  return (
    <Layout>
      <LayoutHeader>
        <LayoutTitle>Bienvenue sur Unlcoaching</LayoutTitle>
        <LayoutDescription>
          Merci d'avoir souscrit a notre service de coaching et affin d'elaborer votre plan allimentaire
          J'aurai besoins de quelque information personel a veuille a remplir le formulaire puis prendre rdv en viso
        </LayoutDescription>
      </LayoutHeader>
      <LayoutContent className="flex items-start gap-4 max-lg:flex-col">
        <SettingsNavigation
          links={[
            {
              href: `/account/checkout`,
              label: "Contacte",
              badge: "new"
            },
            {
              href: `/account/checkout/alimentaire`,
              label: "Formulaire",
              badge: "new"
            },
            {
              href: `/account/checkout/booking`,
              label: "Booking",
              badge: "new"
            },
          ]}
        />
        <div className="w-full flex-1">{props.children}</div>
      </LayoutContent>
    </Layout>
  );
}
