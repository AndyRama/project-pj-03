"use client";

import React from "react";
import { motion } from "framer-motion";
import { MdHome } from "react-icons/md";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";

const CardMapContent = {
  heading: {
    title: "",
    subTitle: "",
    description: "",
  },
  step: [
    {
      title: "Categories",
      description:
        "Lorem ipsum dolor sit, amet consecte Mollitia ipsum ectetur repellat!",
      title1: "Alimentation",
    },
  ],
};

export type CardMapProps = {
  className?: string;
};

export const CardMap = ({ className }: CardMapProps) => {
  return (
    <section className={className}>
      <div className="w-[360px] md:w-[330px] md:pl-0 xl:ml-[-16px] xl:w-[350px]">
        {CardMapContent.step.map((step, index) => (
          <motion.div
            key={step.title}
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
            whileHover={{ y: -10, transition: { duration: 0.1 } }}
            className="group relative h-[460px] overflow-hidden rounded-md bg-[#2F2E2E] p-4 duration-300 hover:shadow-2xl"
          >
            <Card className="border-none bg-transparent">
              <CardHeader className="ml-4 flex flex-row gap-3 p-0">
                {/* <span>
                  <MdHome className="bg/10 mr-2 rounded-sm border-orange-500 bg-orange-500 text-orange-500" />
                </span> */}
                <Typography className="text-3xl text-white">
                  Localisation
                </Typography>
              </CardHeader>
              <CardContent>
                <iframe
                  className="mt-5 h-[350px] w-full rounded-md"
                  src={
                    "https://www.google.com/maps/embed/v1/place?key=AIzaSyBwOWZ_C1sw6lYJhxYk_LJJCI2uM9GW8IA&q=220 avenue de l'argonne,merignac,bordeaux,france"
                  }
                  allowFullScreen
                ></iframe>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CardMap;