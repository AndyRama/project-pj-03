import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/features/page/layout";
import type { PageParams } from "@/types/next";
import { SubscribersChart } from "./SubscribersChart";
import InformationCards from "./InformationCards";
import InformationCards2 from "./InformationCards2";

export default async function RoutePage(props: PageParams<{}>) {
  return (
    <Layout>
      <LayoutHeader>
        <LayoutTitle>Dashboard | Admin</LayoutTitle>
      </LayoutHeader>
      <LayoutContent> 
        <InformationCards />  
        <InformationCards2 />  
        <SubscribersChart />
      </LayoutContent>
    </Layout>
  );
}
