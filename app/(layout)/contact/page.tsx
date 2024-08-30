import SubHero from "@/features/landing/SubHero";
import CardContact from "@/features/contact/card/CardContact";
import ContactForm from "@/features/contact/card/ContactForm";

export default function page() {
  return (
    <>
      <SubHero className={""} title={"contacter"} subTitle={"Pour me"} />

      <CardContact/>

      <ContactForm className="mt-20" />

    </>
  );
}
