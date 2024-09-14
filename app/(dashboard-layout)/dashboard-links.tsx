import type { NavigationLinkGroups } from "@/features/navigation/navigation.type";
import {
  LayoutDashboard,
  Settings,
  ChartPie,
  FilePen,
  TextSelect,
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
    title: "Statistique",
    links: [
      {
        title: "Users",
        icon: <ChartPie />,
        url: "/users",
      },
    ],
  },
  {
    title: "Services",
    links: [
      {
        title: "Plan alimentaire",
        icon: <TextSelect />,
        url: "/instructor",
      },
      {
        title: "Créer un cour",
        icon: <FilePen />,
        url: "/courses",
      },
    ],
  },
  {
    title: "Maintenance",
    links: [
      {
        title: "Support",
        icon: <MonitorSmartphone />,
        url: "https://www.unlcoaching.com",
      },
      {
        title: "FeedBack",
        icon: <MessageCircleMore />,
        url: "https://www.unlcoaching.com",
      },
    ],
  },
];
