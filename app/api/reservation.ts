// pages/api/reservations.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const apiKey = process.env.CAL_API_KEY; // Assurez-vous d'ajouter votre clé API dans .env.local
  const calEndpoint = "https://api.cal.com/v1/reservations"; // Adaptez l’URL selon la doc de Cal.com

  try {
    const response = await fetch(calEndpoint, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Erreur lors de la récupération des réservations :", error);
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des réservations" });
  }
}
