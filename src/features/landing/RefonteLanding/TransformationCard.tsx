import { motion } from "framer-motion";

export default function TransformationCard() {
	const features = [
		"Des plans d'entraînement et de nutrition 100 % sur mesure, adaptés à tes besoins.",
		"Un suivi hebdomadaire personnalisé avec un accompagnement quotidien motivant.",
		"Un accès exclusif à notre application et à une communauté engagée.",
		"Une approche holistique complète : physique, mental et physiologique alignés."
	];

	return (
		<div className="relative w-full overflow-hidden ">
			<div className="relative z-10 mx-auto max-w-7xl px-4 py-16">
				<div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-12">

					{/* Content Section - Always first on mobile, first on desktop */}
					<motion.div
						className="space-y-6 lg:space-y-8"
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
					>
						<div className="space-y-3 lg:space-y-4">
							<h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
								Ta transformation physique guidée par la méthode
								<span className="text-orange-500">  d'Unlcoaching</span>
							</h1>

							<p className="text-lg leading-relaxed text-gray-300 lg:text-xl">
								Notre méthode Unlcoaching pour des performances et un objectifs simple u
								ne transformation durable.
							</p>
						</div>

						{/* Features List */}
						<div className="space-y-3 lg:space-y-4">
							{features.map((feature, index) => (
								<motion.div
									key={index}
									className="flex items-start space-x-3"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: index * 0.1 }}
								>
									<div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-orange-500">
										<svg
											className="size-3 text-white"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="3"
												d="M5 13l4 4L19 7"
											/>
										</svg>
									</div>
									<p className="text-base leading-relaxed text-gray-200 lg:text-lg">
										{feature}
									</p>
								</motion.div>
							))}
						</div>

						{/* CTA Button */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.5 }}
						>
							<motion.button
								className="rounded-[10px] bg-orange-600 px-6 py-3 text-base font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-orange-600 hover:shadow-xl lg:px-8 lg:py-4 lg:text-lg"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								COMMENCER MA TRANSFORMATION
							</motion.button>
						</motion.div>
					</motion.div>

					{/* Image Section - Second on mobile, second on desktop */}
					<motion.div
						className="relative"
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						<div className="relative">
							{/* Image container with proper aspect ratio */}
							<div className="aspect-[4/4] overflow-hidden rounded-[10px] shadow-2xl ">
								<img
									src="/images/jeremy.jpg"
									alt="Coach et client dans la salle de sport"
									className="size-full"
								/>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
}