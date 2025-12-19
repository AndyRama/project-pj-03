import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
  LayoutDescription,
} from "@/features/page/layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth/helper";
import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, User, Activity, Ruler, Moon, Calendar } from "lucide-react";
import type { PageParams } from "@/types/next";

type AlimentaireDetailPageProps = PageParams<{
  profileId: string;
}>;

export default async function AlimentaireDetailPage({ 
  params 
}: AlimentaireDetailPageProps) {
  // Vérification de l'authentification
  const user = await auth();
 
  if (!user?.id) {
    redirect("/auth/signin");
  }

  const { profileId } = await params;
  
  // Récupération du profil avec les données utilisateur
  const profile = await prisma.alimentaireProfile.findUnique({
    where: {
      id: profileId,
    },
    include: {
      user: {
        select: {
          name: true,
          email: true,
          image: true,
        },
      },
    },
  });

  if (!profile) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl p-4">
      <Layout>
        <LayoutHeader>
          <div className="flex items-center gap-4">
            <Link href="/admin/alimentaire">
              <Button variant="outline" size="sm" className="gap-2">
                <ArrowLeft className="size-4" />
                Retour
              </Button>
            </Link>
            <div>
              <LayoutTitle>Détails du profil alimentaire</LayoutTitle>
              <LayoutDescription>
                Consulter les informations complètes du client
              </LayoutDescription>
            </div>
          </div>
        </LayoutHeader>

        <LayoutContent className="space-y-6">
          {/* Informations utilisateur */}
          <Card>
            <CardHeader className="border-b bg-orange-50">
              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-full bg-orange-600">
                  <User className="size-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-orange-600">
                    {profile.user?.name || 'Utilisateur'}
                  </CardTitle>
                  <CardDescription>{profile.user?.email || 'N/A'}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Âge</p>
                  <p className="mt-1 text-2xl font-bold">{profile.age} ans</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Profession</p>
                  <p className="mt-1 text-lg font-semibold">{profile.profession || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Date d'inscription</p>
                  <p className="mt-1 flex items-center gap-2 text-lg font-semibold">
                    <Calendar className="size-4" />
                    {new Date(profile.createdAt).toLocaleDateString('fr-FR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pathologie */}
          {profile.pathology && (
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-orange-600">Pathologie / Conditions médicales</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="whitespace-pre-wrap rounded-lg bg-orange-50 p-4 text-sm">
                  {profile.pathology}
                </p>
              </CardContent>
            </Card>
          )}

          {/* Activité physique */}
          <Card>
            <CardHeader className="border-b bg-blue-50">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-blue-600">
                  <Activity className="size-5 text-white" />
                </div>
                <CardTitle className="text-blue-600">Activité physique</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border p-4">
                  <p className="text-sm font-medium text-muted-foreground">
                    Heures d'activité par semaine
                  </p>
                  <p className="mt-2 text-xl font-bold text-blue-600">
                    {profile.hoursActivityPerWeek || 'N/A'}
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <p className="text-sm font-medium text-muted-foreground">
                    Pas par semaine
                  </p>
                  <p className="mt-2 text-xl font-bold text-blue-600">
                    {profile.stepsPerWeek || 'N/A'}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mensurations */}
          <Card>
            <CardHeader className="border-b bg-purple-50">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-purple-600">
                  <Ruler className="size-5 text-white" />
                </div>
                <CardTitle className="text-purple-600">Mensurations corporelles</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
                {profile.leftArm && <MeasurementCard label="Bras gauche" value={profile.leftArm} unit="cm" />}
                {profile.rightArm && <MeasurementCard label="Bras droit" value={profile.rightArm} unit="cm" />}
                {profile.shoulders && <MeasurementCard label="Épaules" value={profile.shoulders} unit="cm" />}
                {profile.chest && <MeasurementCard label="Poitrine" value={profile.chest} unit="cm" />}
                {profile.waist && <MeasurementCard label="Taille" value={profile.waist} unit="cm" />}
                {profile.glutes && <MeasurementCard label="Fessiers" value={profile.glutes} unit="cm" />}
                {profile.leftThigh && <MeasurementCard label="Jambe gauche" value={profile.leftThigh} unit="cm" />}
                {profile.rightThigh && <MeasurementCard label="Jambe droite" value={profile.rightThigh} unit="cm" />}
              </div>
              
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border bg-purple-50 p-4">
                  <p className="text-sm font-medium text-muted-foreground">Taille</p>
                  <p className="mt-2 text-2xl font-bold text-purple-600">
                    {profile.size} cm
                  </p>
                </div>
                <div className="rounded-lg border bg-purple-50 p-4">
                  <p className="text-sm font-medium text-muted-foreground">Poids</p>
                  <p className="mt-2 text-2xl font-bold text-purple-600">
                    {profile.weight} kg
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sommeil */}
          {profile.sleepHours && (
            <Card>
              <CardHeader className="border-b bg-indigo-50">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-indigo-600">
                    <Moon className="size-5 text-white" />
                  </div>
                  <CardTitle className="text-indigo-600">Habitudes de sommeil</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="whitespace-pre-wrap rounded-lg bg-indigo-50 p-4">
                  {profile.sleepHours}
                </p>
              </CardContent>
            </Card>
          )}

          {/* Dernière mise à jour */}
          <Card className="border-dashed">
            <CardContent className="pt-6">
              <p className="text-center text-sm text-muted-foreground">
                Dernière mise à jour le{' '}
                {new Date(profile.updatedAt).toLocaleDateString('fr-FR', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </CardContent>
          </Card>
        </LayoutContent>
      </Layout>
    </div>
  );
}

// Composant pour afficher une mesure
function MeasurementCard({ 
  label, 
  value, 
  unit 
}: { 
  label: string; 
  value: number; // Float est compatible avec number en TypeScript
  unit: string;
}) {
  return (
    <div className="rounded-lg border p-4 transition-all hover:border-purple-300 hover:shadow-md">
      <p className="text-xs font-medium text-muted-foreground">{label}</p>
      <p className="mt-1 text-lg font-bold text-purple-600">
        {value} <span className="text-sm font-normal">{unit}</span>
      </p>
    </div>
  );
}