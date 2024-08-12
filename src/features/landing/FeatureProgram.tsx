import { DotPattern } from "@/components/svg/DotPattern";
import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";
import { ClientMarkdown } from "@/features/markdown/ClientMarkdown";
import type { ReactNode } from "react";
import { SectionLayout } from "./SectionLayout";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import Link from "next/link";

export const FeatureProgram = ({
  features,
}: {
  features: FeatureLineProps[];
}) => {
  return (
    <SectionLayout size="lg" className="relative ">
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
    <div className="flex items-center gap-4 max-lg:flex-col">
      <div className="flex flex-1 flex-col items-start gap-4 px-4">
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

        {/* Bouton action */}
        <Link
          href="#pricing"
          className={cn(
            buttonVariants({ size: "lg", variant: "default" }),
            "text-white border hover:border-orange-500 hover:text-orange-500",
          )}
        >
          {/* <Heart size={20} className="mr-2 hover:bg-orange-500" /> */}
          Je change de vie !
        </Link>

      </div>
      <div className="w-full max-w-md">
        <DotPattern>{props.component}</DotPattern>
      </div>
    </div>
  );
};
