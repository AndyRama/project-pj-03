'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MdHome, MdContactPhone, MdContactMail } from 'react-icons/md';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";

const iconMapping: { [key: string]: JSX.Element } = {
  icon1: (
    <MdHome className="bg/10 mr-2 mt-2 rounded-sm border-orange-500 bg-orange-500 text-orange-500" />
  ),
  icon2: (
    <MdContactPhone className="bg/10 mr-2 mt-1 rounded-sm border-orange-500 bg-orange-500 text-orange-500" />
  ),
  icon3: (
    <MdContactMail className="bg/10 mr-2 mt-1 rounded-sm border-orange-500 bg-orange-500 text-orange-500" />
  ),
};

const CardInfoContent: {
  heading: {
    title: string;
    subTitle: string;
    description: string;
  };
  step: {
    [key: string]: string;
  }[];
} = {
  heading: {
    title: '',
    subTitle: '',
    description: '',
  },
  step: [
    {
      title1: '5 Washington Square, New York, USA',
      icon1: 'icon1',
      title2: '+1 212 425 8617',
      icon2: 'icon2',
      title3: 'information@office.com',
      icon3: 'icon3',
    },
  ],
};

export type CardInfoProps = {
  className?: string;
};

export const CardInfo = ({ className }: CardInfoProps) => {
  return (
    <section className={className}>
      <div className="w-[360px] md:w-[330px] md:pl-0 xl:ml-[-16px] xl:w-[350px]">
        {CardInfoContent.step.map((step, index) => (
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
            className="group relative h-[460px] overflow-hidden rounded-md bg-[#2F2E2E] p-4 duration-300 hover:shadow-2xl"
          >
            <Card className="border-none bg-transparent">
              <CardHeader className="ml-4 flex items-start gap-3 p-0">
                {/* <MdCosntactPage className="bg/10 mr-2 mt-2 rounded-sm border-orange-500 bg-orange-500 text-orange-500" /> */}
                <Typography className="text-3xl text-white">
                  Me contacter
                </Typography>
              </CardHeader>
              <CardContent>
                {['title1', 'title2', 'title3'].map((titleKey, idx) => (
                  <div className="mt-3 flex" key={idx}>
                    <span className="text-2xl">
                      {iconMapping[step[`icon${idx + 1}`]]}
                    </span>
                    <Typography
                      className="relative pb-2 text-xl text-white duration-300 ease-in-out before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:scale-x-0 before:bg-orange-500 before:transition-all before:content-[''] hover:text-gray-500 hover:before:scale-x-100"
                    >
                      {step[titleKey]}
                    </Typography>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CardInfo;
