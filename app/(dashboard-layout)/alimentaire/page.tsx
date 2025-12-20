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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth/helper";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Eye, Users, Calendar, TrendingUp, Activity } from "lucide-react";
import type { Prisma } from "@prisma/client";

// Type pour le profil avec user
type ProfileWithUser = Prisma.AlimentaireProfileGetPayload<{
  include: {
    user: {
      select: {
        name: true;
        email: true;
      };
    };
  };
}>;

// Fonction utilitaire pour tronquer le texte
const truncateText = (text: string | null, maxLength: number = 30): string => {
  if (!text) return "N/A";
  if (text.length <= maxLength) return text;
  return `${text.substring(0, maxLength)}...`;
};

// Fonction pour calculer le nombre de profils créés cette semaine
const getProfilesThisWeek = (profiles: ProfileWithUser[]): number => {
  const now = new Date();
  const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  
  return profiles.filter(profile => 
    new Date(profile.createdAt) >= oneWeekAgo
  ).length;
};

// Fonction pour calculer la moyenne des heures d'activité
const getAverageActivity = (profiles: ProfileWithUser[]): string => {
  const profilesWithActivity = profiles.filter(p => p.hoursActivityPerWeek);
  
  if (profilesWithActivity.length === 0) return "N/A";
  
  // Extraction de la première valeur numérique trouvée dans la chaîne
  const totalHours = profilesWithActivity.reduce((acc, p) => {
    const match = p.hoursActivityPerWeek?.match(/\d+/);
    return acc + (match ? parseInt(match[0]) : 0);
  }, 0);
  
  return `${Math.round(totalHours / profilesWithActivity.length)}h`;
};

export default async function AlimentairePlanPage() {
  const user = await auth();
 
  if (!user?.id) {
    redirect("/auth/signin");
  }
  
  let profilesWithUsers: ProfileWithUser[] = [];
 
  try {
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
        <LayoutHeader>
          <LayoutTitle>Plan Alimentaire | Tableau des utilisateurs</LayoutTitle>
        </LayoutHeader>
        
        <LayoutContent>
          {/* Statistiques */}
          {profilesWithUsers.length > 0 && (
            <div className="mb-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-orange-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total des profils
                  </CardTitle>
                  <Users className="size-4 text-orange-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-600">
                    {profilesWithUsers.length}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Profils enregistrés
                  </p>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Cette semaine
                  </CardTitle>
                  <Calendar className="size-4 text-orange-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-600">
                    {getProfilesThisWeek(profilesWithUsers)}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Nouveaux profils
                  </p>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Âge moyen
                  </CardTitle>
                  <TrendingUp className="size-4 text-orange-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-600">
                    {Math.round(
                      profilesWithUsers.reduce((acc, p) => acc + p.age, 0) / 
                      profilesWithUsers.length
                    )} ans
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Moyenne d'âge
                  </p>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Activité moyenne
                  </CardTitle>
                  <Activity className="size-4 text-orange-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-600">
                    {getAverageActivity(profilesWithUsers)}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Par semaine
                  </p>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Tableau */}
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
                      <TableCell className="font-medium" title={profile.user?.name || 'N/A'}>
                        {truncateText(profile.user?.name || 'N/A', 20)}
                      </TableCell>
                      <TableCell title={profile.user?.email || 'N/A'}>
                        {truncateText(profile.user?.email || 'N/A', 25)}
                      </TableCell>
                      <TableCell>{profile.age} ans</TableCell>
                      <TableCell title={profile.profession || 'N/A'}>
                        {truncateText(profile.profession || 'N/A', 20)}
                      </TableCell>
                      <TableCell title={profile.pathology || 'Aucune'}>
                        {truncateText(profile.pathology || 'Aucune', 20)}
                      </TableCell>
                      <TableCell title={profile.hoursActivityPerWeek || 'N/A'}>
                        {truncateText(profile.hoursActivityPerWeek || 'N/A', 15)}
                      </TableCell>
                      <TableCell title={profile.stepsPerWeek || 'N/A'}>
                        {truncateText(profile.stepsPerWeek || 'N/A', 15)}
                      </TableCell>
                      <TableCell title={profile.sleepHours || 'N/A'}>
                        {truncateText(profile.sleepHours || 'N/A', 15)}
                      </TableCell>
                      <TableCell>
                        {new Date(profile.createdAt).toLocaleDateString('fr-FR')}
                      </TableCell>
                      <TableCell className="text-center">
                        <Link href={`/alimentaire/${profile.id}`}>
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="gap-2 hover:bg-orange-50 hover:text-orange-600"
                          >
                            <Eye className="size-4" />
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
        </LayoutContent>
      </Layout>
    </div> 
  );
}