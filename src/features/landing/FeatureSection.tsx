"use client";

import { DotPattern } from "@/components/svg/DotPattern";
import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";
import { ClientMarkdown } from "@/features/markdown/ClientMarkdown";
import type { ReactNode } from "react";
import { SectionLayout } from "./SectionLayout";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const FeaturesSection = ({
  features,
}: {
  features: FeatureLineProps[];
}) => {
  return (
    <SectionLayout size="lg" className="relative" id="features">
      <div className="relative flex flex-col gap-16 px-4 lg:gap-28">
        {features.map((f, i) => (
          <FeatureLine
            key={i}
            badge={f.badge}
            title={f.title}
            description={f.description}
            description1={f.description1}
            description2={f.description2}
            component={f.component}
          />
        ))}
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
  // Référence pour l'élément contenant le composant animé
  const imageRef = useRef(null);
  // Animation de parallaxe basée sur le scroll
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["20%", "-50%"]);

  return (
    <div className="flex items-center gap-4 odd:flex-row-reverse max-lg:!flex-col">
      <div className="flex flex-1 flex-col items-start gap-4 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.5 },
          }}
          viewport={{ once: true }}
        >
          <Badge color="pink">{props.badge}</Badge>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.3, duration: 0.5 },
          }}
          viewport={{ once: true }}
        >
          <Typography variant="h2">{props.title}</Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.4, duration: 0.5 },
          }}
          viewport={{ once: true }}
        >
          <ClientMarkdown className="prose-lg">
            {props.description}
          </ClientMarkdown>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.5, duration: 0.5 },
          }}
          viewport={{ once: true }}
        >
          <ClientMarkdown className="prose-lg">
            {props.description1}
          </ClientMarkdown>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.6, duration: 0.5 },
          }}
          viewport={{ once: true }}
        >
          <ClientMarkdown className="prose-lg">
            {props.description2}
          </ClientMarkdown>
        </motion.div>
      </div>

      <motion.div
        className="w-full max-w-md"
        ref={imageRef}
        style={{ y: imgY }}
      >
        <DotPattern>{props.component}</DotPattern>
      </motion.div>
    </div>
  );
};
