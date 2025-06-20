import { CircleSvg } from "@/components/svg/CircleSvg";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Heart, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Typography } from "../../components/ui/typography";
// import { ReviewSmall } from "./review/ReviewSmall";

export const Hero = () => {
  return (
    <main>
      {/* Image - main - bg-cover */}
      <div
        // eslint-disable-next-line tailwindcss/enforces-negative-arbitrary-values
        className="-mt-[40px] h-[178vh] bg-cover bg-fixed md:-mt-[20px] md:h-[110vh]"
        style={{ backgroundImage: `url('/images/salle-de-sport.jpg')` }}
      >
        <div className="relative m-auto flex min-h-[400px] w-full max-w-7xl items-center gap-4 px-4 max-md:flex-col">
          <div className="relative mt-0 flex flex-1 flex-col items-start gap-8 md:gap-4 lg:gap-8">
            <HeroStatistics />
            <HeroTitle />
            <HeroDescription />
            <HeroButton />
            {/* <HeroReviews /> */}
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
        <StatisticBlock value="+8" label="Années " label1="expériences" />
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

const HeroTitle = () => (
  <Typography variant="h1" className="text-3xl !leading-tight">
    <span className="inline-block -rotate-2 text-5xl text-white md:text-6xl xl:text-7xl">
      Jeremy Prat <br />
      <span className="relative inline-block">
        <span className="text-5xl text-white md:text-6xl">Coaching</span>
        <br />
        <span className="text-5xl md:text-6xl xl:text-7xl">Personnel</span>
        <CircleSvg className="fill-primary" />
      </span>
    </span>
  </Typography>
);

const HeroDescription = () => (
  <>
    <Typography variant="large" className="text-white">
      Méthode militaire + Expertise compétition IFBB = Résultats garantis.  <br />  Plus de 500 transformations réussies avec Jeremy Prat.
      sain et durable.
    </Typography>
    <div className="flex flex-wrap gap-6 text-sm">
      <div className="flex items-center space-x-2">
        <CheckCircle className="size-5 text-orange-500" />
        <span>Résultats en 90 jours</span>
      </div>
      <div className="flex items-center space-x-2">
        <CheckCircle className="size-5 text-orange-500" />
        <span>Suivi personnalisé</span>
      </div>
      <div className="flex items-center space-x-2">
        <CheckCircle className="size-5 text-orange-500" />
        <span>Garantie résultats</span>
      </div>
    </div>
  </>
);

const HeroButton = () => (
  <>
    <div className="flex flex-row">
      <Link
        href="/#premium"
        className={cn(
          buttonVariants({ size: "md", variant: "default" }),
          "text-white border hover:border-orange-500 hover:text-orange-500 mr-4",
        )}
      >
        Démarrer ma transformation
        <ArrowRight size={20} className="mr-2 hover:bg-orange-500" />
      </Link>
      <Link
        href="/team"
        className={cn(
          buttonVariants({ size: "md", variant: "invert" }),
          "text-white border border-orange-500 hover:text-orange-500",
        )}
      >
        <Heart size={20} className="mr-2 hover:bg-orange-500" />
        Voir les resultats
      </Link>
    </div>
  </>
);

// const HeroReviews = () => (
//   <ReviewSmall
//     stars={5}
//     avatars={[
//       "https://i.pravatar.cc/300?u=1",
//       "https://i.pravatar.cc/300?u=2",
//       "https://i.pravatar.cc/300?u=3",
//       "https://i.pravatar.cc/300?u=4",
//       "https://i.pravatar.cc/300?u=100",
//     ]}
//   >
//     3500+ followers <br /> sur instagram
//   </ReviewSmall>
// );

const HeroImage = () => (
  <div className="xl:mt-30 mt-20 flex-1 justify-end md:flex">
    <img
      src="/images/jeremy.jpg"
      className="w-[350px] max-w-lg rounded-[10px] object-contain sm:w-[480px] md:w-full"
      alt="Hero image profile Jeremy Prat"
    />
  </div>
);
