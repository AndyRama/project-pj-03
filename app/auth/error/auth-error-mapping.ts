/**
 * Retrouvez toutes les erreurs ici : https://authjs.dev/reference/core/errors
 * Messages utilisateurs (UX friendly) pour chaque erreur.
 */
export const AUTH_ERRORS: Record<string, string> = {
  AccountNotLinked:
    "Votre adresse email est déjà utilisée avec un autre compte. Veuillez vous connecter avec le compte initialement associé à cette adresse.",
  AdapterError:
    "Un problème technique est survenu lors du traitement de votre demande. Veuillez réessayer plus tard.",
  AuthError:
    "Une erreur d’authentification est survenue. Veuillez réessayer ou contacter le support si le problème persiste.",
  AuthorizedCallbackError:
    "Nous n'avons pas pu vous connecter. Veuillez vérifier vos identifiants et réessayer.",
  CallbackRouteError:
    "La connexion a échoué en raison d’un problème technique. Veuillez réessayer ou contacter le support.",
  CredentialsSignin:
    "Identifiants incorrects. Veuillez vérifier vos informations et réessayer.",
  DuplicateConditionalUI:
    "Une erreur de configuration est survenue. Veuillez contacter le support.",
  EmailSignInError:
    "Un problème est survenu lors de la tentative de connexion avec votre email. Veuillez vérifier votre adresse et réessayer.",
  ErrorPageLoop:
    "Une erreur de configuration a empêché l’affichage correct de la page d’erreur. Veuillez contacter le support.",
  EventError:
    "Un problème technique est survenu lors du traitement de votre demande. Veuillez réessayer plus tard.",
  ExperimentalFeatureNotEnabled:
    "Cette fonctionnalité n’est pas disponible. Veuillez contacter le support pour plus d’informations.",
  InvalidCallbackUrl:
    "L’URL fournie est invalide. Veuillez réessayer avec une URL valide.",
  InvalidCheck:
    "Une vérification de sécurité a échoué. Veuillez réessayer ou contacter le support.",
  InvalidEndpoints:
    "Une erreur de configuration technique est survenue. Veuillez contacter le support.",
  InvalidProvider:
    "La méthode de connexion sélectionnée n’est pas prise en charge. Veuillez en choisir une autre ou contacter le support.",
  JWTSessionError:
    "Une erreur de session est survenue. Veuillez vous reconnecter.",
  MissingAdapter:
    "Une configuration technique est manquante. Veuillez contacter le support.",
  MissingAdapterMethods:
    "Une partie de la configuration est manquante. Veuillez contacter le support.",
  MissingAuthorize:
    "La méthode de connexion est mal configurée. Veuillez contacter le support.",
  MissingCSRF:
    "Une erreur de sécurité est survenue. Veuillez actualiser la page et réessayer.",
  MissingSecret:
    "Une erreur de configuration serveur est survenue. Veuillez contacter le support.",
  MissingWebAuthnAutocomplete:
    "Une erreur de configuration avec WebAuthn est survenue. Veuillez contacter le support.",
  OAuthAccountNotLinked:
    "Votre email est associé à un autre compte. Veuillez utiliser le compte d’origine.",
  OAuthCallbackError:
    "La connexion avec le service externe a échoué. Veuillez réessayer ou choisir une autre méthode de connexion.",
  OAuthProfileParseError:
    "Impossible de récupérer votre profil via le service externe. Veuillez réessayer ou contacter le support.",
  OAuthSignInError:
    "Un problème est survenu lors de la tentative de connexion. Veuillez réessayer ou contacter le support.",
  SessionTokenError:
    "Impossible de récupérer les informations de session. Veuillez vous reconnecter.",
  SignOutError:
    "Un problème est survenu lors de la déconnexion. Veuillez réessayer.",
  UnknownAction:
    "Cette action n’est pas prise en charge. Veuillez vérifier votre demande et réessayer.",
  UnsupportedStrategy:
    "Cette méthode de connexion n’est pas prise en charge. Veuillez en choisir une autre.",
  UntrustedHost:
    "La tentative de connexion provient d’une source non fiable. Veuillez vous assurer que vous accédez au site depuis un endroit sécurisé.",
  Verification:
    "La vérification a échoué. Veuillez vérifier votre email et votre jeton, puis réessayer.",
  WebAuthnVerificationError:
    "La vérification via WebAuthn a échoué. Veuillez réessayer ou utiliser une autre méthode d’authentification.",
};

export const getError = (errorCode: unknown) => {
  if (errorCode === undefined || errorCode === null) {
    return {
      error: undefined,
      errorMessage: undefined,
    };
  }

  const error = typeof errorCode === "string" ? errorCode : "AuthError";

  const errorMessage =
    AUTH_ERRORS[error] || "Une erreur inconnue est survenue. Veuillez réessayer plus tard.";

  return {
    error,
    errorMessage,
  };
};
