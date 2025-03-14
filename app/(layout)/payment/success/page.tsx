import { buttonVariants } from "@/components/ui/button";
import {
  Layout,
  LayoutContent,
  LayoutDescription,
  LayoutHeader,
  LayoutTitle,
} from "@/features/page/layout";
import Link from "next/link";
import { SectionLayout } from '@/features/landing/SectionLayout';

export default function SuccessPaymentPage() {
  return (
    <>
      <SectionLayout size="lg" variant="default" className="mx-auto mt-[-22] max-w-7xl p-6">
        <Layout>
          <LayoutHeader>
            <LayoutTitle>Merci pour votre achat !</LayoutTitle>
            <LayoutDescription>
            Nous sommes ravis de vous accueillir dans notre programme exclusif de coaching personnel et nutrition.
            Votre abonnement vous ouvre les portes d’un accompagnement sur mesure pour transformer votre bien-être. Voici ce qui vous attend :
            </LayoutDescription>
          </LayoutHeader>
          <LayoutContent>
          <LayoutTitle>Programme</LayoutTitle>
            <LayoutDescription>
              ✅ Consultation Personnalisée : Lors de votre première séance en visioconférence, nous établirons ensemble un bilan complet pour comprendre vos objectifs, votre mode de vie et vos attentes.
              ✅ Programme Sur Mesure : En fonction de vos besoins spécifiques – qu’il s’agisse de perdre du poids, de gagner en énergie ou de renforcer votre vitalité – nous élaborerons un plan de coaching et de nutrition adapté, simple et efficace.
              ✅ Suivi et Accompagnement Réguliers : Vous bénéficierez d’un suivi personnalisé, avec des ajustements réguliers pour garantir votre progression et répondre à vos questions à chaque étape.
            </LayoutDescription>
            <Link href="/" className={buttonVariants({ size: "md" })}>
              Crée un compte
            </Link>
            <Link href="/account/checkout" className={buttonVariants({ size: "md" })}>
              Formulaire
            </Link>
            
          </LayoutContent>
          <LayoutDescription>
            Votre transformation commence dès maintenant ! Un email de confirmation vous a été envoyé avec toutes les instructions pour accéder à votre espace membre et réserver votre première séance.
          </LayoutDescription>
          <LayoutDescription>
            🚀 Prêt(e) à entamer ce nouveau chapitre vers une vie plus saine et épanouissante ?
            Encore merci et à très bientôt pour démarrer votre parcours vers le bien-être !
          </LayoutDescription>
        </Layout>
      </SectionLayout>
    </>
  );
}
