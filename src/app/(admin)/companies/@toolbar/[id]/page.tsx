import React from 'react';
import Header from '@/src/components/header';
import Toolbar from '@/src/components/toolbar';
import AddPromotionButton from '@/src/components/add-promotion-button';
import SearchInput from '@/src/components/search-input';

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  return (
    <Toolbar action={<AddPromotionButton companyId={params.id} />}>
      <SearchInput />
    </Toolbar>
  );
}
