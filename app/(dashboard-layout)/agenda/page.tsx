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
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, FilterIcon, XIcon } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

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
  const [filteredReservations, setFilteredReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [debugInfo, setDebugInfo] = useState<string | null>(null);
  const [dateFilter, setDateFilter] = useState<Date | null>(null);
  const [calendarOpen, setCalendarOpen] = useState<boolean>(false);

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
        setFilteredReservations(data);
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

  // Filtrer les réservations selon la date sélectionnée
  useEffect(() => {
    if (!dateFilter) {
      setFilteredReservations(reservations);
      return;
    }

    const filterDay = new Date(dateFilter);
    filterDay.setHours(0, 0, 0, 0);
    
    const nextDay = new Date(filterDay);
    nextDay.setDate(nextDay.getDate() + 1);

    const filtered = reservations.filter(reservation => {
      const reservationDate = new Date(reservation.date);
      return reservationDate >= filterDay && reservationDate < nextDay;
    });

    setFilteredReservations(filtered);
  }, [dateFilter, reservations]);

  // Données de test pour vérifier l'affichage
  const useTestData = () => {
    const testData = [
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
      { 
        id: '3', 
        title: 'Bilan Trimestriel', 
        date: '2025-03-18T10:00:00Z', 
        clientName: 'Sophie',
        status: 'ACCEPTED',
        videoCallUrl: 'https://meet.google.com/abc-def-ghi',
      },
    ];
    setReservations(testData);
    setFilteredReservations(testData);
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

  // Effacer le filtre de date
  const clearDateFilter = () => {
    setDateFilter(null);
  };

  return (
    <div className="mx-auto p-4">
      <Layout>
        <LayoutHeader>
          <LayoutTitle>Agenda | Reservation</LayoutTitle>
        </LayoutHeader>
        <LayoutActions className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" onClick={useTestData}>Données test</Button>
          <Button variant="default" size="sm" onClick={fetchReservations}>Réessayer</Button>
          
          {/* Filtre par date */}
          <div className="ml-auto flex items-center gap-2">
            <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <FilterIcon className="size-4" />
                  {dateFilter ? (
                    format(dateFilter, "dd MMMM yyyy", { locale: fr })
                  ) : (
                    "Filtrer par date"
                  )}
                  <CalendarIcon className="ml-2 size-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="end">
              <Calendar
                mode="single"
                selected={dateFilter || undefined}
                onSelect={(date: Date | undefined) => {
                  setDateFilter(date || null);  // Conversion explicite de undefined à null
                  setCalendarOpen(false);
                }}
                initialFocus
              />
              </PopoverContent>
            </Popover>
            
            {dateFilter && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearDateFilter}
                className="flex size-8 items-center justify-center p-0"
              >
                <XIcon className="size-4" />
                <span className="sr-only">Effacer le filtre</span>
              </Button>
            )}
          </div>
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
              {dateFilter && (
                <div className="mb-4 rounded-md border border-blue-100 bg-blue-50 p-3">
                  <Typography variant="p" className="text-blue-800">
                    Affichage des rendez-vous du {format(dateFilter, "dd MMMM yyyy", { locale: fr })}
                    {filteredReservations.length === 0 && " - Aucun rendez-vous trouvé pour cette date"}
                  </Typography>
                </div>
              )}

              {filteredReservations.length > 0 ? (
                filteredReservations.map((reservation) => {
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
                        <Typography variant="p" className="mt-1 text-xs font-medium" 
                          style={{ 
                            color: reservation.status === 'ACCEPTED' ? 'green' : 
                                  reservation.status === 'CANCELLED' ? 'red' : 'orange' 
                          }}>
                          {reservation.status === 'ACCEPTED' ? 'Confirmé' : 
                           reservation.status === 'CANCELLED' ? 'Annulé' : 'En attente'}
                        </Typography>            
                      </div>

                      {/* Actions (Annuler / Modifier) */}
                      <div className="mt-1 flex gap-2 md:mt-0">
                        {reservation.status !== 'CANCELLED' && (
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => cancelReservation(reservation.id)}
                          >
                            Annuler
                          </Button>
                        )}
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