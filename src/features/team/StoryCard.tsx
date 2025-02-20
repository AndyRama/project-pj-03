"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Layout } from "@/features/page/layout";
import { Card, CardHeader } from "@/components/ui/card";
import type { ComponentPropsWithoutRef } from "react";
import { Typography } from "@/components/ui/typography";

export type StoryCardProps = {
  alt: string;
  width: number;
  height: number;
  img: string;
  index: number;
  tailwindClass?: string;
} & ComponentPropsWithoutRef<"div">;

export const StoryCard: React.FC<StoryCardProps> = ({
  alt,
  width,
  height,
  img,
  index,
  tailwindClass,
}) => {
  const delay = index * 0.05;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          delay,
          duration: 0.5,
        },
      }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded"
    >
      <Card className="border-none bg-transparent">
        <CardHeader className="p-0">
          <Image
            src={img}
            alt={alt}
            width={width}
            height={height}
            className={`${tailwindClass ? tailwindClass : ""} h-[300px] w-full object-cover object-center transition-all duration-300 ease-in-out group-hover:scale-110`}
          />
        </CardHeader>
      </Card>
    </motion.div>
  );
};

export const StoryText: React.FC = () => {
  const storyText = {
    heading: "Chère communauté,",
    p1: "Je tiens à exprimer ma profonde gratitude pour votre soutien continu et votre engagement envers notre programme de formation en ligne. Vos retours positifs et votre enthousiasme sont une source d'inspiration constante pour moi. Voir vos progrès et savoir que ma formation vous aide à atteindre vos objectifs me remplit de fierté et de satisfaction. Votre réussite est ma plus grande récompense, et je suis honoré de faire partie de votre parcours.",
    p2: "N'hésitez pas à partager vos expériences et vos réalisations avec moi et avec le reste de la communauté. Ensemble, nous pouvons continuer à apprendre, à grandir et à nous surpasser. Merci encore pour votre confiance et votre soutien. J'ai hâte de continuer à travailler avec vous et à célébrer vos succès futurs.",
    signature: "/images/Fake_Signature.svg",
    name: "Jeremy Prat |",
    roleTitle: "Coach Sportif",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.3, duration: 0.5 },
      }}
      viewport={{ once: true }}
      className="mx-auto mt-32 w-full flex-col text-left lg:flex lg:w-6/12"
    >
      {storyText.heading && (
        <Typography variant="h3" className="mb-5 text-2xl  md:text-3xl">
          {storyText.heading}
        </Typography>
      )}

      {storyText.p1 && (
        <Typography variant="p" className="mb-7 leading-relaxed ">
          {storyText.p1}
        </Typography>
      )}

      {storyText.p2 && (
        <Typography variant="p" className="mb-7 leading-relaxed ">
          {storyText.p2}
        </Typography>
      )}

      <div>
        <Image
          src={storyText.signature}
          alt={storyText.name}
          width={338}
          height={113}
          className="mb-2 block w-48"
        />
        <strong className="mb-2 block font-medium ">
          {storyText.name}{" "}
          <span className="text-orange-500">{storyText.roleTitle}</span>
        </strong>
      </div>
    </motion.div>
  );
};

export const StoryCardGrid: React.FC = () => {
  const storyContent = {
    column1: {
      imgs: [
        {
          img: "/images/story1.png",
          alt: "Team",
          width: 1188,
          height: 1413,
          tailwindClass: "mt-10 md:mt-32 pb-10 h-full",
        },
        {
          img: "/images/story2.jpg",
          alt: "Woman making a plan",
          width: 1188,
          height: 1413,
          tailwindClass: "pb-10",
        },
        {
          img: "/images/story3.jpg",
          alt: "Woman making a plan",
          width: 1188,
          height: 1413,
          tailwindClass: "h-full pb-10",
        },
        {
          img: "/images/story11.jpg",
          alt: "Woman making a plan",
          width: 1188,
          height: 1413,
          tailwindClass: "pb-10",
        },
        {
          img: "/images/story14.jpg",
          alt: "Woman making a plan",
          width: 1188,
          height: 1413,
          tailwindClass: "h-full pb-10",
        },
        {
          img: "/images/story17.jpg",
          alt: "Woman making a plan",
          width: 1188,
          height: 1413,
          tailwindClass: "h-full pb-10",
        },
      ],
    },
    column2: {
      imgs: [
        {
          img: "/images/story4.jpg",
          alt: "White curvy building",
          width: 1188,
          height: 1413,
          tailwindClass: "mt-10 h-56 lg:h-96 pb-10",
        },
        {
          img: "/images/story5.jpg",
          alt: "White curvy building",
          width: 1188,
          height: 1413,
          tailwindClass: "h-full lg:h-100 pb-10",
        },
        {
          img: "/images/story6.jpg",
          alt: "White curvy building",
          width: 1188,
          height: 1413,
          tailwindClass: "h-66 lg:h-100 pb-10",
        },
        {
          img: "/images/story7.jpg",
          alt: "Team meeting",
          width: 1188,
          height: 1413,
          tailwindClass: "h-56 lg:h-96",
        },
        {
          img: "/images/story12.jpg",
          alt: "White curvy building",
          width: 1188,
          height: 1413,
          tailwindClass: "h-full lg:h-100 pb-10",
        },
        {
          img: "/images/story15.jpg",
          alt: "White curvy building",
          width: 1188,
          height: 1413,
          tailwindClass: "h-66 lg:h-100 pb-10",
        },
        {
          img: "/images/story18.jpg",
          alt: "Team meeting",
          width: 1188,
          height: 1413,
          tailwindClass: "h-56 lg:h-96",
        },
      ],
    },
    column3: {
      imgs: [
        {
          img: "/images/story8.jpg",
          alt: "Man writing a plan",
          width: 1188,
          height: 1413,
          tailwindClass: "mt-10 md:mt-32 pb-10 h-full",
        },
        {
          img: "/images/story9.jpg",
          alt: "Production",
          width: 1188,
          height: 1413,
          tailwindClass: "pb-10 h-106",
        },
        {
          img: "/images/story13.jpg",
          alt: "Production",
          width: 1188,
          height: 1413,
          tailwindClass: "pb-10 h-full",
        },
        {
          img: "/images/story16.jpg",
          alt: "Man writing a plan",
          width: 1188,
          height: 1413,
          tailwindClass: "h-full pb-10",
        },
        {
          img: "/images/story19.jpg",
          alt: "Man writing a plan",
          width: 1188,
          height: 1413,
          tailwindClass: "h-full pb-10",
        },
      ],
    },
  };

  return (
    <Layout>
      <div className="container mx-auto mb-2 justify-center rounded-md md:flex md:px-4">
        <div className="px-4 md:w-4/12">
          {storyContent.column1.imgs.map((card, index) => (
            <StoryCard
              key={index}
              index={index}
              alt={card.alt}
              width={card.width}
              height={card.height}
              img={card.img}
              tailwindClass={card.tailwindClass}
            />
          ))}
        </div>
        <div className="px-4 md:w-4/12">
          {storyContent.column2.imgs.map((card, index) => (
            <StoryCard
              key={index + storyContent.column1.imgs.length}
              index={index}
              alt={card.alt}
              width={card.width}
              height={card.height}
              img={card.img}
              tailwindClass={card.tailwindClass}
            />
          ))}
        </div>
        <div className="px-4 md:w-4/12">
          {storyContent.column3.imgs.map((card, index) => (
            <StoryCard
              key={
                index +
                storyContent.column1.imgs.length +
                storyContent.column2.imgs.length
              }
              index={index}
              alt={card.alt}
              width={card.width}
              height={card.height}
              img={card.img}
              tailwindClass={card.tailwindClass}
            />
          ))}
        </div>
      </div>
      <StoryText />
    </Layout>
  );
};

export default StoryCardGrid;
