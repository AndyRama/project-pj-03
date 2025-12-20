import { ReceiptEuro , TrendingUp , FilePen } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function InformationCards() {
  return (
    <div className="mt-4 flex w-full items-center gap-4 max-lg:flex-col lg:gap-8">
      <Card className="w-full flex-1">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4 pb-2">
          <CardTitle className="text-sm font-medium">Total abonnement [3 mois]</CardTitle>
          <ReceiptEuro  className="size-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">8</div>
          <p className="text-xs text-muted-foreground">
            +12.5% depuis le mois dernier
          </p>
        </CardContent>
      </Card>
      <Card className="w-full flex-1">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4 pb-2">
          <CardTitle className="text-sm font-medium">Total abonnement [6 mois]</CardTitle>
          <FilePen className="size-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+ 10</div>
          <p className="text-xs text-muted-foreground">+15.2% depuis le mois dernier</p>
        </CardContent>
      </Card>
      <Card className="w-full flex-1">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4 pb-2">
          <CardTitle className="text-sm font-medium">Total abonnement [12 mois]</CardTitle>
          <TrendingUp  className="size-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+ 8</div>
          <p className="text-xs text-muted-foreground">+5% pour le prochain mois</p>
        </CardContent>
      </Card>
    </div>
  );
}
