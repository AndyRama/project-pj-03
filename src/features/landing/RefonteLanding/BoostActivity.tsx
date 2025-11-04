import { motion } from "framer-motion";
import Image from "next/image";
// import CoachImg from "@/public/images/jeremy2.jpg"; 

export default function BoostActivity() {
  const features = [
    "Des stratégies de marketing et de vente testées pour développer efficacement ton activité.",
    "Une structuration claire et performante de tes offres et de ton modèle économique.",
    "Un accompagnement sur ta posture d’expert et la construction d’un personal branding fort.",
    "Un suivi personnalisé et exclusif par Jérémy, coach expert dans le domaine."
  ];

  return (
    <section className="px-6 py-16 lg:px-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="images/jeremy2.jpg"
              alt="Coach Jeremy"
              className="h-auto w-full object-cover"
              width={600}
              height={500}
              priority
            />
          </div>
        </motion.div>

        {/* Texte */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-extrabold leading-snug text-white lg:text-5xl">
            Propulse ta carrière de
            <span className="text-orange-500"> coach sportif.</span>
          </h2>

          <p className="text-lg text-white">
            Développe et structure ton business de coaching sportif pour un succès durable.
          </p>

          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 text-white">
                <span className="mt-1 text-orange-600">
                  <svg className="size-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 inline-block rounded-md bg-orange-700 px-6 py-3 text-sm font-bold tracking-wide text-white transition hover:bg-orange-800"
          >
            BOOSTER MON ACTIVITÉ DE COACH
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
