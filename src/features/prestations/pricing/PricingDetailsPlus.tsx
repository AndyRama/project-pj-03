'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BiNote } from "react-icons/bi";
import { Typography } from "@/components/ui/typography";
import { Layout, LayoutContent } from "@/features/page/layout";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  bullets: string[];
  description2?: string;
}

const features: Feature[] = [
  {
    icon: BiNote,
    title: "Qu'est-ce que l'unlcoaching ?",
    description:
      "UUnlcoaching est un service de coaching unique, alliant entraînement physique, conseils nutritionnels et soutien mental. Notre approche personnalisée se distingue par l’attention portée à chaque individu, afin de vous aider à atteindre vos objectifs de fitness et de bien-être.",
    bullets: [
      "Nos Services de Coaching Individuel :",
      "• Coaching en ligne : Suivi hebdomadaire et interactions régulières.",
      "• Séances en personne : Disponible selon votre localisation",
      "• Programmes sur mesure : Entraînement et nutrition adaptés à vos besoins spécifiques.",
    ],
    description2:
      "Ce qui distingue Unlcoaching des méthodes traditionnelles de coaching est [explication de la différence principale]. Pour en savoir plus sur Unlcoaching et comment il peut vous aider à atteindre vos objectifs de fitness, consultez notre page dédiée Prestations ou contactez-nous pour une consultation personnalisée.",
  },
  {
    icon: BiNote,
    title: "Proposez-vous des services de coaching individuel ?",
    description:
      "Oui, nous proposons des services de coaching personnalisé. Nos options incluent :",
    bullets: [
      "• Coaching en ligne avec suivi hebdomadaire",
      "• Sessions d'entraînement en personne (selon votre localisation)",
      "• Plans d'entraînement et de nutrition sur mesure",
    ],
    description2: "Pour plus de détails ou pour réserver une consultation, veuillez nous contacter via notre page de contact.",
  },
  {
    icon: BiNote,
    title: "Je débute dans le fitness, par où devrais-je commencer ?",
    description: "Pour bien débuter dans le fitness, je vous invite à suivre ces étapes :",
    bullets: [
      "1. Définissez vos objectifs (perte de poids, gain musculaire, etc.).",
      "2. Consultez un médecin pour un bilan de santé.",
      "3. Commencez par 2-3 séances de 20-30 minutes par semaine.",
      "4. Combinez exercices cardiovasculaires et renforcement musculaire.",
      "5. Apprenez la bonne technique pour chaque exercice.",
      "6. Adoptez une alimentation équilibrée et restez hydraté.",
      "7. Écoutez votre corps et progressez graduellement.",
    ],
    description2: "N'hésitez pas à me contacter pour un coaching personnalisé.",
  },
  {
    icon: BiNote,
    title: "Proposez-vous des coachings individuels ?",
    description:
      "Oui, je propose des coachings individuels personnalisés pour répondre aux besoins spécifiques de chaque client. Voici ce que vous devez savoir :",
    bullets: [
      "• Je propose des séances en personne et en ligne, selon votre préférence et votre localisation.",
      "• Mes coachings englobent l'entraînement physique, la nutrition, la préparation mentale et la planification de programmes adaptés à vos objectifs.",
      "• Chaque programme est conçu sur mesure, qu'il s'agisse de perte de poids, de gain musculaire, d'amélioration des performances ou de préparation à une compétition.",
      "• Nous pouvons établir un planning adapté à vos besoins, que ce soit pour des séances hebdomadaires ou un suivi à plus long terme.",
      "• Les tarifs varient en fonction du type et de la fréquence du coaching. Je vous invite à me contacter pour obtenir un devis personnalisé.",
    ],
    description2:
      "Pour plus d'informations ou pour réserver une séance d'évaluation, n'hésitez pas à me contacter via la page Contact du site ou par email à contact@unlcoaching.com.",
  },
  {
    icon: BiNote,
    title: "Comment puis-je commencer si je suis débutant dans le fitness ?",
    description: "Pour les débutants, nous recommandons de :",
    bullets: [
      "• Consulter notre guide 'Débuter en Fitness' dans la section Blog.",
      "• Commencer par des exercices de base et augmenter progressivement l'intensité.",
      "• Établir des objectifs réalistes à court et long terme.",
      "• Considérer une consultation avec un de nos coachs pour un plan personnalisé.",
    ],
    description2: "",
  },
  {
    icon: BiNote,
    title: "Comment puis-je contacter l'équipe de Unlcoaching ?",
    description: "Vous pouvez nous contacter de plusieurs façons :",
    bullets: [
      "• Par email à : contact@unlcoaching.com",
      "• Via le formulaire de contact sur notre site",
      "• Sur nos réseaux sociaux : [liens Facebook et Instagram en bas de page] Nous nous efforçons de répondre à toutes les requêtes dans un délai de 48 heures.",
    ],
    description2: "",
  },
  {
    icon: BiNote,
    title: "Comment puis-je m'inscrire à un programme de coaching ?",
    description: "Pour vous inscrire à un programme de coaching, suivez ces étapes :",
    bullets: [
      "1. Consultez notre page 'Programmes de Coaching' pour voir les options disponibles.",
      "2. Choisissez le programme qui correspond le mieux à vos objectifs et à votre niveau.",
      "3. Cliquez sur le bouton 'S'inscrire' ou 'Réserver une consultation' associé au programme choisi.",
      "4. Remplissez le formulaire d'inscription avec vos informations personnelles et vos objectifs.",
      "5. Sélectionnez votre méthode de paiement préférée et procédez au règlement.",
      "6. Après confirmation de votre paiement, vous recevrez un email avec les détails de votre programme et les prochaines étapes.",
      "7. Un coach vous contactera dans les 24-48 heures pour planifier votre première session ou pour discuter de votre plan personnalisé.",
    ],
    description2: "Si vous avez des questions spécifiques avant de vous inscrire, n'hésitez pas à nous contacter via notre formulaire en ligne ou par email à contact@unlcoaching.com.",
  },
];

export const PricingDetailsPlus: React.FC<{ className?: string }> = ({ className }) => {
  const [showAll, setShowAll] = useState(false);

  const displayedFeatures = showAll ? features : features.slice(0, 4);

  return (
    <section className={`pb-20 ${className}`}>
      <Layout>
        <LayoutContent className="container mx-auto px-4">
          <Typography variant="h3" className="text-center text-orange-500">
            Notre concept
          </Typography>
          <Typography variant="h2" className="mb-20 text-center">
            Unlcoaching
          </Typography>
          <div className="justify-center lg:flex">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              {displayedFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: index * 0.2,
                      duration: 0.5
                    }
                  }}
                  viewport={{ once: true }}
                  className="relative z-40 flex items-start gap-3"
                >
                  <div>
                    <Typography variant="h3" className="mb-4 flex">
                      <span className="mr-4 text-3xl text-orange-500">
                        <feature.icon />
                      </span>
                      {feature.title}
                    </Typography>
                    <Typography variant="p" className="mb-7 text-left leading-relaxed text-opacity-75">
                      {feature.description}
                    </Typography>
                    {feature.bullets.map((bullet, i) => (
                      <Typography
                        key={i}
                        variant="p"
                        className="mb-4 text-justify leading-relaxed text-opacity-75"
                      >
                        {bullet}
                      </Typography>
                    ))}
                    {feature.description2 && (
                      <Typography variant="p" className="text-justify leading-relaxed text-opacity-75">
                        {feature.description2}
                      </Typography>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="rounded-md bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
            >
              {showAll ? "Voir moins" : "Voir plus"}
            </button>
          </div>
        </LayoutContent>
      </Layout>
    </section>
  );
};
