import { NextResponse } from "next/server";

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
  const calEndpoint = "https://api.cal.com/v2/bookings";

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

    // Read the response body just once
    const responseBody = await response.text();
    
    if (!response.ok) {
      console.error(`Cal.com API error: ${response.status} ${response.statusText}`, responseBody);
      return NextResponse.json(
        { error: `Erreur API Cal.com: ${response.status} ${response.statusText}` },
        { status: response.status }
      );
    }
    
    // Parse the JSON manually after reading the text
    let data: CalApiResponse;
    try {
      data = JSON.parse(responseBody);
    } catch (parseError) {
      console.error("Failed to parse API response:", parseError);
      return NextResponse.json(
        { error: "Erreur de parsing de la réponse API" },
        { status: 500 }
      );
    }
    
    // Transform the API response to match your Reservation interface
    const reservations = (data.data || []).map(item => ({
      id: item.id,
      title: item.title,
      date: item.date,
      clientName: item.clientName,
    }));
    
    return NextResponse.json(reservations);
  } catch (error) {
    console.error("Erreur lors de la récupération des réservations:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des réservations" },
      { status: 500 }
    );
  }
}