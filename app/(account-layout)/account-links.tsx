import type { NavigationLinkGroups } from "@/features/navigation/navigation.type";
import { AlertCircle, Coins, Mail, User2, FileKey2, FileLock2, Carrot, ArrowLeft, TvMinimal } from "lucide-react";

export const ACCOUNT_LINKS: NavigationLinkGroups[] = [
  {
    title: "",
    links: [
      { url: "/", title: "Retour", icon: <ArrowLeft /> },
    ],
  },
  {
    title: "Information Personnelle",
    links: [
      { url: "/account", title: "Profile", icon: <User2 /> },
      {
        url: "/account/delete",
        title: "Delete profile",
        icon: <AlertCircle />,
      },
      { url: "/account/billing", title: "Billing", icon: <Coins /> },
    ],
  },
  {
    title: "Plan alimentaire",
    links: [
      { url: "/account/alimentaire", title: "Formulaire", icon: <Carrot /> },
      { url: "/account/booking", title: "visio", icon: <TvMinimal /> },
    ],
  },
  {
    title: "Plan alimentaire",
    links: [
      { url: "/account/alimentaire", title: "Formulaire", icon: <Carrot /> },
      { url: "/account/booking", title: "visio", icon: <TvMinimal /> },
    ],
  },
  {
    title: "Ressources",
    links: [
      { url: "/posts", title: "Mails", icon: <Mail /> },
      { url: "/prestations#E-Books", title: "visio", icon: <TvMinimal /> },
    ],
  },
  {
    title: "Mention légal",
    links: [
      { url: "/account/cgv", title: "Cgv", icon: <FileKey2 /> },
      { url: "/account/terms", title: "Terms", icon: <FileLock2 /> },
    ],
  },
];
