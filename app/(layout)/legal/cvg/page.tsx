import React from 'react';
import Link from 'next/link'; // Import de Link

const CvgPage = () => {
  return (
    <SectionLayout size="lg" variant="default" className="mx-auto max-w-4xl p-6">
      {/* Header */}
      <header className="mb-8">
        <Typography variant="h1" className="mb-2 text-3xl font-bold">
          Conditions Générales de Vente
        </Typography>
        <Typography variant="h2" className="text-xl font-medium text-gray-700">
          Vente en ligne – Services à distance
        </Typography>
      </header>

      <hr className="my-6" />

      {/* Introduction */}
      <section className="mb-8">
        <Typography variant="p" className="mb-4">
          Bienvenue et merci pour votre confiance. Vous trouverez ci-après les Conditions Générales de Vente applicables aux programmes Unlcoaching. 
          Veuillez noter que Coach Jeremy Prat met à la disposition de ses Clients et des Utilisateurs de son site un service client que vous pouvez contacter de la manière suivante :
        </Typography>

        <ul className="ml-6 list-disc">
          <Typography variant="li">
            Par téléphone : au +33646230279 (prix d’un appel local), de 9 heures à 20 heures du lundi au vendredi, heure de Paris.
          </Typography>
          <Typography variant="li">
            Par email à l’adresse :{' '}
            <Link
              href="mailto:contact@unlcoaching.com"
              className="text-blue-500 hover:underline"
            >
              contact@unlcoaching.com
            </Link>
          </Typography>
        </ul>
      </section>

      <hr className="my-6" />

      {/* Définitions */}
      <section className="mb-8">
        <Typography variant="h2" className="mb-4 text-2xl font-semibold">
          DÉFINITIONS
        </Typography>
        <Typography variant="p" className="mb-4">
          Les termes assortis d’une majuscule renvoient aux définitions suivantes :
        </Typography>
        <ul className="ml-6 list-disc space-y-2">
          <Typography variant="li">
            <strong>Société :</strong> désigne Coach Jeremy Prat, représentée par Emeric Le Saec, en sa qualité de chef d’entreprise, dont le siège social est situé à Dubai Silicon Oasis, DDP, Building A2, Dubai, United Arab Emirates.
          </Typography>
          <Typography variant="li">
            <strong>Site :</strong> désigne le(s) site(s) internet accessible(s) à partir du lien URL :{' '}
            <Link
              href="https://unlcoaching.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              https://unlcoaching.com
            </Link>.
          </Typography>
          <Typography variant="li">
            <strong>Utilisateur :</strong> désigne toute personne naviguant sur le Site.
          </Typography>
          <Typography variant="li">
            <strong>Service :</strong> désigne toutes les prestations de services disponibles à la Commande sur le Site, notamment : conférence en ligne de type webinaire, formations en ligne, documents téléchargeables de type ebook, accompagnement personnalisé de type coaching, programmes d’entrainements personnalisés, accès à l’application Unlcoaching.
          </Typography>
          <Typography variant="li">
            <strong>Commande :</strong> désigne toute souscription d’un Service par le Client auprès de la Société via le Site.
          </Typography>
          <Typography variant="li">
            <strong>Client :</strong> désigne la personne physique ou morale, professionnelle ou non, souscrivant un Service auprès de la Société.
          </Typography>
          <Typography variant="li">
            <strong>Conditions Générales de Vente (CGV) :</strong> désignent les présentes conditions générales de vente, incluant la politique de confidentialité éventuellement disponible sur le Site et tout élément auquel elles renvoient expressément.
          </Typography>
          <Typography variant="li">
            <strong>Identifiants :</strong> désignent le nom d’utilisateur et le mot de passe fournis par la Société afin d’accéder au Service souscrit.
          </Typography>
          <Typography variant="li">
            <strong>Partenaire :</strong> désigne tout partenaire professionnel avec qui la Société entretient une relation d’affaires dans le cadre de la fourniture du Service.
          </Typography>
        </ul>
      </section>

      <hr className="my-6" />

      {/* Domaine d'application */}
      <section className="mb-8">
        <Typography variant="h2" className="mb-4 text-2xl font-semibold">
          DOMAINE D’APPLICATION
        </Typography>
        <ul className="ml-6 list-disc">
          <Typography variant="li">
            <strong>Objet :</strong> Les CGV régissent la fourniture du Service au Client, incluant les conditions d’utilisation du Site édité et mis à disposition par la Société.
          </Typography>
          <Typography variant="li">
            <strong>Accès aux CGV :</strong> Les CGV sont accessibles à tout moment sur le Site et prévalent sur toute autre version, antérieure ou à venir. Elles prennent effet à compter de leur date de mise à jour indiquée en tête des présentes.
          </Typography>
          <Typography variant="li">
            <strong>Acceptation des CGV :</strong> Avant toute Commande, le Client déclare avoir pris connaissance et accepté les CGV, reconnaissant ainsi l’adhésion sans réserve aux présentes.
          </Typography>
          <Typography variant="li">
            <strong>Portée des CGV :</strong> Le Client peut demander une copie des CGV applicables à sa Commande à tout moment.
          </Typography>
        </ul>
      </section>

      <hr className="my-6" />

      {/* Caractéristiques du service */}
      <section className="mb-8">
        <Typography variant="h2" className="mb-4 text-2xl font-semibold">
          CARACTÉRISTIQUES DU SERVICE
        </Typography>
        <ul className="ml-6 list-disc space-y-2">
          <Typography variant="li">
            <strong>Présentation :</strong> Le Client peut se reporter à la présentation du Service sur le Site, présentée dans la page de Commande et dans l’email de confirmation. Notez que toute offre de Service est susceptible d’évoluer.
          </Typography>
          <Typography variant="li">
            <strong>Langue :</strong> Le Service est fourni en langue française.
          </Typography>
          <Typography variant="li">
            <strong>Information sur les Services :</strong> Les Services sont décrits avec la plus grande exactitude possible. En cas d'erreur ou d'omission, la responsabilité de la Société ne saurait être engagée.
          </Typography>
          <Typography variant="li">
            <strong>Version et mises à jour :</strong> Le Service est fourni dans sa version à jour au moment de l’achat.
          </Typography>
          <Typography variant="li">
            <strong>Entretien téléphonique :</strong> Un entretien personnalisé et gratuit est proposé avant toute souscription d’un Service via le Site.
          </Typography>
          <Typography variant="li">
            <strong>Délivrance des modules :</strong> Pour une formation en ligne, la mise à disposition du premier module, session ou document constitue la livraison du Service commandé.
          </Typography>
          <Typography variant="li">
            <strong>Espaces de contribution et groupes en ligne :</strong> La Société peut mettre à disposition des groupes d’entraide ou espaces de contribution en ligne, accessibles via le Site ou des plateformes tierces.
          </Typography>
        </ul>
      </section>

      <hr className="my-6" />

      {/* Durée du service */}
      <section className="mb-8">
        <Typography variant="h2" className="mb-4 text-2xl font-semibold">
          DURÉE DU SERVICE
        </Typography>
        <ul className="ml-6 list-disc">
          <Typography variant="li">
            Le Service est fourni pendant la durée spécifiée sur le Site au moment de la Commande. Pour les contenus numériques, le Service reste accessible pendant au moins six mois après sa délivrance complète, sauf mention contraire.
          </Typography>
        </ul>
      </section>

      <hr className="my-6" />

      {/* Abonnements */}
      <section className="mb-8">
        <Typography variant="h2" className="mb-4 text-2xl font-semibold">
          ABONNEMENTS
        </Typography>
        <ul className="ml-6 list-disc">
          <Typography variant="li">
            L’abonnement est souscrit pour une durée minimale de 6 mois. La validation de la Commande implique un engagement ferme et irrévocable de régler le prix total du Service pour la période initiale d’abonnement.
          </Typography>
        </ul>
      </section>

      <hr className="my-6" />

      {/* Commande */}
      <section className="mb-8">
        <Typography variant="h2" className="mb-4 text-2xl font-semibold">
          COMMANDE
        </Typography>
        <ul className="ml-6 list-disc">
          <Typography variant="li">
            <strong>Commande sur le Site :</strong> Le Client sélectionne le Service désiré, renseigne ses coordonnées et les modalités de paiement sur la page de Commande. Il est responsable de l’exactitude des informations fournies.
          </Typography>
          <Typography variant="li">
            <strong>Obligation de paiement :</strong> Toute Commande est réputée ferme et définitive, entraînant l’acceptation pleine des CGV et l’obligation de paiement.
          </Typography>
          <Typography variant="li">
            <strong>Signature électronique :</strong> La validation de la Commande vaut acceptation expresse de toutes les opérations effectuées lors de la souscription.
          </Typography>
          <Typography variant="li">
            <strong>Confirmation de Commande :</strong> Le Client reçoit un email récapitulatif dès que le paiement est validé.
          </Typography>
          <Typography variant="li">
            <strong>Preuve de la transaction :</strong> Les registres informatisés de la Société constituent la preuve des transactions conclues.
          </Typography>
        </ul>
      </section>
    </SectionLayout>
  );
};

export default CvgPage;
