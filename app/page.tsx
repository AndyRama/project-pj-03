"use client";

// import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";
import { EmailFormSection } from "@/features/email/EmailFormSection";
import { FeaturesSection } from "@/features/landing/FeatureSection";
import { FeatureProgram } from "@/features/landing/FeatureProgram";
import { Hero } from "@/features/landing/Hero";
import { LandingHeader } from "@/features/landing/LandingHeader";
import { SectionDivider } from "@/features/landing/SectionDivider";
import CardGrid from "@/features/landing/CardGrid";
import RecentPosts from "@/features/landing/RecentPosts";
import { ReviewGrid } from "@/features/landing/review/ReviewGrid";
import { Footer } from "@/features/layout/Footer";
import Image from "next/image";
import { FloatingLegalFooter } from "@/features/legal/FloatingLegalFooter";

export default function HomePage() {
  return (
    <div className="relative flex h-fit flex-col bg-background text-foreground">
      <div className="mt-16"></div>

      <LandingHeader />

      <Hero />

      <div className="transform-gpu blur-3xl">
        <div className="absolute left-0 -z-20 h-48 w-56 bg-gradient-to-tr from-orange-500 to-orange-800 opacity-30 md:opacity-50"></div>
      </div>

      <FeaturesSection
        features={[
          {
            badge: "Mes valeurs",
            title: "Qui suis-je ?",
            description:
              "Bienvenue dans mon univers, je suis Jeremy, un ancien militaire qui a trouvé sa passion dans le coaching sportif et athléte de haut niveau en tant qu'athlète compétitif en Men's Physique IFBB.",
            description1:
              "Fort de mon expérience dans l'armée, j'ai forgé ma détermination et mon engagement envers l'excellence, que ce soit sur le plan physique ou mental.",
            description2:
              "Mon parcours m'a conduit à briller sur des scènes nationales et internationales telles que le championnat de France et la Diamond Cup, où j'ai pu démontrer mon savoir-faire et ma passion pour le fitness. Ma mission est simple: vous aider à réaliser vos objectifs de fitness, qu'ils soient modestes ou ambitieux.",

            component: (
              <Image
                src="/images/jeremy2.jpg"
                alt=""
                width={200}
                height={100}
                className="h-auto w-full rounded-[10px] object-cover"
              />
            ),
          },
          {
            badge: "Mes valeurs",
            title: "Philosophie",
            description:
              "Allier entraînement rigoureux et nutrition équilibrée pour un mode de vie sain et durable. Je crois fermement que la réussite en matière de fitness réside dans un équilibre entre un entraînement bien structuré et une alimentation adaptée.",
            description1: "",
            description2: "",
            component: (
              <Image
                src="/images/colaborate.jpg"
                alt=""
                width={200}
                height={100}
                className="h-auto w-full rounded-[10px] object-cover"
              />
            ),
          },
        ]}
      />

      <div className="transform-gpu blur-3xl">
        <div className="absolute right-0 -z-20 h-48 w-56 bg-gradient-to-tr from-orange-500 to-orange-800 opacity-30 md:opacity-50"></div>
      </div>

      <SectionDivider />

      <CardGrid />

      <SectionDivider />

      <div className="transform-gpu blur-3xl">
        <div className="absolute left-0 -z-20 h-48 w-56 bg-gradient-to-tr from-orange-500 to-orange-800 opacity-30 md:opacity-50"></div>
      </div>

      <FeaturesSection
        features={[
          {
            badge: "Mes valeurs",
            title: "Mon approche",
            description:
              "Ma passion pour le fitness et la santé globale m'a amené à devenir coach sportif, spécialisé dans les transformations physiques, la perte de poids, la préparation aux compétitions, et plus encore.",
            description1: "",
            description2: "",
            component: (
              <Image
                src="/images/jeremy4.jpg"
                alt=""
                width={200}
                height={100}
                className="h-auto w-full rounded-[10px] object-cover"
              />
            ),
          },
        ]}
      />

      <div className="transform-gpu blur-3xl">
        <div className="absolute right-0 -z-20 h-48 w-56 bg-gradient-to-tr from-orange-500 to-orange-800 opacity-30 md:opacity-50"></div>
      </div>

      {/* Blog Content */}

      <SectionDivider />

      <div className="flex flex-col items-center gap-2">
        <Typography variant="p" className="max-w-xl font-bold text-orange-500">
          Recentes
        </Typography>
        <Typography variant="h2" className="max-w-xl">
          Blog
        </Typography>
      </div>
      <div className="mt-28">
        <RecentPosts />
      </div>

      <SectionDivider />

      {/* FeaturedProgram Content */}
      <div className="flex flex-col items-center gap-2" id="concept">
        <Typography variant="p" className="max-w-xl font-bold text-orange-500">
          Programmes
        </Typography>
        <Typography variant="h2" className="max-w-xl">
          Mes services
        </Typography>
      </div>

      <div className="transform-gpu blur-3xl">
        <div className="absolute right-0 -z-20 h-48 w-56 bg-gradient-to-tr from-orange-500 to-orange-800 opacity-30 md:opacity-50"></div>
      </div>

      <FeatureProgram
        features={[
          {
            badge: "Débutant",
            title: "Pack 1 Musculation | Homme Femme",
            description:
              "Coaching spécialisé pour les athlètes : si la compétition, le dépassement de soi et la discipline sont essentiels à votre vie et à votre bien-être, se fixer des objectifs concrets est un moyen efficace de les atteindre. Je vous propose un suivi musculation et alimentaire personnalisés pour relever les défis que vous vous fixerez.",
            component: (
              <Image
                src="/images/post3.jpg"
                alt=""
                width={200}
                height={100}
                className="h-auto w-full rounded-[8px] object-cover"
              />
            ),
            description1: "",
            description2: "",
          },
          {
            badge: "Intermédiaire",
            title: "Pack 2 Musculation | Homme Femme",
            description:
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus pariatur soluta corrupti quisquam illo ducimus adipisci recusandae possimus tempora esse, aspernatur repudiandae cupiditate ipsum enim, quibusdam porro odio sit. Quis!",
            description1: "",
            description2: "",
            component: (
              <Image
                src="/images/post5.jpg"
                alt=""
                width={200}
                height={100}
                className="h-auto w-full rounded-[8px] object-cover"
              />
            ),
          },
          {
            badge: "Confirmé",
            title: "Pack 3 Musculation | Homme Femme",
            description:
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus pariatur soluta corrupti quisquam illo ducimus adipisci recusandae possimus tempora esse, aspernatur repudiandae cupiditate ipsum enim, quibusdam porro odio sit. Quis!",
            description1: "",
            description2: "",

            component: (
              <Image
                src="/images/post4.jpg"
                alt=""
                width={200}
                height={100}
                className="h-auto w-full rounded-[8px] object-cover"
              />
            ),
          },
        ]}
      />

      <div className="transform-gpu blur-3xl">
        <div className="absolute left-0 -z-20 h-48 w-56 bg-gradient-to-tr from-orange-500 to-orange-800 opacity-30 md:opacity-50"></div>
      </div>

      <SectionDivider />

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
            image: "https://i.pravatar.cc/300?u=b3",
            name: "Marie D.",
            review:
              "Grâce au programme de Jeremy, j'ai perdu 12 kg en 4 mois tout en tonifiant mon corps. Il m'a accompagné à chaque étape, avec des conseils sur l'entraînement et l'alimentation. Je me sens enfin bien dans ma peau ! Merci Jeremy !",
            role: "34 ans",
          },
          {
            image: "https://i.pravatar.cc/300?u=b4",
            name: "Alexandre P.",
            review:
              "Je n'avais jamais vraiment fait de sport avant, mais Jeremy a su s'adapter à mon niveau et me motiver. J'ai non seulement perdu 8 kg, mais j'ai aussi retrouvé de l'énergie et de la confiance en moi. Ses packs sont complets et très efficaces.",
            role: "42 ans",
          },
          {
            image: "https://i.pravatar.cc/300?u=b1",
            name: "Thomas G.",
            review:
              "Le programme perte de poids de Jeremy m'a complètement transformée ! En 3 mois, j'ai non seulement atteint mes objectifs, mais j'ai aussi appris à aimer le sport. Les entraînements étaient variés et toujours adaptés à mes capacités.",
            role: "29 ans",
          },
          {
            image: "https://i.pravatar.cc/300?u=b2",
            name: "Sophie L.",
            review:
              "Je recommande Jeremy à 100 % ! Il ne s'agit pas juste d'un coach qui donne des exercices, mais d'un vrai accompagnateur. Grâce à lui, j'ai perdu 10 kg en 5 mois et j'ai adopté de nouvelles habitudes de vie que je n'aurais jamais imaginées.",
            role: "Social Media Manager",
          },
          {
            image: "https://i.pravatar.cc/300?u=b5",
            name: "Élodie C.",
            review:
              "Je cherchais un coach pour me remettre en forme et perdre du poids avant mon mariage, et Jeremy a été incroyable ! En seulement 3 mois, j'ai perdu 7 kg et je me sens plus forte et plus confiante que jamais. Ses conseils nutritionnels sont un vrai plus.",
            role: "25 ans",
          },
          {
            image: "https://i.pravatar.cc/300?u=b6",
            name: "Lucas M.",
            review:
              "Je pensais qu'il était trop tard pour moi pour me remettre au sport, mais Jeremy m'a prouvé le contraire. J'ai perdu 5 kg en douceur et gagné en endurance. Ses packs sont bien pensés, accessibles, et il est toujours disponible pour répondre à mes questions.",
            role: "50 ans",
          },
        ]}
      />

      <EmailFormSection />
      <Footer />
      <FloatingLegalFooter />
    </div>
  );
}
