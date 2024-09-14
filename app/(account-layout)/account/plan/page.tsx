import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { requiredAuth } from "@/lib/auth/helper";
// import { PlanForm } from "./PlanForm";

export default async function PlanPage() {
  const user = await requiredAuth();

  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      <Card>
        <CardHeader>
          <CardTitle>Formulaire</CardTitle>
        </CardHeader>
        <CardContent>
          {/* <PlanForm defaultValues={user} /> */}
        </CardContent>
      </Card>
      
    </div>
  );
}