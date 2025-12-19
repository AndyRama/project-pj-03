

import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/features/page/layout";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth/helper";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Eye } from "lucide-react";

// Type étendu avec les informations utilisateur - correspond au retour de Prisma
type AlimentaireProfileWithUser = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  size: number;
  age: number;
  weight: number;
  profession: string | null;
  pathology: string | null;
  hoursActivityPerWeek: string | null;
  stepsPerWeek: string | null;
  leftArm: number | null;
  rightArm: number | null;
  glutes: number | null;
  leftThigh: number | null;
  rightThigh: number | null;
  shoulders: number | null;
  chest: number | null;
  waist: number | null;
  sleepHours: string | null;
  userId: string;
  user: {
    name: string | null;
    email: string | null;
  } | null;
};

// Fonction utilitaire pour tronquer le texte
const truncateText = (text: string | null, maxLength: number = 30): string => {
  if (!text) return "N/A";
  if (text.length <= maxLength) return text;
  return `${text.substring(0, maxLength)}...`;
};

export default async function AlimentairePlanPage() {
  // Vérification de l'authentification
  const user = await auth();
 
  if (!user?.id) {
    redirect("/auth/signin");
  }
  
  let profilesWithUsers: AlimentaireProfileWithUser[] = [];
 
  try {
    // Récupération des profils avec les données utilisateur
    profilesWithUsers = await prisma.alimentaireProfile.findMany({
      orderBy: {
        createdAt: 'desc'
      },
      include: {
        user: {
          select: {
            email: true,
            name: true,
          },
        },
      },
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des profils alimentaires:", error);
  }
    
  return (
    <div className="mx-auto p-4">
      <Layout>
        <LayoutHeader className="flex items-center justify-between">
          <LayoutTitle>Plan Alimentaire | Tableau des utilisateurs</LayoutTitle>
          <div className="text-sm text-muted-foreground">
            {profilesWithUsers.length} profil{profilesWithUsers.length > 1 ? 's' : ''}
          </div>
        </LayoutHeader>
        <LayoutContent>
          <div className="overflow-x-auto rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[150px]">Nom</TableHead>
                  <TableHead className="w-[200px]">Email</TableHead>
                  <TableHead className="w-[80px]">Âge</TableHead>
                  <TableHead className="w-[150px]">Profession</TableHead>
                  <TableHead className="w-[150px]">Pathologie</TableHead>
                  <TableHead className="w-[120px]">Activité/sem</TableHead>
                  <TableHead className="w-[120px]">Pas/sem</TableHead>
                  <TableHead className="w-[120px]">Sommeil</TableHead>
                  <TableHead className="w-[120px]">Date création</TableHead>
                  <TableHead className="w-[100px] text-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {profilesWithUsers.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={10} className="py-8 text-center text-gray-500">
                      Aucun profil alimentaire disponible
                    </TableCell>
                  </TableRow>
                ) : (
                  profilesWithUsers.map((profile) => (
                    <TableRow key={profile.id} className="hover:bg-muted/50">
                      <TableCell className="font-medium">
                        {truncateText(profile.user?.name || 'N/A', 20)}
                      </TableCell>
                      <TableCell>
                        {truncateText(profile.user?.email || 'N/A', 25)}
                      </TableCell>
                      <TableCell>{profile.age} ans</TableCell>
                      <TableCell>
                        {truncateText(profile.profession || 'N/A', 20)}
                      </TableCell>
                      <TableCell>
                        <span 
                          className="inline-block max-w-[150px] truncate"
                          title={profile.pathology || 'Aucune'}
                        >
                          {truncateText(profile.pathology || 'Aucune', 20)}
                        </span>
                      </TableCell>
                      <TableCell>{profile.hoursActivityPerWeek || 'N/A'}</TableCell>
                      <TableCell>{truncateText(profile.stepsPerWeek || 'N/A', 15)}</TableCell>
                      <TableCell>
                        <span 
                          className="inline-block max-w-[120px] truncate"
                          title={profile.sleepHours || 'N/A'}
                        >
                          {truncateText(profile.sleepHours || 'N/A', 15)}
                        </span>
                      </TableCell>
                      <TableCell>
                        {new Date(profile.createdAt).toLocaleDateString('fr-FR')}
                      </TableCell>
                      <TableCell className="text-center">
                        <Link href={`/admin/alimentaire/${profile.id}`}>
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="gap-2 hover:bg-orange-50 hover:text-orange-600"
                          >
                            <Eye className="h-4 w-4" />
                            Voir
                          </Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>

          {/* Statistiques rapides */}
          {profilesWithUsers.length > 0 && (
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border bg-card p-4">
                <div className="text-sm font-medium text-muted-foreground">
                  Total des profils
                </div>
                <div className="mt-2 text-2xl font-bold text-orange-600">
                  {profilesWithUsers.length}
                </div>
              </div>
              <div className="rounded-lg border bg-card p-4">
                <div className="text-sm font-medium text-muted-foreground">
                  Âge moyen
                </div>
                <div className="mt-2 text-2xl font-bold text-orange-600">
                  {Math.round(
                    profilesWithUsers.reduce((acc, p) => acc + p.age, 0) / 
                    profilesWithUsers.length
                  )} ans
                </div>
              </div>
              <div className="rounded-lg border bg-card p-4">
                <div className="text-sm font-medium text-muted-foreground">
                  Dernier ajout
                </div>
                <div className="mt-2 text-2xl font-bold text-orange-600">
                  {new Date(profilesWithUsers[0].createdAt).toLocaleDateString('fr-FR')}
                </div>
              </div>
            </div>
          )}
        </LayoutContent>
      </Layout>
    </div> 
  );
}