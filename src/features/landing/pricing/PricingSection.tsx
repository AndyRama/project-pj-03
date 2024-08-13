import { Typography } from "@/components/ui/typography";
import { SectionLayout } from "../SectionLayout";
import { PricingCard, type PricingCardProps } from "./PricingCard";

export type PricingProps = {
  cards: PricingCardProps[];
};

export const Pricing = (props: PricingProps) => {
  return (
    <SectionLayout
      size="lg"
      id="pricing"
      className="flex w-full flex-col flex-wrap items-center gap-16"
    >
      <div className="space-y-2 text-center">
        <Typography
          variant="small"
          className="font-extrabold uppercase text-primary"
        >
          Pack
        </Typography>
        <Typography variant="h2">Musculation / Perte de poids</Typography>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {props.cards.map((card, i) => (
          <PricingCard key={i} {...card} />
        ))}
      </div>
    </SectionLayout>
  );
};
