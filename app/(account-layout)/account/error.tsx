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
    <div className="flex h-screen w-full">
      {/* Empty side navigation */}
      <div className="w-1/5 bg-gray-100"></div>
      
      {/* Main content */}
      <div className="flex flex-1 items-center justify-center">
        <Card className="w-full max-w-md p-4">
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
      
      {/* Empty side navigation */}
      <div className="w-1/5 bg-gray-100"></div>
    </div>
  );
}