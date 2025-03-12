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
}

export default function AgendaPage(): React.ReactElement {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [debugInfo, setDebugInfo] = useState<string | null>(null);

  useEffect(() => {
    async function fetchReservations() {
      try {
        setLoading(true);
        setDebugInfo("Tentative de connexion à /api/agenda...");
        
        const res = await fetch("/api/agenda", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          cache: "no-store",
        });
        
        setDebugInfo(`Statut de la réponse: ${res.status} ${res.statusText}`);
        
        if (!res.ok) {
          let errorMessage = `Erreur ${res.status}: ${res.statusText}`;
          
          try {
            const errorData = await res.json();
            if (errorData?.error) {
              errorMessage = errorData.error;
            }
            setDebugInfo(`Détails d'erreur: ${JSON.stringify(errorData)}`);
          } catch (parseError) {
            setDebugInfo(`Impossible de parser l'erreur. Texte brut: ${await res.text()}`);
          }
          
          throw new Error(errorMessage);
        }
        
        const data = await res.json();
        setDebugInfo(`Données reçues: ${JSON.stringify(data).substring(0, 100)}...`);
        
        if (Array.isArray(data)) {
          setReservations(data);
        } else {
          setDebugInfo(`Format inattendu: ${typeof data}, contenu: ${JSON.stringify(data)}`);
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

  // Test data to verify rendering works
  const useTestData = () => {
    setReservations([
      { id: '1', title: 'Réservation test 1', date: '2025-03-10T10:00:00Z', clientName: 'Client Test' },
      { id: '2', title: 'Réservation test 2', date: '2025-03-15T14:30:00Z', clientName: 'Client Demo' }
    ]);
    setLoading(false);
    setError(null);
  };

  const formatReservationDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        return dateString;
      }
      return formatDate(date);
    } catch (error) {
      console.error("Erreur de formatage de date:", error);
      return dateString;
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
          <Button variant="secondary" size="sm" onClick={useTestData}>Données test</Button>
        </LayoutActions>
        <LayoutContent>
          {debugInfo && (
            <div className="mb-4 rounded border border-yellow-200 bg-yellow-50 p-3 font-mono text-sm">
              <Typography variant="p" className="text-yellow-800">Debug: {debugInfo}</Typography>
            </div>
          )}
          
          {loading ? (
            <div className="flex h-64 items-center justify-center">
              <p className="text-gray-500">Chargement...</p>
            </div>
          ) : error ? (
            <div className="rounded-md border border-red-200 bg-red-50 p-4">
              <Typography variant="p" className="text-red-500">{error}</Typography>
              <div className="mt-2">
                <Button variant="outline" size="sm" onClick={() => setError(null)}>Réessayer</Button>
              </div>
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