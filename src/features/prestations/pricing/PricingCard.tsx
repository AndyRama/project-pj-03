import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Link from "next/link";

export type PricingCardProps = {
  isPopular?: boolean;
  type: "monthly" | "yearly" | "one-time";
  id: string;
  link: string;
  title: string;
  subtitle: string;
  price: number;
  barredPrice?: number;
  currency?: string;
  features: string[];
  cta: string;
  ctaSubtitle: string;
  priceId: string;
  className?: string;
};

export const PricingCard = (props: PricingCardProps) => {
  return (
    <Card
      className={cn(
        "bg-[#2F2E2E] border-[0.5px] flex-1 p-6 ring-1 ring-gray-900/10 sm:p-4 mt-10 w-[330px] rounded-[12px]",
        {
          "relative shadow-2xl": props.isPopular,
          "mx-0": !props.isPopular,
        },
        props.className,
      )}
    >
      {props.isPopular ? (
        <div className="absolute inset-x-0 top-0 flex items-center justify-center">
          <Badge className="-translate-y-1/2 bg-orange-500 text-white">
            Populaire
          </Badge>
        </div>
      ) : null}
      <CardHeader className="flex flex-col items-center gap-1">
        <p className="text-center text-xl font-bold uppercase text-white">
          {props.title}
        </p>
        <Separator className="bg-white" />
        <div className="mt-4 flex items-end justify-center gap-2">
          <p className="text-2xl text-orange-500 md:text-3xl">
            {props.price}€
            <span className="text-md">/ Mois</span>
          </p>
        </div>
        <Typography variant="p" className="text-lg text-white">
          {props.subtitle}
        </Typography>
        <ul className="flex w-full flex-col gap-3 lg:gap-4">
          {props.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-white">
              <Check className="text-orange-500" size={20} />
              <Typography variant="muted" className="flex-1 text-white">
                {feature}
              </Typography>
            </li>
          ))}
        </ul>
        <Link href={props.link} target="_blank" rel="noreferrer" className="mt-20 w-full">
          <Button
            variant={props.isPopular ? "default" : "outline"}
            size="lg"
            className="w-full rounded-[10px] border bg-orange-700 text-base font-bold text-white shadow-md transition-all duration-300 hover:scale-105 hover:border-orange-500 hover:bg-orange-800 hover:shadow-lg"
          >
            {props.cta}
          </Button>
        </Link>
      </CardHeader>
      <CardFooter className="flex flex-col items-stretch gap-2">
        <Typography variant="muted" className="text-white">
          {props.ctaSubtitle}
        </Typography>
      </CardFooter>
    </Card>
  );
};