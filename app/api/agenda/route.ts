// app/api/agenda/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { logger } from "@/lib/logger";

export async function GET() {
  try {
    const reservations = await prisma.reservation.findMany({
      where: {
        status: {
          not: "CANCELLED"
        }
      },
      orderBy: {
        date: 'asc',
      },
    });
    
    // Transformer les données pour correspondre exactement au format attendu par page Agenda existante
    const formattedReservations = reservations.map(reservation => ({
      id: reservation.uid,
      title: reservation.title,
      date: reservation.date.toISOString(),
      clientName: reservation.clientName,
    }));
    
    return NextResponse.json(formattedReservations);
  } catch (error) {
    logger.error("Error fetching reservations", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des réservations" },
      { status: 500 }
    );
  }
}