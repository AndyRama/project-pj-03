'use client'

import React from "react";
import { motion } from "framer-motion";
import { BiHardHat, BiPaintRoll, BiNote, BiLayer } from "react-icons/bi";
import { Typography } from "@/components/ui/typography";
import { Layout, LayoutContent } from "@/features/page/layout";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const PricingContentDetails: { features: Feature[] } = {
  features: [
    {
      icon: BiHardHat,
      title: "Transformation Physique",
      description:
        "Prise de masse musculaire : Si votre objectif est de sculpter et tonifier votre corps, gagner en volume, la méthode adaptée est la prise de masse musculaire. Elle repose sur un entrainement adapté et rigoureux et également sur une alimentation saine, variée, riche en protéines (animales et/ou végétales) et en glucides. Pour cela, je vous propose des programmes musculation et alimentaire adaptés à vos objectifs et à votre niveau.",
    },
    {
      icon: BiNote,
      title: "Préparation aux Compétitions",
      description:
        "Coaching spécialisé pour les athlètes : si la compétition, le dépassement de soi et la discipline sont essentiels à votre vie et à votre bien-être, se fixer des objectifs concrets est un moyen efficace de les atteindre. Je vous propose un suivi musculation et alimentaire personnalisés pour relever les défis que vous vous fixerez. En tant qu’athlète, je sais également que le mental est mis à rude épreuve lors des préparations. Je serais également présent pour vous écouter et vous rebooster lorsque cela sera nécessaire.",
    },
    {
      icon: BiLayer,
      title: "Maintien de l'Activité Physique",
      description:
        "Perte de poids : Si votre objectif est la perte de masse grasse, la méthode adaptée repose sur une alimentation saine et raisonnée et sur un entrainement rigoureux. L’objectif étant certes la perte de poids mais surtout que celle-ci s’inscrive dans la durée. Pour cela il est nécessaire d’avoir un suivi régulier et personnalisé et surtout d’avancer main dans la main avec moi. Le mental jouant un très grand rôle, vous devez garder en tête que je suis également présent pour être à votre écoute. Je suis convaincu que pour réussir, notre relation doit être basée sur la confiance et la transparence.",
    },
    {
      icon: BiPaintRoll,
      title: "Support pour TCA",
      description:
        "Coaching spécialisé pour les candidats aux concours de police, pompier, armée, gendarmerie. La réussite de ces concours et des carrières requiert une très bonne santé physique et mentale. En tant qu’ancien militaire, je connais parfaitement les facultés requises pour réussir ces concours et je peux vous apporter un suivi personnalisé et efficace.",
    },
  ],
};

export const PricingDetails: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <section className={`pb-20 ${className}`}>
      <Layout>
        <div className="transform-gpu blur-3xl">
          <div className="absolute left-0 -z-20 h-64 w-56 bg-gradient-to-tr from-orange-500 to-orange-800 opacity-30 md:opacity-50"></div>
        </div>
        <LayoutContent className="container mx-auto px-4">
          <Typography variant="h3" className="text-center text-orange-500">
            Ce que tu obtiens
          </Typography>
          <Typography variant="h2" className="mb-20 text-center text-white">
            Détails de mon offre
          </Typography>
          <div className="justify-center lg:flex">
            <div className="flex w-full items-center gap-0 lg:w-10/12">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                {PricingContentDetails.features.map((feature, index) => {
                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          delay: index * 0.2,
                          duration: 0.5,
                        },
                      }}
                      viewport={{ once: true }}
                      className="relative z-40 flex items-start gap-3"
                    >
                      <div>
                    
                        <Typography variant="h3" className="mb-4 flex text-white">
                        <span className="mr-4 text-3xl text-orange-500">
                        <feature.icon />
                      </span>
                          {feature.title}
                        </Typography>
                        <Typography
                          variant="p"
                          className="mb-7 text-justify leading-relaxed text-white text-opacity-75"
                        >
                          <span>• </span>
                          {feature.description}
                        </Typography>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </LayoutContent>
        <div className="transform-gpu blur-3xl">
          <div className="absolute right-0 -z-20 h-64 w-56 bg-gradient-to-tr from-orange-500 to-orange-800 opacity-30 md:opacity-50"></div>
        </div>
      </Layout>
    </section>
  );
};
