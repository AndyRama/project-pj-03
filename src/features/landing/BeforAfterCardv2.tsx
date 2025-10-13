/* eslint-disable tailwindcss/migration-from-tailwind-2 */
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Layout } from "@/features/page/layout";
import { Card, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { ComponentPropsWithoutRef } from "react";
import { Typography } from "@/components/ui/typography";

export type StoryCardProps = {
  alt: string;
  width: number;
  height: number;
  img: string;
  imgAfter: string; // Image à afficher au hover
  index: number;
  tailwindClass?: string;
} & ComponentPropsWithoutRef<"div">;

export const StoryCard: React.FC<StoryCardProps> = ({
  alt,
  width,
  height,
  img,
  imgAfter,
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
        <CardHeader className="relative p-0">
          {/* Image "Avant" */}
          <Image
            src={img}
            alt={`${alt} - Avant`}
            width={width}
            height={height}
            className={`${tailwindClass ? tailwindClass : ""} h-[300px] w-full object-cover object-center transition-all duration-500 ease-in-out group-hover:opacity-0`}
          />
          {/* Image "Après" */}
          <Image
            src={imgAfter}
            alt={`${alt} - Après`}
            width={width}
            height={height}
            className={`${tailwindClass ? tailwindClass : ""} absolute left-0 top-0 h-[300px] w-full object-cover object-center opacity-0 transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:opacity-100`}
          />
          {/* Overlay avec texte */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-all duration-500 ease-in-out group-hover:bg-opacity-20">
            <div className="rounded-lg bg-black bg-opacity-50 px-4 py-2 text-lg font-bold text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              AVANT / APRÈS
            </div>
          </div>
        </CardHeader>
      </Card>
    </motion.div>
  );
};

export const StoryCardGrid: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const storyContent = {
    column1: {
      initialImgs: [
        {
          img: "/images/story1.png",
          imgAfter: "/images/story1.png", 
          alt: "Team",
          width: 1188,
          height: 1413,
          tailwindClass: "mt-10 md:mt-32 pb-10 h-full",
        },
        {
          img: "/images/story2.jpg",
          imgAfter: "/images/story2.jpg", 
          alt: "Woman making a plan",
          width: 1188,
          height: 1413,
          tailwindClass: "pb-10",
        },
      ],
      hiddenImgs: [
        {
          img: "/images/story3.jpg",
          imgAfter: "/images/story3.jpg", 
          alt: "Woman making a plan",
          width: 1188,
          height: 1413,
          tailwindClass: "h-full pb-10",
        },
      ],
    },
    column2: {
      initialImgs: [
        {
          img: "/images/story4.jpg",
          imgAfter: "/images/story4.jpg", 
          alt: "White curvy building",
          width: 1188,
          height: 1413,
          tailwindClass: "mt-10 h-56 lg:h-96 pb-10",
        },
        {
          img: "/images/story5.jpg",
          imgAfter: "/images/story5.jpg", 
          alt: "White curvy building",
          width: 1188,
          height: 1413,
          tailwindClass: "h-full lg:h-100 pb-10",
        },
      ],
      hiddenImgs: [
        {
          img: "/images/story6.jpg",
          imgAfter: "/images/story6.jpg", 
          alt: "White curvy building",
          width: 1188,
          height: 1413,
          tailwindClass: "h-66 lg:h-100 pb-10",
        },
        {
          img: "/images/story7.jpg",
          imgAfter: "/images/story7.jpg", 
          alt: "Team meeting",
          width: 1188,
          height: 1413,
          tailwindClass: "h-56 lg:h-96",
        },
      ],
    },
    column3: {
      initialImgs: [
        {
          img: "/images/story8.jpg",
          imgAfter: "/images/story8.jpg", 
          alt: "Man writing a plan",
          width: 1188,
          height: 1413,
          tailwindClass: "mt-10 md:mt-32 pb-10 h-full",
        },
        {
          img: "/images/story9.jpg",
          imgAfter: "/images/story9.jpg", 
          alt: "Production",
          width: 1188,
          height: 1413,
          tailwindClass: "pb-10 h-106",
        },
      ],
      hiddenImgs: [
        {
          img: "/images/story13.jpg",
          imgAfter: "/images/story13.jpg", 
          alt: "Production",
          width: 1188,
          height: 1413,
          tailwindClass: "pb-10 h-full",
        },
      ],
    },
  };



  return (
    <Layout>
      <div className="container mx-auto mb-2 mt-0 justify-center rounded-md lg:mt-20">
        <div className="mb-8 text-center">
          <Typography
            variant="small"
            className="font-extrabold uppercase text-primary"
          >
            Exemple de 
          </Typography>
          <Typography variant="h2">Avant / Après</Typography>
        </div>
        
        <div className="md:flex md:px-4">
          <div className="px-4 md:w-4/12">
            {storyContent.column1.initialImgs.map((card, index) => (
              <StoryCard
                key={index}
                index={index}
                alt={card.alt}
                width={card.width}
                height={card.height}
                img={card.img}
                imgAfter={card.imgAfter}
                tailwindClass={card.tailwindClass}
              />
            ))}
            {showAll && storyContent.column1.hiddenImgs.map((card, index) => (
              <StoryCard
                key={`hidden-${index}`}
                index={index + storyContent.column1.initialImgs.length}
                alt={card.alt}
                width={card.width}
                height={card.height}
                img={card.img}
                imgAfter={card.imgAfter}
                tailwindClass={card.tailwindClass}
              />
            ))}
          </div>
          <div className="px-4 md:w-4/12">
            {storyContent.column2.initialImgs.map((card, index) => (
              <StoryCard
                key={index + storyContent.column1.initialImgs.length}
                index={index}
                alt={card.alt}
                width={card.width}
                height={card.height}
                img={card.img}
                imgAfter={card.imgAfter}
                tailwindClass={card.tailwindClass}
              />
            ))}
            {showAll && storyContent.column2.hiddenImgs.map((card, index) => (
              <StoryCard
                key={`hidden-${index + storyContent.column1.initialImgs.length}`}
                index={index + storyContent.column2.initialImgs.length}
                alt={card.alt}
                width={card.width}
                height={card.height}
                img={card.img}
                imgAfter={card.imgAfter}
                tailwindClass={card.tailwindClass}
              />
            ))}
          </div>
          <div className="px-4 md:w-4/12">
            {storyContent.column3.initialImgs.map((card, index) => (
              <StoryCard
                key={
                  index +
                  storyContent.column1.initialImgs.length +
                  storyContent.column2.initialImgs.length
                }
                index={index}
                alt={card.alt}
                width={card.width}
                height={card.height}
                img={card.img}
                imgAfter={card.imgAfter}
                tailwindClass={card.tailwindClass}
              />
            ))}
            {showAll && storyContent.column3.hiddenImgs.map((card, index) => (
              <StoryCard
                key={`hidden-${
                  index +
                  storyContent.column1.initialImgs.length +
                  storyContent.column2.initialImgs.length
                }`}
                index={index + storyContent.column3.initialImgs.length}
                alt={card.alt}
                width={card.width}
                height={card.height}
                img={card.img}
                imgAfter={card.imgAfter}
                tailwindClass={card.tailwindClass}
              />
            ))}
          </div>
        </div>

        {!showAll && (
          <div className="mt-8 text-center">
            <Button
              onClick={() => setShowAll(true)}
              variant="outline"
              className="mr-4 border bg-orange-500 px-8 py-2 text-base font-bold text-white shadow-md transition-all duration-300 hover:scale-105 hover:border-orange-500 hover:bg-orange-600 hover:shadow-lg"
            >
              mr-4
              Voir plus
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default StoryCardGrid;