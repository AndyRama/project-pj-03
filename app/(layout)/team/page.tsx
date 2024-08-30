import { SubHero } from "@/features/landing/SubHero";
import { SideHero } from "@/features/landing/SideHero";
import { StoryCardGrid } from "@/features/team/StoryCard";
import { Typography } from "@/components/ui/typography";
import { ReviewGrid } from "@/features/landing/review/ReviewGrid";

export default function page() {
  return (
    <>
      <SubHero
        className={""}
        title={"Le Coeur de la team"}
        subTitle={"Nos valeurs"}
      />

      <StoryCardGrid />

      <SideHero className="mt-20" />

       {/* Reviews Grid Content */}
       <div className="mt-20 flex flex-col items-center gap-2">
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
    </>
  );
}
