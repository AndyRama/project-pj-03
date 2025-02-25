import { PricingEbook } from '@/features/prestations/ebook/PricingSectionEbook';
import React from 'react';

const EbookPage: React.FC = () => {
	return (
		<div className="mx-auto mt-[-50px]">
			<PricingEbook
				cards={[
					{
						isPopular: false,
						type: "monthly",
						id: "premium",
						title: "Ebook 1",
						subtitle: "Nutrition & Alimentation",
						price: "Free",
						barredPrice: 0,
						currency: "€",
						features: [
							"Téléchargez votre guide complet pour adopter une alimentation saine et performante, spécialement conçu pour vous accompagnez en musculation",
						],
						cta: "Télécharger",
						ctaSubtitle: "",
						priceId: "",
						link: "/images/E-bookFree.pdf",
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
		</div>
	);
};

export default EbookPage;