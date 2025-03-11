import React from 'react';
import Link from "next/link";
import { CalendarClock } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
Typography

import {
  Layout,
  LayoutContent,
} from "@/features/page/layout";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Typography } from '@/components/ui/typography';

const BookingPage: React.FC = () => {
  return (
    <>
      <div className="mx-auto p-4">
        <Layout>
          <LayoutContent>
            <Card className="p-4">
              <CardHeader>
                <CardTitle className="mb-4 text-3xl font-bold">
                  Prendre rendez-vous
                </CardTitle>
                <CardDescription>
                  <Typography variant="p">
                    Lors de cette première séance en visioconférence, nous allons établir ensemble les bases de votre programme personnalisé. Ce premier échange est
                    essentiel pour comprendre vos objectifs, votre mode de vie et vos besoins spécifiques afin de vous proposer un accompagnement adapté.
                  </Typography>
                  <ul>
                    Déroulement du Rendez-vous :
                    <li>
                      <Typography variant="p">
                       ✅ Bilan initial : Nous discuterons de votre niveau actuel, de vos antécédents sportifs et de vos éventuelles contraintes physiques.
                      </Typography>
                    </li>

                    <li>
                      <Typography variant="p">
                       ✅ Élaboration du plan alimentaire : En fonction de vos objectifs (perte de poids, prise de masse, tonification...), je vous proposerai des recommandations alimentaires adaptées et faciles à suivre.
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="p">
                       ✅ Planification des étapes du mois suivant : Nous mettrons en place un programme d'entraînement progressif et réaliste, avec des objectifs clairs à atteindre chaque semaine.
                      </Typography>
                       </li>
                    <li>
                      <Typography variant="p">
                       💡 L’objectif ? Vous donner toutes les clés pour réussir et progresser efficacement, avec un suivi personnalisé et des ajustements réguliers selon vos besoins.
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="p">
                        🚀 Prêt à démarrer ? Cette première séance est le point de départ de votre transformation physique et mentale !
                      </Typography>
                    </li>
                  </ul>                  
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="/account/checkout/booking/calendar"
                  className={cn(
                    buttonVariants({ size: "md", variant: "default" }),
                    "text-white border hover:border-orange-500 hover:text-orange-500",
                  )}
                >
                  <CalendarClock size={20} className="mr-2 hover:bg-orange-500" />
                  Programmer
                </Link>
              </CardContent>
            </Card >
          </LayoutContent>
        </Layout>
      </div>
    </>
  );
};

export default BookingPage;