import { buttonVariants } from "@/components/ui/button";
import {
  Layout,
  LayoutContent,
  LayoutDescription,
  LayoutHeader,
  LayoutTitle,
} from "@/features/page/layout";
import Link from "next/link";

export default function SuccessPaymentPage() {
  return (
    <>
      <Layout>
        <LayoutHeader>
          <LayoutTitle>Merci pour votre achat !</LayoutTitle>
          <LayoutDescription>
            Votre paiement a réussi ! Vous avez désormais un accès complet à tous nos
            ressources premium. Si vous avez des questions, nous sommes là pour vous aider.
          </LayoutDescription>
        </LayoutHeader>
        <LayoutContent>
        <LayoutTitle>Completer le formulaire</LayoutTitle>
          <LayoutDescription>
            Votre paiement a réussi ! Vous avez désormais un accès complet à tous nos
            ressources premium. Si vous avez des questions, nous sommes là pour vous aider.
          </LayoutDescription>
          <Link href="/" className={buttonVariants({ size: "lg" })}>
            Accueil
          </Link>
        </LayoutContent>
      </Layout>
    </>
  );
}
