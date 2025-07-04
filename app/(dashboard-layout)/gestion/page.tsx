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
import Link from "next/link";

const services = [
  { title: "n8n", description: "creation de workflow automatisation", link: "#" },
  { title: "Wisewand", description: "creation d'article optimiser SEO", link: "https://wisewand.ai/?fpr=andy78" },
  { title: "Gmail", description: "Adresse: dr.sarah.johson@gmail.com", link: "https://mail.google.com/" },
  { title: "cal.com", description: "Pour la gestion du calendrier et événement", link: "https://cal.com/" },
  { title: "Namecheap", description: "Permet de gérer le nom de domaine", link: "https://www.namecheap.com/" },
  { title: "NeonDb", description: "Pour la base de donnée de l'application", link: "https://neon.tech/" },
  { title: "Github", description: "Dépôt du code source de l'application", link: "https://github.com/" },
  { title: "Vercel", description: "Gestion de l'hébergement", link: "https://vercel.com/" },
  { title: "Resend", description: "Emailing pour l'application", link: "https://resend.com/" },
  { title: "Stripe", description: "Paiement avec module Stripe", link: "https://stripe.com/" },
];

export default async function RoutePage(props: PageParams) {
  return (
    <Layout>
      <LayoutHeader>
        <LayoutTitle>Gestion des services</LayoutTitle>
      </LayoutHeader>
      <LayoutContent>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="p-4">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
                <div className="flex flex-row gap-2">
                  <Button variant="default" size="sm" asChild className="rounded-[10px] hover:border hover:border-orange-600 hover:text-orange-600">
                    <Link href={service.link} target="_blank" rel="noopener noreferrer">
                      {service.title.split("")}
                    </Link>
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
