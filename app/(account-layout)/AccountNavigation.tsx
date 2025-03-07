import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Layout, } from "@/features/page/layout";
import { SiteConfig } from "@/site-config";
import Image from "next/image";
import Link from "next/link";
import type { PropsWithChildren } from "react";
import { DesktopVerticalMenu } from "../../src/features/navigation/DesktopVerticalMenu";
import { MobileDropdownMenu } from "../../src/features/navigation/MobileDropdownMenu";
import { ACCOUNT_LINKS } from "./account-links";
import { auth } from "@/lib/auth/helper";
import { ContactSupportDialog } from "@/features/contact/support/ContactSupportDialog";
import { AuthButton } from "@/features/auth/AuthButton";


export const AccountNavigation = async (props: PropsWithChildren) => {
  const user = await auth();

  return (
    <div className="flex min-h-full flex-col">
      <header className="w-full border-b bg-background max-lg:sticky max-lg:top-0 max-lg:z-40">
        <div className="flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex items-center gap-2">
            <Image
              src={SiteConfig.appIcon}
              alt="app logo"
              width={32}
              height={32}
            />
            <Link href="/" className="text-lg font-bold ">
              {SiteConfig.title}
            </Link>
          </div>
          <nav className="flex flex-1 items-center justify-end space-x-1">
            <ContactSupportDialog>
              <Button variant="default" size="sm" className="mr-4">
                Support
              </Button>
            </ContactSupportDialog>
            <AuthButton />
            <MobileDropdownMenu className="lg:hidden" links={ACCOUNT_LINKS} />
          </nav>
        </div>
      </header>
      {/* Desktop ONLY Navigation bar */}
      <Layout className="flex flex-row items-start gap-4">
        {user ? (
          <DesktopVerticalMenu links={ACCOUNT_LINKS} className="max-lg:hidden" />
        ) : <Separator className="max-lg:hidden" orientation="vertical" />}
        <Separator className="max-lg:hidden" orientation="vertical" />
        <main className="py-4 lg:max-h-[calc(100vh_-_64px)] lg:flex-1 lg:overflow-auto lg:py-8">

          {props.children}</main>
      </Layout>
    </div>
  );
};