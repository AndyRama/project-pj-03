"use client";

import React from "react";
import { BiBulb } from "react-icons/bi";
import { MdFitnessCenter, MdOutlineSportsKabaddi } from "react-icons/md";
import Link from "next/link";

import { motion } from "framer-motion";

interface CardCategorieProps {
  className?: string; // Le type de className est maintenant string
}

const iconMapping: { [key: string]: React.JSX.Element } = {
  icon1: (
    <MdFitnessCenter
      data-testid="icon1"
      // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
      className="text-black-300 -mt-1 mr-2 rounded-[5px] bg-opacity-10 bg-gradient-to-r from-orange-500 to-orange-800 px-1"
    />
  ),
  icon2: (
    <BiBulb
      data-testid="icon2"
      // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
      className="text-black-300 -mt-1 mr-2 rounded-[5px] bg-opacity-10 bg-gradient-to-r from-orange-500 to-orange-800 px-1"
    />
  ),
  icon3: (
    <MdOutlineSportsKabaddi
      data-testid="icon3"
      // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
      className="text-black-300 -mt-1 mr-2 rounded-[5px] bg-opacity-10 bg-gradient-to-r from-orange-500 to-orange-800 px-1"
    />
  ),
};

const CardCategoriesContent = {
  heading: {
    title: "Catégories",
    subTitle: "Découvrez nos catégories",
    description: "Explorez différents domaines d'intérêt.",
  },
  categories: [
    {
      title: "Fitness",
      icon: "icon1",
      btn: {
        href: "/posts/?tag=Fitness#Blog",
        label: "Fitness",
      },
    },
    {
      title: "Entraînement",
      icon: "icon3",
      btn: {
        href: "/posts/?tag=Entrainement#Blog",
        label: "Entraînement",
      },
    },
    {
      title: "Competition",
      icon: "icon2",
      btn: {
        href: "/posts/?tag=Competition#Blog",
        label: "Competition",
      },
    },
    {
      title: "Complément",
      icon: "icon2",
      btn: {
        href: "/posts/?tag=Complement+alimentaire#Blog",
        label: "Complément Alim.",
      },
    },
    {
      title: "Exercices",
      icon: "icon3",
      btn: {
        href: "/posts/?tag=Exercices#Blog",
        label: "Exercices",
      },
    },
  ],
};

const CardCategorie: React.FC<CardCategorieProps> = ({ className }) => {
  return (
    <section className={className}>
      <div className="w-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
          }}
          viewport={{ once: true }}
          className="group relative h-auto overflow-hidden rounded-[5px] bg-[#2F2E2E] p-4 duration-300 hover:shadow-2xl"
        >
          <h2 className="text-3xl text-white">
            {CardCategoriesContent.heading.title}
          </h2>
          <p className="text-justify text-[15px] leading-relaxed text-gray-500">
            {CardCategoriesContent.heading.description}
          </p>
          {CardCategoriesContent.categories.map((category, idx) => (
            <div key={idx} className="my-3 flex items-center">
              <Link href={category.btn.href}>
                <span className="flex items-center text-3xl">
                  {iconMapping[category.icon]}
                  <h3 className="inline-block pb-2 text-xl text-white transition-all duration-300 hover:text-gray-500">
                    {category.title}
                  </h3>
                </span>
              </Link>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default CardCategorie;
