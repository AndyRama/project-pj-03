import { Button } from "@/components/ui/button";
import {
    Layout,
    LayoutContent,
    LayoutTitle,
    LayoutHeader,
    LayoutActions,
  } from "@/features/page/layout";
  import type { LayoutParams } from "@/types/next";
    
  export default async function RouteLayout(
    props: LayoutParams<{ productId: string }>,
  ) {
    return (
      <Layout>
        <LayoutHeader>
          <LayoutTitle>Bilan mensuel</LayoutTitle>
        </LayoutHeader>
        <LayoutActions className="flex gap-2">
          <Button variant="outline">Retour</Button>
          <Button variant="default">Create</Button>
        </LayoutActions>
        <LayoutContent>
        </LayoutContent>
      </Layout>
    );
  }
  