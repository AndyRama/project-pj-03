import type { NavigationLinkGroups } from "@/features/navigation/navigation.type";
import {
  User2,
  LayoutDashboard,
  Settings,
  TextSelect,
  FilePen,
  } from "lucide-react";


export const DASHBOARD_LINKS: NavigationLinkGroups[] = [
  {
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
    title: "Services",
    links: [
      {
        title: "Plan alimentaire",
        icon: <TextSelect />,
        url: "/alimentaire",
      },
      {
        title: "Créer un post",
        icon: <FilePen />,
        url: "/blog",
      },
    ],
  },
  {
    title: "Utilisateurs",
    links: [
      {
        title: "Utilisateurs",
        icon: <User2 />,
        url: "/users",
      },
      {
        title: "Mon compte",
        icon: <Settings />,
        url: "/account",
      },
    ]
  },
];
