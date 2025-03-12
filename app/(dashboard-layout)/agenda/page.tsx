"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
  LayoutActions,
} from "@/features/page/layout";
import { Typography } from "@/components/ui/typography";

interface Reservation {
  id: string;
  title: string;
  date: string;
  clientName: string;
  // Adaptez les propriétés selon la réponse de l'API Cal.com
}

export default function BookingPage() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchReservations() {
      try {
        const res = await fetch("/api/reservations");
        if (!res.ok) {
          throw new Error("Erreur lors de la récupération des réservations");
        }
        const data: Reservation[] = await res.json();
        console.log(data)
        setReservations(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchReservations();
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="mx-auto p-4">
      <Layout>
        <LayoutHeader>
          <LayoutTitle>Agenda | Reservation</LayoutTitle>
        </LayoutHeader>
        <LayoutActions className="flex gap-2">
          <Button variant="outline" size="sm">Retour</Button>
          <Button variant="default" size="sm">Create</Button>
        </LayoutActions>
        <LayoutContent>
          <div>
            {reservations.length > 0 ? (
              reservations.map((reservation) => (
                <div key={reservation.id}>
                  <Typography variant="h2">{reservation.title}</Typography>
                  <Typography variant="p">Date: {reservation.date}</Typography>
                  <Typography variant="p">Client: {reservation.clientName}</Typography>
                  {/* Affichez d'autres informations selon la structure réelle des données */}
                </div>
              ))
            ) : (
              <p>Aucune réservation trouvée.</p>
            )}
          </div>
        </LayoutContent>
      </Layout>
    </div>
  );
}
