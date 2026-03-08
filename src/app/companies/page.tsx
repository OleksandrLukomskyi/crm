import React from 'react';
import Header from '@/src/components/header';
import Toolbar from '@/src/components/toolbar';
import SearchInput from '@/src/components/search-input';
import AddCompanyButton from '@/src/components/add-company-button';
import CompanyTable from '@/src/components/company-table';
import CompanyRow from '@/src/components/company-row';
import { Status } from '@/src/components/status-label';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <>
      <Header>Companies</Header>
      <main>
        <Toolbar action={<AddCompanyButton />}>
          <SearchInput />
        </Toolbar>
        <CompanyTable>
          <CompanyRow
            id={1}
            category="Products"
            company="Costco"
            status={Status.Pending}
            promotion={true}
            country="USA"
            joinedDate="02.19.2023"
          />
        </CompanyTable>
      </main>
    </>
  );
}
