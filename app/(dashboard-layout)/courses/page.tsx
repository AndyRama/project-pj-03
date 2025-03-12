import { Button } from "@/components/ui/button";
import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
  LayoutActions,
} from "@/features/page/layout";

const CoursesPage: React.FC = () => {
  return (
    <div className="mx-auto p-4">
      <Layout>
        <LayoutHeader>
          <LayoutTitle>Cours | page Create cours</LayoutTitle>
        </LayoutHeader>
        <LayoutActions className="flex gap-2">
          <Button variant="outline" size="sm">Retour</Button>
          <Button variant="default" size="sm">Create</Button>
        </LayoutActions>
        <LayoutContent>
        </LayoutContent>
      </Layout>
    </div>
  );
};

export default CoursesPage;