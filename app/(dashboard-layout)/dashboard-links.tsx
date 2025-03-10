import type { NavigationLinkGroups } from "@/features/navigation/navigation.type";
import {
  User2,
  LayoutDashboard,
  Settings,
  TextSelect,
  SlidersHorizontal,
  CalendarClock,
  } from "lucide-react";


export const DASHBOARD_LINKS: NavigationLinkGroups[] = [
  {
    links: [
      {
        title: "Tableau de bord",
        icon: <LayoutDashboard />,
        url: "/dashboard",
      },
    ],
  },
  {
    links: [
      {
        title: "Gestion",
        icon: <SlidersHorizontal />,
        url: "/setup",
      },
    ],
  },
  {
    title: "Services",
    links: [
      {
        title: "Agenda",
        icon: <CalendarClock />,
        url: "/agenda",
      },
      {
        title: "Plan alimentaire",
        icon: <TextSelect />,
        url: "/alimentaire",
      },
      {
        title: "Post",
        icon: <SlidersHorizontal />,
        url: "/setup",
      },
    ],
  },
  {
    title: "Utilisateur",
    links: [
      {
        title: "Paramètres",
        icon: <Settings />,
        url: "/settings",
      },
      {
        title: "Mon compte",
        icon: <User2 />,
        url: "/account",
      },
    ]
  },
];
