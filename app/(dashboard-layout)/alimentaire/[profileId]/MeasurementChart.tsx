"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

type MeasurementChartProps = {
  leftArm?: number | null;
  rightArm?: number | null;
  shoulders?: number | null;
  chest?: number | null;
  waist?: number | null;
  glutes?: number | null;
};

export function MeasurementChart({ 
  leftArm, 
  rightArm, 
  shoulders, 
  chest, 
  waist, 
  glutes 
}: MeasurementChartProps) {
  // Données pour le graphique
  const chartData = [
    { name: 'Bras G', value: leftArm || 0 },
    { name: 'Bras D', value: rightArm || 0 },
    { name: 'Épaules', value: shoulders || 0 },
    { name: 'Poitrine', value: chest || 0 },
    { name: 'Taille', value: waist || 0 },
    { name: 'Fessiers', value: glutes || 0 },
  ].filter(item => item.value > 0);

  const COLORS = ['#f97316', '#fb923c', '#fdba74', '#fed7aa', '#ffedd5', '#fff7ed'];

  if (chartData.length === 0) {
    return (
      <div className="flex h-[200px] items-center justify-center text-sm text-muted-foreground">
        Aucune donnée disponible
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#f97316"
          dataKey="value"
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}