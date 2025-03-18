import { NextRequest, NextResponse } from 'next/server';

// Fonction pour gérer les requêtes GET
export async function GET(request: NextRequest) {
  try {
    // Récupération des données depuis votre base de données ou autre source
    const reservations = [
      { 
        id: '1', 
        title: 'Premier Rendez-vous - Coaching Sportif', 
        date: '2025-03-10T09:00:00Z', 
        clientName: 'David',
        status: 'ACCEPTED',
        videoCallUrl: 'https://meet.google.com/abc-def-ghi',
      },
      // autres données...
    ];

    // Retourner les données en JSON
    return NextResponse.json(reservations);
  } catch (error) {
    console.error('Erreur lors de la récupération des réservations:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des réservations' },
      { status: 500 }
    );
  }
}

// Fonction pour gérer les requêtes PATCH (si nécessaire)
export async function PATCH(request: NextRequest) {
  try {
    const data = await request.json();
    // Logique pour mettre à jour une réservation
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur lors de la mise à jour de la réservation:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la mise à jour de la réservation' },
      { status: 500 }
    );
  }
}