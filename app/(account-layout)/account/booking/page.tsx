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
           Lors de notre appel, nous ferons le point sur vos objectifs et votre plan alimentaire afin d'ajuster votre programme
           pour des résultats optimaux. Mon but est de vous accompagner avec des conseils personnalisés et adaptés à votre mode de vie.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link
            href="/account/booking/calendar"
            className={cn(
              buttonVariants({ size: "md", variant: "default" }),
              "text-white border hover:border-orange-500 hover:text-orange-500",
            )}
          >
            <CalendarClock size={20} className="mr-2 hover:bg-orange-500" />
            Programmer notre 1er Rdv
          </Link>
        </CardContent>
      </Card >
    </>
  );
};

export default BookingPage;