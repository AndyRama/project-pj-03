import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";
import { EmailFormSection } from "@/features/email/EmailFormSection";
import { FeaturesSection } from "@/features/landing/FeatureSection";
import { Hero } from "@/features/landing/Hero";
import { LandingHeader } from "@/features/landing/LandingHeader";
import { SectionDivider } from "@/features/landing/SectionDivider";

import { ReviewGrid } from "@/features/landing/review/ReviewGrid";
import { ReviewTriple } from "@/features/landing/review/ReviewTriple";
import { Footer } from "@/features/layout/Footer";
import Image from "next/image";

// import { BentoGridSection } from "@/features/landing/BentoSection";
// import { PainSection } from "@/features/landing/Pain";
// import { StatsSection } from "@/features/landing/StatsSection";
// import { CTASectionCard } from "@/features/landing/cta/CTACardSection";
// import { CTAImageSection } from "@/features/landing/cta/CTAImageSection";
// import { CtaSection } from "@/features/landing/cta/CTASection";
// import { ReviewSingle } from "@/features/landing/review/ReviewSingle";

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
                className="h-auto w-full rounded-md object-cover"
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
                className="h-auto w-full object-cover"
              />
            ),
          },
        ]}
      />

      {/* <StatsSection /> */}

      {/* <BentoGridSection /> */}

      {/* <PainSection /> */}

      <SectionDivider />

      <ReviewTriple
        reviews={[
          {
            image: "https://i.pravatar.cc/300?u=a1",
            name: "Sophie",
            review: `Threader **has completely transformed the way I manage my social media** content. The ability to schedule posts and use AI for content suggestions has saved me hours each week.`,
            role: "Digital Marketer",
          },
          {
            image: "https://i.pravatar.cc/300?u=a2",
            name: "Alex",
            review: `Using Threader has significantly boosted my online engagement. **The analytics tool helps me understand what works**, allowing me to refine my strategy and grow my follower base.`,
            role: "Social Media Influencer",
          },
          {
            image: "https://i.pravatar.cc/300?u=a3",
            name: "Jordan",
            review: `The ease of scheduling and the AI-generated content features are game-changers. **Threader's user-friendly interface** makes it perfect for anyone looking to enhance their online presence.`,
            role: "Entrepreneur",
          },
        ]}
      />

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
                className="h-auto w-full object-cover"
              />
            ),
          },
        ]}
      />
      {/* Blog Content */}


      <SectionDivider />


      {/* Reviews Grid Content */}
      <div className="flex flex-col items-center gap-2">
        <Badge>Retour de ma formation</Badge>
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

      <EmailFormSection />

      {/* <ReviewSingle
        image="https://i.pravatar.cc/300?u=5"
        name="Michel"
        review={`Threader **has completely transformed** the way I manage my social media content. The ability to schedule posts and use AI for content suggestions **has saved me hours each week.**`}
        role="Digital Marketer"
        compagnyImage="https://1000logos.net/wp-content/uploads/2017/03/McDonalds-Logo-2003.png"
        key={1}
      /> */}

      {/* <CTASectionCard /> */}

      {/* <CtaSection /> */}

      {/* <CTAImageSection /> */}

      {/* <EmailFormSection /> */}

      {/* <SectionDivider /> */}

      <Footer />
    </div>
  );
}
