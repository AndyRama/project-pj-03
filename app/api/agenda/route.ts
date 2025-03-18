// app/api/agenda/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { logger } from "@/lib/logger";

// Définir une interface pour les données de Cal.com
interface CalBooking {
  uid?: string;
  id?: string;
  title?: string;
  startTime?: string;
  date?: string;
  attendees?: Array<{ name: string }>;
  status?: string;
  videoCallUrl?: string;
  conferenceData?: {
    entryPoints?: Array<{ uri: string }>;
  };
}

export async function GET() {
  try {
    // First try to get reservations from our database
    const localReservations = await prisma.reservation.findMany({
      where: {
        status: {
          not: "CANCELLED"
        }
      },
      orderBy: {
        date: 'desc',
      },
    });
   
    // Also try to fetch from Cal.com if we have an API key
    let calReservations = [];
    const apiKey = process.env.CAL_API_KEY;
   
    if (apiKey) {
      try {
        const calEndpoint = "https://api.cal.com/v2/bookings";
        const response = await fetch(calEndpoint, {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json"
          }
        });
       
        if (response.ok) {
          const data = await response.json();
          // Process Cal.com data and convert to our format
          calReservations = (data.data || data).map((booking: CalBooking) => ({
            id: booking.uid || booking.id || "",
            title: booking.title || "Rendez-vous",
            date: new Date(booking.startTime || booking.date || Date.now()).toISOString(),
            clientName: booking.attendees?.[0]?.name || "Client",
            status: booking.status || "ACCEPTED",
            videoCallUrl: booking.videoCallUrl || booking.conferenceData?.entryPoints?.[0]?.uri || null,
          }));
        }
      } catch (calError) {
        logger.error("Error fetching from Cal.com", calError);
        // Continue with local reservations even if Cal.com fails
      }
    }
   
    // Combine and format all reservations
    const allReservations = [...localReservations, ...calReservations];
   
    // Transform all data to match the expected format
    const formattedReservations = allReservations.map(reservation => ({
      id: reservation.uid || reservation.id,
      title: reservation.title,
      date: reservation.date instanceof Date ? reservation.date.toISOString() : reservation.date,
      clientName: reservation.clientName,
      status: reservation.status,
      videoCallUrl: reservation.videoCallUrl,
    }));
   
    // Sort by date (most recent first)
    formattedReservations.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
   
    return NextResponse.json(formattedReservations);
  } catch (error) {
    logger.error("Error fetching reservations", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des réservations" },
      { status: 500 }
    );
  }
}