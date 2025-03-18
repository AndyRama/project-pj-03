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

// Filtres de période disponibles
type PeriodFilter = '1day' | '3days' | '1week' | 'all';

export default function AgendaPage(): React.ReactElement {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [debugInfo, setDebugInfo] = useState<string | null>(null);
  const [periodFilter, setPeriodFilter] = useState<PeriodFilter>('all');

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
    // Générer des données de test pour une semaine
    const today = new Date();
    const testData: Reservation[] = [];
    
    // Ajouter des RDV pour aujourd'hui
    testData.push({ 
      id: '1', 
      title: 'Premier Rendez-vous - Coaching Sportif', 
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9, 0).toISOString(), 
      clientName: 'David',
      status: 'ACCEPTED',
      videoCallUrl: 'https://meet.google.com/abc-def-ghi',
    });
    
    testData.push({ 
      id: '2', 
      title: 'Deuxième Rendez-vous - Suivi Mensuel', 
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 14, 30).toISOString(), 
      clientName: 'Andy',
      status: 'ACCEPTED',
      videoCallUrl: 'https://meet.google.com/abc-def-ghi',
    });
    
    // Ajouter des RDV pour demain
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    testData.push({ 
      id: '3', 
      title: 'Session de Yoga', 
      date: new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), 10, 0).toISOString(), 
      clientName: 'Sophie',
      status: 'ACCEPTED',
      videoCallUrl: 'https://meet.google.com/jkl-mno-pqr',
    });
    
    // Ajouter des RDV pour dans 3 jours
    const day3 = new Date(today);
    day3.setDate(day3.getDate() + 3);
    testData.push({ 
      id: '4', 
      title: 'Bilan Trimestriel', 
      date: new Date(day3.getFullYear(), day3.getMonth(), day3.getDate(), 11, 15).toISOString(), 
      clientName: 'Thomas',
      status: 'ACCEPTED',
      videoCallUrl: 'https://meet.google.com/stu-vwx-yz',
    });
    
    // Ajouter des RDV pour dans 6 jours
    const day6 = new Date(today);
    day6.setDate(day6.getDate() + 6);
    testData.push({ 
      id: '5', 
      title: 'Coaching Nutrition', 
      date: new Date(day6.getFullYear(), day6.getMonth(), day6.getDate(), 16, 0).toISOString(), 
      clientName: 'Julie',
      status: 'ACCEPTED',
      videoCallUrl: 'https://meet.google.com/123-456-789',
    });

    setReservations(testData);
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

  // Filtrer les réservations en fonction de la période sélectionnée
  const getFilteredReservations = () => {
    const now = new Date();
    // Créer un objet Date pour minuit aujourd'hui
    const todayStart = new Date(now);
    todayStart.setHours(0, 0, 0, 0);
    
    const filteredReservations = reservations.filter(reservation => {
      const reservationDate = new Date(reservation.date);
      
      // Ne montrer que les réservations futures ou d'aujourd'hui
      if (reservationDate < todayStart) {
        return false;
      }
      
      switch (periodFilter) {
        case '1day': {
          // Aujourd'hui seulement
          const tomorrow = new Date(todayStart);
          tomorrow.setDate(tomorrow.getDate() + 1);
          return reservationDate >= todayStart && reservationDate < tomorrow;
        }
        case '3days': {
          // Aujourd'hui + 2 jours
          const threeDaysLater = new Date(todayStart);
          threeDaysLater.setDate(threeDaysLater.getDate() + 3);
          return reservationDate >= todayStart && reservationDate < threeDaysLater;
        }
        case '1week': {
          // Aujourd'hui + 6 jours
          const oneWeekLater = new Date(todayStart);
          oneWeekLater.setDate(oneWeekLater.getDate() + 7);
          return reservationDate >= todayStart && reservationDate < oneWeekLater;
        }
        case 'all':
        default:
          return true;
      }
    });

    // Trier par date croissante
    return filteredReservations.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  };

  // Grouper les réservations par jour
  const groupReservationsByDay = () => {
    const filteredReservations = getFilteredReservations();
    const grouped: { [key: string]: Reservation[] } = {};
    
    filteredReservations.forEach((reservation) => {
      const date = new Date(reservation.date);
      const dateKey = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
      
      if (!grouped[dateKey]) {
        grouped[dateKey] = [];
      }
      grouped[dateKey].push(reservation);
    });
    
    return grouped;
  };

  // Vérifier si une réservation est la prochaine à venir
  const isUpcomingReservation = (reservation: Reservation) => {
    const now = new Date();
    const reservationDate = new Date(reservation.date);
    
    // Si la réservation est aujourd'hui et n'est pas encore passée
    if (reservationDate.getDate() === now.getDate() && 
        reservationDate.getMonth() === now.getMonth() && 
        reservationDate.getFullYear() === now.getFullYear() && 
        reservationDate >= now) {
      
      // Trouver toutes les réservations d'aujourd'hui qui n'ont pas encore eu lieu
      const todaysUpcomingReservations = reservations
        .filter(r => {
          const rDate = new Date(r.date);
          return rDate.getDate() === now.getDate() && 
                 rDate.getMonth() === now.getMonth() && 
                 rDate.getFullYear() === now.getFullYear() && 
                 rDate >= now;
        })
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
      
      // C'est la prochaine réservation si c'est la première de la liste triée
      if (todaysUpcomingReservations.length > 0 && todaysUpcomingReservations[0].id === reservation.id) {
        return true;
      }
    }
    
    return false;
  };

  // Formater l'affichage de la date du jour
  const formatDayHeader = (dateKey: string) => {
    const [year, month, day] = dateKey.split('-').map(Number);
    const date = new Date(year, month, day);
    const today = new Date();
    
    const isToday = date.getDate() === today.getDate() && 
                    date.getMonth() === today.getMonth() && 
                    date.getFullYear() === today.getFullYear();
    
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long' 
    };
    
    const formattedDate = date.toLocaleDateString('fr-FR', options);
    
    return (
      <div className={`mb-2 mt-4 ${isToday ? 'text-orange-600 font-bold' : 'text-gray-700'}`}>
        <Typography variant="h3" className="text-lg">
          {isToday ? `Aujourd'hui - ${formattedDate}` : formattedDate}
        </Typography>
      </div>
    );
  };

  // Tronquer le titre s'il est trop long
  const truncateTitle = (title: string, maxLength: number = 40) => {
    return title.length > maxLength 
      ? title.substring(0, maxLength) + '...' 
      : title;
  };

  const groupedReservations = groupReservationsByDay();

  return (
    <div className="mx-auto p-4">
      <Layout>
        <LayoutHeader>
          <LayoutTitle>Agenda | Reservation</LayoutTitle>
        </LayoutHeader>
        
        <LayoutActions className="flex flex-col gap-2 sm:flex-row">
          <div className="flex gap-2">
            <Button 
              variant={periodFilter === '1day' ? 'default' : 'outline'} 
              size="sm" 
              onClick={() => setPeriodFilter('1day')}
            >
              1 jour
            </Button>
            <Button 
              variant={periodFilter === '3days' ? 'default' : 'outline'} 
              size="sm" 
              onClick={() => setPeriodFilter('3days')}
            >
              3 jours
            </Button>
            <Button 
              variant={periodFilter === '1week' ? 'default' : 'outline'} 
              size="sm" 
              onClick={() => setPeriodFilter('1week')}
            >
              1 semaine
            </Button>
            <Button 
              variant={periodFilter === 'all' ? 'default' : 'outline'} 
              size="sm" 
              onClick={() => setPeriodFilter('all')}
            >
              Tous
            </Button>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={useTestData}>Données test</Button>
            <Button variant="default" size="sm" onClick={fetchReservations}>Réessayer</Button>
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
            <div className="space-y-2">
              {Object.keys(groupedReservations).length > 0 ? (
                Object.entries(groupedReservations).map(([dateKey, dayReservations]) => (
                  <div key={dateKey}>
                    {formatDayHeader(dateKey)}
                    <div className="space-y-3">
                      {dayReservations.map((reservation) => {
                        const dateObj = new Date(reservation.date);
                        const heure = dateObj.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
                        const isUpcoming = isUpcomingReservation(reservation);

                        return (
                          <div
                            key={reservation.id}
                            className={`flex flex-col items-start justify-between rounded-md border ${isUpcoming ? 'border-orange-500 bg-orange-50' : 'border-gray-200'} bg-white p-4 shadow-sm md:flex-row md:items-center`}
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
                                {truncateTitle(reservation.title)}
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
                      })}
                    </div>
                  </div>
                ))
              ) : (
                <div className="rounded-md border border-gray-200 p-4">
                  <Typography variant="p" className="text-gray-500">
                    Aucune réservation trouvée pour cette période.
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