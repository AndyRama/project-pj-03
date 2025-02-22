import type { NavigationLinkGroups } from "@/features/navigation/navigation.type";
import {
  User2,
  LayoutDashboard,
  Settings,
  TextSelect,
  FilePen,
  MonitorSmartphone,
  MessageCircleMore,
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
        title: "Créer un cour",
        icon: <FilePen />,
        url: "/courses",
      },
      {
        title: "Créer un post",
        icon: <FilePen />,
        url: "/posts",
      },
    ],
  },
  {
    title: "Utilisateurs",
    links: [
      {
        title: "User",
        icon: <User2 />,
        url: "/users",
      },
    ]
  },
  {
    title: "Audience",
    links: [
      {
        title: "Subscribe",
        icon: <MonitorSmartphone />,
        url: "#",
      },
      {
        title: "FeedBack",
        icon: <MessageCircleMore />,
        url: "#",
      },
    ],
  },
];
