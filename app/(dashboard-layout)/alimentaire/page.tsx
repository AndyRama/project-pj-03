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
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth/helper";
import { redirect } from "next/navigation";

// Base type for AlimentaireProfile model
type AlimentaireProfile = {
  id: string;
  size: number;
  age: number;
  weight: number;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
};

// Extended type that includes user information
type AlimentaireProfileWithUser = AlimentaireProfile & {
  user: {
    name: string | null;
    email: string | null;
  } | null;
};

export default async function AlimentairePlanPage() {
  // Check authentication
  const user = await auth();
 
  if (!user?.id) {
    redirect("/auth/signin");
  }
  
  // Initialize with appropriate type
  let profilesWithUsers: AlimentaireProfileWithUser[] = [];
 
  try {
    // Fetch profiles with user data
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
    console.error("Error fetching alimentaire profiles:", error);
  }
  
  return (
    <div className="mx-auto p-4">
      <Layout>
        <LayoutHeader>
          <LayoutTitle>Plan Alimentaire | Tableau des utilisateurs</LayoutTitle>
        </LayoutHeader>
        <LayoutContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nom complet</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Taille (cm)</TableHead>
                  <TableHead>Âge</TableHead>
                  <TableHead>Poids (kg)</TableHead>
                  <TableHead>Date de création</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {profilesWithUsers.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="py-6 text-center text-gray-500">
                      Aucun profil alimentaire disponible
                    </TableCell>
                  </TableRow>
                ) : (
                  profilesWithUsers.map((profile) => (
                    <TableRow key={profile.id}>
                      <TableCell>{profile.user?.name || 'N/A'}</TableCell>
                      <TableCell>{profile.user?.email || 'N/A'}</TableCell>
                      <TableCell>{profile.size}</TableCell>
                      <TableCell>{profile.age}</TableCell>
                      <TableCell>{profile.weight}</TableCell>
                      <TableCell>{new Date(profile.createdAt).toLocaleDateString()}</TableCell>
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