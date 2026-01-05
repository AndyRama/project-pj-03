import { CircleSvg } from "@/components/svg/CircleSvg";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Typography } from "../../components/ui/typography";
import { ReviewSmall } from "./review/ReviewSmall";

export const Hero = () => {
  return (
    <main>
      {/* Image - main - bg-cover */}
      <div
        // eslint-disable-next-line tailwindcss/enforces-negative-arbitrary-values
        className="-mt-[40px] mb-48 h-auto min-h-[120vh] bg-cover bg-fixed md:mb-0 md:h-screen"
        style={{ backgroundImage: `url('/images/salle-de-sport.jpg')` }}
      >
        <div className="relative m-auto flex min-h-[400px] w-full max-w-7xl flex-col items-center gap-8 px-4 pb-12 pt-32 md:flex-row md:gap-8 md:pt-20 lg:gap-12">
          <div className="relative z-10 flex w-full flex-1 flex-col items-start gap-6 md:gap-4 lg:gap-8">
            <HeroStatistics />
            <HeroTitle />
            <HeroDescription />
            <HeroButton />
            <HeroReviews />
          </div>
          <HeroImage />
        </div>
      </div>
    </main>
  );
};

const HeroStatistics = () => (
  <>
    <Typography variant="h3" className="text-lg !leading-tight">
      <span className="inline-block text-white">
        <StatisticBlock value="+350" label="Transformations" label1="réussies" />
        <StatisticBlock value="+ 5⭐" label="Satisfaction " label1="" />
      </span>
    </Typography>
  </>
);

const StatisticBlock = ({
  value,
  label,
  label1,
}: {
  value: string;
  label: string;
  label1: string;
}) => (
  <span className="relative inline-block">
    <span className="text-4xl sm:text-5xl">{value}</span>
    <br />
    <span className="mr-1 text-sm">{label}</span>
    <span className="mr-4 text-sm">{label1}</span>
  </span>
);

const HeroTitle = () => {
  return (
    <Typography variant="h1" className="text-3xl !leading-tight">
      <span className="inline-block -rotate-2 text-4xl text-white sm:text-5xl md:text-6xl">
        Jeremy Prat <br />
        <span className="relative inline-block">
          <span className="text-4xl text-white sm:text-5xl md:text-6xl">Coaching </span>
          <br />
          <span className="text-4xl sm:text-5xl md:text-6xl">Personnel</span>
          <CircleSvg className="fill-primary" />
        </span>
      </span>
    </Typography>
  );
};

const HeroDescription = () => (
  <>
    <Typography variant="large" className="text-white">
      Allier entraînement rigoureux et nutrition équilibrée pour un mode de vie sain et durable.      
    </Typography>
  </>
);

const HeroButton = () => (
  <>
    <div className="flex flex-row flex-wrap gap-3">
      <Link
        href="/#begin"
        className={cn(
          buttonVariants({ size: "md", variant: "default" }),
          "text-base font-bold text-white border shadow-md transition-all duration-300 hover:scale-105 hover:bg-orange-800 hover:shadow-lg bg-orange-700",
        )}
      >
        Programme
      </Link>
      <Link
        href="/team"
        target="_blank"
        className={cn(
          buttonVariants({ size: "md", variant: "default" }),
          "text-base font-bold text-white border shadow-md transition-all duration-300 hover:scale-105 hover:bg-orange-800 hover:shadow-lg bg-orange-700 hover:border-orange-500",
        )}
      >
        <Heart size={20} className="mr-2" />
        de la team !
      </Link>
    </div>
  </>
);

const HeroReviews = () => (
  <ReviewSmall
    stars={5}
    avatars={[
      "https://i.pravatar.cc/300?u=1",
      "https://i.pravatar.cc/300?u=2",
      "https://i.pravatar.cc/300?u=3",
      "https://i.pravatar.cc/300?u=4",
      "https://i.pravatar.cc/300?u=5",
    ]}
  >
    3500+ followers <br /> sur instagram
  </ReviewSmall>
);

const HeroImage = () => (
  <div className="flex w-full flex-1 justify-center md:shrink-0 md:justify-end">
    <Image
      src="/images/jeremy.jpg"
      width={480}
      height={640}
      className="w-full max-w-[300px] rounded-[10px] object-contain sm:max-w-[350px] md:w-[400px] md:max-w-none lg:w-[480px]"
      alt="Hero image profile Jeremy Prat"
    />
  </div>
);