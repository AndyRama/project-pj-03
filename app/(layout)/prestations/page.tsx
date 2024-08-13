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
                question: "What is Threader?",
                answer:
                  "Threader is an innovative platform designed to help you write, schedule, and publish content to your account with the assistance of AI, enhancing your business's online presence.",
              },
              {
                question: "How does AI Content Generation work?",
                answer:
                  "Our AI Content Generation feature leverages the power of artificial intelligence to create unique and engaging content for your Threads, making content creation easier and more efficient.",
              },
              {
                question: "Can I schedule my threads in advance?",
                answer:
                  "Yes, with Threader, you can schedule your threads for a specific time, allowing you to maintain a consistent online presence without the need to manually post every day.",
              },
              {
                question: "What is the Now.TS project?",
                answer:
                  "Now.TS is a new project announced on our platform that enables users to create professional Next.js applications in days, streamlining the development process.",
              },
              {
                question: "How can I get more followers?",
                answer:
                  "To gain more followers, focus on creating content related to Next.js, as our analysis shows it's highly engaging. Utilize our research tools to understand trends and improve your content strategy.",
              },
              {
                question: "What are the benefits of posting with Threader?",
                answer:
                  "Posting with Threader allows you to schedule posts, avoid daily manual postings, track your scheduled content easily, and maintain consistency in your online activity.",
              },
              {
                question: "What pricing plans does Threader offer?",
                answer:
                  "Threader offers two pricing plans: THREADER FREE, perfect for tiny creators, allowing you to schedule 1 post in advance; and THREADER PREMIUM, ideal for content creators, offering unlimited scheduling, post previews, and auto-reposting features.",
              },
            ]}
          />
        </LayoutContent>
      </Layout>
    </div>
  );
}
