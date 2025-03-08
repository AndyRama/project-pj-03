import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/features/page/layout";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { PageParams } from "@/types/next";
import { Button } from "@/components/ui/button";
import { ContactSupportDialog } from "@/features/contact/support/ContactSupportDialog";

export default async function RoutePage(props: PageParams) {
  return (
    <Layout>
      <LayoutHeader>
        <LayoutTitle>Setup Page</LayoutTitle>
      </LayoutHeader>
      <LayoutContent>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
          <Card className="p-4">
            <CardHeader>
              <CardTitle>Support</CardTitle>
              <CardDescription>
                Contacter moi directement pour un support
              </CardDescription>
              <div className="flex flex-row gap-2">
                <ContactSupportDialog>
                  <Button variant="default" size="sm" className="mr-4">
                    Support
                  </Button>
                </ContactSupportDialog>
              </div>
            </CardHeader>
          </Card>

          <Card className="p-4">
            <CardHeader>
              <CardTitle>Compte cal.com </CardTitle>
              <CardDescription>
                Pour la gestion du calendrier et évenement
              </CardDescription>
              <div className="flex flex-row gap-2">
                <Button variant="default" className="rounded-[10px] border-orange-600 hover:text-orange-600">Calendrier</Button>
              </div>
            </CardHeader>
          </Card>

          <Card className="p-4">
            <CardHeader>
              <CardTitle>Compte Namecheap</CardTitle>
              <CardDescription>
                Permet de gérer le nom de domaine
              </CardDescription>
              <div className="flex flex-row gap-2">
                <Button variant="default" className="rounded-[10px] border-orange-600 hover:text-orange-600">Namecheap</Button>
              </div>
            </CardHeader>
          </Card>

          <Card className="p-4">
            <CardHeader>
              <CardTitle>Compte NeonDb</CardTitle>
              <CardDescription>
                Pour la base de donnée de l'application
              </CardDescription>
              <div className="flex flex-row gap-2">
                <Button variant="default" className="rounded-[10px] border-orange-600 hover:text-orange-600">Neon</Button>
              </div>
            </CardHeader>
          </Card>

          <Card className="p-4">
            <CardHeader>
              <CardTitle>Compte Gmail</CardTitle>
              <CardDescription>
                Adresse: dr.sarah.johson@gmail.com
              </CardDescription>
              <div className="flex flex-row gap-2">
                <Button variant="default" className="rounded-[10px] border-orange-600 hover:text-orange-600">Gmail</Button>
              </div>
            </CardHeader>
          </Card>

          <Card className="p-4">
            <CardHeader>
              <CardTitle>Compte Github</CardTitle>
              <CardDescription>
                Depot du code source de l'application
              </CardDescription>
              <div className="flex flex-row gap-2">
                <Button variant="default" className="rounded-[10px] border-orange-600 hover:text-orange-600">Github</Button>
              </div>
            </CardHeader>
          </Card>

          <Card className="p-4">
            <CardHeader>
              <CardTitle>Compte Vercel</CardTitle>
              <CardDescription>
                Gestion de Hébergement
              </CardDescription>
              <div className="flex flex-row gap-2">
                <Button variant="default" className="rounded-[10px] border-orange-600 hover:text-orange-600">Vercel</Button>
              </div>
            </CardHeader>
          </Card>

          <Card className="p-4">
            <CardHeader>
              <CardTitle>Compte Resend</CardTitle>
              <CardDescription>
                Emailling pour l'application
              </CardDescription>
              <div className="flex flex-row gap-2">
                <Button variant="default" className="rounded-[10px] border-orange-600 hover:text-orange-600">Resend</Button>
              </div>
            </CardHeader>
          </Card>

          <Card className="p-4">
            <CardHeader>
              <CardTitle>Compte Stripe</CardTitle>
              <CardDescription>
                Paiement avec module stripe
              </CardDescription>
              <div className="flex flex-row gap-2">
                <Button variant="default" className="rounded-[10px] border-orange-600 hover:text-orange-600">Stripe</Button>
              </div>
            </CardHeader>
          </Card>

        </div>
      </LayoutContent>
    </Layout>
  );
}