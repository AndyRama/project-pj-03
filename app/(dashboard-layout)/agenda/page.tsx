"use client";

import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
  LayoutActions,
} from "@/features/page/layout";
import { Typography } from "@/components/ui/typography";
import { formatDate } from "@/lib/format/date";
import Link from 'next/link';

interface Reservation {
  videoCallUrl: string;
  id: string;
  title: string;
  date: string;         
  clientName: string;   
  status: string;
}

export default function AgendaPage(): React.ReactElement {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [debugInfo, setDebugInfo] = useState<string | null>(null);

  const fetchReservations = async () => {
    try {
      setLoading(true);
      setError(null);
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
        const errorText = await res.text();
        setDebugInfo(`Réponse d'erreur: ${errorText}`);
        throw new Error(`Erreur ${res.status}: ${res.statusText}`);
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
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  // Données de test pour vérifier l'affichage
  const useTestData = () => {
    setReservations([
      { 
        id: '1', 
        title: 'Premier Rendez-vous - Coaching Sportif', 
        date: '2025-03-10T09:00:00Z', 
        clientName: 'David',
        status: 'ACCEPTED',
        videoCallUrl: 'https://meet.google.com/abc-def-ghi',
      },
      { 
        id: '2', 
        title: 'Deuxième Rendez-vous - Suivi Mensuel', 
        date: '2025-03-15T14:30:00Z', 
        clientName: 'Andy',
        status: 'ACCEPTED',
        videoCallUrl: 'https://meet.google.com/abc-def-ghi',
      },
    ]);
    setLoading(false);
    setError(null);
  };

  // Formatage de la date
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

  // Fonction pour annuler une réservation
  const cancelReservation = async (id: string) => {
    try {
      setDebugInfo(`Tentative d'annulation de la réservation ${id}...`);
      
      const res = await fetch(`/api/agenda/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "CANCELLED" }),
      });
      
      if (!res.ok) {
        throw new Error(`Erreur ${res.status}: ${res.statusText}`);
      }
      
      // Actualiser les réservations après annulation
      fetchReservations();
    } catch (err) {
      console.error("Erreur lors de l'annulation:", err);
      setError(err instanceof Error ? err.message : "Erreur lors de l'annulation");
    }
  };

  return (
    <div className="mx-auto p-4">
      <Layout>
        <LayoutHeader>
          <LayoutTitle>Agenda | Reservation</LayoutTitle>
        </LayoutHeader>
        <LayoutActions className="flex gap-2">
          <Button variant="outline" size="sm" onClick={useTestData}>Données test</Button>
          <Button variant="default" size="sm" onClick={fetchReservations}>Réessayer</Button>
        </LayoutActions>

        <LayoutContent>
          {debugInfo && (
            <div className="mb-4 rounded border border-yellow-200 bg-yellow-50 p-3 font-mono text-sm">
              <Typography variant="p" className="text-yellow-800">
                Debug: {debugInfo}
              </Typography>
            </div>
          )}

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
                reservations.map((reservation) => {
                  const dateObj = new Date(reservation.date);
                  const heure = dateObj.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });

                  return (
                    <div
                      key={reservation.id}
                      className="flex flex-col items-start justify-between rounded-md border border-orange-500 bg-white p-4 shadow-sm md:flex-row md:items-center"
                    >
                      {/* Bloc date/heure/Meet */}
                      <div className="mb-2 md:mb-0">
                        <Typography variant="p" className="text-sm font-semibold text-gray-900">
                          {formatReservationDate(reservation.date)}
                        </Typography>
                        <Typography variant="p" className="text-xs text-gray-500">
                          {heure} (Heure locale)
                        </Typography>
                        {reservation.videoCallUrl && (
                            <Link 
                              href={reservation.videoCallUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-2 inline-block text-sm">
                              <Button 
                                variant="outline" 
                                size="sm"
                                >
                                Rejoindre Google Meet
                              </Button>
                            </Link>
                        )}
                      </div>

                      {/* Bloc titre + description */}
                      <div className="ml-0 mt-1 md:mx-4 md:mt-0 md:flex-1">
                        <Typography variant="p" className="text-base font-medium text-gray-900">
                          {reservation.title}
                        </Typography>
                        <Typography variant="p" className="text-sm text-gray-600">
                          Personnalisé entre {reservation.clientName} et Jeremy Prat
                        </Typography>          
                      </div>

                      {/* Actions (Annuler / Modifier) */}
                      <div className="mt-1 flex gap-2 md:mt-0">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => cancelReservation(reservation.id)}
                        >
                          Annuler
                        </Button>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="rounded-md border border-gray-200 p-4">
                  <Typography variant="p" className="text-gray-500">
                    Aucune réservation trouvée.
                  </Typography>
                </div>
              )}
            </div>
          )}
        </LayoutContent>
      </Layout>
    </div>
  );
}