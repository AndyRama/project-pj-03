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
          Merci d'avoir souscrit à notre service de coaching et afin d'élaborer votre plan allimentaire. <br/>
          J'aurai besoins de quelques informations personel pour le réaliser veuille  completer le formulaire puis prendre un rendez-vous.
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
