"use client";

import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader } from "@/components/ui/loader";

// Type pour les données du plan alimentaire
type AlimentaireData = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  age: string;
  size: string;
  weight: string;
  createdAt: string;
};

const AlimentairePlanPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [alimentaireData, setAlimentaireData] = useState<AlimentaireData[]>([]);

  useEffect(() => {
    // Simuler un chargement des données depuis une API
    const fetchData = async () => {
      // Dans un cas réel, vous feriez un appel API ici
      // Exemple: const response = await fetch('/api/alimentaire-data');
      
      // Pour démonstration, nous utilisons des données simulées
      // À remplacer par votre appel API réel
      setTimeout(() => {
        const mockData: AlimentaireData[] = [
          {
            id: '1',
            email: 'john.doe@example.com',
            firstName: 'John',
            lastName: 'Doe',
            age: '35',
            size: '175',
            weight: '75',
            createdAt: new Date().toISOString(),
          },
          {
            id: '2',
            email: 'jane.smith@example.com',
            firstName: 'Jane',
            lastName: 'Smith',
            age: '28',
            size: '165',
            weight: '62',
            createdAt: new Date().toISOString(),
          },
          // Ajoutez d'autres données si nécessaire
        ];
        
        setAlimentaireData(mockData);
        setLoading(false);
      }, 1000);
    };

    fetchData();
  }, []);

  return (
    <div className="w-full">
      <Card>
        <CardHeader>
          <CardTitle>Plans Alimentaires</CardTitle>
          <CardDescription>
            Liste des plans alimentaires créés par les utilisateurs.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex items-center justify-center p-8">
              <Loader size={32} />
            </div>
          ) : (
            <Table>
              <TableCaption>Liste des plans alimentaires enregistrés</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Email</TableHead>
                  <TableHead>Prénom</TableHead>
                  <TableHead>Nom</TableHead>
                  <TableHead>Âge</TableHead>
                  <TableHead>Taille (cm)</TableHead>
                  <TableHead>Poids (kg)</TableHead>
                  <TableHead>Date de création</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {alimentaireData.length > 0 ? (
                  alimentaireData.map((data) => (
                    <TableRow key={data.id}>
                      <TableCell>{data.email}</TableCell>
                      <TableCell>{data.firstName}</TableCell>
                      <TableCell>{data.lastName}</TableCell>
                      <TableCell>{data.age}</TableCell>
                      <TableCell>{data.size}</TableCell>
                      <TableCell>{data.weight}</TableCell>
                      <TableCell>{new Date(data.createdAt).toLocaleDateString('fr-FR')}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center">
                      Aucun plan alimentaire n&apos;a été créé pour le moment.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AlimentairePlanPage;