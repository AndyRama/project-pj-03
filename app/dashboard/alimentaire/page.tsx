import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

async function getAlimentaireData() {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.id) {
    return [];
  }

  const records = await prisma.alimentaire.findMany({
    where: {
      userId: session.user.id
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  return records;
}

export default async function DashboardAlimentaire() {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    redirect('/api/auth/signin');
  }

  const records = await getAlimentaireData();

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">Données Alimentaires</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prénom</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Taille</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Âge</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Poids</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {records.map((record) => (
              <tr key={record.id}>
                <td className="px-6 py-4 whitespace-nowrap">{record.lastName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{record.firstName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{record.size} cm</td>
                <td className="px-6 py-4 whitespace-nowrap">{record.age} ans</td>
                <td className="px-6 py-4 whitespace-nowrap">{record.weight} kg</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 