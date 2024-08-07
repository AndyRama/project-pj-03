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
        className="md-h-[110vh] -mt-[156px] bg-cover bg-fixed "
        style={{
          backgroundImage: `url('/images/salle-de-sport.jpg')`,
        }}
      >
        <div className="relative m-auto my-12 flex min-h-[700px] w-full max-w-7xl items-center gap-4 px-8 max-md:flex-col">
          <div className="relative flex flex-1 flex-col items-start gap-4 lg:gap-6 xl:gap-8">
            <Typography variant="h1" className="text-5xl !leading-tight">
              <span className="inline-block -rotate-2 text-6xl text-white ">
                Jeremy Prat <br />
                <span className="relative inline-block">
                  <span>Coaching</span>
                  <br />
                  <span className="text-6xl ">Personnel</span>
                  <CircleSvg className="fill-primary" />
                </span>
              </span>
            </Typography>
            <Typography variant="large">
              Allier entraînement rigoureux et nutrition équilibrée pour un mode
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
          <div className="flex flex-1 justify-end px-8">
            <img
              src="/images/jeremy.jpg"
              className="max-w-md rounded-md object-contain max-md:max-w-md"
              alt="Hero images"
            />
          </div>
        </div>
      </div>
    </main>
  );
};
