"use client";

import { useCompanies } from "../hooks/useCompanies";
import { CompanyCard } from "./components/CompanyCard";
import { Company } from "../types/company";

export default function Home() {
  const { companies, loading, error } = useCompanies();

  if (loading) return <div>loading...</div>
  if (error) return <div>error...</div>

  return (
    <main className='main'>
      <h1 className='h1-quartr-title'>Quartr</h1>
      <p className={'trending-title'}>Trending companies</p>
      {companies.map((company: Company) => (
        <CompanyCard key={company.companyId} company={company} />
      ))}
    </main>
  );
}
