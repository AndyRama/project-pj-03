// pages/api/reservations.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const apiKey = process.env.CAL_API_KEY; // Vérifiez bien que votre clé est définie dans .env.local
  const calEndpoint = "https://api.cal.com/v1/reservations"; // Adaptez l’URL selon la documentation

  try {
    const response = await fetch(calEndpoint, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();
    // Si l’API renvoie { data: [...] }, on extrait la liste
    const reservations = data.data || data;
    res.status(200).json(reservations);
  } catch (error) {
    console.error("Erreur lors de la récupération des réservations :", error);
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des réservations" });
  }
}
