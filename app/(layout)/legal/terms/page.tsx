import React from 'react';

const TermsPage = () => {
  return (
    <div className="mx-auto max-w-3xl p-6">
      {/* Header */}
      <header className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">
          Mentions légales &amp; Politique de confidentialité
        </h1>
      </header>

      {/* Section Editeur */}
      <section className="mb-6">
        <h2 className="mb-4 text-xl font-semibold">Editeur de Unlcoaching.fr</h2>
        <p className="mb-2">
          Unlcoaching SAS au capital de 3 000 €, dont le siège social est situé au 12 rue Dora Maar, 37100 Tours, représentée par Kévin Descoubes, en qualité de Président, immatriculée au RCS de Tours B 807 774 021 (SIREN 807774021).
        </p>
        <p className="mb-2">N° de téléphone : 09 84 37 56 28</p>
        <p className="mb-2">
          Adresse mail :{' '}
          <a href="mailto:contact@unlcoaching.fr" className="text-blue-500 hover:underline">
            contact@unlcoaching.fr
          </a>
        </p>
        <p className="mb-2">Identification TVA : FR78807774021</p>
      </section>

      <hr className="my-6" />

      {/* Section Hébergeur */}
      <section className="mb-6">
        <h2 className="mb-4 text-xl font-semibold">Hébergeur</h2>
        <p>
          Unlcoaching.fr est hébergé par Unlcoaching SAS, dont le siège social est situé au 12 rue Dora Maar, 37100 Tours.
        </p>
      </section>

      <hr className="my-6" />

      {/* Section Accès au site */}
      <section className="mb-6">
        <h2 className="mb-4 text-xl font-semibold">Accès au site</h2>
        <p>
          Tous les éléments présents sur le site, y compris les marques, photographies, textes, commentaires, illustrations, images animées ou non, séquences vidéo, sons, ainsi que toutes les applications informatiques, sont protégés par les lois en vigueur sur la propriété intellectuelle. Ils sont la propriété exclusive de l'éditeur ou de ses partenaires. Toute reproduction ou utilisation, sous quelque forme que ce soit, sans autorisation écrite préalable, est strictement interdite.
        </p>
      </section>

      <hr className="my-6" />

      {/* Section Contenu du site */}
      <section className="mb-6">
        <h2 className="mb-4 text-xl font-semibold">Contenu du site</h2>
        <p>
          L'ensemble des contenus présents sur le site est protégé par les lois en vigueur et appartient à l'éditeur ou à ses partenaires. Aucune reproduction, représentation ou adaptation, même partielle, n'est autorisée sans le consentement préalable de l'éditeur.
        </p>
      </section>

      <hr className="my-6" />

      {/* Section Gestion du site */}
      <section className="mb-6">
        <h2 className="mb-4 text-xl font-semibold">Gestion du site</h2>
        <p>
          L'éditeur se réserve le droit de suspendre, interrompre ou limiter l'accès à tout ou partie du site pour des raisons de maintenance ou d'optimisation.
        </p>
      </section>

      <hr className="my-6" />

      {/* Section Responsabilités */}
      <section className="mb-6">
        <h2 className="mb-4 text-xl font-semibold">Responsabilités</h2>
        <p>
          L'éditeur ne peut être tenu responsable en cas de défaillance technique, d'interruptions ou d'attaques extérieures affectant le bon fonctionnement du site. Vous êtes responsable de la protection de votre matériel et de vos données contre d'éventuels virus ou autres menaces.
        </p>
      </section>

      <hr className="my-6" />

      {/* Section Liens hypertextes */}
      <section className="mb-6">
        <h2 className="mb-4 text-xl font-semibold">Liens hypertextes</h2>
        <p>
          L'éditeur autorise la mise en place de liens hypertextes vers son site. Toutefois, il se réserve le droit de demander la suppression de ces liens s'ils ne respectent pas ses intérêts légitimes.
        </p>
      </section>

      <hr className="my-6" />

      {/* Section Collecte et protection des données */}
      <section className="mb-6">
        <h2 className="mb-4 text-xl font-semibold">Collecte et protection des données</h2>
        <p>
          Les données personnelles recueillies via le site sont principalement utilisées pour la gestion des relations avec les utilisateurs. Les informations collectées sont protégées conformément aux lois en vigueur sur la protection des données. Les données collectées incluent :
        </p>
        <ul className="ml-6 mt-2 list-disc">
          <li>Données de navigation</li>
        </ul>
      </section>

      <hr className="my-6" />

      {/* Section Droits d'accès, de rectification et de suppression */}
      <section className="mb-6">
        <h2 className="mb-4 text-xl font-semibold">
          Droits d'accès, de rectification et de suppression
        </h2>
        <p>
          Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression, de limitation du traitement, et de portabilité de vos données. Pour exercer ces droits, vous pouvez nous contacter par courrier à :<br />
          Unlcoaching SAS, 12 rue Dora Maar, 37100 Tours<br />
          Ou par email à :{' '}
          <a href="mailto:contact@unlcoaching.fr" className="text-blue-500 hover:underline">
            contact@unlcoaching.fr
          </a>
        </p>
      </section>

      <hr className="my-6" />

      {/* Section Utilisations des données */}
      <section className="mb-6">
        <h2 className="mb-4 text-xl font-semibold">Utilisations des données</h2>
        <p>
          Les données collectées servent à améliorer la Plateforme, sécuriser l'environnement, et répondre aux besoins des utilisateurs.
        </p>
      </section>

      <hr className="my-6" />

      {/* Section Politique de conservation des données */}
      <section className="mb-6">
        <h2 className="mb-4 text-xl font-semibold">Politique de conservation des données</h2>
        <p>
          Les données personnelles sont conservées pour la durée nécessaire à la fourniture des services ou dans les délais légaux.
        </p>
      </section>

      <hr className="my-6" />

      {/* Section Partage des données personnelles avec des tiers */}
      <section className="mb-6">
        <h2 className="mb-4 text-xl font-semibold">
          Partage des données personnelles avec des tiers
        </h2>
        <p>
          Les données personnelles peuvent être partagées avec des prestataires situés au sein de l'Union européenne dans le cadre de l'exécution de certains services, comme l'assistance utilisateur ou la publicité.
        </p>
      </section>

      <hr className="my-6" />

      {/* Section Offres commerciales */}
      <section className="mb-6">
        <h2 className="mb-4 text-xl font-semibold">Offres commerciales</h2>
        <p>
          Vous pouvez recevoir des offres commerciales de notre part. Si vous ne souhaitez pas en recevoir, vous pouvez nous en informer via le lien suivant :{' '}
          <a
            href="https://www.unlcoaching.fr/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            https://www.unlcoaching.fr/contact
          </a>
          .
        </p>
      </section>

      <hr className="my-6" />

      {/* Section Cookies */}
      <section className="mb-6">
        <h2 className="mb-4 text-xl font-semibold">Cookies</h2>
        <p>
          Un cookie est un fichier déposé sur votre terminal pour analyser la navigation ou améliorer l'expérience utilisateur. Vous pouvez gérer vos préférences en matière de cookies lors de votre première navigation sur le site.
        </p>
        <p className="mt-2">Les cookies utilisés incluent :</p>
        <ul className="ml-6 mt-2 list-disc">
          <li>Google Analytics : pour mesurer l'audience du site.</li>
          <li>Google Tag Manager : pour gérer les balises Google.</li>
          <li>Google Adsense : pour les annonces publicitaires.</li>
        </ul>
      </section>

      <hr className="my-6" />

      {/* Section Photographie et représentation des produits */}
      <section className="mb-6">
        <h2 className="mb-4 text-xl font-semibold">
          Photographie et représentation des produits
        </h2>
        <p>
          Les photos des produits sur le site ne sont pas contractuelles et n'engagent pas l'éditeur.
        </p>
      </section>

      <hr className="my-6" />

      {/* Section Loi applicable */}
      <section className="mb-6">
        <h2 className="mb-4 text-xl font-semibold">Loi applicable</h2>
        <p>
          Les présentes mentions légales sont régies par la loi française. En cas de litige, la juridiction compétente est celle du siège social de l'éditeur.
        </p>
      </section>

      <hr className="my-6" />

      {/* Section Contactez-nous */}
      <section className="mb-6">
        <h2 className="mb-4 text-xl font-semibold">Contactez-nous</h2>
        <p>
          Pour toute question, veuillez nous contacter à l'adresse suivante :{' '}
          <a href="mailto:contact@unlcoaching.fr" className="text-blue-500 hover:underline">
            contact@unlcoaching.fr
          </a>
        </p>
      </section>

      <hr className="my-6" />

      {/* Footer */}
      <footer className="mt-8">
        <p className="text-sm text-gray-600">
          Charte graphique &amp; Design web : Le site a été réalisé par Andy Ramaroson.
        </p>
        <p className="text-sm text-gray-600">
          Crédits photos : ©{' '}
          <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Unsplash
          </a>
        </p>
        <div className="mt-4">
          <p className="text-sm text-gray-600">Unlcoaching Inc.</p>
          <p className="text-sm text-gray-600">239 AVENUE PASTEUR , 33600 PESSAC France</p>
        </div>
        <p className="mt-4 text-xs text-gray-500">
          © 2024 Unlcoaching. Tous droits réservés. Crée avec par Andy Ramaroson.
        </p>
      </footer>
    </div>
  );
};

export default TermsPage;
