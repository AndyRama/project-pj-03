import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/features/page/layout";
import type { PageParams } from "@/types/next";
import Link from "next/link";
import InformationCards from "./InformationCards";
import { SubscribersChart } from "./SubscribersChart";
import {
  Database,
  ReceiptEuro,
  Mails,
  Building2,
  TrendingUp,
} from "lucide-react";

export default async function RoutePage(props: PageParams<{}>) {
  return (
    <Layout>
      <LayoutHeader>
        <LayoutTitle>Dashboard</LayoutTitle>
      </LayoutHeader>
      <LayoutContent className="flex flex-col gap-4 lg:gap-8">
        <InformationCards />
        <SubscribersChart />
        <div className="flex flex-wrap items-start gap-4">
          <Card className="flex-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4 pb-2">
              <CardTitle className="text-lg font-light">Cal.com</CardTitle>
              <TrendingUp className="size-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="flex justify-end gap-1">
              <Link
                className={buttonVariants({
                  size: "sm",
                  variant: "outline",
                })}
                href="https://cal.com/login"
                target="_blank"
              >
                Calendrier
              </Link>
            </CardContent>
          </Card>
          <Card className="flex-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4 pb-2">
              <CardTitle className="text-lg font-light">Paiement</CardTitle>
              <ReceiptEuro className="size-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="flex justify-end gap-1">
              <Link
                className={buttonVariants({ size: "sm", variant: "outline" })}
                href="https://www.stripe.com"
                target="_blank"
              >
                Stripe
              </Link>
            </CardContent>
          </Card>
          <Card className="flex-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4 pb-2">
              <CardTitle className="text-lg font-light">Hebergement</CardTitle>
              <Building2 className="size-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="flex justify-end gap-1">
              <Link
                className={buttonVariants({
                  size: "sm",
                  variant: "outline",
                })}
                href="https://www.vercel.com"
                target="_blank"
              >
                vercel
              </Link>
            </CardContent>
          </Card>
          <Card className="flex-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4 pb-2">
              <CardTitle className="text-lg font-light">Emailling</CardTitle>
              <Mails className="size-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="flex justify-end gap-1">
              <Link
                className={buttonVariants({
                  size: "sm",
                  variant: "outline",
                })}
                href="https://www.resend.com"
                target="_blank"
              >
                Resend
              </Link>
            </CardContent>
          </Card>
          <Card className="flex-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4 pb-2">
              <CardTitle className="text-lg font-light">
                Base de donnée
              </CardTitle>
              <Database className="size-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="flex justify-end gap-1">
              <Link
                className={buttonVariants({
                  size: "sm",
                  variant: "outline",
                })}
                href="https://console.neon.tech/login"
                target="_blank"
              >
                NeonDB
              </Link>
            </CardContent>
          </Card>
        </div>
      </LayoutContent>
    </Layout>
  );
}
