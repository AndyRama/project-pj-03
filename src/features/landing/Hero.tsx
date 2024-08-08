import { CircleSvg } from "@/components/svg/CircleSvg";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import Link from "next/link";
import { Typography } from "../../components/ui/typography";
import { ReviewSmall } from "./review/ReviewSmall";

export const Hero = () => {
  return (
    <main>
      {/* Image - main - bg-cover  */}
      <div
        // eslint-disable-next-line tailwindcss/enforces-negative-arbitrary-values
        className="-mt-[40px] h-[130vh] bg-cover bg-fixed md:-mt-[46px] md:h-[90vh] "
        style={{
          backgroundImage: `url('/images/salle-de-sport.jpg')`,
        }}
      >
        <div className="relative m-auto my-12 flex min-h-[800px] w-full max-w-7xl items-center gap-4 px-8 max-md:flex-col">
          <div className="relative mt-20 flex flex-1 flex-col items-start gap-8 md:gap-4 lg:gap-8">
          <Typography variant="h3" className="text-3xl !leading-tight">
              <span className="inline-block text-white ">
                 <br />
                <span className="relative inline-block px-4">
                  <span className="text-5xl font-bold">+ 350</span>
                  <br />
                  <span className="text-sm">Transformations réussit</span>
                </span>
                <span className="relative inline-block px-4">
                  <span className="text-5xl font-bold">+ 8</span>
                  <br />
                  <span className="text-sm font-semibold">Années expériences</span>
                </span>
              </span>
            </Typography>
            <Typography variant="h1" className="text-3xl !leading-tight">
              <span className="inline-block -rotate-2 text-6xl ">
                Jeremy Prat <br />
                <span className="relative inline-block">
                  <span className="text-white">Coaching</span>
                  <br />
                  <span className="text-6xl">Personnel</span>
                  <CircleSvg className="fill-primary" />
                </span>
              </span>
            </Typography>
            <Typography variant="large" className="text-white">
              Allier entraînement rigoureux et nutrition équilibrée <br/>   pour un mode
              de vie sain et durable.
            </Typography>

            <Link
              href="#pricing"
              className={cn(
                buttonVariants({ size: "lg", variant: "default" }),
                " text-white border hover:border-orange-500 hover:text-orange-500",
              )}
            >
              <Heart size={20} className="mr-2 hover:bg-orange-500 " />
              de la Team !
            </Link>

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
              1200+ followers
            </ReviewSmall>
          </div>
          <div className="flex flex-1 justify-end ">
            <img
              src="/images/jeremy.jpg"
              className="max-w-lg rounded-md object-contain px-8 max-md:max-w-md md:px-4"
              alt="Hero images profile jeremy prat"
            />
          </div>
        </div>
      </div>
    </main>
  );
};
