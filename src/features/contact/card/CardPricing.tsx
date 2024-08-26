'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BiLayer } from 'react-icons/bi';

const CardPricingContent = {
  step: [
    {
      title: 'Pricing',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia ipsum et repellat!',
      btn: {
        href: '/prestations',
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
      <div className="w-[360px] md:w-[330px] md:pl-0 xl:ml-[-16px] xl:w-[350px]">
        {CardPricingContent.step.map((step, index) => (
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
            className="group relative h-[460px] w-full overflow-hidden rounded-md bg-[#2F2E2E] p-4 duration-300 hover:shadow-2xl"
          >
            <div className="relative mb-10 mt-1 flex flex-col items-start gap-3 px-2 lg:px-4">
              <div className="flex items-center text-2xl">
                {/* <BiLayer className="bg/10 mr-2 rounded-sm border-orange-500 bg-orange-500 text-orange-500" /> */}
                <h2 className="text-3xl text-white">Prestations</h2>
              </div>
              <p className="mb-2 text-justify text-[15px] leading-relaxed text-gray-500 transition-all duration-300 ease-in-out group-hover:text-white">
                {step.description}
              </p>
              <Link href={step.btn.href}>
                <p className="text-white">{step.btn.label}</p>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CardPricing;
