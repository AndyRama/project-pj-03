import { NextResponse } from "next/server";

interface CalApiResponse {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any[]; 
}

export async function GET(): Promise<NextResponse> {
  const apiKey = process.env.CAL_API_KEY;
  const calEndpoint = "https://api.cal.com/v1/reservations";

  if (!apiKey) {
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
      throw new Error(`Erreur API Cal.com: ${response.statusText}`);
    }

    const data: CalApiResponse = await response.json();
    const reservations = data.data || [];
    
    return NextResponse.json(reservations);
  } catch (error) {
    console.error("Erreur lors de la récupération des réservations :", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des réservations" },
      { status: 500 }
    );
  }
}