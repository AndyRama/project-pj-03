import { Button } from "@/components/ui/button";
import {
  Layout,
  LayoutActions,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/features/page/layout";
import type { PageParams } from "@/types/next";
import { DonutChart } from "./donuts-chart";
import { UsersChart } from "./users-chart";

export default async function RoutePage(props: PageParams<{}>) {
  return (
    <Layout>
      <LayoutHeader>
        <LayoutTitle>Tableau récaptitulatif des applications</LayoutTitle>
      </LayoutHeader>
      <LayoutActions className="hidden gap-6 lg:flex">
        <Button variant="outline">Delete</Button>
        <Button variant="invert">Create</Button>
      </LayoutActions>
      <LayoutContent className="mt-10 flex flex-wrap justify-center gap-2 md:mt-20 md:gap-6">
        <DonutChart />
        <DonutChart />
        <UsersChart />
        <UsersChart />
      </LayoutContent>
    </Layout>
  );
}
