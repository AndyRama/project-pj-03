"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="light:hidden h-6 w-[1.3rem]" />
      <Moon className="light:block hidden size-6" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
