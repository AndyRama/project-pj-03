import type { NavigationLinkGroups } from "@/features/navigation/navigation.type";
import {
  User2,
  LayoutDashboard,
  Settings,
  TextSelect,
  SlidersHorizontal,
  CalendarClock,
  BookOpen,
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
    title: "Ressources",
    links: [
      {
        title: "Courses",
        icon: <BookOpen />,
        url: "/courses",
      },
      {
        title: "Article",
        icon: <BookOpen />,
        url: "/articles",
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
  {
    title: "Gestion application",
    links: [
      {
        title: "Gestion",
        icon: <SlidersHorizontal />,
        url: "/gestion",
      },
    ],
  },
];
