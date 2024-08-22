import { Typography } from "@/components/ui/typography";
import { Layout, LayoutContent } from "@/features/page/layout";
import { Pricing } from "@/features/prestations/pricing/PricingSection";
import { PricingEbook } from "@/features/prestations/ebook/PricingSectionEbook";
import { FAQSection } from "@/features/landing/FAQSection";
import { SubHero } from "@/features/landing/SubHero";
import { SectionDivider } from "@/features/landing/SectionDivider";
import { ReviewGrid } from "@/features/landing/review/ReviewGrid";
import { EmailFormSection } from "@/features/email/EmailFormSection";
import {PricingDetails} from "@/features/prestations/pricing/PricingDetails";


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
          
          {/* Pricing Details */}
          <PricingDetails/>

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

            {/* Reviews Grid Content */}
      <div className="flex flex-col items-center gap-2">
        <Typography variant="p" className="max-w-xl font-bold text-orange-500">
          Retour de ma formation
        </Typography>
        <Typography variant="h2" className="m-auto max-w-xl text-center">
          Ce qu'ils pensent de mes <u>services </u>!
        </Typography>
      </div>

      <ReviewGrid
        reviews={[
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
            image: "https://i.pravatar.cc/300?u=b3",
            name: "Mia",
            review:
              "The analytics provided by Threader are invaluable. They've given me insights into what my audience loves, helping me double my engagement rate in just a few months.",
            role: "Digital Marketer",
          },
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
            image: "https://i.pravatar.cc/300?u=b6",
            name: "Oliver",
            review:
              "Auto-reposting with Threader is a feature I didn't know I needed. It's great for getting more mileage out of your best content without any extra effort.",
            role: "Freelancer",
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
          {
            image: "https://i.pravatar.cc/300?u=b9",
            name: "Charlotte",
            review:
              "I appreciate the flexibility in Threader's pricing plans. It's accessible for creators at any stage of their journey, from beginners to established influencers.",
            role: "Entrepreneur",
          },
          {
            image: "https://i.pravatar.cc/300?u=b10",
            name: "James",
            review:
              "The customer support team at Threader is fantastic. They've been quick to respond and helpful with any questions I've had. Great service overall.",
            role: "Customer",
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

        <EmailFormSection />

        </LayoutContent>
      </Layout>
    </div>
  );
}
