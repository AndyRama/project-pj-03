import React from 'react';
import Link from "next/link";
import { CalendarClock } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const BookingPage: React.FC = () => {
  return (
    <>
      <Card className="p-4">
        <CardHeader>
          <CardTitle className="mb-4 text-2xl font-bold">
            Prendre rendez-vous
          </CardTitle>
          <CardDescription>
            Welcome to the create Plan page. Here you can create and manage your plan alimentaire.
          </CardDescription>
          {/* Add more components or functionality for course creation here */}
        </CardHeader>
        <CardContent>
          <Link
            href={"https://cal.com/dr-sarah-johnson"}
            className={cn(
              buttonVariants({ size: "md", variant: "default" }),
              "text-white border hover:border-orange-500 hover:text-orange-500",
            )}
          >
            <CalendarClock size={20} className="mr-2 hover:bg-orange-500" />
            Prendre un rendez-vous visio
          </Link>

          {/* <Button
            variant="destructive"
            onClick={() => {
              enqueueDialog({
                title: "Prise de rendez-vous",
                description: "Vous allez être rediriger vers le calendrier de Jérémy Prat",
                action: {
                  label: "Prise de rendez-vous",
                  onClick: async () => {
                    redirect("https://cal.com/dr-sarah-johnson");

                  },
                },
              });
            }}
          /> */}
        </CardContent>
      </Card >
    </>
  );
};

export default BookingPage;