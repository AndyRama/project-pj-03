import type { NavigationLinkGroups } from "@/features/navigation/navigation.type";
import { AlertCircle, Coins, Mail, User2, FileKey2, FileLock2, Carrot, ListTodo } from "lucide-react";

export const ACCOUNT_LINKS: NavigationLinkGroups[] = [
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
    title: "Mes services",
    links: [
      { url: "/account/alimentaire", title: "Plan alimentaire", icon: <Carrot  /> },
      // { url: "/account/courses", title: "Browse", icon: <Compass /> },
      // { url: "/account/leadboard", title: "LeadBoard", icon: <ListTodo /> },
    ],
  },
  {
    title: "Configuration",
    links: [
      { url: "/account/email", title: "Paramètres", icon: <Mail /> },
      { url: "/account/cgv", title: "Cgv", icon: <FileKey2 /> },
      { url: "/account/terms", title: "Terms", icon: <FileLock2 /> },
    ],
  },
];
