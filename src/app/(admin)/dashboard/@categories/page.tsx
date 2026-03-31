import React from 'react';
import StatCard, { StatCardType } from '@/src/components/stat-card';
import DashboardCard from '@/src/components/dashboard-card';
import { getCategories, getCompanies } from '@/src/lib/api';
import getCountById from '@/src/lib/utils/getCountById';

export interface PageProps {}

export default async function Page({}: PageProps) {
  const categories = await getCategories();
  const companies = await getCompanies();
  const counts = getCountById(companies, 'categoryId');

  return (
    <DashboardCard label="Categories of companies">
      <div className="grid grid-cols-12 gap-3 pb-5 px-5">
        {categories.map(({ id, title }) => (
          <div key={id} className="col-span-3">
            <StatCard
              type={StatCardType.Dark}
              label={title}
              counter={count[id] || 0}
            />
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}
