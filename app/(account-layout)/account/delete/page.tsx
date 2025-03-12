"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { enqueueDialog } from "@/features/dialogs-provider/DialogProvider";
import { toast } from "sonner";
import { deleteAccountAction } from "./delete-account.action";

export default function DeleteProfilePage() {
  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle>Supression du compte</CardTitle>
        <CardDescription>
           La suppression de votre compte signifie que toutes vos données personnelles
           seront définitivement effacé et votre abonnement en cours sera résilié.
          Attention, cette action est irréversible.Un email sera envoyé . 
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          variant="destructive"
          size="sm"
          onClick={() => {
            enqueueDialog({
              title: "Delete your profile",
              description: "Are you sure you want to delete your profile?",
              action: {
                label: "Delete",
                onClick: async () => {
                  await deleteAccountAction();
                  toast.success("Your profile has been deleted.");
                },
              },
            });
          }}
        >
          Delete
        </Button>
      </CardContent>
    </Card>
  );
}
