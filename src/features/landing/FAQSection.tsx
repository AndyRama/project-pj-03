"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Typography } from "@/components/ui/typography";
import { ClientMarkdown } from "../markdown/ClientMarkdown";
import { SectionLayout } from "./SectionLayout";

type Faq = {
  question: string;
  answer: string;
};

export type FeaturesPreviewProps = {
  faq: Faq[];
};

export const FAQSection = (props: FeaturesPreviewProps) => {
  return (
    <>
      <div className="transform-gpu blur-3xl">
        <div className="absolute right-0 -z-20 h-64 w-56 bg-gradient-to-tr from-orange-500 to-orange-800 opacity-30 md:opacity-50"></div>
      </div>
      <SectionLayout size="lg" className="flex max-lg:flex-col px-4 md:px-0">
        <div className="flex-1 space-y-2 ">
          <Typography className="font-extrabold uppercase text-primary">
            FAQ
          </Typography>
          <Typography variant="h2" className="text-5xl">
            Questions fréquentes
          </Typography>
        </div>
        <div className="flex-1">
          <Accordion type="single" collapsible>
            {props.faq.map((e, i) => {
              return (
                <AccordionItem value={`item-${i}`} key={i}>
                  <AccordionTrigger className="text-left text-lg">
                    {e.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base">
                    <ClientMarkdown>{e.answer}</ClientMarkdown>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </SectionLayout>
      <div className="transform-gpu blur-3xl">
        <div className="absolute left-0 -z-20 h-64 w-56 bg-gradient-to-tr from-orange-500 to-orange-800 opacity-30 md:opacity-50"></div>
      </div>
    </>
  );
};
