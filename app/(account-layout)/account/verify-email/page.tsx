import { buttonVariants } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { prisma } from "@/lib/prisma";
import type { PageParams } from "@/types/next";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function RoutePage(props: PageParams<{}>) {
  const token =
    typeof props.searchParams.token === "string"
      ? props.searchParams.token
      : null;

  const success = props.searchParams.success === "true";

  if (success) {
    return (
      <Card className="p-4">
        <CardHeader>
          <CardTitle>Email verified</CardTitle>
        </CardHeader>
        <CardFooter>
          <Link className={buttonVariants()} href="/account">
            Account
          </Link>
        </CardFooter>
      </Card>
    );
  }

  if (!token) {
    return (
      <Card className="p-4" variant="error">
        <CardHeader>
          <CardTitle>Invalid Token</CardTitle>
        </CardHeader>
        <CardFooter>
          <Link className={buttonVariants()} href="/account">
            Account
          </Link>
        </CardFooter>
      </Card>
    );
  }

  const verificationToken = await prisma.verificationToken.findUnique({
    where: {
      token,
    },
  });

  const email = verificationToken?.identifier;

  if (!email) {
    return (
      <Card className="p-4" variant="error">
        <CardHeader>
          <CardTitle>Invalid token</CardTitle>
        </CardHeader>
        <CardFooter>
          <Link className={buttonVariants()} href="/account">
            Account
          </Link>
        </CardFooter>
      </Card>
    );
  }

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return (
      <Card className="p-4" variant="error">
        <CardHeader>
          <CardTitle>Utilisateur introuvable</CardTitle>
        </CardHeader>
        <CardFooter>
          <Link className={buttonVariants()} href="/account">
            Compte
          </Link>
        </CardFooter>
      </Card>
    );
  }

  if (user.emailVerified) {
    return (
      <Card className="p-4">
        <CardHeader>
          <CardTitle>Email verifier</CardTitle>
        </CardHeader>
        <CardFooter>
          <Link className={buttonVariants()} href="/account">
            Compte
          </Link>
        </CardFooter>
      </Card>
    );
  }

  await prisma.user.update({
    where: {
      email,
    },
    data: {
      emailVerified: new Date(),
    },
  });

  await prisma.verificationToken.delete({
    where: {
      token,
    },
  });

  redirect("/account/verify-email?success=true");
}
