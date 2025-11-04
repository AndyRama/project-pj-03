import React from "react";

import { Typography } from "@/components/ui/typography";
import { SiteConfig } from "@/site-config";
import Image from "next/image";
import Link from "next/link";
import { BiSolidHeart } from "react-icons/bi";

export const FloatingLegalFooter: React.FC = () => {
  return (
    <div className="border-t-white-100 mb-2 border-t pt-2 text-center text-muted-foreground">
      <div className="mx-auto items-center text-center text-sm">
        <Typography variant="muted" className="italic">
          &copy; {new Date().getFullYear()}{" "}   
          <Link href="/" className="text-underline-offset-2 text-orange-500 underline">
            Unlcoaching{" "}
          </Link>
          Tous droits réservés. Crée avec{" "}
          <BiSolidHeart className="mx-1 inline-block text-red-400" />
          par{" "}
          <Link href="https://lemurian.vercel.app/" className="text-underline-offset-2 text-orange-500 underline">
            Andy Ramaroson
          </Link>
        </Typography>
      </div>

      <div className="fixed bottom-2 right-2 flex items-center gap-2">
        <Link
          className="text-xs text-muted-foreground hover:underline"
          href="/legal/terms"
        >
          Terms
        </Link>
        <Link
          className="text-xs text-muted-foreground hover:underline"
          href="/legal/cgv"
        >
          Cgv
        </Link>
        <Image src={SiteConfig.appIcon} width={12} height={12} alt="app icon" />
      </div>
    </div>
  );
};
