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
    title: "Services",
    links: [
      {
        title: "Agenda visio",
        icon: <CalendarClock />,
        url: "/agenda",
      },
      {
        title: "Plan alimentaire",
        icon: <TextSelect />,
        url: "/alimentaire",
      },
    ],
  },
  {
    title: "Application",
    links: [
      {
        title: "Paramètres",
        icon: <Settings />,
        url: "/settings",
      },
      {
        title: "Gestion des services",
        icon: <SlidersHorizontal />,
        url: "/gestion",
      },
      {
        title: "Mon compte",
        icon: <User2 />,
        url: "/account",
      },
    ]
  },
];
