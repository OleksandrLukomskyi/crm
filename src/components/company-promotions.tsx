'use client';

import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getPromotions } from '../lib/api';

export interface CompanyPromotinsProps {
  companyId: string;
}

export default function CompanyPromotions({
  companiId,
}: CompanyPromotinsProps) {
  const { data } = useQuery({
    queryKey: ['promotions', companyId],
    queryFn: () => getPromotions({ companiId }),
    staleTime: 10 * 1000,
  });
  return (
    <div className="grid grid-cols-12 gap-5">
      {data?.map((promotion) => (
        <div key={promotion.id} className="col-span-4">
          <Promotion promotion={promotion} />
        </div>
      ))}
    </div>
  );
}
