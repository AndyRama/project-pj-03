import { NextResponse } from "next/server";

// Mock data to use when the API is unavailable
const mockReservations = [
  { 
    id: '1', 
    title: 'Session de coaching personnel', 
    date: '2025-03-15T14:00:00Z', 
    clientName: 'Jean Dupont' 
  },
  { 
    id: '2', 
    title: 'Consultation de suivi', 
    date: '2025-03-16T10:30:00Z', 
    clientName: 'Marie Martin' 
  },
  { 
    id: '3', 
    title: 'Première évaluation', 
    date: '2025-03-18T16:00:00Z', 
    clientName: 'Thomas Bernard' 
  }
];

// Check if we should use mock data (temporarily true for development)
const USE_MOCK_DATA = false; // Set to false when API is working

export async function GET(): Promise<NextResponse> {
  // Use mock data for development/when API key issues exist
  if (USE_MOCK_DATA) {
    console.log("Using mock reservation data");
    return NextResponse.json(mockReservations);
  }

  const apiKey = process.env.CAL_API_KEY;
  const calEndpoint = "https://api.cal.com/v1/bookings";

  if (!apiKey) {
    console.error("CAL_API_KEY environment variable is not configured");
    console.log("Falling back to mock data");
    return NextResponse.json(mockReservations);
  }

  try {
    const response = await fetch(calEndpoint, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error(`Cal.com API error: ${response.status} ${response.statusText}`);
      console.log("Falling back to mock data");
      return NextResponse.json(mockReservations);
    }
    
    const data = await response.json();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const reservations = (data.data || []).map((item: { id: any; title: any; date: any; clientName: any; }) => ({
      id: item.id,
      title: item.title,
      date: item.date,
      clientName: item.clientName,
    }));
    
    return NextResponse.json(reservations);
  } catch (error) {
    console.error("Erreur lors de la récupération des réservations:", error);
    console.log("Falling back to mock data");
    return NextResponse.json(mockReservations);
  }
}