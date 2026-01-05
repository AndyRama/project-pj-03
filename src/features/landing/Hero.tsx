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
        className="-mt-[40px] h-auto min-h-screen bg-cover bg-fixed bg-center md:min-h-screen lg:bg-center"
        style={{ backgroundImage: `url('/images/salle-de-sport.jpg')` }}
      >
        <div className="relative m-auto flex min-h-screen w-full max-w-7xl flex-col items-center gap-8 px-4 pb-12 pt-16 md:min-h-screen md:flex-row md:items-center md:gap-8 md:pt-0 lg:gap-12 lg:px-8">
          <div className="relative z-10 mt-16 flex w-full flex-1 flex-col items-start gap-4 md:gap-6 lg:gap-8">
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
  <Typography variant="h3" className="text-base !leading-tight md:text-lg">
    <span className="inline-block text-white">
      <StatisticBlock value="+350" label="Transformations" label1="réussies" />
      <StatisticBlock value="+ 5⭐" label="Satisfaction " label1="" />
    </span>
  </Typography>
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
    <span className="text-3xl font-bold sm:text-4xl md:text-5xl">{value}</span>
    <br />
    <span className="mr-1 text-xs sm:text-sm">{label}</span>
    <span className="mr-3 text-xs sm:text-sm md:mr-4">{label1}</span>
  </span>
);

const HeroTitle = () => {
  return (
    <Typography variant="h1" className="!leading-tight">
      <span className="inline-block -rotate-2 text-white">
        <span className="block text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
          Jeremy Prat
        </span>
        <span className="relative inline-block">
          <span className="text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Coaching{" "}
          </span>
          <br className="sm:hidden" />
          <span className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
            Personnel
          </span>
          <CircleSvg className="fill-primary" />
        </span>
      </span>
    </Typography>
  );
};

const HeroDescription = () => (
  <Typography variant="large" className="text-sm text-white sm:text-base md:text-lg">
    Allier entraînement rigoureux et nutrition équilibrée pour un mode de vie sain et durable.
  </Typography>
);

const HeroButton = () => (
  <div className="flex w-full flex-row flex-wrap gap-2 sm:w-auto sm:gap-3">
    <Link
      href="/#begin"
      className={cn(
        buttonVariants({ size: "md", variant: "default" }),
        "flex-1 border bg-orange-700 text-sm font-bold text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-orange-800 hover:shadow-lg sm:flex-initial sm:text-base",
      )}
    >
      Programme
    </Link>
    <Link
      href="/team"
      target="_blank"
      className={cn(
        buttonVariants({ size: "md", variant: "default" }),
        "flex-1 border bg-orange-700 text-sm font-bold text-white shadow-md transition-all duration-300 hover:scale-105 hover:border-orange-500 hover:bg-orange-800 hover:shadow-lg sm:flex-initial sm:text-base",
      )}
    >
      <Heart size={18} className="mr-1 sm:mr-2 sm:size-5" />
      <span className="whitespace-nowrap">de la team !</span>
    </Link>
  </div>
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
      className="h-auto w-full max-w-[280px] rounded-[10px] object-cover shadow-2xl sm:max-w-[320px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[480px]"
      alt="Hero image profile Jeremy Prat"
      priority
    />
  </div>
);