import { headers } from 'next/headers';
import AddCompanyButton from '../components/add-company-button';

export default async function Home() {
  const h = await headers();
  console.log(Object.fromEntries(h.entries()));
  return (
    <main>
      <h1 className="text-xl">Home page {new Date().toTimeString()}</h1>

      <AddCompanyButton />
    </main>
  );
}
