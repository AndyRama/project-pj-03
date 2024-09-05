import { LogoSvg } from "@/components/svg/Logo";
import type { NavigationLinkGroups } from "@/features/navigation/navigation.type";
import {
  LayoutDashboard,
  Settings,
  UsersRound,
  CircleDollarSign,
  Mails,
  FilePen,
  ClipboardX,
  ListTodo,
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
    title: "Dashboard Blog",
    links: [
      {
        title: "Tous les articles",
        icon: <ListTodo />,
        url: "#",
      },
      {
        title: "Create",
        icon: <FilePen />,
        url: "#",
      },
      {
        title: "Delete",
        icon: <ClipboardX />,
        url: "#",
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
    title: "Services",
    links: [
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
];
