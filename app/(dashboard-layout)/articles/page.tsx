import { Button } from "@/components/ui/button";
import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
  LayoutActions,
} from "@/features/page/layout";

const PostPage: React.FC = () => {
  return (
    <div className="mx-auto p-4">
      <Layout>
        <LayoutHeader>
          <LayoutTitle>Articles | page Create articles</LayoutTitle>
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


export default PostPage;