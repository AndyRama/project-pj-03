import Link from "next/link";
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
                href: `/settings`,
                label: "Général",
                badge: ""
              },
              {
                href: `/settings/plan`,
                label: "Plan alimentaire",
                badge: "important"
              },
            ]}
          />
          <div className="w-full flex-1">{props.children}</div>
        </LayoutContent>

      </Layout>
      <Layout>
        <LayoutTitle>Plan Alimentaire</LayoutTitle>
        <LayoutHeader>
          <LayoutDescription>
            Prennez rendez-vous pous notre 1er call, qui sera fait en viso details dans la page de Calendly.
          </LayoutDescription>
        </LayoutHeader>
        <LayoutActions className="hidden gap-6 lg:flex">
          <Link href="#" target="_blank">
            <Button variant="invert">Finalinsez en prenant RDV</Button>
          </Link>
        </LayoutActions>
      </Layout>
    </>
  );
}
