'use client';

import React from 'react';
import { motion } from 'framer-motion';

const subHeroContent = {
  heading: {
    title: '',
    subTitle: '',
  },
};

export const SubHero = ({ className, title, subTitle }: { className: string, title: string, subTitle: string }) => {
  title = title || subHeroContent.heading.title;
  subTitle = subTitle || subHeroContent.heading.subTitle;

  return (
    <section className={`${className}`}>
      {/* Image - main - bg-cover */}
      <div
        // eslint-disable-next-line tailwindcss/enforces-negative-arbitrary-values
        className="-mt-[150px] h-[648px] w-full bg-cover bg-center lg:h-[900px]"
        style={{
          backgroundImage: `url('/images/salle-de-sport.jpg')`,
        }}
      >
        <div className="mx-auto items-center justify-between lg:flex lg:w-10/12">
          <div className="container mx-auto px-4 pt-20">
            <div className="mx-auto mt-[120px] text-center lg:mt-[280px] lg:max-w-3xl">
              {/* Subtitle */}
              {subTitle && (
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.03, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  className="mb-5 inline-block text-[18px] font-bold uppercase tracking-[3px] text-orange-500"
                >
                  {subTitle}
                </motion.span>
              )}

              {/* Title */}
              {title && (
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.06, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-white md:text-5xl xl:text-7xl"
                >
                  {title}
                </motion.h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubHero;
