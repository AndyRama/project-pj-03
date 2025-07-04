"use client";

import { Typography } from "@/components/ui/typography";
import { SectionLayout } from "./../SectionLayout";
import { motion } from "framer-motion";
import { Users, Target, Pyramid, Heart } from 'lucide-react';

const features = [
  {
    icon: Pyramid ,
    title: "Méthode Globale & Scientifique ",
    description: "Notre approche unique pour la transformation physique intègre ton aspect physiologique, psychologique et physique pour des résultats complets. ",
  },
  {
    icon: Target ,
    title: "Accompagnement Personnalisé",
    description: "Bénéficie d'un programme 100% personnalisé, adapté à tes objectifs et ton quotidien, garantissant des résultats concrets et durables. ",
  },
  {
    icon: Heart,
    title: "Coaching Expert à votre écoute",
    description: "Un coach passionnés à tes côtés, Jéremy , pour un accompagnement engagé et basé sur le terrain.",
  },
  {
    icon: Users,
    title: "Transformations Prouvées ",
    description: "Rejoins les +350 personnes qui ont changé leur vie. Notre méthode prouve son efficacité pour une transformation physique durable. ",
  },
];

export const CardDescription = () => {
  return (
    <SectionLayout
      variant="default"
      size="lg"
      className="flex flex-col items-center justify-center gap-4 px-4 md:px-0"
    >
      <div className="flex w-full flex-col items-center gap-3 lg:gap-4 xl:gap-6">
        <Typography 
          variant="h2">
            Pourquoi choisir team <br/>Unlcoaching pour TA transformation ?
        </Typography>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: index * 0.2, duration: 0.5 } }}
              viewport={{ once: true }}
              className="flex flex-col items-center rounded-[10px] border border-orange-500 p-6 text-center shadow-md"
            >
              <feature.icon className="mb-4 text-4xl text-orange-500" />
              <Typography variant="h3">{feature.title}</Typography>
              <Typography variant="p">
                {feature.description}
              </Typography>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};