import type { NavigationLinkGroups } from "@/features/navigation/navigation.type";
import { AlertCircle, Coins, User2, FileKey2, FileLock2, ArrowLeft, Sparkles } from "lucide-react";

export const ACCOUNT_LINKS: NavigationLinkGroups[] = [
  {
    title: "Informations Personnelles",
    links: [
      { 
        url: "/account",
        title: "Profile",
        icon: <User2 />
        
      },
      { 
        url: "/account/checkout",
        title: "Get Started",
        icon: <Sparkles />        
       },
      {
        url: "/account/delete",
        title: "Delete profile",
        icon: <AlertCircle />,
      },
      { 
        url: "/account/billing",
        title: "Billing",
        icon: <Coins />
       },
    ],
  },
  {
    title: "Mention légal",
    links: [
      { 
        url: "/account/cgv",
         title: "Cgv",
         icon: <FileKey2 />        
       },
      { 
        url: "/account/terms",
         title: "Terms",
         icon: <FileLock2 />
      },
    ],
  },
  {
    title: "",
    links: [
      { 
        url: "/",
        title: "Home",
        icon: <ArrowLeft />
      },
    ],
  },
];
