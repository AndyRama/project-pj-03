import { Button } from "@/components/ui/button";
import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
  LayoutActions,
} from "@/features/page/layout";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { auth } from "@/lib/auth/helper";
import { redirect } from "next/navigation";

// Type for AlimentaireProfile model
type AlimentaireProfile = {
  id: string;
  firstName: string;
  lastName: string;
  size: number;
  age: number;
  weight: number;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
};

export default async function AlimentairePlanPage() {
  // Check authentication
  const user = await auth();
  
  if (!user?.id) {
    redirect("/auth/signin");
  }

  // Fetch all alimentaire profiles
  let profiles: AlimentaireProfile[] = [];
  
  try {
    profiles = await prisma.alimentaireProfile.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
  } catch (error) {
    console.error("Error fetching alimentaire profiles:", error);
  }

  return (
    <div className="mx-auto p-4">
      <Layout>
        <LayoutHeader>
          <LayoutTitle>Plan Alimentaire | Tableau des utilisateurs</LayoutTitle>
        </LayoutHeader>
        <LayoutActions className="flex gap-2">          
          <Button variant="outline" size="sm" asChild>
            <Link href="/account">Retour</Link>
          </Button>
          <Button variant="default" size="sm" asChild>
            <Link href="/account/checkout/alimentaire">Créer un profil</Link>
          </Button>
        </LayoutActions>
        <LayoutContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Prénom</TableHead>
                  <TableHead>Nom</TableHead>
                  <TableHead>Taille (cm)</TableHead>
                  <TableHead>Âge</TableHead>
                  <TableHead>Poids (kg)</TableHead>
                  <TableHead>Date de création</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {profiles.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="py-6 text-center text-gray-500">
                      Aucun profil alimentaire disponible
                    </TableCell>
                  </TableRow>
                ) : (
                  profiles.map((profile) => (
                    <TableRow key={profile.id}>
                      <TableCell>{profile.firstName}</TableCell>
                      <TableCell>{profile.lastName}</TableCell>
                      <TableCell>{profile.size}</TableCell>
                      <TableCell>{profile.age}</TableCell>
                      <TableCell>{profile.weight}</TableCell>
                      <TableCell>{new Date(profile.createdAt).toLocaleDateString()}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Link href={`/account/checkout/alimentaire?id=${profile.id}`}>
                            <Button variant="outline" size="sm" asChild>
                              replanifier
                            </Button>
                          </Link>
                          <Button 
                            variant="destructive" 
                            size="sm"
                            onClick={() => { 
              
                            }}
                          >
                            Annuler
                          </Button>
                        </div>
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