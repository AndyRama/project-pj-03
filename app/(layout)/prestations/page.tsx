import { Typography } from "@/components/ui/typography";
import { Layout, LayoutContent } from "@/features/page/layout";
import { Pricing } from "@/features/prestations/pricing/PricingSection";
import { PricingEbook } from "@/features/prestations/ebook/PricingSectionEbook";
import { FAQSection } from "@/features/landing/FAQSection";
import { SubHero } from "@/features/landing/SubHero";
import { ReviewGrid } from "@/features/landing/review/ReviewGrid";
import { PricingDetails } from "@/features/prestations/pricing/PricingDetails";
import { PricingDetailsPlus } from "@/features/prestations/pricing/PricingDetailsPlus";
import { EmailFormSection } from "@/features/email/EmailFormSection";

export default function page() {
  return (
    <>
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

          <PricingDetails />

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
                  "Téléchargez votre guide complet pour adopter une alimentation saine et performante, spécialement conçu pour accompagner vos débuts en musculation",
                ],
                cta: "Télécharger",
                ctaSubtitle: "",
                priceId: "",
                link: "/images/E-bookFree.pdf",
              },
              {
                isPopular: true,
                type: "monthly",
                id: "premium",
                title: "Ebook 2",
                subtitle: "esprit & mental",
                price: "Free",
                barredPrice: 0,
                currency: "€",
                features: [
                  "Découvrez des techniques et conseils pour renforcer votre mental et optimiser vos performances, essentiels pour atteindre vos objectifs.",
                ],
                cta: "Télécharger",
                ctaSubtitle: "",
                priceId: "",
                link: "#",
              },
              {
                isPopular: true,
                type: "monthly",
                id: "premium",
                title: "Ebook 3",
                subtitle: "esprit & mental",
                price: "Free",
                barredPrice: 0,
                currency: "€",
                features: [
                  "Profitez de conseils pratiques pour améliorer votre entraînement et maximiser vos résultats grâce à une approche holistique.",
                ],
                cta: "Télécharger",
                ctaSubtitle: "",
                priceId: "",
                link: "#",
              },
            ]}
          />

          {/* Pricing Details */}
          <PricingDetailsPlus />

          <div className="flex flex-col items-center gap-2">
            <Typography
              variant="p"
              className="max-w-xl font-bold text-orange-500"
            >
              Retour de ma formation
            </Typography>
            <Typography variant="h2" className="m-auto max-w-xl text-center">
              Ce qu'ils pensent de mes <u>services </u>!
            </Typography>
          </div>

          {/* Reviews Grid Content */}
          <ReviewGrid
            reviews={[
              {
                image: "https://i.pravatar.cc/300?u=b4",
                name: "Noah",
                review:
                  "I was skeptical about AI-generated content, but Threader changed my mind. The content feels personal and has significantly increased my interaction rates.",
                role: "Blogger",
              },
              {
                image: "https://i.pravatar.cc/300?u=b5",
                name: "Isabella",
                review:
                  "Threader's user interface is incredibly user-friendly. I was able to onboard my team in no time, and we've seen a marked improvement in our social media performance.",
                role: "Team Leader",
              },
              {
                image: "https://i.pravatar.cc/300?u=b1",
                name: "Eva",
                review:
                  "Since I started using Threader, my content creation process has been streamlined. The AI suggestions are spot on, helping me to connect better with my audience. Highly recommend for anyone looking to elevate their content game.",
                role: "Content Creator",
              },
              {
                image: "https://i.pravatar.cc/300?u=b2",
                name: "Lucas",
                review:
                  "Threader's scheduling feature is a lifesaver. It allows me to plan my content calendar efficiently, ensuring I never miss posting on the optimal days and times. Fantastic tool for social media managers.",
                role: "Social Media Manager",
              },
              {
                image: "https://i.pravatar.cc/300?u=b7",
                name: "Sophia",
                review:
                  "Joining the Threader community has opened up networking opportunities with fellow content creators. It's more than just a tool; it's a platform for growth.",
                role: "Influencer",
              },
              {
                image: "https://i.pravatar.cc/300?u=b8",
                name: "Elijah",
                review:
                  "The calendar view in Threader helps me visualize my content strategy for the entire month. It's been a game changer for my planning process.",
                role: "Strategist",
              },
            ]}
          />
          
          {/* FAQ Section */}
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
          <EmailFormSection />
        </LayoutContent>
      </Layout>
    </>
  );
}