import { Typography } from "@/components/ui/typography";
import { SectionLayout } from "../landing/SectionLayout";
import { EmailForm } from "./EmailForm";
import { LogoSvg } from "@/components/svg/LogoSubcribe";

export const EmailFormSection = () => {
  return (
    <SectionLayout
      size="lg"
      className="relative flex w-full flex-col items-center gap-16"
    >
    {/* logo */}
      <div >
        <LogoSvg/>
      </div>
      <div className="relative m-auto flex max-w-xl flex-col gap-4 text-center">
        <Typography
          variant="small"
          className="font-extrabold uppercase text-primary"
        >
          Rejoinds la communauté 
        </Typography>
        <Typography variant="h2" className="text-center text-4xl lg:text-5xl">
          Ne manquez jamais une{" "}
          <span className="text-gradient bg-gradient-to-r from-orange-600 via-red-400 to-yellow-400 font-mono font-extrabold uppercase">
          actualité.
          </span>
        </Typography>
        <div className="mx-auto mt-6 w-full max-w-md text-black">
          <EmailForm
            submitButtonLabel="Join"
            successMessage="Merci d'avoir rejoint la communauté!"
          />
        </div>
        <Typography variant="h3">
          Je partage de nombreux conseils et pratique chaques semaines dans mes articles !
        </Typography>
      </div>
    </SectionLayout>
  );
};
