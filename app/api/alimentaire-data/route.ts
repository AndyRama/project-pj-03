import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import {prisma} from '@/lib/prisma';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    // Vérifiez si l'utilisateur est authentifié et a des droits d'administration
    if (!session || !session.user || !session.user.isAdmin) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
    }

    // Récupérer les données alimentaires de tous les utilisateurs
    const alimentaireData = await prisma.alimentaireProfile.findMany({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        age: true,
        size: true,
        weight: true,
        createdAt: true,
        user: {
          select: {
            email: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    // Formater les données pour le tableau
    const formattedData = alimentaireData.map((item: {
      id: string;
      firstName: string;
      lastName: string;
      age: number;
      size: number;
      weight: number;
      createdAt: Date;
      user: { email: string };
    }) => ({
      id: item.id,
      email: item.user.email,
      firstName: item.firstName,
      lastName: item.lastName,
      age: item.age.toString(),
      size: item.size.toString(),
      weight: item.weight.toString(),
      createdAt: item.createdAt.toISOString(),
    }));

    return NextResponse.json(formattedData);
  } catch (error) {
    console.error('Erreur lors de la récupération des données alimentaires:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des données' },
      { status: 500 }
    );
  }
}