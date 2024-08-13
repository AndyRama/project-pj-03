// import { Typography } from "@/components/ui/typography";
import { Layout, LayoutContent } from "@/features/page/layout";
import { Pricing } from "@/features/prestations/pricing/PricingSection";
import { PricingEbook } from "@/features/prestations/ebook/PricingSectionEbook";
import { FAQSection } from "@/features/landing/FAQSection";
import { SubHero } from "@/features/landing/SubHero";
import { SectionDivider } from "@/features/landing/SectionDivider";

export default function page() {
  return (
    <div>
      <SubHero className="" title={"Prestations"} subTitle={"Toutes mes"} />
      <Layout>
        <LayoutContent className="mx-auto mb-8 w-full dark:prose-invert">
          {/* Pricing Pack */}
          <Pricing
            cards={[
              {
                isPopular: true,
                type: "monthly",
                id: "premium",
                title: "Débutant (4 mois)",
                subtitle: "(3 * 150€ / 3 mois)",
                price: 150,
                barredPrice: 169,
                currency: "€",
                features: [
                  "Pack adapté aux débutants dans la musculation.",
                  "Programme de musculation personnalisé en fonction de tes objectifs.",
                  "Accompagnement sur les divers troubles du comportements (TCA) ou problématique de santé.",
                  "Plan alimentaire adapté à tes besoins.",
                  "Bilan mensuel photo + mensuration avec un suivi plus approfondi",
                  "Communication WhatsApp & Email avec visio ou call chaque mois.",
                  "Acces à mon application de training.",
                ],
                cta: "Choisir ce plan ",
                ctaSubtitle: "",
                priceId: "",
              },
              {
                isPopular: false,
                type: "monthly",
                id: "premium",
                title: "Intermédiaire (4 mois)",
                subtitle: "(3 * 150€ / 3 mois)",
                price: 150,
                barredPrice: 169,
                currency: "€",
                features: [
                  "Pack adapté aux débutants dans la musculation.",
                  "Programme de musculation personnalisé en fonction de tes objectifs.",
                  "Accompagnement sur les divers troubles du comportements (TCA) ou problématique de santé.",
                  "Plan alimentaire adapté à tes besoins.",
                  "Bilan mensuel photo + mensuration avec un suivi plus approfondi",
                  "Communication WhatsApp & Email avec visio ou call chaque mois.",
                  "Acces à mon application de training.",
                ],
                cta: "Choisir ce plan ",
                ctaSubtitle: "",
                priceId: "",
              },
              {
                isPopular: true,
                type: "monthly",
                id: "premium",
                title: "Confirmé (4 mois)",
                subtitle: "(3 * 150€ / 3 mois)",
                price: 150,
                barredPrice: 169,
                currency: "€",
                features: [
                  "Pack adapté aux débutants dans la musculation.",
                  "Programme de musculation personnalisé en fonction de tes objectifs.",
                  "Accompagnement sur les divers troubles du comportements (TCA) ou problématique de santé.",
                  "Plan alimentaire adapté à tes besoins.",
                  "Bilan mensuel photo + mensuration avec un suivi plus approfondi",
                  "Communication WhatsApp & Email avec visio ou call chaque mois.",
                  "Acces à mon application de training.",
                ],
                cta: "Choisir ce plan ",
                ctaSubtitle: "",
                priceId: "",
              },
              {
                isPopular: true,
                type: "monthly",
                id: "premium",
                title: "Débutant (1 mois)",
                subtitle: "(1 * 150€ / 1 mois)",
                price: 150,
                barredPrice: 169,
                currency: "€",
                features: [
                  "Pack adapté aux initiés ayant déjà des bases en musculation.",
                  "Programme de musculation personnalisé en fonction de tes objectifs.",
                  "Plan alimentaire adapté à tes besoins.",
                  "Accompagnement sur les divers TCA ou problématique de santé.",
                  "Bilan mensuel par email après 4 semaines.",
                ],
                cta: "Choisir ce plan ",
                ctaSubtitle: "",
                priceId: "",
              },
              {
                isPopular: true,
                type: "monthly",
                id: "premium",
                title: "Intermédiaire (1 mois)",
                subtitle: "(1 * 150€ / 1 mois)",
                price: 150,
                barredPrice: 169,
                currency: "€",
                features: [
                  "Pack adapté aux initiés ayant déjà des bases en musculation.",
                  "Programme de musculation personnalisé en fonction de tes objectifs.",
                  "Plan alimentaire adapté à tes besoins.",
                  "Accompagnement sur les divers TCA ou problématique de santé.",
                  "Bilan mensuel par email après 4 semaines.",
                ],
                cta: "Choisir ce plan ",
                ctaSubtitle: "",
                priceId: "",
              },
              {
                isPopular: true,
                type: "monthly",
                id: "premium",
                title: "Confirmé (1mois)",
                subtitle: "(1 * 150€ / 1 mois)",
                price: 150,
                barredPrice: 169,
                currency: "€",
                features: [
                  "Pack adapté aux initiés ayant déjà des bases en musculation.",
                  "Programme de musculation personnalisé en fonction de tes objectifs.",
                  "Plan alimentaire adapté à tes besoins.",
                  "Accompagnement sur les divers TCA ou problématique de santé.",
                  "Bilan mensuel par email après 4 semaines.",
                ],
                cta: "Choisir ce plan ",
                ctaSubtitle: "",
                priceId: "",
              },
            ]}
          />

          <SectionDivider />

          {/* Pricing Ebook */}
          <PricingEbook
            cards={[
              {
                isPopular: false,
                type: "monthly",
                id: "premium",
                title: "Ebook 1",
                subtitle: "Nutrition & Alimentation",
                price: "Free",
                barredPrice: 0,
                currency: "€",
                features: [
                  "Pack adapté aux débutants dans la musculation.",
                  "Programme de musculation personnalisé en fonction de tes objectifs.",
                  "Accompagnement sur les divers troubles du comportements (TCA) ou problématique de santé.",
                  "Plan alimentaire adapté à tes besoins.",
                  "Bilan mensuel photo + mensuration avec un suivi plus approfondi",
                  "Communication WhatsApp & Email avec visio ou call chaque mois.",
                  "Acces à mon application de training.",
                ],
                cta: "Télécharger",
                ctaSubtitle: "",
                priceId: "",
              },
              {
                isPopular: true,
                type: "monthly",
                id: "premium",
                title: "Ebook 2",
                subtitle: "esprit & mental",
                price: "15€",
                barredPrice: 0,
                currency: "€",
                features: [
                  "Pack adapté aux débutants dans la musculation.",
                  "Programme de musculation personnalisé en fonction de tes objectifs.",
                  "Accompagnement sur les divers troubles du comportements (TCA) ou problématique de santé.",
                  "Plan alimentaire adapté à tes besoins.",
                  "Bilan mensuel photo + mensuration avec un suivi plus approfondi",
                  "Communication WhatsApp & Email avec visio ou call chaque mois.",
                  "Acces à mon application de training.",
                ],
                cta: "Commander",
                ctaSubtitle: "",
                priceId: "",
              },
              {
                isPopular: true,
                type: "monthly",
                id: "premium",
                title: "Ebook 3",
                subtitle: "esprit & mental",
                price: "15€",
                barredPrice: 0,
                currency: "€",
                features: [
                  "Pack adapté aux débutants dans la musculation.",
                  "Programme de musculation personnalisé en fonction de tes objectifs.",
                  "Accompagnement sur les divers troubles du comportements (TCA) ou problématique de santé.",
                  "Plan alimentaire adapté à tes besoins.",
                  "Bilan mensuel photo + mensuration avec un suivi plus approfondi",
                  "Communication WhatsApp & Email avec visio ou call chaque mois.",
                  "Acces à mon application de training.",
                ],
                cta: "Commander",
                ctaSubtitle: "",
                priceId: "",
              },
              {
                isPopular: true,
                type: "monthly",
                id: "premium",
                title: "Ebook 4",
                subtitle: "esprit & mental",
                price: "15",
                barredPrice: 0,
                currency: "€",
                features: [
                  "Pack adapté aux débutants dans la musculation.",
                  "Programme de musculation personnalisé en fonction de tes objectifs.",
                  "Accompagnement sur les divers troubles du comportements (TCA) ou problématique de santé.",
                  "Plan alimentaire adapté à tes besoins.",
                  "Bilan mensuel photo + mensuration avec un suivi plus approfondi",
                  "Communication WhatsApp & Email avec visio ou call chaque mois.",
                  "Acces à mon application de training.",
                ],
                cta: "Commander",
                ctaSubtitle: "",
                priceId: "",
              },
              {
                isPopular: true,
                type: "monthly",
                id: "premium",
                title: "Ebook 5",
                subtitle: "esprit & mental",
                price: "15€",
                barredPrice: 0,
                currency: "€",
                features: [
                  "Pack adapté aux débutants dans la musculation.",
                  "Programme de musculation personnalisé en fonction de tes objectifs.",
                  "Accompagnement sur les divers troubles du comportements (TCA) ou problématique de santé.",
                  "Plan alimentaire adapté à tes besoins.",
                  "Bilan mensuel photo + mensuration avec un suivi plus approfondi",
                  "Communication WhatsApp & Email avec visio ou call chaque mois.",
                  "Acces à mon application de training.",
                ],
                cta: "Commander",
                ctaSubtitle: "",
                priceId: "",
              },
              {
                isPopular: true,
                type: "monthly",
                id: "premium",
                title: "Ebook 6",
                subtitle: "esprit & mental",
                price: "15€",
                barredPrice: 0,
                currency: "€",
                features: [
                  "Pack adapté aux débutants dans la musculation.",
                  "Programme de musculation personnalisé en fonction de tes objectifs.",
                  "Accompagnement sur les divers troubles du comportements (TCA) ou problématique de santé.",
                  "Plan alimentaire adapté à tes besoins.",
                  "Bilan mensuel photo + mensuration avec un suivi plus approfondi",
                  "Communication WhatsApp & Email avec visio ou call chaque mois.",
                  "Acces à mon application de training.",
                ],
                cta: "Commander",
                ctaSubtitle: "",
                priceId: "",
              },
            ]}
          />

          <FAQSection
            faq={[
              {
                question: "Qu'est-ce que unlcoaching.com ?",
                answer:
                  "Unlcoaching est une plateforme dédiée au coaching sportif et au développement personnel. Elle aide les utilisateurs à atteindre leurs objectifs de santé et de bien-être grâce à des programmes de coaching personnalisés et des articles de blog informatifs.",
              },
              {
                question: "Quels services propose unlcoaching.com ?",
                answer:
                  "Nous proposons une gamme de services, y compris des séances de coaching individuel, des programmes de remise en forme, et un blog regorgeant de conseils sur la nutrition, l'entraînement et le développement personnel.",
              },
              {
                question:
                  "Comment puis-je m'inscrire à un programme de coaching ?",
                answer:
                  "Vous pouvez vous inscrire à un programme en visitant notre page d'accueil et en sélectionnant l'option 'S'inscrire'. Vous serez guidé à travers un processus simple pour choisir le programme qui correspond le mieux à vos besoins.",
              },
              {
                question:
                  "Quels sont les avantages du coaching avec unlcoaching.com ?",
                answer:
                  "Le coaching avec unlcoaching.com vous permet de bénéficier de l'expertise d'un coach professionnel Jérémy Prat, d'un programme personnalisé adapté à vos objectifs, et d'un suivi continu pour garantir vos progrès.",
              },
              {
                question:
                  "Quels sont les prix des services offerts par unlcoaching.com ?",
                answer:
                  "Nous offrons plusieurs plans tarifaires adaptés à différents besoins, allant des sessions de coaching individuelles aux programmes complets sur plusieurs mois. Pour plus de détails, veuillez consulter notre page dédiée aux tarifs.",
              },
            ]}
          />
        </LayoutContent>
      </Layout>
    </div>
  );
}
