import SubHero from "@/features/landing/SubHero";
// import { Layout, LayoutContent } from "@/features/page/layout";
import { EmailFormSection } from "@/features/email/EmailFormSection";
import CardContact from "@/features/contact/card/CardContact";

export default function page() {
  return (
    <>
      <SubHero className={""} title={"contacter"} subTitle={"Pour me"} />

      <CardContact className="prose m-auto mb-8 dark:prose-invert" />

      <EmailFormSection />
    </>
  );
}
