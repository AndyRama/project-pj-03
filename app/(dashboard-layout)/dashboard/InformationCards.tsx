import { ReceiptEuro , TrendingUp , FilePen } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function InformationCards() {
  return (
    <div className="flex w-full items-center gap-4 max-lg:flex-col lg:gap-8">
      <Card className="w-full flex-1">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Ventes en ligne</CardTitle>
          <ReceiptEuro  className="size-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">184</div>
          <p className="text-xs text-muted-foreground">
            +12.5% depuis le mois dernier
          </p>
        </CardContent>
      </Card>
      <Card className="w-full flex-1">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">New subscribers</CardTitle>
          <FilePen className="size-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+ 128</div>
          <p className="text-xs text-muted-foreground">+5.2% depuis le mois dernier</p>
        </CardContent>
      </Card>
      {/* <Card className="w-full flex-1">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Impressions</CardTitle>
          <Activity className="size-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1211</div>
          <p className="text-xs text-muted-foreground">+22.5% depuis le mois dernier</p>
        </CardContent>
      </Card> */}
      <Card className="w-full flex-1">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Tendance ventes</CardTitle>
          <TrendingUp  className="size-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+ 46</div>
          <p className="text-xs text-muted-foreground">+25% pour le prochain mois</p>
        </CardContent>
      </Card>
    </div>
  );
}
