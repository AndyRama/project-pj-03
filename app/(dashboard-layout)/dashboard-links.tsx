import type { NavigationLinkGroups } from "@/features/navigation/navigation.type";
import { LayoutDashboard, Settings, User2 } from "lucide-react";

export const DASHBOARD_LINKS: NavigationLinkGroups[] = [
  {
    title: "Menu",
    links: [
      {
        title: "Tableau de bord",
        icon: <LayoutDashboard />,
        url: "/dashboard",
      },
      {
        title: "Paramètres",
        icon: <Settings />,
        url: "/settings",
      },
    ],
  },
  {
    title: "Utilisateurs",
    links: [
      {
        title: "Users",
        icon: <User2 />,
        url: "/users",
      },
    ],
  },
    {
    title: "Application",
    links: [
      {
        title: "School-unlcoaching.com",
        icon: <LayoutDashboard />,
        url: "#",
      },
    ],
  },
  {
    title: "Site Map",
    links: [
      {
        title: "Accueil",
        icon: <User2 />,
        url: "/",
      },
      {
        title: "Blog",
        icon: <User2 />,
        url: "/blog",
      },
      {
        title: "Contact",
        icon: <User2 />,
        url: "/contact",
      },
      {
        title: "Prestations",
        icon: <User2 />,
        url: "/prestations",
      },
      {
        title: "Team",
        icon: <User2 />,
        url: "/team",
      },
    ],
  },
];
