import { Typography } from "@/components/ui/typography";
import { SectionLayout } from "../landing/SectionLayout";
import { EmailForm } from "./EmailForm";
import { LogoSvg } from "@/components/svg/LogoSubcribe";

export const EmailFormSection = () => {
  return (
    <SectionLayout
      size="xl"
      className="relative flex w-full flex-col items-center px-0"
    >
      <div
        className="relative -mb-28 h-[648px] w-full bg-cover bg-center lg:h-[929px]"
        style={{
          backgroundImage: `url('/images/salle-de-sport.jpg')`,
        }}
      >
        <div className="mx-auto flex h-full max-w-xl flex-col items-center gap-4 px-2 text-center">
          <LogoSvg className="mt-24 lg:mt-56" />
          <Typography
            variant="small"
            className="font-extrabold uppercase text-primary"
          >
            Rejoins la communauté
          </Typography>
          <Typography variant="h2" className="text-4xl lg:text-5xl">
            Ne manquez jamais une{" "}
            <span className="text-gradient bg-gradient-to-r from-orange-600 via-red-400 to-yellow-400 font-mono font-extrabold uppercase">
              actualité.
            </span>
          </Typography>
          <div className="mx-auto mt-6 w-full max-w-md rounded-[10px] text-black hover:border-orange-500">
            <EmailForm
              submitButtonLabel="Join"
              successMessage="Merci d'avoir rejoint la communauté!"
            />
          </div>
          <Typography variant="h3">
            Je partage de nombreux conseils et pratique chaque semaine dans mes articles !
          </Typography>
        </div>
      </div>
    </SectionLayout>
  );
};
