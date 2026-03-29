import React from 'react';
import StatCard, { StatCardType } from '@/src/components/stat-card';
import DashboardCard from '@/src/components/dashboard-card';
import { getSummaryCategories } from '@/src/lib/api';

export interface PageProps {}

export default async function Page({}: PageProps) {
  const data = await getSummaryCategories();

  return (
    <DashboardCard label="Categories of companies">
      <div className="grid grid-cols-12 gap-3 pb-5 px-5">
        {data.map(({ categoryId, categoryTitle, count }) => (
          <div key={categoryId} className="col-span-3">
            <StatCard
              type={StatCardType.Dark}
              label={categoryTitle}
              counter={count}
            />
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}
