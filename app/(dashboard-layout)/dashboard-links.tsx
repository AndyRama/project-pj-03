import type { NavigationLinkGroups } from "@/features/navigation/navigation.type";
import {
  User2,
  LayoutDashboard,
  Settings,
  TextSelect,
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
    ],
  },
  {
    title: "Utilisateur",
    links: [
      {
        title: "Mon compte",
        icon: <User2 />,
        url: "/account",
      },
    ]
  },
];
