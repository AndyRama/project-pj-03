import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { AuthButton } from "@/features/auth/AuthButton";
import { SignInButton } from "@/features/auth/SignInButton";
import { UserDropdown } from "@/features/auth/UserDropdown";
import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/features/page/layout";
import { auth } from "@/lib/auth/helper";
import { SiteConfig } from "@/site-config";
import Image from "next/image";
import Link from "next/link";
import type { PropsWithChildren } from "react";
import { DesktopVerticalMenu } from "@/features/navigation/DesktopVerticalMenu";
import { MobileDropdownMenu } from "@/features/navigation/MobileDropdownMenu";
import { DASHBOARD_LINKS } from "./dashboard-links";
import { ContactSupportDialog } from "@/features/contact/support/ContactSupportDialog";

export const DashboardNavigation = async (props: PropsWithChildren) => {
  const user = await auth();

  return (
    <div className="flex h-full flex-col lg:flex-row lg:overflow-hidden">
      {/* Desktop ONLY Navigation bar */}
      <div className="flex size-full max-w-[240px] flex-col border-r border-border px-2 py-4 max-lg:hidden">
        <div className="flex items-center gap-2">
          <Image
            src={SiteConfig.appIcon}
            alt="app logo"
            width={24}
            height={24}
          />
          <Link href="/" className="text-xl font-bold">
            {SiteConfig.title}
          </Link>
        </div>
        <div className="h-10" />
        {user ? (
          <DesktopVerticalMenu links={DASHBOARD_LINKS} />
        ) : null}
        <div className="flex-1" />
        {user ? (
          <UserDropdown>
            <Button variant="outline" size="sm">
              <Avatar className="mr-2 size-6">
                <AvatarFallback>
                  {user.email ? user.email.slice(0, 2) : "??"}
                </AvatarFallback>
                {user.image && <AvatarImage src={user.image} />}
              </Avatar>
              <span className="max-lg:hidden">{user.name}</span>
            </Button>
          </UserDropdown>
        ) : null}
      </div>
      {/* Main container */}
      <div className="flex-1">
        {/* Header */}
        <header className="w-full border-b bg-background max-lg:sticky max-lg:top-0 max-lg:z-40">
          <div className="flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
            <div className="flex items-center gap-2 lg:hidden">
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
              <MobileDropdownMenu className="lg:hidden" links={DASHBOARD_LINKS} />
            </nav>
          </div>
        </header>

        {/* Content of the page */}
        <main className="py-4 lg:max-h-[calc(100vh_-_64px)] lg:flex-1 lg:overflow-auto lg:py-8">
          {user ? (
            props.children
          ) : (
            <Layout>
              <LayoutHeader>
                <LayoutTitle>
                  Désolé, vous devez être authentifié pour accéder à cette ressource.
                </LayoutTitle>
              </LayoutHeader>
              <LayoutContent className="flex gap-4">
                <SignInButton />
              </LayoutContent>
            </Layout>
          )}
        </main>
      </div >
    </div >
  );
};
