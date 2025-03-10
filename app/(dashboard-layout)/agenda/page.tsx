import { Button } from "@/components/ui/button";
import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
  LayoutActions,
} from "@/features/page/layout";

const AlimentairePlanPage: React.FC = () => {
  return (
    <div className="mx-auto p-4">
      <Layout>
        <LayoutHeader>
          <LayoutTitle>Agenda | call visio</LayoutTitle>
        </LayoutHeader>
        <LayoutActions className="flex gap-2">          
          <Button variant="outline">Retour</Button>
          <Button variant="default">Create</Button>
        </LayoutActions>
        <LayoutContent>
        </LayoutContent>
      </Layout>
    </div>
  );
};

export default AlimentairePlanPage;