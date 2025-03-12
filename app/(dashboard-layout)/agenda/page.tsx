"use client";

import React from 'react';
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
import { formatDate } from "@/lib/format/date";

interface Reservation {
  id: string;
  title: string;
  date: string;
  clientName: string;
  // Add other properties as needed
}

export default function AgendaPage(): React.ReactElement {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchReservations() {
      try {
        setLoading(true);
        const res = await fetch("/api/agenda", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          // Include a cache-busting parameter
          cache: "no-store",
        });
        
        if (!res.ok) {
          const errorData = await res.json().catch(() => null);
          const errorMessage = errorData?.error || `Erreur ${res.status}: ${res.statusText}`;
          throw new Error(errorMessage);
        }
        
        const data = await res.json();
        
        // Ensure the data is in the expected format
        if (Array.isArray(data)) {
          setReservations(data);
        } else {
          console.error("Format de données inattendu:", data);
          throw new Error("Format de données inattendu");
        }
      } catch (err) {
        console.error("Erreur de chargement:", err);
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      } finally {
        setLoading(false);
      }
    }
    
    fetchReservations();
  }, []);

  // Function to safely format dates
  const formatReservationDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      // Check if date is valid before formatting
      if (isNaN(date.getTime())) {
        return dateString; // Return original string if date is invalid
      }
      return formatDate(date);
    } catch (error) {
      console.error("Erreur de formatage de date:", error);
      return dateString; // Fallback to original string on error
    }
  };

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
          {loading ? (
            <div className="flex h-64 items-center justify-center">
              <p className="text-gray-500">Chargement...</p>
            </div>
          ) : error ? (
            <div className="rounded-md border border-red-200 bg-red-50 p-4">
              <Typography variant="p" className="text-red-500">{error}</Typography>
            </div>
          ) : (
            <div className="space-y-4">
              {reservations.length > 0 ? (
                reservations.map((reservation) => (
                  <div key={reservation.id} className="rounded-md border bg-white p-4 shadow-sm">
                    <Typography variant="h2" className="text-lg font-medium">{reservation.title}</Typography>
                    <Typography variant="p" className="text-gray-600">
                      Date: {formatReservationDate(reservation.date)}
                    </Typography>
                    <Typography variant="p" className="text-gray-600">Client: {reservation.clientName}</Typography>
                  </div>
                ))
              ) : (
                <div className="rounded-md border border-gray-200 bg-gray-50 p-4">
                  <Typography variant="p" className="text-gray-500">Aucune réservation trouvée.</Typography>
                </div>
              )}
            </div>
          )}
        </LayoutContent>
      </Layout>
    </div>
  );
}