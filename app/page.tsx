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
            badge: "⏰ Schedule",
            title: "Schedule your post",
            description: "Schedule your post on the Threader in a few clicks.",
            component: (
              <Image
                src="/images/placeholder1.gif"
                alt=""
                width={200}
                height={100}
                className="h-auto w-full object-cover"
              />
            ),
          },
          {
            badge: "📅 Calendar",
            title: "See what you scheduled",
            description:
              "With the calendar view, you can see what you scheduled and when.",
            component: (
              <Image
                src="/images/placeholder1.gif"
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
            badge: "⏰ Schedule",
            title: "Schedule your post",
            description: "Schedule your post on the Threader in a few clicks.",
            component: (
              <Image
                src="/images/placeholder1.gif"
                alt=""
                width={200}
                height={100}
                className="h-auto w-full object-cover"
              />
            ),
          },
        ]}
      />
      {/* BLOG CONTENT */}

      <FeaturesSection
        features={[
          {
            badge: "⏰ Schedule",
            title: "Schedule your post",
            description: "Schedule your post on the Threader in a few clicks.",
            component: (
              <Image
                src="/images/placeholder1.gif"
                alt=""
                width={200}
                height={100}
                className="h-auto w-full object-cover"
              />
            ),
          },
        ]}
      />

      <FeaturesSection
        features={[
          {
            badge: "⏰ Schedule",
            title: "Schedule your post",
            description: "Schedule your post on the Threader in a few clicks.",
            component: (
              <Image
                src="/images/placeholder1.gif"
                alt=""
                width={200}
                height={100}
                className="h-auto w-full object-cover"
              />
            ),
          },
        ]}
      />

      <FeaturesSection
        features={[
          {
            badge: "⏰ Schedule",
            title: "Schedule your post",
            description: "Schedule your post on the Threader in a few clicks.",
            component: (
              <Image
                src="/images/placeholder1.gif"
                alt=""
                width={200}
                height={100}
                className="h-auto w-full object-cover"
              />
            ),
          },
        ]}
      />

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
