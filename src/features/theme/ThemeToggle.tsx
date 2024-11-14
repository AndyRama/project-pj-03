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
      <Sun className="h-6 w-[1.3rem] dark:block" />
      <Moon className="hidden size-6 dark:hidden" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
