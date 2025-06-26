import React from 'react';

export default function  ScrollingGallery() {
  // Images du carrousel basées sur le HTML fourni
  const images = [
    {
      id: 1,
      src: "https://team-ricco.com/wp-content/uploads/2025/06/DSC00295-Coach-Ricco-683x1024.jpg",
      alt: "Coach Ricco DSC00295",
      width: 683,
      height: 1024
    },
    {
      id: 2,
      src: "https://team-ricco.com/wp-content/uploads/2025/06/Seance-Push-683x1024.jpg",
      alt: "Séance Push",
      width: 683,
      height: 1024
    },
    {
      id: 3,
      src: "https://team-ricco.com/wp-content/uploads/2025/06/DSC00298-Coach-Ricco-683x1024.jpg",
      alt: "Coach Ricco DSC00298",
      width: 683,
      height: 1024
    },
    {
      id: 4,
      src: "https://team-ricco.com/wp-content/uploads/2025/06/Seance-Dos-Biceps-683x1024.jpg",
      alt: "Séance Dos Biceps",
      width: 683,
      height: 1024
    },
    {
      id: 5,
      src: "https://team-ricco.com/wp-content/uploads/2025/06/Coach-Ricco-IMG1270-796x1024.jpg",
      alt: "Coach Ricco IMG1270",
      width: 796,
      height: 1024
    },
    {
      id: 6,
      src: "https://team-ricco.com/wp-content/uploads/2025/06/AESCEND-Background-1024x683.jpg",
      alt: "AESCEND Background",
      width: 1024,
      height: 683
    },
    {
      id: 7,
      src: "https://team-ricco.com/wp-content/uploads/2025/06/DSC01288-Coach-Ricco-1024x683.jpg",
      alt: "Coach Ricco DSC01288",
      width: 1024,
      height: 683
    },
    {
      id: 8,
      src: "https://team-ricco.com/wp-content/uploads/2025/05/Coach-Ricco-IMG11320.jpg",
      alt: "Coach Ricco IMG11320",
      width: 341,
      height: 512
    },
    {
      id: 9,
      src: "https://team-ricco.com/wp-content/uploads/2025/05/Coach-Ricco-IMG1300-1024x664.jpg",
      alt: "Coach Ricco IMG1300",
      width: 1024,
      height: 664
    }
  ];

  // Fonction pour créer des colonnes avec des images répétées
  const createColumn = (startIndex: number) => {
    const columnImages: { uniqueId: string; id: number; src: string; alt: string; width: number; height: number; }[] = [];
    // Répéter les images plusieurs fois pour créer un effet de défilement infini
    for (let i = 0; i < 4; i++) {
      images.forEach((image, index) => {
        if ((index + startIndex) % 3 === 0) {
          columnImages.push({ ...image, uniqueId: `${image.id}-${i}-${index}` });
        }
      });
    }
    return columnImages;
  };

  const column1Images = createColumn(0);
  const column2Images = createColumn(1);
  const column3Images = createColumn(2);

  return (
    
    <div className="w-full overflow-hidden bg-black">
      <div className="flex h-screen">
        {/* Colonne 1 - Défilement lent */}
        <div className="relative flex-1 overflow-hidden">
          <div className="animate-scroll-slow flex flex-col space-y-4">
            {column1Images.map((image) => (
              <div key={image.uniqueId} className="shrink-0">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-auto w-full rounded-lg object-cover shadow-lg transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Colonne 2 - Défilement moyen */}
        <div className="relative mx-4 flex-1 overflow-hidden">
          <div className="animate-scroll-medium flex flex-col space-y-4">
            {column2Images.map((image) => (
              <div key={image.uniqueId} className="shrink-0">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-auto w-full rounded-lg object-cover shadow-lg transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Colonne 3 - Défilement rapide */}
        <div className="relative flex-1 overflow-hidden">
          <div className="animate-scroll-fast flex flex-col space-y-4">
            {column3Images.map((image) => (
              <div key={image.uniqueId} className="shrink-0">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-auto w-full rounded-lg object-cover shadow-lg transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-slow {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes scroll-medium {
          0% {
            transform: translateY(-25%);
          }
          100% {
            transform: translateY(-75%);
          }
        }

        @keyframes scroll-fast {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(-100%);
          }
        }

        .animate-scroll-slow {
          animation: scroll-slow 30s linear infinite;
        }

        .animate-scroll-medium {
          animation: scroll-medium 25s linear infinite;
        }

        .animate-scroll-fast {
          animation: scroll-fast 20s linear infinite;
        }

        /* Pause l'animation au survol */
        .animate-scroll-slow:hover,
        .animate-scroll-medium:hover,
        .animate-scroll-fast:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};
