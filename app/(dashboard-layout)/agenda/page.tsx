import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
  LayoutActions,
} from "@/features/page/layout";

interface Reservation {
  id: string;
  title: string;
  date: string;
  clientName: string;
  // Ajoutez ici les autres propriétés selon la structure des données renvoyées par l'API Cal.com
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
        setReservations(data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
            {/* <h1>Mes Réservations</h1> */}
            {reservations.length > 0 ? (
              reservations.map((reservation) => (
                <div key={reservation.id}>
                  <h2>{reservation.title}</h2>
                  <p>Date: {reservation.date}</p>
                  <p>Client: {reservation.clientName}</p>
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
};
