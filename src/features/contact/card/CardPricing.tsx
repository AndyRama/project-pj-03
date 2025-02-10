'use client';

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
// import { BiLayer } from "react-icons/bi";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";

const CardPricingContent = {
  heading: {
    title: 'Prestations',
    subTitle: '',
    description: 'Vous pouvez retrouver toutes nos prestations, services et ressources sur cette page',
  },
  step: [
    {
      btn: {
        href: "/prestations",
        label: "Plus d'information",
      },
    },
  ],
};

export type CardPricingProps = {
  className?: string;
};

const CardPricing = ({ className }: CardPricingProps) => {
  return (
    <section className={className}>
      <div className="w-[330px] xl:w-[380px]">
        {CardPricingContent.step.map((step, index) => (
          <motion.div
            key={index}
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
            className="group relative h-[460px] w-full overflow-hidden bg-[#2F2E2E] p-4 duration-300 hover:shadow-2xl"
          >
            <Card className="border-none bg-transparent">
              <CardHeader className="ml-4 flex flex-row gap-3 p-0">
                <Typography className="text-3xl text-white">
                  {CardPricingContent.heading.title}
                </Typography>
              </CardHeader>
              <CardContent>
                <Typography className="mb-2 text-justify text-[15px] leading-relaxed text-gray-500 transition-all duration-300 ease-in-out group-hover:text-white">
                  {CardPricingContent.heading.description}
                </Typography>
                <Link href={step.btn.href}>
                  <Typography className="cursor-pointer border border-orange-500 px-8 py-2 text-white">
                    {step.btn.label}
                  </Typography>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CardPricing;
