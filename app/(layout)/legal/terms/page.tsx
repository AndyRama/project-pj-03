import React from 'react';
import { Typography } from '@/components/ui/typography';
import Link from "next/link";
import { SectionLayout } from '@/features/landing/SectionLayout';

const TermsPage = () => {
  return (
    <SectionLayout size="lg" variant="default" className="mx-auto max-w-7xl p-6">
      {/* Header */}
      <header className="mb-8">
        <Typography variant="h1" className="mb-2">
          Mentions légales & Politique de confidentialité
        </Typography>
      </header>

      {/* Section Editeur */}
      <section className="mb-6">
        <Typography variant="h2" className="mb-4">Éditeur de Unlcoaching.fr</Typography>
        <Typography variant="p" className="mb-2">
          Unlcoaching EI au capital de 3 000 €, dont le siège social est situé au 12 rue Dora Maar, 37100 Tours, représentée par Kévin Descoubes,
          en qualité de Président, immatriculée au RCS de Tours B 807 774 021 (SIREN 807774021).
        </Typography>
        <Typography variant="p" className="mb-2">N° de téléphone : 09 84 37 56 28</Typography>
        <Typography variant="p" className="mb-2">
          Adresse mail :{' '}
          <Link href="mailto:contact@unlcoaching.com" className="text-blue-500 hover:underline">
            contact@unlcoaching.com
          </Link>
        </Typography>
        <Typography variant="p" className="mb-2">Identification TVA : FR00823996566</Typography>
      </section>

      <hr className="my-6" />

      {/* Section Hébergeur */}
      <section className="mb-6">
        <Typography variant="h2" className="mb-4">Hébergeur</Typography>
        <Typography variant="p">
          Unlcoaching.fr est hébergé par Unlcoaching SAS, dont le siège social est situé au 12 rue Dora Maar, 37100 Tours.
        </Typography>
      </section>

      <hr className="my-6" />

      {/* Section Collecte et protection des données */}
      <section className="mb-6">
        <Typography variant="h2" className="mb-4">Collecte et protection des données</Typography>
        <Typography variant="p">
          Les données personnelles recueillies via le site sont principalement utilisées pour la gestion des relations avec les utilisateurs.
        </Typography>
        <ul className="ml-6 mt-2 list-disc">
          <li>
            <Typography variant="p">Données de navigation</Typography>
          </li>
        </ul>
      </section>

      <hr className="my-6" />

      {/* Section Cookies */}
      <section className="mb-6">
        <Typography variant="h2" className="mb-4">Cookies</Typography>
        <Typography variant="p">
          Un cookie est un fichier déposé sur votre terminal pour analyser la navigation ou améliorer l'expérience utilisateur.
        </Typography>
        <Typography variant="p" className="mt-2">Les cookies utilisés incluent :</Typography>
        <ul className="ml-6 mt-2 list-disc">
          <li>
            <Typography variant="p">Google Analytics : pour mesurer l'audience du site.</Typography>
          </li>
          <li>
            <Typography variant="p">Google Tag Manager : pour gérer les balises Google.</Typography>
          </li>
          <li>
            <Typography variant="p">Google Adsense : pour les annonces publicitaires.</Typography>
          </li>
        </ul>
      </section>

      <hr className="my-6" />

      {/* Footer */}
      <footer className="mt-8">
        <Typography variant="p" className="text-sm text-gray-600">
          Charte graphique & Design web : Le site a été réalisé par Andy Ramaroson.
        </Typography>
        <Typography variant="p" className="text-sm text-gray-600">
          Crédits photos : ©{' '}
          <Link href="https://unsplash.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Unsplash et (nom du photographe)
          </Link>
        </Typography>
      </footer>
    </SectionLayout >
  );
};


export default TermsPage;
