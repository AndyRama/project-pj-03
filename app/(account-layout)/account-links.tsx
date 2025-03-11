import type { NavigationLinkGroups } from "@/features/navigation/navigation.type";
import { AlertCircle, Coins, User2, FileKey2, FileLock2, Carrot, Home, CalendarClock , BookCheck, Sparkles } from "lucide-react";

export const ACCOUNT_LINKS: NavigationLinkGroups[] = [
  {
    title: "",
    links: [
      { url: "/", title: "Home Page", icon: <Home /> },
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
      { url: "/account/booking", title: "Booking", icon: <CalendarClock /> },
      { url: "/account/bilan", title: "Bilan", icon: <BookCheck /> },
    ],
  },
  {
    title: "Services",
    links: [
      { url: "/account/checkout", title: "Welcom", icon: <Sparkles /> },      
      { url: "/account/billing", title: "Billing", icon: <Coins /> },
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
