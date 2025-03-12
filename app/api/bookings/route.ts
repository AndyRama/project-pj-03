import { NextResponse } from "next/server";

interface BookingItem {
  id: string;
  title: string;
  date: string;
  clientName: string;
  // Ajoutez d'autres champs si nécessaire en fonction de la réponse de l'API Cal.com
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

    // Lire le corps de la réponse une seule fois
    const responseBody = await response.text();

    if (!response.ok) {
      console.error(
        `Cal.com API error: ${response.status} ${response.statusText}`,
        responseBody
      );
      return NextResponse.json(
        { error: `Erreur API Cal.com: ${response.status} ${response.statusText}` },
        { status: response.status }
      );
    }

    // Parser la réponse JSON
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let data: any;
    try {
      data = JSON.parse(responseBody);
    } catch (parseError) {
      console.error("Erreur de parsing de la réponse API:", parseError);
      return NextResponse.json(
        { error: "Erreur de parsing de la réponse API" },
        { status: 500 }
      );
    }

    // Extraction sécurisée des bookings
    let bookings: BookingItem[] = [];
    if (Array.isArray(data)) {
      bookings = data;
    } else if (data && data.data) {
      // Si data.data n'est pas un tableau, tenter de le transformer en tableau
      if (Array.isArray(data.data)) {
        bookings = data.data;
      } else if (typeof data.data === "object") {
        bookings = Object.values(data.data);
      } else {
        console.error("data.data n'est ni un tableau ni un objet:", data.data);
        return NextResponse.json(
          { error: "Structure de réponse inattendue" },
          { status: 500 }
        );
      }
    } else {
      console.error("Structure de réponse non reconnue:", data);
      return NextResponse.json(
        { error: "Structure de réponse inattendue" },
        { status: 500 }
      );
    }

    // Transformation des données pour correspondre à votre interface Reservation
    const reservations = bookings.map((item: any) => ({
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
