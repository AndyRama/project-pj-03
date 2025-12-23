/* eslint-disable tailwindcss/migration-from-tailwind-2 */
"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { SubHero } from "@/features/landing/SubHero";
import { EmailFormSection } from "@/features/email/EmailFormSection";
import {
  Layout,
  LayoutContent,
  LayoutDescription,
  LayoutTitle,
} from "@/features/page/layout";
import { FileQuestion } from "lucide-react";
import { StoryCard } from "@/features/landing/BeforAfterCardv2";
import { useState } from "react";

type TransformationCategory = 
  | "Tous" 
  | "Perte de poids" 
  | "Prise de masse" 
  | "Remise en forme" 
  | "Compétition";

type TransformationImage = {
  img: string;
  imgAfter: string;
  alt: string;
  width: number;
  height: number;
  tailwindClass?: string;
  category: TransformationCategory[];
  duration?: string;
  weightLoss?: string;
  clientName?: string;
};

export default function AvantApresPage() {
  const [activeCategory, setActiveCategory] = useState<TransformationCategory>("Tous");
  const [showAll, setShowAll] = useState(false);

  const storyContent = {
    column1: {
      initialImgs: [
        {
          img: "/images/story1.png",
          imgAfter: "/images/story1.png", 
          alt: "Transformation Team",
          width: 1188,
          height: 1413,
          tailwindClass: "mt-10 md:mt-32 pb-10 h-full",
          category: ["Perte de poids"] as TransformationCategory[],
          duration: "4 mois",
          weightLoss: "-12 kg",
        },
        {
          img: "/images/story2.jpg",
          imgAfter: "/images/story2.jpg", 
          alt: "Transformation coaching",
          width: 1188,
          height: 1413,
          tailwindClass: "pb-10",
          category: ["Remise en forme"] as TransformationCategory[],
          duration: "3 mois",
        },
      ],
      hiddenImgs: [
        {
          img: "/images/story3.jpg",
          imgAfter: "/images/story3.jpg", 
          alt: "Transformation No pain no gain",
          width: 1188,
          height: 1413,
          tailwindClass: "h-full pb-10",
          category: ["Prise de masse"] as TransformationCategory[],
          duration: "6 mois",
        },
      ],
    },
    column2: {
      initialImgs: [
        {
          img: "/images/story4.jpg",
          imgAfter: "/images/story4.jpg", 
          alt: "Transformation fitness",
          width: 1188,
          height: 1413,
          tailwindClass: "mt-10 h-56 lg:h-96 pb-10",
          category: ["Perte de poids"] as TransformationCategory[],
          duration: "5 mois",
          weightLoss: "-8 kg",
        },
        {
          img: "/images/story5.jpg",
          imgAfter: "/images/story5.jpg", 
          alt: "Transformation entrainement",
          width: 1188,
          height: 1413,
          tailwindClass: "h-full lg:h-100 pb-10",
          category: ["Prise de masse"] as TransformationCategory[],
          duration: "8 mois",
        },
      ],
      hiddenImgs: [
        {
          img: "/images/story6.jpg",
          imgAfter: "/images/story6.jpg", 
          alt: "Transformation remise en forme",
          width: 1188,
          height: 1413,
          tailwindClass: "h-66 lg:h-100 pb-10",
          category: ["Remise en forme"] as TransformationCategory[],
          duration: "4 mois",
        },
        {
          img: "/images/story7.jpg",
          imgAfter: "/images/story7.jpg", 
          alt: "Préparation compétition",
          width: 1188,
          height: 1413,
          tailwindClass: "h-56 lg:h-96",
          category: ["Compétition"] as TransformationCategory[],
          duration: "12 semaines",
        },
      ],
    },
    column3: {
      initialImgs: [
        {
          img: "/images/story8.jpg",
          imgAfter: "/images/story8.jpg", 
          alt: "Transformation étirements",
          width: 1188,
          height: 1413,
          tailwindClass: "mt-10 md:mt-32 pb-10 h-full",
          category: ["Remise en forme"] as TransformationCategory[],
          duration: "3 mois",
        },
        {
          img: "/images/story9.jpg",
          imgAfter: "/images/story9.jpg", 
          alt: "Transformation coaching en salle",
          width: 1188,
          height: 1413,
          tailwindClass: "pb-10 h-106",
          category: ["Perte de poids"] as TransformationCategory[],
          duration: "5 mois",
          weightLoss: "-10 kg",
        },
      ],
      hiddenImgs: [
        {
          img: "/images/story13.jpg",
          imgAfter: "/images/story13.jpg", 
          alt: "Transformation musculation",
          width: 1188,
          height: 1413,
          tailwindClass: "pb-10 h-full",
          category: ["Prise de masse"] as TransformationCategory[],
          duration: "6 mois",
        },
      ],
    },
  };

  const categories: TransformationCategory[] = [
    "Tous",
    "Perte de poids",
    "Prise de masse",
    "Remise en forme",
    "Compétition",
  ];

  // Récupérer toutes les transformations
  const allTransformations: TransformationImage[] = [
    ...(showAll 
      ? [...storyContent.column1.initialImgs, ...storyContent.column1.hiddenImgs]
      : storyContent.column1.initialImgs
    ),
    ...(showAll 
      ? [...storyContent.column2.initialImgs, ...storyContent.column2.hiddenImgs]
      : storyContent.column2.initialImgs
    ),
    ...(showAll 
      ? [...storyContent.column3.initialImgs, ...storyContent.column3.hiddenImgs]
      : storyContent.column3.initialImgs
    ),
  ];

  // Filtrer selon la catégorie
  const filteredTransformations = activeCategory === "Tous"
    ? allTransformations
    : allTransformations.filter((t) => t.category.includes(activeCategory));

  // Réorganiser en 3 colonnes
  const organizeIntoColumns = (items: TransformationImage[]) => {
    const columns: [TransformationImage[], TransformationImage[], TransformationImage[]] = [[], [], []];
    items.forEach((item, index) => {
      columns[index % 3].push(item);
    });
    return columns;
  };

  const [column1, column2, column3] = organizeIntoColumns(filteredTransformations);

  return (
    <>
      <SubHero
        title="+350 Transformations réussies"
        subTitle="Avant / Après" 
        className=""
      />
      
      <Layout>
        {/* Section stats */}
        <LayoutContent className="content mx-auto mb-12 max-w-7xl text-center">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-6">
              <Typography variant="h2" className="text-orange-500">+350</Typography>
              <Typography variant="muted">Transformations réussies</Typography>
            </div>
            <div className="p-6">
              <Typography variant="h2" className="text-orange-500">5⭐</Typography>
              <Typography variant="muted">Satisfaction client</Typography>
            </div>
            <div className="p-6">
              <Typography variant="h2" className="text-orange-500">10 ans</Typography>
              <Typography variant="muted">D&apos;expérience</Typography>
            </div>
          </div>
        </LayoutContent>

        {/* Section des filtres */}
        <LayoutContent className="content mx-auto mb-8 max-w-7xl flex-wrap items-center gap-2 px-2">
          {activeCategory !== "Tous" && (
            <LayoutTitle>
              <LayoutDescription className="text-orange-500">
                Filtré par : {activeCategory}
              </LayoutDescription>
            </LayoutTitle>
          )}

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className="text-md cursor-pointer px-6 py-2 transition-all hover:scale-105 hover:bg-orange-500 hover:text-white"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </LayoutContent>

        {/* Section des transformations */}
        {filteredTransformations.length === 0 ? (
          <LayoutContent className="flex flex-col items-center justify-center py-16">
            <div className="flex flex-col items-center rounded-lg border-2 border-dashed p-8 lg:gap-6 lg:p-12">
              <FileQuestion size={48} className="text-muted-foreground" />
              <Typography variant="h2">Aucune transformation trouvée</Typography>
              <Typography variant="muted" className="text-center">
                Aucune transformation ne correspond à la catégorie : {activeCategory}
              </Typography>
              <Button
                variant="link"
                onClick={() => setActiveCategory("Tous")}
                className="text-orange-500"
              >
                Voir toutes les transformations
              </Button>
            </div>
          </LayoutContent>
        ) : (
          <div className="container mx-auto mb-2 mt-0 justify-center rounded-md">
            <div className="mb-8 text-center">
              <Typography
                variant="small"
                className="font-extrabold uppercase text-primary"
              >
                Exemple de
              </Typography>
              <Typography variant="h2">Avant / Après</Typography>
              <Typography variant="muted" className="mt-2">
                {filteredTransformations.length} {filteredTransformations.length > 1 ? "Transformations" : "Transformation"}
              </Typography>
            </div>

            {/* Grille 3 colonnes */}
            <div className="md:flex md:px-4">
              {/* Colonne 1 */}
              <div className="px-4 md:w-4/12">
                {column1.map((card, index) => (
                  <div key={`col1-${index}`} className="relative">
                    <StoryCard
                      index={index}
                      alt={card.alt}
                      width={card.width}
                      height={card.height}
                      img={card.img}
                      imgAfter={card.imgAfter}
                      tailwindClass={card.tailwindClass}
                    />
                    {(card.duration || card.weightLoss) && (
                      <div className="absolute inset-x-8 bottom-14 z-10 rounded-lg bg-black/80 p-3 text-sm text-white backdrop-blur-sm">
                        <div className="flex items-center justify-between">
                          {card.duration && <span>⏱️ {card.duration}</span>}
                          {card.weightLoss && (
                            <span className="font-bold text-orange-500">{card.weightLoss}</span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Colonne 2 */}
              <div className="px-4 md:w-4/12">
                {column2.map((card, index) => (
                  <div key={`col2-${index}`} className="relative">
                    <StoryCard
                      index={index}
                      alt={card.alt}
                      width={card.width}
                      height={card.height}
                      img={card.img}
                      imgAfter={card.imgAfter}
                      tailwindClass={card.tailwindClass}
                    />
                    {(card.duration || card.weightLoss) && (
                      <div className="absolute inset-x-8 bottom-14 z-10 rounded-lg bg-black/80 p-3 text-sm text-white backdrop-blur-sm">
                        <div className="flex items-center justify-between">
                          {card.duration && <span>⏱️ {card.duration}</span>}
                          {card.weightLoss && (
                            <span className="font-bold text-orange-500">{card.weightLoss}</span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Colonne 3 */}
              <div className="px-4 md:w-4/12">
                {column3.map((card, index) => (
                  <div key={`col3-${index}`} className="relative">
                    <StoryCard
                      index={index}
                      alt={card.alt}
                      width={card.width}
                      height={card.height}
                      img={card.img}
                      imgAfter={card.imgAfter}
                      tailwindClass={card.tailwindClass}
                    />
                    {(card.duration || card.weightLoss) && (
                      <div className="absolute inset-x-8 bottom-14 z-10 rounded-lg bg-black/80 p-3 text-sm text-white backdrop-blur-sm">
                        <div className="flex items-center justify-between">
                          {card.duration && <span>⏱️ {card.duration}</span>}
                          {card.weightLoss && (
                            <span className="font-bold text-orange-500">{card.weightLoss}</span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Bouton Voir plus */}
            {!showAll && (
              <div className="mt-8 text-center">
                <Button
                  onClick={() => setShowAll(true)}
                  variant="outline"
                  className="rounded-md border bg-orange-600 px-8 py-2 text-base font-bold text-white shadow-md transition-all duration-300 hover:scale-105 hover:border-orange-500 hover:bg-orange-600 hover:shadow-lg"
                >
                  Voir plus
                </Button>
              </div>
            )}

            {/* CTA */}
            <div className="mt-16 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 p-12 text-center text-white">
              <Typography variant="h2" className="mb-4 text-white">
                Prêt pour ta transformation ?
              </Typography>
              <Typography variant="muted" className="mb-8 text-white/90">
                Rejoins plus de 350 personnes qui ont déjà transformé leur vie
              </Typography>
              <Button
                size="lg"
                variant="outline"
                className="bg-white px-8 py-6 text-lg font-bold text-orange-600 hover:bg-gray-100"
                onClick={() => (window.location.href = '/#begin')}
              >
                Commencer ma transformation
              </Button>
            </div>
          </div>
        )}
      </Layout>

      <EmailFormSection />
    </>
  );
}