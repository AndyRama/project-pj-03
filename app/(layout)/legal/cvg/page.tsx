import React from 'react';

const CvgPage = () => {
  return (
    <div className="mx-auto max-w-4xl p-6">
      {/* Header */}
      <header className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Conditions Générales de Vente</h1>
        <h4 className="text-xl font-medium text-gray-700">
          Vente en ligne – Services à distance
        </h4>
      </header>

      <hr className="my-6" />

      {/* Introduction */}
      <section className="mb-8">
        <p className="mb-4">
          Bienvenue et merci pour votre confiance. Vous trouverez ci-après les Conditions Générales de Vente applicables aux programmes Unlcoaching. Veuillez noter que Coach Jeremy Prat met à la disposition de ses Clients et des Utilisateurs de son site un service client qui peut être contacté selon les modalités suivantes :
        </p>
        <ul className="ml-6 list-disc">
          <li className="mb-2">
            Par téléphone : au +33646230279 (prix d’un appel local), de 9 heures à 20 heures du lundi au vendredi, heure de Paris.
          </li>
          <li className="mb-2">
            Par email à l’adresse :{' '}
            <a href="mailto:contact@unlcoaching.com" className="text-blue-500 hover:underline">
              contact@unlcoaching.com
            </a>
          </li>
        </ul>
      </section>

      <hr className="my-6" />

      {/* Définitions */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">DÉFINITIONS</h2>
        <p className="mb-4">
          Les termes assortis d’une majuscule renvoient aux définitions suivantes :
        </p>
        <ul className="ml-6 list-disc space-y-2">
          <li>
            <strong>Société :</strong> désigne Coach Jeremy Prat, représentée par Emeric Le Saec, en sa qualité de chef d’entreprise, dont le siège social est situé à Dubai Silicon Oasis, DDP, Building A2, Dubai, United Arab Emirates.
          </li>
          <li>
            <strong>Site :</strong> désigne le(s) site(s) internet accessible(s) à partir du lien URL :{' '}
            <a href="https://unlcoaching.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              https://unlcoaching.com
            </a>{' '}
            ; et l’ensemble des sites édités par la Société pour présenter et vendre ses Services.
          </li>
          <li>
            <strong>Utilisateur :</strong> désigne toute personne naviguant sur le Site.
          </li>
          <li>
            <strong>Service :</strong> désigne toutes les prestations de services disponibles à la Commande sur le Site, notamment : conférence en ligne de type webinaire, formations en ligne, documents téléchargeables de type ebook, accompagnement personnalisé de type coaching, programmes d’entrainements personnalisés, accès à l’application Unlcoaching.
          </li>
          <li>
            <strong>Commande :</strong> désigne toute souscription d’un Service par le Client auprès de la Société via le Site.
          </li>
          <li>
            <strong>Client :</strong> désigne la personne physique ou morale, professionnelle ou non, souscrivant un Service auprès de la Société.
          </li>
          <li>
            <strong>Conditions Générales de Vente (CGV) :</strong> désignent les présentes conditions générales de vente, incluant la politique de confidentialité éventuellement disponible sur le Site et tout élément auquel elles renvoient expressément.
          </li>
          <li>
            <strong>Identifiants :</strong> désignent le nom d’utilisateur et le mot de passe fournis par la Société afin d’accéder au Service souscrit.
          </li>
          <li>
            <strong>Partenaire :</strong> désigne tout partenaire professionnel avec qui la Société entretient une relation d’affaires dans le cadre de la fourniture du Service.
          </li>
        </ul>
      </section>

      <hr className="my-6" />

      {/* Domaine d'application */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">DOMAINE D’APPLICATION</h2>
        <p className="mb-4">
          <strong>Objet :</strong> Les CGV régissent la fourniture du Service au Client, incluant les conditions d’utilisation du Site édité et mis à disposition par la Société.
        </p>
        <p className="mb-4">
          <strong>Accès aux CGV :</strong> Les CGV sont accessibles à tout moment sur le Site et prévalent sur toute autre version, antérieure ou à venir. Elles prennent effet à compter de leur date de mise à jour indiquée en tête des présentes.
        </p>
        <p className="mb-4">
          <strong>Acceptation des CGV :</strong> Avant toute Commande, le Client déclare avoir pris connaissance et accepté les CGV, reconnaissant ainsi l’adhésion sans réserve aux présentes.
        </p>
        <p className="mb-4">
          <strong>Portée des CGV :</strong> Le Client peut demander une copie des CGV applicables à sa Commande à tout moment.
        </p>
      </section>

      <hr className="my-6" />

      {/* Caractéristiques du service */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">CARACTÉRISTIQUES DU SERVICE</h2>
        <p className="mb-4">
          <strong>Présentation :</strong> Le Client peut se reporter à la présentation du Service sur le Site, présentée dans la page de Commande et dans l’email de confirmation. Notez que toute offre de Service est susceptible d’évoluer.
        </p>
        <p className="mb-4">
          <strong>Langue :</strong> Le Service est fourni en langue française.
        </p>
        <p className="mb-4">
          <strong>Information sur les Services :</strong> Les Services sont décrits avec la plus grande exactitude possible. En cas d'erreur ou d'omission, la responsabilité de la Société ne saurait être engagée.
        </p>
        <p className="mb-4">
          <strong>Version et mises à jour :</strong> Le Service est fourni dans sa version à jour au moment de l’achat.
        </p>
        <p className="mb-4">
          <strong>Entretien téléphonique :</strong> Un entretien personnalisé et gratuit est proposé avant toute souscription d’un Service via le Site.
        </p>
        <p className="mb-4">
          <strong>Délivrance des modules :</strong> Pour une formation en ligne, la mise à disposition du premier module, session ou document constitue la livraison du Service commandé.
        </p>
        <p className="mb-4">
          <strong>Espaces de contribution et groupes en ligne :</strong> La Société peut mettre à disposition des groupes d’entraide ou espaces de contribution en ligne, accessibles via le Site ou des plateformes tierces.
        </p>
      </section>

      <hr className="my-6" />

      {/* Durée du service */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">DURÉE DU SERVICE</h2>
        <p className="mb-4">
          Le Service est fourni pendant la durée spécifiée sur le Site au moment de la Commande. Pour les contenus numériques, le Service reste accessible pendant au moins six mois après sa délivrance complète, sauf mention contraire.
        </p>
      </section>

      <hr className="my-6" />

      {/* Abonnements */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">ABONNEMENTS</h2>
        <p className="mb-4">
          L’abonnement est souscrit pour une durée minimale de 6 mois. La validation de la Commande implique un engagement ferme et irrévocable de régler le prix total du Service pour la période initiale d’abonnement.
        </p>
      </section>

      <hr className="my-6" />

      {/* Commande */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">COMMANDE</h2>
        <p className="mb-4">
          <strong>Commande sur le Site :</strong> Le Client sélectionne le Service désiré, renseigne ses coordonnées et les modalités de paiement sur la page de Commande. Il est responsable de l’exactitude des informations fournies.
        </p>
        <p className="mb-4">
          <strong>Obligation de paiement :</strong> Toute Commande est réputée ferme et définitive, entraînant l’acceptation pleine des CGV et l’obligation de paiement.
        </p>
        <p className="mb-4">
          <strong>Signature électronique :</strong> La validation de la Commande vaut acceptation expresse de toutes les opérations effectuées lors de la souscription.
        </p>
        <p className="mb-4">
          <strong>Confirmation de Commande :</strong> Le Client reçoit un email récapitulatif dès que le paiement est validé.
        </p>
        <p className="mb-4">
          <strong>Preuve de la transaction :</strong> Les registres informatisés de la Société constituent la preuve des communications, Commandes et paiements.
        </p>
      </section>

      <hr className="my-6" />

      {/* Conditions tarifaires */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">CONDITIONS TARIFAIRES</h2>
        <p className="mb-4">
          <strong>Tarifs applicables :</strong> Le Service est délivré aux tarifs en vigueur indiqués sur le Site lors de la Commande, en euros et TTC, incluant la TVA applicable.
        </p>
        <p className="mb-4">
          <strong>Exigibilité des sommes :</strong> La validation de la Commande rend exigibles toutes les sommes dues.
        </p>
        <p className="mb-4">
          <strong>Mode de paiement :</strong> Le Client dispose de l’ensemble des modes de paiement proposés par la Société.
        </p>
        <p className="mb-4">
          <strong>Prélèvement :</strong> Le paiement s’effectue par prélèvement SEPA ou via les informations de carte bancaire fournies.
        </p>
        <p className="mb-4">
          <strong>Autorisation de débit :</strong> En fournissant ses informations bancaires, le Client autorise la Société à débiter son compte pour le montant indiqué.
        </p>
        <p className="mb-4">
          <strong>Offres spéciales et bons de réduction :</strong> La Société se réserve la possibilité de proposer des offres promotionnelles ou des réductions sur ses Services.
        </p>
        <p className="mb-4">
          <strong>Incident de paiement – Fraude :</strong> En cas de refus d’autorisation de paiement ou de fraude, la Société se réserve le droit de suspendre le traitement de la Commande.
        </p>
      </section>

      <hr className="my-6" />

      {/* Droit de rétractation */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">DROIT DE RETRACTATION</h2>
        <p className="mb-4">
          <strong>Délai :</strong> Le Client peut se rétracter du contrat sans donner de motif dans un délai de quatorze jours calendaires à compter du lendemain de la Commande.
        </p>
        <p className="mb-4">
          <strong>Exercice :</strong> Pour exercer ce droit, le Client notifie sa décision à l’adresse{' '}
          <a href="mailto:contact@team-ricco.com" className="text-blue-500 hover:underline">
            contact@team-ricco.com
          </a> par une déclaration claire (lettre, télécopie ou email).
        </p>
      </section>

      <hr className="my-6" />

      {/* Modèle de formulaire de rétractation */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">MODÈLE DE FORMULAIRE DE RÉTRACTATION</h2>
        <p className="mb-4">
          Veuillez compléter et renvoyer le présent formulaire uniquement si vous souhaitez vous rétracter du contrat.
        </p>
        <p className="mb-4">
          A l’attention de Coach Ricco FZCO, basé à Dubai Silicon Oasis, DDP, Building A1, Dubai, United Arab Emirates, joignable au +33646230279 ou par email à l’adresse{' '}
          <a href="mailto:contact@team-ricco.com" className="text-blue-500 hover:underline">
            contact@team-ricco.com
          </a> :
        </p>
        <p className="mb-4">
          Je/nous () vous notifie/notifions () par la présente ma/notre () rétractation du contrat portant pour la prestation de services () ci-dessous :<br />
          Commandé le () :<br />
          Nom du (des) consommateur(s) :<br />
          Adresse du (des) consommateur(s) :<br />
          Signature du (des) consommateur(s) (uniquement en cas de notification sur papier) :<br />
          Date : ()<br />
          Rayez la mention inutile.
        </p>
        <p className="mb-4 font-bold text-red-600">
          ATTENTION, CE DROIT DE RÉTRACTATION NE POURRA PAS ÊTRE EXERCÉ SOUS CERTAINES CONDITIONS
        </p>
        <ul className="ml-6 list-disc">
          <li>
            Fourniture de services pleinement exécutés avant la fin du délai de rétractation, avec exécution commencée après accord exprès et renoncement au droit.
          </li>
          <li>
            Fourniture d’un contenu numérique non sur support matériel avec exécution commencée après accord exprès et renoncement au droit.
          </li>
          <li>
            Fourniture d’enregistrements audio ou vidéo ou de logiciels informatiques descellés après la livraison.
          </li>
          <li>
            Fourniture d’un journal, périodique ou magazine, sauf pour les contrats d’abonnement.
          </li>
          <li>
            Fourniture de biens confectionnés selon les spécifications du consommateur ou nettement personnalisés.
          </li>
          <li>
            Fourniture de prestations de services d’hébergement (hors hébergement résidentiel), de transport, de location de voitures, de restauration ou d’activités de loisirs à date déterminée.
          </li>
          <li>
            Lorsque le Client est un professionnel.
          </li>
          <li>
            Lorsque le contrat est conclu dans une finalité professionnelle.
          </li>
        </ul>
      </section>

      <hr className="my-6" />

      {/* Conditions d'accès */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">CONDITIONS D’ACCÈS AU SITE ET AU SERVICE</h2>
        <p className="mb-4">
          <strong>Accès au Site :</strong> Le Site est accessible gratuitement à toute personne disposant d’un accès Internet. Tous les frais liés à l’accès sont à la charge de l’Utilisateur.
        </p>
        <p className="mb-4">
          <strong>Accès au Service :</strong> La Société fournira les Identifiants permettant l’accès au Service après validation de la Commande.
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-8 text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Unlcoaching. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default CvgPage;
