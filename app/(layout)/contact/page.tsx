import SubHero from "@/features/landing/SubHero";
import { Layout, LayoutContent } from "@/features/page/layout";
import { EmailFormSection } from "@/features/email/EmailFormSection";
import {CardInfo} from "@/features/contact/card/CardInfo";


export default function page() {
  return (
    <>
      <SubHero
        className={""}
        title={"contacter"}
        subTitle={"Pour me"}
      />
        <CardInfo/>

      <Layout>
        <LayoutContent className="prose m-auto mb-8 dark:prose-invert">
        </LayoutContent>
      </Layout>
      
      <EmailFormSection />
    </>
  );
}
