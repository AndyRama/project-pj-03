// app/api/webhooks/cal/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { logger } from "@/lib/logger";
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    logger.debug("Cal.com webhook received", body);
    
    // Traiter les différents types d'événements de Cal.com
    switch (body.triggerEvent) {
      case "BOOKING_CREATED":
      case "MEETING_ENDED":
        await handleBookingEvent(body);
        break;
      case "BOOKING_RESCHEDULED":
        await handleBookingRescheduled(body);
        break;
      case "BOOKING_CANCELLED":
        await handleBookingCancelled(body);
        break;
      default:
        logger.warn("Unknown Cal.com webhook event", body.triggerEvent);
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    logger.error("Error processing Cal.com webhook", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function handleBookingEvent(data: any) {
  try {
    await prisma.reservation.upsert({
      where: { uid: data.uid },
      update: {
        title: data.title,
        date: new Date(data.startTime),
        clientName: data.responses?.name || "Client",
        status: data.status,
        videoCallUrl: data.metadata?.videoCallUrl || null,
      },
      create: {
        uid: data.uid,
        title: data.title,
        date: new Date(data.startTime),
        clientName: data.responses?.name || "Client",
        status: data.status,
        videoCallUrl: data.metadata?.videoCallUrl || null,
      },
    });
    logger.info("Booking saved or updated", data.uid);
  } catch (error) {
    logger.error("Error saving booking", error);
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function handleBookingRescheduled(data: any) {
  try {
    await prisma.reservation.update({
      where: { uid: data.uid },
      data: {
        date: new Date(data.startTime),
        status: "RESCHEDULED",
      },
    });
    logger.info("Booking rescheduled", data.uid);
  } catch (error) {
    logger.error("Error updating booking", error);
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function handleBookingCancelled(data: any) {
  try {
    await prisma.reservation.update({
      where: { uid: data.uid },
      data: {
        status: "CANCELLED",
      },
    });
    logger.info("Booking cancelled", data.uid);
  } catch (error) {
    logger.error("Error cancelling booking", error);
  }
}