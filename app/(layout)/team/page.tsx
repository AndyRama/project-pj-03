import { SubHero } from "@/features/landing/SubHero";
import { EmailFormSection } from "@/features/email/EmailFormSection";
import { StoryCardGrid } from "@/features/team/StoryCard";

export default function page() {
  return (
    <>
      <SubHero
        className={""}
        title={"Le Coeur de la team"}
        subTitle={"Nos valeurs"}
      />
      <StoryCardGrid />
      <EmailFormSection />
    </>
  );
}
