// app/api/agenda/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { logger } from "@/lib/logger";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await request.json();
    
    if (!body.status) {
      return NextResponse.json(
        { error: "Le statut est requis" },
        { status: 400 }
      );
    }
    
    // Mise à jour du statut de la réservation
    const updatedReservation = await prisma.reservation.update({
      where: {
        uid: id
      },
      data: {
        status: body.status
      }
    });
    
    return NextResponse.json(updatedReservation);
  } catch (error) {
    logger.error(`Error updating reservation ${params.id}`, error);
    return NextResponse.json(
      { error: "Erreur lors de la mise à jour de la réservation" },
      { status: 500 }
    );
  }
}