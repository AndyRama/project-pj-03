import type { NavigationLinkGroups } from "@/features/navigation/navigation.type";
import { AlertCircle, Coins, BookOpenText, User2, FileKey2, FileLock2, Carrot, ArrowLeft, CalendarClock, StickyNote  } from "lucide-react";

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
    ],
  },
  {
    title: "Plan alimentaire",
    links: [
      { url: "/account/alimentaire", title: "Formulaire", icon: <Carrot /> },
    ],
  },
  {
    title: "Rendez-vous",
    links: [
      { url: "/account/booking", title: "booking", icon: <CalendarClock /> },
    ],
  },
  {
    title: "Ressources",
    links: [
      { url: "/posts", title: "Blog", icon: <StickyNote /> },
      { url: "/prestations#E-Books", title: "Ebook", icon: <BookOpenText  /> },
    ],
  },
  {
    title: "Mention légal",
    links: [
      { url: "/account/billing", title: "Billing", icon: <Coins /> },
      { url: "/account/cgv", title: "Cgv", icon: <FileKey2 /> },
      { url: "/account/terms", title: "Terms", icon: <FileLock2 /> },
    ],
  },
];
