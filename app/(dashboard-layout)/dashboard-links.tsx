import { LogoSvg } from "@/components/svg/Logo";
import type { NavigationLinkGroups } from "@/features/navigation/navigation.type";
import {
  LayoutDashboard,
  Settings,
  Earth,
  UsersRound,
  SquareRadical,
  CircleDollarSign,
  Mails,
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
    title: "Utilisateurs",
    links: [
      {
        title: "Users",
        icon: <UsersRound />,
        url: "/users",
      },
      {
        title: "Resend",
        icon: <Mails />,
        url: "https://www.resend.com",
      },
      {
        title: "Stripe",
        icon: <CircleDollarSign />,
        url: "https://www.resend.com",
      },
    ],
  },
  {
    title: "Application",
    links: [
      {
        title: "School-Unlcoaching",
        icon: <LogoSvg />,
        url: "https://www.unlcoaching.com",
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
        title: "LightHouse",
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
