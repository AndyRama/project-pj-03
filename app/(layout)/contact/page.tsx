import SubHero from "@/features/landing/SubHero";
import { Layout, LayoutContent } from "@/features/page/layout";

export default function page() {
  return (
    <>
      <SubHero
        className={""}
        title={"contacter"}
        subTitle={"Pour me"}
      />
      <Layout>
        <LayoutContent className="prose m-auto mb-8 dark:prose-invert"></LayoutContent>
      </Layout>
    </>
  );
}
