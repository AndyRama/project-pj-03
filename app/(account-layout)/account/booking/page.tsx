import React from 'react';
import Link from "next/link";
import { CalendarClock } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";
import { Card, CardHeader, CardContent } from '@/components/ui/card';


const BookingPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <Typography variant="h1" className="mb-4 text-2xl font-bold">
            Prendre rendez-vous
          </Typography>
          <Typography variant="p" >
            Welcome to the create Plan page. Here you can create and manage your plan alimentaire.
          </Typography>
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
        </CardContent>
      </Card >
    </div>
  );
};

export default BookingPage;