import { prisma } from '@/lib/prisma';

async function getAlimentaireData() {
  const records = await prisma.alimentaire.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  return records;
}

export default async function DashboardAlimentaire() {
  const records = await getAlimentaireData();

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">Données Alimentaires</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Nom</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Prénom</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Taille</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Âge</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Poids</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {records.map((record) => (
              <tr key={record.id}>
                <td className="whitespace-nowrap px-6 py-4">{record.lastName}</td>
                <td className="whitespace-nowrap px-6 py-4">{record.firstName}</td>
                <td className="whitespace-nowrap px-6 py-4">{record.size} cm</td>
                <td className="whitespace-nowrap px-6 py-4">{record.age} ans</td>
                <td className="whitespace-nowrap px-6 py-4">{record.weight} kg</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 