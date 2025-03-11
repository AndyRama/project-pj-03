"use client";

import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SignInButton } from "@/features/auth/SignInButton";
import { ContactSupportDialog } from "@/features/contact/support/ContactSupportDialog";
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
          Pour accéder à cette page, Vous devez être authentifié sur le site.
        </CardTitle>
      </CardHeader>
      <CardFooter>
        <SignInButton variant="invert" size="md" />
          <ContactSupportDialog>
            <Button variant="default" size="sm" className="ml-2">
              Support
            </Button>
          </ContactSupportDialog>
      </CardFooter>
    </Card>    
  );
}