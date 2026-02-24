"use client";

import React, { useState } from 'react';
import Image from "next/image";
// import Link from "next/link";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import { EmailFormSection } from "@/features/email/EmailFormSection";
import { FeaturesSection } from "@/features/landing/FeatureSection";
import { Hero } from "@/features/landing/Hero";
import { LandingHeader } from "@/features/landing/LandingHeader";
import { SectionDivider } from "@/features/landing/SectionDivider";
import CardGrid from "@/features/landing/CardGrid";
import RecentPosts from "@/features/landing/RecentPosts";
import { ReviewGrid } from "@/features/landing/review/ReviewGrid";
import { Footer } from "@/features/layout/Footer";
import { FloatingLegalFooter } from "@/features/legal/FloatingLegalFooter";
import BeforeAfterCardv2 from "@/features/landing/BeforAfterCardv2";
import { LayoutContent } from "@/features/page/layout";
import { Pricing } from "@/features/prestations/pricing/PricingSection";
import { FAQSection } from "@/features/landing/FAQSection";
import { PricingEbook } from "@/features/prestations/ebook/PricingSectionEbook";
import TransformationCard from "@/features/landing/RefonteLanding/TransformationCard";
import CardDescriptionImage from "@/features/landing/RefonteLanding/CardDescriptionImage";
import { ForWhoSection } from "@/features/landing/ForWhoSection";
import PromoModal from "@/features/landing/Promodal"; 

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <motion.div
      className="relative flex h-fit flex-col bg-background text-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Spacer en haut */}
      <motion.div
        className="mt-0"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />

      <LandingHeader />

      <Hero />

      <ForWhoSection />

      {/* <AboutJeremySection /> */}

      <TransformationCard />

      <SectionDivider />

      <BeforeAfterCardv2 />

      <SectionDivider />

      <CardDescriptionImage />

      {/* Pricing Pack */}
      <LayoutContent
        id="begin"
        className="mx-auto mb-8 w-full dark:prose-invert"
      >
      <Pricing
        cards={[
          {
            isPopular: false,
            type: "monthly",
            id: "",
            link: "https://buy.stripe.com/aFaeVffDG0vpciu0N19AA03",
            title: "STARTER - 3 mois",
            subtitle: "(3 × 160€ = 480€)",
            price: 160,
            barredPrice: 180,
            currency: "€",
            features: [
              "Pack adapté aux débutants comme confirmés.",
              "Programme personnalisé (perte de poids, musculation ou préparation physique).",
              "Accompagnement sur les troubles du comportement alimentaire (TCA).",
              "Plan alimentaire adapté à tes objectifs (sèche, prise de masse, rééquilibrage).",
              "Bilan mensuel photo + mensurations avec suivi approfondi.",
              "Communication WhatsApp & Email avec visio ou call chaque mois.",
            ],
            cta: "Je démarre le programme",
            ctaSubtitle: "Engagement 3 mois",
            priceId: "",
          },
          {
            isPopular: true,
            type: "monthly",
            id: "",
            link: "https://buy.stripe.com/14A00l8be2Dx5U69jx9AA04",
            title: "PREMIUM - 6 mois",
            subtitle: "(6 × 180€ = 1 080€)",
            price: 180,
            barredPrice: 200,
            currency: "€",
            features: [
              "Pack adapté aux débutants comme confirmés.",
              "Programme personnalisé (perte de poids, musculation ou préparation physique).",
              "Accompagnement sur les troubles du comportement alimentaire (TCA).",
              "Plan alimentaire adapté à tes objectifs (sèche, prise de masse, rééquilibrage).",
              "Bilan mensuel photo + mensurations avec suivi approfondi.",
              "Communication WhatsApp & Email avec visio ou call chaque mois.",
              "Accès prioritaire et suivi renforcé.",
            ],
            cta: "Je démarre le programme",
            ctaSubtitle: "Engagement 6 mois",
            priceId: "",
          },
          {
            isPopular: false,
            type: "monthly",
            id: "",
            link: "https://buy.stripe.com/4gMaEZbnqemfbeq9jx9AA05",
            title: "COMPETITION VIP - 12 mois",
            subtitle: "(12 × 150€ = 1 800€)",
            price: 150,
            barredPrice: 180,
            currency: "€",
            features: [
              "Pack le plus complet pour une transformation durable.",
              "Programme personnalisé évolutif sur 12 mois.",
              "Accompagnement sur les troubles du comportement alimentaire (TCA).",
              "Plan alimentaire adapté avec ajustements réguliers.",
              "Bilan mensuel photo + mensurations avec suivi approfondi.",
              "Communication WhatsApp & Email illimitée avec visio ou call chaque mois.",
              "Coaching VIP avec ajustements prioritaires.",
              "Meilleur rapport qualité/prix sur l'année.",
            ],
            cta: "Je m'engage sur 12 mois",
            ctaSubtitle: "Meilleur tarif - 150€/mois",
            priceId: "",
          },
        ]}
      />

      </LayoutContent>

      <SectionDivider />

      {/* CardGrid Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <CardGrid />
      </motion.div>

      <SectionDivider />

      {/* Section "Mon approche" */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="transform-gpu blur-3xl">
          <div className="md:content absolute left-0 -z-20 hidden h-48 w-56 bg-gradient-to-tr from-orange-500 to-orange-800 opacity-30 md:opacity-50"></div>
        </div>
        <FeaturesSection
          features={[
            {
              badge: "Mes valeurs",
              title: "Mon approche",
              description:
                "Ma passion pour le fitness et la santé globale m'a amené à devenir coach sportif, spécialisé dans les transformations physiques, la perte de poids, la préparation aux compétitions, et plus encore.",
              description1: "",
              description2: "",
              component: (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/images/jeremy4.jpg"
                    alt=""
                    width={200}
                    height={100}
                    className="h-auto w-full rounded-[10px] object-cover"
                  />
                </motion.div>
              ),
            },
          ]}
        />
        <div className="transform-gpu blur-3xl">
          <div className="absolute right-0 -z-20 h-48 w-56 bg-gradient-to-tr from-orange-500 to-orange-800 opacity-30 md:opacity-50"></div>
        </div>
      </motion.div>

      <SectionDivider />

      {/* Reviews Grid Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="transform-gpu blur-3xl">
          <div className="absolute left-0 -z-20 h-48 w-56 bg-gradient-to-tr from-orange-500 to-orange-800 opacity-30 sm:hidden md:opacity-50"></div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Typography
            variant="p"
            className="max-w-xl font-bold text-orange-500"
          >
            Retour de ma formation
          </Typography>
          <Typography variant="h2" className="m-auto max-w-xl text-center">
            Ce qu'ils pensent de mes <u>services </u>!
          </Typography>
        </div>
        <div className="transform-gpu blur-3xl">
          <div className="md:content absolute left-0 -z-20 hidden h-48 w-56 bg-gradient-to-tr from-orange-500 to-orange-800 opacity-30 md:opacity-50"></div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <ReviewGrid
          reviews={[
            {
              image: "https://i.pravatar.cc/300?u=b3",
              name: "Marie D.",
              review:
                "Grâce au programme de Jeremy, j'ai perdu 12 kg en 4 mois tout en tonifiant mon corps. Il m'a accompagné à chaque étape, avec des conseils sur l'entraînement et l'alimentation. Je me sens enfin bien dans ma peau ! Merci Jeremy !",
              role: "34 ans",
            },
            {
              image: "https://i.pravatar.cc/300?u=b4",
              name: "Alexandre P.",
              review:
                "Je n'avais jamais vraiment fait de sport avant, mais Jeremy a su s'adapter à mon niveau et me motiver. J'ai non seulement perdu 8 kg, mais j'ai aussi retrouvé de l'énergie et de la confiance en moi. Ses packs sont complets et très efficaces.",
              role: "42 ans",
            },
            {
              image: "https://i.pravatar.cc/300?u=b1",
              name: "Thomas G.",
              review:
                "Le programme perte de poids de Jeremy m'a complètement transformée ! En 3 mois, j'ai non seulement atteint mes objectifs, mais j'ai aussi appris à aimer le sport. Les entraînements étaient variés et toujours adaptés à mes capacités.",
              role: "29 ans",
            },
            {
              image: "https://i.pravatar.cc/300?u=b2",
              name: "Sophie L.",
              review:
                "Je recommande Jeremy à 100 % ! Il ne s'agit pas juste d'un coach qui donne des exercices, mais d'un vrai accompagnateur. Grâce à lui, j'ai perdu 10 kg en 5 mois et j'ai adopté de nouvelles habitudes de vie que je n'aurais jamais imaginées.",
              role: "32 ans",
            },
            {
              image: "https://i.pravatar.cc/300?u=b5",
              name: "Marc C.",
              review:
                "Je cherchais un coach pour me remettre en forme et perdre du poids avant mon mariage, et Jeremy a été incroyable ! En seulement 3 mois, j'ai perdu 7 kg et je me sens plus forte et plus confiante que jamais. Ses conseils nutritionnels sont un vrai plus.",
              role: "25 ans",
            },
            {
              image: "https://i.pravatar.cc/300?u=b6",
              name: "Cmaille M.",
              review:
                "Je pensais qu'il était trop tard pour moi pour me remettre au sport, mais Jeremy m'a prouvé le contraire. J'ai perdu 5 kg en douceur et gagné en endurance. Ses packs sont bien pensés, accessibles, et il est toujours disponible pour répondre à mes questions.",
              role: "39 ans",
            },
          ]}
        />
      </motion.div>

      <SectionDivider />

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <Typography variant="h2" className="mb-6 text-white">
            Prêt à Transformer Votre Corps ?
          </Typography>
          <Typography variant="large" className="mb-8 text-orange-100">
            Rejoignez plus de 350 personnes qui ont déjà transformé leur vie
            avec mes programmes
          </Typography>
          <div className="mb-8 inline-block rounded-xl bg-white/10 p-6 backdrop-blur-sm">
            <p className="font-semibold text-white">
              ⏰ Offre limitée : -50€ sur les programmes premium et compétition ! 
            </p>
            <p className="text-orange-100">Ne manquez pas cette opportunité !</p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="rounded-[10px] bg-white px-12 py-4 text-xl font-bold text-orange-700 transition-all hover:scale-105 hover:bg-gray-100"
          >
            Commencer ma transformation maintenant
          </button>
        </div>
      </section>

      {/* Modal */}
      <PromoModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      <SectionDivider />

      {/* Blog Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center gap-2">
          <Typography
            variant="p"
            className="max-w-xl font-bold text-orange-500"
          >
            Recentes
          </Typography>
          <Typography variant="h2" className="max-w-xl">
            Blog
          </Typography>
        </div>
      </motion.div>

      <motion.div
        className="mt-28"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <RecentPosts />
      </motion.div>

      {/* Pricing Ebook */}
      <PricingEbook
        cards={[
          {
            isPopular: false,
            type: "monthly",
            id: "premium",
            title: "Ebook 1",
            subtitle: "Savoir gérer les TCA",
            price: "Free",
            barredPrice: 0,
            currency: "€",
            features: [
              "Téléchargez votre guide complet pour adopter une alimentation saine et performante, spécialement conçu pour vous accompagnez en musculation",
            ],
            cta: "Télécharger",
            ctaSubtitle: "",
            priceId: "",
            link: "/pdf/E-bookFree.pdf",
          },
          {
            isPopular: true,
            type: "monthly",
            id: "premium",
            title: "Ebook 2",
            subtitle: "esprit & mental",
            price: "Free",
            barredPrice: 0,
            currency: "€",
            features: [
              "Découvrez des techniques et conseils pour renforcer votre mental et optimiser vos performances, essentiels pour atteindre vos objectifs.",
            ],
            cta: "Télécharger",
            ctaSubtitle: "",
            priceId: "",
            link: "#",
          },
          {
            isPopular: true,
            type: "monthly",
            id: "premium",
            title: "Ebook 3",
            subtitle: "compétition",
            price: "Free",
            barredPrice: 0,
            currency: "€",
            features: [
              "Profitez de conseils pratiques pour améliorer votre entraînement et maximiser vos résultats grâce à une approche holistique.",
            ],
            cta: "Télécharger",
            ctaSubtitle: "",
            priceId: "",
            link: "#",
          },
        ]}
      />

      {/* FAQ Section */}
      <FAQSection
        faq={[
          {
            question: "Qu'est-ce que unlcoaching.com ?",
            answer:
              "Unlcoaching est une plateforme dédiée au coaching sportif et au développement personnel. Elle aide les utilisateurs à atteindre leurs objectifs de santé et de bien-être grâce à des programmes de coaching personnalisés et des articles de blog informatifs.",
          },
          {
            question: "Quels services propose unlcoaching.com ?",
            answer:
              "Nous proposons une gamme de services, y compris des séances de coaching individuel, des programmes de remise en forme, et un blog regorgeant de conseils sur la nutrition, l'entraînement et le développement personnel.",
          },
          {
            question: "Comment puis-je m'inscrire à un programme de coaching ?",
            answer:
              "Vous pouvez vous inscrire à un programme en visitant notre page d'accueil et en sélectionnant l'option 'S'inscrire'. Vous serez guidé à travers un processus simple pour choisir le programme qui correspond le mieux à vos besoins.",
          },
          {
            question:
              "Quels sont les avantages du coaching avec unlcoaching.com ?",
            answer:
              "Le coaching avec unlcoaching.com vous permet de bénéficier de l'expertise d'un coach professionnel Jérémy Prat, d'un programme personnalisé adapté à vos objectifs, et d'un suivi continu pour garantir vos progrès.",
          },
          {
            question:
              "Quels sont les prix des services offerts par unlcoaching.com ?",
            answer:
              "Nous offrons plusieurs plans tarifaires adaptés à différents besoins, allant des sessions de coaching individuelles aux programmes complets sur plusieurs mois. Pour plus de détails, veuillez consulter notre page dédiée aux tarifs.",
          },
        ]}
      />

      <EmailFormSection />

      <Footer />

      <FloatingLegalFooter />
    </motion.div>
  );
}