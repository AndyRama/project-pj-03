import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/features/page/layout";
import type { PageParams } from "@/types/next";
import Link from "next/link";

export default async function RoutePage(props: PageParams<{}>) {
  return (
    <Layout>
      <LayoutHeader>
        <LayoutTitle>Dashboard | Planning publication</LayoutTitle>
        <Link className="font-semibold text-orange-500" href="/pdf/Planification Contenu Coach Sportif Bordeaux.pdf" target="_blank">
          lien planning publication
        </Link>
				{/* <Link className="font-semibold text-orange-500" href="/pdf/Planification Contenu Coach Sportif Bordeaux.pdf" target="_blank">
          
        </Link> */}
      </LayoutHeader>
      <LayoutContent>
        <div className="space-y-8 text-foreground">
          <section>
            <h2 className="mb-4 text-2xl font-bold">
              Analyse Stratégique du Planning de Contenu 2026
            </h2>

            <div className="space-y-6">
              {/* Expertise */}
              <div>
                <h3 className="mb-3 border-b pb-2 text-lg font-semibold">
                  1. Une Expertise Ciblée (TCA et Mental)
                </h3>
                <p className="mb-2">
                  Le plan dépasse les conseils sportifs basiques en abordant des
                  sujets profonds qui renforcent votre positionnement d'expert :
                </p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    <strong>Expertise TCA :</strong> Des articles comme
                    "Comprendre les TCA" (S53) ou "Guérir de la boulimie par le
                    sport" (S35) assoient votre autorité sur le traitement des
                    troubles alimentaires.
                  </li>
                  <li>
                    <strong>Focus Mental :</strong> Le traitement de la
                    discipline (S7), de la gestion du stress (S19) et de la
                    visualisation (S29) est essentiel pour une approche
                    holistique.
                  </li>
                </ul>
              </div>

              {/* SEO Local */}
              <div>
                <h3 className="mb-3 border-b pb-2 text-lg font-semibold">
                  2. Un Maillage Local Puissant (SEO Bordeaux & 33)
                </h3>
                <p className="mb-2">
                  Le plan couvre stratégiquement les zones géographiques clés
                  pour capter une clientèle locale qualifiée :
                </p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    <strong>Bordeaux Centre :</strong> Focus sur le Jardin
                    Public et les Quais (S52) ainsi que le quartier des
                    Chartrons (S28).
                  </li>
                  <li>
                    <strong>Périphérie Bordelaise :</strong> Optimisation
                    spécifique pour Mérignac (S9), Pessac (S15), Le Bouscat
                    (S34), Talence (S41) et Gradignan (S46).
                  </li>
                  <li>
                    <strong>Saisonnier :</strong> Un focus sur le Bassin
                    d'Arcachon (S20) pour anticiper la préparation physique
                    estivale.
                  </li>
                </ul>
              </div>

              {/* Conversion */}
              <div>
                <h3 className="mb-3 border-b pb-2 text-lg font-semibold">
                  3. Structure de Conversion et Preuve Sociale
                </h3>
                <p className="mb-2">
                  Le calendrier suit une logique commerciale rigoureuse pour
                  transformer les lecteurs en clients :
                </p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    <strong>Preuve Sociale :</strong> L'insertion régulière de
                    "Success Stories" (Marie S56, Thomas S22, Alexandre S38)
                    humanise vos résultats.
                  </li>
                  <li>
                    <strong>Saisonnalité :</strong> Les contenus sur les
                    résolutions (S51), l'Objectif Été (S18) et la Rentrée (S33)
                    ciblent les pics de recherche annuels.
                  </li>
                  <li>
                    <strong>Éducation vs Vente :</strong> Un équilibre entre
                    guides gratuits (S36, S55) et articles de marque (S48, S52)
                    pour nourrir le tunnel de vente.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <hr className="border-t" />

          <section className="rounded-lg bg-muted/50 p-4">
            <h3 className="text-md mb-2 font-bold uppercase tracking-wider">
              Recommandations de Mise en Œuvre :
            </h3>
            <ul className="list-disc space-y-2 pl-5 italic">
              <li>
                <strong>Liens Internes :</strong> Systématiser les liens vers la
                page "Prestations" dans chaque article local.
              </li>
              <li>
                <strong>Appels à l'action (CTA) :</strong> Proposer le
                téléchargement des E-books gratuits dans tous les articles
                traitant de nutrition ou de TCA.
              </li>
              <li>
                <strong>Omnicanalité :</strong> Décliner chaque thématique en
                format vidéo (Réels/TikTok) pour maximiser l'engagement.
              </li>
            </ul>
          </section>
        </div>
      </LayoutContent>
    </Layout>
  );
}