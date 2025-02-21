import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { requiredAuth } from "@/lib/auth/helper";
import type { LayoutParams } from "@/types/next";
import { VerifyEmailButton } from "./verify-email/VerifyEmailButton";

export default async function RouteLayout(props: LayoutParams<{}>) {
  const user = await requiredAuth();

  const isEmailNotVerified = user.email && !user.emailVerified;
  
  return (
    <>
    {/* hidden when build page courses and formulaire */}

      {isEmailNotVerified ? (
        <Alert className="mb-4">
          <AlertTitle>Votre email n'est pas verifié</AlertTitle>
          <AlertDescription>
            Veuillez vérifier votre email pour accéder à votre compte.
          </AlertDescription>
          <VerifyEmailButton />
        </Alert>
      ) : null}
      {props.children}
    </>
  );
}
