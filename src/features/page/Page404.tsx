import { ContactSupportDialog } from "@/features/contact/support/ContactSupportDialog";
import Link from "next/link";
import { buttonVariants } from "../../components/ui/button";
import { Typography } from "../../components/ui/typography";
import { LogoSvg } from "@/components/svg/Logo";

export function Page404() {
  return (
    <main className="flex flex-col items-center gap-8">
      <LogoSvg size={24}/>
      <div className="space-y-3 text-center">
        <Typography variant="code">404</Typography>
        <Typography variant="h1">Page non trouvée</Typography>
        <Typography>
          Désolé, nous n'avons pas pu trouver la page que vous recherchez maintenant.
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
