"use client";

import { DotPattern } from "@/components/svg/DotPattern";
import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";
import { ClientMarkdown } from "@/features/markdown/ClientMarkdown";
import type { ReactNode } from "react";
import { SectionLayout } from "./SectionLayout";

export const FeaturesSection = ({
  features,
}: {
  features: FeatureLineProps[];
}) => {
  return (
    <SectionLayout size="lg" className="relative " id="features">
      <div className="relative flex flex-col gap-16 px-4 lg:gap-28">

        {features.map((f, i) => {
          return (
            <FeatureLine
              key={i}
              badge={f.badge}
              title={f.title}
              description={f.description}
              description1={f.description1}
              description2={f.description2}  
              component={f.component}
            />
          );
        })}
      </div>
    </SectionLayout>
  );
};

type FeatureLineProps = {
  badge: string;
  title: string;
  description: string;
  description1: string;
  description2: string;
  component: ReactNode;
};

export const FeatureLine = (props: FeatureLineProps) => {
  return (
    <div className="flex items-center gap-4 odd:flex-row-reverse max-lg:!flex-col">
      <div className="flex flex-1 flex-col items-start gap-4">
        <Badge color="pink">{props.badge}</Badge>
        <Typography variant="h2" className="">
          {props.title}
        </Typography>
        <ClientMarkdown className="prose-lg">
          {props.description}
        </ClientMarkdown>
        <ClientMarkdown className="prose-lg">
          {props.description1}
        </ClientMarkdown>
        <ClientMarkdown className="prose-lg">
          {props.description2}
        </ClientMarkdown>
      </div>
      <div className="w-full max-w-md">
        <DotPattern>{props.component}</DotPattern>
      </div>
    </div>
  );
};
