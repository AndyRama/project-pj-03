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

// Type pour le modèle AlimentaireProfile
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

const AlimentairePlanPage: React.FC = () => {
  // Tableau vide pour démonstration
  const profiles: AlimentaireProfile[] = [];

  return (
    <div className="mx-auto p-4">
      <Layout>
        <LayoutHeader>
          <LayoutTitle>Plan Alimentaire | Tableau des utilisateurs</LayoutTitle>
        </LayoutHeader>
        <LayoutActions className="flex gap-2">          
          <Button variant="outline" size="sm">Retour</Button>
          <Button variant="default" size="sm">Create</Button>
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
                          <Button variant="outline" size="sm">Modifier</Button>
                          <Button variant="destructive" size="sm">Supprimer</Button>
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
};

export default AlimentairePlanPage;