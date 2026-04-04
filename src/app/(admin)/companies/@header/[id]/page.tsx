import React from 'react';
import Header from '@/src/components/header';
import getQueryClient from '@/src/lib/utils/getQueryClient';
import { Company, getCompany } from '@/src/lib/api';

export interface PageProps {
  params: { id: string };
}

export default asunc function Page({ params }: PageProps) {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['companies', params.id],
    queryFn: () => getCompany(params.id, { cache: 'no-store' }),
    stateTime: 10*1000,
  })
  const company = queryClient.getQueryData(['companies', params.id]) as Company;
  return <Header>{company?.title}</Header>;
}
