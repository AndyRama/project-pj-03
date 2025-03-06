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
        title: "Agenda",
        icon: <CalendarClock />,
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
      {
        title: "Gestion",
        icon: <SlidersHorizontal />,
        url: "/setup",
      },
    ]
  },
];
