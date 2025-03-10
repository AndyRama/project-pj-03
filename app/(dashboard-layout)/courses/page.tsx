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
        <LayoutActions>
          <Button variant="outline">Retour</Button>
          <Button variant="default">Create</Button>
        </LayoutActions>
        <LayoutContent>
        </LayoutContent>
      </Layout>
    </div>
  );
};

export default CoursesPage;