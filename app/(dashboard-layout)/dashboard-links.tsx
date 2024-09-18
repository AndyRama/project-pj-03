import type { NavigationLinkGroups } from "@/features/navigation/navigation.type";
import {
  LayoutDashboard,
  Settings,
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
    title: "Maintenance",
    links: [
      {
        title: "Support",
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
