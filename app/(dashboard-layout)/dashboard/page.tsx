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
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-light">
                Articles Created
              </CardTitle>
              <CardTitle>201</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-light">
                Articles Published
              </CardTitle>
              <CardTitle>177</CardTitle>
            </CardHeader>
          </Card>
          <Card className="flex-1">
            <CardHeader>
              <CardTitle className="text-lg font-light">
                Actions Posts
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-end gap-1">
              <Link
                className={buttonVariants({ size: "sm", variant: "outline" })}
                href="#"
              >
                New
              </Link>
              <Link
                className={buttonVariants({ size: "sm", variant: "invert" })}
                href="#"
              >
                Update
              </Link>
            </CardContent>
          </Card>
          <Card className="flex-1">
            <CardHeader>
              <CardTitle className="text-lg font-light">
                Actions Posts
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-end gap-1">
              <Link
                className={buttonVariants({
                  size: "sm",
                  variant: "destructive",
                })}
                href="#"
              >
                Delete
              </Link>
            </CardContent>
          </Card>
        </div>
      </LayoutContent>
    </Layout>
  );
}
