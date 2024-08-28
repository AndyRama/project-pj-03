import SubHero from "@/features/landing/SubHero";
import CardContact from "@/features/contact/card/CardContact";
import { EmailFormSection } from "@/features/email/EmailFormSection";

export default function page() {
  return (
    <>
      <SubHero className={""} title={"contacter"} subTitle={"Pour me"} />

      <CardContact/>

      <EmailFormSection />
    </>
  );
}
