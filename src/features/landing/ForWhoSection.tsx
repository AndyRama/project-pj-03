import { Typography } from "@/components/ui/typography";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const ForWhoSection = () => {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="m-auto max-w-6xl">
        <ForWhoHeader />
        <ForWhoGrid />
        <ForWhoNotFor />
      </div>
    </section>
  );
};

const ForWhoHeader = () => (
  <div className="mb-12 text-center md:mb-16">
    <Typography variant="h2" className="mb-4 text-3xl font-bold text-white md:text-5xl">
      Tu te reconnais dans l'un de ces profils ?
    </Typography>
    <Typography variant="large" className="mx-auto max-w-2xl text-lg text-gray-300">
      Peu importe ton point de départ, je t'accompagne vers TES objectifs avec un programme taillé sur mesure.
    </Typography>
  </div>
);

const ForWhoGrid = () => {
  const profiles = [
    {
      emoji: "🔥",
      title: "Tu veux PERDRE DU POIDS",
      benefits: [
        "Fini les régimes restrictifs qui te font reprendre 2x plus",
        "Des résultats visibles ET durables",
        "Tu apprends à manger sans culpabiliser",
      ],
      program: "Programme Pertes de poids  → 3 à 6 mois",
      cta: "Je veux perdre du poids",
      link: "/#begin",
    },
    {
      emoji: "💪",
      title: "Tu veux PRENDRE DU MUSCLE",
      benefits: [
        "Construire un physique solide et athlétique",
        "Programme d'entraînement progressif et intelligent",
        "Nutrition optimisée pour la prise de masse",
      ],
      program: "Programme Prise de masse → 4 à 8 mois",
      cta: "Je veux me muscler",
      link: "/#begin",
    },
    {
      emoji: "⚡",
      title: "Tu veux te REMETTRE EN FORME",
      benefits: [
        "Retrouver ton énergie et ta mobilité",
        "Peu importe ton niveau, on commence là où tu en es",
        "Progresser à TON rythme, sans te blesser",
      ],
      program: "Programme Remise en Forme → 2 à 4 mois",
      cta: "Je veux retrouver la forme",
      link: "/#begin",
    },
    {
      emoji: "🎯",
      title: "Tu as un OBJECTIF PRÉCIS",
      benefits: [
        "Mariage, vacances, shooting photo, compétition",
        "Plan d'attaque intensif et structuré",
        "Deadline respectée, résultats garantis",
      ],
      program: "Programme Transformation Express → 6 à 12 semaines",
      cta: "J'ai une deadline",
      link: "/#begin",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
      {profiles.map((profile, index) => (
        <ProfileCard key={index} {...profile} />
      ))}
    </div>
  );
};

const ProfileCard = ({
  emoji,
  title,
  benefits,
  program,
  cta,
  link,
}: {
  emoji: string;
  title: string;
  benefits: string[];
  program: string;
  cta: string;
  link: string;
}) => (
  <div className="group rounded-[12px] border-2 border-orange-600/30 bg-gradient-to-br from-gray-900 to-black p-8 transition-all hover:border-orange-600 hover:shadow-2xl hover:shadow-orange-600/20">
    <div className="mb-4 text-5xl">{emoji}</div>
    <Typography variant="h3" className="mb-6 text-2xl font-bold text-white">
      {title}
    </Typography>
    <ul className="mb-6 space-y-3">
      {benefits.map((benefit, index) => (
        <li key={index} className="flex items-start text-gray-300">
          <span className="mr-2 text-orange-600">▸</span>
          <span>{benefit}</span>
        </li>
      ))}
    </ul>
    <div className="mb-6 rounded-lg bg-orange-700/10 p-3">
      <Typography className="font-semibold text-orange-500">
        {program}
      </Typography>
    </div>
    <Link
      href={link}
      className={cn(
        buttonVariants({ size: "lg", variant: "default" }),
        "w-full bg-orange-700 rounded-md font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-orange-800 hover:shadow-lg hover:shadow-orange-800/50",
      )}
    >
      {cta}
    </Link>
  </div>
);

const ForWhoNotFor = () => (
  <div className="mt-16 rounded-xl border-2 border-red-500/50 bg-gradient-to-br from-red-950/50 to-black p-8">
    <Typography variant="h3" className="mb-4 text-2xl font-bold text-white">
      ⚠️ Ce coaching N'EST PAS pour toi si :
    </Typography>
    <ul className="mb-6 space-y-3 text-gray-300">
      <li className="flex items-start">
        <span className="mr-2 text-red-500">✗</span>
        <span>Tu cherches une solution magique sans fournir d'efforts</span>
      </li>
      <li className="flex items-start">
        <span className="mr-2 text-red-500">✗</span>
        <span>Tu n'es pas prêt(e) à t'investir à 100% dans ta transformation</span>
      </li>
      <li className="flex items-start">
        <span className="mr-2 text-red-500">✗</span>
        <span>Tu veux juste un PDF générique sans accompagnement réel</span>
      </li>
    </ul>
    <div className="rounded-lg border-l-4 border-orange-600 bg-black/50 p-4">
      <Typography className="font-bold text-orange-600">
        💯 Je travaille uniquement avec des personnes DÉTERMINÉES qui veulent des résultats RÉELS et DURABLES.
      </Typography>
      <Typography className="mt-2 text-sm text-gray-400">
        Si c'est ton cas, on va cartonner ensemble.
      </Typography>
    </div>
  </div>
);