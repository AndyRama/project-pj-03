import { LogoSvg } from "@/components/svg/Logo";
import type { NavigationLinkGroups } from "@/features/navigation/navigation.type";
import { LayoutDashboard, Settings, Earth, UsersRound, SquareRadical, Mailbox } from "lucide-react";

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
    title: "Utilisateurs",
    links: [
      {
        title: "Users",
        icon: <UsersRound />,
        url: "/users",
      },
      {
        title: "Campagne Email",
        icon: <Mailbox />,
        url: "#",
      },
    ],
  },
    {
    title: "Application",
    links: [
      {
        title: "School-Unlcoaching",
        icon: <LogoSvg />,
        url: "/unlcoaching.com",
      },
      {
        title: "Unlcoaching",
        icon: <LogoSvg />,
        url: "/",
      },      
    ],
  },
  {
    title: "Performance",
    links: [
      {
        title: "Performance",
        icon: <SquareRadical />,
        url: "#",
      },
      {
        title: "Co2",
        icon: <Earth />,
        url: "#",
      },  
    ],
  },
];
