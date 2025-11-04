import { motion } from "framer-motion";
import ScrollingGallery from "@/features/landing/ScrollingGallery";
import Link from "next/link";

export default function CardDescription() {
  return (
    <div className="relative w-full overflow-hidden ">
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Content Section - Always first on mobile, first on desktop */}
          <motion.div
            className="space-y-6 lg:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-3 lg:space-y-4">
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Rejoins la Team
                <span className="text-orange-500"> Unlcoaching</span>
              </h2>

              <p className="text-lg leading-relaxed text-gray-300 lg:text-xl">
                Rejoins la Team Unlcoaching et transforme durablement ton corps
                et ton esprit grâce à une méthode structurée, personnalisée et
                axée sur des résultats concrets.
              </p>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link href="/#begin">
                <motion.button
                  className="rounded-[10px]] bg-orange-600 px-6 py-3 text-base font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-orange-700 hover:shadow-xl lg:px-8 lg:py-4 lg:text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  COMMENCER MA TRANSFORMATION
                </motion.button>
              </Link>
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
              <div className="aspect-[4/3] overflow-hidden rounded-md shadow-2xl sm:aspect-[3/2] lg:aspect-[4/3]">
                <ScrollingGallery />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
