// import { Typography } from "@/components/ui/typography";
import { Layout, LayoutContent } from "@/features/page/layout";
import { SubHero } from "@/features/landing/SubHero";

export default function page() {
  return (
    <>
      <SubHero
        className={""}
        title={"Le Coeur de la team"}
        subTitle={"Nos valeurs"}
      />

      <Layout>
        <LayoutContent className="prose m-auto mb-8 dark:prose-invert"></LayoutContent>
      </Layout>
    </>
  );
}
