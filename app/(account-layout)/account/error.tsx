"use client";

import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SignInButton } from "@/features/auth/SignInButton";
import { logger } from "@/lib/logger";
import type { ErrorParams } from "@/types/next";
import { useEffect } from "react";

export default function RouteError({ error }: ErrorParams) {
  useEffect(() => {
    // Log the error to an error reporting service
    logger.error(error);
  }, [error]);

  return (
    <div className="flex size-full max-w-[240px] flex-col border-r border-border px-2 py-4 max-lg:hidden">
      <div className="flex items-center gap-2">
        <Card className="p-4">
          <CardHeader>
            <CardTitle>
              Vous devez être authentifié pour accéder à cette page.
            </CardTitle>
          </CardHeader>
          <CardFooter>
            <SignInButton variant="invert" size="md" />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
