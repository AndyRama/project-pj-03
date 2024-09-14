import { promises as fs } from 'fs';
import path from 'path';
import { Typography } from "@/components/ui/typography";
import { Layout, LayoutContent } from "@/features/page/layout";
import { MDXRemote } from "next-mdx-remote-client/rsc";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'terms.mdx');
  const fileContent = await fs.readFile(filePath, 'utf8');

  return {
    props: {
      markdown: fileContent,
    },
  };
}

export default function Page({ markdown }: { markdown: string }) {
  return (
    <div>
      <div className="flex w-full items-center justify-center bg-card p-8 lg:p-12">
        <Typography variant="h1">Terms</Typography>
      </div>
      <Layout>
        <LayoutContent className="prose m-auto mb-8 dark:prose-invert">
          <MDXRemote source={markdown} />
        </LayoutContent>
      </Layout>
    </div>
  );
}
