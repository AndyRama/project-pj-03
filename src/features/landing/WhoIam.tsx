import { Typography } from "@/components/ui/typography";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export const AboutJeremySection = () => {
	return (
		<section className="bg-black px-4 py-16 md:py-24">
			<div className="m-auto max-w-6xl">
				<AboutJeremyHeader />
				<AboutJeremyContent />
			</div>
		</section>
	);
};

const AboutJeremyHeader = () => (
	<div className="mb-12 text-center md:mb-16">
		<Typography variant="h2" className="mb-4 text-3xl font-bold text-white md:text-5xl">
			Qui Suis-Je ?
		</Typography>
		<Typography variant="large" className="mx-auto max-w-2xl text-lg text-gray-400">
			Mon histoire, ma transformation, ma mission.
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
		<div className="mb-6 overflow-hidden rounded-2xl border-2 border-orange-500/30 shadow-2xl shadow-orange-500/20">
			<Image
				src="/images/jeremy5.jpg"
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
		<Typography className="mb-3 text-center text-sm text-gray-400">
			Ma propre transformation il y a 15 ans ↓
		</Typography>
		<div className="grid grid-cols-2 gap-4">
			<TransformationImage
				src="/images/jeremy2.jpg"
				alt="Jeremy avant"
				label="AVANT"
				labelColor="bg-red-500"
			/>
			<TransformationImage
				src="/images/jeremy4.jpg"
				alt="Jeremy après"
				label="APRÈS"
				labelColor="bg-green-500"
			/>
		</div>
		<Typography className="mt-4 text-center text-lg font-bold text-orange-500">
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
	<div className="relative overflow-hidden rounded-lg border border-gray-800">
		<Image src={src} alt={alt} width={300} height={400} className="w-full" />
		<div
			className={cn(
				"absolute left-2 top-2 rounded-full px-3 py-1 text-sm font-bold text-white shadow-lg",
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
	<div className="space-y-6">
		<Typography className="text-lg leading-relaxed text-gray-300">
			<span className="text-4xl font-bold text-orange-500">"</span>
			Il y a 15 ans, j'étais une personne normale, sans énergie, et je détestais mon
			reflet dans le miroir.
		</Typography>

		<Typography className="text-lg leading-relaxed text-gray-300">
			J'ai décidé de reprendre ma vie en main. Non pas avec des régimes
			miracles, mais avec une <span className="font-bold text-white">méthode scientifique et durable</span>.
		</Typography>

		<Typography className="text-lg leading-relaxed text-gray-300">
			J'ai perdu 25 kg, gagné en muscle et en confiance. Mais surtout, j'ai
			trouvé ma <span className="font-bold text-orange-500">passion</span> : aider les autres à vivre leur propre transformation.
		</Typography>

		<Typography className="text-lg font-bold leading-relaxed text-white">
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
		<div className="mt-8 rounded-2xl border-2 border-orange-500/30 bg-gradient-to-br from-[#0a1628] via-[#0d1b2a] to-[#0a1628] p-6">
			<Typography variant="h3" className="mb-4 text-xl font-bold text-white">
				📜 Mes Qualifications
			</Typography>
			<ul className="space-y-3">
				{qualifications.map((qual, index) => (
					<li key={index} className="flex items-center gap-3 text-gray-300">
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
		<div className="mt-6 rounded-2xl bg-gradient-to-r from-orange-600 to-orange-500 p-6 text-white shadow-lg shadow-orange-500/20">
			<Typography variant="h3" className="mb-4 text-xl font-bold">
				🎯 Mes Spécialités
			</Typography>
			<div className="grid grid-cols-2 gap-3 text-sm font-medium">
				{specialties.map((specialty, index) => (
					<div key={index} className="flex items-start">
						<span className="mr-2">▸</span>
						<span>{specialty}</span>
					</div>
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
				"w-full rounded-full bg-orange-700 px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-orange-800 hover:shadow-lg hover:shadow-orange-500/30 md:w-auto",
			)}
		>
			Réserver mon appel découverte GRATUIT
		</Link>
		<Typography className="mt-3 text-sm text-gray-500">
			📞 20 min • Sans engagement • Par téléphone
		</Typography>
	</div>
);