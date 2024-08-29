import { ContactSupportDialog } from "@/features/contact/support/ContactSupportDialog";
import Link from "next/link";
import { buttonVariants } from "../../components/ui/button";
import { Typography } from "../../components/ui/typography";
import { LogoSvg } from "@/components/svg/Logo";

export function Page400() {
  return (
    <main className="flex flex-col items-center gap-8">
      <LogoSvg size={24}/>
      <div className="max-w-lg space-y-3 text-center">
        <Typography variant="code">Erreur 400</Typography>
        <Typography variant="h1">Oh non ! Erreur inattendue.</Typography>
        <Typography>
          Il semblerait que nous rencontrions quelques difficultés techniques.
          Ne vous inquiétez pas, notre équipe y travaille. En attendant, essayez
          d'actualiser la page ou revenez nous voir un peu plus tard.
        </Typography>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/" className={buttonVariants({ variant: "invert" })}>
          Page d'accueil
        </Link>
        <ContactSupportDialog />
      </div>
    </main>
  );
}
