'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Layout } from "@/features/page/layout";
import { Card, CardHeader } from "@/components/ui/card";
import type { ComponentPropsWithoutRef } from "react";

// Définition des props pour StoryCard
export type StoryCardProps = {
  alt: string;
  width: number;
  height: number;
  img: string;
  index: number;
  tailwindClass?: string;
} & ComponentPropsWithoutRef<"div">;

export const StoryCard = ({ alt, width, height, img, index, tailwindClass }: StoryCardProps) => {
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
      <Card className= "border-none bg-transparent">
        <CardHeader className="p-0">
          <Image
            src={img}
            alt={alt}
            width={width}
            height={height}
            className={`${tailwindClass ? tailwindClass : ''} h-[300px] w-full object-cover object-center transition-all duration-300 ease-in-out group-hover:scale-110`}
          />
        </CardHeader>
      </Card>
    </motion.div>
  )
}

export const StoryCardGrid = () => {
  const storyContent = {
    column1: {
      imgs: [
        {
          img: '/images/story1.png',
          alt: 'Team',
          width: 1188,
          height: 1413,
          tailwindClass: 'mt-32 pb-10 h-56 lg:h-full',
        },
        {
          img: '/images/story2.jpg',
          alt: 'Woman making a plan',
          width: 1188,
          height: 1413,
          tailwindClass: 'pb-10',
        },
        {
          img: '/images/story3.jpg',
          alt: 'Woman making a plan',
          width: 1188,
          height: 1413,
          tailwindClass: 'h-full pb-10',
        },
      ],
    },
    column2: {
      imgs: [
        {
          img: '/images/story4.jpg',
          alt: 'White curvy building',
          width: 1188,
          height: 1413,
          tailwindClass: 'mt-10 h-56 lg:h-96 pb-10',
        },
        {
          img: '/images/story5.jpg',
          alt: 'White curvy building',
          width: 1188,
          height: 1413,
          tailwindClass: 'h-56 lg:h-96 pb-10 ',
        },
        {
          img: '/images/story6.jpg',
          alt: 'White curvy building',
          width: 1188,
          height: 1413,
          tailwindClass: 'h-56 lg:h-full pb-10',
        },
        {
          img: '/images/story7.jpg',
          alt: 'Team meeting',
          width: 1188,
          height: 1413,
          tailwindClass: 'h-56 lg:h-96',
        },
      ],
    },
    column3: {
      imgs: [
        {
          img: '/images/story8.jpg',
          alt: 'Man writing a plan',
          width: 1188,
          height: 1413,
          tailwindClass: 'mt-32 pb-10 h-full',
        },
        {
          img: '/images/story9.jpg',
          alt: 'Production',
          width: 1188,
          height: 1413,
          tailwindClass: 'pb-10',
        },
        {
          img: '/images/story1.png',
          alt: 'Man writing a plan',
          width: 1188,
          height: 1413,
          tailwindClass: 'h-full pb-10',
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
              key={index + storyContent.column1.imgs.length + storyContent.column2.imgs.length}
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
    </Layout>
  )
}

export default StoryCardGrid;
