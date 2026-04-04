import React from 'react';
import Toolbar from '@/src/components/toolbar';
import SearchInput from '@/src/components/search-input';
import AddCompanyButton from '@/src/components/add-company-button';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <Toolbar action={<AddCompanyButton />}>
      <SearchInput />
    </Toolbar>
  );
}
