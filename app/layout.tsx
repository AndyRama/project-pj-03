import { TailwindIndicator } from "@/components/utils/TailwindIndicator";
import { NextTopLoader } from "@/features/page/NextTopLoader";
import { getServerUrl } from "@/lib/server-url";
import { cn } from "@/lib/utils";
import { SiteConfig } from "@/site-config";
import type { LayoutParams } from "@/types/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import PlausibleProvider from "next-plausible";
import type { ReactNode } from "react";
import "./code-theme.scss";
import "./globals.scss";
import { Providers } from "./providers";
import { SessionProvider } from 'next-auth/react';

export const metadata: Metadata = {
  title: SiteConfig.title,
  description: SiteConfig.description,
  metadataBase: new URL(getServerUrl()),
};

export default function RootLayout({
  children,
  modal,
}: LayoutParams<{}> & { modal?: ReactNode }) {
  return (
    <>
      <html lang="en" className="h-full" suppressHydrationWarning>
        <head>
          <PlausibleProvider domain={SiteConfig.domain} />
        </head>
        <body
          suppressHydrationWarning
          className={cn(
            "h-full bg-background font-sans antialiased",
            GeistMono.variable,
            GeistSans.variable,
          )}
        >
          <SessionProvider>
            <Providers>
              <NextTopLoader
                delay={100}
                showSpinner={false}
                color="hsl(var(--primary))"
              />
              {children}
              {modal}
              <TailwindIndicator />
            </Providers>
          </SessionProvider>
        </body>
      </html>
    </>
  );
}
