// import { Typography } from "@/components/ui/typography";
import { Layout, LayoutContent } from "@/features/page/layout";
import { Pricing } from "@/features/landing/pricing/PricingSection";
import { FAQSection } from "@/features/landing/FAQSection";
import { SubHero } from "@/features/landing/SubHero";


export default function page() {
  return (
    <div>
      <SubHero className={""} title={"Prestations"} subTitle={"Toutes mes"} />
      <Layout>
        <LayoutContent className="prose m-auto mb-8 w-full dark:prose-invert">
          <Pricing
            cards={[
              {
                type: "monthly",
                id: "Free",
                title: "Threader Free",
                subtitle: "Perfect for tiny creator",
                price: 0,
                currency: "USD",
                features: [
                  "Scehdule 1 post in advance",
                  "See what you scheduled",
                  "Auto-repost your thread",
                ],
                cta: "Start now",
                ctaSubtitle: "Free forever",
                priceId: "",
              },
              {
                isPopular: true,
                type: "monthly",
                id: "premium",
                title: "Threader Premium",
                subtitle: "Perfect for content creator",
                price: 49,
                barredPrice: 59,
                currency: "USD",
                features: [
                  "Schedule Infinite post in advance",
                  "See what you scheduled",
                  "Auto-repost your thread",
                  "Preview your post",
                ],
                cta: "Start 7 days trial",
                ctaSubtitle: "Then $49/month",
                priceId: "",
              },
              {
                isPopular: true,
                type: "monthly",
                id: "premium",
                title: "Threader Premium",
                subtitle: "Perfect for content creator",
                price: 49,
                barredPrice: 59,
                currency: "USD",
                features: [
                  "Schedule Infinite post in advance",
                  "See what you scheduled",
                  "Auto-repost your thread",
                  "Preview your post",
                ],
                cta: "Start 7 days trial",
                ctaSubtitle: "Then $49/month",
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
