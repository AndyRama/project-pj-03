import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
  LayoutActions,
} from "@/features/page/layout";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { PageParams } from "@/types/next";
import { Button } from "@/components/ui/button";

const services = [
  { title: "Compte Gmail", description: "Adresse: dr.sarah.johson@gmail.com", link: "https://mail.google.com/" },
  { title: "Compte cal.com", description: "Pour la gestion du calendrier et événement", link: "https://cal.com/" },
  { title: "Compte Namecheap", description: "Permet de gérer le nom de domaine", link: "https://www.namecheap.com/" },
  { title: "Compte NeonDb", description: "Pour la base de donnée de l'application", link: "https://neon.tech/" },
  { title: "Compte Github", description: "Dépôt du code source de l'application", link: "https://github.com/" },
  { title: "Compte Vercel", description: "Gestion de l'hébergement", link: "https://vercel.com/" },
  { title: "Compte Resend", description: "Emailing pour l'application", link: "https://resend.com/" },
  { title: "Compte Stripe", description: "Paiement avec module Stripe", link: "https://stripe.com/" },
];

export default async function RoutePage(props: PageParams) {
  return (
    <Layout>
      <LayoutHeader>
        <LayoutTitle>Gestion des services</LayoutTitle>
      </LayoutHeader>
      <LayoutActions>
        <Button variant="default">05.56.34.94.69</Button>
      </LayoutActions>
      <LayoutContent>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="p-4">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
                <div className="flex flex-row gap-2">
                  <Button asChild className="rounded-[10px] hover:border-orange-600 hover:text-orange-600">
                    <a href={service.link} target="_blank" rel="noopener noreferrer">
                      {service.title.split(" ")[1]}
                    </a>
                  </Button>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </LayoutContent>
    </Layout>
  );
}
