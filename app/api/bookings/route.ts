// Make sure this file is in the correct location:
// /app/api/agenda/route.ts

import { NextResponse } from "next/server";

// Define a more specific type for the Cal.com API response
interface CalApiResponse {
  data?: Array<{
    id: string;
    title: string;
    date: string;
    clientName: string;
    // Add other fields based on actual Cal.com API response
  }>;
}

export async function GET(): Promise<NextResponse> {
  const apiKey = process.env.CAL_API_KEY;
  
  // Use the correct endpoint from Cal.com documentation
  const calEndpoint = "https://api.cal.com/v1/bookings";

  if (!apiKey) {
    console.error("CAL_API_KEY environment variable is not configured");
    return NextResponse.json(
      { error: "CAL_API_KEY non configurée" },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(calEndpoint, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Cal.com API error: ${response.status} ${response.statusText}`, errorText);
      throw new Error(`Erreur API Cal.com: ${response.status} ${response.statusText}`);
    }

    const data: CalApiResponse = await response.json();
    
    // Transform the API response to match your Reservation interface
    const reservations = (data.data || []).map(item => ({
      id: item.id,
      title: item.title,
      date: item.date,
      clientName: item.clientName,
    }));
    
    return NextResponse.json(reservations);
  } catch (error) {
    console.error("Erreur lors de la récupération des réservations :", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des réservations" },
      { status: 500 }
    );
  }
}