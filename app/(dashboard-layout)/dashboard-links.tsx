import { LogoSvg } from "@/components/svg/Logo";
import type { NavigationLinkGroups } from "@/features/navigation/navigation.type";
import {
  LayoutDashboard,
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
    ],
  },

  {
    title: "Gestion Flux",
    links: [
      {
        title: "Articles",
        icon: <ListTodo />,
        url: "#",
      },
      {
        title: "FeedBack",
        icon: <FilePen />,
        url: "#",
      },
      {
        title: "Support",
        icon: <ClipboardX />,
        url: "#",
      },
    ],
  },
  {
    title: "Services",
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
  // {
  //   title: "Applications",
  //   links: [
  //     {
  //       title: "School-Unlcoaching",
  //       icon: <LogoSvg />,
  //       url: "https://www.unlcoaching.com",
  //     },
  //     {
  //       title: "Unlcoaching",
  //       icon: <LogoSvg />,
  //       url: "/",
  //     },
  //   ],
  // },
  {
    title: "Dashboard",
    links: [
      {
        title: "School-Unlcoaching",
        icon: <LogoSvg />,
        url: "https://www.unlcoaching.com",
      },
    ],
  },
];
