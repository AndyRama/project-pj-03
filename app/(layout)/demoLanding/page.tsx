"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import { EmailFormSection } from "@/features/email/EmailFormSection";
import { FeaturesSection } from "@/features/landing/FeatureSection";
import { FeatureProgram } from "@/features/landing/FeatureProgram";
import { Hero1 } from "@/features/landing/Hero1";
import RecentPosts from "@/features/landing/RecentPosts";
import { ReviewRow } from "@/features/landing/review/ReviewRow";
import { Pricing } from "@/features/prestations/pricing/PricingSection";
import { SectionDivider } from "@/features/landing/SectionDivider";
import { FAQSection } from "@/features/landing/FAQSection";

export default function Page() {
  return (
    <motion.div
      className="relative flex h-fit flex-col bg-background text-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Spacer en haut */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />

      <Hero1 />

      {/* FeaturedProgram Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >

      <SectionDivider />

      <div className="flex flex-col items-center gap-2">
        <Typography variant="h2" className="max-w-xl font-bold text-orange-500">
          Ils ont transformé leur corps
        </Typography>
        <Typography variant="p" className="m-auto max-w-xl text-center">
          Découvrez les <u> résultats</u> de nos clients
        </Typography>
      </div>

      <ReviewRow
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
        ]}
      />

      <div className="flex flex-col items-center gap-2" id="concept">
        <Typography variant="p" className="max-w-xl font-bold text-orange-500">
          Programmes
        </Typography>
        <Typography variant="h2" className="max-w-xl">
          Mes services
        </Typography>
      </div>
    </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="transform-gpu blur-3xl">
          <div className="md:content absolute left-0 -z-20 hidden h-48 w-56 bg-gradient-to-tr from-orange-500 to-orange-800 opacity-30 md:opacity-50"></div>
        </div>
        <FeatureProgram
          features={[
            {
              badge: "Débutant",
              title: "Pack 1 Musculation | Homme Femme",
              description:
                "Coaching spécialisé pour les athlètes : si la compétition, le dépassement de soi et la discipline sont essentiels à votre vie et à votre bien-être, se fixer des objectifs concrets est un moyen efficace de les atteindre. Je vous propose un suivi musculation et alimentaire personnalisés pour relever les défis que vous vous fixerez.",
              component: (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/images/post3.jpg"
                    alt=""
                    width={200}
                    height={100}
                    className="h-auto w-full rounded-[8px] object-cover"
                  />
                </motion.div>
              ),
              description1: "",
              description2: "",
            },
            {
              badge: "Intermédiaire",
              title: "Pack 2 Musculation | Homme Femme",
              description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus pariatur soluta corrupti quisquam illo ducimus adipisci recusandae possimus tempora esse, aspernatur repudiandae cupiditate ipsum enim, quibusdam porro odio sit. Quis!",
              description1: "",
              description2: "",
              component: (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/images/post5.jpg"
                    alt=""
                    width={200}
                    height={100}
                    className="h-auto w-full rounded-[8px] object-cover"
                  />
                </motion.div>
              ),
            },
            {
              badge: "Confirmé",
              title: "Pack 3 Musculation | Homme Femme",
              description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus pariatur soluta corrupti quisquam illo ducimus adipisci recusandae possimus tempora esse, aspernatur repudiandae cupiditate ipsum enim, quibusdam porro odio sit. Quis!",
              description1: "",
              description2: "",
              component: (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/images/post4.jpg"
                    alt=""
                    width={200}
                    height={100}
                    className="h-auto w-full rounded-[8px] object-cover"
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

      {/* Section "Qui suis-je ?" et "Philosophie" */}
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
              badge: "Votre coach",
              title: "Jeremy Prat",
              description:
                "Bienvenue dans mon univers, je suis Jeremy, un ancien militaire qui a trouvé sa passion dans le coaching sportif et athlète de haut niveau en tant qu'athlète compétitif en Men's Physique IFBB.",
              description1:
                "Fort de mon expérience dans l'armée, j'ai forgé ma détermination et mon engagement envers l'excellence, que ce soit sur le plan physique ou mental.",
              description2:
                "Mon parcours m'a conduit à briller sur des scènes nationales et internationales telles que le championnat de France et la Diamond Cup, où j'ai pu démontrer mon savoir-faire et ma passion pour le fitness. Ma mission est simple: vous aider à réaliser vos objectifs de fitness, qu'ils soient modestes ou ambitieux.",
              component: (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/images/jeremy2.jpg"
                    alt=""
                    width={200}
                    height={100}
                    className="h-auto w-full rounded-[10px] object-cover"
                  />
                </motion.div>
              ),
            },
            {
              badge: "Mes valeurs",
              title: "Philosophie",
              description:
                "Allier entraînement rigoureux et nutrition équilibrée pour un mode de vie sain et durable. Je crois fermement que la réussite en matière de fitness réside dans un équilibre entre un entraînement bien structuré et une alimentation adaptée.",
              description1: "Ma passion pour le fitness et la santé globale m'a amené à devenir coach sportif, spécialisé dans les transformations physiques, la perte de poids, la préparation aux compétitions, et plus encore.",
              description2: "",
              component: (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/images/colaborate.jpg"
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

      <Pricing
        cards={[
          {
            isPopular: true,
            type: "monthly",
            id: "premium",
            title: "TRANSFORMATION (4 mois)",
            subtitle: "(3 * 150€ / 3 mois)",
            price: 150,
            barredPrice: 169,
            currency: "€",
            features: [
              "Tout des packs précédents",
              "Séances 1-to-1 en visio",
              "Accès téléphone direct",
              "Révision mensuelle complète",
              "Garantie résultats"
            ],
            cta: "Choisir ce plan ",
            ctaSubtitle: "",
            priceId: "",
          },
          {
            isPopular: false,
            type: "monthly",
            id: "premium",
            title: "PERFORMANCE (4 mois)",
            subtitle: "(3 * 150€ / 3 mois)",
            price: 150,
            barredPrice: 169,
            currency: "€",
            features: [
              "Programme d'entraînement personnalisé",
              "Plan alimentaire sur-mesure", 
              "Suivi hebdomadaire",
              "Support WhatsApp illimité",
              "Ajustements en temps réel"
            ],
            cta: "Choisir ce plan ",
            ctaSubtitle: "",
            priceId: "",
          },
          {
            isPopular: true,
            type: "monthly",
            id: "premium",
            title: "ÉLITE (4 mois)",
            subtitle: "(3 * 150€ / 3 mois)",
            price: 150,
            barredPrice: 169,
            currency: "€",
            features: [
              "Tout du pack Transformation",
              "Préparation mentale",
              "Stratégie compétition",
              "Suivi quotidien",
              "Expertise IFBB"
            ],
            cta: "Choisir ce plan ",
            ctaSubtitle: "",
            priceId: "",
          },
          // {
          //   isPopular: true,
          //   type: "monthly",
          //   id: "premium",
          //   title: "Débutant (1 mois)",
          //   subtitle: "(1 * 150€ / 1 mois)",
          //   price: 150,
          //   barredPrice: 169,
          //   currency: "€",
          //   features: [
          //     "Tout des packs précédents",
          //     "Séances 1-to-1 en visio",
          //     "Accès téléphone direct",
          //     "Révision mensuelle complète",
          //     "Garantie résultats"
          //   ],
          //   cta: "Choisir ce plan ",
          //   ctaSubtitle: "",
          //   priceId: "",
          // },
          // {
          //   isPopular: true,
          //   type: "monthly",
          //   id: "premium",
          //   title: "Intermédiaire (1 mois)",
          //   subtitle: "(1 * 150€ / 1 mois)",
          //   price: 150,
          //   barredPrice: 169,
          //   currency: "€",
          //   features: [
          //     "Pack adapté aux initiés ayant déjà des bases en musculation.",
          //     "Programme de musculation personnalisé en fonction de tes objectifs.",
          //     "Plan alimentaire adapté à tes besoins.",
          //     "Accompagnement sur les divers TCA ou problématique de santé.",
          //     "Bilan mensuel par email après 4 semaines.",
          //   ],
          //   cta: "Choisir ce plan ",
          //   ctaSubtitle: "",
          //   priceId: "",
          // },
          // {
          //   isPopular: true,
          //   type: "monthly",
          //   id: "premium",
          //   title: "Confirmé (1mois)",
          //   subtitle: "(1 * 150€ / 1 mois)",
          //   price: 150,
          //   barredPrice: 169,
          //   currency: "€",
          //   features: [
          //     "Pack adapté aux initiés ayant déjà des bases en musculation.",
          //     "Programme de musculation personnalisé en fonction de tes objectifs.",
          //     "Plan alimentaire adapté à tes besoins.",
          //     "Accompagnement sur les divers TCA ou problématique de santé.",
          //     "Bilan mensuel par email après 4 semaines.",
          //   ],
          //   cta: "Choisir ce plan ",
          //   ctaSubtitle: "",
          //   priceId: "",
          // },
        ]}
      />


      <div className="transform-gpu blur-3xl">
        <div className="absolute right-0 -z-20 h-48 w-56 bg-gradient-to-tr from-orange-500 to-orange-800 opacity-30 md:opacity-50"></div>
      </div>

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
            question:
              "Comment puis-je m'inscrire à un programme de coaching ?",
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
        <div className="transform-gpu blur-3xl">
          <div className="md:content absolute left-0 -z-20 hidden h-48 w-56 bg-gradient-to-tr from-orange-500 to-orange-800 opacity-30 md:opacity-50"></div>
        </div>
      </motion.div>

      {/* Blog Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center gap-2">
          <Typography variant="p" className="max-w-xl font-bold text-orange-500">
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

      <EmailFormSection />

    </motion.div>
  );
}
