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
        className="-mt-[40px] mb-48 h-[120vh] bg-cover bg-fixed md:mb-0 md:h-screen"
        style={{ backgroundImage: `url('/images/salle-de-sport.jpg')` }}
      >
        <div className="relative m-auto mt-32 flex min-h-[400px] w-full max-w-7xl items-center gap-4 px-4 max-md:flex-col md:mt-20">
          <div className="relative flex flex-1 flex-col items-start gap-8 md:gap-4 lg:gap-8">
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
      <span className="inline-block text-white md:text-center">
        <br />
        <StatisticBlock value="+350" label="Transformations" label1="réussit" />
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
    <span className="text-5xl">{value}</span>
    <br />
    <span className="mr-1 text-sm">{label}</span>
    <span className="mr-4 text-sm">{label1}</span>
  </span>
);

const HeroTitle = () => {
  return (
    <Typography variant="h1" className="text-3xl !leading-tight">
      <span className="inline-block -rotate-2 text-5xl text-white md:text-6xl">
        Jeremy Prat <br />
        <span className="relative inline-block">
          <span className="text-5xl text-white md:text-6xl">Coaching </span>
          <br />
          <span className="text-5xl md:text-6xl">Personnel</span>
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
    <div className="flex flex-row">
      <Link
        href="/#begin"
        className={cn(
          buttonVariants({ size: "md", variant: "default" }),
          "text-base font-bold text-white border shadow-md transition-all duration-300 hover:scale-105 hover:bg-orange-600 hover:shadow-lg bg-orange-600 mr-4",
        )}
      >
        Mon programme
      </Link>
      <div className="hidden md:block">
        <Link
          href="/team"
          target="_blank"
          className={cn(
            buttonVariants({ size: "md", variant: "default" }),
            "text-base font-bold text-white border shadow-md transition-all duration-300 hover:scale-105 hover:bg-orange-600 hover:shadow-lg bg-orange-600 hover:border-orange-500 mr-4",
          )}
        >
          <Heart size={20} className="mr-2 " />
          de la team !
        </Link>
      </div>
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
      "https://i.pravatar.cc/300?u=100",
    ]}
  >
    3500+ followers <br /> sur instagram
  </ReviewSmall>
);

const HeroImage = () => (
  <div className="xl:mt-30 mt-20 flex-1 justify-end md:flex">
    <Image
      src="/images/jeremy.jpg"
      width={480}
      height={640}
      className="w-[350px] max-w-lg rounded-[10px] object-contain sm:w-[480px] md:w-full"
      alt="Hero image profile Jeremy Prat"
    />
  </div>
);