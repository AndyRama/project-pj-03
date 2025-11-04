import { Typography } from "@/components/ui/typography";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export const AboutJeremySection = () => {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="m-auto max-w-6xl">
        <AboutJeremyHeader />
        <AboutJeremyContent />
      </div>
    </section>
  );
};

const AboutJeremyHeader = () => (
  <div className="mb-12 text-center md:mb-16">
    <Typography variant="h2" className="mb-4 text-3xl font-bold md:text-4xl">
      Qui Est Jeremy ?
    </Typography>
  </div>
);

const AboutJeremyContent = () => (
  <div className="grid items-center gap-12 md:grid-cols-2">
    <AboutJeremyImages />
    <AboutJeremyStory />
  </div>
);

const AboutJeremyImages = () => (
  <div>
    <div className="mb-6 overflow-hidden rounded-xl shadow-2xl">
      <Image
        src="/images/jeremy-pro.jpg"
        alt="Jeremy Prat - Coach Sportif"
        width={600}
        height={800}
        className="w-full object-cover"
      />
    </div>

    <AboutJeremyTransformation />
  </div>
);

const AboutJeremyTransformation = () => (
  <div className="mt-6">
    <Typography className="mb-3 text-center text-sm text-gray-600">
      Ma propre transformation il y a 12 ans
    </Typography>
    <div className="grid grid-cols-2 gap-4">
      <TransformationImage
        src="/images/jeremy-avant.jpg"
        alt="Jeremy avant"
        label="AVANT"
        labelColor="bg-red-500"
      />
      <TransformationImage
        src="/images/jeremy-apres.jpg"
        alt="Jeremy après"
        label="APRÈS"
        labelColor="bg-green-500"
      />
    </div>
    <Typography className="mt-4 text-center font-semibold text-orange-600">
      -25 kg • +15 kg de muscle • Vie transformée
    </Typography>
  </div>
);

const TransformationImage = ({
  src,
  alt,
  label,
  labelColor,
}: {
  src: string;
  alt: string;
  label: string;
  labelColor: string;
}) => (
  <div className="relative overflow-hidden rounded-lg">
    <Image src={src} alt={alt} width={300} height={400} className="w-full" />
    <div
      className={cn(
        "absolute left-2 top-2 rounded-full px-3 py-1 text-sm font-bold text-white",
        labelColor,
      )}
    >
      {label}
    </div>
  </div>
);

const AboutJeremyStory = () => (
  <div>
    <JeremyStoryText />
    <JeremyQualifications />
    <JeremySpecialties />
    <JeremyCTA />
  </div>
);

const JeremyStoryText = () => (
  <div className="prose prose-lg">
    <Typography className="mb-6 text-gray-700">
      <span className="text-2xl font-bold text-orange-500">"</span>
      Il y a 12 ans, j'étais une personne normale, sans énergie, et je détestais mon
      reflet dans le miroir.
    </Typography>

    <Typography className="mb-6 text-gray-700">
      J'ai décidé de reprendre ma vie en main. Non pas avec des régimes
      miracles, mais avec une méthode scientifique et durable.
    </Typography>

    <Typography className="mb-6 text-gray-700">
      J'ai perdu 25 kg, gagné en muscle et en confiance. Mais surtout, j'ai
      trouvé ma passion : aider les autres à vivre leur propre transformation.
    </Typography>

    <Typography className="mb-6 font-semibold text-gray-700">
      Aujourd'hui, après 10 ans d'expérience et plus de 200 personnes
      accompagnées, je mets toute mon expertise à ton service.
    </Typography>
  </div>
);

const JeremyQualifications = () => {
  const qualifications = [
    "BPJEPS Activités de la Forme (2015)",
    "Certification Nutrition Sportive",
    "Formation Coaching Mental",
    "10 ans d'expérience terrain",
    "200+ transformations réussies",
    "Membre de la Fédération Française du Sport",
  ];

  return (
    <div className="mt-8 rounded-xl bg-orange-50 p-6">
      <Typography variant="h3" className="mb-4 text-xl font-bold text-gray-800">
        📜 Mes Qualifications
      </Typography>
      <ul className="space-y-2 text-gray-700">
        {qualifications.map((qual, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="text-orange-500">✓</span>
            <span>{qual}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const JeremySpecialties = () => {
  const specialties = [
    "Perte de poids durable",
    "Prise de masse musculaire",
    "Rééquilibrage alimentaire",
    "Remise en forme post-grossesse",
    "Préparation physique",
    "Coaching mental",
  ];

  return (
    <div className="mt-6 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white">
      <Typography variant="h3" className="mb-4 text-xl font-bold">
        🎯 Mes Spécialités
      </Typography>
      <div className="grid grid-cols-2 gap-3 text-sm">
        {specialties.map((specialty, index) => (
          <div key={index}>• {specialty}</div>
        ))}
      </div>
    </div>
  );
};

const JeremyCTA = () => (
  <div className="mt-8 text-center">
    <Link
      href="/#begin"
      className={cn(
        buttonVariants({ size: "lg", variant: "default" }),
        "bg-orange-500 px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-orange-600",
      )}
    >
      Réserver mon appel découverte gratuit
    </Link>
    <Typography className="mt-2 text-sm text-gray-600">
      20 min • Sans engagement • Par téléphone
    </Typography>
  </div>
);