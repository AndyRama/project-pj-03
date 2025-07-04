import { useState, useEffect, SetStateAction } from "react";
import { motion } from "framer-motion";

export default function ServicesCarousel() {
  const [activeTab, setActiveTab] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      id: 1,
      title: "Compléments Alimentaires",
      subtitle: "AESCEND",
      description: "Boosts tes performances et ta récupération avec notre gamme premium de compléments.",
      hoverTitle: "Booster Tes Performances",
      hoverImage:"/images/jeremy.jpg",
      icon: (
        <svg className="size-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <circle cx="9" cy="9" r="2"/>
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "Communauté & Contenus",
      subtitle: "Exclusifs",
      description: "Accède à notre chaîne YouTube, podcast, et rejoins une communauté motivée.",
      hoverTitle: "Rejoindre La Communauté",
      hoverImage:"/images/jeremy4.jpg",
      icon: (
        <svg className="size-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="m22 21-3-3m0 0-3-3m3 3 3-3m-3 3-3 3"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "Coaching Transformation",
      subtitle: "Physique",
      description: "Programmes sur mesure, suivi expert et méthode unique pour des résultats visibles et durables.",
      hoverTitle: "Transformer Mon Physique",
      hoverImage:"/images/jeremy.jpg",
      icon: (
        <svg className="size-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
          <path d="M5 3v4"/>
          <path d="M19 17v4"/>
          <path d="M3 5h4"/>
          <path d="M17 19h4"/>
        </svg>
      )
    },
    {
      id: 4,
      title: "Nutrition Personnalisée",
      subtitle: "PREMIUM",
      description: "Plans alimentaires adaptés à tes objectifs avec suivi nutritionnel complet.",
      hoverTitle: "Optimiser Ma Nutrition",
      hoverImage:"/images/jeremy2.jpg",
      icon: (
        <svg className="size-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
        </svg>
      )
    }
  ];

  // Auto-scroll effects
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [services.length]);

  // Sync active tab with current index
  useEffect(() => {
    setActiveTab(currentIndex);
  }, [currentIndex]);

  const handleTabClick = (index: SetStateAction<number>) => {
    setActiveTab(index);
    setCurrentIndex(index);
  };

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12">
      {/* Animated "NOS SERVICES" Header */}
      <div className="relative mb-12 overflow-hidden">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ 
            x: [0, -50 + "%"] 
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          <span className="mr-8 text-6xl font-black text-white">NOS SERVICES</span>
          <span className="mr-8 text-6xl font-black text-orange-500">•</span>
          <span className="mr-8 text-6xl font-black text-white">NOS SERVICES</span>
          <span className="mr-8 text-6xl font-black text-orange-500">•</span>
          <span className="mr-8 text-6xl font-black text-white">NOS SERVICES</span>
          <span className="mr-8 text-6xl font-black text-orange-500">•</span>
          <span className="mr-8 text-6xl font-black text-white">NOS SERVICES</span>
        </motion.div>
      </div>

      {/* Services Cards Carousel */}
      <div className="relative mb-8 overflow-hidden">
        <motion.div 
          className="flex"
          animate={{ 
            x: `-${currentIndex * (100 / 3)}%` 
          }}
          transition={{ 
            duration: 0.5, 
            ease: "easeInOut" 
          }}
        >
          {services.concat(services).map((service, index) => (
            <div 
              key={`${service.id}-${index}`}
              className="w-1/1 flex-none px-3 md:w-1/3"
            >
              <div className="group relative h-80 overflow-hidden rounded-2xl">
                {/* Default State */}
                <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border-2 border-gray-200 bg-white p-8 text-center transition-all duration-500 group-hover:scale-95 group-hover:opacity-0">
                  <div className="mb-6 flex size-16 items-center justify-center rounded-full bg-orange-600 text-2xl text-white">
                    {service.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                  <h4 className="mb-4 text-lg font-semibold text-gray-700">
                    {service.subtitle}
                  </h4>
                  <p className="grow text-sm leading-relaxed text-gray-600">
                    {service.description}
                  </p>
                </div>

                {/* Hover State */}
                <div className="absolute inset-0 flex scale-105 flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-orange-600 to-black p-8 text-center opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
                  {/* Background Pattern */}
                  <div 
                    className="absolute inset-0 opacity-10"
                  ></div>

                  {/* Background Image overlay */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-30"
                    style={{
                      backgroundImage: `url("${service.hoverImage}")`
                    }}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10 flex h-full flex-col items-center justify-center">
                    <h3 className="mb-6 text-2xl font-black leading-tight text-white">
                      {service.hoverTitle}
                    </h3>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="rounded-full border-2 border-white bg-transparent px-8 py-3 font-bold text-white transition-all duration-300 hover:bg-white hover:text-orange-600"
                    >
                      BOOSTER MON BUSINESS
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center space-x-2">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`h-2 w-12 rounded-full transition-colors duration-300 ${
              activeTab === index 
                ? 'bg-orange-600' 
                : 'bg-orange-300 hover:bg-orange-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}