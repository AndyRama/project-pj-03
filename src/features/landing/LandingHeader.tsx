"use client";

import { LogoSvg } from "@/components/svg/Logo";
import { SiteConfig } from "@/site-config";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";
import type { PropsWithChildren } from "react";
import { Sheet, SheetTrigger, SheetContent } from "../../components/ui/sheet";
import { Menu } from "react-feather";
import Link from "next/link";
// import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { AuthButtonClient } from "../auth/AuthButtonClient";

function useBoundedScroll(threshold: number) {
  const { scrollY } = useScroll();
  const scrollYBounded = useMotionValue(0);
  const scrollYBoundedProgress = useTransform(
    scrollYBounded,
    [0, threshold],
    [0, 1],
  );

  useEffect(() => {
    const onChange = (current: number) => {
      const previous = scrollY.getPrevious() ?? 0;
      const diff = current - previous;
      const newScrollYBounded = scrollYBounded.get() + diff;

      scrollYBounded.set(clamp(newScrollYBounded, 0, threshold));
    };

    const deleteEvent = scrollY.on("change", onChange);

    const listener = () => {
      const currentScroll = window.scrollY;
      onChange(currentScroll);
    };

    window.addEventListener("scroll", listener);

    return () => {
      deleteEvent();
      window.removeEventListener("scroll", listener);
    };
  }, [threshold, scrollY, scrollYBounded]);

  return { scrollYBounded, scrollYBoundedProgress };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function LandingHeader({ children }: PropsWithChildren) {
  const { scrollYBoundedProgress } = useBoundedScroll(400);
  const scrollYBoundedProgressDelayed = useTransform(
    scrollYBoundedProgress,
    [0, 0.75, 1],
    [0, 0, 1],
  );

  const topRoutes = [
    { path: "/", label: "Accueil" },
    { path: "/posts", label: "Blog" },
    { path: "/prestations", label: "Prestations" },
    { path: "/team", label: "Team" },
  ];

  return (
    <motion.header
      style={{
        height: useTransform(scrollYBoundedProgressDelayed, [0, 1], [80, 50]),
      }}
      className="fixed inset-x-0 z-50 flex h-20 w-screen shadow backdrop-blur-md"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-2 lg:px-8">
        <div className="flex items-center gap-1">
          <LogoSvg size={24} />
          <motion.p
            style={{
              scale: useTransform(
                scrollYBoundedProgressDelayed,
                [0, 1],
                [1, 0.9],
              ),
            }}
            className="flex origin-left items-center text-3xl font-bold text-orange-500"
          >
            {SiteConfig.title}
          </motion.p>
        </div>
        <motion.nav
          style={{
            opacity: useTransform(
              scrollYBoundedProgressDelayed,
              [0, 1],
              [1, 0],
            ),
          }}
          className="hidden items-center gap-4 text-sm font-medium sm:gap-4 lg:flex"
        >
          {topRoutes.map((route) => (
            <Link
              href={route.path}
              key={route.path}
              className="relative flex items-center"
            >
              {route.label}
            </Link>
          ))}
        </motion.nav>
        <div className="hidden lg:contents">
          {/* <Link href="/#concept">
            <Button
              size="sm"
              className="mr-4 border text-sm font-medium hover:border-orange-500 hover:text-[#FDAB04]"
            >
              Log In
            </Button>
          </Link> */}
          <AuthButtonClient />
        </div>

        <div className="z-20 flex items-center gap-2 px-4 lg:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="size-8" />
            </SheetTrigger>
            <SheetContent className="flex flex-col gap-4">
              <div className="relative flex flex-col gap-4">
                <div className="flex flex-row gap-1">
                  <LogoSvg size={12} />
                  <motion.p
                    style={{
                      scale: useTransform(
                        scrollYBoundedProgressDelayed,
                        [0, 1],
                        [1, 0.9],
                      ),
                    }}
                    className="flex origin-left items-center text-2xl font-bold text-orange-500"
                  >
                    {SiteConfig.title}
                  </motion.p>
                </div>
                <hr />
                <div className="flex flex-row items-center justify-around">
                  {/* <AuthButtonClient /> */}
                  <Typography
                    variant="h3"
                    className="text-left text-lg !leading-tight"
                  >
                    Menu Principal
                  </Typography>
                </div>
                <hr />
                {topRoutes.map((route) => (
                  <Link
                    href={route.path}
                    key={route.path}
                    className="relative text-left text-sm font-medium hover:text-[#FDAB04]"
                  >
                    {route.label}
                  </Link>
                ))}
              </div>
              {/* <hr /> */}
              {/* <Link href="/#concept">
                <Button
                  size="sm"
                  className="mr-4 border text-sm font-medium hover:border-orange-500 hover:text-[#FDAB04]"
                >
                  Rejoignez-nous !
                </Button>
              </Link> */}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}

const clamp = (number: number, min: number, max: number) =>
  Math.min(Math.max(number, min), max);
