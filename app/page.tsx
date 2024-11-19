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
// import RecentBlog from "@/features/landing/RecentBlog";
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

      <SectionDivider />

      <CardGrid />

      <SectionDivider />

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

      {/* Blog Content */}

      {/* <RecentBlog /> */}

      <SectionDivider/>

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
      <div className="flex flex-col items-center gap-2">
        <Typography variant="p" className="max-w-xl font-bold text-orange-500">
          Programmes
        </Typography>
        <Typography variant="h2" className="max-w-xl">
          Mes services
        </Typography>
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
        ]}
      />

      <EmailFormSection />
      <Footer />
      <FloatingLegalFooter />
    </div>
  );
}
