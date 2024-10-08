import { promises as fs } from 'fs';
import path from 'path';
import { Typography } from "@/components/ui/typography";
import { Layout, LayoutContent } from "@/features/page/layout";
import { MDXRemote } from "next-mdx-remote-client/rsc";

export default async function Page() {
  // Read the markdown file on the server
  const filePath = path.join(process.cwd(), 'content', 'terms.mdx');
  const fileContent = await fs.readFile(filePath, 'utf8');

  return (
    <div>
      <div className="flex w-full items-center justify-center bg-card p-8 text-center lg:p-12">
        <Typography variant="h1">Mentions légales <br/> & Politique de confidentialité</Typography>
      </div>
      <Layout>
        <LayoutContent className="prose m-auto mb-8 dark:prose-invert">
          {/* Render the markdown content */}
          <MDXRemote source={fileContent} />
        </LayoutContent>
      </Layout>
    </div>
  );
}
