import {
  Layout,
  LayoutContent,
  LayoutTitle,
  LayoutHeader,
} from "@/features/page/layout";
import type { LayoutParams } from "@/types/next";
import { Carrot } from "lucide-react";


export default async function RouteLayout(
  props: LayoutParams<{ productId: string }>,
) {
  return (    
    <div>
      <Layout>
        <LayoutHeader>          
          <LayoutTitle>
            <span><Carrot/></span>
            Plan Alimentaire
          </LayoutTitle>
        </LayoutHeader>
        <LayoutContent className="mt-8 flex items-start gap-4 max-lg:flex-col"> 
          <div className="w-full flex-1">{props.children}</div>
        </LayoutContent>
      </Layout>
    </div>
  );
}
