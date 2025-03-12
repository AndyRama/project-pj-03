// app/api/reservations/route.ts
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const apiKey = process.env.CAL_API_KEY;
  const calEndpoint = "https://api.cal.com/v1/reservations";

  try {
    const response = await fetch(calEndpoint, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    
    // Si la réponse est structurée par exemple { data: [...] }
    const reservations = data.data || data;
    return NextResponse.json(reservations);
  } catch (error) {
    console.error("Erreur lors de la récupération des réservations :", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des réservations" },
      { status: 500 }
    );
  }
}