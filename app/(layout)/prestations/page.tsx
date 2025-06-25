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
                id: "Demarrer",
                title: "Perte de poids",
                subtitle: "(6 * 160€ / 6 mois)",
                price: 160,
                barredPrice: 180,
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
                cta: "Je demarre ma transformation",
                ctaSubtitle: "",
                priceId: "",
              },
              {
                isPopular: false,
                type: "monthly",
                id: "Demarrer",
                title: "Intermédiaire (6 mois)",
                subtitle: "(6 * 180€ / 6 mois)",
                price: 180,
                barredPrice: 200,
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
                cta: "Je demarre ma transformation",
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
                  "Téléchargez votre guide complet pour adopter une alimentation saine et performante, spécialement conçu pour vous accompagnez en musculation",
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
                subtitle: "compétition",
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
          <PricingDetailsPlus/>

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
                image: "https://i.pravatar.cc/300?u=b3",
                name: "Marie D",
                review:
                  "Grâce au programme de Jeremy, j'ai perdu 12 kg en 4 mois tout en tonifiant mon corps. Il m'a accompagné à chaque étape, avec des conseils sur l'entraînement et l'alimentation. Je me sens enfin bien dans ma peau ! Merci Jeremy !",
                role: "Blogger",
              },
              {
                image: "https://i.pravatar.cc/300?u=b5",
                name: "Alexandre P.",
                review:
                  "Je n'avais jamais vraiment fait de sport avant, mais Jeremy a su s'adapter à mon niveau et me motiver. J'ai non seulement perdu 8 kg, mais j'ai aussi retrouvé de l'énergie et de la confiance en moi. Ses packs sont complets et très efficaces.",
                role: "",
              },
              {
                image: "https://i.pravatar.cc/300?u=b1",
                name: "Thomas G",
                review:
                  "Le programme perte de poids de Jeremy m'a complètement transformée ! En 3 mois, j'ai non seulement atteint mes objectifs, mais j'ai aussi appris à aimer le sport. Les entraînements étaient variés et toujours adaptés à mes capacités.",
                role: "Content Creator",
              },
              {
                image: "https://i.pravatar.cc/300?u=b2",
                name: "Sophie L.",
                review:
                  "Je recommande Jeremy à 100 % ! Il ne s'agit pas juste d'un coach qui donne des exercices, mais d'un vrai accompagnateur. Grâce à lui, j'ai perdu 10 kg en 5 mois et j'ai adopté de nouvelles habitudes de vie que je n'aurais jamais imaginées.",
                role: "Social Media Manager",
              },
              {
                image: "https://i.pravatar.cc/300?u=b7",
                name: "Sophia",
                review:
                  "Je cherchais un coach pour me remettre en forme et perdre du poids avant mon mariage, et Jeremy a été incroyable ! En seulement 3 mois, j'ai perdu 7 kg et je me sens plus forte et plus confiante que jamais. Ses conseils nutritionnels sont un vrai plus.",
                role: "Influencer",
              },
              {
                image: "https://i.pravatar.cc/300?u=b8",
                name: "Elijah",
                review:
                  "Je pensais qu'il était trop tard pour moi pour me remettre au sport, mais Jeremy m'a prouvé le contraire. J'ai perdu 5 kg en douceur et gagné en endurance. Ses packs sont bien pensés, accessibles, et il est toujours disponible pour répondre à mes questions.",
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