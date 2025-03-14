import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/features/page/layout";
import type { PageParams } from "@/types/next";
import { SubscribersChart } from "./SubscribersChart";
import InformationCards from "./InformationCards";


export default async function RoutePage(props: PageParams<{}>) {
  return (
    <Layout>
      <LayoutHeader>
        <LayoutTitle>Dashboard</LayoutTitle>
      </LayoutHeader>
      <LayoutContent> 
        <InformationCards />  
        <SubscribersChart />
      </LayoutContent>
    </Layout>
  );
}
