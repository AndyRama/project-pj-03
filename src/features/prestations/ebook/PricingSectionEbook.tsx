"use client";

import { useState } from "react";
import { Typography } from "@/components/ui/typography";
import { SectionLayout } from "../../landing/SectionLayout";
import { PricingCard, type PricingCardProps } from "../ebook/PricingCardEbook";

export type PricingProps = {
  cards: PricingCardProps[];
};

export const PricingEbook = (props: PricingProps) => {
  const [visibleCards, setVisibleCards] = useState(3);

  // const showMoreCards = () => {
  //   setVisibleCards(visibleCards + 3);
  // };

  return (
    <SectionLayout
      size="lg"
      id="E-Books"
      className="flex w-full flex-col flex-wrap items-center gap-16"
    >
      <div className="space-y-2 text-center">
        <Typography
          variant="small"
          className="font-extrabold uppercase text-primary"
        >
          Autres contenus
        </Typography>
        <Typography variant="h2">Les E-Books</Typography>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-4">
        {props.cards.slice(0, visibleCards).map((card, i) => (
          <PricingCard key={i} {...card} />
        ))}
      </div>
      
      {/* {visibleCards < props.cards.length && (
        <button
          onClick={showMoreCards}
          className="right-0 mt-4 bg-primary bg-gradient-to-r from-orange-400 to-orange-700 px-4 py-2 text-black hover:bg-transparent hover:text-white"
        >
          voir plus de contenue
        </button>
      )} */}
    </SectionLayout>
  );
};
