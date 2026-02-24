import type { NavigationLinkGroups } from "@/features/navigation/navigation.type";
import {
  User2,
  LayoutDashboard,
  Settings,
  TextSelect,
  SlidersHorizontal,
  // CalendarClock,
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
        title: "Plan alimentaire",
        icon: <TextSelect />,
        url: "/alimentaire",
      },
    ],
  },
  {
    title: "Publications",
    links: [
      {
        title: "Plannig publication",
        icon: <BookOpen />,
        url: "/blog",
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
    ]
  },
  {
    title: "",
    links: [
      {
        title: "Mon compte",
        icon: <User2 />,
        url: "/account",
      },
    ]
  },
];
