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
  );
}