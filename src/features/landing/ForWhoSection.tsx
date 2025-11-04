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
    <Typography variant="h2" className="mb-4 text-3xl md:text-4xl">
      Vous Vous Reconnaissez ?
    </Typography>
    <Typography variant="muted" className="mx-auto max-w-2xl text-lg">
      Quel que soit votre objectif, je vous accompagne avec un programme 100% personnalisé.
    </Typography>
  </div>
);

const ForWhoGrid = () => {
  const profiles = [
    {
      emoji: "🔥",
      title: "Vous voulez PERDRE DU POIDS",
      benefits: [
        "Sans régimes yo-yo ni privation",
        "Résultats durables et sains",
        "Apprendre à bien manger",
      ],
      program: "Programme Fat Loss (3-6 mois)",
      cta: "Démarrer ma perte de poids",
      link: "/#begin",
    },
    {
      emoji: "💪",
      title: "Vous voulez PRENDRE DU MUSCLE",
      benefits: [
        "Développer votre masse musculaire",
        "Programme personnalisé",
        "Nutrition adaptée",
      ],
      program: "Programme Muscle Building (4-8 mois)",
      cta: "Développer mes muscles",
      link: "/#begin",
    },
    {
      emoji: "⚡",
      title: "Vous voulez vous REMETTRE EN FORME",
      benefits: [
        "Retrouver énergie et mobilité",
        "Tout niveau accepté",
        "À votre rythme",
      ],
      program: "Programme Fitness & Santé (2-4 mois)",
      cta: "Retrouver ma forme",
      link: "/#begin",
    },
    {
      emoji: "🎯",
      title: "Vous préparez un ÉVÉNEMENT",
      benefits: [
        "Mariage, vacances, compétition",
        "Transformation rapide",
        "Objectif daté",
      ],
      program: "Programme Express (6-12 semaines)",
      cta: "Préparer mon événement",
      link: "/#begin",
    },
  ];

  return (
    <div className="grid gap-8 md:grid-cols-2">
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
  <div className="rounded-xl border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-white p-8 transition-all hover:border-orange-400 hover:shadow-lg">
    <div className="mb-4 text-4xl">{emoji}</div>
    <Typography variant="h3" className="mb-4 text-2xl font-bold">
      {title}
    </Typography>
    <ul className="mb-6 space-y-2 text-gray-700">
      {benefits.map((benefit, index) => (
        <li key={index}>✓ {benefit}</li>
      ))}
    </ul>
    <Typography className="mb-4 font-semibold text-orange-600">
      → {program}
    </Typography>
    <Link
      href={link}
      className={cn(
        buttonVariants({ size: "lg", variant: "default" }),
        "w-full bg-orange-500 text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-md",
      )}
    >
      {cta}
    </Link>
  </div>
);

const ForWhoNotFor = () => (
  <div className="mt-12 rounded-xl border-l-4 border-orange-500 bg-gray-50 p-6">
    <Typography className="mb-2 font-semibold text-gray-800">
      ⚠️ Mon coaching n'est PAS pour vous si :
    </Typography>
    <ul className="space-y-1 text-gray-600">
      <li>• Vous cherchez des résultats magiques sans effort</li>
      <li>• Vous n'êtes pas prêt à vous investir</li>
      <li>• Vous voulez juste un programme PDF à suivre seul</li>
    </ul>
    <Typography className="mt-4 font-semibold text-orange-600">
      Je travaille avec des personnes MOTIVÉES qui veulent de vrais résultats durables.
    </Typography>
  </div>
);