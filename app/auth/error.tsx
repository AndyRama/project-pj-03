"use client";

import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { logger } from "@/lib/logger";
import type { ErrorParams } from "@/types/next";
import { useEffect } from "react";
import { LogoSvg } from"@/components/svg/LogoSvg";

export default function RouteError({ error, reset }: ErrorParams) {
  useEffect(() => {
    // Log the error to an error reporting service
    logger.error(error);
  }, [error]);

  return (
    <Card>
      <CardHeader>
        <LogoSvg/>
        <CardTitle>
          Désolé, une erreur s'est produite. Veuillez réessayer ultérieurement.
        </CardTitle>
      </CardHeader>
      <CardFooter>
        <Button onClick={reset}>Essayer à nouveau</Button>
      </CardFooter>
    </Card>
  );
}
