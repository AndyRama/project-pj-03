import { SubHero } from "@/features/landing/SubHero";
import { SideHero } from "@/features/landing/SideHero";
import { StoryCardGrid } from "@/features/team/StoryCard";
import { Typography } from "@/components/ui/typography";
import { ReviewGrid } from "@/features/landing/review/ReviewGrid";
import { EmailFormSection } from "@/features/email/EmailFormSection";

export default function page() {
  return (
    <>
      <SubHero
        className={""}
        title={"Le Coeur de la team"}
        subTitle={"Nos valeurs"}
      />

      <StoryCardGrid />

      <SideHero className="mt-20" />

       {/* Reviews Grid Content */}
       <div className="mt-20 flex flex-col items-center gap-2">
        <Typography variant="p" className="max-w-xl font-bold text-orange-500">
          Retour de ma formation
        </Typography>
        <Typography variant="h2" className="m-auto max-w-xl text-center">
          Ce qu'ils pensent de mes <u>services </u>!
        </Typography>
      </div>

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
            role: "Social Media Manager",
          },
          {
            image: "https://i.pravatar.cc/300?u=b5",
            name: "Élodie C.",
            review:
              "Je cherchais un coach pour me remettre en forme et perdre du poids avant mon mariage, et Jeremy a été incroyable ! En seulement 3 mois, j'ai perdu 7 kg et je me sens plus forte et plus confiante que jamais. Ses conseils nutritionnels sont un vrai plus.",
            role: "25 ans",
          },
          {
            image: "https://i.pravatar.cc/300?u=b6",
            name: "Lucas M.",
            review:
              "Je pensais qu'il était trop tard pour moi pour me remettre au sport, mais Jeremy m'a prouvé le contraire. J'ai perdu 5 kg en douceur et gagné en endurance. Ses packs sont bien pensés, accessibles, et il est toujours disponible pour répondre à mes questions.",
            role: "50 ans",
          },
        ]}
      />
      <EmailFormSection />
    </>
  );
}
